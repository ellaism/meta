<!-- TITLE: OpenAlias Rest Api -->
<!-- SUBTITLE: Documentation for the Ellaism OpenAlias Rest Api -->

# OpenAlias Rest Api

The OpenAlias Rest Api (OAR) seeks to allow web application to take advantage of OpenAlias while we wait for DNSSec to be implemented everywhere.

[Get the code](https://github.com/stevemulligan/oar)

## Performing a Lookup

There is one main endpoint to perform lookups using an HTTP POST request:

`https://oar.outdoordevs.com/lookup`

The post data should be `application/x-www-form-urlencoded` and should consist of only a single parameter named "address" and it should contain the domain you want to lookup.

The response body will be a JSON object
```
{
   "payload": OBJECT,
   "signature": STRING
}
```
The signature field is signed with the servers private key. This field should be validated with a certificate in your client application. If the signature does not validate then the payload data should not be trusted and your application should report an error. 


### How to verify a signature

The message to validate will be the contents of the payload field converted to a JSON string with JSON.stringify()

The certificate for the endpoint at oar.outdoordevs.com is located [here](https://raw.githubusercontent.com/stevemulligan/oar/master/oar.crt) 


```
import axios from "axios";
let rsa = require('jsrsasign');

axios.post('/api/lookup', {address: address}).then((res) => {
   if (res.data.payload.status === 0) {
      let sig = new rsa.Signature({"alg": "SHA256withRSA"});
      sig.init(certificate); // contents of https://raw.githubusercontent.com/stevemulligan/oar/master/oar.crt
      sig.updateString(JSON.stringify(res.data.payload));
      let isValid = sig.verify(res.data.signature);
   }
});
```            

### Payload Object
```
{
   "status": INTEGER, // 0 means lookup was ok, otherwise there was an error
   "message": STRING, // if there was an error this will explain what happened
   "domain": STRING, // domain name that you are looking up
   "googledns": BOOLEAN, // must be true for result to be considered valid, app should show failure
   "dnssec_valid": BOOLEAN, // must be true otherwise DNSSec not working, app should show failure
   "records": ARRAY, // array of OpenAlias records
}
```

### OpenAlias Record Object
```
{
   "currency": STRING, // symbol of the currency in the record
   "domain": STRING, // domain name that you are looking up
   "txt": STRING, // raw TXT record in the DNS entry
   "properties": ARRAY, // array of OpenAlias Properties Objects
}
```

### OpenAlias Properties Object
```
{
   "STRING": "STRING" // key value pair to represent each property of an OpenAlias record
}
```

## Coin Info

The coin info end point returns a permanently cached results from CoinMarketCap api.  This is useful to get coin name and and icon.

`https://oar.outdoordevs.com/lookup`

The post data should be `application/x-www-form-urlencoded` and should consist of only a single parameter named "symbol" and it should contain a comma separated list of symbols that you want to lookup. Symbols that fail are ignored and not return in the response.

The response body is a json object that is an associative array keyed by coin's symbol and the value is an info object from CMC. The documentation for CMC's info endpoint is [here](https://pro.coinmarketcap.com/api/v1#operation/getV1CryptocurrencyInfo) 

```
{
 "BTC": {
   "id": 1,
   "name": "Bitcoin",
   "symbol": "BTC",
   "category": "coin",
   "slug": "bitcoin",
   "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
   "tags": [
      "mineable"
   ],
   "urls": {
      "website": [
         "https://bitcoin.org/"
      ],
      "explorer": [
         "https://blockchain.info/",
         "https://live.blockcypher.com/btc/",
         "https://blockchair.com/bitcoin/blocks"
      ],
      "source_code": [
         "https://github.com/bitcoin/"
      ],
      "message_board": [
         "https://bitcointalk.org"
      ],
      "chat": [ ],
      "announcement": [ ],
      "reddit": [
         "https://reddit.com/r/bitcoin"
      ],
      "twitter": [
         "https://twitter.com/Bitcoin"
      ]
   }
  }
}
```


## Running your own REST api

You can setup your own endpoint so that your client applications make requests to your own hardware. You'll want to add a json config file inside the config/ folder, or just edit the defaults.

```
{
  "app": {
    "key_file": "/etc/ssl/oar.key",
    "key_algo": "SHA256withRSA",
    "key_password": null,
    "port": 8044,
    "cmc_api_file": "/etc/ssl/oar_cmc.key"
  }
}
```

### CMC API Key

You'll need your own CoinmarketCap api key if you want to use the /info endpoint. Place the key in a file in a secure location where the server will be able to access it. Set the path in your config file to point to the location of this file.

### Generate Keys

If you want to run your own instance of the OpenAlias Rest Api then you need to generate some keys to use.

```
sudo openssl req -newkey rsa:2048 -nodes -keyout /etc/ssl/oar.key -x509 -days 365 -out /etc/ssl/oar.crt
```

```
writing new private key to '/etc/ssl/oar.key'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) []:CA
State or Province Name (full name) []:Ontario
Locality Name (eg, city) []:Ottawa
Organization Name (eg, company) []:Outdoor Devs
Organizational Unit Name (eg, section) []:OpenAlias Rest Api
Common Name (eg, fully qualified host name) []:oar.outdoordevs.com
Email Address []:support@outdoordevs.com
```

oar.key is used by the rest server to sign payload data. oar.crt is used by clients calling the REST api to verify the authenticity of the response.


## References Used

- https://openalias.org/#extend
- https://kjur.github.io/jsrsasign/
- https://kjur.github.io/jsrsasign/sample/sample-rsasign.html
- https://github.com/kjur/jsrsasign/wiki/Tutorial-for-Signature-class
- https://kjur.github.io/jsrsasign/api/symbols/KJUR.crypto.Signature.html
- https://developers.google.com/speed/public-dns/docs/dns-over-https
- https://wiki.parity.io/JSONRPC-personal-module#personal_sign
- https://wiki.parity.io/JSONRPC-personal-module#personal_ecrecover
- http://restify.com/docs/home
