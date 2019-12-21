# Development Meeting (2 June, 2018)

This is the log of *Weekly General Development Meeting*. It happens every Saturday 4pm UTC in the #development [Discord channel](https://discord.ellaism.org).

```
ellaismer - Yesterday at 12:14 PM
@Towd Personally I like the idea. Both Bitcoin and Monero has this kind of landing page video.
Towd - Yesterday at 12:16 PM
Okay.  I'll flesh it out.  I may take a little time to do something nice and have it coincide closely with the hard fork, so it includes that new information.
I'll also check a few other coins like BTC and Monero and see how they tackled it.
Also, in regards to the marketing.  I had thought about doing something where people can just earn points and after accumulating enough points they could redeem the points for something from the swag store.  So, I might just issue a token  and give that out instead of points.   Maybe run this along side giving out a few prizes per week for participation in whatever the weekly activity is.  Like blog posts, or development.
Nulligun - Yesterday at 12:21 PM
@ellaismer   I saw this commit earlier for enabling features at block 200k, but how do other nodes get these?  https://github.com/ellaism/parity-config/commit/27f40e80ad9dfde619858bdd400874d70f714ef5
GitHub
Update new ellaism config · ellaism/parity-config@27f40e8
ellaismer - Yesterday at 12:21 PM
Sounds like a cool idea. Just me know if you need any help from technical side.
Towd - Yesterday at 12:22 PM
I'm trying to just develop some ideas to keep the community involved.   I seem to be fighting a general market malaise right now.  So my best strategy is to just offer a variety of things and keep people interested up to the fork.
@ellaismer Okay, thanks.  :smiley:
ellaismer - Yesterday at 12:22 PM
@Nulligun See Parity release note: https://github.com/paritytech/parity/releases
The chain spec change is added in PR https://github.com/paritytech/parity/pull/8520 and is included in 1.10.3 and 1.11.0 upward.
GitHub
paritytech/parity
parity - Fast, light, robust Ethereum implementation.
EllagramBOT - Yesterday at 12:23 PM
JayGatsbys (in reply to @Towd): Yes all eyes seem to be on BTC(edited)
Nulligun - Yesterday at 12:23 PM
ahh nice, done long ago.  So if someone was using a json file they downloaded, they will have to update it?
ellaismer - Yesterday at 12:24 PM
Yeah if someone uses a json file, they'll need to update it, and needs to make sure they're using Parity 1.10+ (where pwasm is released).
But the easiest way is just run with --chain ellaism.(edited)
Nulligun - Yesterday at 12:25 PM
got it
limax - Yesterday at 12:25 PM
@Nulligun tell everybody about the idea with TrustWallet
Nulligun - Yesterday at 12:26 PM
I contacted Viktor Radchenko https://trustwalletapp.com/  to see if he would add Ellaism.  He said he would look into the use cases and get back to me.
Trust - Ethereum & ERC20 Wallet
Trust Wallet is a secure mobile Ethereum wallet that supports Ethereum and ERC20, ERC223 and ERC721 tokens. It provides a fully security audited system to send, receive and store digital assets. With Trust Wallet you have complete control over your private keys that are only ...
It was pretty easy to add Ellaism, I was able to create a wallet,  receive and send funds from it after 10 minutes.   So the option to fork it and create a standalone version is there too.  It also has  Dapp browser built in.
ios and Android versions of it
ellaismer - Yesterday at 12:29 PM
Yeah great. I'll look into it and possibly get a PR done for adding Ellaism support.
Looks like they support a good number of networks already.
Nulligun - Yesterday at 12:30 PM
Viktor was the reason I was asking about transactions per day
limax - Yesterday at 12:33 PM
If we fork the project we can release android version without any problem. For ios I think wil be complicated
EllagramBOT - Yesterday at 12:34 PM
JayGatsbys: Ios :rofl:
limax - Yesterday at 12:38 PM
I forgot, we should welcome @Ingridfire
EllagramBOT - Yesterday at 12:38 PM
Maxim0503: Hello  gays
Maxim0503: How  are  you  ?
JayGatsbys: It is guys
Maxim0503: My  name  is  Max
JayGatsbys: You seem to forget this
Maxim0503: I   from  Russia
JayGatsbys (in reply to Maxim0503): Miller?
ellaismer - Yesterday at 12:40 PM
And on a similar issue, the discussion to add multi-chain support in MetaMask looks like to have been restarted. ETC community is doing some work to get that stuff going, and Ellaism is mentioned there. This may take some time, but in case someone wants to join the discussion, here's the link: https://github.com/MetaMask/metamask-extension/issues/1820(edited)
GitHub
Multi-Chain Support · Issue #1820 · MetaMask/metamask-extension
MetaMask wants to support a plurality of chains in the future, but we don't want to just add a huge menu of providers, so how do we want to allow MetaMask usage with other chains?

 Make EIP 15...
Welcome @Ingridfire!
EllagramBOT - Yesterday at 12:40 PM
Maxim0503: e
Maxim0503: What are  you  doing?
Ingridfire - Yesterday at 12:41 PM
Hey everyone :smiley:
EllagramBOT - Yesterday at 12:42 PM
JayGatsbys: Hello
Towd - Yesterday at 12:43 PM
@Ingridfire I'll post some mockups for the front page video I'll start developing in the #website-development channel.  If you give me an optimal or ideal resolution, I can deliver for that as well.
This next week, I'm planning to give out some rewards in our weekly giveaway for top Github activity.  I'll post details at the start of the week.  I've learned we don't have a great deal of blogging types, so let's have a productive week!  :smile:
I think Ellaismer is going to win a lot of t-shirts and bumper stickers.  :rofl:
ellaismer - Yesterday at 12:46 PM
Let's give them to our contributors. :smiley:
limax - Yesterday at 12:48 PM
Next week I hope I'll finish also the learnig plan for "Summer of Code". I got delayed by some personal problems and I also try to find an easy way to do introduction to blockchain and rust together, working on  a coin porject
Towd - Yesterday at 12:49 PM
@limax Great, let me know dates and details when you are ready, and I'll prepare some content to get the word out.
limax - Yesterday at 12:49 PM
Sure
This week we received some listing offers. Do you think we should discuss about that?
Towd - Yesterday at 12:53 PM
When I glanced at that, it looked like they all required a small payment.  I'm not opposed, but were there any that were free?
EllagramBOT - Yesterday at 12:54 PM
Marco: the open source pool code on the ellaism github repo is compatible with parity 1.10+?
ellaismer - Yesterday at 12:56 PM
Macro: Yes. Right now it's recommended to run it with 1.10.3.
We haven't tested open-ethereum-pool against Parity 1.11, and I heard that there may be some small issues.
EllagramBOT - Yesterday at 12:57 PM
Marco: yes i ran it on 1.11 a few weeks ago and there were problems with tjhe strarum
Marco: stratum*
ellaismer - Yesterday at 12:57 PM
@Towd Yeah looks like all current offers require listing fees.
EllagramBOT - Yesterday at 12:57 PM
Marco: but i though it was a problem on my part
limax - Yesterday at 12:58 PM
look at cryptopia fee 
5,000,000 DOT tokens
AF: 0.5 BTC, SF: 1.2 BTC + $20K in tokens(edited)
ellaismer - Yesterday at 12:58 PM
Marco: can you explain more about the stratum issue? Do you mean issue when running open-ethereum-pool or connecting a GPU miner to Parity's stratum endpoint?(edited)
EllagramBOT - Yesterday at 1:02 PM
Marco: while running the stratum node, there was a seg fault due to the pool trying to acquire jobs from parity
Marco: i dont exactly remember the message
Marco: but i know it was about the getwork
ellaismer - Yesterday at 1:02 PM
Marco yeah that's the reported issue for 1.11. You're not alone. :smiley:
EllagramBOT - Yesterday at 1:03 PM
Marco: oh hehe
Marco: so its a parity issue
Marco: not pool
ellaismer - Yesterday at 1:03 PM
For now a good solution is to use 1.10.3 for pools.
EllagramBOT - Yesterday at 1:04 PM
Marco: thats what im doing
ellaismer - Yesterday at 1:04 PM
It's more like a standard issue -- open-ethereum-pool relies on some non-standard RPC replies that happened to be supported by full nodes implementations.
But we should get a fix for this soon. So no worry.
EllagramBOT - Yesterday at 1:04 PM
Marco: but as i read there were performance improvements on 1.11 i wanted to try hehe
Marco: ok
Marco: thanks for your explanation
ellaismer - Yesterday at 1:05 PM
You're welcome. :smiley:
Anyway, regarding exchange listings, I think one thing we can do is to better utilize the community@ellaism.org email address? @limax I think if we can share the account creds with trusted community members, then it may help to speed up responding emails to exchange offers. And I'm sure most people here today have better negotiation strategy than I do. :smiley:
limax - Yesterday at 1:06 PM
Sure
This is a good idea
ellaismer - Yesterday at 1:08 PM
So, just ask @limax if you want to offer your help on this. :smiley:
kubu00 - Yesterday at 1:08 PM
BTW - ella mining calculator in ella bot - works for me!
ellaismer - Yesterday at 1:10 PM
@Towd Thanks for helping out to manage the meeting agenda issues!
Towd - Yesterday at 1:11 PM
I'm happy to  maintain.  Let's keep them going.   It can help get discussion going through the week.  For next week, post here: https://github.com/ellaism/meta/issues/37
GitHub
Ellaism Community Weekly Meeting 16 Agenda · Issue #37 · ellaism...
Meeting time: Saturday 09/06/2018, at 16:00 UTC
Meeting location: Discord server

Agenda
To be discussed.
kubu00 - Yesterday at 1:11 PM
Ella calc mining its a @Towd  and @@DeSVaR  idea(edited)
Good idea :)
Towd - Yesterday at 1:15 PM
Anything else this week?  It seems covered everything.
ellaismer - Yesterday at 1:15 PM
@here Last chance if you have anything else to discuss!
maskekar - Yesterday at 1:15 PM
when moon?
EllagramBOT - Yesterday at 1:17 PM
JayGatsbys (in reply to @maskekar): Ask btc
ellaismer - Yesterday at 1:17 PM
:laughing: Anyway, I guess we can close the meeting for this week.
!rsvp set-date 9 June
```
