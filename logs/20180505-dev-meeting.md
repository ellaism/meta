# Development Meeting (5 May, 2018)

This is the log of *Weekly General Development Meeting*. It happens every Saturday 4pm UTC in the #development [Discord channel](https://discord.ellaism.org).

```
ellaismer - 05/05/2018
@here Our dev meeting this week starts now! I guess we have many stuff to discuss:

1. Marketing and giveaway contest by @Towd 
2. Byzantium and WebAssembly hard fork.
!rsvp ping
RSVPBotBOT - 05/05/2018
@Nulligun @Towd @sc0rp1on @ellaismer @limax @terra-pescado @kubu00
Towd - 05/05/2018
I don't want to take up too much time.  I posted the rules for the contest in the #marketing channel.  I can take any questions if there are any.  Or if someone has any suggestions.
I do have two questions.   Do any of our bots offer a random number generator?  If not, I'm just going to use Random.org for drawings.   Second is there a convenient way to generate logs from a channel?
Also, I just want to thank everyone who may be here who donated.  We've raised almost 3000 ELLA for the contests.  We have more than enough to cover all the prizes I outlined in the post.   It came out to much more than I expected.  :thumbsup:
ellaismer - 05/05/2018
I guess we don't have that. AFAIK there's not much progress of random number generator smart contracts -- most of them are slow or not reliable.
And for channel logs, we don't have that either. Our current meeting logs are just done by copy and paste.
Towd - 05/05/2018
I don't think it'll be an issue if I just generate a list from this Random.org and post it.  I'm going to keep myself out of any contests to avoid any appearance of favoritism.  It is all just swag prizes that will be given away randomly anyway.  We'll have community votes for any coin prizes.
ellaismer - 05/05/2018
Or if we're okay with not "absolutely secure" random numbers but good enough ones (might be possible to be tinkered by miners), we can use block nonce or other block information. I can get a bot if we need that.
Towd - 05/05/2018
I don't think it'll be an issue.  I wouldn't want to throw manpower at the problem for something so minor.
ellaismer - 05/05/2018
(And I can take a look whether we can try something more fancy. For example, because we have BTC relay, we might be able to use Bitcoin block hash (harder to be tinkered by miners because of higher difficulty) and publish the random number on Ellaism blockchain.)
Towd - 05/05/2018
I had thought for some voting, we might go with carbon votes, but in the end I settled on just using a Discord poll with our community wallet signers acting as a committee to approve finalists.  I felt carbon voting would give too much weight to rich members and maybe not in the spirit of the contests.  But if anyone has a concern or suggestion, let me know.
ellaismer - 05/05/2018
But I think using Ellaism block hash or block nonce would be good enough -- if miners want to tinker that, they would need to drop the whole block reward for that round, which is an expensive attack.
Towd - 05/05/2018
If it's something, you want to try.  We can roll that into the contest description just to help demonstrate the versatility of the project, but  again, I don't think it will end up being an issue.
I'll still log the results as transparently as possible in the #marketing channel as we conclude each week.  And any random drawings will only be for bumper stickers and t-shirts.
ellaismer - 05/05/2018
Yeah sounds good. My position is just that we should try opportunities to use our own blockchain as much as possible. So I think this should be something we get done.

We would basically need:

1. A target block number in the future for the draw.
2. Random number range.
Anyway, we can discuss more on random number stuff later. :smiley:
(And I'll try to get the bot ready soon.)
Towd - 05/05/2018
Sounds good to me!   I'll put that in the description.  We'll start the first contest week in in about 18 hours, and then we'll have a week before it completes and we determine winners.   That sounds like a cool solution.  :smile:
ellaismer - 05/05/2018
And regarding faucet, do you mean the current Twitter faucet? I guess that would mean we stop the current @TwitterFaucet bot to facilitate that?(edited)
EllagramBOT - 05/05/2018
Massague: Ellaism is posible masternode?
Towd - 05/05/2018
Well, I was thinking we just use the current one.  I think it is limited to being used 3 times a week.  I just provides me with a way to log entries in the Discord.
We could send it some extra funds if we felt we'd deplete it.  But, I'm not expecting suddenly 100s of participants using it.  I think it'll build a little more slowly and some of the later week contests require more effort and will therefore be limited.
ellaismer - 05/05/2018
Okay got it. I think as long as we don't change the purpose for the original Twitter faucet donations, we can always use the fund if people agree. Just let me know if you need any help on this. :smiley:
Massague: No we don't do masternode.
EllagramBOT - 05/05/2018
Massague (in reply to @ellaismer): Thanks
Towd - 05/05/2018
Plus I like the idea of just incorporating some of our current tools and features like the Twitter Faucet.  We raised enough funds that we could donate 100 or so ELLA from the Community Wallet to help cover expenses.
That's the only remaining thing I need to add to the rules, is some clear instructions on using the Twitter Faucet.
If everyone is okay with that, it should be everything from me.
ellaismer - 05/05/2018
Another important thing we want to discuss today is related to Byzantium and WebAssembly hard fork. I think it's good for us to discuss them throughly, so that we have a good understanding on both this time and hard fork in the future. As an Ethereum-like blockchain, I guess it's impossible for us to avoid them -- the network contains many more features compared with Bitcoin-like networks and it's usually not possible to update them without hard forks. So actually we're taking an approach here similar to Monero. But please also feel free to raise the discussion if you think a Bitcoin-like never-hard-fork approach would be better -- it indeed has some pros and cons.

I hope we can accomplish three things in this discussion:
1. Get everyone a better understanding on what Byzantium and WebAssembly hard fork is about, and their pros and cons.
2. Find a community manager to lead the efforts to communicate with exchanges for software upgrades.
3. Development strategies in accordance with those hard forks.
And if you have any questions when I describing them, please feel free to interrupt me any time. :smiley:
The first one would be Byzantium hard fork ( https://github.com/ellaism/specs/issues/12 ). This is simply an update that allows us to use newest EVM features. If we don't do them, we wouldn't be able to use the newest version of Solidity -- we simply lack some opcodes. It also enables zkSNARKs and RSA precompiled contracts -- it allows private transactions and many more things, but to be honest, I haven't seen it being widely used nowadays probably due to the high gas cost of zkSNARKs.(edited)
GitHub
2018-0004: Hardfork Meta: Byzantium · Issue #12 · ellaism/specs
(Rendered)
Ellaism was created before Ethereum's Byzantium hard fork was finalized. This proposes to apply some of the Byzantium features onto Ellaism blockchain, activated at block 2,000,000.
This one also includes EIP100, which fixes a bug in difficulty calculation -- uncle mining, if you heard about that term.
So after Byzantium hard fork, if you do a diff comparing EIP applied in Ethereum and Ellaism, you would have the following not applied on Ellaism:

1. DAO hard fork -- I think I don't need to explain that.
2. EIP161 State Trie Clearing -- this fixes issues in state caused in transactions before homestead. We have homestead at block 0, so it's not as serve issue for us as in Ethereum. Many people also considers this EIP changed the account state too much.
3. EIP170 Contract Size Limit -- many people raise concern that it might be a problem to set a hard limit on this, because after all, in Ethereum, we don't have fixed block gas limit etc.
4. EIP649 -- this is a change in block reward unrelated to Ellaism.
And that's for the Byzantium part. Do we have any concerns/questions on this?
limax - 05/05/2018
What should be done for the fork from: miners, pools and exchanges perspective?
ellaismer - 05/05/2018
Update software: Parity >= 0.11
That's basically all.
limax - 05/05/2018
Wich will be out to test in few days I think
Nulligun - 05/05/2018
whats the contract size limit (approx)?
ellaismer - 05/05/2018
@Nulligun There won't be contract size limit on Ellaism.
For Ethereum blockchain, the limit is 0x6000 bytes.
limax - 05/05/2018
https://github.com/ethereum/EIPs/blob/master/EIPS/eip-170.md
@ellaismer For now what projects are using ewasm or pwasm. I know EOS is using wasm. There are others that you know about?
Towd - 05/05/2018
Personally, I believe this is a smart update we should be making with or without the WebAssembly.  --Just to keep us up to date with developments in Ethereum.
ellaismer - 05/05/2018
Kovan enabled wasm just last month. There may be others.
But in blockchain, WASM is a new player in the field and there's a lot more to do regarding that.
limax - 05/05/2018
For details on byzantium I think this explain even more
https://www.youtube.com/watch?v=BSkUGfilJCo
ellaismer - 05/05/2018
And concerning WebAssembly part. We currently have two standards -- a) pwasm, created by Parity, and is used in production on Kovan testnet. And b) ewasm, created by Ethereum Foundation originally, is currently only available on a non-productional testnet for cpp-ethereum. The proposal 2018-0003 used the pwasm version. The choice is pretty simple:

1. Although pwasm started its development much later compared with ewasm, pwasm is out, but ewasm is not yet.
2. Many of the ewasm specs are not yet finalized.
3. My take on ewasm is that it tries to have too many extra features -- tran-compilers, metering contracts. Whereas pwasm looks much simpler.
We do have three concerns:

1. Client compatibility -- we can only support Parity but not multi-geth. But given we started with only Parity in the beginning, I think this might be acceptable.
2. Spec compatibility -- in the future those two standards might be used in different projects, and it would cause compatibility issues. However, the good thing is that WASM has a pretty good spec. So there's not much you can change even in pwasm or ewasm. It's mostly the difference in runtime initialization and import definitions. So it might be possible to extend one runtime to support both standards in the future (while because I haven't been taking a deep enough look, so cannot give a definite answer on this).
3. Stability -- Because the WASM spec is mostly fixed and most new changes are only related to runtime/import/etc, I would see that if we ever want to fix anything in the future on WASM, it would most likely be the gas table. So regarding stability, this wouldn't be as messy as the Homestead and Tangerine Whistle fixes happened in EVM.
(And if you wonder why WASM has been growing popular in blockchain field, mostly because it's a web standard, and has a arguably larger community compared with EVM. See also: https://github.com/mbasso/awesome-wasm )
GitHub
mbasso/awesome-wasm
awesome-wasm - 😎 Curated list of awesome things regarding WebAssembly (wasm) ecosystem.
And guess that's all I have for WASM part. Are there questions or concerns?
limax - 05/05/2018
And some links from me:
https://wiki.parity.io/WebAssembly-Home
and
https://github.com/paritytech/pwasm-tutorial
and this also is from pwasm wiki:

Some advantages of Web Assembly (WASM for short) are:

Standard is maintained by huge number of interested parties
Much less 256-bit word size related overhead
Much more languages that target WASM (see awesome-wasm!)
Advanced optimisation tools for WASM -> WASM

(edited)
ellaismer - 05/05/2018
Yeah exactly!
Towd - 05/05/2018
So, the feeling is that if in a year or two, ewasm is released, we may not have a lot of changes to incorporate that?  It sounds like pwasm is already in a usable state, and ewasm is not ready in any case.
limax - 05/05/2018
@Towd I think is in @ellaismer message "it might be possible to extend one runtime to support both standards in the future"
ellaismer - 05/05/2018
From a developer's experience, it would always be possible to write once and compile on pwasm and ewasm. You might just need to configure different targets. A similar analogy is that many softwares can be compiled to Windows/Linux/MacOS.
And yeah as @limax said, extending one runtime to support both standards is also an option (but as said above, this is something I cannot give a definite answer).
And TBH I have no idea when ewasm will come out.
Towd - 05/05/2018
Thanks for the clarification.  :smile:
limax - 05/05/2018
What are the cons of the fork?(edited)
Towd - 05/05/2018
Compiling for different targets in the future makes sense if that becomes an option.  And it seems pwasm is the only solution available right now in a usable form.
ellaismer - 05/05/2018
@limax

1. We can only support Parity but not multi-geth. And exchanges might have trouble updating the software.
2. Spec compatibility and stability concerns.
And common hard fork risks apply here:

We often see in other networks that some people might decide to only update the software at last minute, or forgot to update the software, even if they support the hard fork. This may lead to some confusions.
limax - 05/05/2018
I think we have time to contact them after parity 1.11 will be out and also will be enough time until block 2mil
ellaismer - 05/05/2018
And I think this also leads to our second goal today: we would need a community manager to lead the efforts to communicate with exchanges about this hard fork. :smiley:(edited)
Towd - 05/05/2018
Is there any chance down the line that if we were to incorporate pwasm and it was updated significantly that we may need to make another hard fork to incorporate updates?  Assuming normal updates to pwasm would not require another hard fork.
ellaismer - 05/05/2018
@Towd Yes, as said above. I see the current gas table and other configurations working good. Kovan also doesn't have any networks attack now. But in the future if it happens, what might likely need to be updated is the gas table, and that would need a hard fork.
limax - 05/05/2018
First time is hard :smile:
Towd - 05/05/2018
Yes.  I see that if we get through the first hard fork successfully with minimal issues, we'll have more experience to implement future hard forks.  Granted our network size may be a lot larger, but that is a good problem to have.  :smile:
ellaismer - 05/05/2018
@here And if anyone is interested in leading the efforts to communicate with exchanges about this hard fork, please raise your voice here or in #wasm-hardfork! :smiley:
And one last thing for this Byzantium and WebAssembly hard fork discussion is regarding the development plan.

We would need to drop the following projects:
multi-geth and go-ellaism. I'll ask a developer I trust to continue to maintain multi-geth for other networks.

And we would have those new projects:
1. A new Ellaism desktop wallet, based on Parity UI. So we would have a Ellaism-branded dapps browser with this change.
2. A WASM contract development framework. The initial supported language would probably be Rust, but we'll add more in the future.
Any comments regarding the above development strategy change?
And a thing I also want to note is that our testnet has already hard forked with Byzantium and WebAssembly. So if you want to test things out, you can do it today. :smiley:
@here And if no objections (and given our primary CarbonVote also shows that people would like those new features), I would change the following specs status from "Proposed" to "Planned":

1. Byzantium Meta: https://github.com/ellaism/specs/blob/master/specs/2018-0004-byzantium.md
2. WebAssembly Meta: https://github.com/ellaism/specs/blob/master/specs/2018-0003-wasm-hardfork.md(edited)
GitHub
ellaism/specs
specs - Ellaism Protocol Improvement Specification Repository
GitHub
ellaism/specs
specs - Ellaism Protocol Improvement Specification Repository
Towd - 05/05/2018
Exciting.  Should be good for ELLA's future.
ellaismer - 05/05/2018
Cool. That's all I have for today. If you have additional topics to discuss or you have questions related to Ellaism, please raise your voice now!
And for our next meeting, don't forget to post topics you want to discuss at https://github.com/ellaism/meta/issues/30
GitHub
Ellaism Community Weekly Meeting 12 Agenda · Issue #30 · ellaism...
Meeting time: Saturday 12/05/2018, at 16:00 UTC
Meeting location: Discord server

Agenda

Please comment below for things you want to discuss.
limax - 05/05/2018
I have one thing that I think we should solve now, regarding the wiki. Because now clear documentation will be even more needed
ellaismer - 05/05/2018
Yeah I agree. Looks like a huge issue right now. Our docs are outdated.
limax - 05/05/2018
We can discuss about this in #website-development also but we need to find a way to secure the rights on the github wiki or put the entire documentation as separate project
I have the entire structure about the wiki with what categories we need to put there first and also I have some ideas on how to change parts of the website
I'm sure that I can do this with @Nulligun but we just need the start
ellaismer - 05/05/2018
:thumbsup: Let's discuss in #website-development then. I don't have any good ideas right now, either.. I guess we need to work together and come up with a solution.
limax - 05/05/2018
If you agree on separate project we can use mdbook and start from what documentation we have on website for now
Ok
```
