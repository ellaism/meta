<!-- TITLE: Creating OpenAlias Records -->
<!-- SUBTITLE: A detailed description of how to create an OpenAlias Record -->

## Create TXT records for your currencies

### ORB - OpenAlias Record Builder

Use the [OpenAlias Record Builder](https://orb.outdoordevs.com/) to create your OpenAlias Records.  

![Orb](/uploads/tutorials/orb.png "Orb")

Choose a currency and enter your crypto address in the recipient address field. For Ethereum based currencies, you should also fill out the recipient_name and address_signature fields. The Signing Tool will use MetaMask to sign a message for you.  The message to sign should be the fully qualified domain that this record is for. eg: outdoordevs.com

On the DNS tab in Cloudflare, change the record type to TXT and enter your domain name into the **Name** field.  Then click on **Click to configure**

![Create TXT Record](/uploads/tutorials/step-6.png "Create TXT Record")

Copy/paste your OpenAlias record from the ORB into the value field.

![Copy/Pasta](/uploads/tutorials/step-7.png "Copy/Pasta")

**Don't forget to click "Add Record" after you are done.**


### Using other currencies

You can add as many of these TXT records as you like for other currencies.

oa1:btc recipient_address=1KCPjz2W4v4NsAX2GysR3nP9CPpMADdDqR; recipient_name=Outdoor Devs;

Just make sure you click "Add Record" in between each currency that you add.  You need a separate TXT record for each currency.


### Using email addresses

If you wanted to setup an email address instead, steve@outdoordevs.com for instance, OpenAlias clients will automatically convert the @ from the email address into a dot, and then peform the lookup on <a href="https://steve.outdoordevs.com">steve.outdoordevs.com</a>

So, you can create another TXT record but use **steve** in the name field instead of the domain name.  In this case, steve is being created a "subdomain" of outdoordevs.com.


### Additional settings for TXT records

The [official specifications](https://openalias.org/#extend) for OpenAlias list some additional settings that can be used in TXT records that your clients might want to support.

* recipient_name - Not required to be part of a valid OpenAlias record but it is recommend to have this. Clients might use this and display it to the user after looking up the record.

* tx_description - In case you have an address that will always be used for a specific reason, like donations for instance. A client that supports this field might take this data and display display it for the user, or store it for reference so the user can review it later.

* tx_amount - In case you have a recommended amount that you want to be filled in by default for each transaction to this address.  Clients should pre-populate transaction amounts with this value.

* tx_payment_id - This is particular to Monero, but is standardised as other cryptocurrencies (CryptoNote-based cryptocurrencies in particular) may find it useful. It is typically a hex string of 32 characters, but that is not enforced in the standard.  Ellaism TXT records do not have a practical application for this so Ella OA clients can safely ignore this field.

* address_signature - This is very good to have for additional security but takes some effort on both the person creating the TXT record and the client to verify this signature is correct. The signed message should consist of the entire FQDN (eg. donate.outdoordevs.com). The message should be signed with [eth_personal_sign](https://wiki.parity.io/JSONRPC-personal-module#personal_sign) using the address holders private key, and the result of this is the address_signature.  Clients can then verify the signers address with [ec_recover](https://wiki.parity.io/JSONRPC-personal-module#personal_ecrecover)  This is the best safeguard against attacks.  ELLA OA Providers should allow people sign their TXT records and OA Consumers (clients) should make the effort to verify record using this.

* checksum - It has to appear as the last item in the TXT record, otherwise the record is open to manipulation. Depending on your use-case, it may serve little or no purpose, although some may choose to include it for additional validation. In order to calculate or verify the checksum, take the entire record up until the checksum key-value pair (ie. excluding the checksum key-value pair). Strip any spaces from either side, and calculate the CRC-32 on that final record.  If you are verifying address_signature then this probably isn't needed but could be useful to know if the TXT record in being 


## Test OpenAlias Records

After you add your TXT records to CloudFlare, use the [OpenAlias Tester](https://oat.outdoordevs.com/) to make sure your domain and the OpenAlias records are configured properly.

Enter your domain name into the tool and it will display all OpenAlias records that it finds.  It will verify the address_signature when possible and assign a score to each record.
