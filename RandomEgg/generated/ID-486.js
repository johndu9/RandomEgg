var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882145064",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882649030",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80T22387",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF6783",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF3597",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0UG4656",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2G60SF1898",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882600080",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882600081",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882649004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882600129",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7637",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2KM0WX7883",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6268",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511K2857",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2G61480452",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0R80TT4569",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6295",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7919",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6292",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7855",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15V0866",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G1744933",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7483",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7527",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16R0D09073",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7668",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6335",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF7010",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6213",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7922",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU1193468",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF5244",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0PB9718",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6223",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6293",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RG1412",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF6997",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU0MK1193",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF6789",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6237",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RG0717",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6260",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15U8490",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6269",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF9255",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU0V49354",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2G60Y82420",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0U00TT6946",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YT0225",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15V5567",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7499",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7895",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7559",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0UF8608",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6202",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X1910",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF6913",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF6998",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0Z17621",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15Y0AJ9945",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF9216",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0S42220",
	"http://www.newegg.com/Product/Product.aspx?Item=0J5-0009-00004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF6918",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2G61096528",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU0ZN0163",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF7001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF7008",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF6790",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511K2826",
	"http://www.newegg.com/Product/Product.aspx?Item=1BU-0002-00004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0P79441",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF9120",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA03U0C31296",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15S8158",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6233",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6228",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7896",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF5487",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF5477",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZA0YN9619",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7560",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC8028",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6197",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF7012",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6214",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6207",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6218",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF5767",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6341",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU17G3115",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6225",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU11U9380",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6235",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882600105",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0S33947",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6229",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T0RH9422",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6338",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF6919",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0R84002",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11681949",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0R83236",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU13J5181",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YT3468",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6304",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF7006",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6333",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF6792",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2G60Y82426",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF6428",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF6915",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU1333510",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF9244",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AT0MA7635",
	"http://www.newegg.com/Product/Product.aspx?Item=1BU-000B-00011",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0P72372",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11681956",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882600089",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TR8172",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G1725931",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YS9309",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6217",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RG1254",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6215",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0SB9197",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511E8853",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7515",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M0415",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7908",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX15J2538",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF6721",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RG2630",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7899",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X0429",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511X7970",
	"http://www.newegg.com/Product/Product.aspx?Item=0YM-0002-00005",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W1369",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7563",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050MM2300",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7923",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC8029",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX15J2317",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF9245",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RG1625",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6288",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7886",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882130208",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF7002",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W1530",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0YF7197",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G1733225",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6303",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11427114",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6212",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7526",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF9254",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15U8173",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF7626",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6245",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YK6943",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6334",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0S42222",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6216",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882600200",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF6921",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6296",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU17G1623",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11681950",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15Y0NG8285",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TS2064",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2G61194303",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15S7489",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882145096",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6220",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15512J7055",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF7004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6210",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0ZP1281",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1060PF9191",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6279",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2G60Y81996",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M0329",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050MM1114",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050MM1193",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15512J7057",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7907",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G1727652",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11681839",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF6373",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7892",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511K2845",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3GK14D6341",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RG0965",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF9135",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0UG4697",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7903",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6259",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511E8000",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU0M40814",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0S74313",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7918",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1060PF7126",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU1205964",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF9137",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6284",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1060PF3240",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0UG2326",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS12U3514",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZA0YM8257",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YS8097",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z81666",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6281",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W4207",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TM4180",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU0MK1214",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TU2946",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W1171",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF6367",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050MM2617",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6226",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M0444",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G1730585",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2G60Y12895",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1060PF6419",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YT2372",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0PB9654",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7928",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC8030",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114P3525",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF5504",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF9266",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11681965",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2G61034952",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7558",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6221",
	"http://www.newegg.com/Product/Product.aspx?Item=1BU-0002-00002",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0U91369",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11681938",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G1736551",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC8024",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YT2388",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7891",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ14C7653",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6272",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511E8800",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3GK14D6360",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6287",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6208",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15V9287",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11427124",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF5198",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0U00SN3478",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3CS14N4057",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882649042",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882541001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RG1101",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6280",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RG1940",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0YW8987",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M0330",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1060PF7372",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3CS14N3700",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M0524",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF6374",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511K2846",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7557",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CF6427",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11681958",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0R59286",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6227",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU1205696",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0UF8575",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZA0YM8122",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RG0587",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZA0YM8260",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6224",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RG4502",
	"http://www.newegg.com/Product/Product.aspx?Item=0YM-0010-00002",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511F8899",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0PX4902",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0S42216",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2GB0T34722",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RG0918",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RG1330",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511H5335",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC6211",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0UG2407",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1060PF3237",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0V41117299",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RG1740",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511F8869",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1260CC7555",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0S42212",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ11N4128",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0S42230",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RG1802",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0SB4965",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RG0802",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511K6717",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511K1736",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511F8867",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511X4718",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511H5290",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511K6765",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511H5320",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N813R2140",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V1413042",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M0485",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0S42204",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0S42205",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V16C1467",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0S42206",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0S42225",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3CS14N4993",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M0514",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG14K1110",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0SB9200",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA08C0FS3410",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0S42210",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0S42226",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0UG5731",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511K2856",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M0456",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V16B9560",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0S42218",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0YF7198",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0SB9194",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU14V0431",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0S42224",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V16B9290",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0UG4703",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15511K1008",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0S42209",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA08C0FS3415",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0SR3838",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0YM0R61238",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V1430232",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA08C0FS3411",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V16B7484",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0YF7177",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V17C5913",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V17C5851"];