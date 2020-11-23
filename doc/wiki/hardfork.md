![Logo](/uploads/logo.png "Logo"){.pagelogo}
<!-- TITLE: WebAssembly and Byzantium Network Upgrade -->
<!-- SUBTITLE: A stable network with no premine and no dev fees -->

# What you need to do to prepare for the network upgrade happening in August 2018.

A network upgrade is planned to happen at block number 2,000,000, for around August 2018. This adds Ethereum Byzantium features and enables WebAssembly scripting on Ellaism blockchain. multi-geth and go-ellaism support is being dropped, and we urge everyone to upgrade to Parity v1.10.6+.

The current estimated network upgrade date is **3 August, 2018**.

## Full Nodes

If you use a full node to interact with the Ellaism blockchain, you need to upgrade the software:

* **parity-ethereum**: Please upgrade to Parity 1.10.6+ or Parity-Ethereum 2.0. They can be found in parity-ethereum's [Releases](https://github.com/paritytech/parity-ethereum/releases) page. If you want the UI, please take a look at the standalone [Parity UI](https://github.com/Parity-JS/shell/releases).
* **multi-geth** and **go-ellaism**: **No longer supported. Please switch to parity-ethereum before the hard fork happens**. Geth and Parity have compatible keystore format so you can directly import your geth accounts into Parity. You can also run parity with geth compatibility mode using the `--geth` flag.

## Wallets and Dapps

If you interact with the Ellaism blockchain through a wallet like [MyCrypto](https://mycrypto.com/), [MEW](https://myetherwallet.com/), [EllaWallet](https://ellaism.github.io/ellawallet), Ellaism's Android and iOS mobile wallets, no action is required. If you interact with the Ellaism blockchain through one of the dapps like Ellaism Name Service, no action is required. The underlying public node you interact with has already been upgraded to support the network upgrade.

## Exchanges and Mining Pools

The following exchanges have upgraded their nodes with support of the network upgrade. If you put your ELLA coins on those exchanges, no action is required.

* [Cryptopia](https://www.cryptopia.co.nz/)
* [LDVBank](https://ldvbank.com/en-us/trading/)

The following mining pools have upgraded their nodes with support of the network upgrade. If you are mining on one of the pools, no action is required. However, if the mining pool you are on is not on this list, please ask your mining pool to upgrade their nodes or switch to another mining pool.

* [DevPool](http://pool.ellaism.org/)
* [PoolSexy](http://ella.pool.sexy/)
* [2miners](https://2miners.com/)
* [Megapool](http://megapool.io/ella)
* [Outdoor Devs](https://pool.outdoordevs.com/)
* [CGPools](https://ella.cgpools.io/)
* [AcroDuck](https://ellapool.acroduck.de/)
* [SpeedPool](https://ella-speedpool.com)
* [Arsmine](http://ella.arsmine.com)
* [Soyminero](http://ella.soyminero.es)
* [Noobpool](http://ella.noobpool.com)
* [BaikalMine](http://pool.baikalmine.com/en/ella/)
* [Minerpool](http://ella.minerpool.net)



## Specifications

You can find more information about what is being enabled from links below:

* [Byzantium Hardfork Meta](https://github.com/ellaism/specs/blob/master/specs/2018-0004-byzantium.md) ([Discussions](https://github.com/ellaism/specs/issues/12))
* [WebAssembly Hardfork Meta](https://github.com/ellaism/specs/blob/master/specs/2018-0003-wasm-hardfork.md) ([Discussions](https://github.com/ellaism/specs/issues/11))