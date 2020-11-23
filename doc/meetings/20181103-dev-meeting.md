# Development Meeting (3 November, 2018)

This is the log of *Weekly General Development Meeting*. It happens every Saturday 4pm UTC in the #umbrella [Discord channel](https://discord.ellaism.org).

```
[03-Nov-18 05:05 PM] ellaismer#6750
@here It's our dev meeting this week! Looks like we don't yet have any agenda in the issue page (https://github.com/ellaism/meta/issues/51), but just posting some ideas that may be interesting to discuss!

1.  ProgPow hard fork on Ellaism. We have parity and geth with draft implementations on this, so hard fork this on Ellaism is more and more feasible.
2. Constantinople and how the Ethereum delay may affect us.
3. Anything else you think would be interesting!


[03-Nov-18 05:08 PM] differdrift#2817
Marketing.


[03-Nov-18 05:15 PM] limax#8484
Regarding 1. if you decide to go with the fork you can count on me for helping with preparations


[03-Nov-18 05:16 PM] DeSVaR#3179
For those ProgPOW implementations. How fast would it be able for ellaism to adopt them and be one of first chains to do it? What can be worst case scenario, and its possible to fix it?


[03-Nov-18 05:19 PM] limax#8484
I think in worst case we can have a chain split. First thing will be of course to test the new algorithm on testnet before mainnet update/upgrade


[03-Nov-18 05:22 PM] differdrift#2817
Is there any works for a Ellaism Core Wallet?


[03-Nov-18 05:25 PM] DeSVaR#3179
@differdrift#2817  <https://github.com/ellaism/shell/releases>
 also on Android and iOS but not same "base/source"
Well we don't have anything else to say about ProgPOW let's move to point 2 @here


[03-Nov-18 05:30 PM] limax#8484
@ellaismer#6750 you should explain more on 1.
What is needed in order to have a clear roadmap on this, if we need to help with let say testnet infrastructure or else


[03-Nov-18 05:33 PM] DeSVaR#3179
You are right, sorry for pushing


[03-Nov-18 05:46 PM] differdrift#2817
@DeSVaR#3179 That's a workable ELLA Core wallet that I can download on my desktop and send my ELLA there and it's secure and encrypted and I can backup my wallet?


[03-Nov-18 05:49 PM] limax#8484
@DeSVaR#3179 current transactions on ComFund are for real? If so you should push on @Community Fund Signers for validations
Also you should review signers with zero confirmations since the ComFund was bootstrapped


[03-Nov-18 05:52 PM] Dp Dp#3807
@DeSVaR#3179 do I need to validate anything or message above is related to previous transactions?


[03-Nov-18 05:54 PM] DeSVaR#3179
@differdrift#2817 yes


[03-Nov-18 05:54 PM] Alexander#9166
Hi all


[03-Nov-18 05:55 PM] differdrift#2817
Hey.


[03-Nov-18 05:58 PM] DeSVaR#3179
@Community Fund Signers there are transactions to be confirmed or declined.


[03-Nov-18 06:00 PM] DeSVaR#3179
And as @limax#8484 reminded me, I will review ‘old’ signers and will push to remove those that didn’t made any transaction yet. @here
@everyone I would like also to discuss about marketing. @differdrift#2817 @ezeekiell#5681 @easy#9029 and maybe some I forgot had ideas over past weeks.
Please, raise your voice with your ideas


[03-Nov-18 06:09 PM] Iame3#9058
Best marketing would be opinion of known persons, attracting good developers and good apps.


[03-Nov-18 06:12 PM] psdev#2800
Have new signers gone through the identity disclosure process that was required of first round of signers?


[03-Nov-18 06:13 PM] Alexander#9166
I think that the opinions of famous people cost money.
@psdev#2800 I was added to subscribers, but not fully explained how to perform these functions.


[03-Nov-18 06:15 PM] Iame3#9058
Imagine if Mr. Satoshi appears from nowhere and announces that ella is successor of bitcoin, imagine what happens next... Price would go 1000x in a week, crowd of developers around. Some other persons would also help.


[03-Nov-18 06:17 PM] DeSVaR#3179
@psdev#2800 one had and two didn’t. But in first round not everyone made their identity public
If you look at <https://transparency.ellaism.org/community/#/> you can see that there is only three public records


[03-Nov-18 06:19 PM] limax#8484
@DeSVaR#3179 You are wrong
ComFund signers from first round without a public identity sended the POI to the ComFund bootstrap members


[03-Nov-18 06:22 PM] Alexander#9166
@Iame3#9058   Yes, there is something to think about.


[03-Nov-18 06:22 PM] limax#8484
Maybe old members since the beginning of this project are exceptions


[03-Nov-18 06:23 PM] easy#9029
Hello


[03-Nov-18 06:24 PM] Nulligun#2762
Ellao


[03-Nov-18 06:24 PM] easy#9029
i think with rus part of community we can do russian translations but spanish and japanese are needed, maybe german one. 

Testnet for progpow might be great act, i`m in. We can have a discuss of its implementation during the test, we could invite and make an advisor from BCI team, plus Kristy from the Minority is "Mining Advisor" ))


[03-Nov-18 06:27 PM] limax#8484
@easy#9029 I can also provide infrastructure, just waiting for requirements


[03-Nov-18 06:29 PM] DeSVaR#3179
I missed that @limax#8484 , because I shared my identity when it was asked on discord. 

But I recall asking if there is any objections to anonimity before adding new signers and there were no objections to that, so I went forward with transaction(s)


