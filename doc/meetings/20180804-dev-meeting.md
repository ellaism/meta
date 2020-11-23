# Development Meeting (4 August, 2018)

This is the log of *Weekly General Development Meeting*. It happens every Saturday 4pm UTC in the #development [Discord channel](https://discord.ellaism.org).

```
ellaismer - 08/04/2018
@here It's our dev meeting this week. If you're waiting for the July monthly update, I'll try to get it out tomorrow or so. :smiley:
Looks like we have a few items today: https://github.com/ellaism/meta/issues/47
I also want to raise discussion about our next hard fork, with new EVM and WASM features. This is mainly Constantinople, and KIP-4 create2.
GitHub
Ellaism Community Weekly Meeting 20 Agenda meeting · Issue #47 ·...
Discuss results of hard fork Ellaism Wallet in Fdroid, and why getting a wallet from Fdroid might be preferred by some Congrats to @BAlgimantas (Iam3) for getting Ellaism into Andreas M. Antonopoul...
limax - 08/04/2018
First some conclusions on today event.
@ellaismer you should do this(edited)
Sorry I'm mobile
ellaismer - 08/04/2018
Yeah sure! Our hard fork today was mostly successful. One incident happened -- several pools used the custom config provided in ellaism/parity-config with parity version 1.10 or 1.11, but the config is only compatible with parity version 2.0. This generated some incompatibility, but it was quickly fixed by pool ops. My mistake failing to mark the config required versions.
limax - 08/04/2018
@PoolOperators thank you guys, good job
Now is time to look forward, this was not easy, we are stable, I think is good
From now I think we should split our efforts on (at least) two distinct directions: infrastructure and usability
ellaismer - 08/04/2018
Yeah, regarding protocol upgrades (infrastructure), I think there's no need to rush at this moment, so my personal opinion is probably 3m or 4m block. Several useful new features we can consider:

* Constantinople: The current hard fork feature set has not yet been finalized. This hard fork is mostly about EVM performance and usability (new opcodes for efficiency, and possible gas metering changes to save gas costs). We do need to be careful, though, because one proposal (EIP-210) is a state change, which we may (or may not) have some philosophical reasons not to apply it. That's not a really interesting feature though, so even if we don't apply it, it wouldn't be a big deal.
* KIP-4: This is a small new feature on our WASM engine. The new create2 extern adds salt to the creation address scheme.
Regarding usability, let me first finish the explorer upgrade for WASM contract validation. We also have some long standing projects (like atomic swap, testnet, side chains) that we just need more manpower.
limax - 08/04/2018
Yes, agree.
As a part of our infrastructure we should also now more than ever focus on testnet to give possible developers access to test dapps.
Wiki should be another part of this, we need to provide all required info to make them comfortable
The secondary explorer, I have more possible ways to add this
One way is to work on improving the upstream project and get PR's accepted, adding features that we need. @ethminer and @Dev_Akira have many ideas already on this
Magican - 08/04/2018
@limax and what is the competitiveness of Ella before ETC?
limax - 08/04/2018
Other way is to maintain our own version and add needed features. We can do this, and in fact our test explorer is working well
@Magican in open source projects is not about competition, is about collaboration
ellaismer - 08/04/2018
We're still the only no-premine no-devfee Ethereum-like network. I would say that's still our biggest competitiveness. :smiley:(edited)
limax - 08/04/2018
At this point we have the hardware to run 2 instances for secondary explorer: an edge version with unstable features and a version in sync with upstream
Nulligun - 08/04/2018
Were we the first to enable wasm?
ellaismer - 08/04/2018
We're one of the first, and probably the first in all PoW networks. I don't remember there're other networks with Wasm on mainnet except EOS and Ellaism. There're indeed many other projects with Wasm PoC or Wasm testnets, though.
Iame3 - 08/04/2018
Sorry, my two small cents - this would be big advantage while applying to bittrex.
ellaismer - 08/04/2018
And just want to say congras to @ethminer, looks like Ledger support for Ellaism is merged. :smiley:
Nulligun - 08/04/2018
Also congrats to @Iame3  for getting their PR accepted by @aantonop into his new Eth book:  https://github.com/ethereumbook/ethereumbook/pull/657/commits/0061167abdf72c6f76aba4facb61c6b69cf3a328   :smiley: :smiley:
GitHub
Update forks-history.asciidoc by BAlgimantas · Pull Request #657 ...
Iame3 - 08/04/2018
Ah, it is overestimation, I just copy-pasted some things.
EllagramBOT - 08/04/2018
Tylerswallet
:eyes:
Nulligun - 08/04/2018
The Android wallet can be downloaded from the official F-Droid repo now.  F-Droid is a good way to get open source Android apps because they compile and sign it themselves directly from the GitHub repo.

It's missing some meta data like screen shots and search key words but they can be added easily in the next pass.
EllagramBOT - 08/04/2018
DarkRom:
Great. :thumbsup::smiley:
limax - 08/04/2018
A few words for our miners/investors that I think we should also have in this meeting:
Is not in our power to jump the price overnight to the moon. Not because we don't want this.
Resources are limited, we are doing all this efforts  on a voluntary basis and we need more people to get involved in this.
We proved today that this "hobby" project is a project that can manage difficult tasks in the right way and also react fast when problems occurs.
From this point, and we are not alone in this, we need to focus on adoption.
This technology is still in early stages and we are not the only project suffering from price drop. I know, because we are not covering some areas like a better marketing and awareness plan, you are concerned about the future of this project.
But in fact this is and I hope it will be always an open project where everyone can discuss propose and do things.
Dev_Akira - 08/04/2018
For mass adoption we need more user friendly interface to interact, for example etherscan and metamask is the nice example for ethereum :smile:
limax - 08/04/2018
I think that we need also to study a little, browsers that are turning to blockchain like Opera and brave and join the effort on integration(edited)
Dev_Akira - 08/04/2018
Yes brave browser integration is great :thumbsup:
limax - 08/04/2018
We have a big possible agenda and I'll be fair with all of you. I was really worried about the possible failure of this upgrade and a possible chain split.
Not now, because is too early and we are tired, but in next days we should start a list with proposals on integrations and future development to encourage adoption, an agenda that we can turn in a new roadmap
A roadmap that should provide as much as possible a clear view for our investors
Not as a final proposal, we should also try to find a way to work together with other projects. It looks like blockchain projects are in a dead or alive fight on which is the best or more valuable project.
In fact I think this is nothing else then "divide an conquers" in another form. I think we should focus on cooperation with other projects, at least projects with same root.(edited)
Projects like polkadot (which I confess I didn't managed to look too much into) can be a way for the future. Different networks working together not fighting
Dev_Akira - 08/04/2018
I think it will be great to make a unified platform like myetherwallet, covering all demands for different tokens & ethereum-like networks :smile:
In this way we will be able to cooperate with them(edited)
limax - 08/04/2018
We can do this, first by diplomatic contacts and standardisation of projects instead of forks
Dev_Akira - 08/04/2018
@limax We definitely need a standard for these forks :joy:
Building a contract library for both EVM and WASM will be awesome
limax - 08/04/2018
Today I'll resign my current job as "August fork head of communications". I'm thinking about a new job in contacting other projects and find a common way on improving blockchain adoption and an unified vision
I think we can end here :grinning: 
@ellaismer your ending words
Wait
Not yet
@kubu00 is close or even done with tipbot
This is a great addition to our project
I'm sure we will have all details next days
He is offline for now so end of meeting?
Dev_Akira - 08/04/2018
I think so :smile:
ellaismer - 08/04/2018
Yeah, I guess. So everyone, see you next week!
EllagramBOT - 08/04/2018
Jumpy1971
Compliments to all the fantastic Ella team :wink:
Magican - 08/04/2018
all developers respect
limax - 08/04/2018
My respect to all our members for the last 5 months of support since our major community split. Special thanks to and not limited to
@Towd 
@CryptoFern 
@psdev 
@Nulligun 
@kubu00 
@Ingridfire 
@nash 
@DeSVaR 
And @EllaismCommunity(edited)
Roi Candaule - 08/04/2018
What was the community dplit ?
ipsec - 08/04/2018
?
limax - 08/04/2018
@Roi Candaule at some point in March a disagreement between developers created a community split. Core team continued to maintain Ellaism and other devolopers created a new coin. From user perspective was a hard choice to make, I hope at some point in time we can heal the wounds(edited)
Roi Candaule - 08/04/2018
What is the new coin name ?
Freeman - 08/04/2018
I am really a proud member of this project and community. Well done all people involved in creating and making this possible :smiley:
limax - 08/04/2018
@Freeman our project upgraded smooth and no new coin as a result of the fork
So no Ella Classic or Ella Original, just Ellaism/Ella
Roi Candaule - 08/04/2018
Okay but whats the coin the other created so i can dump if they forked it ?
limax - 08/04/2018
Or you can call this wELLA because of wasm upgrade :grinning:
This is an old story
Roi Candaule - 08/04/2018
https://www.youtube.com/watch?v=AqaYYVIKyNo
issou
limax - 08/04/2018

William Faulkner ❯❯❯  “The past is not dead. In fact, it's not even past.”

Roi Candaule - 08/04/2018
La chancla my el bagnador
Freeman - 08/04/2018
@limax  Let me know if there is anything I can  contribute with. My competencies lies in marketing :wink:
limax - 08/04/2018
Thank you
Iame3 - 08/04/2018
@Freeman developers, exchanges, social networks - I think everything positive is welcome :smiley_cat:
Small offtopic - around November I've read coin announcement - tens of thousands of dollars to be invested, marketing developers, and so on... Now it worth 0.001$ :smiley:
mohseng - 08/04/2018
@Nulligun re the roadmap; are we sure we will stick with PoW?  What if PoS goes fine?  I think this is old and should be updated.  A technology neutral approach is preferred IMHO.
Iame3 - 08/04/2018
@mohseng  there should be vote, theoretically possible, but pos is about centralization, don't you feel?
Nulligun - 08/04/2018
yea if PoS goes fine and people vote for it, I'd be happy with that
Iame3 - 08/04/2018
Some percentage of blocks would be acceptable, but not full pos, I would not agree with the later.
Like 5-20% of blocks, 3-10% APR, but this is just my opinion.
mohseng - 08/04/2018
Since eth POS comes with sharding I would follow what Ethereum does. Our advantage is really the no premine thing.  At least that's why I m here.
@Iame3 POS not necessarily equals centralization more than Asics
Also the no pre mine helps with decentralization greatly
```
