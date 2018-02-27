# Ellaism Multisig wallets

To make the Ellaism development process more transparent and to decentralize trust, we are making both Dev Fund and Community Fund to be multisig wallets. Those wallets accept donations just like normal, but to send funds out, it requires multiple people to sign the transactions. The current signers are listed as below.

For community fund, the signers listed are all senior community members and are considered to be trusted by the original Community Fund manager @CountCryptula. They all agreed that signers for community fund would not take personal benefits. For dev fund, we asked an independent observer, as well as the community fund signers as a whole, to monitor the spendings, and make sure funds are put into good use for core development process.

Note that this is not a governance process. The goals for Dev Fund and Community Fund are still to serve the community, and you have as much saying as before for how you think your donation should be spent. Multisig signers can also be added and removed, and there're many ways you can get engaged in the fund management, or become a signer in the future.

## Dev Fund

Dev Fund multisig address is at [0xe9C2d958E6234c862b4AfBD75b2fd241E9556303](https://explorer.ellaism.org/addr/0xe9C2d958E6234c862b4AfBD75b2fd241E9556303). Dev Fund requires 2 out of 3 signers:

* Ellaismer. Core Developer of Ellaism. [Address](https://explorer.ellaism.org/addr/0x0058781f3A0C1a9BE51581CBD8BC41B871c37713), [Keybase](https://keybase.io/ellaismer), and [Proof](https://explorer.ellaism.org/tx/0x350284b27e4136bc513c0cca6f6ac3959180c30534050e89243023353ac761b9).
* Sorpaas. Independent Observer not affiliated with Ellaism Core. Core Developer of Ethereum Classic. [Address](https://explorer.ellaism.org/addr/0x00f974Bee5ABA74e57686A17B060Be6dA2222620), [Keybase](https://keybase.io/sorpaas), and [Proof](https://explorer.ellaism.org/tx/0x1ec055fdd713ea10568f8f2e1894a384b122080494763a533e72a41318b18560).
* Community Fund Multisig Wallet. [Address](https://explorer.ellaism.org/addr/0xA2C7779077Edc618C926AB5BA7510877C187cd92).

## Community Fund

Community Fund multisig address is at [0xA2C7779077Edc618C926AB5BA7510877C187cd92](https://explorer.ellaism.org/addr/0xA2C7779077Edc618C926AB5BA7510877C187cd92). Community Fund requires 4 out of 6 signers.

* Bioaim. Community Manager. [Address](https://explorer.ellaism.org/addr/0x00698D7C72e86b5dD81bbf535DBC9790988C1fD8), [Keybase](https://keybase.io/bioaim), and [Proof](https://explorer.ellaism.org/tx/0xba0d96eca01a1245acd2f1b3ed33c01600cd7247f240f508a7a11200c568f888).
* Buzzkillb. Community Manager. [Address](https://explorer.ellaism.org/addr/0xFAa3690A4C661D3bceE763D4337BEA37493065F2), [Keybase](https://keybase.io/buzzkillb), and [Proof](https://explorer.ellaism.org/tx/0x2f9115f94502cde926b8569dbed9b879d8d33a6a4c425a8eb28e901fe4a304d1).
* Tbates. Investor. [Address](https://explorer.ellaism.org/addr/0xF715A869ADC138739c80746530F7030F73AaD087), [Keybase](https://keybase.io/tbates76), and [Proof](https://explorer.ellaism.org/tx/0x128a391be9cbe85ae79c50b2c48bf92a1c44d58a01a018233aba45b13058596c).
* MakeMoneyOz. Ellaism Developer. [Address](https://explorer.ellaism.org/addr/0x89b09D40c25B05491AAeb236F6e4465D7A74bdb7), [Keybase](https://keybase.io/makemoneyoz), and [Proof](https://explorer.ellaism.org/tx/0xd7aa49d82981de56c1f43cb4101ccbd57db19c4be9e53e5e5f141a480a65dab6).
* CountCryptula. Community Manager. [Address](https://explorer.ellaism.org/addr/0x349A6EaA5c71f8D9788DAA3A3e8302885BfB903D), [Keybase](https://keybase.io/countcryptula), and [Proof](https://explorer.ellaism.org/tx/0xb2d44ae825f66fe11f8288e42d08ba2f6b4d42b652453dfab58acbab557c7d35).
* Chris Bischoff. Miner. [Address](https://explorer.ellaism.org/addr/0x1C1AF85d8ec7e3ad9532cdAb9D9EEc55A1bb383E), [Keybase](https://keybase.io/chrls) and [Proof](https://explorer.ellaism.org/tx/0x0e538deaaa5463381d327582b0dce8419adaba1ef1503a3dd196ca6c450c4204).

## Verify Multisig Signers

* Verify the contract source code, as in the [deploy](https://github.com/ellaism/meta/tree/master/multisig/deploy) folder.
* Directly use the multisig contract on the blockchain to get the addresses of all signers for Dev Fund and Community Fund.
* Find the keybase address, and use the coresponding proofs with transaction ids to confirm that the keybase owner indeed holds the Ellaism address. To check the transaction id proof, decode the hex data within the transaction data.
