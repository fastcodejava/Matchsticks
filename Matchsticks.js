	let identity = [{
			"destination": null,
			"add": null,
			"move": null
		}];

	//const SUPERSCRIPT1 = "<sup>1</sup>";
//	const superscripts = {
//	"0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
//	"5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹"
//	};
	const SUPERSCRIPT1 = "¹";
	const PLUS = "+";
	const MINUS = "-";
	const MULTIPLICATION = "x";
    const DIVISION = "/";
    const EQUAL = " = ";
    let conf = {
      "0": [
        {
          "destination": "3",
          "add": -1,
          "move": 1
        },
        {
          "destination": "5",
          "add": -1,
          "move": 1
        },
        {
          "destination": "2",
          "add": -1,
          "move": 1
        },
        {
          "destination": "8",
          "add": 1,
          "move": 0
        },
        {
          "destination": "9",
          "add": 0,
          "move": 1
        },
        {
          "destination": "6",
          "add": 0,
          "move": 1
        },
        {
          "destination": "10",
          "add": 2,
          "move": 0
        },
        {
          "destination": "11",
          "add": -2,
          "move": 0
        }
      ],
      "1": [
        {
          "destination": "1",
          "add": 0,
          "move": 0
        },
        {
          "destination": "3",
          "add": 3,
          "move": 0
        },
        {
          "destination": "7",
          "add": 1,
          "move": 0
        },
        {
          "destination": "4",
          "add": 2,
          "move": 0
        },
        {
          "destination": "11",
          "add": 2,
          "move": 0
        }
      ],
      "2": [
        {
          "destination": "2",
          "add": 0,
          "move": 0
        },
        {
          "destination": "0",
          "add": 1,
          "move": 1
        },
        {
          "destination": "5",
          "add": 0,
          "move": 2
        },
        {
          "destination": "3",
          "add": 0,
          "move": 1
        },
        {
          "destination": "6",
          "add": 1,
          "move": 1
        },
        {
          "destination": "0",
          "add": 1,
          "move": 1
        },
        {
          "destination": "8",
          "add": 2,
          "move": 0
        },
        {
          "destination": "9",
          "add": 1,
          "move": 1
        },
        {
          "destination": "12",
          "add": 2,
          "move": 0
        }
      ],
      "3": [
        {
          "destination": "3",
          "add": 0,
          "move": 0
        },
        {
          "destination": "3",
          "add": 0,
          "move": 0
        },
        {
          "destination": "0",
          "add": 1,
          "move": 1
        },
        {
          "destination": "5",
          "add": 0,
          "move": 1
        },
        {
          "destination": "0",
          "add": 1,
          "move": 1
        },
        {
          "destination": "2",
          "add": 0,
          "move": 1
        },
        {
          "destination": "4",
          "add": -1,
          "move": 1
        },
        {
          "destination": "6",
          "add": 1,
          "move": 1
        },
        {
          "destination": "7",
          "add": -2,
          "move": 0
        },
        {
          "destination": "8",
          "add": 2,
          "move": 0
        },
        {
          "destination": "9",
          "add": 1,
          "move": 0
        },
        {
          "destination": "13",
          "add": 2,
          "move": 0
        }
      ],
      "4": [
        {
          "destination": "4",
          "add": 0,
          "move": 0
        },
        {
          "destination": "11",
          "add": 0,
          "move": 1
        },
        {
          "destination": "1",
          "add": -2,
          "move": 0
        },
        {
          "destination": "3",
          "add": 1,
          "move": 1
        },
        {
          "destination": "5",
          "add": 1,
          "move": 1
        },
        {
          "destination": "7",
          "add": -1,
          "move": 1
        },
        {
          "destination": "9",
          "add": 2,
          "move": 0
        },
        {
          "destination": "14",
          "add": 2,
          "move": 0
        }
      ],
      "5": [
        {
          "destination": "5",
          "add": 0,
          "move": 0
        },
        {
          "destination": "0",
          "add": 1,
          "move": 1
        },
        {
          "destination": "2",
          "add": 0,
          "move": 2
        },
        {
          "destination": "3",
          "add": 0,
          "move": 1
        },
        {
          "destination": "4",
          "add": -1,
          "move": 1
        },
        {
          "destination": "6",
          "add": 1,
          "move": 0
        },
        {
          "destination": "7",
          "add": -2,
          "move": 1
        },
        {
          "destination": "8",
          "add": 2,
          "move": 0
        },
        {
          "destination": "9",
          "add": 1,
          "move": 0
        },
        {
          "destination": "15",
          "add": 2,
          "move": 0
        }
      ],
      "6": [
        {
          "destination": "6",
          "add": 0,
          "move": 0
        },
        {
          "destination": "0",
          "add": 0,
          "move": 1
        },
        {
          "destination": "3",
          "add": -1,
          "move": 1
        },
        {
          "destination": "2",
          "add": -1,
          "move": 1
        },
        {
          "destination": "5",
          "add": -1,
          "move": 0
        },
        {
          "destination": "8",
          "add": 1,
          "move": 0
        },
        {
          "destination": "9",
          "add": 0,
          "move": 1
        },
        {
          "destination": "15",
          "add": 1,
          "move": 1
        },
        {
          "destination": "16",
          "add": 2,
          "move": 0
        }
      ],
      "7": [
        {
          "destination": "7",
          "add": 0,
          "move": 0
        },
        {
          "destination": "1",
          "add": -1,
          "move": 0
        },
        {
          "destination": "3",
          "add": 2,
          "move": 0
        },
        {
          "destination": "4",
          "add": 1,
          "move": 1
        },
        {
          "destination": "11",
          "add": 1,
          "move": 1
        },
        {
          "destination": "17",
          "add": 2,
          "move": 0
        }
      ],
      "8": [
        {
          "destination": "8",
          "add": 0,
          "move": 0
        },
        {
          "destination": "0",
          "add": -1,
          "move": 0
        },
        {
          "destination": "5",
          "add": -2,
          "move": 0
        },
        {
          "destination": "2",
          "add": -2,
          "move": 0
        },
        {
          "destination": "3",
          "add": -2,
          "move": 0
        },
        {
          "destination": "6",
          "add": -1,
          "move": 0
        },
        {
          "destination": "9",
          "add": -1,
          "move": 0
        },
        {
          "destination": "10",
          "add": 1,
          "move": 1
        },
        {
          "destination": "12",
          "add": 0,
          "move": 2
        },
        {
          "destination": "13",
          "add": 0,
          "move": 2
        },
        {
          "destination": "15",
          "add": 0,
          "move": 2
        },
        {
          "destination": "16",
          "add": 1,
          "move": 1
        },
        {
          "destination": "18",
          "add": 2,
          "move": 0
        },
        {
          "destination": "19",
          "add": 1,
          "move": 1
        }
      ],
      "9": [
        {
          "destination": "9",
          "add": 0,
          "move": 0
        },
        {
          "destination": "0",
          "add": 0,
          "move": 1
        },
        {
          "destination": "3",
          "add": -1,
          "move": 0
        },
        {
          "destination": "2",
          "add": -1,
          "move": 1
        },
        {
          "destination": "4",
          "add": -2,
          "move": 0
        },
        {
          "destination": "5",
          "add": -1,
          "move": 0
        },
        {
          "destination": "6",
          "add": 0,
          "move": 1
        },
        {
          "destination": "8",
          "add": 1,
          "move": 0
        },
        {
          "destination": "13",
          "add": 1,
          "move": 1
        },
        {
          "destination": "15",
          "add": 1,
          "move": 1
        },
        {
          "destination": "14",
          "add": 0,
          "move": 2
        },
        {
          "destination": "19",
          "add": 2,
          "move": 0
        }
      ],
      "10": [
        {
          "destination": "0",
          "add": -2,
          "move": 0
        },
        {
          "destination": "8",
          "add": -1,
          "move": 1
        },
        {
          "destination": "0",
          "add": -2,
          "move": 0
        }
      ],
      "11": [
        {
          "destination": "4",
          "add": 0,
          "move": 1
        },
        {
          "destination": "7",
          "add": -1,
          "move": 1
        },
        {
          "destination": "0",
          "add": 2,
          "move": 0
        },
        {
          "destination": "1",
          "add": -2,
          "move": 0
        }
      ],
      "12": [
        {
          "destination": "8",
          "add": 0,
          "move": 2
        },
        {
          "destination": "6",
          "add": -1,
          "move": 2
        },
        {
          "destination": "9",
          "add": -1,
          "move": 2
        }
      ],
      "13": [
        {
          "destination": "13",
          "add": 0,
          "move": 0
        },
        {
          "destination": "9",
          "add": -1,
          "move": 1
        },
        {
          "destination": "8",
          "add": 0,
          "move": 2
        },
        {
          "destination": "6",
          "add": -1,
          "move": 2
        }
      ],
      "14": [
        {
          "destination": "9",
          "add": 0,
          "move": 2
        },
        {
          "destination": "5",
          "add": -1,
          "move": 2
        }
      ],
      "15": [
        {
          "destination": "6",
          "add": -1,
          "move": 1
        },
        {
          "destination": "9",
          "add": -1,
          "move": 1
        }
      ],
      "16": [
        {
          "destination": "8",
          "add": -1,
          "move": 1
        }
      ],
      "17": [
        {
          "destination": "11",
          "add": -1,
          "move": 2
        },
        {
          "destination": "4",
          "add": -1,
          "move": 1
        }
      ],
      "18": [
        {
          "destination": "8",
          "add": -2,
          "move": 0
        }
      ],
      "19": [
        {
          "destination": "8",
          "add": -1,
          "move": 1
        },
        {
          "destination": "9",
          "add": -2,
          "move": 0
        }
      ],
      "20": [
        {
          "destination": "30",
          "add": 0,
          "move": 1
        },
        {
          "destination": "50",
          "add": 0,
          "move": 2
        }
      ],
      "21": [
        {
          "destination": "31",
          "add": 0,
          "move": 1
        },
        {
          "destination": "51",
          "add": 0,
          "move": 2
        }
      ],
      "22": [
        {
          "destination": "32",
          "add": 0,
          "move": 1
        },
        {
          "destination": "52",
          "add": 0,
          "move": 2
        }
      ],
      "23": [
        {
          "destination": "33",
          "add": 0,
          "move": 1
        },
        {
          "destination": "53",
          "add": 0,
          "move": 2
        }
      ],
      "24": [
        {
          "destination": "34",
          "add": 0,
          "move": 1
        },
        {
          "destination": "54",
          "add": 0,
          "move": 2
        }
      ],
      "25": [
        {
          "destination": "35",
          "add": 0,
          "move": 1
        },
        {
          "destination": "55",
          "add": 0,
          "move": 2
        }
      ],
      "26": [
        {
          "destination": "36",
          "add": 0,
          "move": 1
        },
        {
          "destination": "56",
          "add": 0,
          "move": 2
        }
      ],
      "27": [
        {
          "destination": "37",
          "add": 0,
          "move": 1
        },
        {
          "destination": "57",
          "add": 0,
          "move": 2
        }
      ],
      "28": [
        {
          "destination": "38",
          "add": 0,
          "move": 1
        },
        {
          "destination": "58",
          "add": 0,
          "move": 2
        }
      ],
      "29": [
        {
          "destination": "39",
          "add": 0,
          "move": 1
        },
        {
          "destination": "59",
          "add": 0,
          "move": 2
        }
      ],
      "30": [
        {
          "destination": "20",
          "add": 0,
          "move": 1
        },
        {
          "destination": "50",
          "add": 0,
          "move": 1
        },
        {
          "destination": "80",
          "add": 0,
          "move": 2
        }
      ],
      "31": [
        {
          "destination": "21",
          "add": 0,
          "move": 1
        },
        {
          "destination": "51",
          "add": 0,
          "move": 1
        },
        {
          "destination": "81",
          "add": 0,
          "move": 2
        }
      ],
      "32": [
        {
          "destination": "22",
          "add": 0,
          "move": 1
        },
        {
          "destination": "52",
          "add": 0,
          "move": 1
        },
        {
          "destination": "82",
          "add": 0,
          "move": 2
        }
      ],
      "33": [
        {
          "destination": "23",
          "add": 0,
          "move": 1
        },
        {
          "destination": "53",
          "add": 0,
          "move": 1
        },
        {
          "destination": "83",
          "add": 0,
          "move": 2
        }
      ],
      "34": [
        {
          "destination": "24",
          "add": 0,
          "move": 1
        },
        {
          "destination": "54",
          "add": 0,
          "move": 1
        },
        {
          "destination": "84",
          "add": 0,
          "move": 2
        }
      ],
      "35": [
        {
          "destination": "25",
          "add": 0,
          "move": 1
        },
        {
          "destination": "55",
          "add": 0,
          "move": 1
        },
        {
          "destination": "85",
          "add": 0,
          "move": 2
        }
      ],
      "36": [
        {
          "destination": "26",
          "add": 0,
          "move": 1
        },
        {
          "destination": "56",
          "add": 0,
          "move": 1
        },
        {
          "destination": "86",
          "add": 0,
          "move": 2
        }
      ],
      "37": [
        {
          "destination": "27",
          "add": 0,
          "move": 1
        },
        {
          "destination": "57",
          "add": 0,
          "move": 1
        },
        {
          "destination": "87",
          "add": 0,
          "move": 2
        }
      ],
      "38": [
        {
          "destination": "28",
          "add": 0,
          "move": 1
        },
        {
          "destination": "58",
          "add": 0,
          "move": 1
        },
        {
          "destination": "88",
          "add": 0,
          "move": 2
        }
      ],
      "39": [
        {
          "destination": "29",
          "add": 0,
          "move": 1
        },
        {
          "destination": "59",
          "add": 0,
          "move": 1
        },
        {
          "destination": "89",
          "add": 0,
          "move": 2
        }
      ],
      "40": [
        {
          "destination": "10",
          "add": -2,
          "move": 0
        },
        {
          "destination": "70",
          "add": -1,
          "move": 1
        }
      ],
      "41": [
        {
          "destination": "11",
          "add": -2,
          "move": 0
        },
        {
          "destination": "71",
          "add": -1,
          "move": 1
        }
      ],
      "42": [
        {
          "destination": "12",
          "add": -2,
          "move": 0
        },
        {
          "destination": "72",
          "add": -1,
          "move": 1
        }
      ],
      "43": [
        {
          "destination": "13",
          "add": -2,
          "move": 0
        },
        {
          "destination": "73",
          "add": -1,
          "move": 1
        }
      ],
      "44": [
        {
          "destination": "14",
          "add": -2,
          "move": 0
        },
        {
          "destination": "74",
          "add": -1,
          "move": 1
        }
      ],
      "45": [
        {
          "destination": "15",
          "add": -2,
          "move": 0
        },
        {
          "destination": "75",
          "add": -1,
          "move": 1
        }
      ],
      "46": [
        {
          "destination": "16",
          "add": -2,
          "move": 0
        },
        {
          "destination": "76",
          "add": -1,
          "move": 1
        }
      ],
      "47": [
        {
          "destination": "17",
          "add": -2,
          "move": 0
        },
        {
          "destination": "77",
          "add": -1,
          "move": 1
        }
      ],
      "48": [
        {
          "destination": "18",
          "add": -2,
          "move": 0
        },
        {
          "destination": "78",
          "add": -1,
          "move": 1
        }
      ],
      "49": [
        {
          "destination": "19",
          "add": -2,
          "move": 0
        },
        {
          "destination": "79",
          "add": -1,
          "move": 1
        }
      ],
      "50": [
        {
          "destination": "00",
          "add": 1,
          "move": 1
        },
        {
          "destination": "30",
          "add": 0,
          "move": 1
        },
        {
          "destination": "40",
          "add": -1,
          "move": 1
        },
        {
          "destination": "20",
          "add": 0,
          "move": 2
        }
      ],
      "51": [
        {
          "destination": "01",
          "add": 1,
          "move": 1
        },
        {
          "destination": "31",
          "add": 0,
          "move": 1
        },
        {
          "destination": "41",
          "add": -1,
          "move": 1
        },
        {
          "destination": "21",
          "add": 0,
          "move": 2
        }
      ],
      "52": [
        {
          "destination": "02",
          "add": 1,
          "move": 1
        },
        {
          "destination": "32",
          "add": 0,
          "move": 1
        },
        {
          "destination": "42",
          "add": -1,
          "move": 1
        },
        {
          "destination": "22",
          "add": 0,
          "move": 2
        }
      ],
      "53": [
        {
          "destination": "03",
          "add": 1,
          "move": 1
        },
        {
          "destination": "43",
          "add": -1,
          "move": 1
        },
        {
          "destination": "33",
          "add": 0,
          "move": 1
        },
        {
          "destination": "23",
          "add": 0,
          "move": 2
        }
      ],
      "54": [
        {
          "destination": "04",
          "add": 1,
          "move": 1
        },
        {
          "destination": "44",
          "add": -1,
          "move": 1
        },
        {
          "destination": "34",
          "add": 0,
          "move": 1
        },
        {
          "destination": "24",
          "add": 0,
          "move": 2
        }
      ],
      "55": [
        {
          "destination": "05",
          "add": 1,
          "move": 1
        },
        {
          "destination": "35",
          "add": 0,
          "move": 1
        },
        {
          "destination": "45",
          "add": -1,
          "move": 1
        },
        {
          "destination": "25",
          "add": 0,
          "move": 2
        }
      ],
      "56": [
        {
          "destination": "05",
          "add": 1,
          "move": 1
        },
        {
          "destination": "46",
          "add": -1,
          "move": 1
        },
        {
          "destination": "36",
          "add": 0,
          "move": 1
        },
        {
          "destination": "26",
          "add": 0,
          "move": 2
        }
      ],
      "57": [
        {
          "destination": "07",
          "add": 1,
          "move": 1
        },
        {
          "destination": "47",
          "add": -1,
          "move": 1
        },
        {
          "destination": "37",
          "add": 0,
          "move": 1
        },
        {
          "destination": "27",
          "add": 0,
          "move": 2
        }
      ],
      "58": [
        {
          "destination": "08",
          "add": 1,
          "move": 1
        },
        {
          "destination": "48",
          "add": -1,
          "move": 1
        },
        {
          "destination": "38",
          "add": 0,
          "move": 1
        },
        {
          "destination": "28",
          "add": 0,
          "move": 2
        }
      ],
      "59": [
        {
          "destination": "09",
          "add": 1,
          "move": 1
        },
        {
          "destination": "39",
          "add": 0,
          "move": 1
        },
        {
          "destination": "49",
          "add": -1,
          "move": 1
        },
        {
          "destination": "29",
          "add": 0,
          "move": 2
        }
      ],
      "60": [
        {
          "destination": "00",
          "add": 0,
          "move": 1
        },
        {
          "destination": "50",
          "add": -1,
          "move": 0
        },
        {
          "destination": "30",
          "add": -1,
          "move": 1
        },
        {
          "destination": "20",
          "add": -1,
          "move": 1
        },
        {
          "destination": "80",
          "add": 1,
          "move": 0
        },
        {
          "destination": "90",
          "add": 0,
          "move": 1
        }
      ],
      "61": [
        {
          "destination": "01",
          "add": 0,
          "move": 1
        },
        {
          "destination": "51",
          "add": -1,
          "move": 0
        },
        {
          "destination": "21",
          "add": -1,
          "move": 1
        },
        {
          "destination": "31",
          "add": -1,
          "move": 1
        },
        {
          "destination": "81",
          "add": 1,
          "move": 0
        },
        {
          "destination": "91",
          "add": 0,
          "move": 1
        }
      ],
      "62": [
        {
          "destination": "02",
          "add": 0,
          "move": 1
        },
        {
          "destination": "52",
          "add": -1,
          "move": 0
        },
        {
          "destination": "22",
          "add": -1,
          "move": 1
        },
        {
          "destination": "32",
          "add": -1,
          "move": 1
        },
        {
          "destination": "82",
          "add": 1,
          "move": 0
        },
        {
          "destination": "92",
          "add": 0,
          "move": 1
        }
      ],
      "63": [
        {
          "destination": "03",
          "add": 0,
          "move": 1
        },
        {
          "destination": "23",
          "add": -1,
          "move": 1
        },
        {
          "destination": "53",
          "add": -1,
          "move": 0
        },
        {
          "destination": "33",
          "add": -1,
          "move": 1
        },
        {
          "destination": "83",
          "add": 1,
          "move": 0
        },
        {
          "destination": "93",
          "add": 0,
          "move": 1
        }
      ],
      "64": [
        {
          "destination": "04",
          "add": 0,
          "move": 1
        },
        {
          "destination": "54",
          "add": -1,
          "move": 0
        },
        {
          "destination": "24",
          "add": -1,
          "move": 1
        },
        {
          "destination": "34",
          "add": -1,
          "move": 1
        },
        {
          "destination": "84",
          "add": 1,
          "move": 0
        },
        {
          "destination": "94",
          "add": 0,
          "move": 1
        }
      ],
      "65": [
        {
          "destination": "05",
          "add": 0,
          "move": 1
        },
        {
          "destination": "55",
          "add": -1,
          "move": 0
        },
        {
          "destination": "25",
          "add": -1,
          "move": 1
        },
        {
          "destination": "35",
          "add": -1,
          "move": 1
        },
        {
          "destination": "85",
          "add": 1,
          "move": 0
        },
        {
          "destination": "95",
          "add": 0,
          "move": 1
        }
      ],
      "66": [
        {
          "destination": "06",
          "add": 0,
          "move": 1
        },
        {
          "destination": "56",
          "add": -1,
          "move": 0
        },
        {
          "destination": "26",
          "add": -1,
          "move": 1
        },
        {
          "destination": "36",
          "add": -1,
          "move": 1
        },
        {
          "destination": "86",
          "add": 1,
          "move": 0
        },
        {
          "destination": "96",
          "add": 0,
          "move": 1
        }
      ],
      "67": [
        {
          "destination": "07",
          "add": 0,
          "move": 1
        },
        {
          "destination": "57",
          "add": -1,
          "move": 0
        },
        {
          "destination": "27",
          "add": -1,
          "move": 1
        },
        {
          "destination": "37",
          "add": -1,
          "move": 1
        },
        {
          "destination": "87",
          "add": 1,
          "move": 0
        },
        {
          "destination": "97",
          "add": 0,
          "move": 1
        }
      ],
      "68": [
        {
          "destination": "08",
          "add": 0,
          "move": 1
        },
        {
          "destination": "58",
          "add": -1,
          "move": 0
        },
        {
          "destination": "28",
          "add": -1,
          "move": 1
        },
        {
          "destination": "38",
          "add": -1,
          "move": 1
        },
        {
          "destination": "88",
          "add": 1,
          "move": 0
        },
        {
          "destination": "98",
          "add": 0,
          "move": 1
        }
      ],
      "69": [
        {
          "destination": "09",
          "add": 0,
          "move": 1
        },
        {
          "destination": "59",
          "add": -1,
          "move": 0
        },
        {
          "destination": "29",
          "add": -1,
          "move": 1
        },
        {
          "destination": "39",
          "add": -1,
          "move": 1
        },
        {
          "destination": "89",
          "add": 1,
          "move": 0
        },
        {
          "destination": "99",
          "add": 0,
          "move": 1
        }
      ],
      "70": [
        {
          "destination": "10",
          "add": -1,
          "move": 0
        },
        {
          "destination": "30",
          "add": 2,
          "move": 0
        }
      ],
      "71": [
        {
          "destination": "11",
          "add": -1,
          "move": 0
        },
        {
          "destination": "31",
          "add": 2,
          "move": 0
        }
      ],
      "72": [
        {
          "destination": "12",
          "add": -1,
          "move": 0
        },
        {
          "destination": "32",
          "add": 2,
          "move": 0
        }
      ],
      "73": [
        {
          "destination": "13",
          "add": -1,
          "move": 0
        },
        {
          "destination": "33",
          "add": 2,
          "move": 0
        }
      ],
      "74": [
        {
          "destination": "14",
          "add": -1,
          "move": 0
        },
        {
          "destination": "34",
          "add": 2,
          "move": 0
        }
      ],
      "75": [
        {
          "destination": "15",
          "add": -1,
          "move": 0
        },
        {
          "destination": "35",
          "add": 2,
          "move": 0
        }
      ],
      "76": [
        {
          "destination": "16",
          "add": -1,
          "move": 0
        },
        {
          "destination": "36",
          "add": 2,
          "move": 0
        }
      ],
      "77": [
        {
          "destination": "17",
          "add": -1,
          "move": 0
        },
        {
          "destination": "37",
          "add": 2,
          "move": 0
        }
      ],
      "78": [
        {
          "destination": "18",
          "add": -1,
          "move": 0
        },
        {
          "destination": "38",
          "add": 2,
          "move": 0
        }
      ],
      "79": [
        {
          "destination": "19",
          "add": -1,
          "move": 0
        },
        {
          "destination": "39",
          "add": 2,
          "move": 0
        }
      ],
      "80": [
        {
          "destination": "00",
          "add": -1,
          "move": 0
        },
        {
          "destination": "30",
          "add": -2,
          "move": 0
        },
        {
          "destination": "20",
          "add": -2,
          "move": 0
        },
        {
          "destination": "50",
          "add": -2,
          "move": 0
        },
        {
          "destination": "60",
          "add": -1,
          "move": 0
        },
        {
          "destination": "90",
          "add": -1,
          "move": 0
        }
      ],
      "81": [
        {
          "destination": "01",
          "add": -1,
          "move": 0
        },
        {
          "destination": "31",
          "add": -2,
          "move": 0
        },
        {
          "destination": "21",
          "add": -2,
          "move": 0
        },
        {
          "destination": "51",
          "add": -2,
          "move": 0
        },
        {
          "destination": "61",
          "add": -1,
          "move": 0
        },
        {
          "destination": "91",
          "add": -1,
          "move": 0
        }
      ],
      "82": [
        {
          "destination": "02",
          "add": -1,
          "move": 0
        },
        {
          "destination": "32",
          "add": -2,
          "move": 0
        },
        {
          "destination": "22",
          "add": -2,
          "move": 1
        },
        {
          "destination": "52",
          "add": -2,
          "move": 0
        },
        {
          "destination": "62",
          "add": -1,
          "move": 0
        },
        {
          "destination": "92",
          "add": -1,
          "move": 0
        }
      ],
      "83": [
        {
          "destination": "03",
          "add": -1,
          "move": 0
        },
        {
          "destination": "33",
          "add": -2,
          "move": 0
        },
        {
          "destination": "23",
          "add": -2,
          "move": 1
        },
        {
          "destination": "53",
          "add": -2,
          "move": 0
        },
        {
          "destination": "63",
          "add": -1,
          "move": 0
        },
        {
          "destination": "93",
          "add": -1,
          "move": 0
        }
      ],
      "84": [
        {
          "destination": "04",
          "add": -1,
          "move": 0
        },
        {
          "destination": "34",
          "add": -2,
          "move": 0
        },
        {
          "destination": "24",
          "add": -2,
          "move": 0
        },
        {
          "destination": "54",
          "add": -2,
          "move": 0
        },
        {
          "destination": "64",
          "add": -1,
          "move": 0
        },
        {
          "destination": "94",
          "add": -1,
          "move": 0
        }
      ],
      "85": [
        {
          "destination": "05",
          "add": -1,
          "move": 0
        },
        {
          "destination": "35",
          "add": -2,
          "move": 0
        },
        {
          "destination": "25",
          "add": -2,
          "move": 0
        },
        {
          "destination": "55",
          "add": -2,
          "move": 0
        },
        {
          "destination": "65",
          "add": -1,
          "move": 0
        },
        {
          "destination": "95",
          "add": -1,
          "move": 0
        }
      ],
      "86": [
        {
          "destination": "06",
          "add": -1,
          "move": 0
        },
        {
          "destination": "36",
          "add": -2,
          "move": 0
        },
        {
          "destination": "26",
          "add": -2,
          "move": 0
        },
        {
          "destination": "56",
          "add": -2,
          "move": 0
        },
        {
          "destination": "66",
          "add": -1,
          "move": 0
        },
        {
          "destination": "96",
          "add": -1,
          "move": 0
        }
      ],
      "87": [
        {
          "destination": "07",
          "add": -1,
          "move": 0
        },
        {
          "destination": "37",
          "add": -2,
          "move": 0
        },
        {
          "destination": "27",
          "add": -2,
          "move": 0
        },
        {
          "destination": "57",
          "add": -2,
          "move": 0
        },
        {
          "destination": "67",
          "add": -1,
          "move": 0
        },
        {
          "destination": "97",
          "add": -1,
          "move": 0
        }
      ],
      "88": [
        {
          "destination": "08",
          "add": -1,
          "move": 0
        },
        {
          "destination": "38",
          "add": -2,
          "move": 0
        },
        {
          "destination": "28",
          "add": -2,
          "move": 0
        },
        {
          "destination": "58",
          "add": -2,
          "move": 0
        },
        {
          "destination": "68",
          "add": -1,
          "move": 0
        },
        {
          "destination": "98",
          "add": -1,
          "move": 0
        }
      ],
      "89": [
        {
          "destination": "09",
          "add": -1,
          "move": 0
        },
        {
          "destination": "39",
          "add": -2,
          "move": 0
        },
        {
          "destination": "29",
          "add": -2,
          "move": 0
        },
        {
          "destination": "59",
          "add": -2,
          "move": 0
        },
        {
          "destination": "69",
          "add": -1,
          "move": 0
        },
        {
          "destination": "99",
          "add": -1,
          "move": 0
        }
      ],
      "90": [
        {
          "destination": "00",
          "add": 0,
          "move": 1
        },
        {
          "destination": "30",
          "add": -1,
          "move": 0
        },
        {
          "destination": "20",
          "add": -1,
          "move": 1
        },
        {
          "destination": "40",
          "add": -2,
          "move": 0
        },
        {
          "destination": "50",
          "add": -1,
          "move": 0
        },
        {
          "destination": "60",
          "add": 0,
          "move": 1
        },
        {
          "destination": "80",
          "add": 1,
          "move": 0
        }
      ],
      "91": [
        {
          "destination": "01",
          "add": 0,
          "move": 1
        },
        {
          "destination": "31",
          "add": -1,
          "move": 0
        },
        {
          "destination": "21",
          "add": -1,
          "move": 1
        },
        {
          "destination": "41",
          "add": -2,
          "move": 0
        },
        {
          "destination": "51",
          "add": -1,
          "move": 0
        },
        {
          "destination": "61",
          "add": 0,
          "move": 1
        },
        {
          "destination": "81",
          "add": 1,
          "move": 0
        }
      ],
      "92": [
        {
          "destination": "02",
          "add": 0,
          "move": 1
        },
        {
          "destination": "32",
          "add": -1,
          "move": 0
        },
        {
          "destination": "22",
          "add": -1,
          "move": 1
        },
        {
          "destination": "42",
          "add": -2,
          "move": 0
        },
        {
          "destination": "52",
          "add": -1,
          "move": 0
        },
        {
          "destination": "62",
          "add": 0,
          "move": 1
        },
        {
          "destination": "82",
          "add": 1,
          "move": 0
        }
      ],
      "93": [
        {
          "destination": "03",
          "add": 0,
          "move": 1
        },
        {
          "destination": "33",
          "add": -1,
          "move": 0
        },
        {
          "destination": "23",
          "add": -1,
          "move": 1
        },
        {
          "destination": "43",
          "add": -2,
          "move": 0
        },
        {
          "destination": "53",
          "add": -1,
          "move": 0
        },
        {
          "destination": "63",
          "add": 0,
          "move": 1
        },
        {
          "destination": "83",
          "add": 1,
          "move": 0
        }
      ],
      "94": [
        {
          "destination": "04",
          "add": 0,
          "move": 1
        },
        {
          "destination": "34",
          "add": -1,
          "move": 0
        },
        {
          "destination": "24",
          "add": -1,
          "move": 1
        },
        {
          "destination": "44",
          "add": -2,
          "move": 0
        },
        {
          "destination": "54",
          "add": -1,
          "move": 0
        },
        {
          "destination": "64",
          "add": 0,
          "move": 1
        },
        {
          "destination": "84",
          "add": 1,
          "move": 0
        }
      ],
      "95": [
        {
          "destination": "05",
          "add": 0,
          "move": 1
        },
        {
          "destination": "35",
          "add": -1,
          "move": 0
        },
        {
          "destination": "25",
          "add": -1,
          "move": 1
        },
        {
          "destination": "45",
          "add": -2,
          "move": 0
        },
        {
          "destination": "55",
          "add": -1,
          "move": 0
        },
        {
          "destination": "65",
          "add": 0,
          "move": 1
        },
        {
          "destination": "85",
          "add": 1,
          "move": 0
        }
      ],
      "96": [
        {
          "destination": "06",
          "add": 0,
          "move": 1
        },
        {
          "destination": "36",
          "add": -1,
          "move": 0
        },
        {
          "destination": "26",
          "add": -1,
          "move": 1
        },
        {
          "destination": "46",
          "add": -2,
          "move": 0
        },
        {
          "destination": "56",
          "add": -1,
          "move": 0
        },
        {
          "destination": "66",
          "add": 0,
          "move": 1
        },
        {
          "destination": "86",
          "add": 1,
          "move": 0
        }
      ],
      "97": [
        {
          "destination": "07",
          "add": 0,
          "move": 1
        },
        {
          "destination": "37",
          "add": -1,
          "move": 0
        },
        {
          "destination": "27",
          "add": -1,
          "move": 1
        },
        {
          "destination": "47",
          "add": -2,
          "move": 0
        },
        {
          "destination": "57",
          "add": -1,
          "move": 0
        },
        {
          "destination": "67",
          "add": 0,
          "move": 1
        },
        {
          "destination": "87",
          "add": 1,
          "move": 0
        }
      ],
      "98": [
        {
          "destination": "08",
          "add": 0,
          "move": 1
        },
        {
          "destination": "38",
          "add": -1,
          "move": 0
        },
        {
          "destination": "28",
          "add": -1,
          "move": 1
        },
        {
          "destination": "48",
          "add": -2,
          "move": 0
        },
        {
          "destination": "58",
          "add": -1,
          "move": 0
        },
        {
          "destination": "68",
          "add": 0,
          "move": 1
        },
        {
          "destination": "88",
          "add": 1,
          "move": 0
        }
      ],
      "99": [
        {
          "destination": "09",
          "add": 0,
          "move": 1
        },
        {
          "destination": "39",
          "add": -1,
          "move": 0
        },
        {
          "destination": "29",
          "add": -1,
          "move": 1
        },
        {
          "destination": "49",
          "add": -2,
          "move": 0
        },
        {
          "destination": "59",
          "add": -1,
          "move": 0
        },
        {
          "destination": "69",
          "add": 0,
          "move": 1
        },
        {
          "destination": "89",
          "add": 1,
          "move": 0
        }
      ]
    };

    const confSigns = {
      "+": [
        {
          "destination": "+",
          "add": 0,
          "move": 0
        },
        {
          "destination": "-",
          "add": -1,
          "move": 0
        },
        {
          "destination": "/",
          "add": -1,
          "move": 1
        },
        {
          "destination": "x",
          "add": 0,
          "move": 2
        }
      ],
      "-": [
        {
          "destination": "-",
          "add": 0,
          "move": 0
        },
        {
          "destination": "+",
          "add": 1,
          "move": 0
        },
        {
          "destination": "/",
          "add": 0,
          "move": 1
        },
        {
          "destination": "x",
          "add": 1,
          "move": 1
        },
        {
          "destination": null,
          "add": -1,
          "move": 0
        }
      ],
      "x": [
        {
          "destination": "x",
          "add": 0,
          "move": 0
        },
        {
          "destination": "+",
          "add": 0,
          "move": 2
        },
        {
          "destination": "/",
          "add": -1,
          "move": 0
        },
        {
          "destination": "-",
          "add": -1,
          "move": 1
        }
      ],
      "/": [
        {
          "destination": "/",
          "add": 0,
          "move": 0
        },
        {
          "destination": "+",
          "add": 1,
          "move": 1
        },
        {
          "destination": "-",
          "add": 0,
          "move": 1
        },
        {
          "destination": "x",
          "add": 1,
          "move": 0
        }
      ],
      "=": [
        {
          "destination": "=",
          "add": 0,
          "move": 0
        },
        {
          "destination": "+",
          "add": 0,
          "move": 1
        },
        {
          "destination": "-",
          "add": -1,
          "move": 0
        },
        {
          "destination": "x",
          "add": 0,
          "move": 2
        }
      ]
    };

    // window.onload = function () {
    //   addIdentityAll(conf);
    //   for (let i = 1; i < 100; i++) {
    //     conf = addToConfiguration(conf, i);
    //   }
    //
    //   addIdentityAll(conf);
    //   addToConfigurationFlipDigits(conf);
    //   addToConfigurationOne(conf);
    //   addToConfigurationSeven(conf);
    //   addCompositMapping(conf);
    //   addToConfigurationNumbersWithOne(conf);
	//   // console.log(JSON.stringify(conf["18"]));
    // };

    function solvePuzzle() {
      // const text = "5 / 9 - 8 = 6";
      // const text = "9 x 2 - 5 = 7";
      // const text = "5 x 3 + 1 = 8";
      // const text = "4 - 3 x 7 = 7";
      // const text = "8 - 8 x 2 = 10";
      // const text = "6 + 3 x 2 = 1";
      // const text = "5 x 2 / 8 = 2";
      // const text = "2 / 2 + 9 = 7";
      // const text = "8 - 3 + 7 = 6";
      // const text = "9 x 2 - 5 = 7";
      // const text = "4 x 3 + 9 = 8";
      // const text = "5 - 9 + 5 = 9";
      // const text = "7 x 2 + 6 = 0";
      // const text = "11 + 5 - 0 = 7";
      // const text = "4 - 9 + 9 = 2";
      // const text = "2 - 5 / 2 = 13";
      // const text = "3 x 3 + 4 = 7";
      // const text = "8 x 2 - 8 = 1";
      // const text = "4 + 3 + 6 = 9";
      // const text = "9 x 3 + 5 = 9";
      // const text = "9 x 5 + 5 = 9";
      // const text = "9 + 2 - 6 = 2";
      // const text = "5 x 2 - 5 = 45";
      // const text = "3 / 3 + 5 = 4";
      // const text = "6 + 2 x 2 = 8";
      // const text = "11 - 9 - 3 = 2";
      // const text = "9 + 6 + 1 = 8";
      // const text = "6 + 6 x 2 = 7";
      // const text = "8 x 2 + 5 = 5";
      // const text = "8 - 3 + 7 = 6";
      // const text = "4 x 3 + 5 = 6";
      //const text = "2 + 7 - 5 = 8";
      const text = "3 x 2 - 9 = 5";
      const sticksToMove = 2;

      // console.log(JSON.stringify(conf["11"]));
      // const arr = parseInput(text, "=");
      const arr = parseInput(text);
      // console.log(arr);
      const results = solveEqn(arr, sticksToMove);
      console.log(results.join("\n"));
    }

    function solveEqn(input, sticksToMove, numMatchsticks, sticksFloating) {
      // console.log(input);
      let results = [];
      let sticksMoved = 0; sticksFloating = 0;
      let done = false;
        let lastelement = true;
        // const runningInput = [];
        // for (let i = 0; i < tracking.length; i++) {
        //   tracking[i] = 0;
        // }

        const confArr = [];

        for (let i = 0; i < input.length; i++) {
          //let confN;

          // if (typeof input[i] === 'number') {
          //   confN = typeof input[i] === 'number' ? conf[input[i]] : confSigns[input[i]];
          //   confN = typeof parseInt(input[i]) === 'number' ? conf[input[i]] : confSigns[input[i].trim()];
          // console.log(input[i], confSigns[input[i].trim()]);
          // console.log(i, input[i]);
          // console.log(i, input[i], parseInt(input[i]) !== NaN);
          confArr.push(isNumber(input[i]) ? conf[input[i]] : confSigns[input[i].trim()]);
        }
      let total = 1;
      for (let idx = 0; idx < confArr.length; idx++) {
        // console.log(idx, confArr[idx]);
        total *= confArr[idx].length;
      }

      // const total = N1 * N2 * N3 * N4 * N5 * N6 * N7;
      const N1 = confArr[0].length;
      const N2 = confArr[1].length;
      const N3 = confArr[2].length;
      const N4 = confArr[3].length;
      const N5 = confArr[4].length;
      const N6 = confArr[5].length;
      const N7 = confArr[6].length;

      for (let idx = 0; idx < total; idx++) {
        const runningInput = [];

        const i1 = Math.floor(idx / (N2*N3*N4*N5*N6*N7)) % N1;
        const i2 = Math.floor(idx / (N3*N4*N5*N6*N7)) % N2;
        const i3 = Math.floor(idx / (N4*N5*N6*N7)) % N3;
        const i4 = Math.floor(idx / (N5*N6*N7)) % N4;
        const i5 = Math.floor(idx / (N6*N7)) % N5;
        const i6 = Math.floor(idx / (N7)) % N6;
        const i7 = idx % N7;

        // console.log(i1, N1);

        // console.log("1st calcSticksMoved");
        let obj = calcSticksMoved(confArr, 0, i1, 0, 0);
        let sticksMoved = obj.sticksMoved;
        let sticksFloating = obj.sticksFloating;
        runningInput.push(obj.value);
        if (sticksMoved > sticksToMove || Math.abs(sticksFloating) > sticksToMove) {
          continue;
        }

        // console.log("2nd calcSticksMoved");
        obj = calcSticksMoved(confArr, 1, i2, sticksMoved, sticksFloating);
        sticksMoved = obj.sticksMoved;
        sticksFloating = obj.sticksFloating;
        // console.log(i2, obj.value);
        runningInput.push(obj.value);
        if (sticksMoved > sticksToMove || Math.abs(sticksFloating) > sticksToMove) {
          continue;
        }

        obj = calcSticksMoved(confArr, 2, i3, sticksMoved, sticksFloating);
        sticksMoved = obj.sticksMoved;
        sticksFloating = obj.sticksFloating;
        runningInput.push(obj.value);
        if (sticksMoved > sticksToMove || Math.abs(sticksFloating) > sticksToMove) {
          continue;
        }

        obj = calcSticksMoved(confArr, 3, i4, sticksMoved, sticksFloating);
        sticksMoved = obj.sticksMoved;
        sticksFloating = obj.sticksFloating;
        runningInput.push(obj.value);
        if (sticksMoved > sticksToMove || Math.abs(sticksFloating) > sticksToMove) {
          continue;
        }

        obj = calcSticksMoved(confArr, 4, i5, sticksMoved, sticksFloating);
        sticksMoved = obj.sticksMoved;
        sticksFloating = obj.sticksFloating;
        runningInput.push(obj.value);
        if (sticksMoved > sticksToMove || Math.abs(sticksFloating) > sticksToMove) {
          continue;
        }

        obj = calcSticksMoved(confArr, 5, i6, sticksMoved, sticksFloating);
        sticksMoved = obj.sticksMoved;
        sticksFloating = obj.sticksFloating;
        runningInput.push(obj.value);
        if (sticksMoved > sticksToMove || Math.abs(sticksFloating) > sticksToMove) {
          continue;
        }

        obj = calcSticksMoved(confArr, 6, i7, sticksMoved, sticksFloating);
        sticksMoved = obj.sticksMoved;
        sticksFloating = obj.sticksFloating;
        runningInput.push(obj.value);
        if (sticksMoved > sticksToMove || Math.abs(sticksFloating) > sticksToMove) {
          continue;
        }
        // console.log("Last calcSticksMoved");

        // console.log(runningInput);
        if (sticksMoved === sticksToMove) {
          // console.log(sticksFloating, runningInput);
          const runInput = [];
          const eqIdx = runningInput.indexOf("=");
          let nullFound = false;
          for (let idx1 = 0; idx1 < eqIdx; idx1++) {
            if (nullFound) {
              runInput[runInput.length -1] += runningInput[idx1];
              nullFound = false;
            } else if (runningInput[idx1] !== null) {
              runInput.push(runningInput[idx1])
            } else {
              nullFound = true;
            }
          }
          // console.log(runInput);
          // console.log(val, runningInput[runningInput.length - 1]);

          const reslt = parseInt(runningInput[runningInput.length - 1]);
          if (sticksFloating === 0) {
            const val = evalRPN(toRPN(runInput));
            // console.log(runInput);
            if (val === reslt)
              addToResults(runInput, reslt, results);
            // console.log(val);
            //   console.log(createResp(runInput, reslt));
            // console.log(val, reslt);
          } else if (sticksFloating === 1) {
            // console.log(runInput);
            if (evalRPN(toRPN(runInput)) === reslt) {
              createResponseWithSuperscript(runInput, reslt, results);
            }
            for (let idx1 = 0; idx1 < runInput.length; idx1++) {
              const oldInput = runInput[idx1];
              runInput[idx1] = isNumber(runInput[idx1]) ?  MINUS + runInput[idx1] : runInput[idx1];
              const val = evalRPN(toRPN(runInput));
              // console.log(val, reslt);
              if (val === reslt)
                addToResults(runInput, reslt, results);

              // console.log(createResp(runInput, reslt));
                // console.log(val, reslt,);
              runInput[idx1] = oldInput;
            }
            const val = evalRPN(toRPN(runInput));
            // console.log(val, reslt);
            if (val === -reslt)
              console.log(createResp(runInput, MINUS + reslt));
          } else if (sticksFloating === 2) {
            for (let idx1 = 0; idx1 < runInput.length; idx1++) {
              const oldInput = runInput[idx1];
              runInput[idx1] = isNumber(runInput[idx1]) ?  PLUS + runInput[idx1] : runInput[idx1];
              const val = evalRPN(toRPN(runInput));
            // console.log(val, reslt);
              if (val === reslt)
                addToResults(runInput, reslt, results);
              // console.log(createResp(runInput, reslt));
            // console.log(val, reslt,);
              runInput[idx1] = oldInput;
            }
            for (let idx1 = 0; idx1 < runInput.length; idx1++) {
            for (let idx2 = idx1 + 1; idx2 < runInput.length; idx2++) {
              const oldInput1 = runInput[idx1];
              const oldInput2 = runInput[idx2];
              runInput[idx1] = isNumber(runInput[idx1]) ? MINUS + runInput[idx1] : runInput[idx1];
              runInput[idx2] = isNumber(runInput[idx2]) ? MINUS + runInput[idx2] : runInput[idx2];
              const val = evalRPN(toRPN(runInput));
              // console.log(val, reslt);
              if (val === reslt) {
                addToResults(runInput, reslt, results);
                // let resp = createResp(runInput, reslt);
                // if (!results.includes(resp)) {
                //   results.push(resp);
                // }
                // console.log(createResp(runInput, reslt));
              }
            // console.log(val, reslt,);
              runInput[idx1] = oldInput1;
              runInput[idx2] = oldInput2;
            }
            }
          }
        }
      }

        function splitArr(runningInput) {
            const runInput = [];
            let start = 0, end = 0, eqIdx = 0;
            while (eqIdx >= 0) {
                eqIdx = runningInput.indexOf("=", start);
                end = eqIdx;
                // console.log(start, end);
                // console.log(runningInput.slice(start, end));
                if (eqIdx >= 0) {
                    runInput.push(runningInput.slice(start, end));
                    start = end + 1;
                } else {
                    runInput.push(runningInput.slice(start));
                }
            }
        }



        // for (let i = 0; i < confArr.length; i++) {
      //   console.log(i, confArr[i] ? confArr[i][0] : "undefined");
      // }

      // if (confN === undefined) {
      // 	console.log(i, j, input[i]);
			// }
          //   lastelement = lastelement && j === confN.length - 1;
          //   if (confN && j < confN.length) {
          //     sticksMoved = sticksMoved + confN[j].move;
          //     sticksFloating = sticksFloating + -1 * confN[j].add;
          //     if (confN[j].add < 0) {
          //       sticksMoved += -1 * confN[j].add;
          //     }
          //     runningInput.push(confN[j].destination);
          //     console.log(i, j, runningInput);
          //     //console.log(i, runningInput);
          //     if (sticksMoved === sticksToMove && sticksFloating === 1) {
          //       console.log(i, j, runningInput);
          //       processEqn(runningInput);
          //     }
          //   }
      return results;
    }

    function addToResults(runInput, reslt, results) {
      let resp = createResp(runInput, reslt, results);
      if (!results.includes(resp)) {
        results.push(resp);
      }
    }

    function parseInput(str) {
      // return  str.match(/(\d+\.?\d*|\+|\-|\*|\/|\(|\))/g);
      return  str.match(/(\d+\.?\d*|\+|\-|x|\/|\(|\)|=)/g);
    }

    function breakInput(str, num3, sign) {
      const arr = [];
      const j = str.indexOf(sign);
      if (j > 0) {
        arr[0] = sign;
        arr[1] = parseInt(str.substring(0, j).trim());
        arr[2] = parseInt(str.substring(j+1).trim());
        arr[3] = num3;
        return arr;
      }
      return null;
    }

    function isNumber(str) {
      // console.log(str);
      // return !isNaN(str) && str.trim() !== "";
      return !isNaN(Number(str)) && str.trim() !== "";
    }

    function addIdentity(arr, num) {
		const ar = [{
			"destination": num,
			"add": 0,
			"move": 0}];
		return arr ? ar.concat(arr) : ar;
	}

	function addIdentityAll(conf) {
		const ob = {
			"destination": 0,
			"add": 0,
			"move": 0
		};
        Object.keys(conf).forEach(key => {
            const obj = JSON.parse(JSON.stringify(ob));
            obj.destination = key;
            conf[key].push(obj);
        });
      }

    function createResp(arr, result) {
      let reslt = "";
      arr.forEach(r => {reslt += r + " "});
      return reslt + EQUAL + result;
    }

    function verifyAndCreateResponse(numb1, numb2, numb3, op, stcksFlting, movesRemaining) {
		// console.log(numb1 + " "	 + numb2 + " " + numb3 + "  " + stcksFlting + " " + movesRemaining);
        return performOperation(op, numb1, numb2, numb3, stcksFlting, movesRemaining);
	}

    function addToConfigurationFlipDigits(conf) {
      const ob = {
        "destination": 1,
        "add": 0,
        "move": 2
      };
      Object.keys(conf).forEach(key => {
        if ((key.startsWith(("1")) || key.endsWith(("1")))) {
          let key1;
          if (key.length === 2) {
            key1 = key[1] + key[0];
          } else if (key.length === 3) {
            key1 = key[2] + key[1] + key[0];
          }
          if (key1 && key !== key1) {
            const obj = JSON.parse(JSON.stringify(ob));
            obj.destination = key1;
            addItemToConf(conf[key], obj);
          }
        }
      });
    }

    // This handles numbers with 1 e.g 111 -> 11, 14 or 41
    function addToConfigurationNumbersWithOne(conf) {
      const ob = {
        "destination": 1,
        "add": -2,
        "move": 0
      };
      Object.keys(conf).forEach(key => {
        if (key.indexOf(("1")) >= 0 ) {
          const dest = key.replace("1", "");
          if (dest) {
            const obj = JSON.parse(JSON.stringify(ob));
            obj.destination = dest;
            addItemToConf(conf[key], obj);
          }
        }
        for (let fromIndex = 0; fromIndex < key.length; fromIndex++) {
          const dest = searchForSubstringAndReplace(key, "11", "4");
          dest.forEach(dst => {
            if (dst) {
              const obj = JSON.parse(JSON.stringify(ob));
              obj.destination = dst;
              obj.move = 1;
              obj.add = 0;
              addItemToConf(conf[key], obj);
            }
            });
          }
      });
    }

    function searchForSubstringAndReplace(str, searchStr, replace) {
      const result = [];
      for (let fromIndex = 0; fromIndex < str.length; fromIndex++) {
        const pos = str.indexOf(searchStr, fromIndex);
        if (pos >= 0 ) {
          const dest = str.substring(0, fromIndex) + str.substring(fromIndex, pos) + replace + str.substring(fromIndex + pos + 2);
          result.push(dest);
          // console.log(key, dest);
        }
      }
      return result;
    }

    function addToConfigurationOne(conf) {
      const ob = {
        "destination": 1,
        "add": -2,
        "move": 0
      };
      const ob2 = {
        "destination": 1,
        "add": 2,
        "move": 0
      };
      const ob3 = {
        "destination": 7,
        "add": 1,
        "move": 0
      };
      Object.keys(conf).forEach(key => {
        if ((key.startsWith(("1")) || key.endsWith(("1"))) && key.length === 2) {
          const key1 = key[1] + key[0];
		  const k0 = key[0];
		  const k1 = key[1];
            const obj = JSON.parse(JSON.stringify(ob));
            obj.destination = key.startsWith("1") ?  k1 : k0;
			addItemToConf(conf[key], obj);
            const obj2 = JSON.parse(JSON.stringify(ob2));
            obj2.destination = key.startsWith("1") ? "4" + k1 : k0 + 4;
			addItemToConf(conf[key], obj2);
            const obj3 = JSON.parse(JSON.stringify(ob3));
            obj3.destination = key.startsWith("1") ? "7" + k1 : k0 + 7;
			addItemToConf(conf[key], obj3);
          }
      });
    }

    function getValueWithSign(destination, num) {
      return num < 0 ? -destination : destination;
    }

    function addToConfigurationSeven(conf) {
      const ob = {
        "destination": 1,
        "add": -1,
        "move": 0
      };
      const ob2 = {
        "destination": 1,
        "add": 1,
        "move": 1
      };
      Object.keys(conf).forEach(key => {
        if ((key.startsWith(("7")) || key.endsWith(("7"))) && key.length === 2) {
          const key1 = key[1] + key[0];
          const k0 = key[0];
          const k1 = key[1];
          const obj = JSON.parse(JSON.stringify(ob));
          obj.destination = key.startsWith("7") ? "1" + k1 : k0 + 1;
          addItemToConf(conf[key], obj);
          const obj2 = JSON.parse(JSON.stringify(ob2));
          obj2.destination = key.startsWith("7") ? "4" + k1 : k0 + "4";
          addItemToConf(conf[key], obj2);
        }
      });
    }

    function processEqn(input) {
        let inp = [];
        let eqFound = false;
        let res = 0;
        for (let i = 0; i < input.length; i++) {
          if (input[i] === '=') {
            eqFound = true;
          } else if (!eqFound) {
            inp.push(parseInt(input[i]));
          } else {
            res = parseInt(input[i]);
          }
        }
        inp = toRPN(inp);
        if (evalRPN(inp) === res) {
          console.log(inp, res);
        }
    }

    function calcSticksMoved(confArr, num, indx, sticksMvd, sticksFlting) {
      // console.log(confArr[num]);
      // console.log(confArr[num][indx]);
      if (confArr[num][indx] === undefined) {
        // console.log(num, indx, confArr[num]);
        // console.log(num, indx);
        return {};
      }
      let sticksMoved = sticksMvd + confArr[num][indx].move;
      let sticksFloating = sticksFlting + -1 * confArr[num][indx].add;
      if (confArr[num][indx].add < 0) {
        sticksMoved += -1 * confArr[num][indx].add;
      }
      return {sticksFloating: sticksFloating, sticksMoved: sticksMoved, value: confArr[num][indx].destination};
    }


    function toRPN(tokens) {
      const out = [];
      const stack = [];
      const prec = {'+': 1, '-': 1, 'x': 2, '*': 2, '/': 2};
      tokens.forEach(token => {
        if (!isNaN(token)) {
          out.push(Number(token));
        } else if (token in prec) {
          while (
                  stack.length &&
                  prec[stack[stack.length - 1]] >= prec[token]
                  ) {
            out.push(stack.pop());
          }
          stack.push(token);
        } else if (token === '(') {
          stack.push(token);
        } else if (token === ')') {
          while (stack.length && stack[stack.length - 1] !== '(') {
            out.push(stack.pop());
          }
          stack.pop(); // pop '('
        }
      });
      while (stack.length) out.push(stack.pop());
      // console.log(out);
      return out;
    }

    function evalRPN(rpn) {
      const stack = [];
      rpn.forEach(token => {
        if (typeof token === 'number') {
          stack.push(token);
        } else {
          const b = stack.pop();
          const a = stack.pop();
          switch (token) {
            case '+': stack.push(a + b); break;
            case '-': stack.push(a - b); break;
            case '*': stack.push(a * b); break;
            case 'x': stack.push(a * b); break;
            case '/': stack.push(a / b); break;
          }
        }
      });
      return stack[0];
    }

    function addItemToConf(arr, obj) {
		const confItem = arr.find(it => it.destination === obj.destination);

		if (!confItem) arr.push(obj);
	}

    function addToConfiguration(conf, increment, debug) {
		Object.keys(conf).forEach(key => {
			// console.log(`${key}: ${conf[key]}`);
			//console.log(key);
			// const key1 = increment + parseInt(key);
			const key1 = increment + key;
			// if (!conf.hasOwnProperty(key1)) {
			// 	conf[key1] = [];
			// }
          // console.log(conf[key1]);
          if (parseInt(key) < 10) {
				//const arr = Array.from(conf[key]);
				const arr = JSON.parse(JSON.stringify(conf[key]));
              // if (key === 6) console.log(arr);
				for (let i = 0; i < conf[key].length; i++) {
					const confItem = conf[key][i];
                    // console.log(num);
                    // console.log(arr[i]);
                    // const dest = parseInt(confItem.destination);
					arr[i].destination = "" + increment + confItem.destination;
					if (debug) {
                        console.log(key + " " + key1 + " " + arr[i].destination);
                    }
				}
				//const arr1 = JSON.parse(JSON.stringify(arr));

					// arr.push({
					// 	destination: parseInt(key),
					// 	add: -2,
					// 	move: 0
					// });
//				for (let i = 0; i < arr.length; i++) {
//					arr1.push({
//						destination: arr[i].destination - 10,
//						add: -2,
//						move: 0
//					});					
//				}
				conf[key1] = conf.hasOwnProperty(key1) ? conf[key1].concat(arr) : arr;
			}
		});
		return conf;
	}
	
	function createResponse(numb1, numb2, numb3, op) {
		return numb1 + " " + op + " " + numb2 + " = " + numb3;
	}

	function createResponse1(numb1, numb2, numb3, op) {
		return numb1 + " = " + numb2 + " " + op + " " + numb3;
	}

	function createResponseWithSuperscript2 (numb1, numb2, numb3, op) {
		return [numb1 + SUPERSCRIPT1 + " " + op + " " + numb2 + " = " + numb3,
		      numb1 + " " + op + " " + numb2 + SUPERSCRIPT1 + " = " + numb3,
		      numb1 + " " + op + " " + numb2 + " = " + numb3 + SUPERSCRIPT1];
	}

	function createResponseWithTwoSuperscripts (numb1, numb2, numb3, op) {
		return [numb1 + SUPERSCRIPT1 + " " + op + SUPERSCRIPT1 + " " + numb2 + " = " + numb3,
		      numb1 + " " + op + " " + numb2 + SUPERSCRIPT1 + " = " + numb3 + SUPERSCRIPT1,
		      numb1 + SUPERSCRIPT1 + " " + op + " " + numb2 + " = " + numb3 + SUPERSCRIPT1];
	}

	function createResponseWithSuperscript1(numb1, numb2, numb3, op) {
		return [numb1 + SUPERSCRIPT1 + " = " + numb2 + op + " " + numb3,
		      numb1 + " = " + numb2 + SUPERSCRIPT1 + op + " " + numb3,
		      numb1 + " = " + numb2 + op + " " + numb3 + SUPERSCRIPT1];
	}

    function addCompositMapping(conf) {
      Object.keys(conf).forEach(key => {
        const k = parseInt(key);
        if (k < 10) {
          addCompositMappingAddOne(conf, key, conf[key[0]]);
        }
        if (k > 10 && k < 100) {
          const k1 = parseInt(key[0]);
          const k2 = parseInt(key[1]);
          if (k2 === 1) {
            addCompositMappingOne(conf, key, conf[key[0]]);
          } if (k1 === 1) {
            addCompositMappingOne(conf, key, conf[key[1]]);
          }

            for (let i = 0; i < conf[key[0]].length; i++) {
            for (let j = 0; j < conf[key[1]].length; j++) {
              // if (key === "32") {
                // console.log(key[0] + " " + key[1] + " " + firstConf.destination + " " + conf[key[1]][j].destination);
                // console.log(conf[key[0]]);
                // console.log(conf[key[1]]);
              // }
              const firstConf = conf[key[0]][i];
              const secondConf = conf[key[1]][j];
              let move = firstConf.move + secondConf.move;
              // const destination = parseInt("" + firstConf.destination + secondConf.destination);
              const destination = firstConf.destination + secondConf.destination;

              const mv =  matchMoves(firstConf.add, secondConf.add);

              const confItem = conf[key].find(it => it.destination === destination);

              if (!confItem) {
                conf[key].push({
                  destination: destination,
                  add: firstConf.add + secondConf.add,
                  move: move + mv.move
                  // 1: firstConf.destination,
                  // 2: secondConf.destination
                });
              }
            }
          }
        }
      });
      // return conf;
    }

    // This handles numbers that start with or ends with 1 e.g 51/15 and converts to single digits e.g 6
    function addCompositMappingOne(conf, key, confItem) {
      for (let i = 0; i < confItem.length; i++) {
        // const destination = parseInt("" + confItem[i].destination);
        const destination = confItem[i].destination;
        if (confItem[i].add === 1) {
          addToConfItems(conf[key], destination, {add: -1, move: confItem[i].move + 1});
        } if (confItem[i].add === 2) {
          addToConfItems(conf[key], destination, {add: 0, move: confItem[i].move + 2});
        }
      }
    }

    // This handles single digits numbers and pads with 1 e.g 5 to double digits e.g 51/15
    function addCompositMappingAddOne(conf, key, confItem) {
      // addToConfItems(conf[key], 10 * parseInt(key) + 1, {move: 0, add: 2});
      // addToConfItems(conf[key], 10 + parseInt(key), {move: 0, add: 2});
      addToConfItems(conf[key], key + 1, {move: 0, add: 2});   // 3 -> 31
      addToConfItems(conf[key], "1" + key, {move: 0, add: 2});  // 3 -> 13
    }

    function performOperation(oper, numb1, numb2, numb3, stcksFlting, movesRemaining) {
      let results = [];
      calcConf[oper].forEach(item => {
            let num1 = parseInt(numb1);
            let num2 = parseInt(numb2);
            let num3 = parseInt(numb3);
            if (item.stcksFlting === stcksFlting && item.movesRemaining === movesRemaining
              && item.cond.apply(null, [num1, num2, num3])) {
              const result = item.fn.apply(null, [numb1, numb2, numb3]);
              // console.log(item.cond.apply(null, [numb1, numb2, numb3]));
              // console.log(result);
              if (Array.isArray(result)) {
                results = results.concat(result);
              } else {
                results.push(result);
              }
            }
        });
      return results;
    }

    function addToConfItems(confItems, destination, obj) {
      const confItem = confItems.find(it => it.destination === destination);
      obj.destination = destination;
      if (!confItem) confItems.push(obj);
    }


    function matchMoves(num1, num2) {
      const arr1 = fillArray(num1);
      const arr2 = fillArray(num2);
      let obj = {add: 0, move: 0};
      for (let i = 0; i < arr1.length && i < arr2.length; i++) {
          if (arr1[i] + arr2[i] === 0) {
            obj.move++;
            arr1[i] = arr2[i] = 0;
          } else {
            obj.add += arr1[i] + arr2[i];
            arr1[i] = arr2[i] = 0;
          }
      }
      for (let i = 0; i < arr1.length; i++) {
        obj.add += arr1[i];
      }
      for (let i = 0; i < arr2.length; i++) {
        obj.add += arr2[i];
      }
      return obj;
    }

    function fillArray(num) {
      const arr = [];
      for (let i = 0; i < Math.abs(num); i++) {
        arr.push(num > 0 ? 1 : -1);
      }
      return arr;
    }

    function createResponseWithSuperscript (arr, result, responses) {
      // let result = "";
      const arr1 = [];
      for(let i = 0; i < arr.length; i++) {
        if (!isNumber(arr[i])) continue;
        for(let j = 0; j < arr.length; j++) {
          arr1[j] = i === j ? arr[j] + SUPERSCRIPT1 : arr[j];
        }
        // console.log(arr1.join(" ") + EQUAL + result);
        const reslt = arr1.join(" ") + EQUAL + result;
        if (!responses.includes(reslt)) {
          // console.log(reslt);
          responses.push(reslt);
        }
      }
      // console.log(arr.join(" ") + EQUAL + result + SUPERSCRIPT1);
    }
