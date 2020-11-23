# Development Meeting (26 May, 2018)

This is the log of *Weekly General Development Meeting*. It happens every Saturday 4pm UTC in the #development [Discord channel](https://discord.ellaism.org).

```
ellaismer - 05/26/2018
@here This week's dev meeting starts now! Regarding development update, currently I'm getting some polishing work done for Ellaism Wallet / Parity UI, and trying to figure out a long-term plan for our full node client.
EllagramBOT - 05/26/2018
JayGatsbys: It is time
ellaismer - 05/26/2018
I think we have one item from @Nulligun https://github.com/ellaism/meta/issues/34#issuecomment-391317912

My personal opinion on this issue is that everyone's entitled to be core developer as long as others recognize him or her. But that means it's of course up to everyone to decide if there's any requirements. :laughing:
Nulligun - 05/26/2018
I'm interested in training up by working on 'core dev' tasks, but I don't know what qualifies as such.
limax - 05/26/2018
@ellaismer I have few things to discuss
ellaismer - 05/26/2018
@Nulligun I would like to help on this. I think we definitely need more core devs in our community (and share some workloads!) :laughing: 
I'll try to draft something on this. I think it would be a good idea to start by maintaining an Ellaism project.
(And personally I think that should be enough qualification to become a "core dev".)
limax - 05/26/2018
First how can we get the deprecation and  fork message on explorer?
The explorer is one place that many users check and is a good place for messages like this one
ellaismer - 05/26/2018
@limax Sorry for the delay -- I'll try to work on that in the next few days.
limax - 05/26/2018
Is important because next week I'll start sending emails about the fork and deprecation to exchanges
ellaismer - 05/26/2018
Okay yeah.
limax - 05/26/2018
Other thing is if you know a way to get a list of nodes with client and version
Not the public nodes
ellaismer - 05/26/2018
Yeah so basically all node statistics on the network, right?
limax - 05/26/2018
yes
something like this https://www.ethernodes.org/network/1
not quite like this, but as an idea
ellaismer - 05/26/2018
For that we need some info aggregation (because I don't have a powerful enough node that connects to all peers.)
To do that it's actually not hard -- we only need [this function](https://wiki.parity.io/JSONRPC-parity-module#parity_netpeers). We basically need to get several nodes we hosted, and call netPeers. Aggregate the result to build a complete node list. I'll try to get instructions/scripts for everyone interested to do this (or just make it the same how we did for ethstats).
Parity Documentation - The `parity` Module
## JSON-RPC methods

- [parity_cidV0](#parity_cidv0)
- [parity_composeTransaction](#parity_composetransaction)
- [parity_consensusCapability](#pari...
We can get it mostly like the ethernodes.org presentations with the addition of an accurate IP database.
limax - 05/26/2018
I looked at this but didn't get where is returning the client version and type
I'll look again
ellaismer - 05/26/2018
It's in the name field -- you would just need to parse that.
limax - 05/26/2018
Ok, good, I'll test that
Now because @Towd "Ella Spring Giveaway" is almost done I think we can prepare for another session
"Ella Summer of Code"
ellaismer - 05/26/2018
Sounds like a cool idea!
limax - 05/26/2018
I managed to construct our testlab
You can see the console for different machines here
http://lab.ellaism.org:8511/
and another one
http://lab.ellaism.org:8521/
ellaismer - 05/26/2018
Wow the bot looks cool!
EllagramBOT - 05/26/2018
Massague: Ellaism is a fork?
limax - 05/26/2018
users can even interact and run commands if proper credentials will be setup
you can all try here
is for free now
http://lab.ellaism.org:8522/
no credentials
Towd - 05/26/2018
@limax  I was reviewing our funds with Terra and I think we can extend the contests through to the fork.  We'll have to scale back the number of prizes per week a little, but we can just keep a community groundswell building.
I'd like to just keep encouraging people to write and tweet and spread the word about ELLA up to the fork.
limax - 05/26/2018
@Towd nice :thumbsup:
Towd - 05/26/2018
The next "film* I'm working on will be in regards to joining ELLA to learn blockchain.  Hopefully people will keep posting this stuff out on message boards and getting the word out.
I think for many here, this is an excellent platform for learning.
limax - 05/26/2018
Massague Ella is not a fork but will fork at block 2mil. read here https://ellaism.org/ https://wiki.ellaism.org/
@ellaismer we need a much more clear message about the fork
ellaismer - 05/26/2018
Sounds cool @Towd.
I'm also trying to draft out the documentations for dapps gas fee sponsorship program from Dev Pool. Right now, if you're developing not-for-profit dapps on the Ellaism blockchain, you can ask me and Dev Pool can mine your transactions with zero gas price.
Towd - 05/26/2018
very cool
ellaismer - 05/26/2018
@limax Yeah I agree. I think a lot of people have asked about the fork.
Towd - 05/26/2018
yeah, that kind of stuff combined with what @limax is doing makes us an excellent platform for training
plus we have a friendly community  :smile:
limax - 05/26/2018
Let me tell you a little about the plans with our lab
We will learn together do do some stuff on different categories
EllagramBOT - 05/26/2018
Massague: This fork is a pos o no?
limax - 05/26/2018
Ella is pow and will stay pow(edited)
Ok, back
On the infrastructure part I plan to do sessions about:
- how to get full node installed and listed in stats
- how to get a mining pool setup
- how to prepare a docker full node image (and also we will make this available)
Towd - 05/26/2018
I think this will be very useful.  And we can build up a library of training material.
limax - 05/26/2018
DApps:
- we will do solidity tutorials and will probably release 2 betting games at the end
- pwasm tutorials
On the programming part we will do rust lang and deploy a discord bot (at the beginning) written in rust
We will make some interaction also between bot and Ella network
Regarding the fork we will interact and setup nodes for our testnet
At the end (not in the timeline :smile: ) we will develop a "test coin" to get a better understanding about core of blockchain
Full coin from scratch with client and explorer (and we will do this in rust)
This is my learning path for the next months and I invite you all to take part of this(edited)
Towd - 05/26/2018
Sounds cool.  Be sure to post a schedule.  And we should get them recorded for offline viewing later.  :thumbsup:
ellaismer - 05/26/2018
Looks really ambitious. I hope we can learn well from it, no matter whether we finished the learning agenda or not. :laughing:
limax - 05/26/2018
@Towd Yes, I'm thinking about that
ellaismer - 05/26/2018
(And of course, to attract more developers joining Ellaism.)
limax - 05/26/2018
@ellaismer if not attract at least build some :sweat_smile:
Towd - 05/26/2018
If you schedule them far enough in advance, we can hit social media to spread the world.  May get some outside curiosity building.
limax - 05/26/2018
I'm thinking about getting a list with our interested users first and get a proper hour for live code(edited)
For me is not a problem I'm flexible about working hours(edited)
Towd - 05/26/2018
sure.  Of course.  But it is something unique to talk about as well.  I know the world is filled with people curious about exactly this stuff who want to learn more.  And this is a ripe opportunity for them.
limax - 05/26/2018
The offline part will be ok, but I think the most important part will be live code
And the fact that anyone can switch from viewer to actually write code
Towd - 05/26/2018
its very cool.  And I'm glad its something we're focusing on.
limax - 05/26/2018
Actually there is another thing, Like you see we can actually stream some discord channels
With this people can get for example this dev meeting without joining discord or telegram
Also we can use this when live code will take place
Anyway I'm open to any discussions and proposals about "Summer of Code"
ellaismer - 05/26/2018
Looks very cool to me. :smiley:
Towd - 05/26/2018
yeah, this sounds like a good focus for my summer marketing materials  :smile:
limax - 05/26/2018
Btw, even if this will be focused on Ella it will not be restricted to our users
Anyone can join this and maybe learn something
Towd - 05/26/2018
being open and inclusive is good.  like multi-geth  :sunglasses:
limax - 05/26/2018
That's all from me today
Towd - 05/26/2018
in the spirit of open and inclusive.  I do have in the longer term another piece in the early development stages regarding all the open source blockchain projects without pre-mine or dev fees.  I want to be sure it is a quality list of projects for some cross promotion, so any input is welcome.  Discussion is in #offtopic(edited)
ellaismer - 05/26/2018
Cool!

There's one thing about testnet -- our testnet PoA validator set addition has long been overdue, and I'll try to get it restarted soon, so stay tuned if you want to participate. :smiley:
@Towd I didn't find your post there.
Maybe you can pin it or repost or something...
limax - 05/26/2018
done
ellaismer - 05/26/2018
Wow thanks!
If there's nothing else I guess that's all for today then. Last chance if you have anything to discuss! :smiley:
!rsvp set-date 2 June
RSVPBotBOT - 05/26/2018
RSVP date set to 2 June.
```
