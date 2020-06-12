![Logo](/uploads/logo.png "Logo"){.pagelogo}
<!-- TITLE: Specifications -->
<!-- SUBTITLE: Ellaism - A stable network with no premine and no dev fees -->


# Dispute Resolution

Ellaism is a decentralized blockchain, and its decision-making process
also needs to be decentralized. This specification repository proposes
that we use the *swarm methodology* for handling consensus-related
decisions. Everyone is free to take or follow any initiative, or take
no action at all, and nobody may tell anybody else what to do or what
initiative to follow or not to follow. Everyone owns the Ellaism
blockchain, and nobody shall need to ask permissions. And this is one
of the important property while designing or modifying the process for
this repository.

# Coordinate Efforts

In consensus, it is often important to understand what others try to
do when making our own decisions. We aim to use this repository to
help this situation, by providing statistics (developer and company
supports, CarbonVote and MinerVote) of what others claim they
would decide to do, and to resolve dispute if two different parties
have similar goals.

# Process

We use a modified version of an informal IETF-like process [RFC
2026](https://www.ietf.org/rfc/rfc2026.txt). The process works like
below:

* A new specification or protocol improvement proposal is sent in a
  pull request. The editor checks and helps the author to move the
  specification into an acceptable quality. In this case, no
  subjective judgement shall happen. After that, the specification is
  merged in **Proposed** state. In this process, the specification
  gets its RFC number in the format of `ella-$year-$number-$feature`.
* Once a specification is merged, the editor is responsible for
  collecting statistics of positive/negative support indications and
  transparently display them to readers. This can include technical
  discussion threads, developer and company support indications,
  voting results from coin owners and miners, and others.
* Once an implementation for a particular specification exists, the
  specification is moved to **Draft** state.
* From here, any developer or company can claim to deploy a
  consensus-related specification. In this case, the editor shall move
  the specification to **Planned** state, and transparently indicate
  support level (*Majority Fork*, *Chain Split*, or *Minority Fork*).
* Once a fork happens, and the forked chain survives, a specification
  is moved to **Enforced** state. If chain split happened, it should
  also incidate which particular chain this specification is
  on. Specifications in this state also get a STD number in the format
  of `ella-std-$number-$feature`.
* By default, if chain split happens, this specification repository
  would support both chains, unless one of the chains decided to
  abandon this process.
* If a specification cannot be deployed by itself but relies on other
  specifications, then it would only move to **Draft** state following
  the first specification that it relies.
	
# Specifications

| Number                                                       | Title                                                               | Author   | State    | Discussion                                      |
|--------------------------------------------------------------|---------------------------------------------------------------------|----------|----------|-------------------------------------------------|
| [2017-0001](https://github.com/ellaism/specs/blob/master/specs/2017-0001-account-version.md)              | Generalized Account Versioning Scheme for Hard Fork                 | Wei Tang | Proposed | [#4](https://github.com/ellaism/specs/issues/4) |
| [2018-0001](https://github.com/ellaism/specs/blob/master/specs//2018-0001-precompiled-contract-version.md) | Alternative Scheme of Precompiled Contract Versioning for Hard Fork | Wei Tang | Proposed | [#5](https://github.com/ellaism/specs/issues/5) |
| [2018-0002](https://github.com/ellaism/specs/blob/master/specs/2018-0002-webassembly.md)                  | WebAssembly Smart Contracts | "ellaismer" | Proposed | [#10](https://github.com/ellaism/specs/issues/10) |
| [2018-0003](https://github.com/ellaism/specs/blob/master/specs/2018-0003-wasm-hardfork.md)                | Hardfork Meta: WebAssembly | "ellaismer" | Proposed | [#11](https://github.com/ellaism/specs/issues/11) |
| [2018-0004](https://github.com/ellaism/specs/blob/master/specs/2018-0004-byzantium.md)                    | Hardfork Meta: Byzantium | "ellaismer" | Proposed | [#12](https://github.com/ellaism/specs/issues/12) |