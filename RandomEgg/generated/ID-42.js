var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157256",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157191",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N811E1186",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824009546",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824116616",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824009547",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824258027",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157258",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002723",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824248152",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140155",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824116572",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824116636",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824219125",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824717008",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824236333",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824009471",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824116537",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140130",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E113B5596",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG1131278",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0NW17E5482",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824332010",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157218",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4593",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824116623",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014352",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824332011",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157226",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824258032",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157221",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140129",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824116639",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824248160",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140170",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0P74302",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824332014",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824009435",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157211",
	"http://www.newegg.com/Product/Product.aspx?Item=0FC-000N-00003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014335",
	"http://www.newegg.com/Product/Product.aspx?Item=0ZK-0013-00003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014338",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18K5621",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824260002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157220",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SM0HP6142",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1682",
	"http://www.newegg.com/Product/Product.aspx?Item=0FC-000M-00003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014331",
	"http://www.newegg.com/Product/Product.aspx?Item=0FC-0007-00002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824187218",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824116624",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014359",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0NW17E5474",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117C4919",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TP1185",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006279",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1F80GD3778",
	"http://www.newegg.com/Product/Product.aspx?Item=0FC-000P-00004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002629",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002656",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0NW17E5491",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824260031",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1731",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006271",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006249",
	"http://www.newegg.com/Product/Product.aspx?Item=0MJ-002C-00002",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1683",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824260099",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157155",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824260046",
	"http://www.newegg.com/Product/Product.aspx?Item=0FC-000A-00003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824116640",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824219169",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F9429",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824009362",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4192",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80K02969",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824009577",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D2499",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002818",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824124028",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824189051",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002836",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824332017",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824664002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824248154",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117C4920",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4176",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014365",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0NW17E5487",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824258041",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824200082",
	"http://www.newegg.com/Product/Product.aspx?Item=10R-000D-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824116571",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014362",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006280",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157166",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014334",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824260158",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28A1000694",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18K5791",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80K02964",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014336",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0NW16H8268",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824258040",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1732",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006272",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002722",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4640",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SF0FS6422",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824219163",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824187217",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1F80JD0764",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140171",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0PK9194",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4760",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157228",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1684",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140166",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002599",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4728",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002725",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AT0UC2736",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157254",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4644",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824189043",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014332",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157210",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140134",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157235",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824258009",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1750",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18K9888",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014339",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D2500",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F9377",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824124030",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z1187243",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824189057",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824248105",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824332018",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140140",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SM0HP6097",
	"http://www.newegg.com/Product/Product.aspx?Item=0FC-000M-00004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014275",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SM0HP6125",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824997754",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3891958693",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824258030",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824248155",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824258045",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80U16525",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1746",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F9425",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006276",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1729",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014361",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824219160",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D2571",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX1402109",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014328",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157168",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824007126",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140157",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157227",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140169",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824124036",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824187227",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28A1000695",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18K5792",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157213",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824116620",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0UC1698",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4183",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006274",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824219141",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0X80R05683",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0NW17E5489",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140156",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4755",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SM0HP6153",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AT0MB5684",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157222",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4761",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3SE17Z9804",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D2505",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824219171",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D4543",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014325",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006264",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006240",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0UF9861",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1685",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2UG10T5426",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002600",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824124022",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140119",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140141",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824200096",
	"http://www.newegg.com/Product/Product.aspx?Item=10R-000C-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002624",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824258026",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117C4916",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006267",
	"http://www.newegg.com/Product/Product.aspx?Item=0ZK-003Y-00028",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002694",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824189045",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0NW16H8241",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014322",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006242",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140135",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157196",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4713",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F9420",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824124034",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824258014",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824260103",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014315",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4604",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824007150",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1751",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002769",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014340",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824009552",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18K9890",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157192",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824248130",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140131",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824260118",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824227106",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D2501",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002820",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F9379",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824124031",
	"http://www.newegg.com/Product/Product.aspx?Item=0MJ-002F-00003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824219142",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824116570",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824124023",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824189058",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D2528",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002837",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014360",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824200048",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140127",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140144",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824219175",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824248119",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824258042",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824200100",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4613",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006186",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824007164",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157216",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014351",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3891194581",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824116622",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002625",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38919M2855",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4650",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824248157",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824248148",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18K5607",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1681",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1747",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824116621",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117C4918",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D2253",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006277",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80K02959",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1730",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006270",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002714",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002724",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824016164",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X3353",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D2498",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824124027",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824189050",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002835",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824219170",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157165",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824302023",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4175",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014364",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824219176",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ19N5336",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157208",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28A1000693",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824116619",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140158",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824187216",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824266026",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824124021",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824200092",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824187228",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157156",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4719",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157229",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28A1000696",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F9376",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3891937504",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z1187204",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824248104",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2RU19G2873",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157215",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824227073",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F9424",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006275",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824124035",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824116426",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824187226",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX1402082",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824187221",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140154",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D2504",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D2559",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4764",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D2506",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140040",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824007154",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006266",
	"http://www.newegg.com/Product/Product.aspx?Item=0ZK-003Y-00020",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0NW16E3373",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2RU17S3058",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F9419",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824124033",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014307",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1686",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002768",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824248129",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4129",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824227101",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0NW17E5484",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18M0641",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4731",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002726",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0YK6537",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824200099",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157255",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ11P5460",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824116633",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824248144",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X4038",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117C4917",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006269",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002824",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002698",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824124026",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824189046",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824189061",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014363",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014333",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0NW16H8252",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824124020",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824200087",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F9370",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F9423",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1723",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0NW14E8525",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2RU19G2768",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002452",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140153",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014319",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4606",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002595",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4685",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F9417",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014301",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SF0FA7143",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824007145",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002771",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824219178",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824248126",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4114",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18M0638",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K8667",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824200105",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824116632",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918N0896",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K8723",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ11P5336",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824124024",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824189060",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824301003",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1722",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140145",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D2502",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ11P5418",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002821",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F9415",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824124032",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824248123",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824200104",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824009566",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918K4636",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RF6542",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824189059",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824200075",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AT0MB6266",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824248120",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38911H0138",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824200102",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157257",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824260159",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824200101",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006217",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824718011",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824718001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824219166",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824140168",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824219167",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824276037",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824176428",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002656R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824219137R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824219116R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824187142R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824014342R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824116515",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824124019",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG1131279",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824002627",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1F80GD1928",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X3603",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824219118",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824332015",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D4470",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D4532",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SM0HP6139",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D4527",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0H46680",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1687",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0NW16H8261",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1724",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AT1860894",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824006241",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16824157236",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D2503",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18M0751",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AT1859638",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18M0739",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X1516",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AT1868867",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ1229060",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ11P5475"];