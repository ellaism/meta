# Development Meeting (19 May, 2018)

This is the log of *Weekly General Development Meeting*. It happens every Saturday 4pm UTC in the #development [Discord channel](https://discord.ellaism.org).

```
Towd - Today at 11:59 AM
!rsvp yes
ellaismer - Today at 12:05 PM
@here Our dev meeting this week starts now! Regarding development update:

1. The initial release of Ellaism Shell is out. It is a desktop wallet that connects to Ellaism network directly. There's still much to be polished and we probably want a better name ("Ellaism Wallet" or something?).
2. A project called Parity Instrumented is started. A modified Parity edition for Ellaism users. This is mostly to show the public that we have a good understanding of the core tech of the network.

I don't have any agenda item today but I'll be here to answer questions, if any. :smiley:(edited)
limax - Today at 12:08 PM
I have a small announcement too. We have a version with almost all our documentation gathered from different sources on https://wiki.ellaism.org/
To complete first stage we need to discuss about client support in order to complete the mining section
Also @Towd I need your help to complete the Media section with available assets, including clips from marketing campaign
Towd - Today at 12:11 PM
Sure.  Just let me know what you need.  I should be more available this week now that I'm back in town.
limax - Today at 12:12 PM
@terra-pescado will help with the swag-store section and with that we can start cleaning typos and deprecated informations
EllagramBOT - Today at 12:13 PM
JayGatsbys (in reply to @ellaismer): Nice this wallet :thumbsup:
limax - Today at 12:14 PM
I'll think about a way to get requests about tutorial parts for the wiki.
@ellaismer Now with the release of Shell we will announce deprecation for other clients on website and wiki?
ellaismer - Today at 12:17 PM
Yes. I think it's time to do that now. :smiley:
limax - Today at 12:19 PM
Until we will have a better automated option for pulling info from wiki to main site (like the one we are testing now with pools and exchanges) I'll follow close your commits on the website and update the md files from the wiki
maskekar - Today at 12:21 PM
What do you think about ProgPOW hype? :sweat_drops:
ellaismer - Today at 12:21 PM
Cool. We can also point more links directly to the wiki. I feel that with the new wiki set up, we are having more people updating the docs so that's really some great work!
@maskekar ProgPOW is a legit proposal: https://eips.ethereum.org/EIPS/eip-1057
But we need to assess it's efficiency against ASIC before doing anything else. EIP process only checks the basic quality of the proposal.
Ethereum Improvement Proposals
ProgPoW, a Programmatic Proof-of-Work
Ethereum Improvement Proposals (EIPs) describe standards for the Ethereum platform, including core protocol specifications, client APIs, and contract standards.
maskekar - Today at 12:26 PM
Almost crying.. glad i'm hodling my mining rig :kissing_heart:
limax - Today at 12:27 PM
Regarding the fork announcement I think we should put more info in the main page of the website. And if is possible a block counter on the announcement
Something like "current block = ..... fork at block 2_000_000
ellaismer - Today at 12:29 PM
And if you remember the blog post from Sia Tech (https://blog.sia.tech/the-state-of-cryptocurrency-mining-538004a37f9b), it also says a lot of what many blockchain developers think. Ethereum Classic has basically gone into that camp -- trying to be ASIC-friendly, and try to encourage more ASIC products so that network remains decentralized.

For us, I think we heard the community's opinion that we want to remain ASIC-resistence. But I just want to say that this is not an easy path, and we have a lot more work to do on this than just tweaking a few parameters on ethash. Forks at Monero indeed came up with something lately (https://github.com/monero-project/monero/issues/3545), but those ideas are still mostly in prototype.
@limax Yeah sounds like something we should do. A basic countdown timer at least.
limax - Today at 12:31 PM
I'll talk with @Nulligun
Regarding the Asic problem,  with reports like the one from this week about  energy involved in mining operations time will prove that energy efficiency from Asics will be preffered.(edited)
Probably the ETC path is for now correct
maskekar - Today at 12:37 PM
@ellaismer that monero suggestion is like x16r.. @limax maybe, I have no problem of ELLA being asic resistant or not as long as there are so many coins to mine. GPU miners can simply trade it with ELLA.
ellaismer - Today at 12:42 PM
@maskekar Slightly different, but I think basic idea is the same. What RandomJS tries to do is to make the algorithm different for each nonce. So it's actually really general. One of the issue, though, is that if we make it truly random, then we cannot know that it terminates in reasonable time (it's turing complete, anyway). So it's a hard problem to design that part.
But I also want to say that for us, our design ground is actually better compared with Monero -- we have two VMs in our chain, EVM and WASM, and both of them can be used as the underlying VM for a general mining algorithm.
(Actually the original Ethereum whitepaper mentioned a design like this, but apparently  it didn't go to this path.)
maskekar - Today at 12:49 PM
@ellaismer well that's scary, any chance of infinite loop bug? Maybe doesn't have to be complete random, just some scale 0 - XXX? Also I notice that RVN get so much hype because of this "claimed to be ASIC resistant - x16r" market favors ASIC resistant coins @limax
ellaismer - Today at 12:50 PM
@maskekar It doesn't matter. If a certain nonce takes too much time to compute, then just terminate and try a different nonce.
But we want to design the algorithm so this case don't happen too often, otherwise we may have high fluctuation of block time.
limax - Today at 12:51 PM
@maskekar I see, Bitcoin is quite Asic resistant
ellaismer - Today at 12:51 PM
@maskekar x16r is good, but it also has its own problem. The issue is that if all 16 algorithms used by x16r are broken to ASIC, then the algorithm is broken to ASIC.
limax - Today at 12:52 PM
@ellaismer Is ok to put deprecation warnings on stats page and explorer?(edited)
ellaismer - Today at 12:52 PM
@limax Yes, for sure. But I would probably need help for design/coding. :smiley:
limax - Today at 12:53 PM
I created a pull request on stats
maskekar - Today at 12:53 PM
@ellaismer yes, I also doubt the x16r, not hodling a single one. *at the moment :laughing:(edited)
limax - Today at 12:53 PM
Just replacing for the moment the old message about voluntary listing
ellaismer - Today at 12:54 PM
Cool! I'll see what I can do for explorer then. :smiley:
limax - Today at 12:55 PM
BTW, can we archive some old projects on github? I know it will look a little deserted maybe but more clean
ellaismer - Today at 12:56 PM
Okay. Will do!
limax - Today at 12:56 PM
(Actually my problem is always with the explorer :smile: )
Always select the wrong one
ellaismer - Today at 12:57 PM
Yeah. Let me archive those unused projects. :laughing:
maskekar - Today at 12:59 PM
@limax if bitcoin is asic resistant, it will be $1 million not $8k :fire:
limax - Today at 1:01 PM
Actually I think that the difficulty to get something is part of big value.
We will see soon with ETH
But the main idea is not to fight in others battles for now, because our main  problem is to get our network to the customers. And instead of putting efforts in things unclear for now like Asic resistance we can try to join our efforts to get things developed
For now Asic resistance is like companies that are changing their name and add "blockchain" and "crypto" to the new name
Is nothing more than marketing at least in ETH based projects
Is hilarious that we discuss about this and not about the pwasm update which is unique for now
ellaismer - Today at 1:08 PM
I don't have more update yet though. Our plan is to get two things first:

1. A development framework for pwasm.
2. UI and explorer support for WASM code.

But those are all in the works right now. :smiley:
limax - Today at 1:09 PM
3. Wasm/pwasm docs in wiki :smile:(edited)
maskekar - Today at 1:10 PM
As a gossips leader working group, I can only provide you guys with hot news. lol. proceed :ok_hand:
limax - Today at 1:13 PM
I think that's all for today :smile:
ellaismer - Today at 1:15 PM
Yeah guess that's all. I'll take a look at what happened to our rsvpbot, but it doesn't seem to be responding recently.
```
