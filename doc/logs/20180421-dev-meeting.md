# Development Meeting (21 April, 2018)

This is the log of *Weekly General Development Meeting*. It happens every Saturday 4pm UTC in the #development [Discord channel](https://discord.ellaism.org).

```
ellaismer - 04/21/2018
!rsvp ping
RSVPBotBOT - 04/21/2018
@Nulligun @Towd @ellaismer @Kimi Sian-Yu Chen @zenrobot @limax @terra-pescado @DeSVaR
ellaismer - 04/21/2018
@here Our dev meeting starts now. Starting from the next meeting, we're going to have our agenda ready before the meeting starts. If you have anything you want to discuss next time, please comment on https://github.com/ellaism/meta/issues/26 and I'll move agenda to the top posts.

Regarding development, I'm still busy getting what's discussed in the last meeting done. So not much update yet.
GitHub
Ellaism Community Weekly Meeting 10 Agenda · Issue #26 · ellaism...
Meeting time: Saturday 28/04/2018, at 16:00 UTC
Meeting location: Discord server

Agenda
To be added. Please provide comments to add or correct agenda topics.
I think we may have a short meeting for this week. @Towd might want to finalize the Community Fund bootstrap issue.
And as always, I'll be here to answer any questions of Ellaism. :smiley:
Towd - 04/21/2018
So, I just have the details I posted in the #comfund-bootstrap regarding setting up the community wallet.
Pasting here:  In short we are considering a oversight group (group A) with n-of-m encryption to manage the signees of the community fund wallet (group B).   Ideally, the members of oversight would have public identities on record.   The community fund (group B) would work as it did with the previous community fund, but members could be replaced by the oversight group when deemed necessary.  Punitive action such as revealing a community fund signee's identity could also be included.

Rather than delay in implementing this, we can for the present move forward with setting up Group B-- the community fund signees.  But, I want to get this posted, so interested members can consider this possible solution before our weekly dev meeting.  For reference, I'm reposting Ellaismer's thoughts regarding an n-of-m key encryption solution for reference.  Albeit, this current proposal is slightly different as Group A will not have signing privileges for releasing community funds.
kubu00 - 04/21/2018
!rsvp
RSVPBotBOT - 04/21/2018
@kubu00 You have RSVPed to Weekly General Development Meeting on Saturday (21 April) 4pm UTC. Remember to be there!
Towd - 04/21/2018
I think the important thing is to get the wallet set up and I have collected enough addresses to start that.  But we may want to discuss who will make up Group A , the oversight group.  And who will be actual signees for the wallet.
The current suggestion is to have the people doing oversight have their identities known, and the signees who can be replaced by the oversight group be those who want to remain anonymous if they desire.
If anyone has any concerns about it.  Or questions, please feel free to post them.  Otherwise, I'll post a proposed group of signees for the wallet from the names I've collected.  We'll assemble the oversight committee soon after.
As soon as we set up the wallet, we'll run a funding drive for about a week and take donations for the wallet.  We'll lay out some goals for our marketing campaign so the community knows what we'll be using the funds for.
ellaismer - 04/21/2018
Thanks. When the wallet is up, I propose we move 500 ELLA from Dev Fund as one of the bootstrap.
Towd - 04/21/2018
The new suggestion I have for our marketing campaign will be that we give out prizes on a weekly basis that may not be monetary.  I'm considering giving out t-shirts and bumper stickers from our swag store to help grow that with maybe some small amounts of ELLA coins for winners each week.
EllagramBOT - 04/21/2018
fsi56: /p ella
limax - 04/21/2018
I'm with you but I'm mobile, the discussion took more than planned (good sign)
Towd - 04/21/2018
The marketing campaign will revolve around weekly contests with best tweets, blog posts, or the creation of original content.  We'll build on each previous week, and need to determine a good way to select winners.
limax - 04/21/2018
Feel free to use also 1000 Ella from the fund I setup yesterday
Towd - 04/21/2018
We'll lay out a plan and details in the  #marketing, and #social-networks channels.
@limax great.  That's all good news.
Al - 04/21/2018
Nice
EllagramBOT - 04/21/2018
JayGatsbys: Get back here AI
Towd - 04/21/2018
I know the Dev Fund has offered help as well if we need it.
EllagramBOT - 04/21/2018
JayGatsbys: :joy:
almuntje: I am everywhere
JayGatsbys: See everthing?
almuntje: :eyes:
JayGatsbys: Movie with Steven Seagal
JayGatsbys: With those rasta brothers(edited)
almuntje: Haha
Towd - 04/21/2018
I think by going to t-shirts and bumper stickers for a lot of the prizes, we'll reduce the overall cost of the weekly contests, get out some fun swag to our supporters, and I can delegate out some responsibility to @terra-pescado  for delivering prizes.  :smile:
terra-pescado - 04/21/2018
I have some Ella for deposit to community fund as well.
I'm ok with making t shirts and stickers, but I am not a rich man. So I cant just give stuff away. I can give a few away to spark interest. But $400 for shirts to just  give away is a lot of money to me. Sadly, that just where I am in life right now
Towd - 04/21/2018
No, we'll use the funds we raise to buy your swag.  What is the planned cost for the t-shirts?
terra-pescado - 04/21/2018
Ok cool, I'm trying to get them under $5.00 usd at cost. But all depends on bulk. Could be around 10.
Shipping I international for a shirt should be around 3 dollars. Estimate.
I'll get exact numbers to the penny
Towd - 04/21/2018
I'm sure we can get the details worked out, and pay through the funds we raise.  Then we'll just see how much we can afford to spend each week if we run a 4 to 5 week campaign with a bit of a blow out for the last week.
terra-pescado - 04/21/2018
Yeah, sounds great. I'll have a couple shirt ideas finalized and we can pick one soon.
Towd - 04/21/2018
Great!  Since, I see no complaints.  Let's just plan to work it out the details this week.  :smile:
terra-pescado - 04/21/2018
Ella about to break 30 cents woot woot.
ellaismer - 04/21/2018
@Towd Remember to send me signer's addresses. After that we can start the technical setup.
Based on past experience, expect that to take some time as well. :smiley:
limax - 04/21/2018
Ok, I'm back to my laptop
kubu00 - 04/21/2018
and we can make t-shirts for us (ella member/stuff/dev or sommething like that)gadget for an active community.on this occasion, an advertisement for ella. We will buy them for private money.
Towd - 04/21/2018
I just need an address from one more member.  We currently have 11 signees including dev fund.  With this split into two groups, I'm suggesting we make the multi-sig wallet with 7 signers and 4 to release funds.  The oversight committee will be composed of 4 or 5 members with 3 needed to eject a signer or release their encrypted identity.
limax - 04/21/2018
I have few things to discuss / ask when we finish the discussion about ComFund
kubu00 - 04/21/2018
if you want I can be me :smiley:
ellaismer - 04/21/2018
@Towd If people want to be on multisig, I think let them be. We can find more group A people later.
kubu00 - 04/21/2018
I do not want to be anonymous. I want to be public and I want to support the project. ....Of course I'm not 15 years old. I am 34 years old and have been working in IT for 10 years. you can rely on me!
Towd - 04/21/2018
That sounds fine with me, I'll put everyone on the multi-sig wallet.  Everyone will then be anonymous with encrypted identities.  For the short term people, I have their identity verification information and will be sending a copy to Ellaismer to hold onto as well.
terra-pescado - 04/21/2018
@kubu00 the swag store Is just that, it's is a store to show that you are an Ellaism supporter and to share info about ellaism to the world around you. 25% of sales go to community fund. Check pinned messages if curious in that channel. Only one item for sale currently.
EllagramBOT - 04/21/2018
JayGatsbys (in reply to @terra-pescado): Try looking longer term. 30 cents is nothing.
terra-pescado - 04/21/2018
I know Jay. Just fun seeing growth. I'm holding 5 years.
Then decided, hoping for $75.00+. But being a part of a growing project is exciting and fun.
I'm gonna have an old dirty bag. Hiding in my basement, gonna dust it off and retire in 30 years
Lol
Towd - 04/21/2018
@ellaismer I do have a question regarding long term members and encrypting identities.  How exactly do we plan to verify accurate information if we have people's real names encrypted?(edited)
ellaismer - 04/21/2018
@Towd No we can't. Someone must pre-verify them. This is pure human information so we cannot even use zero-knowledge algorithms.
terra-pescado - 04/21/2018
We'll have one person volunteer as tribute. That person will look at all documents, verify them all with id's and passports. Then be killed.
Not it
ellaismer - 04/21/2018
So it's always recommended to be non-anon. Being anonymous or having identities encrypted is just a compromise.
terra-pescado - 04/21/2018
Could a legal form like an NDA be used somehow?(edited)
Towd - 04/21/2018
Got it.  Well then ultimately the oversight committee is about having the ability to change signees of the community wallet.
limax - 04/21/2018
Ok, can I start now the discussion in other direction?
terra-pescado - 04/21/2018
Yes
Towd - 04/21/2018
Yeah, that is it from me.
limax - 04/21/2018
Good
First I want to know if is someone currently working or plan to work on improving the explorer?
If not I want to start working next week with one JS developer who agreed to help me with this
As an idea what I'm looking for is to have something close to this
https://explorer.bitcoin.com/bch/address/1BjNZAj29VQikaGZ6CN9JRpBCMxdnCAr2C
And also to be mobile friendly
Also the wiki part, I'm not sure if we can move most of information from the site to the wiki side and just use some snippets's on the wesite to capture parts from the wiki
This way I think we can have at one point a well documented part on the wiki side with selected informations imported to the website
Nulligun - 04/21/2018
I was going to help with making the site pull content from the wiki so we don't have to update things in two places, but I might need to wait until after the new site the @CryptoFern  is making is ready.
limax - 04/21/2018
@Nulligun I think is better to work on what we have now
The new website is something TBD
Also if we move a lot of documentation on the wiki, the new website will have less info to pull
Only essential parts
For the presentation layer
Towd - 04/21/2018
In regards to the wiki and any improvements to the website.  I would just like that information in addition to a visitor friendly way to access monthly reviews and our weekly dev meeting logs.  I too often see people asking about activity on the project.  All of that should be more prominent IMHO.   The Wiki would then be a nice summary of the project accessible on the front page.
limax - 04/21/2018
This is the point
Towd - 04/21/2018
I don't think the website needs a complete redesign as much as just links to some critical information on the front page.
limax - 04/21/2018
We can push recent events call them news if you like to the main page of the website and keep an easy accesible category on the wiki
Towd - 04/21/2018
For example the last month's community update is at the bottom of the front page, but it is less obvious as to how to find all the updates, or browse all the activity.
terra-pescado - 04/21/2018
i think the website needs some.... flair, for a better word.
limax - 04/21/2018
Ok, the important thing for me now is that we can do that pull/push. Is this right @Nulligun ?(edited)
Towd - 04/21/2018
Yes, a place where "news" in a blog like fashion is collected and easily accessible.
Nulligun - 04/21/2018
Yea I can give it a shot.
limax - 04/21/2018
Ok, then we'll start the wiki this week
We will discuss in #website-development first to get the categories skeleton and after that we can start to move (copy actually) from the main site into wiki articles
The third thing that I have in my agenda I don't know exactly how to approach but I'll say this anyway
kubu00 - 04/21/2018
do you have something to do for someone who deals with website administration (apache, nginx, mysql, oracle database) or centos / rh, debian, python scripts, django? I'm talking about myself :smiley:
limax - 04/21/2018
Just one second please @kubu00
We have now the ComFund almost done and also the DevFund but at this moment we can only accept donations in ELLA and I think this is hard for some possible donors
If anyone have ideas in this direction I'm happy to listen
Even if is really a long shot I'm thinking about starting a foundation to fund the project
terra-pescado - 04/21/2018
i can setup a bank account, money can be deposited there then used to buy ella. then ella deposited to community fund. or used in usd form for outside activites
or look into having 2-3 signers to release funds from a bank accountr.
limax - 04/21/2018
Ok @terra-pescado but what about BTC, ETH donations?
terra-pescado - 04/21/2018
ah, hmm
DeSVaR - 04/21/2018
We can make BTC/ETH/something wallet, use multisign from community fund to transfer funds. Scratch that, to control usage of funds we use something like multisig from com-fund to transfer funds
limax - 04/21/2018
Ok, then a hard one
What about companies that can sponsor projects if we have a proper system to allow that?
They usually are giving funds to foundations
terra-pescado - 04/21/2018
thats where we need to set-up the "Ellaism Foundation"
limax - 04/21/2018
Like I said, this is hard and long shot
terra-pescado - 04/21/2018
anything is possible
limax - 04/21/2018
But I wanted all to know about this and we can keep our working group for #comfund-bootstrap keeping this discussion alive and with possible options(edited)
terra-pescado - 04/21/2018
i have a lawyer in town i can consult to see what steps are needed... if we cant figure it out on our own
limax - 04/21/2018
@terra-pescado please do
Towd - 04/21/2018
@limax do you know if the LDV bank people have plans to add fiat trading with ELLA?  I thought I may have heard about that from them at some point.
terra-pescado - 04/21/2018
he has set up trusts and other documents for our family. he could at least point me in the right direction
limax - 04/21/2018
At the end I want to achieve something like this https://www.openbsd.org/donations.html
@Towd yes they have this in plan and also they work on marketing side of the exchange
is one month old after all(edited)
Towd - 04/21/2018
Having a place where we can run exchanges like that may be part of the solution.  If we can get an exchange that trades fiat, BTC, and ETH against ELLA.
terra-pescado - 04/21/2018
fiat to ella would be amazing
limax - 04/21/2018
Now, they are coordinating their marketing plan with the multi wallet / exchange enabled part planned release(edited)
Towd - 04/21/2018
Yeah, I'm not pushing.  I just think it may help expedite a process like that.
limax - 04/21/2018
The multiwallet can do that at the end because will allow direct exchange without trading
and with this we can solve BTC/ETC donations part (or other coins)(edited)
terra-pescado - 04/21/2018
what if... and this might be drreaming. we have our website, within that website is an exchange that trades fiat,btc,eth,ella. donor can donate there and we have an ella/fiat pairing.. plus trading fees will fill the community fund
limax - 04/21/2018
It's not a secret, I want to target some corporates to give money that anyway are deducted from their taxes
And this cannot be done via exchanges
terra-pescado - 04/21/2018
i'll do research on setting up a foundation
or at least talk to lawyer  and see what needed(edited)
limax - 04/21/2018
Ok, I'm done for now
Just to complete the example from OpenBSD this is the link to the foundation guarding funding for their project https://www.openbsdfoundation.org/
I think this is all for today
terra-pescado - 04/21/2018
can we use bitpay like they are for btc donations
add bitpay to website?
limax - 04/21/2018
We need a solution in time to cover all of this
terra-pescado - 04/21/2018
baby steps :p
DeSVaR - 04/21/2018
I want to propose a little organizing to discord server. —> moving offtopic under general chat group, it will be more visible and more used -less spam in other channels. And adding #meme /pictures channel for pic links
What do you guys think?(edited)
limax - 04/21/2018
Pictures can stay on #offtopic I think
Towd - 04/21/2018
I think the #marketing  or #social-networks is probably fine for posting memes.   Moving #offtopic below general might be a good idea.
Or pictures to #offtopic  works as well.
limax - 04/21/2018
He is talking about casual pictures
terra-pescado - 04/21/2018
id prefer pictures and memes in off topic
limax - 04/21/2018
Birdie style :smile:
DeSVaR - 04/21/2018
I just wanted to say that :smiley:
Personally it feels like one channel is missong but i cant pinpoint for what :smiley:
terra-pescado - 04/21/2018
Ellaism lounge?
limax - 04/21/2018
@terra-pescado  You are talking about things before the mods role
DeSVaR - 04/21/2018
Dont know what are you talking about @terra-pescado but i agree that kind of posts/pica don’t belong here
ellaismer - 04/21/2018
I got us #memes. And like @terra-pescado said, I'd prefer them to stay in "Optional" category.
limax - 04/21/2018
@ellaismer delivers all the time :smile:
terra-pescado - 04/21/2018
@DeSVaR long time ago, i shouldnt have brought it up
DeSVaR - 04/21/2018
@ellaismer i am concerned that optional group is not visible enough because its at bottom. And that is why #offtopic stuff is happening in #general
ellaismer - 04/21/2018
@DeSVaR I would be glad to apply any solutions. But I would really want to keep them below "Working Groups" category...(edited)
Towd - 04/21/2018
Before we end the meeting, I'd like to encourage everyone to at least visit our Reddit and post a comment or two this week.  Poor Reddit is so under utilized.
terra-pescado - 04/21/2018
so you'd like off-topic moved to the Ellaism chat catagory?
DeSVaR - 04/21/2018
I agree with you. It feels wrong to put in general and at the same time to leave it where it is(which is okay)
Its a little complicated :smiley:
limax - 04/21/2018
Ok, to direct people to #offtopic is mods job
so let it like it is
#memes is step forward anyway to add a (sometime) needed fun part
terra-pescado - 04/21/2018
ok, good meeting. i got some work to do this week it seems. also, have some cleaning to do now. so im off.
DeSVaR - 04/21/2018
We will have to start dictating a little then :smiley:  I will post some suggestions in #code-of-conduct  group to refine the rules
kubu00 - 04/21/2018
I repeat my question
Nulligun - 04/21/2018
@kubu00 You could setup a multi-geth node to help secure the network an open-ethereum-pool for people to mine on?
kubu00 - 04/21/2018
do you have something to do for someone who deals with website administration (apache, nginx, mysql, oracle database) or centos / rh, debian, python scripts, django? I'm talking about myself :smiley:
limax - 04/21/2018
Also you can help us with the tutorials on the wiki side
And implementing the charts with @0xcaffe
Join #website-development
kubu00 - 04/21/2018
@Nulligun  I do not have a permanent address
ip
ellaismer - 04/21/2018
@kubu00 From development side, there's nothing specific yet. We have enough resources for devops. So something I can think of:

1. Host a Ellaism node. We never had enough Parity/geth nodes. We lack multi-geth nodes on our networks currently.
2. If you know python, it may be possible to help in our bounty system setup. But I cannot promise this as it has not yet been up.
3. Like @limax mentioned, you can help on documentations/wiki/tutorials and website development. Here's our wiki (https://github.com/ellaism/meta/wiki).

Either way, if you consider yourself a developer, please also feel free to join our Github org: https://github.com/ellaism/meta/blob/master/github.md :smiley:
GitHub
ellaism/meta
meta - Ellaism Project Management
And I guess if there's nothing else, it may be time to close this weeks meeting. @here If you have any agenda you want to discuss for our next meeting, remember to post it here: https://github.com/ellaism/meta/issues/26
And see you next week!
GitHub
Ellaism Community Weekly Meeting 10 Agenda · Issue #26 · ellaism...
Meeting time: Saturday 28/04/2018, at 16:00 UTC
Meeting location: Discord server

Agenda
To be added. Please provide comments to add or correct agenda topics.

```
