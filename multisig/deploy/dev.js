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
      "0x0058781f3A0C1a9BE51581CBD8BC41B871c37713", // ellaismer
      "0x00f974Bee5ABA74e57686A17B060Be6dA2222620", // sorpaas
      "0xA2C7779077Edc618C926AB5BA7510877C187cd92" // Community Fund multisig
    ], 2],
  }).send({
    from: "0x0023ce859bD711a271C0ef4578670A1F9fa3F2BC",
    gas: 2000000,
  }).then(function(newContractInstance) {
    console.log(newContractInstance.options.address);
  });
});
