<!-- TITLE: Developing OpenAlias on Ellaism -->
<!-- SUBTITLE: Specifics about adding OpenAlias support on the Ellaism network -->

## Developing

There are no Ellaism clients I am aware of that use this yet, so setting this up is just for very, very early adopters. The mobile wallets and historical balance tool will support OpenAlias at some point. There are libraries for Rust, Python and Javascript at the bottom of this page if you are interested in adding OpenAlias support to your project. 

### Browser Support

Since performing OpenAlias looksups from a browser require something like DNS-over-http and this might not be reliable until you can guarantee someone is using DNSSec enabled DNS servers, Ellaism provides a REST api to perform OpenAlias lookups.

Check out the documentation for the Ellaism OpenAlias REST Api [here](/tutorials/openalias-rest).

### Address Signature

The standard way to sign Ellaism records (and other Etherum based networks) is with [eth_personal_sign](https://wiki.parity.io/JSONRPC-personal-module#personal_sign) using the address holders private key. The message to sign consists of only the domain name that you are using, and the result of this is the address_signature.  Clients can then verify the signers address with [ec_recover](https://wiki.parity.io/JSONRPC-personal-module#personal_ecrecover)

### Resolution

Not all DNS servers support DNSSEC.  When building an application that will support OpenAlias you need to perform DNS lookups on specific DNSSec enabled servers.  Use an established 3rd party library to verify the chain of trust is intact.

### DNSCrypt

The official OpenAlias spec uses DNSCrypt to prevent client lookups from leaking. They recommend routing all DNS lookups through a proxy to a small subset of servers that promise not to log anything. Since Ellaism is a public ledger without any privacy features at the network level, Ellaism OpenAlias clients are not expected to follow this part of the specification.  If you are not using DNSCrypt this fact should be clearly visible so that users are fully informed.  The Ellaism REST Api does not use DNSCrypt rather it uses Google DNS-over-HTTP with Google DNS servers.

### Chain of Trust

Ellaism clients should verify the chain of trust is intact and force users to manually enter the hex addresses if the chain of trust can not be verified. If the chain of trust is valid using domain addressing is very safe. For extra piece of mind you can setup a script that will monitor your domain and be alerted to changes.

## Resources

https://openalias.org/#implement
https://docs.rs/openalias/0.2.0/openalias/
https://github.com/jedisct1/dnscrypt-proxy
https://github.com/openalias/dnscrypt-python
https://github.com/openalias/openalias-api
