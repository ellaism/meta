# wasm-hardfork chat log

This is the log of *WebAssembly Hard Fork Working Group* from the
start of the hard fork planning (April 28th, 2018) and shortly after (October 9th, 2018)

For more information join the #wasm-hardfork [Discord channel](https://discord.ellaism.org).


```
[28-Apr-18 01:56 PM] ellaismer#6750
Here're steps we need to carry out if we ever carry out the WebAssembly hard fork:

1. Create a Ellaism spec for the WebAssembly hard fork.
2. Consider either drop multi-geth and go-ellaism support or implement WASM in it. To be honest, because of our limited manpower, dropping the support and only go with Parity seems to be a more practical choice. But we need to discuss this.
3. Set up good community management structure through WebAssembly Hard Fork Working Group, ensuring that things can be carried out smoothly.
4. Gather community opinions through CarbonVote and MinerVote.
5. If we have overwhelming supportive opinions in the community, actually carry out the hard fork.

[28-Apr-18 02:16 PM] ellaismer#6750
!join

[28-Apr-18 02:16 PM] RoleBot#5530
@ellaismer#6750, WebAssemblyers role added for user @ellaismer#6750, recorded in transaction 0x47fa4c893a326983cf631a40780cc41dd5b33f2f1daf37d8e3681152a64466ba, which can also be seen from logs of https://explorer.ellaism.org/account/0x5feab2d9547654db3c86db6d7f0529f246c16548

[28-Apr-18 02:16 PM] ellaismer#6750
Consider joining the WebAssembly Hard Fork Working Group if you want to help on the efforts! 😃

[28-Apr-18 02:16 PM] limax#8484
!join

[28-Apr-18 02:16 PM] RoleBot#5530
@limax#8484, WebAssemblyers role added for user @limax#8484, recorded in transaction 0x14e1f172b01a06441ff1524737c25fb266181d646db8ae71809c55807427bae1, which can also be seen from logs of https://explorer.ellaism.org/account/0x5feab2d9547654db3c86db6d7f0529f246c16548

[28-Apr-18 02:16 PM] ellaismer#6750
Pinned a message.

[28-Apr-18 03:09 PM] psnotadev#2800
!join

[28-Apr-18 03:09 PM] RoleBot#5530
@psnotadev#2800, WebAssemblyers role added for user @psnotadev#2800, recorded in transaction 0xae0bc0b2e11a10f37235cd8ec5b7343bdcc281bdbe327af710a6c1fdd36988c1, which can also be seen from logs of https://explorer.ellaism.org/account/0x5feab2d9547654db3c86db6d7f0529f246c16548

[28-Apr-18 04:01 PM] sc0rp1on#9952
!join

[28-Apr-18 04:01 PM] RoleBot#5530
@sc0rp1on#9952, WebAssemblyers role added for user @sc0rp1on#9952, recorded in transaction 0x1910e6a4c880d5d0a3444958a7081581f0414ae86e5a555ff04c71e30df0460d, which can also be seen from logs of https://explorer.ellaism.org/account/0x5feab2d9547654db3c86db6d7f0529f246c16548

[28-Apr-18 04:40 PM] kubu00#4514
!members

[28-Apr-18 04:40 PM] EllaBot#1555
```**wasm-hardfork** group has no dedicated role```

[28-Apr-18 04:41 PM] kubu00#4514
@ellaismer#6750 can u update Dict with roles on github? :) i dont have Access to pc

[30-Apr-18 03:40 AM] ellaismer#6750
@kubu00#4514 Fixed!

[30-Apr-18 03:44 AM] ellaismer#6750
@here One important thing regarding enabling WebAssembly on Ellaism is that if we do so, then most likely we'll need to discontinue multi-geth and go-ellaism support, and Parity will be the only client running on Ellaism network. This is primarily due to our limited manpower. What do you think about this? And are there anyone willing to take up the job to ask our existing exchanges and mining pools whether they would have any trouble switching to Parity nodes?

[30-Apr-18 04:07 AM] maskekar#2959
@ellaismer#6750 is this wasm urgently needed? Too bad if other clients then become discontinued, you've (and other dev) put hard work into multi-geth and go-ellaism

[30-Apr-18 04:10 AM] ellaismer#6750
I really don't mind them being discontinued. But our manpower really probably cannot get this feature done in time for multi-geth/go-ellaism, so they "drop out" of the network.

[30-Apr-18 04:10 AM] ellaismer#6750
And this is no emergency hard fork. WASM is a great feature and will be used by many, but I don't define anything as "urgently needed".

[30-Apr-18 04:11 AM] ellaismer#6750
But if we get it on time, we'll be an early wasm adapter, which might be good for our coin and attracts more talents in the community. 😃

[30-Apr-18 04:15 AM] maskekar#2959
@ellaismer#6750 I see if in your opinion this wasm really "the next big thing" and outweight multi-geth and go-ellaism support (temporary)* then no worries. *Assumed we still continue to support these clients if have enough manpower.

[30-Apr-18 04:20 AM] ellaismer#6750
Yeah I think no matter whether wasm is "the next big thing" or not, it indeed outweights multi-geth and go-ellaism support -- our network consists of mainly Parity nodes already. And for multi-geth, I can always transfer it to a third-party developer to maintain other network supports. I think the only problem is that whether exchanges or mining pools might have trouble switching to Parity, and we need people to help asking this.

[30-Apr-18 04:34 AM] maskekar#2959
I think we need this kind of upgrade honestly, a little bit risky of course, but any chance of breaking mediocrity barrier always worth to try. I'm sure #exchange-listings  guys will have no problem. Ping @limax#8484 lol

[30-Apr-18 05:40 AM] limax#8484
Pong @maskekar#2959 I was driving 😀

[30-Apr-18 05:42 AM] limax#8484
As we are now just studying this we can compile a list with pro and cons. Also we will get the feedback from pools.

[30-Apr-18 05:43 AM] limax#8484
On the exchanges side we are currently on just a few and I'm sure that the main one, cryptopia, will be the one to focus our efforts

[30-Apr-18 05:44 AM] limax#8484
Regarding the public nodes I don't see a problem with this.

[30-Apr-18 05:45 AM] limax#8484
And because the current network hashrate is not so big we can handle this.

[30-Apr-18 05:48 AM] limax#8484
The multi-geth/go-ellaism support drop is indeed something to consider.

[30-Apr-18 10:51 AM] ellaismer#6750
And what does everyone think about the hard fork block number? I'm thinking about 1,800,000 (2 months from today) or 2,000,000 (3.5 months from today).

[30-Apr-18 10:52 AM] terra-pescado#4777
1,800,000

[30-Apr-18 10:53 AM] ellaismer#6750
I'll merge the specs with 1,800,000 for now. We can always change discuss this later. But please let the community know if you have something.

[30-Apr-18 10:54 AM] limax#8484
I think close to 4 months, close to 1 year birthday

[30-Apr-18 10:55 AM] ellaismer#6750
Yeah 2,000,000 would be the end of August.

[30-Apr-18 10:55 AM] limax#8484
Block 2.5 I think

[30-Apr-18 10:56 AM] limax#8484
Ah, ok

[30-Apr-18 10:56 AM] limax#8484
In my opinion will be a great gift if we can do this

[30-Apr-18 10:56 AM] limax#8484
:ella:

[30-Apr-18 10:57 AM] ellaismer#6750
And 1,800,000 would be the end of June.

[30-Apr-18 10:58 AM] limax#8484
2 months seems to short for me. Just my opinion

[30-Apr-18 10:58 AM] ellaismer#6750
We cannot exactly target anniversary to be honest, it's all just about practical issues. Yeah like you mentioned, if 2 months would be too short.

[30-Apr-18 10:58 AM] terra-pescado#4777
1,900,000?

[30-Apr-18 10:59 AM] ellaismer#6750
1,900,000 would be the middle of July.

[30-Apr-18 10:59 AM] limax#8484
I know, traders, miners, want good news soon. But to be practical we need to think about many things

[30-Apr-18 11:00 AM] ellaismer#6750
Yeah agree.

[30-Apr-18 11:00 AM] terra-pescado#4777
July 12th is my birthday!

[30-Apr-18 11:00 AM] terra-pescado#4777
Lol

[30-Apr-18 11:02 AM] ellaismer#6750
Usually hard fork like in Monero and Ethereum are carried out in a matter of weeks after development is done. Ethereum Classic carries out a little longer in advance -- around 3 months. And we also have chains who never hard fork, or hard fork in advance for a year. So I don't have a good idea on this issue as well, but we need to make a decision on this, if we decide to hard fork.

[30-Apr-18 11:04 AM] kubu00#4514
Maybe 10 februar 2019? :) its my 35th birthday 😜

[30-Apr-18 11:04 AM] limax#8484
I think we need at least one month to be sure that all parts involved are ok

[30-Apr-18 11:05 AM] limax#8484
This means 2 months to decide/test

[30-Apr-18 11:09 AM] ellaismer#6750
Besides https://github.com/ellaism/specs/pull/8/files another thing is https://github.com/ellaism/specs/pull/9/files which includes Byzantium features. Our network is created before Byzantium is finalized (and stripped out anything that is too "state changing"). So including Byzantium features as a separate hard fork meta (but on the same block number) might be benefiting the network.

[30-Apr-18 11:14 AM] ellaismer#6750
Anyway, I'm going to merge as is. But block number is something we need to discuss.

[30-Apr-18 11:34 AM] EllaSteve#3114
!join

[30-Apr-18 11:34 AM] RoleBot#5530
@EllaSteve#3114, WebAssemblyers role added for user @EllaSteve#3114, recorded in transaction 0x6e47313616f999286041ace6989814ae0c30bcb3022b3c72aa2327ba33fdd331, which can also be seen from logs of https://explorer.ellaism.org/account/0x5feab2d9547654db3c86db6d7f0529f246c16548

[30-Apr-18 11:34 AM] EllaSteve#3114
I'm available to help any way I can

[30-Apr-18 11:35 AM] ellaismer#6750
@EllaSteve#3114 One important thing we need to ask is whether exchanges can use Parity or can switch to Parity. Maybe @limax#8484 can coordinate this.

[30-Apr-18 12:33 PM] vikpat#0100
Any plan for to include AISC resistance features?

[30-Apr-18 12:33 PM] ellaismer#6750
@vikpat#0100 Not (yet) in this hard fork.

[30-Apr-18 01:15 PM] vikpat#0100
Ok

[30-Apr-18 01:19 PM] limax#8484
I will assume the exchanges part yes

[30-Apr-18 01:19 PM] ei-mk#3144
If this change means hard fork. And we end up asking pools, exchanges etc. to do a change for us. What else would be needed to change the algorithm as well so current asics won’t work? Mining software? Anything else? Would it be worthwhile discussing this as well? Apologies I have no technical knowledge of this, just seems like a good opportunity to raise it.

[30-Apr-18 01:20 PM] limax#8484
@ei-mk#3144 for now the asic problem is just a story without confirmations

[30-Apr-18 01:21 PM] limax#8484
This need to be studied and not just by us, but also older projects have the same problem

[30-Apr-18 01:23 PM] limax#8484
When the Asics will arrive to be studied all can have applied discussions. Until then let's look on the bright side, the gpu price declining

[30-Apr-18 01:24 PM] limax#8484
This possible wasm fork is something that can be seen as a step forward on the technological part of the project. The asic hard fork, algorithm changes and so, are just defensive measures

[30-Apr-18 01:25 PM] limax#8484
And in my opinion should be different anyway (as discussions)

[30-Apr-18 01:27 PM] limax#8484
Bringing the asic problem in this is just another layer of complexity to think about

[30-Apr-18 01:27 PM] ei-mk#3144
But if we are already doing 70% of the work (and I don’t know if we are, hence the question), would this be a good time to discuss? I just wanted to bring it up as I think it would be a great boon to Ella, a chance to differentiate from the other coins. A marketer’s wet dream if you will 😉 But I leave it to you more capable people, just wanted to bring it up again 😃

[30-Apr-18 01:27 PM] ei-mk#3144
Ok

[30-Apr-18 01:27 PM] limax#8484
Thank you

[30-Apr-18 01:30 PM] EllaSteve#3114
What happens to any existing Solidity contracts?  Will they still work?

[30-Apr-18 01:32 PM] ellaismer#6750
@EllaSteve#3114 yeah they’ll still work.

[01-May-18 12:05 PM] ultramenid#1919
ellaism.org - No Contentious Hard Forks

[01-May-18 12:05 PM] ultramenid#1919
I have this timeline on my btctalk lol

[01-May-18 12:06 PM] limax#8484
And?

[01-May-18 12:09 PM] ultramenid#1919
Then we do hard fork. Sorry guys 😀

[01-May-18 12:10 PM] limax#8484
You know what contentious means?

[01-May-18 12:11 PM] limax#8484
At this moment the hard fork is just a proposal and the idea is to upgrade the project. There is no other option if you want to add features

[01-May-18 12:12 PM] limax#8484
Also carbon vote is in progress on the proposals

[01-May-18 12:14 PM] limax#8484
At one point the discussion about asic resistance will be a reality. Altering the algorithm in that case is also possible only by fork

[01-May-18 12:16 PM] limax#8484
Thinking about no forks is a joke. But don't confuse a hard fork decided by community, miner vote, carbon vote with a contentious one

[01-May-18 12:17 PM] maskekar#2959
@ultramenid#1919 I don't see anyone who oppose the hard-fork at the moment, so why not?

[01-May-18 12:18 PM] ultramenid#1919
Im just saying no hard feeling. But im already sold all my ella. GL btw

[01-May-18 12:19 PM] limax#8484
I think I just explained not to confuse 2 different things

[01-May-18 12:20 PM] limax#8484
Updating the network, algorithm, adding features means evolution and is a must

[01-May-18 12:21 PM] maskekar#2959
I think he sold his coins long before the wasm fork proposed, so it's not related to this issue anyway.

[01-May-18 12:23 PM] limax#8484
This is not important. Coins can be mined or traded. The important thing is to understand

[01-May-18 12:24 PM] ultramenid#1919
@maskekar#2959 lol

[02-May-18 08:58 PM] ConanOfRottingham#6215
Question. If there is a hard fork in the future and I left my ella tokens in https://ellaism.github.io/ellawallet/ then they would be safe there, correct? I wouldn't have to do anything?

[02-May-18 11:09 PM] psnotadev#2800
correct, addresses made from that web wallet will survive any/all hard forks

[04-May-18 06:28 PM] limax#8484
<https://github.com/paritytech/pwasm-tutorial>

[06-May-18 07:27 AM] limax#8484
@here If no other candidate I'll  offer myself to lead the discussions with the exchanges regarding the fork

[09-May-18 06:18 AM] limax#8484
TODO on webpage:
- change <https://ellaism.org/install/> : "use Parity 1.10.3+
- think about removing geth from the page
- also remove geth from <https://ellaism.org/mining/>

[09-May-18 06:25 AM] ellaismer#6750
There's some additional work but I'll get it done by the end of next week.

[09-May-18 06:26 AM] ellaismer#6750
(We need to release a version of UI, otherwise it would be too confusing.)

[09-May-18 06:26 AM] limax#8484
I thing is ok tu put here some stuff as we go forward

[09-May-18 06:27 AM] limax#8484
I know for now parity is deprecating the ui and is going to separated UI interface

[09-May-18 06:30 AM] limax#8484
We will use this <https://github.com/Parity-JS/shell/releases> ?

[09-May-18 06:40 AM] ellaismer#6750
yeah

[09-May-18 06:40 AM] limax#8484
Nice. I already use this 😄

[09-May-18 06:41 AM] limax#8484
Not branded but still ok to use

[09-May-18 06:45 AM] kubu00#4514
@ellaismer#6750 can you reply pw ? im still waiting 😉

[23-May-18 08:10 AM] sc0rp1on#9952
Hey Guys, Sorry I was busy with "stuff"
Weren't we supposed to spin up test nodes for this?
Do we need them now?

[23-May-18 08:11 AM] limax#8484
We will do this soon

[16-Jun-18 06:44 AM] Repzilon#8929
A more  general question: where will run Web assembly? On full nodes or on miners?

[16-Jun-18 06:47 AM] limax#8484
Like evm, on full nodes. Every node has to verify smart contract transactions

[16-Jun-18 06:53 AM] Repzilon#8929
Sounds so wrong to me. What is the role of miners then? Suck up the system?

[16-Jun-18 06:58 AM] limax#8484
Miners are validating the transactions

[16-Jun-18 07:01 AM] DeSVaR#3179
Here is more extensive 
explanation from <https://blockgeeks.com/guides/proof-of-work-vs-proof-of-stake/>

```Mining serves as two purposes:

