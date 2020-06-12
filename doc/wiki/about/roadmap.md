![Logo](/uploads/logo.png "Logo"){.pagelogo}
<!-- TITLE: Roadmap -->
<!-- SUBTITLE: Ellaism - A stable network with no premine and no dev fees -->

> **Hard fork for Ellaism network at block 2,000,000, to enable:**
* WebAssembly: pwasm as in Kovan.[^1]
* Byzantium: EIP100, EIP140, EIP196, EIP197, EIP198, EIP211, EIP214, EIP658.[^2]

> **Please use Parity 1.10.3+, support for geth will be deprecated**
---
[^1]: https://github.com/ellaism/specs/blob/master/specs/2018-0003-wasm-hardfork.md
[^2]: https://github.com/ellaism/specs/blob/master/specs/2018-0004-byzantium.md

Ellaism is a network without pre-mine, thus its development team is
decentralized. It is expected that there will be multiple teams developing on
the Ellaism blockchain. Ellaism Core is a non-profit team that develops and
maintains some core infrastructures on the Ellaism blockchain.

You can donate to Ellaism Core by supporting the [**Dev Fund**](dev-fund), which you can
find more information on at the [Donate to Ellaism](https://ellaism.org/donations/) page.

# Funding and Community Efforts

One of the most important things that users care about is how
Ellaism Core is funded and how the team may impact the community. Here we make
several points about what we are and what we aren't.

1. **Core is run by donations.** Everyone owns the Ellaism blockchain, thus they
   have the choice of whether they want to support Core or not, by making
   donations. **We will have complete financial transparency,** so you know
   exactly where your donations go. Most of the donations will be used to pay
   the salary for developers.
2. **Core has a public inspectable roadmap.** And it is what you're seeing right
   now. Every year, we publish a new short-term roadmap, for the coming year,
   three months in advance (November to February next year). The community
   always has the chance to propose changes to the roadmap.
2. **Core is replaceable.** Ellaism has no pre-mine. Every time the community is
   not happy with Core, it has the chance to replace Core by
   another team, by switching its donations.

Below are lists of our roadmap plan. You can submit your suggestions regarding
this roadmap to the public Discord server,
or privately to [core@ellaism.org](mailto:core@ellaism.org). Note
that we only list things we plan to implement this year. That means many other
exciting features that are planned in the future will not be listed here. This
includes:

* Sharding and blockchain scaling.
* Light client.
* Decentralized bulk storage integrated with blockchain.
* And many others.

# Client and Wallet Development and Maintenance

Full nodes (clients) and lightweight wallets are probably the most important
pieces of the network. In the coming year, we plan to:

* Develop the [go-ellaism client](https://github.com/ellaism/go-ellaism) and [multi-geth client](https://github.com/ellaism/multi-geth).
* Maintain support for [Parity client](https://github.com/ellaism/parity-config).
* Develop the [ellawallet](https://ellaism.github.io/ellawallet).

# Ethereum Virtual Machine and Developer Tools

EVM is the central part of Ellaism, and developer tools are important pieces
that allow people to actually use the network. In the coming year, we plan to:

* Optimize the performance of Ethereum Virtual Machine which will help the
  network handle more transactions.
* Port and maintain other developer tools for the Ellaism chain, if needed.

# Governance System and Hard Forks

Ellaism uses the bullet-proof governance system – proof of work and hard/soft
forks. Many would argue that an additional layer of the democracy-like
governance system, such as a chain-level decentralized autonomous organization
(chain-level DAO), is necessary. We respect this view and would consider
incorporating an additional layer of the governance system in the future.
However, we would be careful when exploring this approach and, in the
short-term, use an on-chain optional system instead.

Chain-level DAOs are usually highly complex. If implemented incorrectly, they
can lead to tyranny of the majority. This, in case of a divide, does not help in
reaching consensus – the minority might decide to hard fork and change the
chain-level DAO rules, and it still leads to a new chain.

Consensus is a research problem in politics. We believe there is a reason that
we have multiple cryptocurrencies. In case of a divide, Core team will not
choose a side and will support the view of both sides by implementing it in the
client Core supported, and let users decide.

In the short term, the on-chain system is totally optional and will only be used
as an indicator of public opinions. This includes:

* **CarbonVote:** you vote with the amount of ELLA you have. One ELLA, one vote.
* **MinerVote:** you vote with blocks you mined on Ellaism. One GPU, one vote.

In the coming year, we plan to:

* Implement a public interface to incorporate CarbonVote and MinerVote. So
  everyone can easily find out the current network opinions.
* Support additional rules, such as voting delegation (you delegate your vote to
  other community members you trust).
* Work on specifications to standardize CarbonVote and MinerVote.

# Ethereum Protocol-level New Features

If the community decides to incorporate new features from Ethereum and reaches
consensus, we will prepare and implement them. We should treat them with
caution, however, because not all of them benefit the Ellaism blockchain.
Ethereum's new features might include:

* Difficulty and total difficulty fix related to uncle and GHOST protocol.
* zkSNARK support with transaction privacy (EIP197).
* Big integer operations support for RSA related operations (EIP196 and EIP198).
* New EVM opcodes, including `REVERT`, `RETURNDATASIZE`, `RETURNDATACOPY`, `STATICCALL`.

# BTC Relay and Cross-chain Operations

BTC relay allows validation of Bitcoin transactions on the Ellaism blockchain.
In the coming year, we plan to:

* Implement a new interface for BTC relay and allow easier usage.
* Restore Bitcoin-ELLA atomic swap.
* Build incentives for miners to run relays.
* Investigate other techniques to carry out atomic swap and cross-chain operations.

# Protocol Specification

We believe that multiple teams and multiple clients result in a healthy
ecosystem for Ellaism. As a result, protocol specifications need to be created
and maintained as a common ground. Currently, while it has been improved over
the years, Ethereum still has many errors and missing pieces both in its Yellow
Paper, and in the Ethereum Improvement Proposals repository. In the coming year,
we plan to:

* Create a clearly defined editor process for protocol specifications.
* Fill and correct missing pieces in the current [protocol specifications](https://github.com/ellaism/specs).