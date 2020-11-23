<!-- TITLE: Create and Deploy Ellaism Tokens -->
<!-- SUBTITLE: From Solidity contract to Python Air Drop! -->

# Ellaism ERC-20 Tutorial

This guide will walk through the process of creating a token on the Ellaism network.  It will cover creating the smart contract written in Solidity, deploying it, adding your source code to the explorer, and adding icons to mobile wallets.

## Requirements

- Browser that supports [MetaMask](https://metamask.io/) or some other web3 provider
- Python3
- Git and GitHub Account
- MacOS/Linux


## Token Specifications

You need to decide what properties your token will have.  Be certain of these values before proceeding because some of them can't be changed once the token been deployed to the blockchain.

- Symbol
- Name
- Decimals
- Total Supply
- Description
- Icon (256x256 PNG)

### Symbol

Can be any number of letters, the most common is 3 or 4.  Some wallets will preserve case, so you might want to use all uppercase here.
This information is included on the smart contract when it is deployed to the blockchain.

### Name

The long form name of the token that will appear in wallets.  This information is included on the smart contract when it is deployed to the blockchain.

### Decimals

Number of decimals of precision to include.  A typical ERC-20 token uses 18 decimal places.  Go with 18 if you want fractional values for your tokens.  Or use 0 for no decimals at all.  This information is included on the smart contract when it is deployed to the blockchain.

### Total Supply

Total number of tokens to make available. This refers to the integer part of the number before the decimal place.  This information is included on the smart contract when it is deployed to the blockchain.

### Description

A brief overview of why you created the token and what your plans are for it.  This is for the [wiki entry](https://wiki.ellaism.org/tokens).
This can be changed at any time.

### Icon

This is for the mobile wallets and wiki.  A 256x256 PNG is required.  This can be changed after the contract is deployed although there is a small wait time for pull requests to be approved.


## Create the contract

A token is piece of code that implements set of functions who's names and parameters have all been defined by the Ethereum governing
body.  If you want to read details [about the ERC-20 specification click here](https://theethereum.wiki/w/index.php/ERC20_Token_Standard).

Wallets and other applications can call these functions in your smart contract to find out thing about the token such as it's name, total supply or to transfer tokens to other people.

Start by [downloading this sample code](https://github.com/stevemulligan/ellaism-token-example/blob/master/outdoordevs_token.sol) to your computer.  Open it in a text editor so you can make some changes.

The example token doesn't have many features outside of a basic  ERC-20 token. The only additional features it provides are:

- payable default function
  On line 217 this function called when Ella is sent to the contract address.  Since this is not an ICO contract, there is no need
  to send any currency, so it simply calls revert() and returns all the money.

- transferAnyERC20Token
  On line 225 if anyone transfers other tokens to your contract by mistake, this will allow you to return them to their rightful owner.


### Required Changes

Inside the constructor on lines 120->123:

```
symbol = "ODD";
name = "Outdoor Devs Token";
decimals = 0;
_totalSupply = 21000000 * 10**uint(decimals);
```

Change these values to what you want for your token.  For _totalSupply only change the first number (21,000,000).

You should also probably change lines 8->15 as well.  This section is just a comment but you should update it so it's easy to refer back to later.

#### Solidity Version

You might want to change the first line of the contract to reflect the version of latest version of Solidity on the Ellaism explorer. This
could be a concern if you want to publish your source code on the explorer.  [Visit the explorer](https://explorer.ellaism.org/contract/verify) and check the **Compiler Version** drop down menu
at the bottom of this form.  Use the version you see here in the first line. Only use the number, omit anything after this.

eg, if the Compiler Version is `soljson-v4.20-nightly.2018.1.19+commit.a668b9de.js`

then you should use `pragma solidity ^0.4.20;` as the first line.

## Launch the token

### Setup MetaMask or Web3 provider

Once have installed MetaMask you need to connect it to the Ellaism test network. Open the MetaMask settings page and
add the TestNet URL.

https://jsonrpc.testnet.ellaism.org

![Metamask Setup](/uploads/tutorials/metamask-setup.png "Metamask Setup")


Next use MetaMask to create a new account on the TestNet.  Then login to the [Discord](https://discord.ellaism.org/) to send yourself some
Ella on the TestNet.  Find the address for the account you just created and issue this command in the #bots channel.

`!testnet send 0x2cbb505641e0c1b0ada0cf0b045014383de94576`


You can read more about [Ellaism TestNet features here](https://ellaism.org/testnet/).


### Deploy to Test Net

Visit https://remix.ethereum.org in your browser.

Create a new file and then copy pasta your smart contract into the editor window.

Click on the tab that says "Compile" and then click "Start to compile".  Hopefully there are no errors.  If you can't get
the contract to compile, visit the [Ellaism discord](https://discord.ellaism.org/) for support.

Click on the tab that says "Run" and make sure Environment is set to "Injected Web3".

Make sure your address is displayed next to "Account".  You might have to choose a different Environment and then switch back to "Injected Web3" to get the Account field to populate.

Make sure "FixedSupplyToken" is selected in the drop down menu above the deploy button.

![Remix Setup](/uploads/tutorials/remix-setup.png "Remix Setup")

Then press the Deploy button.


You should get a MetaMask confirmation window.

![Metamask Confirm](/uploads/tutorials/metamask-confirm.png "Metamask Confirm")

Click the Confirm button.


FixedTokenSupply should now appear on the bottom of the right side bar. Clicking the copy/pasta icon next the FixedTokenSupply will
grab the address of the token.  You should place this address in the source code of the token on line 15.  This address is needed
to interact with the smart contract.

![Remix Deployed](/uploads/tutorials/remix-deployed.png "Remix Deployed")

You can click the buttons on the left to call functions on your smart contract to test if they are all working as intended.


### Deploy Main Net

Repeat the previous **Setup MetaMask or Web3 provider** step but this time use the RPC URL for the Main Net.

https://jsonrpc.ellaism.org

You'll need to provide your own Ella, either by mining or buying some on an exchange.  There is a [faucet on the Main Net](https://ellaism.org/bots/) but the amount it dispenses may not be enough for your purposes.
Make sure the account you are using in MetaMask shows a balance.

Now repeat the steps from **Deploy to Test Net** and this time your token will be deployed on the Main Net.

Once you confirm the transaction in MetaMask your token will be live.  It will have the same address as the one from the Test Net.


## Update the wiki

If you want people to know about your token a good place to start is the [Ellaism wiki](https://wiki.ellaism.org/tokens).

To get write access on the wiki, create an account there and then ask in [Discord](https://discord.ellaism.org/) for someone to approve the account.

Try to follow the same format as the tokens that are already there, adding yours to the end of the list.

## Add source code to explorer

It is a good idea to publish the code for your token on the Ellaism explorer.  This adds some additional trust as the behaviour
of the contract can easily be reviewed by others before they interact with it.

[Visit the explorer in a browser](https://explorer.ellaism.org/) and search for your contract address.

Click on the Code tab and then click on the Upload Source link.

Fill out the form with your contract address, contract name, and copy pasta your contract source code. Try to match the version
of Solidity with the one you used in Remix. Use the closest match that you can find. Check the **Settings** tab in Remix to find out
which compiler version is being used.

Click the Verify button to add your source code.  Search for your contract again to see that there are two new tabs, **Source** and **Contract State**.


## Update mobile wallets


At the time of this writing, there are two Ellaism wallets that support tokens. One for Android and one for iOS. You can add your
token icon to both of these wallets with a single pull request.

Fork the [Ellaism trust-wallet-ios repository](https://github.com/ellaism/trust-wallet-ios) and clone it to your local machine.
This repo also holds the token images for both Android and iOS Ellaism wallets.

Place your token's icon in `docs/images/tokens`.  Name the image the address of your contract (all lower case) with a PNG extension.  Make sure the resolution is 256x256.

Push your change to your GitHub repo an then create a pull request.

There are plans to add Ellaism to the main Trust Wallet iOS and Android wallets.  If you want your token included in those
wallets you can fork the [Ellaism tokens repository](https://github.com/ellaism/tokens).  Place your icons in `/images/`.  Name the image the address of your contract (all lower case) with a PNG extension.  Make sure the resolution is 256x256.

Push your change to your GitHub repo an then create a pull request.  I will create a pull request to send your contact icons upstream so it will be included in the main Trust Wallet repo.

The tokens repo will eventually be used by all wallets so it's a good idea to add your icons to both for the time being.


## Air Drop!

Included in this repo is a [python script](/give_away_tokens.py) that will allow you to send an air drop to a list of addresses in a text file.  The current
[addresses.txt](/uploads/tutorials/addresses.txt) file consists of 26K or so Ella addresses that had a balance over 1 as of July 10th, 2018.  Use this list, or replace it
with your own.

You'll then need to create a file named .env in the same directory where you run give_away_tokens.py.  Here is a sample of what it should look like:

```
PRIVATE_KEY=blahblahblah
```

Place your private key for the account that holds the tokens in there.

On line 36 of give_away_tokens.py

```
send_tokens(recipient_address=w3.toChecksumAddress(a), tokens_to_send=150, nonce=nonce)
```

Change 150 to whatever value you want to give away.

If you want to try this on the test net first, be sure to change the json rpc endpoint on line 7

```
w3 = web3.Web3(web3.HTTPProvider('https://jsonrpc.ellaism.org'))
```


If you want to change the gas price or how much gas to use, change line 22

```
 token_txn = token_contract.functions.transfer(recipient_address, tokens_to_send).buildTransaction({
        'chainId': 64, # 16448 for test net, 64 for main net
        'gas': 51176,
        'value': 0,
        'gasPrice': w3.toWei('1', 'gwei'),
        'nonce': nonce
    })
```


Sending to all these addresses will cost about 10 Ella.

There is something called a 'nonce' that is used to avoid duplicate transactions.  We retrieve this number from the network when the script starts,
but then it is incremented internally for speed.  If the script ends for any reason, you might have to wait a couple minutes to wait
for the rpc endpoint to catch up with all your transactions.  If see errors about duplicate transactions, wait a few minutes and try again.

Be mindful of the load on the network when sending out large airdrops.  When I sent my ODD tokens out I broke this list into 1000 address chunks using the `split` command.


### When Lambo?

Now that you see how easy it is, you know most of these tokens should never be worth as much as lambo ;-)

