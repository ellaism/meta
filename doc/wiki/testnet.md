![Logo](/uploads/logo.png "Logo"){.pagelogo}
<!-- TITLE: Testnet -->
<!-- SUBTITLE: Ellaism - A stable network with no premine and no dev fees -->

Ellaism has a Proof of Authority (PoA) testnet called "Shikinseki". To connect to the testnet, download [this file](https://github.com/ellaism/parity-config/blob/master/shikinseki.json) and run:

```
parity --chain shikinseki.json
```

We choose PoA consensus algorithm because it provides a stable experience. It is known that PoW testnets can be unstable due to lack of nodes.
And please note that the testnet might be restarted at any time with all states cleared. Don't use it to store anything important.

Additional facilities you can use on the testnet:

* Explorer: https://explorer.testnet.ellaism.org
* JSONRPC Endpoint: https://jsonrpc.testnet.ellaism.org
* [Shikinseki Faucet](bots/#testnet-faucet)