[03-Nov-18 06:43 PM] Dp Dp#3807
Please tell me what should be done to become comfund signer. This POI thing?


[03-Nov-18 06:44 PM] limax#8484
When current ComFund was bootstrapped it was a special moment after a community spilt and a ComFund freeze. The rules must be reviewed and adapted to current situation


[03-Nov-18 06:50 PM] DeSVaR#3179
As it was discussed that time... Who will be entrusted with this personal data? My factors for accepting new singers was checking their activity and enthusiasm on server


[03-Nov-18 06:52 PM] limax#8484
Signers data can be encrypted in a transaction. @ellaismer#6750 can provide more info on this


[03-Nov-18 06:57 PM] DeSVaR#3179
Isn't that same as;  say for example: send copy of your ID to @somebody to get your "KYC" verification?


[03-Nov-18 06:58 PM] easy#9029
the project must not be famous but should be available, even for developers
i mean the info & reviews. Tutorials for devs? how to use blockchain with Ella, how to get coins from funds to start a project.
Our meeting-format might be an application development courses if someone can give a lessons. with Ella payment for example


[03-Nov-18 06:59 PM] limax#8484
Something like that. I did sended my POI to a member of ComFund bootstrap committee, @Towd#0130


[03-Nov-18 07:00 PM] limax#8484
In the current situation, if we keep the same procedure, you @DeSVaR#3179 will collect POI and guarantee safe keeping and DND
Also you'll guarantee to the signers and community that you checked the POI for new signers


[03-Nov-18 07:03 PM] DeSVaR#3179
Can you advise me the best way to collect POI?


[03-Nov-18 07:04 PM] limax#8484
I can tell you what I did as aspiring ComFund signer. I did sended a photo with my driver license to @Towd#0130


[03-Nov-18 07:05 PM] differdrift#2817
Marketing Idea: Artwork. Artwork sticks in people's mind. I can create an "Ellaism Comic Book" that I can release a page a week. Some small public funding could help, but not necessary.. maybe just tips to keep me motivated. I have some ideas for what the comic can be about. Basically "A true decentralized world called Ella"                                 Another idea artwork related would be an artwork auction. I can auction off artwork for Ella.


[03-Nov-18 07:05 PM] limax#8484
Of course you can go further and ask for a selfie with the ID


[03-Nov-18 07:06 PM] Iame3#9058
@differdrift#2817 like this?
https://cdn.discordapp.com/attachments/508306029549715478/508341336017993766/supermen.jpg


[03-Nov-18 07:11 PM] differdrift#2817
@Iame3#9058 nope.. like this
https://cdn.discordapp.com/attachments/508306029549715478/508342425262227476/image0.jpg


[03-Nov-18 07:15 PM] limax#8484
@differdrift#2817 something like comics.ellaism.org ?


[03-Nov-18 07:15 PM] differdrift#2817
That could be cool
Ellaism needs more visuals and a weekly communication with the public


[03-Nov-18 07:16 PM] limax#8484
If current hosting cannot provide support for this, I can do that


[03-Nov-18 07:16 PM] differdrift#2817
Also the community itself can contribute to the comic.. via story ideas and or actual pages
A decentralized comic book


[03-Nov-18 07:16 PM] Alexander#9166
@differdrift#2817 A good idea


[03-Nov-18 07:26 PM] Iame3#9058

https://cdn.discordapp.com/attachments/508306029549715478/508346150349438986/cartman.jpg
Or even small animation...


[03-Nov-18 07:29 PM] differdrift#2817
Haha! Maybe it can be for any Ellaism artwork.. like a fan based Ellaism inspired artwork section.


[03-Nov-18 07:30 PM] Nulligun#2762
Make them ERC-721 items, collect and trade


[03-Nov-18 07:33 PM] DeSVaR#3179
I would like to call @AcroDuck#4262 to see how is community pool idea going on and when we can start advertising it (accesible on <http://pool.ellaism.eu>)
Its determined that pool will be counterpart to dev poll. 1% fees goes to community fund instead of developers fund.
And community fund needs to be used to pay marketers for raising awareness and giveaways. 
👆yes, no?


[03-Nov-18 07:38 PM] differdrift#2817
Reach out to me if "Planet Ella the decentralized comic book" is a go and I'll start  the conceptual process.


[03-Nov-18 07:40 PM] DeSVaR#3179
@differdrift#2817 as a comic lover I say this: Will pay from private pocket to see it happen 😃


[03-Nov-18 07:47 PM] differdrift#2817
@DeSVaR#3179 Awesome! I'll start it in a few days, first I have to finish up a piece for a gallery.


[03-Nov-18 08:02 PM] DeSVaR#3179
Another thing i would like to add:  ellaism.space will become relay to discord and will contain some basic info about coin. such as summary from coinmarketcap, social media, etc...
btw, there is already testing explorer deployed at explorer.ellaism.space which uses same code as official one, but will be totally redesigned and without 24HR limitations (just because we can 😉 )


[03-Nov-18 08:13 PM] easy#9029
https://miningpoolstats.stream/ellaism
https://coinmarketdaddy.com/currencies/ellaism/


[03-Nov-18 08:29 PM] DeSVaR#3179
Also, there is a wish to make those archived files from #archive availible on ellaism.space as interactive "library",  if anyone is interested in helping DM me


[04-Nov-18 02:37 AM] ezeekiell#5681
so guys... I am here if you need...some marketing on my spanish crypto facebook group to share about Ellaism..


[04-Nov-18 12:18 PM] ipsec#0568
hmmm  ellaismpool.com ->> trying 51% attack ? 😄
```