To verify the legitimacy of a transaction, or avoiding the so-called double-spending;

To create new digital currencies by rewarding miners for performing the previous task. ```

[16-Jun-18 07:04 AM] limax#8484
A miner can be a full node or a member of a mining pool (which is actually a full node)

[16-Jun-18 07:08 AM] limax#8484
So if we want to split the atom, a node or a miner ar basically the same but because of difficulty increasing, a group of miners form a pool to solve the block faster (actually more blocks)

[16-Jun-18 07:08 AM] limax#8484
Hope this is clear

[16-Jun-18 07:12 AM] EllaSteve#3114
https://medium.com/blockchannel/life-cycle-of-an-ethereum-transaction-e5c66bae0f6e

[16-Jun-18 07:13 AM] EllaSteve#3114
it also gives the network a way to fairly distribute the task of adding blocks to the chain.

[26-Jun-18 07:13 AM] EllaSteve#3114
Look at all those nodes ready for the fork on the stats page, so nice!  https://stats.ellaism.org

[26-Jun-18 07:14 AM] limax#8484
👍

[09-Jul-18 04:52 AM] AcroDuck#4262
Shame on me, I am still using the old parity... I will be ready for the fork in time, I promise (myroots.de)

[12-Jul-18 03:21 AM] limax#8484
Cryptopia is now ready for the fork

[12-Jul-18 03:21 AM] limax#8484

https://cdn.discordapp.com/attachments/439846226238636032/466866656681918475/Screenshot_from_2018-07-12_10-20-16.png

[12-Jul-18 06:13 AM] limax#8484
List of known pools ready:
DevPool <http://pool.ellaism.org/>
PoolSexy <http://ella.pool.sexy>
2miners <https://2miners.com/>
Megapool <http://megapool.io/ella>
Nonlocal <https://pool.nonlocal.ca/>
CGPools <https://ella.cgpools.io>
AcroDuck<https://ellapool.acroduck.de>

[12-Jul-18 06:16 AM] limax#8484
@PoolOperators please add your pool if is ready

[12-Jul-18 07:46 AM] CGPools.io#6454
ella.cgpools.io ready on parity 1.10.8

[12-Jul-18 07:51 AM] limax#8484
Updated

[12-Jul-18 07:52 AM] limax#8484
Pinned a message.

[16-Jul-18 05:11 PM] limax#8484
Nodes status:
```
Percent Ready    45
Total Nodes    105
Nodes Ready    48
Parity Nodes Needing Upgrade    16
Geth Nodes Needing Upgrade    41
```

[16-Jul-18 05:11 PM] limax#8484
<http://peerstats.nonlocal.ca/>

[17-Jul-18 01:27 PM] limax#8484
@EllaSteve#3114 please clean nodes data older than 1 month if you can

[17-Jul-18 01:30 PM] EllaSteve#3114
@limax#8484 done

[17-Jul-18 01:31 PM] limax#8484
Thanks, looks better already

[20-Jul-18 07:56 PM] tcjew#0917
updated my node "node.stpauli.ltd" .... though cant get the netstat updater to get to work probably.

[20-Jul-18 07:56 PM] limax#8484
why?

[20-Jul-18 07:57 PM] tcjew#0917
tried the docker from ella git ... gives me an error

[20-Jul-18 07:57 PM] tcjew#0917
The command '/bin/sh -c apt-get update &&    apt-get install -y curl git-core &&    curl -sL https://deb.nodesource.com/setup | bash - &&    apt-get update &&    apt-get install -y nodejs' returned a non-zero code: 1

[20-Jul-18 07:59 PM] tcjew#0917
i gues it wont matter that much... just sad i am not in the list anymore 😦

[20-Jul-18 07:59 PM] limax#8484
use simple install

[20-Jul-18 08:00 PM] tcjew#0917
geth was much wasier with this 😄

[20-Jul-18 08:00 PM] limax#8484
you just need to install parity

[20-Jul-18 08:00 PM] tcjew#0917
yeah my parity is up and running n

[20-Jul-18 08:00 PM] tcjew#0917
no issue with that

[20-Jul-18 08:01 PM] limax#8484
you have issues with netstats?

[20-Jul-18 08:01 PM] tcjew#0917
yep

[20-Jul-18 08:02 PM] limax#8484
if you install npm you just need to run with pm2 app.json

[20-Jul-18 08:02 PM] tcjew#0917
if i try default way without docker container i get this errror:

[20-Jul-18 08:02 PM] tcjew#0917
npm WARN deprecated coffee-script@1.12.7: CoffeeScript on NPM has moved to "coffeescript" (no hyphen)

[20-Jul-18 08:02 PM] limax#8484
what version?

[20-Jul-18 08:03 PM] tcjew#0917
of what?

[20-Jul-18 08:03 PM] limax#8484
npm

[20-Jul-18 08:03 PM] tcjew#0917
debian, npm?

[20-Jul-18 08:03 PM] tcjew#0917
1.4.21

[20-Jul-18 08:04 PM] limax#8484
I run with npm 3.5.2

[20-Jul-18 08:04 PM] tcjew#0917
lol .... seems mine is a little outdated

[20-Jul-18 08:04 PM] tcjew#0917
absolutely no npm guy

[20-Jul-18 08:04 PM] tcjew#0917
I allways wonder why such a simple task needs to many fragile deps

[20-Jul-18 08:06 PM] limax#8484
normal way  to install (update) npm, clone stats, and run ```npm install pm2 -g``` from that folder

[20-Jul-18 08:06 PM] limax#8484
and after that npm install

[20-Jul-18 08:06 PM] tcjew#0917
yeah seen that in the git readme, but thx

[20-Jul-18 08:07 PM] limax#8484
also the last 2 pages from pdf pinned in #mining is ok

[20-Jul-18 08:08 PM] tcjew#0917
can you pm me the pw again. lost it

[25-Jul-18 09:55 AM] Iame3#9058
What's wrong with my math? <https://coinmarketcap.com/currencies/ellaism/> is showing 10,026,627 ELLA  circulating supply. It must be block 2,005,325 now (10,026,627/5). Even worse if we divide by 4.91 - we get block number 2,042,083. Anything wrong in CMC?

[25-Jul-18 09:59 AM] limax#8484
I think they are using an algorithm to determine current block number and using 12 sec as average block time and 5 Ella as reward

[25-Jul-18 09:59 AM] Iame3#9058
And they're wrong since average block time is 14.66 s?

[25-Jul-18 10:00 AM] limax#8484
I presume so

[25-Jul-18 10:00 AM] Iame3#9058
It would be nice if they get numbers from <http://stats.ellaism.org>

[25-Jul-18 10:04 AM] limax#8484
I'll move this also to our secondary explorer next days http://lab.ellaism.org

[25-Jul-18 10:08 AM] Iame3#9058
I submitted bug to cmc, will inform when they answer or fix.

[25-Jul-18 02:39 PM] kubu00#4514
!profit 10

[25-Jul-18 02:39 PM] EllaBot#1555


[25-Jul-18 02:39 PM] kubu00#4514
Im using 4,91

[25-Jul-18 10:52 PM] ellaismer#6750
@Iame3#9058 That number is correct. We also have uncle rewards. So the average rewards is a little bit over 5.

[03-Aug-18 09:38 AM] limax#8484
@here Chris from Minerpool confirmed that the pool is ready and supporting the fork

[03-Aug-18 09:39 AM] limax#8484
Updated list here <https://wiki.ellaism.org/hardfork>

[03-Aug-18 03:46 PM] limax#8484
Last math is showing that 94.42% of the network is ready

[03-Aug-18 03:46 PM] limax#8484
Hope to be confirmed in few hours

[04-Aug-18 12:58 AM] Iame3#9058
🥂 hardfork happened

[04-Aug-18 12:59 AM] limax#8484

https://cdn.discordapp.com/attachments/439846226238636032/475165808168009728/Screenshot_from_2018-08-04_07-58-50.png

[04-Aug-18 01:03 AM] limax#8484
@PoolOperators Thanks for your support

[04-Aug-18 01:28 AM] ellaismer#6750
@PoolOperators Please note that the custom config at https://github.com/ellaism/parity-config/blob/master/ellaism.json is only compatible with parity >= 2.0. If you are using parity 1.10 or 1.11, please switch to the embedded config `parity --chain ellaism` ASAP.

[04-Aug-18 01:29 AM] ellaismer#6750
And really sorry we missed this important detail in previous announcements to pool operators.

[04-Aug-18 01:32 AM] limax#8484
From what I can see the following are ok:
2 miners on both pools
devpool
pool sexy
comining
solopool
clona.ru

[04-Aug-18 03:19 AM] limax#8484
@tcjew#0917 @EllaSteve#3114 @AcroDuck#4262 please check your nodes

[06-Aug-18 04:13 AM] tcjew#0917
just restarted ... hope that helps

[06-Aug-18 04:21 AM] tcjew#0917
getting this errror: " Stage 3 block verification failed for #2000000 (0x67bf…1fbf)
Error: Error(Block(InvalidDifficulty(Mismatch { expected: 0xd4087a1168, found: 0xd3edfc51de })), State { next_error: None, backtrace: None })"

[06-Aug-18 04:21 AM] tcjew#0917
seems like i am not rdy for hard fork 😦

[06-Aug-18 04:22 AM] tcjew#0917
not really sure whats the problem. will try with a new version of parity later

[06-Aug-18 04:23 AM] DeSVaR#3179
Try using 10.6 stable

[06-Aug-18 04:25 AM] DeSVaR#3179
🤷🏻‍♂️

[06-Aug-18 04:28 AM] tcjew#0917
trying 2.0.1 beta now ... seems like its catching up

[06-Aug-18 04:31 AM] tcjew#0917
yep I think its all good now

[06-Aug-18 04:37 AM] limax#8484
If you are using v2 you need custom json file when you start parity. For version lower than 2.0 you just start with --chain ellaism (will use config embedded in parity)

[06-Aug-18 04:51 AM] kubu00#4514
did we need to info every time parity team/devs if we want to support chain ellaism on parity as always ?

[06-Aug-18 06:19 AM] AcroDuck#4262
@limax#8484 I had misconfigured (deleted on 1 node) "eth-net-intelligence-api" which caused issues on "stats.ellaism.org.
For me the Parity 10.9 works fine on my machines. I double checked that I run it using "--chain ellaism" on acroduck.de and myroots.de

[06-Aug-18 09:18 AM] tcjew#0917
hmmm their are 103 pending transactions on my node.

[06-Aug-18 09:18 AM] tcjew#0917
seems pretty high

[06-Aug-18 09:20 AM] AcroDuck#4262
My parity looks like this:
2018-08-06 13:19:36 UTC Imported #2015441 10dd…77a0 (32 txs, 0.82 Mgas, 41.15 ms, 5.15 KiB)
2018-08-06 13:19:58 UTC   40/500 peers   5 MiB chain 66 MiB db 0 bytes queue 200 KiB sync  RPC:  0 conn, 17 req/s,  81 µs

[06-Aug-18 09:22 AM] AcroDuck#4262
yours is the stpauli.lts

[06-Aug-18 09:22 AM] tcjew#0917
yes

[06-Aug-18 09:24 AM] AcroDuck#4262
do you run a pool on it?

[06-Aug-18 09:29 AM] tcjew#0917
nope i just use it for my web wallet as backend

[06-Aug-18 09:30 AM] AcroDuck#4262
ok, I thought pending transactions are refering to payouts performed by the pool.... mhhh

[06-Aug-18 09:34 AM] AcroDuck#4262
now they are gone

[06-Aug-18 09:34 AM] tcjew#0917
yeah i restarted 😄

[06-Aug-18 09:34 AM] tcjew#0917
but it seems new ones are getting processed

[06-Aug-18 09:34 AM] tcjew#0917
now

[06-Aug-18 11:54 AM] limax#8484
Stocks Exchange is now upgraded

[07-Aug-18 05:14 PM] ellaismer#6750
@limax#8484 For v2 it also just works with --chain ellaism. All versions after v1.10.6 can use the embedded config. The custom config is totally optional and it's just put there for reference, and in case of emergency. 😃

[08-Aug-18 12:00 AM] limax#8484
Good to know. Then we should specify that the preferred way is to use the embedded config and start with --chain ellaism for all versions and if json file is used, will work only on v2+

[20-Sep-18 01:29 PM] EllaSteve#3114
https://www.youtube.com/watch?v=apIHpBSdBio

[20-Sep-18 01:30 PM] EllaSteve#3114
EWASM 😃 😃

[20-Sep-18 03:53 PM] DeSVaR#3179
When?!?!

[20-Sep-18 03:53 PM] DeSVaR#3179
It still says soon 😃

[20-Sep-18 03:54 PM] EllaSteve#3114
going onto testnet soon

[20-Sep-18 03:54 PM] EllaSteve#3114
well a testnet, not sure which one

[20-Sep-18 03:55 PM] EllaSteve#3114
they leaked the rpc endpoint for it in the video so maybe it works now even 😃

[20-Sep-18 03:56 PM] EllaSteve#3114
oh you gotta jump ahead 15 minutes until it starts

[20-Sep-18 03:56 PM] DeSVaR#3179
I see 😆

[04-Oct-18 10:24 PM] EllaSteve#3114
Lane Rettig talking about ewasm live right now, https://www.youtube.com/watch?v=DYBafiahBCA

[09-Oct-18 12:24 PM] wander_over_crypto#0561
If ewasm will be adopted by Ethereum Ella loose it advantage? This is sad that no one use wasm on Ellaism.

[09-Oct-18 12:29 PM] terra-pescado#4777
Then we'll adapt progpow?

[09-Oct-18 12:30 PM] EllaSteve#3114
wasm is something I'd love to play with on a Friday night there's to many other things for me to look at 😦   Someday this year I will for sure.

```
