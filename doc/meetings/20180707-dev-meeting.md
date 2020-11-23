# Development Meeting (7 July, 2018)

This is the log of *Weekly General Development Meeting*. It happens every Saturday 4pm UTC in the #development [Discord channel](https://discord.ellaism.org).

```
ellaismer - Yesterday at 12:02 PM
@here Dev meeting starts now! I didn't find any agenda item this time so it may be short. But I'll be here to answer questions. :smiley: 

The new website is up, and I'm working on getting June's monthly update. @Ingridfire and @nash, I added in the footer "Website designed by ...", and please let me know if you'd like to be referred using other names!
Nulligun - Yesterday at 12:03 PM
nice! :smiley:
This looks amazing!
2050 Holdings - Yesterday at 12:04 PM
not a dev but here to listen :smiley:
Nulligun - Yesterday at 12:04 PM
https://ellaism.org/(edited)
limax - Yesterday at 12:04 PM
We need to update Wallet section
sc0rp1on - Yesterday at 12:05 PM
I guess we still have two months before the fork
limax - Yesterday at 12:05 PM
@sc0rp1on 1 month
We need to prepare last details
sc0rp1on - Yesterday at 12:05 PM
Can this be made dynamic on the website?
ellaismer - Yesterday at 12:06 PM
Yeah will do. There're still many stuff missing. And if you have time, I would appreciate it if you can create a issue in ellaism/ellaism.org repo (or open a PR directly!). It just help to organize things (and in case I forgot!).
@sc0rp1on Yes I'm fixing that soon.
sc0rp1on - Yesterday at 12:06 PM
Says two months and a week
Cool
Nulligun - Yesterday at 12:06 PM
I can bring in the countdown stuff after the meeting
ellaismer - Yesterday at 12:06 PM
@Nulligun Cool!
And from my side, I think right now my focus would be to get some WASM stuff done before the hard fork happens.
limax - Yesterday at 12:07 PM
Let get things in some order. 
- Website
- Wallets
- Bots
- Fork
....
sc0rp1on - Yesterday at 12:08 PM
@ellaismer, I think that's the best thing to do. We should completely focus towards the fork
ellaismer - Yesterday at 12:08 PM
Yeah, my rationale is just that people should be able to immediately start using WASM once we enabled it.
limax - Yesterday at 12:09 PM
@ellaismer we have a planned session on testnet for a pwasm tutorial tomorrow, Is there anything that we need to take care about?(edited)
ellaismer - Yesterday at 12:10 PM
I think it's up to you. Nothing from my side. :smiley:
limax - Yesterday at 12:10 PM
Good to know
Is not for real anyway :smile:
Regarding website we have some missing parts there. Who is in charge with this?
EllagramBOT - Yesterday at 12:14 PM
JayGatsbys
Didnt the website we had before look better? :thinking:
ellaismer - Yesterday at 12:14 PM
We need more website maintainers, for sure. (Just let me know and I'll give push access to master).
And in the mean time, everyone should be able to submit PRs. :smiley:
limax - Yesterday at 12:14 PM
Ok, on that
EllagramBOT - Yesterday at 12:14 PM
JayGatsbys (in reply to @limax):
:sob:
limax - Yesterday at 12:14 PM
@Nulligun wallets status
Nulligun - Yesterday at 12:15 PM
I think Android wallet might be available soon,   https://play.google.com/store/apps/details?id=com.outdoordevs.ellaism.wallet
Ellaism Wallet - Apps on Google Play
And then starting on adding token support to both iOS and Android.
ellaismer - Yesterday at 12:16 PM
JayGatsbys: the website we had before is indeed more stable (and some important details like text readings are more polished). And we're working on that right now, as it's just pushed live today. :smiley:
Nulligun - Yesterday at 12:16 PM
Viktor, creator of iOS Trust Wallet, from where ours is forked, said that when we get to 10k community members (i assume he means discord count) he'll add Ellaism network to Trust Wallet, so there will be a Dapp browser on that platform as well when that happens.
limax - Yesterday at 12:17 PM
@kubu00 Bots
ellaismer - Yesterday at 12:18 PM
@kubu00 Just want to say sorry that I constantly missed you message!
limax - Yesterday at 12:18 PM
I think @kubu00 is not online but I know he need some help on tipbot (@ellaismer)
ellaismer - Yesterday at 12:19 PM
Yeah I'll try to get some examples or something and give it to @kubu00. Just try to make everything easier.
limax - Yesterday at 12:19 PM
Ok
I'll start a new round of fork announcements to exchanges and pools
And try to get status updates
EllagramBOT - Yesterday at 12:20 PM
JayGatsbys (in reply to @ellaismer)
  > JayGatsbys: the webs…
Ok ok :thumbsup:
kubu00 - Yesterday at 12:21 PM
Im online ;)(edited)
limax - Yesterday at 12:22 PM
@kubu00 if you have anything to share please do this
Because we did walked fast through our agenda today I have someone to introduce.
@CGPools.io please share your vision with our community
EllagramBOT - Yesterday at 12:24 PM
JayGatsbys
Wanted to ask 1 more time, is it ok for peoples to keep their Ellaism coins on Cryptopia or MyEllaismWallet during the fork?
ellaismer - Yesterday at 12:24 PM
JayGatsbys: Yes.
limax - Yesterday at 12:24 PM
Jay yes is safe
EllagramBOT - Yesterday at 12:24 PM
JayGatsbys
Ok good
CGPools.io - Yesterday at 12:25 PM
We create this game with the main goal to drain tons of new people into crypto through Google Playstore, and bring them
a funny, easy, and positive experience with cypto. We want to show that Crypto about Freedom, and can make a lot of fun - 
and that its not about making money or money at all. Also the Game is for GPU Miners to have some extra fun & rewards.

We'll have 5 Ingame Resources. 
- "Love"(gained through working with other players)
- "Power"(build water,wind,solarpower - will be required by buildings)
- "Wood" (cut trees, used to build buildings)
- "Food" (farms, berries, and so on - used to build buildings)
- "Coins" (Name to be found. Ingame Coins - can only be gained by mining)

And as an extra
- "Flavoured Coins" - Ingame representation of minable coins

 Example. If you mine ELLA on cgpools.io - you get "Coins" (currently 0.1 coin per MH/s per hour)
and you get "ELLA Coins" (ingame). So the "Coins" are an ingame resource, the "ELLA Coins" are only
for decoration. So with "ELLA Coins" you can 1st plant an "ELLA Tree" - which will grow and give you
ELLA Coin as long as you mine. The tree will grow every month up to 12 months. With "ELLA Coins" you
can the build special buildings - to show other people you mined ella.

So in the end - people can build their "Garden" on persistant, 1000player online servers, to show 
what they mine and what coins they like. So e.G an ELLA Miner, that mines 1 Year ELLA with 5 Mining Rigs,
can build a special building to show that (which is only available if you did this).

Last but not least. We'd like to integrate the Resources "Power","Wood",Food" to Blockchain - namely Ellaism
for Beta Phase. Each Resource is represented by a token. Each Player by an Adress. Why this? 
- To demonstrate the power and speed of blockchain
- For us to learn about the technology (we have own software devs)
- To bring blockchain to ordinary people - players of the game will use ingame exchange, block explorers and more
pre-alpha screen
We also kindly ask ELLA Community to provide Models & Ideas für Ellaism Bonus Buildings
EllagramBOT - Yesterday at 12:26 PM
JayGatsbys
Bitcoin (BTC)
$6.624,73 USD (0,18%) 
1,00000000 BTC (0,00%)
ellaismer - Yesterday at 12:26 PM
Looks interesting!
limax - Yesterday at 12:26 PM
@ellaismer they will need your help
They need to implement a token similar to MINING and DONATE
ellaismer - Yesterday at 12:28 PM
Okay sure! I'll get the docs for MINING out soon.
I'm also planning to improve the token contract a little bit. So newly deployed contracts can have more guarantees. :smiley:
limax - Yesterday at 12:28 PM
Also, why not, maybe we can use MINING and DONATE on this too
ellaismer - Yesterday at 12:28 PM
Anyway, this is what pools were asking -- to have their own MINING tokens. :laughing: 
So the docs for that is definitely needed. (Will prioritize this, probably next week or the week after.)(edited)
limax - Yesterday at 12:29 PM
@CGPools.io please let us know what you need from our community and be sure that we will do our best to support your efforts(edited)
CGPools.io - Yesterday at 12:31 PM
thanks a lot :smiley: Yes first the Docs for MINING and DONATE would be awesome, and maybe we can make one meeting or you have some docs/help to create a first RESOURCE Token (e.G Wood) - also as mentioned, we'd like to have 8-10 ELLAISM Bonus Buildings, where we need some ideas / sketches / or 3d models - so these buildings can only be built when you mined ella for a certain amount of time - so one, for 1 year of mining, should be pretty epic :smile:
thats it for now thats a lot for your interest  & help so far
limax - Yesterday at 12:35 PM
I think that we will continue further discussions on working groups and we can call this a short meeting :smile:(edited)
ellaismer - Yesterday at 12:38 PM
Yeah sure! And if you have any questions related to Ellaism, I'll be here to answer (for at least the next hour)!
kubu00 - Yesterday at 12:38 PM
@ellaismer going back to tipbot.sol some error has crept in and you have to get it. when I run the script from tipbot sol I get the error:
"TypeError: Incorrect argument count. Expected '1'. Got '0'"
when I run any other (eg greetings) it works. tested on solcs 4.18 and 4.19
ellaismer - Yesterday at 12:39 PM
Ah I'll take a look. I think I developed it on solc 4.23 or something.
kubu00 - Yesterday at 12:40 PM
you told me to run it on 4.19 :smiley:
on ella-bots
ellaismer - Yesterday at 12:41 PM
Sorry for the confusion:

* We need to use 4.18 or 4.19 to deploy on the mainnet if we want it to work before Byzantium is enabled.
* And it's my mistake to only test this on 4.23 but not the target version. My fault!
And by the way, it's indeed possible to use homestead flag to deploy using newer versions without Byzantium, but just thinking using older version is easier.
kubu00 - Yesterday at 12:42 PM
no problem, still i have problem with unlock account with parity :smiley:
i try to unlock on my node
ellaismer - Yesterday at 12:42 PM
Try --unlock flag, and provide the password using --password.
kubu00 - Yesterday at 12:42 PM
w8
i paste error
limax - Yesterday at 12:43 PM
Just not to forget about this I created @Pool Operators role for further communication related to mining pools. I added a few members already.
kubu00 - Yesterday at 12:44 PM
yyy
where is general support channel ? :/
ellaismer - Yesterday at 12:44 PM
#support
I've just finished https://github.com/ellaism/meta/issues/41
GitHub
Discord Channel Reorg · Issue #41 · ellaism/meta
Why? There were a few people who mentioned they felt there were too many channels. Drafting a proposed structure that seeks to eliminate unused channels and to make the experience for first time vi...
kubu00 - Yesterday at 12:50 PM

root@KUBUNODE1:/opt# parity --unlock 0x8c19c55d487ae3a1ff5df71c293123169b5f62cf --chain ellaism --password /opt/pass.txt
2018-07-07 17:49:22  Starting Parity/v1.10.8-stable-bd20c4589-20180628/x86_64-linux-gnu/rustc1.27.0
2018-07-07 17:49:22  Keys path /root/.local/share/io.parity.ethereum/keys/Ellaism
2018-07-07 17:49:22  DB path /root/.local/share/io.parity.ethereum/chains/ellaism/db/71bf8d0559b0c15c
2018-07-07 17:49:22  Path to dapps /root/.local/share/io.parity.ethereum/dapps
2018-07-07 17:49:22  State DB configuration: fast
2018-07-07 17:49:22  Operating mode: active
2018-07-07 17:49:23  Configured for Ellaism using Ethash engine
Client service error: Client(Database(Error(Msg("IO error: While lock file: /root/.local/share/io.parity.ethereum/chains/ellaism/db/71bf8d0559b0c15c/overlayrecent/db/LOCK: Resource temporarily unavailable"), State { next_error: None, backtrace: None })))

ellaismer - Yesterday at 12:50 PM
Close your other parity instance. :smiley:
kubu00 - Yesterday at 12:50 PM
if i use wrong pass i have : 

No valid password to unlock account 8c19…62cf. Make sure valid password is present in files passed using `--password` or in the configuration file.

parity started using pm2
ellaismer - Yesterday at 12:52 PM
You might want to do: ps aux | grep parity, just to see whether there's parity left running in the background. If so, kill it using kill <pid>!
kubu00 - Yesterday at 12:53 PM
i use only: 

  170  parity --chain ellaism.json --author 0xf48f5cff4b298fe47db71ab6a7f29b1e2fbd8571 --usd-per-tx 0
  171  pm2 start parity -- --chain ellaism.json --author 0xf48f5cff4b298fe47db71ab6a7f29b1e2fbd8571 --usd-per-tx 0

root@KUBUNODE1:/opt/parity-config# ps aux | grep parity
root     13229  0.0  0.0  12784  1004 pts/0    S+   17:53   0:00 grep parity
root     29527 12.4 26.7 633732 271536 ?       Ssl  Jul04 592:44 /usr/bin/parity --chain=ellaism --usd-per-tx 0
root@KUBUNODE1:/opt/parity-config#

ellaismer - Yesterday at 12:54 PM
Yeah kill 29527.
And if it's still there, run kill -9 29527.
kubu00 - Yesterday at 12:54 PM
if i want to use my wallet for script i need to shut down parity ?
ellaismer - Yesterday at 12:55 PM
The command with --unlock just start a new parity node instance, but with the specified account unlocked.
kubu00 - Yesterday at 12:56 PM
hehehe
ok
i try
im green with parity
I thought I had to unlock the account on an active parity instance
@ellaismer will you work on parity ui in the near future?
there is a lot to improve.
ellaismer - Yesterday at 12:57 PM
Yes, definitely! We need to brand that, for the start.
kubu00 - Yesterday at 12:58 PM
I can not remove any wallet from gui :smiley:
on parity ui
@ellaismer if i want to use http provider with web3 or web3.py how to export priv key and set default account for make transaction ?
ellaismer - Yesterday at 1:00 PM
Yeah, so if you run --unlock, currently there's a bug that Parity UI will not show "Wallet" dapp. I don't think there's an easy fix for that right now.
kubu00 - Yesterday at 1:00 PM
i ask because... if i use web3.py for sign transaction i need only transaction and privkey
but if i want to send contract i need to unlock account
i dont know how to use external http provider to deploy contract
ellaismer - Yesterday at 1:01 PM
I don't remember there's a way to do that in Parity. But what you can do is to grab the keystore file, and then import it to myetherwallet/mycrypto, where it will show you the private key.
kubu00 - Yesterday at 1:01 PM
for sending money i need only external http provider and privkey
ellaismer - Yesterday at 1:02 PM
Files are under ~/.local/share/io.parity.ethereum/keys/ellaism, and you just need to look into the name to find the correct json.
Nulligun - Yesterday at 1:03 PM
my parity command line for local dev:    parity --chain=ellaism.json --unlock 0x40a2c8639a317e97e53dfbc0b9242a71f74cb032 --password pass --author 0x40a2c8639a317e97e53dfbc0b9242a71f74cb032 --jsonrpc-cors=all --jsonrpc-apis web3,eth,pubsub,net,parity,parity_pubsub,traces,rpc,secretstore,personal --usd-per-tx=0 --nodiscover
kubu00 - Yesterday at 1:03 PM
TY !!!!!!!!! :smiley:
it probably solves all my problems :smiley: thank you @Nulligun  :smiley:
today's meeting can be closed
:smiley:
I feel like I got a cake :smiley:
EllagramBOT - Yesterday at 1:08 PM
JayGatsbys:
:yum:
kubu00 - Yesterday at 1:09 PM
having a "personal" I can unlock my account by script :smiley: but with an unlocked account in the node, I do not have to unlock it :smiley: ... and life becomes easy(edited)
Nulligun - Yesterday at 1:21 PM
just dont expose that port on a production machine, pretty sure one or more of those rpc endpoints are unsafe
```
