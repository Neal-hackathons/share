export const SHOP_CONTRACT_ABI = [
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_id",
				type: "uint256",
			},
		],
		name: "buyTrack",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "deposit",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_price",
				type: "uint256",
			},
		],
		name: "publishTrack",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
		],
		name: "withdraw",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		stateMutability: "payable",
		type: "receive",
	},
	{
		inputs: [],
		name: "getBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "tracks",
		outputs: [
			{
				internalType: "address",
				name: "author",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "price",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "mintCounter",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];
