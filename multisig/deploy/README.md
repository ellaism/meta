# Multisig Wallets Deployment scripts

Those are scripts used to deploy Dev Fund and Community Fund multisig wallets.

* Dev Fund: 0xe9C2d958E6234c862b4AfBD75b2fd241E9556303
* Community Fund: 0xA2C7779077Edc618C926AB5BA7510877C187cd92

## Verify

You can verify the deployed contract using the forked version of [bytecode-verifier](https://github.com/ellaism/bytecode-verifier).

```
git clone https://github.com/ellaism/bytecode-verifier
cd bytecode-verifier
npm install
node index.js verify mainnet
```

And then use the following settings:

* Compiler version: `v0.4.15+commit.bbb8e64f`
* Contract file name: `multisig/deploy/MultiSigWallet.sol`
* Contract address: Dev Fund or Community Fund address
* Optimized: `1`
