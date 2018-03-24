# Development Meeting (24 Mar, 2018)

This is the log of *Weekly General Development Meeting*. It happens every Saturday 4pm UTC in the #development Discord channel.

```
ellaismer - Today at 12:01 PM
!rsvp ping
RSVPBotBOT - Today at 12:01 PM
@Nulligun @Towd @Alpargato @ellaismer @DontPanicBurns @psdev @limax @CryptoFern @mechagenius @Afex @MADMAX
limax - Today at 12:01 PM
:ella:
CryptoFern - Today at 12:01 PM
Greetings everyone
Towd - Today at 12:02 PM
Hi there.
ellaismer - Today at 12:02 PM
@here It's time for our weekly dev meeting. If you have anything in mind you want to discuss, it's time to raise your voice! I'll also be here to answer questions related to Ellaism if you have any. :smiley:
CryptoFern - Today at 12:02 PM
@ellaismer Do you have voice chat enabled?
ellaismer - Today at 12:03 PM
One thing I want to discuss is the Code of Conduct (https://github.com/ellaism/meta/blob/master/conduct.md). If you have suggestions or if you want to lead the Code of Conduct Working Group, we can discuss it here.
@CryptoFern No we don't have that yet. Do you want one? I think a lot of people would prefer text.
CryptoFern - Today at 12:04 PM
@ellaismer Yes please it would be good to have
Sometimes its good to talk vs text and vice versa, so its good to have both options
ellaismer - Today at 12:04 PM
#meeting
Towd - Today at 12:06 PM
If we do a voice chat meeting regularly, we should set up some way to log it with speech to text for the future.
I need to find a mic for my PC as well.  :stuck_out_tongue:
CryptoFern - Today at 12:07 PM
can you guys hear me?
DeSVaR - Today at 12:07 PM
@CryptoFern works fine :thumbsup:
CryptoFern - Today at 12:07 PM
Its also good just to have a voice chat so we can talk during the week to
You know, there if we want to use, otherwise text is fine
maskekar - Today at 12:08 PM
Difficult to track though.. and how to log it
ellaismer - Today at 12:09 PM
cryptofern: we don't necessarily need to log everything. If we run into disagreement, audio would be more helpful.
(I don't have experience in those audio logs but I can help this time..)
DeSVaR - Today at 12:10 PM
As far as i know discord supports bot with text-to-speech capabilities
(its a start)
maskekar - Today at 12:10 PM
Yeah i'm listening, go ahead guys :smiley:
ellaismer - Today at 12:12 PM
Okay my audio connection is really unstable so I probably cannot help speech-to-text, sorry..
I hear what @CryptoFern said, yep an agenda would be great. So we have two more items:
1. Review website design.
2. Review what needs to be done from development side.
And if anyone has comments related to Code of Conduct, we can also discuss that.
CryptoFern - Today at 12:14 PM
So my thoughts on the website, I think I got enough feed-back during the week to work on more of an alternative design that encompesses what the community would like in terms of "open source" look
limax - Today at 12:14 PM
the Code is too new and need to be studied by all of us
CryptoFern - Today at 12:15 PM
I just did not want to dive too deep into that incase there were alternative opinons or someone that wanted to also maybe get involved in the design?
limax - Today at 12:16 PM
and also even as a draft should go on the website
Towd - Today at 12:16 PM
I'm happy with the way you've been developing it.  Posting stuff throughout the week for the community to discuss.
ellaismer - Today at 12:16 PM
@limax by the "Code", are you talking about the website design or Code of Conduct?
limax - Today at 12:17 PM
Code of Conduct
Towd - Today at 12:18 PM
I'm happy if you take the lead,  I'm willing to help if you need some support.
limax - Today at 12:19 PM
@CryptoFern  :thumbsup:
ellaismer - Today at 12:19 PM
@CryptoFern That's cool. First of all, thank you for working on the website!
Yeah I still think Github is a necessity, especially given that most people want "open source" feels and looks.
Another thing is about maintenance.
maskekar - Today at 12:20 PM
@CryptoFern i personally really grateful of what you trying to do.. just work on it when you have time since this is open source, no pressure :ok_hand:
ellaismer - Today at 12:21 PM
@CryptoFern Most of the things we have for the website are written in markdown. That's a plaintext format the same as how you format things in Discord messages. So if people wants to contribute anything, they only need to write plaintext. If they want to do some formatting, they learn some markdown. But there's definitely no need for them to learn any HTML or javascript.
So that's the thing I want to make sure, because our current website framework separates content and layouts/themes. And it would really great if we can maintain the separation -- we get those new themes in layout HTML format, and without changing the content, we can have a new website look.
Towd - Today at 12:24 PM
@CryptoFern Yeah, I feel the same way regarding time spent here-- It's a nice break from work and just fun.
maskekar - Today at 12:25 PM
@CryptoFern i know this is new for you and me also, like "forced" to use markdown on Steemit.. blah.. but that's the way currently blockchain community do
ellaismer - Today at 12:26 PM
Another thing is that a lot of the current design is about fonts/formats (like how you display tables, links, code blocks). Those are important because a lot of our posts need them. And I would worry if we just "remove" the current design and get a completely new one, we may not be able to get all the formats done at the same time.
So that's why I would still suggest we modify based on the current one and give it a completely new look -- into what you proposed. We can get the design first, and then we can work together to get the design written in Jekyll format.
@CryptoFern Yeah that's great! We can get the design first, and then talk about the implementation. :smiley:
Towd - Today at 12:29 PM
@CryptoFern  I think one of the primary things to hit is some layout and organization to  ease  accessibility.  Then there are a few additional pages we may want to add like the bios and background you mentioned.
ellaismer - Today at 12:29 PM
@limax Regarding Code of Conduct, we can get a link from our /about page to the current draft version.
I'll get that now.
limax - Today at 12:30 PM
sure
also don't forget about "Entirely driven by volunteers"
ellaismer - Today at 12:31 PM
@CryptoFern Good to know!
@limax About that line, do you want it to be included in CoC or?
Towd - Today at 12:31 PM
I think the Code of Conduct is great.  I don't have any additions at the moment.  It should help a lot in fostering a more positive community.
limax - Today at 12:31 PM
or in the principles
it's something that define and make a difference between projects
@CryptoFern can explain more about the discussion i had with coinomi
CryptoFern - Today at 12:33 PM
-    Marketing Goals (Website, Press releases, bounties, community fund..ect) 

-    Development Goals (What’s next, needed, community fund..ect) 

-    Accessibility Goals (Exchanges, Wallets. Community fund for this goals)
Towd - Today at 12:34 PM
Do we have a list of exchanges to apply to for free?  (I will handle Bittrex this week if we all agree we’re ready.)
I seem to remember somebody was working on that?
Okay.  We'll have to pull a list together.
psdev - Today at 12:35 PM
similar to looking to get listed on exchanges, is it a priority to seek out and get added to new large mining pools?
ellaismer - Today at 12:35 PM
My only comment regarding "team" is that it looks closed. So I just suggest to call them "working groups", and make it everyone-can-join. We can have several "core members" leading a working group. (I really appreciated that @CryptoFern @limax and others leading our #exchange-listings working group, which is working great!)
Towd - Today at 12:36 PM
In regards to Exchanges I'll touch base with Ellaminer.  I don't mind taking point contacting exchanges.  I can start with Bittrex, and I'll pull the list from Ellaminer if he has one, otherwise, I'll start making one.
limax - Today at 12:37 PM
we need to define ourself clear when we discuss with third parties
ellaismer - Today at 12:37 PM
@CryptoFern Can you repeat? Didn't hear your last point.
Yeah that's what has been planning for a long time. We have been planning to get a "Team" page in our website, where we'll list all our "leaders/core members" of every working group, if that helps. But we need to get the list first.
limax - Today at 12:39 PM
not like it was the first discussion with coinomi ("you are a joke", "we will squish you")
:thumbsup:
also need to do research and correct media links
CryptoFern - Today at 12:42 PM
Marketing Working Group - (Website, Social Media, Press..ect) - CryptoFern, Towd?
Development (Expanding Platform..support.ect) Ellaismer and ?
Accessibility (Wallets, Exchanges, Pools) Limax, Towd?
limax - Today at 12:42 PM
what about our telegram group? we need to keep in touch with them also
CryptoFern - Today at 12:43 PM
Then people can just go to those channels to discuss?
ellaismer - Today at 12:43 PM
@CryptoFern I suggest we get it into more concrete form. For example, we have "Multi-geth Working Group", "Code of Conduct Working Group", "Exchange Listings Working Groups". This just helps all teams to have a strong focus/goals for what the team tries to do. And it also makes it so that new efforts can be easily bootstrapped without stepping on existing teams' tones.
Towd - Today at 12:43 PM
@CryptoFern Yes.  I'm most interested in marketing.  But, I'm happy to help here and there with development work.
ellaismer - Today at 12:44 PM
@limax We originally have a telegram-Discord bridge. But right now we need someone with development background to host it, because I don't have a telegram account.
Towd - Today at 12:45 PM
Speaking of Telegram, is anyone here experienced setting up a bot between Telegram and Discord?  It was helpful to have in its own channel and not the general?
limax - Today at 12:45 PM
@AI is admin in the telegram gorup we will discuss about a way to keep them in touch(edited)
Towd - Today at 12:45 PM
Kept Telegram from feeling so separated.
limax - Today at 12:47 PM
@Towd your marketing material, what is the current status?
Towd - Today at 12:48 PM
@limax So, currently I have a two page write up for submission to Bittrex.  If anyone would like to see it, it is a Google doc, so you can direct message me with an email.
ellaismer - Today at 12:48 PM
@CryptoFern My concern is just that I'm afraid of repeating old mistakes. In our old Discord channel what happened is that we formed a hierarchical "power structure". That kind of makes new people not able to participate. So I just really hope we can get the structure as flat as possible -- not having hierarchies in our teams.
We can always create working groups on the go, if that helps. Me or any moderators (which the Code of Conduct Working Group will decide on that) can do that. I can also get a bot to help us do that.
Towd - Today at 12:49 PM
@limax  I'm also, have an outline for an April marketing campaign if we're ready to discuss, I can paste here.
Nulligun - Today at 12:50 PM
I can host a discord bot if needed, I've got a couple running for my gaming buddies.
Towd - Today at 12:51 PM
@ellaismer  @CryptoFern I think having people as points of contact would be helpful.  We just need to encourage the community to pitch in and make sure people understand that anyone can step up and help out-- that's something that didn't happen enough with the old group.  People were shut down when they offered to pitch in.  I saw that a lot first hand with marketing from myself and a few others.
ellaismer - Today at 12:51 PM
@CryptoFern Yeah I agree with that. We definitely need leaders for all our working groups. But I just don't want to have hierarchical "working group structure".
How about let's not call those general types "working groups"? We can just create "marketing" channel in umbrella.
@Nulligun Cool. Please do! Let me know if you need any help!
@CryptoFern I don't want "Exchange Listing Working Group" be under a more general "Marketing Working Group".
Towd - Today at 12:53 PM
@ellaismer You have a description somewhere in the Github regarding "swarming" development.  I think that's something we could link on the website or Discord so people are familiar with the concept.  I think it is an interesting work strategy.
CryptoFern - Today at 12:55 PM
Agenda for upcoming week: 

Marketing - Continue Working on Website

Development - ?

Accessibility - List of Free Exchanges
ellaismer - Today at 12:56 PM
@Towd Can you show me where? That's Ethereum's decentralized storage system.
limax - Today at 12:56 PM
@CryptoFern free is something that it will be hard to achive
we can get in cheaper if we present ourself in the correct way(edited)
Towd - Today at 12:58 PM
@ellaismer I will try to find it again.  I just stumbled across it when I was first looking into helping on the Github.
CryptoFern - Today at 12:59 PM
@ellaismer Just to make sure you caught my last message, what are the immediate concerns or items that we need to address from a development side?
ellaismer - Today at 1:00 PM
@CryptoFern For development, my current focus is to get the multi-geth project bootstrapped. I don't know whether there're projects from other developers going on.
CryptoFern - Today at 1:01 PM
@ellaismer where can I read more about that?
ellaismer - Today at 1:01 PM
And I think another item is that we should be thinking about recreate the Community Fund.
@CryptoFern https://github.com/ellaism/meta/issues/25
GitHub
Multi GETH · Issue #25 · ellaism/meta
Ellaismer's Notes


We keep https://github.com/ellaism/go-ellaism using ETC's fork, and continue to merge ETC upstream patches. This way, we don't break anything for existing go-ellaism...
So it's basically a full node, but we wanted to get a version that runs on ETH, ETC and ELLA with one binary.
Towd - Today at 1:02 PM
@ellaismer With regards to the community fund:  We need to set up a new community fund / wallet or some other solution for storing some community funds-- and what can we do so what happened to the last does not happen again. (we could use a new one and if I am successful at recovering funds, we'll need a place to put the funds)
So currently we need 4 of 6 signatures from the multi-sig wallet.  One is Bioaim, but the other 5 all left in the split to start the new coin.  I am speaking to them and may have a couple, but not yet 3.  Nothing is committal.
limax - Today at 1:03 PM
@Towd maybe as payment for exchange/wallet listing ?
this way is more safe and usefull
Towd - Today at 1:04 PM
@limax I don't mind spending a little on exchange listings, but only if the fees are small.
ellaismer - Today at 1:04 PM
@Towd Yeah how to avoid old mistakes is something I also don't have a good idea about.
Towd - Today at 1:05 PM
@limax  I think that's something to discuss if the issue of a small fee surfaces.
limax - Today at 1:05 PM
limax, [22.03.18 18:01]
do you think that is possible, if us as community, can gather a partial amount of your fee, can we find a way for a time frame listing?

limax, [22.03.18 18:02]
until we can come with the rest of the fee?

Angelos | Coinomi Wallet ., [23.03.18 18:02]
Ill ask upstream
ellaismer - Today at 1:05 PM
(We can use Dev Fund to re-bootstrap Community Fund, if we just talk about recreate the new fund.)
Towd - Today at 1:06 PM
I think on principle, we're going to try to get back all the funds, then if we decide to compensate some of them for the time, we can.
They are already talking to me about how they are owed this and that for fees, and their personal costs.
Personally, I'd be happy to leave the wallet in the care of Ellaismer for now.  He's the founding dev, and until we reach a better solution, the funds seem to be safe with him.
My only other suggestion would be some kind of multisig wallet where we can carbon-vote members off the wallet and replace them somehow.
limax - Today at 1:09 PM
@CryptoFern :rofl:
Towd - Today at 1:09 PM
Well, if we go with the Multisig again, maybe it should be 4 signatures from 8 holders, but we must be more diverse about selecting the signees.
ellaismer - Today at 1:09 PM
@Towd To be honest, that really don't have anything to do with Community Fund, no matter what happened. Most donations are from either Minerpool or third parties.
The Community Fund was initially controlled by CountCryptula. I thought that was too risky, so I asked him/her to get some people to set up a multisig.

@CryptoFern Yeah I agree. I cannot hold the private key of the Community Fund.
@Towd I think that's partially the reason of the old mistakes. CountCryptula was the person that selected all signers.
maskekar - Today at 1:11 PM
I think the multisig of multisig like what we discussed is a good idea, for example right now we have just 1 working group (Towd, Limax, Cryptofern, Ellaminer) at the moment that's the first multisig
Towd - Today at 1:12 PM
@ellaismer Got it.  Well possibly then what about doing 7 or 8 signers and we'll have to cast a wider net.  Possibly you or in the future, the current lead dev should have one of the signatures.
limax - Today at 1:12 PM
the community (carbon vote) need to have signature
like 2 from 5 votes should be from community
ellaismer - Today at 1:13 PM
@Towd Dev Fund can be one of the signers. And I'll also ask @sorpaas so that we replace the current third signer of Dev Fund to the new Community Fund.(edited)
limax - Today at 1:13 PM
and one external
ellaismer - Today at 1:14 PM
@limax There's some technical limit to that (CarbonVote as signer), but I'll need to check.(edited)
limax - Today at 1:14 PM
cool :smile:
ellaismer - Today at 1:16 PM
@limax Probably we cannot use full CarbonVote, but it's possible to have "voting tokens" (for example, based on donations). But we need to design the rule first.
limax - Today at 1:16 PM
or maybe MINING tokens?
ellaismer - Today at 1:17 PM
@limax No that would be too controversial. We're only going to use mining tokens for things related to Dev Pool.
limax - Today at 1:18 PM
you are right
ellaismer - Today at 1:18 PM
Something that based on contributions to the new Community Fund would be good. We need to get a clear idea about how those tokens participate in "voting".
limax - Today at 1:19 PM
@Towd paste your agenda
Towd - Today at 1:19 PM
I have an outline for some April marketing efforts, but it is really going to be contingent on recovering some of those community funds since I'd like to do some ELLA cash prizes as incentives.  So, I need to sort out that thing before the campaign, but this is the outline:
I’m suggesting a small contest for April in 3 stages with each lasting about a week and would conclude with a small prize pool of ELLA coins being handed out.
Week one:  Tweets, social media, facebook posts etc.  --Best tweets win prizes, some drawn randomly.
Week two:  Blog posts on Medium, Reddit, or other message boards.  --Best blog posts win prizes and a couple drawn randomly.
Week three:  Open format.  Videos, podcasts, blogs, etc.  --Community pics favorites and best prizes go out.
I’ve seen other projects bake the process into smart contracts if we wanted to do something along those lines.(edited)
limax - Today at 1:20 PM
any chance to recover old twitter account?
Towd - Today at 1:21 PM
@CryptoFern Yes.  We could do weekly or montly contests continuing through the year.
ellaismer - Today at 1:22 PM
@limax That one is controlled by CountCryptula.
limax - Today at 1:23 PM
i know, i'm just asking @Towd because he is discussing with some of them
ellaismer - Today at 1:23 PM
(And anyone if you want to have tweeting access to @ellaismproject handle, please see #welcome)
@CryptoFern We can follow how we give out twitter handle access, if you're just looking for ideas.
Towd - Today at 1:24 PM
@limax I have not been in discussion with CountCryptula with regards to that. Working on the wallet primarily.  If I think I can recover it, I will try, but since they are using it to advertise Ethergem now, I doubt I'll have much success.
Yeah, we need something set up whether we get funds back or not.
limax - Today at 1:29 PM
tomorrow is the launch of vicex and ella will be listed with old twitter account. i've tried to contact them on discord and exchange but no answer(edited)
ellaismer - Today at 1:29 PM
I don't think we reached a conclusion yet.

1. If we're only talking about recreating the new fund, Dev Fund will sponsor the bootstrap.
2. Multisig is probably still the way to go. We need to ensure diversity. And also need to first get the list of signers, and signing required.
3. A better option might be multisig of multisigs.
4. A harder, and probably-will-not-be-implemented-this-time option, is to have token votings. We can use the above option 2) or 3) and then transit to 4) when it is ready.
And if someone wants to lead the effort of Community Fund recreation, I think everyone will appreciate it.
Towd - Today at 1:31 PM
Yeah, let'take it to the community.  And have possibly 8 signers with 4 to unlock?
ellaismer - Today at 1:32 PM
@CryptoFern That's fine. CarbonVote allow non-unique votings, so we can just get each person one option and then people vote on multiple options.
(And I won't be one the signer list myself. We can have Dev Fund as a signer.)
maskekar - Today at 1:32 PM
I think the multisig of multisig like what we discussed is a good idea, for example right now we have just 1 working group (Towd, Limax, Cryptofern, Ellaminer) at the moment that's the first multisig + ellaismer (will be removed after we have more working group?)
ellaismer - Today at 1:33 PM
@maskekar Technically we have three active working groups: "Multi-geth", "Code of Conduct", "Exchange Listings".
Towd - Today at 1:33 PM
Bioaim is in the old sig and he's still here, I suggest we include him.
maskekar - Today at 1:33 PM
@ellaismer yeah but same account though
Towd - Today at 1:34 PM
We can also look into using possibly some of the international community.  Possibly those who run a minerpool.
ellaismer - Today at 1:35 PM
I'm thinking about creating a "Community Fund Bootstrap Working Group" so that if someone wants to lead the bootstrap effort, he/she has a place to do it. Sounds like a good idea?
limax - Today at 1:35 PM
pool owners can be a group
Towd - Today at 1:35 PM
My plate is getting kind of full with exchange lists, marketing campaign, and fund recovery.  Could somebody else lead that with whom I could coordinate?
Yeah, its close enough to what I'm doing I guess.  I'll start coordinating a list of candidates.
maskekar - Today at 1:37 PM
Anyway i can only help in translation and can represent Indonesian community since i also created the ANN
Towd - Today at 1:37 PM
Yeah, its fine.  Then I'll have a better idea when its coming together so I can pressure the old signers to release funds.
ellaismer - Today at 1:37 PM
@Towd I do hope multiple groups of people can working on the list of candidates at the same time. It just helps diversity.
Towd - Today at 1:38 PM
Yes, I'm open to all suggestions.  I'll just maintain a list.
limax - Today at 1:38 PM
@ellaismer make the group
ellaismer - Today at 1:38 PM
Got us #comfund-bootstrap
CryptoFern - Today at 1:40 PM
@ellaismer incase you did not get that last message, if I understand how the groups will be working, should we also have a group for the website development?
ellaismer - Today at 1:41 PM
@CryptoFern Got us #website-development
CryptoFern - Today at 1:42 PM
ok cool, I understand how that is intended to work now
I think that is a good agenda for at least this upcoming week
At least gives me some focus
ellaismer - Today at 1:43 PM
Cool! If there's nothing else, let's close this meeting! :smiley:
Yes. It's every Saturday 4pm UTC.
Towd - Today at 1:43 PM
Sounds good.  Lots covered today!
Yes
limax - Today at 1:43 PM
:thumbsup:
CryptoFern - Today at 1:44 PM
Cool, well I'll be on during the week. But good stuff guys, have a great day/evening
:ella:
ellaismer - Today at 1:44 PM
!rsvp set-date 31 March
RSVPBotBOT - Today at 1:44 PM
RSVP date set to 31 March.
Towd - Today at 1:44 PM
Yeah, thanks everyone.  That was a very productive meeting.  Enjoy your weekends.  :smile:
ellaismer - Today at 1:44 PM
!rsvp clear
RSVPBotBOT - Today at 1:44 PM
RSVP list cleared!
```
