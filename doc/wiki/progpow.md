<!-- TITLE: ProgPoW -->
<!-- SUBTITLE: Mtihani ProgPoW Testnet setup instructions provided by the Ellaism community -->

# Mtihani ProgPoW Testnet

This testnet has mostly identical settings comparing Ellaism mainnet, but with ProgPoW transition happening at block 0. To use this, you need to first compile the ProgPoW branch of Parity Ethereum:

```bash
# Make sure you have Rust and git installed first.

git clone https://github.com/paritytech/parity-ethereum
cd parity-ethereum
git checkout andre/progpow
```

Then download [mtihani.json](https://gist.github.com/ellaismer/62a8cd70b67c7c938388716e5addb4b6) from the instructions provided by @ellaismer.  The json file is at the bottom of the page so you might have to scroll down to see it.

```
cargo run --release -- --chain mtihani.json
```


Report any issues, give feedback, get support in the #umbrella channel in the [Ellaism Discord](https://discord.ellaism.org).

## Setup Parity for mining

To mine against your testnet node you need to create an account and start parity with a few options.  See the [parity wiki](https://wiki.parity.io/Mining) for detailed instructions.

### Create an account

```
cargo run --release -- account new
```


Enter a password for new wallet and then use the public address that is generate to start parity.

### Start parity

```
cargo run --release -- --author 0x249852075fd4cdbbda9f0eadde35c09c85052e30 --ws-interface=0.0.0.0 --jsonrpc-interface=0.0.0.0 --chain mtihani.json
```

### Behind a firewall

If you are behind a firewall you need to open TCP/UDP 30303 and UDP 30304

You'll also want to add this option when running parity:

```
 --nat extip:YOUR_EXTERNAL_IP_ADDRESS
```


## Mining with ethminer

Grab the latest version of [ethminer](https://github.com/hackmod/ethminer/releases) from @ethminer https://github.com/hackmod/ethminer/releases

If you want to compile your own binaries, instructions can be found in `ethminer`'s manual (https://github.com/ethereum-mining/ethminer/blob/master/docs/BUILD.md).

On windows I use this batch file to start ethminer

```
@echo off

setx GPU_FORCE_64BIT_PTR 1
setx GPU_MAX_HEAP_SIZE 100
setx GPU_MAX_USE_SYNC_OBJECTS 1
setx GPU_MAX_ALLOC_PERCENT 100
setx GPU_MAX_SINGLE_ALLOC_PERCENT 100

:loop
ethminer.exe -U -P http://0x249852075fd4cdbbda9f0eadde35c09c85052e30.rig4@192.168.0.93:8545
echo restart miner...
```

Change the wallet address and IP address in the ethminer.exe command line to match your values.


## Stats page

Our [stats page](https://mtihani.outdoordevs.com/) is located at https://mtihani.outdoordevs.com/

If you want to add your node to the stats page use the following environment variables when you setup [eth-net-intelligence-api](https://github.com/cubedro/eth-net-intelligence-api)

```
WS_SERVER=https://mtihani.outdoordevs.com/
WS_SECRET=mtihani
```

## Explorer

Visit the [Mtihani explorer](http://lab.ellaism.org/home) hosted by @limax





