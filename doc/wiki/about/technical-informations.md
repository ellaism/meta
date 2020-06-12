![Logo](/uploads/logo.png "Logo"){.pagelogo}
<!-- TITLE: Technical Informations -->
<!-- SUBTITLE: Ellaism - A stable network with no premine and no dev fees -->

* Average block time: 14 seconds.
* Expected block time: 10-19 seconds (inclusive).
* Coin generation: 5 Ella per block with 20% reward reduction happens every 10 million blocks.
* Network ID is 0x40.
* Replay protection enabled by default, and chain ID is 0x40.
* No difficulty bomb.
* Most other parameters are the same as Ethereum.

This is an Ethereum network as specified in the yellow paper[^1], with Homestead[^2], EIP150[^3], EIP155[^4], EIP160[^5], ECIP1017[^6]
applied from block 0. 
The era for ECIP1017 is changed to 10 million. Chain id and network id are both `0x40`. Difficulty bomb is diffused from block 0.

Genesis block contains 0 coins (hence no premine). The initial difficulty in genesis block is changed to `0x40000000`, its extra data field is
`0x0000000000000000000000000000000000000000000000000000000000000000`, and its initial nonce is `0x0000000000000040`.
[^1]: https://ethereum.github.io/yellowpaper/paper.pdf
[^2]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2.md
[^3]: https://github.com/ethereum/eips/issues/150
[^4]: https://github.com/ethereum/eips/issues/155
[^5]: https://github.com/ethereum/eips/issues/160
[^6]: https://github.com/ethereumproject/ECIPs/blob/master/ECIPs/ECIP-1017.md
