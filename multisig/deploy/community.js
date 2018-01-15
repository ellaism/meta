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
      "0x00698D7C72e86b5dD81bbf535DBC9790988C1fD8", // Bioaim
      "0xFAa3690A4C661D3bceE763D4337BEA37493065F2", // Buzzkill
      "0xF715A869ADC138739c80746530F7030F73AaD087", // Tbates
      "0x89b09D40c25B05491AAeb236F6e4465D7A74bdb7", // MakeMoneyOz
      "0x349A6EaA5c71f8D9788DAA3A3e8302885BfB903D", // CountCryptula
      "0x1C1AF85d8ec7e3ad9532cdAb9D9EEc55A1bb383E"  // Chris
    ], 4],
  }).send({
    from: "0x0023ce859bD711a271C0ef4578670A1F9fa3F2BC",
    gas: 2000000,
  }).then(function(newContractInstance) {
    console.log(newContractInstance.options.address);
  });
});
