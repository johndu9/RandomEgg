var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3JX15Y3398",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873100077",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0P58888",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TD8932",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G1722620",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA17P1370139",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873108012",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873109048",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873109049",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873571004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1J20UN3619",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873100084",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873100038",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873571001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873100063",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873117024",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CP16N3192",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80MZ4035",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1HD0F31993",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9169",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z43238",
	"http://www.newegg.com/Product/Product.aspx?Item=14C-0003-00015",
	"http://www.newegg.com/Product/Product.aspx?Item=14C-0003-00008",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3M11711463",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TR9358",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873100087",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TS2313",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80MZ4012",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0SH6093",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0V57968",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3M11711464",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0YX5484",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1EF0CC3491",
	"http://www.newegg.com/Product/Product.aspx?Item=14C-0009-00003",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z43328",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y2936",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9674",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z43362",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X8387",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0SH6096",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TS0658",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9191",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA13X0FM5616",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1JX0MR1559",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3M11711465",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9112",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y3043",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z43216",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0U26079",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0YX5515",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z43194",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TN4396",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680155",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1SK0SF6644",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9155",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680131",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9314",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9359",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9329",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0YU2681",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU0ZA5440",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0S38854",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9288",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y3019",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RE6321",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0P83020",
	"http://www.newegg.com/Product/Product.aspx?Item=1KD-001P-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KT17D0470",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V17D1559",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3M11711467",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y3102",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D916J9738",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9093",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1JX0PD1606",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25N0SX5912",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TS3462",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TS3584",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1J20P68700",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1SK0S73537",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2RY12A1652",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ11K6711",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TN4429",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1TT11P5328",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YV2836",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873100066",
	"http://www.newegg.com/Product/Product.aspx?Item=14C-0003-00010",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA33F12G3198",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873100079",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1JX0US6029",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9608",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1SK0SG7097",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680156",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D91747062",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9713",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9725",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9733",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9100",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9134",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9392",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RE4186",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9160",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3JX15Y3232",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TP9335",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KT0PC4800",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0SH6098",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873109062",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80MZ4008",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0S38856",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z43298",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y3135",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0XD9467",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25N0SX5847",
	"http://www.newegg.com/Product/Product.aspx?Item=14C-0003-00005",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V513D1902",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9105",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25N0SX5894",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TN4349",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3M11711515",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3M11711523",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3M11711534",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TK7597",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9118",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680127",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873100086",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9367",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0F08535",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0U00ZW5799",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9661",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA17P1370138",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9320",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W9026",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1J20NE9356",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19K8024",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9111",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z43215",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D916J9826",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9362",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9305",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680154",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9154",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1J212A8576",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA33F12G3200",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KT17D0456",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680125",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3AG14M6562",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9109",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680123",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0S38861",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9529",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KT0H05477",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0XW3431",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1EF0CM3748",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9157",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873100083",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W7486",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873100029",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y3197",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3M11711518",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3M11711532",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9756",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA29C16C3941",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873100085",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1EF0D48349",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0E67837",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9332",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0UF4637",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0S38860",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2RY0YA6116",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9290",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9098",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9132",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0SH6108",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U4618",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9129",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3M11711517",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3M11711527",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2RY0XD9338",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1EF0D48348",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0U00B84782",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9152",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1JX1615771",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y3050",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9107",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3M11711516",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3M11711524",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2RU1979816",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9148",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y3049",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9487",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9095",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1SK0TR4240",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9121",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9759",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873109050",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873100090",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873571002",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680128",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680129",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680153",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y3160",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0WZ6138",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17U9684",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16873100089"];