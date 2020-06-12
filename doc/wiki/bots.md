![Logo](/uploads/logo.png "Logo"){.pagelogo}
<!-- TITLE: Bots -->
<!-- SUBTITLE: Ellaism - A stable network with no premine and no dev fees -->

The Ellaism's [Discord server](https://discord.gg/gz9tURY) has several bots to interact with the network. Here're some documentations of how you can use them.

# Twitter Faucet

Ellaism has a Twitter faucet to help new users get started with the network. By tweeting anything with tag $ELLA, you can claim a small amount of money.

First, get your Tweet ID, with a url like `https://twitter.com/ellaismcore/status/958926185991254016` the Tweet ID is the digits in the end `958926185991254016`.

Then, go to the Ellaism discord. In `#bots` channel, send a message 
```
!faucet claim <tweet id> <destination address>
```

For example, 
```
!faucet claim 958926462907658241 0xe9C2d958E6234c862b4AfBD75b2fd241E9556303
```
The bot will then send you 1/2000 of the current balance in faucet, or 0.1 ELLA, whichever is lower.

If you want to donate to the faucet, the address is
[0x231ea5595788f704522c630a22c0b7cc49318ef6](https://explorer.ellaism.org/addr/0x231ea5595788f704522c630a22c0b7cc49318ef6).

Special thanks to [TBates](https://keybase.io/tbates76) and [Buzzkillb](https://keybase.io/buzzkillb) for the initial donations that made the faucet possible. And [Dev Pool](https://pool.ellaism.org) sponsors the transaction fees.


# Carbon Vote

Carbon Vote is a voting process that your weight of voting is based on the ELLA coins you own. The Carbon Vote bot on the Discord server allows you to easily create a new Carbon Vote process yourself. To do this, first list all the voting options, in `#bots` channel, for each option, run:

```
!carbon new
```

Collect the resulting addresses and ask voters to send a **zero-value** transaction to a particular address if they're *for* a particular option. At any time, you can issue:

```
!carbon <address>
```

It will tell you how many carbons that particular option address has got.


# Split Donations

As requested, we have a bot (SplitBot) that allows you to donate a fixed percentage of mining rewards to a donation fund of your choice. In `#bots` channel, use:

```
!split <dev|community|token|default> <percentage> <address>
```

For all mining rewards sent to this address, it donates `<percentage>` to Dev Fund, Community Fund, Contributor Fund or the split address for Dev Fund and Community Fund, and then sends the rest of the funds to `<address>`. For example:

```
!split dev 5% 0x65767ec6d4d3d18a200842352485cdc37cbf3a21
```

This would donate an additional 5% to Dev Fund, and sends the rest of the balance to `0x65767ec6d4d3d18a200842352485cdc37cbf3a21`. The bot will then give you an contract address. After that, you simply need to mine to this split contract address.

Pools like Dev Pool has the additional features of MINING token. If you mined to a split contract address, at any time, you can run:

```
!mining withdraw <split contract address>
```

And all your MINING tokens will be automatically sent to your wallet.


# Testnet Faucet

Ellaism has a [testnet](testnet) called Shikinseki, and we have a bot that allows you to get some money for testing on this testnet. 
To get some testnet token, go to the Discord channel, in `#bots` channel, run command 

```
!testnet send <address>
```

For example:

```
!testnet send 0x2cbb505641e0c1b0ada0cf0b045014383de94576
```

You will receive 10 testnet tokens each time issuing this command.


# RSVP Bot

We hold weekly development meetings every Saturday 4pm UTC. It is recommended that you run the command below in `#development` channel on the Discord server, so that we have a good estimate on how many people will be there.

```
!rsvp yes
```


# Blockchain Discord Logs

We also log most of the moderation actions of our Discord server directly to the Ellaism blockchain. Below are current logging addresses:

* *ELLA Ethusiasts* role changes: [0x69808D56a15A4465F898Fd61a8a54beb24788Eb0](https://explorer.ellaism.org/account/0x69808D56a15A4465F898Fd61a8a54beb24788Eb0)
* *ELLA Regulars* role changes: [0x05d12A005524Db8791A25C61B884eAD293a12F2a](https://explorer.ellaism.org/account/0x05d12A005524Db8791A25C61B884eAD293a12F2a)

# EllaBot
```
!help
```

EllaBot is a bot that has several useful functions for our community, such as: profit from mining, Ella price from coinmarketcap, on various stock exchanges, pools lists, members etc.

# TipBot

TipBot is a bot that allows discord users to send Ella to each other through discord channel. To start tipping you have to use ```!tip register``` and you have to deposit ELLA to your TipBot address first.
```
!tip_help
```
For example:
```
!tip @limax 10
```

The user does not pay any fees for sending the tips among other users and for the withdrawal of funds on the external wallet.
Gas fee pays TipBot only!
You can use TipBot to pay another user for anything or for fun ;)

If you want to donate to the TipBot, the address is [0x00b3231bafd09893deaabf9171ed055a8e33d567](https://explorer.ellaism.org/account/0x00b3231bafd09893deaabf9171ed055a8e33d567)

Have a fun !
