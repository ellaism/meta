# Development Meeting (9 June, 2018)

This is the log of *Weekly General Development Meeting*. It happens every Saturday 4pm UTC in the #development [Discord channel](https://discord.ellaism.org).

```
ellaismer - 06/09/2018
@here Our dev meeting this week starts. We have some agenda items posted by @Towd this time! https://github.com/ellaism/meta/issues/37

Regarding development update:
1. The "Show All Transactions" functionality is re-enabled. See #announcements.
2. CarbonVote can now set the rule to use ERC20 token on Ellaism blockchain! This allows some votes to be casted using DONATE token 0x4aaaD871293C4581edb580E99FB6613b0A3Bc488 or others. If you want to test this, after making donations to DONATE token, you can send a zero-value transaction to 0x5feda85987d001fdab2f70d0ca52f3bd7dae2bbe to cast a test vote. The result is visible using !carbon test-donate.
GitHub
Ellaism Community Weekly Meeting 16 Agenda · Issue #37 · ellaism...
Meeting time: Saturday 09/06/2018, at 16:00 UTC
Meeting location: Discord server

Agenda
To be discussed.
Towd - 06/09/2018
This is a cool idea.  I like it!
EllagramBOT - 06/09/2018
JayGatsbys: Hello
JayGatsbys: 666 members...
JayGatsbys: Who will make Telegram tip bot
JayGatsbys: Is it usefull?
JayGatsbys: I see many channels with this tip bot
ellaismer - 06/09/2018
The discord tipping bot is in the works! Not sure about Telegram, we may be able to do that through a bridge, or just get a separate bot. :smiley:
Towd - 06/09/2018
So, I talked to Terra about reimbursing him for prizes in the Spring Giveaway as well as paying in advance for an additional ten t-shirts and ten bumper stickers.  He quoted me 2141 ELLA.  I can coordinate the distribution this week, but I want to make sure everyone is alright with us pre-paying for some additional prizes.   I plan to give out a couple prizes each week for the next couple of months, just as incentives for people who help out with marketing efforts.
limax - 06/09/2018
Hi, sorry, I'm a little MIA today hope to be able to follow
Towd - 06/09/2018
Various prizes each week will be for things like random winners for Tweets, or best blog post in a week, or for other above and beyond contributions to our marketing efforts.
@limax Glad you were able to make it!  :smile:  I wanted to discuss a basic schedule for the #summer-of-code .  Do you have any preferences for time of day and what days?
limax - 06/09/2018
Ok, please allow me 2-3 min
I have everything ready on our server for testlabs and even more
@ellaismer if we need bandwidth and power for some services just let me know(edited)
kubu00 - 06/09/2018
And about tip bot....if we need that i can make tipbot
ellaismer - 06/09/2018
@limax Yeah thanks! I'll let you know for sure!
limax - 06/09/2018
@kubu00 is doing a lot on the discord bot I think he is now the BotFather in our community(edited)
ellaismer - 06/09/2018
@kubu00 Cool thanks! Please do! If there's anything I can help just let me know!
limax - 06/09/2018
I think @kubu00 and @Nulligun should start working together because they can complement each other
We need to get some services out from discord channel to some web interface
@kubu00 is doing python and django @Nulligun is doing JS
both are doing or learn to interact with blockchain and get dapps ready
As I said I can provide hosting if needed
regarding the SOC I have some personal things I need to take care about in the next 3 days
After that we will start no matter what
I'll start to do rustbyexample exercises in the webconsole and we will see if this can get traction
Towd - 06/09/2018
What times and day or days would you like to do it?
limax - 06/09/2018
But is more than that anyway now that members like @kubu00 @Nulligun @Kardsen are already playing code by themself :smile:
Towd - 06/09/2018
I just want to put together a rough schedule with the syllabus for Reddit, and I'll post and link it on Medium so people can check in over the summer if they become interested.
limax - 06/09/2018
@Towd after this 3 days I can do this anytime for the next 2 weeks(edited)
Towd - 06/09/2018
As a group then, what is a good time for everyone here?
I'm assuming this time of day is good?
limax - 06/09/2018
Again 2-3 days after 2 weeks
@Towd I think is better to start. I'll keep the channel updated and we will se who is joining
Is hard now to get people involved, is better to show them what can be done
Live streaming of console can get them involved
Towd - 06/09/2018
I guess, I misunderstand this.  So, it's just going to be open any time, to join in?
limax - 06/09/2018
I'll also try to record somehow parts of this
Of course
I'll keep track anyway of the steps we are follow
Towd - 06/09/2018
So, there will not be any scheduled time to meet together to discuss things then?
limax - 06/09/2018
It can be. But time restrictions are not my side of the problem. I can play this anytime but I find hard for now to get the schedule for others
I'll be available on demand
Towd - 06/09/2018
Got it.  Well, we'll just see where it goes then.
limax - 06/09/2018
Ok, let's talk more about that on #summer-of-code
Now we can get back to our usual stuff
@ellaismer I know we still have time, but any planned update on dev pool?
also @zenrobot please update your nodes
ellaismer - 06/09/2018
@limax I'll try to get that done really soon.
limax - 06/09/2018
We don't have yet from Cryptopia the date for update on their side but reagrding the pools I know that poolsexy is now updated to v.1.10.6 and minerpool is aware about Parity announcement
We need to check if they are on v.1.10.6
-25 GH on the network is from ldvpool we don't need to focus on get them updated for now(edited)
Regarding the explorer, can we get the timestamp on transactions?
I can host a secondary explorer if needed
ellaismer - 06/09/2018
@limax Working on it. We have a good cache method that can make it within the current server resource scope.
And a secondary explorer sounds useful -- we can set up a load balancer and distribute workload to different servers. This might be something interesting to get up in the future as well. :smiley:
limax - 06/09/2018
Perfect
Also, do you think we can implement statistics on explorer? Like ETC explorer for example
hash/diff and things like this (miners distribution)(edited)
ellaismer - 06/09/2018
If we want to do a time-series graph, we may need a server with InfluxDB and Grafana. The current server cannot handle that alone.
So it may take some time.
limax - 06/09/2018
As a personal POV I think that we can have all Ellabot functions on explorer(edited)
This should be the way
ellaismer - 06/09/2018
That's perfectly doable. I'll take a look at this. Or if @kubu00 want to take it, that would also be great!
kubu00 - 06/09/2018
@ellaismer for realtime -series graph you can use d3.js
i think i can do that :wink:
limax - 06/09/2018
@kubu00 Sir you'll have your server ready asap
ellaismer - 06/09/2018
Cool!
limax - 06/09/2018
Regarding Grafana and Influx is not a problem, I use this for rig monitoring and I can deal with the implementation
Nulligun - 06/09/2018
I started on an iOS wallet, based on http://trustwalletapp.com/  If you have an iPhone and want to help test, contact me on Discord.
Trust - Ethereum & ERC20 Wallet
Trust Wallet is a secure mobile Ethereum wallet that supports Ethereum and ERC20, ERC223 and ERC721 tokens. It provides a fully security audited system to send, receive and store digital assets. With Trust Wallet you have complete control over your private keys that are only ...
Our fork is here: https://github.com/ellaism/trust-wallet-ios
GitHub
ellaism/trust-wallet-ios
trust-wallet-ios - :iphone: Trust - Ethereum Wallet and Web3 DApp Browser for iOS
limax - 06/09/2018
@Nulligun Sorry I forgot about this
kubu00 - 06/09/2018
Have I already deserved to join the Community Fund signers list? :smiley: or not yet? :smiley:
limax - 06/09/2018
This is thing yes
We have home MIA signers
Towd - 06/09/2018
I think the next time we update it you will be one of the first candidates.
limax - 06/09/2018
Mybe is time to review the list
EllagramBOT - 06/09/2018
JayGatsbys: All market going down again. This year is just like that.
JayGatsbys: Btc eth and the lot, all down.
ellaismer - 06/09/2018
The actual updating is simple -- you can do that through the multisig UI directly. :)
Just as normal, get the required signer number to approve it.(edited)
kubu00 - 06/09/2018
@Towd @ellaismer @limax  will then need 7 of 12 signatures?
Towd - 06/09/2018
I know things are quiet with a few of the signers.  But, I don't think anyone is officially MIA yet.  Let's see how things go with the disbursement this week.
ellaismer - 06/09/2018
@kubu00 That one needs to be updated separately.
We first sign a new adding signer transaction, and then sign another update required signature transaction.
(Or if we replace one of the current signers. Then we don't need the above complications.)
kubu00 - 06/09/2018
Are all signers active?
ellaismer - 06/09/2018
Like @Towd said, we're also not sure about that.
kubu00 - 06/09/2018
kk
limax - 06/09/2018
We need a periodic check of the signers anyway
Towd - 06/09/2018
Looking at list, only 1 or 2 are not active.  But, I have contact info for one and he is quick to respond in the past.
kubu00 - 06/09/2018
because on the other hand, if there are too many people signing it will not make sense either.
limax - 06/09/2018
I think we can check the signers every 3 months
Is not the time yet I know
kubu00 - 06/09/2018
not better to reduce to 1 month? Three months is a lot of time
limax - 06/09/2018
I don't know. Depends on the frequency ComFund need to make TX's
For now no TX on new ComFund
Towd - 06/09/2018
So, just checked and only one is inactive for over a month.   I have his contact info and email though and he shouldn't be an issue.
Just a reminder, we're keeping a dev meeting agenda on our Github.  If you have any subjects you want to discuss, I think it is helpful to add them there.  Even if it is just before the meeting, so we can keep organized and people can review the issues for the day during the meeting.  :smile:
ellaismer - 06/09/2018
@kubu00 Maybe we can continue to discuss adding a new signer on next meeting. I think just getting another signer without replacing any current one is an option of course.
We would definitely want to make sure that all people in the community feel included, and gets the recognition for what they deserve. :smiley:
And if we don't have anything else to discuss, it may be the time to close this meeting. @here Last chance if you have something!
kubu00 - 06/09/2018
sure:)
```
