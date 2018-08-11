# Development Meeting (21 July, 2018)

This is the log of *Weekly General Development Meeting*. It happens every Saturday 4pm UTC in the #development [Discord channel](https://discord.ellaism.org).

```
ellaismer - 07/21/2018
@here It's our weekly dev meeting! If you have anything you want to discuss, please raise your voice!

Things I want to discuss:
1. Byzantium/WASM hard fork -- are there more any missing items we should get done soon?
2. ProgPOW -- community opinions and other status.
limax - 07/21/2018
@ellaismer you first :smile:
ellaismer - 07/21/2018
And @kubu00 sorry about the delay. I'll try to give you some examples of tipbot code!
@limax Hmm I'm actually not sure what else can be done. From technical side we're prepared.
limax - 07/21/2018
First, because parts of our discord channels are not available to telegram members let me post your announcement here(edited)
The network upgrade is about to happen in around 2 weeks. Here's information of what you might need to do. (tldr: if you don't run full nodes, no action is required! But please ask your mining pools to upgrade their nodes.)
https://wiki.ellaism.org/hardfork

And we have Ellaism Shell v0.3.2 released, with support of parity-ethereum 2.0. https://github.com/ellaism/shell/releases/tag/v0.3.2
GitHub
ellaism/shell
shell - Ellaism-branded dapps browser
ellaismer - 07/21/2018
(My network seems unstable now so I'm reading/posting messages out of order. Sorry!)
limax - 07/21/2018
Ok
I'll post also my warning to all our users
Read CAREFULLY above message and also be sure that you are mining on ready for upgrade pool. Contact pools operators for more details about pool status.
@PoolOperators do your job for your users in the first place!
Our Russian community members, please help us with our effort on Russian pools
PM /DM me if you need help with this. This should be a community effort
You can find a list with pools ready on wiki page https://wiki.ellaism.org/hardfork
If there are other questions regarding network upgrade / fork please ask now
ellaismer - 07/21/2018
(And if you pool is ready but is not on https://wiki.ellaism.org/hardfork please let us know and we'll add it to the list.)(edited)
limax - 07/21/2018
Of course. Also anyone can help with info regarding nodes here http://peerstats.nonlocal.ca/ .Thanks @Nulligun for providing this
If we are done, at least for now, with network upgrade discussion, I have a few other things to discuss
As I already announced, we have a test instance for our explorer here http://lab.ellaism.org/. This is not production ready yet but I'm committed to work on this to become a functional alternative to our existing explorer
If you think that this is a good option for us, @ellaismer we should setup a dns entry not for this machine, but for a machine that I'll provide running a stable version
ellaismer - 07/21/2018
Yeah cool!
limax - 07/21/2018
The explorer is / will be a fork of this project https://github.com/ethereumproject/explorer
@Dev_Akira and @ethminer are also working on improving this project
I invite both of them to join our community as developers
ellaismer - 07/21/2018
Sure, please just let me know what address you would like.
An explorer with external database can take a large amount of disk space, so be prepared. :laughing:
But it will be much faster compared with our current "lite" one.
limax - 07/21/2018
Yes, I know, for now I'll think about this just to be a secondary explorer
ellaismer - 07/21/2018
I see @Dev_Akira is already our Github members. @ethminer Please just let me know your Github username, and I'll add you as well.
.developers add @Dev_Akira
RoleBotBOT - 07/21/2018
@ellaismer, Developers role added for user @Dev_Akira, recorded in transaction 0x1fe4596bb7d32481f5bc0d416f30163092e28d95fe6b98ce480c36ccf1cf6ef8, which can also be seen from logs of https://explorer.ellaism.org/account/0x619bf2a5eeb88efe54d93dedd263688582e10f24
Ellaism Explorer
Ellaism Explorer
Fast and full featured explorer for Ellaism.
ellaismer - 07/21/2018
.developers add @ethminer
RoleBotBOT - 07/21/2018
@ellaismer, This user already has the role.
limax - 07/21/2018
:thumbsup:
I think now is the time for me also to make a step forward. I didn't fully explain my step back on the discord side, but I want all our members that I look forward to the development side.
@ellaismer please accept me as a developer and github contributor.
My main effort will be on my child project, the wiki, for a while, but the intention is to focus more on our infrastructure
For those of you concerned about exchange listings here https://wiki.ellaism.org/exchanges/listing-info we will provide all informations needed to complete exchange listing forms
ellaismer - 07/21/2018
:thumbsup:
limax - 07/21/2018
Remember, this is a community driven project, so before asking about new exchanges, think about helping with this
Next thing to discuss here is our testnet
ellaismer - 07/21/2018
.developers add @limax
RoleBotBOT - 07/21/2018
@ellaismer, Developers role added for user @limax, recorded in transaction 0x62160b1d4e32515fbacfcd1fd4b9846d95a4b3bc3175f286ff7e7396a20586c6, which can also be seen from logs of https://explorer.ellaism.org/account/0x619bf2a5eeb88efe54d93dedd263688582e10f24
Ellaism Explorer
Ellaism Explorer
Fast and full featured explorer for Ellaism.
limax - 07/21/2018
Is important to improve our testnet if we want developers to join and develop dapps on Ellaism
For that, @ellaismer please provide us needed info to help with testnet nodes
At least me and @kubu00 will join this effort
ellaismer - 07/21/2018
Yeah sorry I forgot to provide the test docs.
limax - 07/21/2018
No problem, just a reminder
I also forgot to mention that we will have a Tutorials section on wiki https://wiki.ellaism.org/tutorials
ellaismer - 07/21/2018
One thing I'm thinking about is maybe we should re-launch the testnet again:

* A while ago there's a recent update on Parity, which allows PoA network to resemble more of PoW network. On our testnet network, we have EIP161 enabled (that's a bugfix for originally pre-homestead, which we don't need on mainnet). By relaunching the testnet we can remove it.
* We can avoid "multi" set definitions in our testnet spec, which will further complicate things.
* Testnet is meant to be unstable, and people are expected to use it only for testing.
So what we can have is a ValidatorSet contract -- the contract acts sort of like multi-sig, where existing members can propose to add/remove "authorities".
(It has less auditing requirements because it's on testnet, so we can get the contract without problem.)
@limax The tutorial page is currently empty?
limax - 07/21/2018
Yes is empty
just created
My target is to get there tutorials regarding mining, nodes and things like that for the start
In time we can also add development related things there
And, why not, an introduction in blockchain terms
ellaismer - 07/21/2018
Ah right, sorry I misread your message!
Cool!
limax - 07/21/2018
I have also some questions :smile:
We are now close to the upgrade and I'm also playing with another explorer. Is there something special to be done on the explorer side to be ready for wasm contracts?
ellaismer - 07/21/2018
Their bytecode will be displayed just fine, but to verify the contract and display source code, we need additional support:

* For every source language we need to create a service that compiles it to WASM bytecode. For example, a Rust-to-wasm compiler web service.
* And it needs then to be integrated to the explorer.
limax - 07/21/2018
Oh, cool, same problem that I have for now with solidity contracts on beta explorer :smile: (almost)(edited)
ellaismer - 07/21/2018
Yeah I think it had some problem with solidity contracts compilation. Not sure what the current status is now.
limax - 07/21/2018
https://github.com/ethereumproject/explorer/pull/153
@ethminer
sorry I think is more related to this PR https://github.com/ethereumproject/explorer/pull/136
Another thing, somehow particular
I have the same issues on pwasm like here https://github.com/paritytech/pwasm-tutorial/issues/30
Can you have a look?
ellaismer - 07/21/2018
Dev chain didn't have wasm enabled. It's fixed in the newest version.
Let me check the version numbers.
Hmm sorry it's not related to that. Let me take a look.
ethminer - 07/21/2018
wasm contracts! interesting!
limax - 07/21/2018
@ethminer please join our github
ethminer - 07/21/2018
i will follow wasm contract support after token support completed
i guess anthony also interested in wasm support in the ETC explorer(edited)
limax - 07/21/2018
:smile:
BTW, with all the work done by @Nulligun , I discovered that are a bunch of tokens on our network
@Nulligun  hope is ok to post this https://trustray.outdoordevs.com/explorer_tokens
Nulligun - 07/21/2018
yes of course
its the public wallets api
ellaismer - 07/21/2018
@limax Looks like the contract creation transaction just failed in that issue.
Can you provide your contract bytecode?
Nulligun - 07/21/2018
fork of trust wallet api with some additions for android wallet
limax - 07/21/2018
I was shocked to see this :smile:
ellaismer - 07/21/2018
Anyway I think let's discuss this after the dev meeting. May take some time to fix...
@Nulligun That's really cool!
Nulligun - 07/21/2018
I have a tutorial for how to create and deploy Ellaism tokens here, https://github.com/stevemulligan/ellaism-token-example
GitHub
stevemulligan/ellaism-token-example
ellaism-token-example - ERC-20 Token Example with Solidity and web3.py on the Ellaism Network
limax - 07/21/2018
@ellaismer we should stay close to this. A token released on block 2 000 000  to mark the wasm upgrade will be nice
ellaismer - 07/21/2018
Yeah.
limax - 07/21/2018
Ok, hope our users are not too tired and they will understand that this is close to the way our dev meetings will go.
ellaismer - 07/21/2018
And regarding ProgPOW, I would just be interested to know whether we have more real-world data for ASIC miners. My current concerns for the ProgPOW spec is:

* It looks like a good spec, and has a C++ implementation. However, there's not enough audit/review yet.
* Ubiq announced plan to adopt ProgPOW. However, it looks like one of their goals is to switch to an unique-to-ubiq PoW algorithm, so they're less likely to be impacted by ethash hashrates. (So they'll probably customize ProgPOW but not use the current standard.) This, however, means it's more difficult to get closed-sourced miner software support.

So I think we may need to gather some more ASIC real-world data to know whether this ProgPOW route would work.(edited)
limax - 07/21/2018
why not talk about this? https://github.com/tromp/cuckoo
ellaismer - 07/21/2018
That's new to me. Let me take a look.
limax - 07/21/2018
grin is doing this in rust
https://github.com/mimblewimble/grin(edited)
ellaismer - 07/21/2018
Cool. So it'll be easier to get integrated to parity.
limax - 07/21/2018
:rofl:
ellaismer - 07/21/2018
But still, it looks totally different compared with ethash, while ProgPoW modifies based on ethash. So cuckoo will still require more changes.
limax - 07/21/2018
Ok, we are talking now about pow and possible pow changes. But if in the future we are looking to improve the txs number (looking at EOS close to 3000 now) we should think about sharding like eth?(edited)
ellaismer - 07/21/2018
Sharding or side chain, for sure.
limax - 07/21/2018
Is sharding possible with POW?(edited)
Or is related to POS / and variants of POS?
ellaismer - 07/21/2018
From my understanding, the shard chain will not be PoW, where the parent chain can remain PoW.
TBH, it feels to me that sharding is a fancier version of "sidechain + cross sidechain communication". That works good, but we may also just call it what it is, and make the design possible to deploy mutliple sharding chains on the same parent chain.
limax - 07/21/2018
Good to know
I think we are quite done for today. Please fork the explorer to have it under our repository
We will continue the discussion outside of the meeting
I'll provide you the ip address for the secondary explorer soon
I'm talking about the production ready one
ellaismer - 07/21/2018
Great!

> Please fork the explorer to have it under our repository

Do you want me to do this? Or because you've been added as Github members, you can just do the fork as well.
limax - 07/21/2018
Uh, I can do that :smile:
@ellaismer please say your usual closing words :smile:
ellaismer - 07/21/2018
This week's meeting ends now. See you next week!
```
