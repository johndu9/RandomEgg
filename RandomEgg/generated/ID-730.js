var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896200293",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896200460",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896200461",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2KN17S1182",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896652163",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896652193",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896652164",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896652194",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896378041",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896652165",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896378038",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V1139731",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44730",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44791",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44731",
	"http://www.newegg.com/Product/Product.aspx?Item=0DB-0021-00004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44792",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HB1008257",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44672",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2WG0XA1265",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0PS0409",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2RY0UV6176",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44584",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V17X0898",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44732",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44755",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0AM5950",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617D2179",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A8920",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44640",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44741",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44793",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0C65548",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y47650",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44673",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y47654",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X1315436",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44709",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2WG0XA1266",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS0H10748",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44685",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896203011",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44593",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2WG0XA1258",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44586",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HB17P1504",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ZX0S91162",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44750",
	"http://www.newegg.com/Product/Product.aspx?Item=0TH-008J-00008",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44677",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TP2789",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44733",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896454006",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44756",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W5737",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y47658",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA17P13B3783",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0AM6357",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44779",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617D2192",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y47664",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A8964",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X13K2134",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44641",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44742",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44794",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44788",
	"http://www.newegg.com/Product/Product.aspx?Item=0DB-0021-00006",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0C65573",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y47651",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS17W6534",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44674",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y47655",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X1316561",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0C00905",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P1884817",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44710",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2WG0XA1267",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TS2376",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44686",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44653",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44722",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44619",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1V00PG3599",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44713",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N9030",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2WG0XA1270",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0H86054",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0NW6267",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44594",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896751131",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA34V0ZX0656",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44666",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2WG0XA1259",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44577",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44634",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS0H10071",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44703",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44587",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N9761",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X12R5490",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0NU0782",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44751",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P17D0016",
	"http://www.newegg.com/Product/Product.aspx?Item=0R6-0001-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HB0T28499",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N9645",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N9308",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V17X0900",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS17W6539",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ZX0SD3791",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44678",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA34V18K1458",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44690",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896378048",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44601",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44734",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896454009",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1Z80RV0393",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44757",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44656",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44725",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y47659",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44628",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44698",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0AM6358",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44780",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44609",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617D2203",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44716",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y47665",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A8985",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X13R1018",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A9286",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44642",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44743",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0SB2439",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44765",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44795",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44789",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0C02335",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A3260",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA17P13B3798",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y47652",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44682",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA34V18M0475",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2WG0XA1256",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44675",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y47656",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X1319871",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0C00920",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V1147076",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44711",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX18R3690",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2WG0XA1268",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44664",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X1274246",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0PT0806",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N9253",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2WG0XA1275",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44687",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44599",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA17P13B3736",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44654",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44723",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44696",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44620",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44607",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44714",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896200384",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X1273968",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N9051",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2WG0XA1271",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44597",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896200462",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44605",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X1229474",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HB0UF9514",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44595",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X1229423",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A9673",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA34V1052274",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0CW3505",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A9693",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X12W2959",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44667",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2WG0XA1260",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44578",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44635",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44704",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44588",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896652186",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N9771",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X12R6431",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0CW4217",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V1074243",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0NZ4556",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14F4014",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X12X6358",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44669",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2WG0XA1262",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44581",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44752",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44637",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44738",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44706",
	"http://www.newegg.com/Product/Product.aspx?Item=0R6-0001-00003",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44776",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896652189",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44785",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N9716",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N9568",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2BC0UV6120",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896378045",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44679",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA34V18K5386",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44693",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896378049",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44602",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896200463",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0PS0569",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X12V9162",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0CW4220",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44735",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44773",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA17P13B3749",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44758",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44657",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44726",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TR1740",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y47660",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44629",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44699",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44624",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44761",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZW11X8099",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44660",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0HF7080",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44781",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZW0E68590",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617D5683",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44610",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N8898",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2RP11N4393",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617D2216",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44648",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44717",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44614",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N8916",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0NB8970",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A9008",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X13R2173",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A9299",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P16M6329",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617D2513",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44643",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44744",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44766",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44796",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0SR1110",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X12Y2993",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0C46573",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44729",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44790",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0V97662",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HB1008256",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44671",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2WG0XA1264",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44583",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0B56518",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0NE9221",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0AM5324",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617D2176",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A8919",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44639",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44740",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y47649",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y47653",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X12Z8718",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA31914J1056",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1EF0CB5518",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44708",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44683",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44592",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2WG0XA1257",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HB0UH3595",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44749",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896652150",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44676",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896751281",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y47657",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44778",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y47663",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X1319885",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896652192",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0XK5546",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44787",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0C32418",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44652",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44721",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44618",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10E6941",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HB0Y07824",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44712",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N9006",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2WG0XA1269",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44665",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44633",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44702",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N9758",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X1274275",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HB0Y43653",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N9641",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N9258",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44688",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896378047",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44600",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44655",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44724",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896652023",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44627",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44697",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44621",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V17X0903",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44608",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44715",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A9277",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44764",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X13R7012",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44681",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA34V18K5629",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P16M8838",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0U16765",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V1074245",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2RY0V66353",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44663",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X1273980",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N9241",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2WG0XA1273",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44598",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44695",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44606",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0U52966",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X1273018",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS0S30879",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44596",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44604",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X1229449",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS0FA8042",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X11A2589",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A9505",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A9675",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X12W0380",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA34V1052279",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0CW4167",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A9711",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X12W6441",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44668",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2WG0XA1261",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44579",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44636",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44737",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44705",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44589",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44775",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896652187",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44784",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HB17P1803",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617P0731",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896200473",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X12U7352",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0CW4218",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS0FY4211",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44772",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44760",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44659",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0NZ4594",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14F6626",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZW0S31241",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617D5330",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N8894",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44647",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44613",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N8913",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617D2227",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X12Y0487",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44728",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44670",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2WG0XA1263",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44582",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44753",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HB0Y47983",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617D2165",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44638",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44739",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS0H10218",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y47648",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X12Z5167",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44707",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44591",
	"http://www.newegg.com/Product/Product.aspx?Item=0R6-0001-00005",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44748",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44777",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y47662",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896652190",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44786",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HB0Y73478",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44651",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44720",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44617",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N8992",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44632",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44701",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N9753",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N9636",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44626",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A9236",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44763",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X13R6059",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZW1270872",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44680",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA34V18K5427",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ZX0SP4470",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44662",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44694",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P16M8779",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44603",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X1108583",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A9503",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X12W0377",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0CW4222",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896200472",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44736",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44774",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44783",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA17P13B3830",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44770",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44759",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44658",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P1802410",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617D5162",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N8158",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44646",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44612",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N8909",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617D2224",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44727",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS1189873",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X12Z4363",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44747",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y47661",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44650",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44719",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44616",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N8978",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ZX0SD4037",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44630",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44700",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C50UG8577",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0H28892",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44625",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A9227",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44762",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X13R3779",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZW1270871",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44661",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P17C6889",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0U017M8171",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A9493",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44782",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2RU17S3004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44769",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZW0E68593",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZW08P1500",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617D3457",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N7978",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44645",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44611",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N8905",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617D2221",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX18R3632",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X12Z2318",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44746",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44649",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44718",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44615",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617N8976",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C50UG8576",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A9073",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X13R3016",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X14A9491",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0V92353",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44768",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V1079657",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3H617D2663",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44644",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0H19326",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44798",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X12Z2075",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44745",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HB0V47876",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0V92352",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44767",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ZX0S91096",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HB0Y73423",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0Y44797",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X12Y9904",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA35X12Y7568",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P16H3433",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TP8118",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0PS0281",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0H28869",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896378044",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896378046"];