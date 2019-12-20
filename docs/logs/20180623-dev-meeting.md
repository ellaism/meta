# Development Meeting (23 June, 2018)

This is the log of *Weekly General Development Meeting*. It happens every Saturday 4pm UTC in the #development [Discord channel](https://discord.ellaism.org).

```
Nulligun - Yesterday at 3:25 PM
I got my "org" account approved.   New build of iOS wallet submitted for testing @DeSVaR   hopefully gets approved this weekend for you to try out.   Anyone else who wants to help test iOS build, I just need an email address, doesn't need to be a apple ID or anything.
kubu00 - Today at 12:01 PM
today I will be less active because I have an urgent problem :rolling_eyes:
ellaismer - Today at 12:02 PM
@here It's our weekly dev meeting. :smiley: 
Some development update from my side:
* The tipping bot Solidity contracts are finished, and I'll help @kubu00 to get the bot out.
* I'm doing a major refactoring to our current explorer code. Updating to web3 1.0beta and nodejs 9-x. This should help to make the code simple.
@kubu00 No worry!
And we have some agenda items posted by @kubu00 and @Nulligun
https://github.com/ellaism/meta/issues/39
GitHub
Ellaism Community Weekly Meeting 18 Agenda · Issue #39 · ellaism...
Meeting time: Saturday 23/06/2018, at 16:00 UTC Meeting location: Discord server Agenda Reply with issues to be discussed below.
kubu00 - Today at 12:04 PM
@here I will deal with this from Monday
ellaismer - Today at 12:04 PM
One particular thing is regarding the new website. @Ingridfire and @nash finished the new website design. I quite like it myself. If the community agrees, I'll handle the design migration to our current website. (And we'd definitely remember to credit @Ingridfire and @nash for their works!)
kubu00 - Today at 12:06 PM
what do you think about payment processor?
I think we need that
Nulligun - Today at 12:06 PM
yea, it would be very nice to be a part of one of those
kubu00 - Today at 12:07 PM
https://www.coinpayments.net/(edited)
Iame3 - Today at 12:07 PM
Good news fellows   :smiley:
ellaismer - Today at 12:08 PM
They require $25 upfront to get a response, which is not cheap for us already. :laughing:
psdev - Today at 12:08 PM
new website design looks great
ellaismer - Today at 12:08 PM
@Iame3 Love to hear what news you have. :smiley:
Iame3 - Today at 12:09 PM
Btw ellaismer, just wondering - which continent are you from? I meant good news about the website... Ah, ok, Australia?(edited)
DeSVaR - Today at 12:11 PM
@ellaismer I posted their response in #exchange-listings and I think I also forwarded their email to core@ellaism.org 

There is a problem with listing fee; as we know fees are everywhere quite high. And coinpayments requires reccuring payments
ellaismer - Today at 12:13 PM
It may be better to just create an open source payment processor. If it only involves ELLA but not BTC/USD conversion then it's quite doable.
And as merchants can run nodes themselves, it can create some extra trusts.
DeSVaR - Today at 12:14 PM
Which brings me to one thing on agenda... We could get one more multisign wallet for listing fees donations. I was thinking If its possible to use same wallet for ETC and ETH donations as they tend to be more used
ellaismer - Today at 12:16 PM
Sync state is not quite possible right now. But I'll take a look if we can use the ECDSA precompiled.
Still, my suggestion is that we try to grow Community Fund for this purpose. An extra fund may create additional distractions and we've nearly already had our hands full just with two funds.
Towd - Today at 12:18 PM
Yeah, I agree.  Too many funds just complicates things.  We've used the community fund for marketing.  I don't see why you couldn't run a new drive to raise money for exchange listings @DeSVaR .
DeSVaR - Today at 12:23 PM
Soon :smiley: Currently I’m busy with job (too many new projects :/ )
redmeat - Today at 12:25 PM
Hi guys is there an roadmap i can take a look at?, (if this is the right section to ask)
ellaismer - Today at 12:26 PM
Just a technical note: I think it's possible to design a multisig that works across multiple chains, taking advantage of ecrecover precompiled. The issue though, is that this won't be a simple task:

1. Signatures must be created in a custom way. They're not normal ethereum transactions. This is because we need to know whether some actions apply to only one chain, or to all chains.
2. Gas costs will be high -- it involves a lot of signing and recovery stuff.
3. I don't think we have existing solutions -- it means we lack audit even if we managed to make it, unlike our current multisigs (which are well-audited and used by many).
@redmeat Yes! https://ellaism.org/roadmap/
Ellaism
2018 Roadmap
Ellaism Core’s Roadmap in 2018. A stable Ethereum network without pre-mine or dev fees.
redmeat - Today at 12:28 PM
thx :smiley: is it true that you were a developer for a top 25coin? @ellaismer
ellaismer - Today at 12:28 PM
Yes. That's the only thing I can confirm about me. :smiley:
limax - Today at 12:28 PM
:smile:
EllagramBOT - Today at 12:32 PM
JayGatsbys: Hehe
JayGatsbys:
ellaismer - Today at 12:35 PM
Looking at the agenda items, looks like we've mostly finished things we wanted to discuss. (Unless @Nulligun pops up.)
Does anyone have anything else? Otherwise I'm guessing we'll have a short meeting today. :smiley:
Nulligun - Today at 12:35 PM
I'm here, not much to add other than what I put on agenda.
ellaismer - Today at 12:41 PM
Cool! And I think a final thing is that if anyone's interested in hosting the dev meeting every week, please let us know! This basically just involves:

1. Before the meeting, assemble the current available agenda items.
2. Post a @here message every week at this time, telling everyone the meeting is up.
3. Guide the discussion and walk through all the items.
4. Copy the meeting log to ellaism/meta repo.

Just thinking this might be a good idea to get more people involved. I'll give all necessary permissions, to notify everyone on this Discord server, commit to ellaism/meta, admin to @RSVPBot, etc. And I would also propose to include this person on ellaism.org/people
And if nothing else. I think that's it! Thanks for joining the meeting!
Nulligun - Today at 12:42 PM
Have a nice weekend all :smiley:
```
