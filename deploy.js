const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'wear make motion report another cream initial trade wagon elegant give refuse',
    'https://rinkeby.infura.io/v3/51e15e8c47ec4686a040b3c946b8cc7b'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data:bytecode, arguments: ['Hi there!']})
        .send({ gas: '1000000', from: accounts[0] });
    
    console.log('Contract deployed to', result.options.address);
};
deploy();