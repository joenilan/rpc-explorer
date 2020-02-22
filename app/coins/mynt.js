var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });
var AssetBase = require("./assetBase.js");

var Mynt = new AssetBase("Mynt", "MYNT", "mynt", ["sat", "satoshi"]);
Mynt.addProperties({
	logoUrl:"/img/logo/mynt.svg",
	siteTitle:"Mynt Explorer",
	siteDescriptionHtml:"<b>Mynt Explorer</b> is <a href='https://github.com/project-mynt/mynt-rpc-explorer). If you run your own [Mynt Full Node](https://github.com/project-mynt/mynt/releases), **MYNT Explorer** can easily run alongside it, communicating via RPC calls. See the project [ReadMe](https://github.com/project-mynt/mynt-rpc-explorer) for a list of features and instructions for running.",
	nodeTitle:"Mynt Full Node",
	nodeUrl:"https://github.com/project-mynt/mynt/releases",
	demoSiteUrl: "https://btc.chaintools.io",
	miningPoolsConfigUrls:[
		"https://raw.githubusercontent.com/RTMcom/Blockchain-Known-Pools/master/pools.json",
		"https://raw.githubusercontent.com/blockchain/Blockchain-Known-Pools/master/pools.json"
	],
	targetBlockTimeSeconds: 60,
	currencyUnitsByName:{
		"MYNT": Mynt.properties.currencyUnits[0],
		"mMYNT": Mynt.properties.currencyUnits[1],
		"pits": Mynt.properties.currencyUnits[2],
		"mynt": Mynt.properties.currencyUnits[3]
	},
	//baseCurrencyUnit: currencyUnits[3],
	//defaultCurrencyUnit:currencyUnits[0],
	//feeSatoshiPerByteBucketMaxima: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 50, 75, 100, 150],
	genesisBlockHash: "000000dc77d1de7f68d5fa1d07a0d0599a617ff31f15a8548e3e17764c2f5082",
	genesisCoinbaseTransactionId: "6fdd00b3ca830d2bb9e96389291c898ebebaa4d2f9f94001e158ce8aca61703e",
	genesisCoinbaseTransaction: {
		"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0804ffff001d02fd04ffffffff0100f2052a01000000434104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac00000000",
		"txid": "6fdd00b3ca830d2bb9e96389291c898ebebaa4d2f9f94001e158ce8aca61703e",
		"hash": "6fdd00b3ca830d2bb9e96389291c898ebebaa4d2f9f94001e158ce8aca61703e",
		"size": 271,
		"vsize": 271,
		"version": 4,
		"confirmations": 1059543,
		"vin": [
			{
				"coinbase": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
				"sequence": 4294967295
			}
		],
		"vout": [
			{
				"value": 5000,
				"n": 0,
				"scriptPubKey": {
					"asm": "04f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446a OP_CHECKSIG",
					"hex": "4104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac",
					"reqSigs": 1,
					"type": "pubkey",
					"addresses": [
						"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
					]
				}
			}
		],
		"blockhash": "6fdd00b3ca830d2bb9e96389291c898ebebaa4d2f9f94001e158ce8aca61703e",
		"time": 1550250434,
		"blocktime": 1550250434
	},
	genesisCoinbaseOutputAddressScripthash:"8b01df4e368ea28f8dc0423bcf7a4923e3a12d307c875e47a0cfbf90b5c39161",
	historicalData: [
		{
			type: "blockheight",
			date: "2019-02-15",
			blockHeight: 0,
			blockHash: "000000dc77d1de7f68d5fa1d07a0d0599a617ff31f15a8548e3e17764c2f5082",
			summary: "The Mynt Genesis Block.",
			alertBodyHtml: "This is the first block in the Mynt blockchain, known as the 'Genesis Block'. This block was mined by Mynt's creator Luke. You can read more about <a href='https://en.bitcoin.it/wiki/Genesis_block'>the genesis block</a>.",
			referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
		},
		{
			type: "tx",
			date: "2019-02-15",
			txid: "6fdd00b3ca830d2bb9e96389291c898ebebaa4d2f9f94001e158ce8aca61703e",
			summary: "The coinbase transaction of the Genesis Block.",
			alertBodyHtml: "This transaction doesn't really exist! ",
			referenceUrl: "https://github.com/bitcoin/bitcoin/issues/3303"
		}

	],

	relatedSites : [
		{name: "Official Website", url:"https://getmynt.io/", imgUrl:"/img/logo/mynt.png"},
		{name: "Discord", url:"https://discord.gg/mSJJRc7", imgUrl:"/img/logo/discord.svg"},
		{name: "Twitter", url:"https://twitter.com/mynt", imgUrl:"/img/logo/twitter.svg"},
		{name: "Github", url:"https://github.com/project-mynt/mynt", imgUrl:"/img/logo/github.png"}
	],
	blockRewardFunction:function(blockHeight) {
		var eras = [ new Decimal8(5000) ];
		for (var i = 1; i < 34; i++) {
			var previous = eras[i - 1];
			eras.push(new Decimal8(previous).dividedBy(2));
		}

//		var index = Math.floor(blockHeight / 2100000);
                var index = Math.floor(blockHeight / 1000000000);

		return eras[index];
	}
});

module.exports = Mynt.properties;
