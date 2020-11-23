# Get Connected to Ellaism

The Ellaism network is powered by [OpenEthereum](https://github.com/openethereum/openethereum) (formerly Parity Ethereum), a fast and feature-rich multi-network Ethereum client. Connecting to the Ellaism network is a simple process, which is outlined below.

## Installation

1. Install [OpenEthereum](https://github.com/openethereum/openethereum/releases) (>= 1.10.3) from the OpenEthereum GitHub. 
2. Run Parity with `openethereum --chain ellaism` to start syncing the mainnet chain.

Please be aware, the chainspec that is embedded with OpenEthereum may occasionally be out of date and cause connection issues with the network bootnodes. If you have trouble connecting to the network, the most up to date chainspec is available [here](../chainspec/ellaism.json).

In this scenario, the command from step 2 above would become:

```
openethereum --chain ellaism.json
```

## Autumnus Testnet

Ellaism has a Proof-of-Authority (PoA) testnet called "Autumnus". To connect to the testnet, download [this file](../chainspec/autumnus.json) and run:

```
openethereum --chain autumnus.json
```

We choose the PoA consensus algorithm because it provides a stable experience. It is known that Proof-of-Work testnets 
can be unstable due to lack of nodes. 

Please be aware that the Autumnus network can be restarted at any time with all states cleared. Do not use it to store 
anything important.
