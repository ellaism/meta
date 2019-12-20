# Development Meeting (12 May, 2018)

This is the log of *Weekly General Development Meeting*. It happens every Saturday 4pm UTC in the #development [Discord channel](https://discord.ellaism.org).

```
Towd - 05/12/2018
I have a conflict that came up at the time of our weekly dev meeting so I may miss this one.  I'll try to check in by phone if I can.
ellaismer - 05/12/2018
@here It's our dev meeting this week! Looking at https://github.com/ellaism/meta/issues/30 I think we have several items:

1. @Nulligun Ellaism wiki page and potential MediaWiki migration.
2. @kubu00's community@ellaism.org email address and management using smart contracts.

Regarding development, it was a busy week for me. The target is to get a UI shell released branded for Ellaism. Another focus is on docs fix-up -- we're having a lot of outdated documents right now. And if you have any other stuff you want to discuss, please raise your voice! :smiley:
EllagramBOT - 05/12/2018
JayGatsbys: It is time
limax - 05/12/2018
We have now almost all public nodes updated to new parity version and my plan is to start next week discussions with pool operators(edited)
The main problem I see in this is that pools don't have any contact address
In order to get them informed we need to publish documentation also for pools migrating from geth/multi-geth to parity
ellaismer - 05/12/2018
Yeah it can be a really frustrating experience to contact them. But I guess there's no easy solutions. I remember some blockchains even have public mailing list just to update pools/exchanges on hard forks, but it can still be really hard to reach people.
limax - 05/12/2018
Because is an important moment I propose to clean our pool list on webpage and also on documentation
ellaismer - 05/12/2018
Okay sounds like something we should do -- I'll get a migration guide. But most of the time it's really simple -- you just download Parity binary, resync, and run parity account import to import old keys.
limax - 05/12/2018
I think we can also work on getting some informations regarding miners number and hashrate from pools api
@kubu00 can put this in his bot and I thing @Nulligun can find a way to publish this on the webpage
ellaismer - 05/12/2018
We have a pool api list here: https://github.com/ellaism/meta/blob/master/miners/open-ethereum-pool-list.json
This file is used for the explorer to generate https://explorer.ellaism.org/miners
GitHub
ellaism/meta
meta - Ellaism Project Management
Ellaism Explorer
Ellaism Explorer
Fast and full featured explorer for Ellaism.
limax - 05/12/2018
I know, that was the idea
ellaismer - 05/12/2018
Yeah @kubu00 if we can get that to the bot it would be cool. Let me know if you need help. I can give you an API with raw JSON data.
limax - 05/12/2018
to use the json we have
Even better I think
@Towd is not here for the moment but I think today or tomorrow is the end of the first week from the marketing campaign
Ok, is at the end of this day.
I didn't follow the plan with chosing winners of every stage but I think @Towd will take care of this tomorrow
Ok, regarding the documentation I don't have a clear understanding why we should use MediaWiki
If the problem is writing in markdown syntax, editors can always use something like this 
https://stackedit.io/app
for a nice WYSIWYG editor
Nulligun - 05/12/2018
With GitHub we get some nice things for free, like handling large traffic spikes without interruption, and they keep everything up to date, small network surface area.

With MediaWiki we'll have to maintain and pay for a monthly server.  I've run MediaWiki servers before so I don't mind setting one up if it works better for user management.(edited)
ellaismer - 05/12/2018
I think it's related to concern that ellaism/meta's wiki is editable by everyone -- so we may have some small permission issue. But we also cannot just set it to "limit to contributors" only, because in that case we limit it to a really small group of people who can edit it, and wiki is even not able to be pull requested.
Yeah and like @Nulligun said.
Or another idea is just to regularly migrate content from wiki to website. I can give more people push access to the website repo so we're not blocked if I'm not online.
limax - 05/12/2018
To get on the right way with the planed update we really need to update the documentation and for that we cannot delay anymore the wiki and the documentation review
ellaismer - 05/12/2018
Yeah I agree. Docs is a huge issue right now.
I'm going to push some fixes and updates to website really soon. Just think we cannot delay this any more.
limax - 05/12/2018
I planned the discussions with exchanges after we finish with pools and I think the proper way is to point to the documentation
On both cases
Migration for pools: we need to prevent problems like @Nulligun had
ellaismer - 05/12/2018
Yeah the command line config would be different. I'll note that in migration guide.
limax - 05/12/2018
And moving the discussion in another direction, do we have any project that can be usefull for us in rust (other than parity of course).
ellaismer - 05/12/2018
At which level? Full node, dapps or others?
There're only several companies that focus on Rust with blockchain. Parity, cryptape, etc. Other blockchains like Zcash also has a good presence of Rust projects, but it's not their major.
limax - 05/12/2018
I don't know but I'm confident that I can push myself to next level
And I preffer to do the rest of the trainig involved in something that can be usefull for our project
ellaismer - 05/12/2018
@limax If what you want to get started with Rust, I'd say just get started with Rust first. The issue with Rust is that it's entry barrier is not as smooth as other languages, but once you understand it, things start to move fast.
limax - 05/12/2018
Or if you think is better I can focus on pwasm
ellaismer - 05/12/2018
Yeah pwasm would be a good target as well.
limax - 05/12/2018
I started some time ago with rust, now I need to apply to some projects. I have some in plan but I don't think we need so many bots :smile:(edited)
ellaismer - 05/12/2018
But we certainly need more smart contracts and dapps :smiley:
limax - 05/12/2018
Ok then I'll focus on the testnet which I understand is now pwasm enabled
Do we have documentation on that?
ellaismer - 05/12/2018
Hmm we don't have much of that yet, but if you need help just let me know.
limax - 05/12/2018
I know that for now we have the specs, but I think we need more than that to get others involved
ellaismer - 05/12/2018
Another item we want to discuss is related to email addresses. @kubu00 proposed a method to use smart contracts to manage some @ellaism.org addresses. If no objections, I'll certainly look into that and try to get the dapp done for us. :laughing: 
Right now, I think another issue is that people would need something "official" when doing outreaching. So I propose we use something like community@ellaism.org and just give all our current community managers access to that account, before we get the smart contract idea done.
@limax Yeah we need more docs on that. That's for sure.
There'll also be more works like adding WASM support to explorer.
limax - 05/12/2018
This can be ok but if possible I think a rule to cc/bcc every email sent, to core should be applied on the server
Just as a safety measure(edited)
ellaismer - 05/12/2018
How about just archiving all sent emails? We can also make all mails going through community@ellaism.org public (with sensitive info censored) given that people agree.
limax - 05/12/2018
This should not be a problem (publishing the emails). They are in fact from the community even if community managers are the operators on the email account(edited)
And main purpose will be to apply/discuss with exchanges in most of the cases
ellaismer - 05/12/2018
Okay. I'll get this set up next week.
limax - 05/12/2018
Regarding the explorer some of users are asking for older transactions display. Do we have a solution for that?
Also the TX timestamp(edited)
ellaismer - 05/12/2018
We cannot do that on the public explorer any more -- there're too many attacks recently. All the recent incidents of the explorer being down is because of that.
To do this using a local full node -- the user would need to run it as full archive node with trace db -- also not a cheap operation, but do-able. We promised a script so I'm going to get that recently.
Regarding tx timestamp -- I'll need to look into that, but cannot give a definite answer right now.
(It's certainly doable, but I need to analyze the performance impact if we add that feature to the public explorer.)
kubu00 - 05/12/2018
All famous crypto have tx timestamp.
limax - 05/12/2018
The TX timestamp should be block timestamp I think
ellaismer - 05/12/2018
Yeah and they have much more server resources than we do. :laughing:
limax - 05/12/2018
The simple solution should be to display (the block and) the block timestamp on the TX(edited)
ellaismer - 05/12/2018
In the worst case it means we need to make 6171 more RPC calls for each account page display, but I guess there's some simpler solutions to cache that.(edited)
Okay I think there's a way. So tx timestamp is doable for us. Would take some time, however.
If there's other requests for explorer features, please feel free to let me know now or in github.com/ellaism/meta :smiley:
And if there's nothing else for today, let's close the meeting for now! If you have any questions or requests, please feel free to let me know any time.
I know I've been missing PMs and pings recently. Sorry about that. It was just a busy week. :upside_down:
!rsvp set-date 19 May
RSVPBotBOT - 05/12/2018
RSVP date set to 19 May.
ellaismer - 05/12/2018
!rsvp clear
RSVPBotBOT - 05/12/2018
RSVP list cleared!
```
