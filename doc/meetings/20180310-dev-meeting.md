# Development Meeting (10 Mar, 2018)

This is the log of *Weekly General Development Meeting*. It happens every Saturday 4pm UTC in the #development Discord channel.

```
osoese - Today at 11:00 AM
Good Morning @DEVS
ellaismer - Today at 11:00 AM
!rsvp ping
RSVPBotBOT - Today at 11:00 AM
@IaMaBeAsT @Brokebeard @Riddlez666 @Taubda @ellaismer @LetEpsilonBe @osoese @jal3inc
Riddlez666 - Today at 11:00 AM
ellaismer - Today at 11:01 AM
@here Our dev meetings this week starts now.
Brokebeard - Today at 11:01 AM
Hello everyone
IaMaBeAsT - Today at 11:01 AM
Howdy all
Riddlez666 - Today at 11:01 AM
im alive lol barely
TBates76 - Today at 11:02 AM
HI.. what day is this?
Brokebeard - Today at 11:02 AM
I'm  going through online traffic school.. Mandatory 4 hours of reading then exam -.-
damn traffic cameras...
easy - Today at 11:04 AM
Hello
TBates76 - Today at 11:04 AM
Ok this is now the weekly meeting any other discussions needs to goto general(edited)
!RSVP YES
ellaismer - Today at 11:07 AM
One thing I really want to discuss is about our geth client. Our current geth fork is based on ETC, but many devs have suggested that we create one based on ETH due to various compatibility issues. The problem we have right now is related to unused code -- our chain's config is similar to ETC, and if we blindly just use ETH's fork, we can get it working, but it will contain many unused codes. So what I'm thinking about is to fork ETH's version, but add multi-chain support -- make it by default support ETH/ETC/ELLA three networks. We accomplish three things by doing this:

1. We solved our problem that we lack geth compatibility fork for ELLA.
2. ETC is also suffer from the same problem. By doing this, we also help ETC users who use geth, and it will likely gain some more users for us.
3. If we make the changes minimal and only related to multi-chain support. We can attract those who want to use geth on multiple networks.
osoese - Today at 11:08 AM
@ellaismer music to my ears - here to help
also - please take this as humor as that is what I mean, but I think our next block mining algo can be
Riddlez666 - Today at 11:11 AM
lol
ellaismer - Today at 11:11 AM
And because we have limited manpower, what I would suggest is to do this:

1. We keep https://github.com/ellaism/go-ellaism using ETC's fork, and continue to merge ETC upstream patches. This way, we don't break anything for existing go-ellaism users.
2. We use https://github.com/ellaism/go-ethereum, which was started by @MakeMoneyOz - ellaismpool.com, as the base for multi geth version based on ETH.
3. We make the changes minimal -- we don't change golang import paths (keep it github.com/ethereum/go-ethereum). This makes it easier to merge upstream ETH changes.
4. I created a team called "multi-geth" for ellaism/go-ethereum, if you want to help developing multi-geth, please just ask me to add you to the team.
5. All changes for multi-geth go through pull requests. Master is set as protected branch.
GitHub
ellaism/go-ellaism
go-ellaism - Go language implementation of the Ellaism protocol
How @DEVS like this? Is there anything I might have missed?
TBates76 - Today at 11:13 AM
We could also put this out to the other coins for dev help
jal3inc - Today at 11:13 AM
Good morning :sunny:️
TBates76 - Today at 11:14 AM
Aka eth/etc
osoese - Today at 11:14 AM
@ellaismer agreed by me and I like #3 especially because that was tough to do when @Riddlez666 and I worked on this
ellaismer - Today at 11:15 AM
@TBates76 Yeah that's a good idea. I think we can first finish a version, it will better help to gain dev support.
osoese - Today at 11:15 AM
(the import paths)
ellaismer - Today at 11:15 AM
@osoese Yeah great. :smiley:
And by the way, there're tools to help you to change import paths (like gomvpkg), but it will be a problem when merging upstram changes.
So I'm glad to know we like keeping github.com/ethereum/go-ethereum import path. :smiley:
osoese - Today at 11:18 AM
well, if there is a tool for that I will take a look because search and replace wasn't the answer and there are a lot of updates - I think we got close but never got every path updated in my last attempt
gave up and forked a version keeping the paths to edit instead - so glad you are open to that
ellaismer - Today at 11:22 AM
And @DEVS, as we are collaborating using PRs, If you see new PR in github.com/ellaism/go-ethereum, please review the PR. Click "changes" tab, and click "Review Changes". If you think everything look okay, please select "Approve", and click "Submit". :smiley:(edited)
Riddlez666 - Today at 11:23 AM
We are getting farther on setting up the exchange no date on when any test will happen as its a pretty big undertaking. But last i check 59 people signed upto the mailing list for info.
ellaismer - Today at 11:24 AM
Okay. My only agenda today is multi-geth, and let's just carry out the project first.
@here If you have something else to discuss, now it's time to raise your voice. I'll continue to be here answering questions.
Riddlez666 - Today at 11:26 AM
Ive been busy this week with some real life backlog and the exchange filling up the other time so i have nothing other than that myself
jal3inc - Today at 11:26 AM
@Riddlez666  :smiley:
Riddlez666 - Today at 11:26 AM
70 people now lol
osoese - Today at 11:27 AM
I can link to the alpha wallet - which is definitely in alpha
https://github.com/osoese/Opal-Alpha-0.0.1
GitHub
osoese/Opal-Alpha-0.0.1
Opal-Alpha-0.0.1 - Ellaism Opal Wallet Alpha 0.0.1
TBates76 - Today at 11:27 AM
I would like to discuss the roadmap this geth fix will that help move along the roadmap and help with BTC relay
jal3inc - Today at 11:28 AM
Just wanna say thank u to all the devs that have taken the time to get me up to speed with things. You guys are great!
osoese - Today at 11:29 AM
@jal3inc yw
@ellaismer youa re probably busy with geth and work - but if you are interested in the egem project we are working under @Riddlez666 direction and could definitely use any extra eyes on the project - we have one exchange server and 2 coin servers going - getting them all to talk is coming together but help is always apprecaited
jal3inc - Today at 11:31 AM
@ellaismer  sent you over that info to your inbox check it out when u have a chance.
TBates76 - Today at 11:31 AM
@osoese wouldnt the multi chain geth help with that?
Riddlez666 - Today at 11:31 AM
ehhh
not with what we are doin
osoese - Today at 11:31 AM
@TBates76 this one really has nothing to do with that atm
jal3inc - Today at 11:32 AM
From exchange side of things id imagine no difference really
osoese - Today at 11:32 AM
BUT - the geth update very important!!
ellaismer - Today at 11:33 AM
@osoese Yeah I'm glad to help.
Riddlez666 - Today at 11:35 AM
I have a feeling decentralized exchanges are just another hype word as it will have a single point of failure also.
My point being if its cryptopia or cryptobridge you still need a support team if shit screws up which in itself is not a decentralized exchange.
osoese - Today at 11:37 AM
@Riddlez666 was going to politely disagree until I saw 2nd comment
Riddlez666 - Today at 11:37 AM
also its not a complete system if you need a support team to fix screwups...lol
im having trouble seeing the vision of decentralized exchanges also
sorry im brain storm rambling
jal3inc - Today at 11:39 AM
@Riddlez666  im with u on that
osoese - Today at 11:41 AM
okay - I don't have anything else for today, but if anyone wants to give the wallet a try - just know there are bugs - its on meteor (at this time) and @MakeMoneyOz - ellaismpool.com @jal3inc @Riddlez666 are all helping me put together install instructions but it might not be complete as of yet. If you need help just post a message in #development
Riddlez666 - Today at 11:42 AM
Bitshares for example they have there own chain with a bunch of exchanges tied to it but can you do trades with just the bitshares client? no you cant you need a 3rd party system built on top of it.
ellaismer - Today at 11:42 AM
@osoese I got the SMTP user for you as well, for osoese@ellaism.com. Check your Keybase!(edited)
osoese - Today at 11:43 AM
ha! thank you @ellaismer
@Riddlez666 the core of a decentralized exchange is a trade. That trade happens whenever you send coins to someone for like kind value in something else. If we just get that fore functionality embedded in a wallet/app that connects to peers instead of central server then it can grow into a decentralized exchange. This would then be independent of all government or corporate supervision. If the software is open source then communities can handle support.
ellaismer - Today at 11:50 AM
Looks like we're having a short meeting today as well! If there's no more things to discuss, let's close?
TBates76 - Today at 11:51 AM
Roadmap
will there be a roadmap with dates for completion?
ellaismer - Today at 11:53 AM
Hmm @TBates76 probably not. Deadlines are always missed everywhere. And as said before, it's also important to have a  focus on quality.
To be honest, the roadmap you see at https://ellaism.org/roadmap has no dates on purpose, because that's not how software development (especially open source software development) works.
Ellaism
2018 Roadmap
Ellaism Core’s Roadmap in 2018. A stable Ethereum network without pre-mine or dev fees.
TBates76 - Today at 11:54 AM
I understand
Riddlez666 - Today at 11:55 AM
all dates do is stress and usually end up releasing shitty code
TBates76 - Today at 11:55 AM
I am just thinking of making something for people to see whats being worked on atm
Riddlez666 - Today at 11:56 AM
ahh the meta page i need to update
but shows in progress stuff
ellaismer - Today at 11:57 AM
@TBates76 I think we try to use the monthly update for that purpose. I understand there may be better ideas, though.
TBates76 - Today at 12:01 PM
thats all I can think of atm
:hammer:  meeting adjourned
(closest thing to a gavel)
```
