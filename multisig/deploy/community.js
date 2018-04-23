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
      "0x26fE6DF9794b8d578C46006Ebe89bFc35c68F5aB", // Denis Vantur
      "0xbcc3c89701a926aedcaffd519ec4273ee024bc85", // "psdev"
      "0x262FF390464045573550B642F32b698cf3F24585", // Nathan R. Fish
      "0x797fF8b16D332dcC19E75a6aF84A75E3A253246D", // Steve Mulligan
      "0x8722b227C93c0a73c65e9B4b19ABb90E7103683c", // "volt"
      "0x6DEB1d33bD4a02d1Ce89FcC1229484F62862dbe6", // "zenrobot"
      "0x027F37f36ED17a493C777811975f3CB2d11F8946", // "towd"
      "0x52EB48dE2aDBc87d1E1f564CA96151CDA0B9D054", // "limax"
      "0x0B51933c62592c46995d0E01E58cE4571Ab2A05B", // Fernando Diaz Alfaro
      "0x1B4D27704b19Cb121c93ce188284e7df659bEa34", // Sooraj Singh
      "0xe9C2d958E6234c862b4AfBD75b2fd241E9556303", // Ellaism Dev Fund
    ], 6],
  }).send({
    from: "0x0023ce859bD711a271C0ef4578670A1F9fa3F2BC",
    gas: 2000000,
  }).then(function(newContractInstance) {
    console.log(newContractInstance.options.address);
  });
});
