# Development Meeting (17 Feb, 2018)

This is the log of *Weekly General Development Meeting*. It happens every Saturday 4pm UTC in the #development Discord channel.

```
ellaismer - Today at 11:00 AM
!rsvp ping
RSVPBotBOT - Today at 11:00 AM
@IaMaBeAsT @ΨCowsGoWuff @badstars @Towd @Mazaribeiroツ @Brokebeard @Eric @Riddlez666 ツ ☠ - pool.ellaism.io @ɃuzzkillɃ @Count Cryptula @TBates76 @LinearGoose @Dp Dp @ellaismer @Zveno @లిమాస్ @0xcaffe @osoese @jal3inc @Kenny @suitengu @AL1CE @terra-pescado
ipsec - Today at 11:00 AM
-_-
ellaismer - Today at 11:02 AM
@here Our Dev Meeting is happening now, if anyone wants to join. Looks like @TBates76 won't be there, so I'll be the temporary host. The agenda is simple: a) @DEVS updates with recent work, and b) we discuss several topics related to Ellaism.
HonestCrypto - Today at 11:04 AM
Are there rules to participation?
ipsec - Today at 11:04 AM
I want to join :smile:
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 11:04 AM
Keep it PG13 lol
TBates76 - Today at 11:04 AM
Sorry im late
Ill be a few mins getting settled
ellaismer - Today at 11:05 AM
For b), we should have got a topic list in advance, but apparently we missed the time. :laughing: So I'll give a list below, and please feel free to bring up anything else you want to discuss:

a) Contributor Fund setup progress with @Riddlez666 ツ ☠ - pool.ellaism.io
b) (Dev) go-ethereum JSON RPC problem

I'll also be there for the whole time to answer/resolve any questionss/issues.
osoese - Today at 11:06 AM
@here I have a basic agenda we proposed with item resolutions - want me to paste?
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 11:06 AM
I have my signers and directed them to get keybase i need to follow up with them to see were they are at with it
ellaismer - Today at 11:07 AM
@osoese Yes!
osoese - Today at 11:07 AM

1) ellagem --> working with Riddles on small fixes turned into rabit hole that I ended up coding the api price conversions for ELLA to BTC USD EUR into standalone app to check it which turned into...

resolution - using new wallet mentioned in number 2

2) light wallet (opal) --> electron meteor app connecting to rpc “https://jsonrpc.ellaism.org” and having some issues with connections - can create wallets and see balances but working on trading balances

resolution - everything is working as of yesterday

3) go ethereum current version won't use ellaism genesis file causing issues
have forked recent go ethereum to ellaism-io and working with Riddles to get it loaded using ellaism genesis - almost there but not yet - the custom version has go errors when we change the configurations which are somewhat hard coded so currently using the proper go ethereum version and booting ellaism like its a private chain and getting close on this

temporary resolution - parity working - go ethereum version is getting close - just confirguration issues

4) stellar bifrost server list ella to trade - been working with makemoneyoz on this and he has a successful bifrost docker that we were both able to load - then fails for ella - we think related to geth (go ethereum) issues

- going to start back on this with makemoneyoz this week

5) write up for andreas book mastering ethereum - would like feedback on my post from this morning

please?

HonestCrypto - Today at 11:07 AM
I'd also like to see discussion of mobile wallet development and possibility of forking upcoming Bread/BRD wallet code when available.
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 11:07 AM
@HonestCrypto  our light wallet is the start of that hopefully
osoese - Today at 11:08 AM
screen shot of light wallet - it is dev so most of the links on the electron side are filler - but the meteor app is loaded in main panel
HonestCrypto - Today at 11:08 AM
I suspect the upcoming BRD support for Eth will be a boon for the mobile side
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 11:10 AM
@Shaman @sncs @vega40k hows the keybase setup coming for becoming a signer
ipsec - Today at 11:11 AM
Can I create my token at this stage of development of ELLA?
ɃuzzkillɃ - Today at 11:12 AM
you can create tokens, just not sure the block explorer can do the validation part, but they do work
ipsec - Today at 11:12 AM
I am asking because I am writing a mobile application in which I would like to use either a lightweight wallet or a token
osoese - Today at 11:13 AM
@ellaismer regarding the geth item 3- @Rippthrough and me both compiled from source and are having trouble loading the genesis file for ellaism - I can paste the current config and startup params if you want when we get to that
@Riddlez666 ツ ☠ - pool.ellaism.io I meant
ellaismer - Today at 11:13 AM
Okay @osoese please paste.
osoese - Today at 11:14 AM
(will take a minute to pull up)
sc0rp1on - Today at 11:16 AM
!rsvp yes
RSVPBotBOT - Today at 11:16 AM
@sc0rp1on You have RSVPed to Weekly General Development Meeting on Saturday (17 Feb) 4pm UTC. Remember to be there!
ellaismer - Today at 11:16 AM
As we don't have many people here, so I guess it's okay if we discuss multiple things in parallel. :laughing: Don't panic! Or @TBates76 if you want to host when you're ready.
IaMaBeAsT - Today at 11:16 AM
I is here
TBates76 - Today at 11:16 AM
on pc for better typing now
which is what I needed
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 11:17 AM
@IaMaBeAsT  did you get the keybase going?
TBates76 - Today at 11:17 AM
First thanks all for joining
IaMaBeAsT - Today at 11:18 AM
Yes sir. I have my user name same as discord. Just have to add the pgp key and all ready
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 11:18 AM
@IaMaBeAsT  kk
TBates76 - Today at 11:18 AM
I know the timing of this is not ideal for some timezones so I would like to address that first and set next meeting  later in evening to be fair
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 11:19 AM
what about 9pm UTC?
HonestCrypto - Today at 11:20 AM
Might I also suggest posting the chat logs somewhere for easy reading when people are unable to attend?
ellaismer - Today at 11:20 AM
@HonestCrypto Yes I'll do this right after this meeting.
HonestCrypto - Today at 11:21 AM
@ellaismer  excellent - thank you.
TBates76 - Today at 11:22 AM
9 may work but I was thinking more towards 12 am UTC
sc0rp1on - Today at 11:22 AM
Keep in mind 9pm utc = +5:30 in india :joy:
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 11:23 AM
no time is gonna work the best lol
ipsec - Today at 11:23 AM
XD
sc0rp1on - Today at 11:23 AM
I can be up late. Just not after 3am or before 10am :rolling_eyes:
IaMaBeAsT - Today at 11:23 AM
maybe for the people that have bad time they can pre send topics to the meeting organizer and the meeting organizer can bring up their items?
TO assist with the time difference
TBates76 - Today at 11:25 AM
the idea is so that everyone has participation, and those members whom are in a different timezone
jal3inc - Today at 11:25 AM
Hi Everyone, I have been mining Ella for about a month  now. I really like the coin and also feel the project could have some amazing potential. I am a full time web dev. Ruby on rails is my specialty amongst a solid list of other things. Not sure where exactly where this project stands and what needs to be done to help move it forward but if there is anything I can do to help I'd be more than happy to commit some of my spare time to this project.
osoese - Today at 11:25 AM

{
    "config": {
        "chainId": 64,
        "homesteadBlock": 0,
        "eip155Block": 0,
        "eip158Block": 0
    },
    "identity": "mainnet",

    "name": "Ellaism Mainnet",

    "state": null,

    "network": 64,

    "consensus": "ethash",
    "difficulty": "0x40000000",
    "gasLimit": "0x2fefd8",
    "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "nonce": "0x0000000000000040",
    "alloc": {}
}



that is my ellaism.JSON

ipsec - Today at 11:25 AM
it's in my zone is  6 pm :smile:
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 11:26 AM
People can scroll and read the logs also
osoese - Today at 11:26 AM

go-ethereum>geth --datadir ./ellaism

Riddlez666 ツ ☠ - pool.ellaism.io - Today at 11:26 AM
Im more concerned of Devs and CM's getting together and talking
TBates76 - Today at 11:26 AM
@jal3inc  you can join github to see where the project is at and going
ipsec - Today at 11:26 AM
Guys what about diff bomb ?
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 11:26 AM
others can read :wink:
ellaismer - Today at 11:27 AM
@jal3inc Let me know your Github username and I'll add you to the org. :smiley: We have the ellawallet as well as several Discord bots (will be open source really soon) that need help! Glad to have you here. :smiley:
@ipsec We don't have difficulty bomb. So no need to worry about it.
ipsec - Today at 11:28 AM
I just asking acue of ETH
casue
cryptodlt - Today at 11:29 AM
why is there always a ":(" at the end of transactions when viewing an ELLA wallet on explorer.ellaism.org ?
TBates76 - Today at 11:30 AM
we have the desktop wallet being worked on by Riddles and Osoese
osoese - Today at 11:30 AM
related to geth - I tried to fork it but the references were  really hard to get working so decided to just compile the original version and use our own genesis.json file - i think the startup nodes is the issue but not sure how to get them to pull - did anything look amiss in that json file I paste?
TBates76 - Today at 11:30 AM
we do need the explorer to be worked on
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 11:31 AM
@ellaismer we had someone working on the explorer where is he?
TBates76 - Today at 11:31 AM
and that info is it public?
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 11:31 AM
http://www.ellaism.network/ is what he was working on but  the nodes down i think
ipsec - Today at 11:32 AM
yep ....:(
cryptodlt - Today at 11:33 AM
8 days ago :/
0xcaffe - Today at 11:34 AM
is the source code of the ella explorer (explorer.ellaism.org) available on github? i couldn't find it there.
TBates76 - Today at 11:35 AM
ok so far we have 

1) Wallet work (currently in development) 2) Explorer  (update needed) 

ellaismer - Today at 11:36 AM
I'll fix the explorer :( issue. Regarding alternatives, we do have this one (https://github.com/gobitfly/etherchain-light) and it is indeed more robust. We can move explorer.ellaism.org to this if needed.
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 11:37 AM
so our explorer dev is MIA?
ellaismer - Today at 11:37 AM
And ellaism.network is forked from etherchain-light. Still I really appreciate the author's work -- there's many frontend improvements there.
cryptodlt - Today at 11:38 AM
etherchain-light would be best
ipsec - Today at 11:38 AM
@ELLAisim  Great idea
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 11:38 AM
I say move the explorer :wink:
TBates76 - Today at 11:38 AM
I second that
osoese - Today at 11:38 AM
me too
ellaismer - Today at 11:39 AM
Okay then. Putting this on my list. :smiley: To be honest, this also reduces my server maintenance work because we don't need a second database anymore!(edited)
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 11:39 AM
win and win
cryptodlt - Today at 11:39 AM
win-win :smiley:
TBates76 - Today at 11:42 AM
@ellaismer do we have a policy on work created for Ellaism to make it public use? (exception for sensitive code)
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 11:42 AM
anything short of credentials should be open source
TBates76 - Today at 11:43 AM
what I mean is to have a things submitted so this wont happen again (explorer redo)
this way work done by one dev can be maintained or picked up by rest if that creater decides to move on
cryptodlt - Today at 11:45 AM
that would speed up development
ipsec - Today at 11:45 AM
I am against sharing the whole. Let us give milestones. With the time of performing +30 days for unforeseen situations
ellaismer - Today at 11:46 AM
@TBates76 Hmm if I understand the question correctly, it is about concerns for explorer not being open sourced, right?
TBates76 - Today at 11:47 AM
yes and I would like to prevent that from occouring again in future
seems like we doing double work
ellaismer - Today at 11:48 AM
Still, that was due to my own problem putting credentials into the explorer, and I just didn't give it a priority to fixing it, which is my mistake. The new one based on etherchain-light will be open sourced from beginning: https://github.com/ellaism/etherchain-light This is where the work will occur.
GitHub
ellaism/etherchain-light
etherchain-light - Lightweight Ethereum blockchain explorer
osoese - Today at 11:50 AM
everything I release will be open source
for ella
ipsec - Today at 11:50 AM
Public access to the entire code may end badly  :frowning:
TBates76 - Today at 11:50 AM
core code should be protected
osoese - Today at 11:50 AM
@ipsec all other eth code is public access right now right?
except for parity(edited)
ellaismer - Today at 11:51 AM
To be honest, we cannot prevent developers from using the chain to work on closed sourced work, because it is everyone can use... Though I'll make sure that core code are always open sourced if they're not in prototype stage.
ipsec - Today at 11:52 AM
Yep that is GNU GPL and BSD license
ellaismer - Today at 11:54 AM
If you're working on core softwares, I would suggest to use MongoDB's approach and release under AGPL license. We don't have problems if people using softwares for profit in commercial situations. But it is usually a problem if companies take it, improve it privately, and not contribute the improvements back. That's why AGPL is born.
@TBates76 Have we settled the most important agenda item: when do we plan for the next dev meeting? :laughing:
TBates76 - Today at 11:56 AM
there is one other thing that needs addressing
Direction as in whats the next step for work when current work is completed
I am looking at https://github.com/ellaism/meta/projects/1
GitHub
ellaism/meta
meta - Ellaism Project Management
I know Riddles is hard at work (thank you ) but he is only 1 person. How can we attract more people to help?
ellaismer - Today at 12:01 PM
I don't have a good answer to this either. But talking about developers, there're always two approaches, and for us, it boils down to:

a) Grow our community. Make it a strong and welcoming one. Developers will join because of the philosophy. We're working on this for the whole time.
or b) Have enough fund and pay them. We're working on this with Dev Fund and Community Fund.
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:01 PM
Ahem and future Contributor fund
ellaismer - Today at 12:01 PM
Yes. And Contributor Fund when it's ready.
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:02 PM
i almost have all the keys/ pgp stuff ready from users
TBates76 - Today at 12:03 PM
I would like the last thing to be a discussion on exchanges. we all know there has been issues with stocks.exchange
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:03 PM
i see the 3rd fund being the most valuable in the beginning as dev fund is used for infrastructure currently which is perfect and ideal
TBates76 - Today at 12:04 PM
and cryptopia has had issues as well
osoese - Today at 12:04 PM
@TBates76 and @ellaismer we didn't really discuss any of the things I brought up so hopefully not ending the meeting right now....
TBates76 - Today at 12:05 PM
@osoese ahh sorry
Count Cryptula - Today at 12:05 PM
lets finish the dev issues then talk funds and exchanges
TBates76 - Today at 12:05 PM
let me repost what he put to clearify

1) ellagem --> working with Riddles on small fixes turned into rabit hole that I ended up coding the api price conversions for ELLA to BTC USD EUR into standalone app to check it which turned into...

resolution - using new wallet mentioned in number 2

2) light wallet (opal) --> electron meteor app connecting to rpc “https://jsonrpc.ellaism.org” and having some issues with connections - can create wallets and see balances but working on trading balances

resolution - everything is working as of yesterday

3) go ethereum current version won't use ellaism genesis file causing issues
have forked recent go ethereum to ellaism-io and working with Riddles to get it loaded using ellaism genesis - almost there but not yet - the custom version has go errors when we change the configurations which are somewhat hard coded so currently using the proper go ethereum version and booting ellaism like its a private chain and getting close on this

temporary resolution - parity working - go ethereum version is getting close - just confirguration issues

4) stellar bifrost server list ella to trade - been working with makemoneyoz on this and he has a successful bifrost docker that we were both able to load - then fails for ella - we think related to geth (go ethereum) issues

- going to start back on this with makemoneyoz this week

5) write up for andreas book mastering ethereum - would like feedback on my post from this morning

please?

Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:06 PM
Ellagem is basically turning into OPAL
ellaismer - Today at 12:06 PM
@osoese What is the command you used to start geth?
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:06 PM
Ellagem will be retired as trying to manage a fork with packages that our not ours is becoming a headache no one should have to deal with
osoese - Today at 12:06 PM
@Riddlez666 ツ ☠ - pool.ellaism.io we can name it ellegem
C:\Users\ftria\src\github.com\ethereum\go-ethereum>geth --datadir ./ellaism
@ellaismer 

C:\Users\ftria\src\github.com\ethereum\go-ethereum>geth --datadir ./ellaism

Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:07 PM
@ellaismer  headups this is ETH geth not our fork that he is doing this with
ellaismer - Today at 12:08 PM
Oh @Riddlez666 ツ ☠ - pool.ellaism.io and I want to ask you, are we still up to the Github tip approach for a partial use of Contributor Fund? I'll get the bot up soon.
osoese - Today at 12:08 PM
and I used this ellaism.json file:

{
    "config": {
        "chainId": 64,
        "homesteadBlock": 0,
        "eip155Block": 0,
        "eip158Block": 0
    },
    "identity": "mainnet",

    "name": "Ellaism Mainnet",

    "state": null,

    "network": 64,

    "consensus": "ethash",
    "difficulty": "0x40000000",
    "gasLimit": "0x2fefd8",
    "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "nonce": "0x0000000000000040",
    "alloc": {}
}

@Riddlez666 ツ ☠ - pool.ellaism.io @ellaismer I am good with whatever you both decide
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:08 PM
@ellaismer a contributor funded tip bot yes, which the fund can top up when empty
ellaismer - Today at 12:08 PM
Yep right! Great!
@osoese So you meant this is ELLA's geth but not ETH's geth?
osoese - Today at 12:09 PM
@ellaismer in that ellaism.json file I have to find a way to add the bootnodes
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:09 PM
ETH's geth and ELLA json @ellaismer
osoese - Today at 12:09 PM
its ETH geth using ellaism json
ipsec - Today at 12:09 PM
About stock exchange :Bittrex, Poloniex, Bibay, Binance, Huobi, Bitfinex
osoese - Today at 12:09 PM
I could not get ELLA version to compile as of yet
ipsec - Today at 12:10 PM
Dont use cryptobrige
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:10 PM
@ipsec wait till we get to that part of the meeting
osoese - Today at 12:11 PM
@ellaismer going to keep working toward converting to ELLA geth on latest version but right now there are features missing from ELLA version that is in production
TBates76 - Today at 12:11 PM
steps back as programmers are now talking
osoese - Today at 12:11 PM
@Riddlez666 ツ ☠ - pool.ellaism.io can you jump in and explain what happened?
ellaismer - Today at 12:12 PM
Yep I want to know what features are missing. It might be good to cherry-pick ETH's code before we decided to re-do all the work.
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:12 PM
As im sure @ellaismer  knows ETH's version does not have parts we require so i think thats the issue of getting it all to work
ecip1017 stuff
the ep160 aswell i think
osoese - Today at 12:13 PM
@ellaismer what I ended up doiing is compiling the latest ETH geth from source because if I can get it to run a local chain using my own ellaism.json file we will have laterst geth working on our chain
ellaismer - Today at 12:13 PM
@Riddlez666 ツ ☠ - pool.ellaism.io Should only be ECIP1017 and difficulty bomb removal. Those two are the one not in ETH.
osoese - Today at 12:14 PM
well, we can configure that in the json file
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:14 PM
yea those 2 are needed for us to continue
osoese - Today at 12:14 PM
but the updates to GETH changed the format from what you were using on previous versions
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:14 PM
yea folder structure is redone
ellaismer - Today at 12:14 PM
Do you mean this file? https://github.com/ellaism/go-ellaism/blob/master/core/config/mainnet.json
GitHub
ellaism/go-ellaism
go-ellaism - Go language implementation of the Ellaism protocol
osoese - Today at 12:15 PM
and the format of using a json file to boot your own private chain changed
yes
but just for clarity - i will compile that right now and post the error
will take 1 sec
ellaismer - Today at 12:16 PM
Okay. Now I want to know: what prompts us to re-fork ETH's geth? What features are not working in go-ellaism right now?
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:16 PM
features that dont exsist :wink:
one sec ill share a few
ellaismer - Today at 12:19 PM
@Riddlez666 ツ ☠ - pool.ellaism.io @osoese Okay great! Can I ask a favor? It would be great if you can post those missing features as Github issues to ellaism/go-ellaism. Just anything that you think it should work but does not. I still think it might be easier to fix our current version than re-do the work.(edited)
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:20 PM
k ill add them there
im sure @osoese will have a few to
osoese - Today at 12:20 PM
that might have worked
lol
TBates76 - Today at 12:21 PM
probably due to the bootstrap nodes
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:21 PM
na most likely screaming genesis mismatch @TBates76
osoese - Today at 12:21 PM
ill post back to you if it worked - it looks like it may have started up
using that ellaism.json file posted by @ellaismer
ellaismer - Today at 12:22 PM
@Riddlez666 ツ ☠ - pool.ellaism.io @osoese There're also a few reports of Parity v1.9.0 issue. Mostly that's due to hex fields -- Parity considers empty string as invalid and insists on "0x", but geth considers the former valid. I think for the ellagem issue, it might also be due to that.
@osoese Okay thank you!
osoese - Today at 12:22 PM

INFO [02-17|12:22:30] Imported new block receipts              count=308  elapsed=16.049ms  number=189852 hash=ef7c10…b7d571 size=366.43kB ignored=0
INFO [02-17|12:22:30] Imported new block headers               count=576  elapsed=90.249ms  number=197376 hash=4d93c4…ef41de ignored=0
INFO [02-17|12:22:31] Imported new state entries               count=1152 elapsed=4.011ms   processed=245777 pending=30247 retry=0   duplicate=0 unexpected=0
INFO [02-17|12:22:31] Imported new state entries               count=384  elapsed=999µs     processed=246161 pending=32439 retry=0   duplicate=0 unexpected=0
INFO [02-17|12:22:31] Imported new state entries               count=1101 elapsed=5.982ms   processed=247262 pending=32079 retry=0   duplicate=0 unexpected=0
INFO [02-17|12:22:31] Imported new block receipts              count=529  elapsed=24.569ms  number=190381 hash=217af8…9a5868 size=462.58kB ignored=0
INFO [02-17|12:22:32] Imported new state entries               count=1204 elapsed=7.017ms   processed=248466 pending=31769 retry=0   duplicate=0 unexpected=0
INFO [02-17|12:22:32] Imported new state entries               count=1191 elapsed=8.020ms   processed=249657 pending=31321 retry=7   duplicate=0 unexpected=0
INFO [02-17|12:22:32] Imported new block receipts              count=1933 elapsed=78.759ms  number=192314 hash=373078…c7c852 size=912.47kB ignored=0

ellaismer - Today at 12:23 PM
@osoese Just be careful that this version will most likely stop working at around 400k blocks or something like that. It doesn't have difficulty bomb removal code.
osoese - Today at 12:24 PM
@ellaismer ok is there a way to add that into it?
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:24 PM
yes thats the issue parity removed those features
osoese - Today at 12:24 PM
@Riddlez666 ツ ☠ - pool.ellaism.io and I tried a lot of different fixes for the "0x" precursor including adding a trailing "0" to make the length even and got nowhere
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:25 PM
and our geth doesnt use personal_sendTransaction but ETH's version does
osoese - Today at 12:26 PM
well, the web3 versions changed the way the api works between 0.2 and 1.0beta
and so the old methods don't work the same way
for gas and stuff
ellaismer - Today at 12:28 PM
@osoese No. You only replace empty string with "0x". That's it. Don't change other logic. For integer representation and bytearray representations the hex rules are different. Don't try to make everything even.
osoese - Today at 12:28 PM
okay got it
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:28 PM
god has spoken lol
TBates76 - Today at 12:29 PM
so the new features?
and the reason for redoing things?
osoese - Today at 12:30 PM
@TBates76 we did get the new web3 functionality to work in what we are calling opal wallet so moved in that direction for now
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:30 PM
Broken wallets and chasing ghosts because most things are being built off of ETH's geth(edited)
osoese - Today at 12:30 PM
that was the screen shot I pushed earlier
it is same thing as ellegem/mist meteor/electron app BUT we know and control all the code because rebuilt from ground up
TBates76 - Today at 12:31 PM
awesome
ellaismer - Today at 12:31 PM
@osoese If you want a temporary fix for ETH's geth difficulty bomb, remove this file https://github.com/ellaism-io/go-ethereum/blob/master/consensus/ethash/consensus.go L415-L425. But just want to let you know that this also only works temporarily. On block 10 million it will fail because of no ECIP1017. And this also doesn't work for other custom chains.
GitHub
ellaism-io/go-ethereum
go-ethereum - Official Go implementation of the Ethereum protocol
osoese - Today at 12:32 PM
ok will do @ellaismer and then will communicate with you and @Riddlez666 ツ ☠ - pool.ellaism.io for permanent fix after this meeting
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:32 PM
that gives us a few years @ellaismer haha
osoese - Today at 12:33 PM
@TBates76 while we were in this meeting I saw miketheminer get online so I asked him about the explorer - he said he would make the fixes - so I asked about the code - he wants to be paid in ella and will release
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:33 PM
Ellagem might live for a bit longer lol
ellaismer - Today at 12:33 PM
@Riddlez666 ツ ☠ - pool.ellaism.io To be honest, a good dapp should only assume a chain according to the JSONRPC specification. That one is mostly the same in ETH's geth, ETC's geth, ELLA's geth, parity and nearly everywhere else. Otherwise you are potentially locked in with some ETH features.
TBates76 - Today at 12:35 PM
@osoese first Riddles needs to be paid.. otherwise paying for his work before would not be fair
osoese - Today at 12:35 PM
I agree with that statement
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:35 PM
In reality the other chains are a copy paste of ETH with minor changes we are the ones making new geths @ellaismer
osoese - Today at 12:35 PM
also I think we can code one up anyway - not even as hard as making a wallet
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:35 PM
thats why i said its all being built of there geth
ellaismer - Today at 12:36 PM
@Riddlez666 ツ ☠ - pool.ellaism.io That's the difference between Bitcoin and ETH. In Bitcoin you would mostly see code-as-specification. We don't want to bring that culture altogether to Ethereum's world. So you see we have yellow paper, JSONRPC specifications, and everything else.
It's like you built your web page according to Internet Explorer....
Code might change when things don't fit, but specifications are more careful and have human "consensus".
ipsec - Today at 12:37 PM
Do you plan to change the ELLASIM logo or it will be such. I'm asking because I'll be making cases for glass diggers. I can try one case with ELLASIM logo
?
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:38 PM
If mike is that petty i don't want his work and will help fork the explorer myself hes not been involved alot.(edited)
osoese - Today at 12:39 PM
mike_theminer - Today at 12:05 PM
sure if i can get some ella from donation or the dev fund.



currently i receive 0 ella for that
ellaismer - Today at 12:39 PM
I like mike's code. But yep that's unfortunately what we decided to do in https://github.com/ellaism/etherchain-light
GitHub
ellaism/etherchain-light
etherchain-light - Lightweight Ethereum blockchain explorer
osoese - Today at 12:40 PM
ok, one more thing for me - can we talk about that book? mastering ethereum? I think we have a good opportunity here to get ELLA mentioned in the alternate ethereum based chain section
TBates76 - Today at 12:41 PM
@ipsec no change at this time
osoese - Today at 12:41 PM
on an ellaism git for submission to this page:
https://github.com/ethereumbook/ethereumbook/issues/126
GitHub
Existing (or under way) technological alternatives to Ethereum - RootStock, Cardano, etc · Issue #126 · ethereumbook/ethereumbook
From the point of view of a Ethereum developer, I think it would be of great interest to know the existing technological alternatives, RootStock, Cardano and possibly many others.
I'd propose, thro...
ipsec - Today at 12:41 PM
@TBates76 ok thx for info
i will try make it
osoese - Today at 12:42 PM
that's what cardano posted for it I think we can ake a good entry for ELLA
He (andreas) already mentions ELLA in the text
TBates76 - Today at 12:42 PM
@osoese we can discuss that after the meeting
osoese - Today at 12:42 PM
@TBates76 okay
ipsec - Today at 12:43 PM
Ok guys GN and thx for metting  :smiley:
TBates76 - Today at 12:43 PM
ok we finished with programming talk?
osoese - Today at 12:44 PM
@TBates76 @ellaismer @Riddlez666 ツ ☠ - pool.ellaism.io I am finished with programming talk for now - thank you all for the assistance
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:44 PM
banned a spammer
osoese - Today at 12:44 PM
the stellar server is related to the geth
TBates76 - Today at 12:44 PM
lol seen that too
osoese - Today at 12:44 PM
so that should work itself out
TBates76 - Today at 12:44 PM
ok next on the agenda..
and im sorry for not being more prepared...
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:45 PM
first meeting are always a touch and go
IaMaBeAsT - Today at 12:45 PM
We can all learn from this meeting :)
TBates76 - Today at 12:45 PM
@ellaismer you on a time constraint?
IaMaBeAsT - Today at 12:47 PM
I know ipsec mention questions in regards to exchange earlier. If we are moving to questions that is
TBates76 - Today at 12:47 PM
I think now is the time to move to questions
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:47 PM
yup im done for this weeks dev stuff
ellaismer - Today at 12:48 PM
@TBates76 I'm fine with nearly anything.(edited)
TBates76 - Today at 12:49 PM
anyone @here have questions or input?
osoese - Today at 12:51 PM
@here just want to give a shout out to pegascoin for helping out with my wallet integration and also let you know whatever you need don't hesitate to ask if I have time I will help - like with that project plan or whatever
Towd - Today at 12:51 PM
I think its worth discussing marketing and raising awareness of the project.
Count Cryptula - Today at 12:51 PM
I have a couple ideas/solutions regarding the exchange issues
1. short term -can anyone make a simple exchange bot like the Pegas dev has done? This works very well and definitely helps with liquidity. I know @osoese and myself use it quite a bit
2. medium term - I am donating a coin listing for Ella on the new Victorium Exchange. It is not ready yet -few weeks - but that should also help going forward. I will put up a more formal announcement later
CryptoMiner - Today at 12:52 PM
who the hell keeps tagging ppl??(edited)
0xcaffe - Today at 12:52 PM
is Victorium legit?
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:52 PM
Bisq is a ghost town due to its learning curve
ellaismer - Today at 12:52 PM
Thanks @Count Cryptula! Can you explain more about how pegas exchange works? How does it calculate price?
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:53 PM
@CryptoMiner turn off notifications instead of complaining
osoese - Today at 12:53 PM
@ellaismer he uses stocks.exchange api
CryptoMiner - Today at 12:53 PM
im not complaining im asking
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:53 PM
there api is shit tho :frowning:
were in a meeting sorry if you get tagged
CryptoMiner - Today at 12:53 PM
and notifications are off, but that red 1 annoys me lol
np,whats the meeting about
Count Cryptula - Today at 12:53 PM
pegas has 2 exchanges - one is bot on discord uses stocks like @osoese said. Other is is web based P2P where users set price
osoese - Today at 12:53 PM
We can code in almost any api
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:54 PM
P2P inside OPAL? @osoese
osoese - Today at 12:54 PM
@Count Cryptula I'm happy to work on integrating that bot into the light wallet too Pegas coin told me how he did it and it uses discord apis so can communicate with it outside discord
@Riddlez666 ツ ☠ - pool.ellaism.io yeah
ipsec - Today at 12:55 PM
Maybe IRCnet bot :smile:
ellaismer - Today at 12:55 PM
Okay understood. I'll try to get a prototype of p2p Discord bot exchange. I have some ideas but cannot promise anything though. :laughing:
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:56 PM
dont overdue yourself on discord bots hehe @ellaismer
osoese - Today at 12:56 PM
@ellaismer @Count Cryptula @Riddlez666 ツ ☠ - pool.ellaism.io obviously will help with this where needed and will start exploring also - and connect over pm to you if I find a fix
ellaismer - Today at 12:56 PM
That's great!
Count Cryptula - Today at 12:56 PM
excellent - it is no fees and works very well. We can seed the bot exchange with community funds. probably ELLA to ETH is all that is needed
osoese - Today at 12:57 PM
@Count Cryptula he told me it can only do eth based coins for now but later maybe others - would love to explore outside interaction also like BTC
TBates76 - Today at 12:57 PM
cant some of these bots be implemented/intergragted to same bot
Count Cryptula - Today at 12:58 PM
@osoese  btc would be awesome
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:58 PM
a few bots or a master bot hehe
IaMaBeAsT - Today at 12:58 PM
I think adding the triforce coins added to the bot would be great aswell, dnr and xsh
TBates76 - Today at 12:59 PM
I would prefer to call the masterbot OVERLORD BOT
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:59 PM
those being non eth coins will take time @IaMaBeAsT
IaMaBeAsT - Today at 12:59 PM
True :(
TBates76 - Today at 12:59 PM
having that triforce as a marketing tool will be useful
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 12:59 PM
He can be Our DAO Bot lol
osoese - Today at 12:59 PM
@IaMaBeAsT we can at least add PGC tho
IaMaBeAsT - Today at 12:59 PM
Yep :)
osoese - Today at 1:02 PM
@MakeMoneyOz - ellaismpool.com put together a stellar bifrost server for us so we can list ELLA pairs on their network and I think that could be used for some of this when complete
ellaismer - Today at 1:02 PM
@Riddlez666 ツ ☠ - pool.ellaism.io That's one of the ideas I want to discuss in one of the future meetings. So basically we have a bot that has admin rights, and the bot follows an Ellaism smart contract. So for example, if we'd ban someone because of spam, we type a command .ban person. The bot will then issue a smart contract transaction and write this on the blockchain before making an action. All logic whether the ban is legit and how long it would last is also written in the smart contract. In this way we ensure transparency for our Discord community, and can get a transparency page just like our Dev Fund and Community Fund.
maskekar - Today at 1:02 PM
wow still crowded here
IaMaBeAsT - Today at 1:03 PM
I was curious if we could talk about how our roadmap is looking. Just a brief discussion. I know we have monthly updates that are posted. Was wondering with the current code changes  are we still looking solid for roadmap projections?
maskekar - Today at 1:03 PM
@IaMaBeAsT dnr sucks, better turtlecoin :laughing:
IaMaBeAsT - Today at 1:03 PM
Lol
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:04 PM
looks like mike the miner is active lol
IaMaBeAsT - Today at 1:05 PM
This is the first time I have seen him online o.o since the original post. Howdy
mike_theminer - Today at 1:06 PM
i did some update to ellaism.network. quoted from general-help " getting full transaction history in one page. http://ellaism.network/
syntax : http://ellaism.network/account/0x3fa63cad1957788c36a951d8264bf0b6ed973d69?block=500000
block is the beginning block for searching
paging is still underdevelopment as i'm very busy with another eth clone(edited)
example: getting full tx history : http://ellaism.network/account/0x3fa63cad1957788c36a951d8264bf0b6ed973d69?block=0"
i'm quite busy at the time being, so i wont involve in dev discussion here, sorry about that(edited)
TBates76 - Today at 1:07 PM
@mike_theminer ahh ok
@ellaismer any comment on the roadmap?
any other questions/ideas?
ellaismer - Today at 1:12 PM
Officially we've just started this year's roadmap. :laughing:  (It's from February and has three months of commenting period before.) Regarding items on the roadmap, we're mostly on track. There're several items, for example, new opcodes/features that would require human consensus/hard fork. Those are the things that I'm not sure whether we would do. Except them, everything else is planned to be delivered. :smiley:
TBates76 - Today at 1:13 PM
The idea has been proposed to split the next meeting into 2 rooms
one for Q and A and one for Dev/discussion
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:14 PM
ill make the channels i have a idea for that
IaMaBeAsT - Today at 1:14 PM
Imo would help the flow of chat
ellaismer - Today at 1:15 PM
@TBates76 I'd suggest not to hold them in the same time. We can have the first hour for Dev/discussion and the second hour for Q/A. Some people might want to join both.
TBates76 - Today at 1:15 PM
agree
also I was thinking of making  Dev only room with read permissions for all
this way things being discussed can be read but not interuppted
IaMaBeAsT - Today at 1:17 PM
Still think record wise have the coding chat localized with only relevant info. Less scrolling or searching in that channel and q and a in its own area. That way less bloat
ellaismer - Today at 1:17 PM
@TBates76 I don't think that's a huge problem for us devs being interrupted. We might have new devs coming each meeting and they might not have approriate roles beforehand. So I'd suggest to make every umbrella channel writable by all.
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:17 PM
I have re-orged the chans and made a Umbrella catagory
TBates76 - Today at 1:17 PM
good point
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:17 PM
including the chans i think fit in it
ellaismer - Today at 1:18 PM
And... because we hold dev-meetings and qa-chat sequencially, is it okay to just have them in the same channel? This is just organizational issues but IMHO it helps when people read the flow.
For example, just have one #dev-meetings channel.
TBates76 - Today at 1:19 PM
ok then that channel can be used as a Q & A  results
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:19 PM
we can pull questions from #development anyway
make #qa-results  read only then?
TBates76 - Today at 1:20 PM
yes
ellaismer - Today at 1:20 PM
Or just call it #faq :laughing:  (#qa-results is also okay.) Looks like the standard naming.
IaMaBeAsT - Today at 1:22 PM
All my questions are answered  :)
osoese - Today at 1:22 PM
mine too thanks all
TBates76 - Today at 1:22 PM
@ellaismer  I think the BTC relay should be made a priority. Is there work which needs completed before that?
ipsec - Today at 1:22 PM
Guys once again........ Anyone can send me ELLA logo in  pdf or psd format ?
osoese - Today at 1:23 PM
@ipsec isn't there a clean .png already
ellaismer - Today at 1:23 PM
@ipsec https://ellaism.org/images/logo.png
osoese - Today at 1:23 PM
can you just copy that into photoshop? I used it in gimp no problem
ipsec - Today at 1:24 PM
thx
ellaismer - Today at 1:26 PM
@TBates76 I agree. Sorry my fault not taking enough time working on it. It was just too much other stuff recently, and I'm a little bit running out of ideas for various issues related to it. So it might still take some time.
ipsec - Today at 1:26 PM
I need vector graphics but i will make
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:27 PM
One thing that UBIQ did or is trying to do is get Discord sponsor/partner by adding a dedicated gaming area which would be prolly pretty useful(edited)
alot of crypto people play games thats a fact
VIvekCRypto - Today at 1:28 PM
How was the dev meeting today ?
TBates76 - Today at 1:28 PM
crypto gamers, sounds like an oxymoron... but I digress... may help
VIvekCRypto - Today at 1:28 PM
Friends?
osoese - Today at 1:29 PM
@VIvekCRypto you're in it now...scroll up and read the great meeting!!
TBates76 - Today at 1:29 PM
meeting started 2.5 hrs ago(edited)
VIvekCRypto - Today at 1:29 PM
Ok imao
Great
Let me read the top content first
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:30 PM
https://discordapp.com/partners
Discord
Become a Discord Partner - Exclusive Perks and Rewards
Become a Discord Partner and brand your Discord server with a custom link and invite splash image. Oh yeah, there's a sweet Discord Partner hoodie too.
@ellaismer this is the partner page and features
branding
TBates76 - Today at 1:31 PM
@ellaismer is there anything you wish to discuss or like to see be worked on?
any delagations needed?
VIvekCRypto - Today at 1:33 PM
And exchange we r looking for in future
ellaismer - Today at 1:34 PM
Nothing concrete related to BTC relay. I have not yet got a detailed list. The Discord bots might be good for collaboration, and I'll try to open source them soon (within the next two weeks).
VIvekCRypto - Today at 1:34 PM
Like cobinhood ?
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:34 PM
A few waiting on replys for exchanges @VIvekCRypto
TBates76 - Today at 1:34 PM
problem is some exchanges need core info to be verified
VIvekCRypto - Today at 1:35 PM
Because cryptopia is ok but would like some more stable place to trade
ellaismer - Today at 1:35 PM
@Riddlez666 ツ ☠ - pool.ellaism.io However it mostly targets content creator and require followers / community size in 100,000 level, which we don't have right now.
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:35 PM
Really, we look for growing communities and content creators that show an authentic enthusiasm for Discord (which means you're already using Discord for your community). We want to support communities that support us. Acceptance into the program is extremely qualitative and will vary from one candidate to the next.
ellaismer - Today at 1:37 PM
The @ELLAism.com email address might help. As always, we don't have official team / person representing the coin, but I'm always happy to provide technical assistance if the exchange needs it.
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:37 PM
2200+ members in here says something
osoese - Today at 1:37 PM
@ellaismer the email is great but we can't send an email from it only receive
VIvekCRypto - Today at 1:37 PM
True but as if more independent miners like me look for tradable exchange
osoese - Today at 1:38 PM
can we get the login smtp info for our emails and then can send using a client?
TBates76 - Today at 1:38 PM
yes
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:38 PM
@osoese yes
ellaismer - Today at 1:38 PM
@osoese I didn't enable this for you yet. Let's talk in PM and I'll send you a SMTP login information.
osoese - Today at 1:38 PM
ok thanks
TBates76 - Today at 1:39 PM
I think we should require Ellaism Devs to have an Ellaism Email
VIvekCRypto - Today at 1:39 PM
To attract more miner we need more exchange should be priority
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:39 PM
its a priority dont you worry @VIvekCRypto
TBates76 - Today at 1:40 PM
@VIvekCRypto yes but we need funding as some exchanges are very expensive for listing
ellaismer - Today at 1:40 PM
If any devs need ellaism.com email address, just PM me and I'll send you login information.
VIvekCRypto - Today at 1:40 PM
Thx mate
TBates76 - Today at 1:40 PM
the one I looked at was 50k USD
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:40 PM
yikes
TBates76 - Today at 1:40 PM
hopefully we get free listings
if the project takes off then we shouldnt have to pay fees
VIvekCRypto - Today at 1:41 PM
Only if our trade volume increases
osoese - Today at 1:41 PM
@TBates76 I wrote to COSS.io but no reply
I did not do the formal application though
VIvekCRypto - Today at 1:42 PM
I am not shopisticated like u guys but we need our ella wallet something like or better than fusion
TBates76 - Today at 1:43 PM
@VIvekCRypto wallet was broken with last update to parity... new wallet has been made... more to come
VIvekCRypto - Today at 1:43 PM
Ok it will be soon available to keep coins
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:44 PM
it will be out for alpha testing soon
to only a select few tho
osoese - Today at 1:44 PM
it works now but have to do a round of testing with dev team
VIvekCRypto - Today at 1:44 PM
Awesome i hope its cool
I trust u guys
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:45 PM
it will have live price updates :stuck_out_tongue:
osoese - Today at 1:45 PM
and to USD ETH EUR BTC all at one time ...when you hover on any address it automatically adjusts
VIvekCRypto - Today at 1:46 PM
Sounds musical
లిమాస్ - Today at 1:46 PM
there will be a linux version?
osoese - Today at 1:47 PM
@VIvekCRypto you want music too?
lol
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:47 PM
its built upon a cross platform system
so hopefully even cellphones
TBates76 - Today at 1:47 PM
one fits all approach I like it
VIvekCRypto - Today at 1:48 PM
Moon music :ellamoon:
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:49 PM
hehe my ellagems
TBates76 - Today at 1:49 PM
ok the meeting seems to be coming to a close... any final thoughts?
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:49 PM
id say meeting done this is overflow
TBates76 - Today at 1:49 PM
things missed? Other ideas?
I know just making it offical
for those whos reading later
VIvekCRypto - Today at 1:49 PM
Dev contributing pool should have a mobile monitoring app for android
ellaismer - Today at 1:50 PM
Have we settled the next meeting time, or is it still 4pm UTC?
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:50 PM
no time change
TBates76 - Today at 1:50 PM
we still doing saturday?
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:50 PM
yes until otherwise polled and confirmed
osoese - Today at 1:51 PM
Okay good day everyone - 10 inches of snow coming inbound and need to go get some salt
thanks!!
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:51 PM
yea 10-20 CM here today
ellaismer - Today at 1:51 PM
Okay then the next one would be 24 Feb.
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:51 PM
@VIvekCRypto ill see about getting the app
VIvekCRypto - Today at 1:51 PM
Meeting ending , we will be back
osoese - Today at 1:51 PM
@Riddlez666 ツ ☠ - pool.ellaism.io but you are used to it and get to go boarding I bet
ellaismer - Today at 1:52 PM
!rsvp clear
RSVPBotBOT - Today at 1:52 PM
RSVP list cleared!
Riddlez666 ツ ☠ - pool.ellaism.io - Today at 1:52 PM
well expect/plan for a 3hour meeting lol
ellaismer - Today at 1:53 PM
@here Our first dev meeting is finished. The next one would be on Saturday 24 Feb 4pm. If you intend to join, please type in this channel !rsvp yes. :smiley:
```
