const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "list coin plastic dignity hunt toilet deputy capital mouse slow dismiss boost",
  "https://ropsten.infura.io/v3/7cfcba7a17794fb980410d62cb13c8c1"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account: ", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: "3000000", gasPrice: "170000000000" });

  console.log(interface);
  console.log("Contract deployed to: ", result.options.address);
};

deploy();
