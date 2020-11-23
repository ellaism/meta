# Development Meeting (28 July, 2018)

This is the log of *Weekly General Development Meeting*. It happens every Saturday 4pm UTC in the #development [Discord channel](https://discord.ellaism.org).

```
limax - 07/28/2018
@here It's time for our weekly dev meeting
Nulligun - 07/28/2018
!rsvp ping
limax - 07/28/2018
I'll repeat @ellaismer message for our telegram users

Really sorry everyone, I'm having an important personal schedule this Saturday, and I might not be able to be there for the dev meeting. @Nulligun @limax @kubu00 @Towd @DeSVaR It would be really great if any of you can help to be the host this week (sorry if this is a huge ask!), or just be here and answer people's questions.

Regarding development update, the main thing I'm trying to do is to get a wasm version of the tipbot (and sorry @kubu00, I'll answer you really soon!). On the explorer side, I found that rust playground do support compilation to wasm, so I'm playing around with it to see whether I can integrate that for wasm contract validation.

terra-pescado - 07/28/2018
Meow
limax - 07/28/2018
With this said I think we can start with a little recap for last week
EllagramBOT - 07/28/2018
zernex:
:ok_hand:
limax - 07/28/2018
And after that focus on eventual Q/A regarding the network uprgade that will take place in less than one week
art - 07/28/2018
what will the network update?
limax - 07/28/2018
Regardind the upgrade we tried to get all info covered here https://wiki.ellaism.org/hardfork
On that page we also have the list with 100% confirmed ready pools and exchanges
Nulligun - 07/28/2018
...about 6 days, 10 hours away :ellahaze: :ellagem: :ella:
limax - 07/28/2018
This is not an exclusive list, is possible that others from list of pools or exchanges to be also ready, but we don't have a clear answer
From mining side, the only concern should be to contact pool operators if you don't see the pool on that list
The list will be updated with any pool confirming the update
Also because I pointed to wiki, you should be aware that we have now a dedicated page on wiki containing informations needed for exchange listing requests https://wiki.ellaism.org/exchanges/listing-info
EllagramBOT - 07/28/2018
Tylerswallet
:thumbsup:
limax - 07/28/2018
Few days ago we discussed with zb.com their offer for listing but I think, at this moment, we cannot pay the fee which is 200 000ELLA as a limited offer
art - 07/28/2018
as I know there was no premine, due to which the project is developing?
limax - 07/28/2018
Yes, no premine here and no mandatory dev fees
Our financial reports are here https://wiki.ellaism.org/financial-reports
art - 07/28/2018
I really like the coin, I wish success to all of us
limax - 07/28/2018
Looking forward to next week upgrade looks like our public nodes are all updated http://stats.ellaism.org/
Tomorrow we will get also the secodary explorer up. The server is ready and we just need to setup the dns
This is a fork of etc explorer and for now we will use this only as a backup / secondary explorer without some features from main explorer but with stats added and also full history search
This way I hope we can take some pressure from main explorer
EllagramBOT - 07/28/2018
zernex
/p@Cryptowhalebot
limax - 07/28/2018
We have a version here https://github.com/ellaism/etc-explorer with required configuration already done if someone want to try a local copy
This is for now all I have to say.
@Nulligun @kubu00
Nulligun - 07/28/2018
I'm still working on getting Android Wallet into Fdroid store.  I hope that will be done this weekend.
Not much else happening here though.  Going to put aside some time to explore Rust a bit very soon.
limax - 07/28/2018
BTW
For Python developers that are thinking in developing dapps but not with Solidity
https://vyper.readthedocs.io/en/latest/
Ok, this is experimental, but is targeting EVM
art - 07/28/2018
there are plans on  exchanges?(edited)
limax - 07/28/2018
Ok, I answered earlier in #general but I can do this again here. At this point, with our funds, there are only two ways to get on more exchanges
By free listing or by running donation campaigns
This was my answer for zb.com also
We discussed with different exchanges, but at least for now, we don't have positive answers
This is why we provided the page with required info on wiki, to enable any member of the community to fill listing forms if wanted
I think that, again, at this moment, we should focus our effort on network upgrade as first priority and after that on support for developers that want to test or deploy dapps on our network
With this in place our volumes can increase naturally
EllagramBOT - 07/28/2018
Juhanson
/p ella
limax - 07/28/2018
This should be pinned on telegram also
https://wiki.ellaism.org/hardfork
kubu00 - 07/28/2018
Back to the tipbot ...I am waiting for a response from @ellaismer about tipbot.sol. I proposed my changes at @ella-bots if it's ok, I can continue the work. do we need to be removed (freeze, lock), tipbot user (address from blockchain?
limax - 07/28/2018
Based on what?
When is this action needed?
kubu00 - 07/28/2018
If user want to change tipbot address? Im only asking:)
limax - 07/28/2018
You keep the contract address / user pair for now in a database?
If so, when he change the contract address you only need to update this in the database(edited)
kubu00 - 07/28/2018
Yes- userid and tipbot(contract address) in db.
But tipbot cant change address (account address)
limax - 07/28/2018
In this case I don't think you need to take actions on contracts
Because when a user ask for an address, a new contract will be generated
And you just update in the database with last generated value for that user id(edited)
the contract address / user address pair is on the blockchain
kubu00 - 07/28/2018
Tipbot methods: transfer(coins to others tipbot users)  ,set address to withdrawal,witdraw (amount), fallback(withdraw all coins)
Baad way i think
Example: i create tipuser1 (user in discord/tw),and send them 100 ella, aster i i create again tipuser2.   Db updated and where are my 100 ella?
limax - 07/28/2018
but tipuser1 and tipuser2 are different users
and anyway, your coins are in a private address not on contract
kubu00 - 07/28/2018
If diferent users then all good
No
In contract(edited)
limax - 07/28/2018
If you are not using the fallback function
If I want to create a new user just to change my name I should also have access to old user to withdraw the coins
I don't think you can have other option to change the contract from one userid to another
Maybe a good option will be to allow the user to specify a threshold value for the contract
Like when the amount is greater than 10/100 to withdraw automatically specified value
kubu00 - 07/28/2018
if for some reason the user will want to change the address of his tipuser, he must report it to us. we will generate a new tipuser and replace it in db.
limax - 07/28/2018
Possible, but I think this must be automated if is possible
kubu00 - 07/28/2018
the contract assumes the value in "wei". on the interface side set in ether (1, 0.1, 0.00001 ella). if it is too much, I can change it at any time.
Fallback - withdraw all,
Withdraw - withdraw set amount
limax - 07/28/2018
If that's all I think we can end our meeting here
kubu00 - 07/28/2018
Ok,plz just comment my post in ella-bots. Channel after meeting
limax - 07/28/2018
Our next meeting will be probably one day after fork and we can take some conclusions on that
Sure, our discussions will continue as usual
kubu00 - 07/28/2018
I want to finish tipbot before fork

```
