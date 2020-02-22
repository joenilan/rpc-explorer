var btc = require("./coins/btc.js");
var ltc = require("./coins/ltc.js");
var pgn = require("./coins/pgn.js");
var rtm = require("./coins/rtm.js");
var mynt = require("./coins/mynt.js");

module.exports = {
	"BTC": btc,
	"LTC": ltc,
	"PGN": pgn,
	"RTM": rtm,
        "MYNT": mynt,

	"coins":["BTC", "LTC", "PGN", "RTM", "MYNT"]
};
