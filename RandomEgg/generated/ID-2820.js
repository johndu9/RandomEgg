var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812198025",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812119267",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200496",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200855",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812201009",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812198024",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812119008",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812123299",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812198018",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200961",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812123323",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200106",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812123296",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812123300",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200124",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812530009",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200121",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812198022",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812201029",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812226056",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812196131",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812186077",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812887007",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812104019",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812400001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812119486",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706030",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812816224",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812226068",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812123343",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812196309",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812816225",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812816228",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812267007",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200420",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812270169",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812123301",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812119487",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812198016",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706031",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812816221",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812226074",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812816230",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812186070",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812226069",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706019",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812119149",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812198023",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162032",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16814999022",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812201034",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812201019",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812123317",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812267011",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812267015",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200497",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812267004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812201022",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812201026",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812201038",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812186072",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812816222",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812167017",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812119022",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812816226",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812226064",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812816220",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812587642",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812267009",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812267003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812201021",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D3775",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812189060",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812311001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200084",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812189061",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812311002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812296209",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706006",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C517D1328",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200064",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812123315",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16814999018",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812198003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812189002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812379009",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706025",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812119488",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812816233",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162030",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812267013",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812530003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706013",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812196873",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812119481",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D4007",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162017",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812201001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162038",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812887001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812186088",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812226067",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812119485",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162026",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812226075",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812270168",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200065",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812198007",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812816227",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200917",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812123316",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812201025",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812186071",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812119248",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706015",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812201032",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812718002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812123326",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200975",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706012",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162037",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812201037",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812189528",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812226070",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162025",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200735",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812816219",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812153003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812196462",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812189063",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812123325",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162036",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812189527",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200935",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812123324",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162035",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706020",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812189004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706021",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812198032",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812196589",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200042",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812119240",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200499",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706022",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812718001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812119483",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162033",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200518",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812311007",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812198033",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706029",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200495",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812267006",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200455",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200991",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812119147",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162031",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C50US9991",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812267014",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812189006",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812530004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812201036",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812107363",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812400146",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812201020",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162022",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812379010",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812123298",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812123321",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706023",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812267012",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812311005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812119484",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812201024",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706014",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162041",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2627",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D3990",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162021",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812119482",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706033",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812267005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812119146",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162019",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812400102",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200915",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812201028",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162040",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812198034",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162018",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200459",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200752",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812198005",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KT0XG4626",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KT0UN8687",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KT0XG4635",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51051244",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KT0XD9701",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812226050",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706016",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812186087",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812189062",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812189119",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812816223",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KT0UN8682",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D4078",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C513U0383",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162010",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812400034",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812189526",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V51051248",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812706034",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KT0UN8680",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812189120",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812162034",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KT16U8777",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KT16U8545",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KT16U8327"];