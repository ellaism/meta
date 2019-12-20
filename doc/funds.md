# Development and Community Funds

In an effort to maintain a high level of transparency for the Ellaism Project, donated funds are held in multisignature (multisig) wallets. The multisig wallets for the development and community funds can receive inbound transactions as normal. However, to execute transactions, it requires multiple, unrelated entities to sign the transaction.

>The development and community funds are not intended to be utilized as a governance protocol. The understood purpose of these funds are to serve the community-driven goals of the Ellaism Project.

Please see below for the current signers for the development and community funds, respectively.

## Development Fund Wallet

The development multisig address is [0xe9C2d958E6234c862b4AfBD75b2fd241E9556303](https://explorer.ellaism.io/address/0xe9C2d958E6234c862b4AfBD75b2fd241E9556303). The development fund requires a quorum of 2 out of 3 signers to execute a transaction.

* "ellaismer". Core Developer of Ellaism. [Address](https://explorer.ellaism.io/address/0x0058781f3A0C1a9BE51581CBD8BC41B871c37713), [Keybase](https://keybase.io/ellaismer), and [Proof](https://explorer.ellaism.io/transaction/0x350284b27e4136bc513c0cca6f6ac3959180c30534050e89243023353ac761b9).
* Steve Mulligan. Core Developer of Ellaism. [Address](https://explorer.ellaism.io/address/0x797ff8b16d332dcc19e75a6af84a75e3a253246d).
* Krzysztof Pawliczuk. Core Developer of Ellaism. [Address](https://explorer.ellaism.io/address/0xf48f5cff4b298fe47db71ab6a7f29b1e2fbd8571).
* Community Fund Wallet. [Address](https://explorer.ellaism.io/address/0xA2C7779077Edc618C926AB5BA7510877C187cd92).

## Community Fund Wallet

The community fund multisig address is [0x01ff0FFd25B64dE2217744fd7d4dc4aA3cAbceE7](https://explorer.ellaism.io/address/0x01ff0FFd25B64dE2217744fd7d4dc4aA3cAbceE7). The community fund requires a quorum of 6 out of 11 signers to execute a transaction.

* Denis Vantur, Leader of Code of Conduct Working Group. [Address](https://explorer.ellaism.io/address/0x26fE6DF9794b8d578C46006Ebe89bFc35c68F5aB).
* "psdev", Miner and Dapps Developer. [Address](https://explorer.ellaism.io/address/0xbcc3c89701a926aedcaffd519ec4273ee024bc85).
* Nathan R. Fish, Trader. [Address](https://explorer.ellaism.io/address/0x262FF390464045573550B642F32b698cf3F24585).
* "volt", Miner. [Address](https://explorer.ellaism.io/address/0x8722b227C93c0a73c65e9B4b19ABb90E7103683c).
* "zenrobot", Telegram Chat Admin. [Address](https://explorer.ellaism.io/address/0x6DEB1d33bD4a02d1Ce89FcC1229484F62862dbe6).
* "towd", Leader of Community Fund Bootstrap Working Group. [Address](https://explorer.ellaism.io/address/0x027F37f36ED17a493C777811975f3CB2d11F8946).
* "limax", Leader of Website Development Working Group. [Address](https://explorer.ellaism.io/address/0x52EB48dE2aDBc87d1E1f564CA96151CDA0B9D054).
* Fernando Diaz Alfaro, Leader of Website Development Working Group. [Address](https://explorer.ellaism.io/address/0x0B51933c62592c46995d0E01E58cE4571Ab2A05B).
* Sooraj Singh, Developer and Trader. Co-Founder of Whyral. [Address](https://explorer.ellaism.io/address/0x1B4D27704b19Cb121c93ce188284e7df659bEa34).
* Development Fund Wallet. [Address](https://explorer.ellaism.io/address/0xe9C2d958E6234c862b4AfBD75b2fd241E9556303).

## Verify Signers

* Verify the contract source code located in the [multisig repository](https://github.com/ellaismproject/multisig).
* Directly use the multisig contract on the blockchain to get the addresses of all signers for the development and community funds.
* Find the keybase address, and use the coresponding proofs with transaction ids to confirm that the keybase owner indeed holds the Ellaism address.
  * To check the transaction id proof, decode the hex data within the transaction data.
