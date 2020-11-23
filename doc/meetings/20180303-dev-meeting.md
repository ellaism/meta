# Development Meeting (3 Mar, 2018)

This is the log of *Weekly General Development Meeting*. It happens every Saturday 4pm UTC in the #development Discord channel.

```
ellaismer - Today at 10:59 AM
!rsvp ping
RSVPBotBOT - Today at 10:59 AM
@IaMaBeAsT @Towd @Riddlez666 @Count Cryptula @ellaismer @im₿a23 @limax @Ambros @CryptoDLT @osoese @maskekar @jal3inc
IaMaBeAsT - Today at 10:59 AM
Boop
ellaismer - Today at 11:00 AM
@here Our weekly Dev Meeting starts now. :smiley: I don't have any agenda items myself for today, but I'll be here to answer questions.
Everyone, if you have anything that you want to discuss, raise your voice!
CryptoDLT - Today at 11:00 AM
can we get a transaction time field in the ellaism explorer?
ellaismer - Today at 11:03 AM
@CryptoDLT I'll take a look whether there's a cheap way to do this in terms of JSONRPC calls, because adding it would basically mean an additional call for each block displayed, which is a lot. Can't promise to get it but will give a try.
Though the problem is that it still might not be super useful for you -- if your account is big, it still won't display the whole transaction history. We'll work on an export tool that allows you to run a local Parity node and extract all information you want.(edited)
Riddlez666 - Today at 11:03 AM
I myself have been working on integrating the contributor fund into things and there is actually 848 ELLA from various donations and from my pools mining fees already accumulated. https://explorer.ellaism.org/account/0xe3ecbf9ad12bf63b94fd4f7bc3dc7fcfc56e66ce as seen here.
Ellaism Explorer
Ellaism Explorer
Fast and full featured explorer for Ellaism.
I need to get a few more users setup with there signer stuff just 2 left and some proof submissions
ellaismer - Today at 11:05 AM
Great. Look forward to it!
Riddlez666 - Today at 11:05 AM
But fund is alive and a test TX has been sent.
Also this morning i made a Pool OPS group and have added @Ambros he is part of pool.sexy
ellaismer - Today at 11:06 AM
Okay. I'll send the bootstrap amount from Dev Fund tomorrow. It will be 567.5 ELLA.
Riddlez666 - Today at 11:06 AM
he ask if there was some way to cross promote @ellaismer @Ambros
ellaismer - Today at 11:07 AM
Hmm what kind of cross promote?
I'd certainly want to support anything that can help mining decentralization. :smiley:
osoese - Today at 11:07 AM
@CryptoDLT now that we are making progress on the wallet (we tested the alpha amongst the dev team and are cleaning up styles) we will be wanting to do more "light" interactions with explorer so additional data items may end up compiled somewhere to enhance what is available by RPC. I will update if we make progress in this area. I for one am looking for an easy token search by address and things like that.
Ambros - Today at 11:08 AM
We could implement features required by your miners on our pool. We can also bring some extra miners from our community to ella and maybe you can also help us growing our miners community
CryptoDLT - Today at 11:08 AM
@osoese  that's a great idea
ellaismer - Today at 11:09 AM
@Ambros Though I would hope that if we make any agreement on cross promotion, then the improvements made on pool should at least be open source. :smiley:
Ltdeclipse - Today at 11:10 AM
How about instead of calling block number you instead change it to time stamps? The hash will redirect us to the block, the block number isnt very useful info. Most people search for transactions by tx no block numbers.
Ambros - Today at 11:10 AM
As a pool we also usually stress test the wallet way more than users. So we could help fixing wallet related problems (I am a dev myself)
@ellaismer Yeah, I agree. We use a strongly modified version of the backend and we are still thinking about make it open source. but I would be truly happy to implement the same feature also on your pool version :wink:
Riddlez666 - Today at 11:12 AM
Do you mean PPLNS @Ambros as you use PROP?
o wait im dumb
you guys use PPLNS already dont you
osoese - Today at 11:12 AM
@Ambros thank you for stopping by and participating in the dev meeting. this is good.
Riddlez666 - Today at 11:13 AM
I reached out to him for a user issue and invited him to it :smiley:
osoese - Today at 11:13 AM
@Riddlez666 good idea
ellaismer - Today at 11:13 AM
@Ambros Yeah great. I still don't know how the cross promotion might work, but we're always happy to listen to any ideas, if there's already one. :smiley:
Riddlez666 - Today at 11:14 AM
well one promotion i sorta did was make a pool ops group to make him stand out here its a small gesture but it might help
Ambros - Today at 11:14 AM
@Riddlez666 We do use PROP, but that's not was I was talking about. We started from open-ethereum-pool as you did, but we deeply changed the code base for various reasons
@ellaismer A first step could be that we both advice user to get to know your coin and our pool respectively
I do not have a detailed idea yet and nor an idea for initiatives, but I am happy to see that you are available
jal3inc - Today at 11:17 AM
Hi Everyone :smiley:
Riddlez666 - Today at 11:17 AM
@Ambros first step was getting you in here details can come next in time
osoese - Today at 11:18 AM
we should welcome @jal3inc to the dev team @here he has been working non stop with us since last meeting
Riddlez666 - Today at 11:18 AM
:muscle: @jal3inc
ellaismer - Today at 11:18 AM
@Ambros Great. We can discuss this further when you want. :smiley:
And welcome @jal3inc!
osoese - Today at 11:20 AM
The desktop wallet is being initially tested and cleaned up but has worked for all devs on windows and mac
@jal3inc cleaning up front end design a bit and we are posting an alpha release to roundtable
Riddlez666 - Today at 11:20 AM
It also a light wallet to start as it connect to the ella jsonrpc server :smiley:
osoese - Today at 11:21 AM
@Riddlez666 yes thanks for pointing that out - and we are going to set an option to switch to using local rpc if you want to use parity or geth(edited)
then will provide a feature list for rev 2 so we can build what the community really wants
so if you have any thoughts on what you want in a wallet let us know
first thing we did was make an instant ticker displaying your balances in ETH, BTC, USD or EUR up top (all displayed simultaneously)
Riddlez666 - Today at 11:24 AM
Current block :stuck_out_tongue:
built in hands on a hard coin @LetEpsilonBe
osoese - Today at 11:25 AM
@Riddlez666 you know we are adding all the standard stuff to the wallet
lol
Riddlez666 - Today at 11:25 AM
since its a dapp an interface could prolly be made in wallet
but thats a want to have from me
lol
osoese - Today at 11:26 AM
@Riddlez666 I think this is good - I thought it would be nice to have an "extension" type of platform for adding things like this or other functionalities like a browser plug in does
but also want to just get a good working wallet out with ella brand first obviously
Riddlez666 - Today at 11:28 AM
@ellaismer that game could be added to here could it not https://ellaism.org/dapps/
Ellaism
Ellaism Dapps
An Ethereum-like network with no premine and no contentious hard forks.
@LetEpsilonBe lol i saw that finger
LetEpsilonBe - Today at 11:30 AM
That was the wrong emoji!!!!!
Riddlez666 - Today at 11:30 AM
LOL!
LetEpsilonBe - Today at 11:30 AM
I thought it was thumbs up!!!
I AM SOOOOOOO EMBARASSED
Riddlez666 - Today at 11:30 AM
haha its fine dude
ellaismer - Today at 11:31 AM
Added. :smiley:
Riddlez666 - Today at 11:31 AM
there you are famous now @LetEpsilonBe
LetEpsilonBe - Today at 11:31 AM
really?!?!  :smile:
Riddlez666 - Today at 11:31 AM
You made a dapp on the ella network so of course
I also see some formatting on the site ill update for aesthetics example is the faucet info page could use some spacing and bullets, ill make a PR for it
Do you want wiki/faq stuff like using the split bot aswell?
ellaismer - Today at 11:36 AM
Yes sure!
Riddlez666 - Today at 11:37 AM
@Count Cryptula @ɃuzzkillɃ Any news from you guys or updates?
IaMaBeAsT - Today at 11:38 AM
:ellamoon:
jal3inc - Today at 11:39 AM
Yea wallet looking Sexy....
lol
Count Cryptula - Today at 11:40 AM
We are over 3400 followers on twitter now. The Hands on A Hard Coin game has gotten lots of twitter actiion. And for those who missed it last night, Rifddlez was involved in an epic battle on the game with  a new Japanese member from twitter. Unfortunately an exhausted @Riddlez666  was forced to concede :smile:
osoese - Today at 11:41 AM
we need a hands on a hard coin emoji
Riddlez666 - Today at 11:42 AM
i tried i failed i lost the 59 Ella pot
Towd - Today at 11:42 AM
Is there any news on a marketing campaign.  I know myself and a few others have been asking about it and would like to help.
Riddlez666 - Today at 11:42 AM
There is currently a game waiting to be played
Towd - Today at 11:43 AM
I think there was something mentioned earlier in the week about some kind of surprise to coincide with the release of the wallet maybe...?  :smile:
Riddlez666 - Today at 11:44 AM
well the wallets the start of it
Towd - Today at 11:45 AM
I think its a good time to run a marketing campaign with maybe some contests and prizes for tweets, blog posts, etc.  Things to raise ELLA awareness.
I've mentioned some stuff I've seen other coins do under the #ideas section.  Just wondering if we have any plans to do something like that.  Or maybe other plans?
IaMaBeAsT - Today at 11:46 AM
Do a game tourney lol
Riddlez666 - Today at 11:46 AM
@Count Cryptula @Towd you guys can work on that
since counts the twitter man
i ussually share all on twitter when i check it
Towd - Today at 11:48 AM
things I've seen are air drops, prizes for retweets, random drawings for blog posts, contests for best blogs, videos, podcasts, etc.   Maybe with a small prize for 100 to 1000 ella...   Does this sound interesting?  Or too much from our community chest?
Count Cryptula - Today at 11:48 AM
I still think we should do a dapp contest to encourage more things like Hands on a Hard Coin game with top 3 getting prize of Ella
Towd - Today at 11:49 AM
that sounds like a good idea for sure!
CryptoPool.Network - Today at 11:49 AM
Not to interject but would be good to create contest banners that pools can display on their pool sites...
Towd - Today at 11:50 AM
yeah, I've seen at least a one other artist and of course myself who would be willing to put in time to make any banners or graphics for any contests we want to run for Twitter, blogs, etc.  We just need some direction.
otherwise we're just making memes.  :smile:
Count Cryptula - Today at 11:50 AM
and I would also say the community fund may want to consider a donation to @LetEpsilonBe  for his creation on Ella as a show of appreciation
Riddlez666 - Today at 11:50 AM
@CryptoPool.Network  added you to pool ops role
CryptoPool.Network - Today at 11:51 AM
Ty
Riddlez666 - Today at 11:51 AM
May not be much in the contributor fund but we can use that and then do a contest from community fund
Count Cryptula - Today at 11:52 AM
theres plenty in community fund - no need to deplete contributor or dev funds
Towd - Today at 11:53 AM
I think a contest for Dapps is a great idea.  I think we should also make sure we have some kind of campaign to coincide with the release of the wallet.  Make sure people outside ELLA know things are happening here.  We are like the biggest secret in crypto.  :bust_in_silhouette:
even if its just a basic twitter campaign.  If we know what is coming we can make some graphics for it.
Riddlez666 - Today at 11:55 AM
ok if if community sponsors the event then all good with me
LetEpsilonBe - Today at 11:57 AM
I am humbled by your consideration @Count Cryptula
I know its guache to mention projects that are not ready to release now, but i do have a project that is going to require some automated transactions and the gas that is invovled, so any donation would to keeping that contract going.
ellaismer - Today at 11:59 AM
@LetEpsilonBe Please let me know the transaction volume. If it is not much, Dev Pool can sponsor the fees.
Riddlez666 - Today at 11:59 AM
We also can supply funding for projects i believe right @ellaismer
he beat me to it lol
LetEpsilonBe - Today at 12:03 PM
The volume should be 20 - 30 transactions a day i would estimate
With one storage a uint256
ellaismer - Today at 12:03 PM
Yeah. Just let me know the sending address. Dev Pool can definitely sponsor the fees. :smiley: You can then just send zero-fee transactions and it will be mined.
(You will need to directly connect to a Dev Pool node or use some custom Parity config settings. I'll send you the details when you need it.)(edited)
LetEpsilonBe - Today at 12:06 PM
I am going to try to release my other game first, then release this project. So it will be a couple of weeks before anything is ledgit
ellaismer - Today at 12:06 PM
No problem.
osoese - Today at 12:07 PM
@here @ɃuzzkillɃ @Count Cryptula and @IaMaBeAsT made a sizeable donation to the contributor fund for the wallet and other work going on THANK YOU!!!!!
LetEpsilonBe - Today at 12:08 PM
As a developer, one thing that i would like to know more about how to do is how to get Trezor to work directly with my dapps. I like how MEW works with Trezor.
mathias7799 - Today at 12:08 PM
@osoese How much did they donate?
Riddlez666 - Today at 12:09 PM
i think around 600-700 or so ELLA
mathias7799 - Today at 12:09 PM
Wooow
Ohh well, i gotta scout a domain for my website..
Riddlez666 - Today at 12:10 PM
if you use google use https://domains.google.com/registrar
fast and i have found cheaper domains
mathias7799 - Today at 12:10 PM
I do too, but i gotta find a good domain.
LetEpsilonBe - Today at 12:10 PM
@mathias7799  what are you working, if i may ask?
mathias7799 - Today at 12:10 PM
Ellamine could be good.
@LetEpsilonBe Mining pool.
LetEpsilonBe - Today at 12:11 PM
Nice!
mineella.com
mathias7799 - Today at 12:13 PM
Hmm, idk i already own Pirlmine.com, so i´'ll just wait the 10 days till ellamine comes back
Riddlez666 - Today at 12:15 PM
not if i buy it before you muahahahaha @mathias7799
j/k
mathias7799 - Today at 12:15 PM
Crap, i better make a script for auto buying xD
xD
Riddlez666 - Today at 12:17 PM
I think we may have a short meeting this week unless there are other topics for discussion?  @here alot of are busy and or nose deep in a project still.
mathias7799 - Today at 12:17 PM
What are you working on?
Riddlez666 - Today at 12:18 PM
Publishing github info and updating project management stuff
osoese - Today at 12:18 PM
@jal3inc going to post the mock up of what our wallet is looking like
mathias7799 - Today at 12:18 PM
I see,
jal3inc - Today at 12:18 PM
Hey Everyone just wanted to quick share what I am currently working on...
Riddlez666 - Today at 12:18 PM
directing some stuff for the wallet while the real brains are doing there work @osoese @jal3inc
jal3inc - Today at 12:19 PM
Working on styling our new wallet.(edited)
osoese - Today at 12:21 PM
@jal3inc just hopped on dev team an started working!! Looks great I think
jal3inc - Today at 12:21 PM
Original wallet already works great but needed some love on the eyes :smiley:
Riddlez666 - Today at 12:23 PM
@mathias7799 also been busy getting the wallet signers taught so when the time comes they are ready and its actually a pain in the butt to teach lol
osoese - Today at 12:24 PM
@jal3inc you need more ella in your wallet
mathias7799 - Today at 12:24 PM
@Riddlez666 Lol nice :smiley:
xD
jal3inc - Today at 12:24 PM
Yea im poor haha dont judge me lmao
mathias7799 - Today at 12:25 PM
Btw i tried your Fork of sammys it's so different
osoese - Today at 12:25 PM
@jal3inc I found someone I can beat in a carbon vote ha ha
jal3inc - Today at 12:25 PM
lmao
osoese - Today at 12:25 PM
I'm too broke to take on @Riddlez666 and @ellaismer
mathias7799 - Today at 12:25 PM
I'm almost done making it more "user friendly"
jal3inc - Today at 12:26 PM
I calmed down buying coin cause when i buy the market crashes. Haha
mathias7799 - Today at 12:26 PM
Lol
osoese - Today at 12:27 PM
@here I do not have anything else for this weeks meeting
Riddlez666 - Today at 12:31 PM
6 mins to get in  https://handsonahardcoin.com/?network=ella
Come battle me today
ellaismer - Today at 12:32 PM
@here If nothing else, I guess we can end today's meeting. :smiley: If you issue !rsvp yes now, the bot will send you the wrong date, but it shouldn't matter.
!rsvp clear
RSVPBotBOT - Today at 12:32 PM
RSVP list cleared!
```
