const solc = require('solc');
const Web3 = require('web3');
const fs = require('fs');

var input = fs.readFileSync("MultiSigWallet.sol", "utf8");
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

solc.loadRemoteVersion("v0.4.15+commit.bbb8e64f", function(err, solc_specific) {
  if (err) {
    console.log("Solc failed to load: " + err);
    return;
  }

  var output = solc_specific.compile(input, 1);
  var bytecode = output.contracts[":MultiSigWallet"].bytecode;
  var abi = JSON.parse(output.contracts[":MultiSigWallet"].interface);

  console.log(output.contracts[":MultiSigWallet"].interface);

  var contract = new web3.eth.Contract(abi);
  console.log("Compiling finished, deploying the contract ...");
  contract.deploy({
    data: "0x" + bytecode,
    arguments: [[
      "0xd047bb41e9acc7fd6d3e73c1f29153a6600fdc35", // Shaman
      "0x00Ac1950a54e64fd36ec8562217a2Bfd5c07A3c3", // vega40k
      "0x00b10b9901216eFd5Dc50cd9f922D8aeFf9Ad904", // sncs
      "0x00b7281DB201a00CbEEfC8F596569b0B1df540b7", // iamthebeast
      "0x0666bf13ab1902de7dee4f8193c819118d7e21a6", // osoese
      "0xc393659c2918a64CDfb44d463dE9c747Aa4Ce3f7"  // riddlez666
    ], 4],
  }).send({
    from: "0x0023ce859bD711a271C0ef4578670A1F9fa3F2BC",
    gas: 2000000,
  }).then(function(newContractInstance) {
    console.log(newContractInstance.options.address);
  });
});
