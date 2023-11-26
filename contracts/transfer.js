// Import the required libraries
const Web3 = require('web3');
const ethers = require('ethers');

// Connect to the BSC testnet
const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');

//the contract and provider
const provider = new ethers.providers.Web3Provider(web3.currentProvider);
const signer = provider.getSigner();


const privateKey = '733e38a4d54a42bf105bc93e345de363958bcdf37eaf78374eefdd48041290c9';
const erc20ContractAddress = '0xA26D97Fc115E3aa42Bb696451c05D8B9AF780805';
const recipientAddress = '0xD900FFb0c6e3D982aA34e479331375F3cb351179';
const amountToTransfer = '1';

// Connecting to the BSC testnet using private key
const connectToBscTestnet = async () => {
  if (window.ethereum) {
    await window.ethereum.enable();
  } else {
    alert('Metamask not detected.');
  }
};

// Transfer ERC20 token
const transferTokens = async () => {
  // Load the ERC20 token contract
  const erc20Contract = new ethers.Contract(erc20ContractAddress, ERC20ABI, signer);

  // Get the current account address
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];

  // Transfer the ERC20 tokens to the recipient address
  const tx = await erc20Contract.transfer(recipientAddress, amountToTransfer, { from: account });
  await tx.wait();

  console.log('Transfer successful!');
};

// Connect to the BSC testnet and transfer tokens
const executeTransaction = async () => {
  await connectToBscTestnet();
  await transferTokens();
};

// Execute the transaction
executeTransaction();