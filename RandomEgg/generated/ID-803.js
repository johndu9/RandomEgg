var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228056",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16842111205",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16842111238",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816133039",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16842111206",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16811165136",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816133032",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15V0885",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228007",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0U24548",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228011",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129014",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215212",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215003",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5465",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129094",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G1731958",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15V0506",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15V8718",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215363",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5390",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816401030",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129095",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816401930",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5298",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4889",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228110",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15U7158",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816707076",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5291",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15S7682",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5286",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228081",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225053",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4968",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E113C1315",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215364",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228097",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816314042",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228108",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215305",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5310",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129048",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215332",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129096",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816145201",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4951",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5299",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225057",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225061",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5365",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228112",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228072",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4991",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X1123",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5243",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129090",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5374",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15U7372",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816707077",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15Y0256",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5532",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816520009",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W4037",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5292",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5360",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816707022",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5288",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225054",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5481",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225128",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129082",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816401856",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16842111239",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215207",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816401825",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215076",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5346",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X0269",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5393",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5311",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228079",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129085",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228067",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225169",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215334",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15S7729",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5403",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129097",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225223",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816145203",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5300",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215373",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4894",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5237",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5317",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816402013",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5366",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15V3320",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228118",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225131",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11337318",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4998",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5262",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215236",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5244",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816707084",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0U27646",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816504013",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228075",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228090",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15U5857",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215213",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15U6550",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5294",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816707025",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228059",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225055",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0U29817",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5370",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5483",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225225",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129081",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228050",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15U6810",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215074",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5344",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129077",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215095",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215370",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215039",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129013",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816401859",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228088",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215209",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G1742485",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816401826",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228057",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15S7379",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129080",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228085",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5347",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225126",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5440",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129019",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5312",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228140",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5279",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0U30955",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225211",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225171",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225007",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215335",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228009",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5406",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228064",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228078",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816145204",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816401954",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4872",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5302",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4921",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5239",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816401796",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816314015",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225143",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215042",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5314",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129068",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816323004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5281",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5367",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228133",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225132",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4999",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5451",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5332",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15S7686",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5010",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225052",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5263",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215237",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215185",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816504007",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15U5509",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5336",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5421",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129015",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5246",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816302005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215338",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1UZ0J40882",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129104",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225118",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129091",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5376",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X2195",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816504015",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5411",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129099",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228066",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215214",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5576",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15U5847",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129093",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228142",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X4779",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5389",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5363",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129089",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816707026",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5290",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5285",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0U24512",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4967",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129075",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228060",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816314037",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5309",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215331",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4989",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5242",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5531",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5358",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5431",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816401823",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228055",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215075",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5345",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5401",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228063",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215371",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5316",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215040",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129067",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129069",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816196011",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129056",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225130",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5448",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5261",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15U6595",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816504010",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228089",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816401827",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5283",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X6433",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215006",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816401936",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225145",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215072",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5343",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215038",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228087",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5351",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129079",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0U28954",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129018",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W4007",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816145032",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5249",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816133052",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4870",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129020",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816401795",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5395",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5313",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5280",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5273",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E113C2925",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129086",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225174",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5335",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215337",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129103",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5013",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228065",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5265",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228141",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816145213",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5380",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4878",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129088",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4963",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5308",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215330",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4939",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5241",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129036",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816401822",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5399",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5315",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5260",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225186",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816504009",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5282",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5368",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225011",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215071",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5424",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X8415",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129016",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816228134",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5276",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5248",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816225134",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5272",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5452",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5418",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5011",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5264",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129092",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5379",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816401995",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5474",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215190",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16811165137",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5259",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5023",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15V0389",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816504008",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5338",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215037",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5247",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4819",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816504031",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215339",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5271",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129105",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5378",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5473",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5258",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15S5337",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215347",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4817",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816504016",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5270",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5017",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5412",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129100",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16811165135",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816129054",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215346",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4677",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5269",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215216",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4676",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5267",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2X510K5184",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5467",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5364",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15V6991",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4974",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5432",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5289",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5284",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215077",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5274",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5507",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5257",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816707085",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5297",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816401040",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5446",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816401996",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G1731810",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5341",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E113C1256",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B4856",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816215328",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E113B6156",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116B5414"];