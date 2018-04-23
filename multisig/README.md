# Ellaism Multisig wallets

To make the Ellaism development process more transparent and to decentralize trust, we are making both Dev Fund and Community Fund to be multisig wallets. Those wallets accept donations just like normal, but to send funds out, it requires multiple people to sign the transactions. The current signers are listed as below.

For community fund, the signers listed are all senior community members and are considered to be trusted. They all agreed that signers for community fund would not take personal benefits. For dev fund, we asked an independent observer, as well as the community fund signers as a whole, to monitor the spendings, and make sure funds are put into good use for core development process.

Note that this is not a governance process. The goals for Dev Fund and Community Fund are still to serve the community, and you have as much saying as before for how you think your donation should be spent. Multisig signers can also be added and removed, and there're many ways you can get engaged in the fund management, or become a signer in the future.

## Dev Fund

Dev Fund multisig address is at [0xe9C2d958E6234c862b4AfBD75b2fd241E9556303](https://explorer.ellaism.org/addr/0xe9C2d958E6234c862b4AfBD75b2fd241E9556303). Dev Fund requires 2 out of 3 signers:

* "ellaismer". Core Developer of Ellaism. [Address](https://explorer.ellaism.org/addr/0x0058781f3A0C1a9BE51581CBD8BC41B871c37713), [Keybase](https://keybase.io/ellaismer), and [Proof](https://explorer.ellaism.org/tx/0x350284b27e4136bc513c0cca6f6ac3959180c30534050e89243023353ac761b9).
* Wei Tang. Independent Observer not affiliated with Ellaism Core. Core Developer of Ethereum Classic. [Address](https://explorer.ellaism.org/addr/0x00f974Bee5ABA74e57686A17B060Be6dA2222620), [Keybase](https://keybase.io/sorpaas), and [Proof](https://explorer.ellaism.org/tx/0x1ec055fdd713ea10568f8f2e1894a384b122080494763a533e72a41318b18560).
* Community Fund Multisig. [Address](https://explorer.ellaism.org/addr/0xA2C7779077Edc618C926AB5BA7510877C187cd92).

## Community Fund

Community Fund multisig address is at [0x01ff0FFd25B64dE2217744fd7d4dc4aA3cAbceE7](https://explorer.ellaism.org/addr/0x01ff0FFd25B64dE2217744fd7d4dc4aA3cAbceE7). Community Fund requires 6 out of 11 signers:

* Denis Vantur, Leader of Code of Conduct Working Group. [Address](https://explorer.ellaism.org/addr/0x26fE6DF9794b8d578C46006Ebe89bFc35c68F5aB).
* "psdev", Miner and Dapps Developer. [Address](https://explorer.ellaism.org/addr/0xbcc3c89701a926aedcaffd519ec4273ee024bc85).
* Nathan R. Fish, Trader. [Address](https://explorer.ellaism.org/addr/0x262FF390464045573550B642F32b698cf3F24585).
* Steve Mulligan, Miner. [Address](https://explorer.ellaism.org/addr/0x797fF8b16D332dcC19E75a6aF84A75E3A253246D).
* "volt", Miner. [Address](https://explorer.ellaism.org/addr/0x8722b227C93c0a73c65e9B4b19ABb90E7103683c).
* "zenrobot", Telegram Chat Admin. [Address](https://explorer.ellaism.org/addr/0x6DEB1d33bD4a02d1Ce89FcC1229484F62862dbe6).
* "towd", Leader of Community Fund Bootstrap Working Group. [Address](https://explorer.ellaism.org/addr/0x027F37f36ED17a493C777811975f3CB2d11F8946).
* "limax", Leader of Website Development Working Group. [Address](https://explorer.ellaism.org/addr/0x52EB48dE2aDBc87d1E1f564CA96151CDA0B9D054).
* Fernando Diaz Alfaro, Leader of Website Development Working Group. [Address](https://explorer.ellaism.org/addr/0x0B51933c62592c46995d0E01E58cE4571Ab2A05B).
* Sooraj Singh, Developer and Trader. Co-Founder of Whyral. [Address](https://explorer.ellaism.org/addr/0x1B4D27704b19Cb121c93ce188284e7df659bEa34).
* Dev Fund Multisig. [Address](https://explorer.ellaism.org/addr/0x0058781f3A0C1a9BE51581CBD8BC41B871c37713).

## Verify Multisig Signers

* Verify the contract source code, as in the [deploy](https://github.com/ellaism/meta/tree/master/multisig/deploy) folder.
* Directly use the multisig contract on the blockchain to get the addresses of all signers for Dev Fund and Community Fund.
* Find the keybase address, and use the coresponding proofs with transaction ids to confirm that the keybase owner indeed holds the Ellaism address. To check the transaction id proof, decode the hex data within the transaction data.
