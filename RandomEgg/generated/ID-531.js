var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882676319",
	"http://www.newegg.com/Product/Product.aspx?Item=0R4-0002-00017",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882676329",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882005155",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T0Y63839",
	"http://www.newegg.com/Product/Product.aspx?Item=117-000U-00006",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882116198",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882676320",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882116195",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882116196",
	"http://www.newegg.com/Product/Product.aspx?Item=117-000U-00007",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882108369",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882116197",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ10E6811",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ10E6812",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882676347",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ11K6640",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ14V2405",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YS9358",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ11K6641",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13563",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA29P0R36465",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0SG9809",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13605",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0SK7397",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ11K6642",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS0S30892",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1J70S50516",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13564",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0N92259",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13575",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1J70FP1616",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ11K6637",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0SG9811",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13606",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0EA6179",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13633",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ11K6643",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13642",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T14M7838",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1J717D7878",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13627",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13590",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13619",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13610",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13576",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13587",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13578",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2990U76399",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13607",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0SG7855",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13636",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13617",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13634",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117C5418",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13584",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0NA8046",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13643",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ1478436",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0V67964",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13566",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13569",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13599",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0TT7669",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13628",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13592",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX15J1455",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13620",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13611",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13577",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ11K6639",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13562",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13604",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0D11520",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0R71115",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M1025",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13637",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13645",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13626",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13618",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0NG9886",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1J70FP1564",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13635",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13616",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25P0PG1721",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS0S30895",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13583",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13568",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13598",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0TG4858",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25P0P68777",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1J70FP1511",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1JX0UN3403",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13561",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13571",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13602",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0F09596",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13585",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13631",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13644",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13625",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13615",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0TH8740",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS0S30927",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13582",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13567",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13597",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13560",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13570",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13600",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1J70FP1437",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13630",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3ER1521750",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13623",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13614",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS0S30926",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13581",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13595",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13629",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3ER1521401",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13622",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13580",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13594",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13621",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0TG7233",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13612",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13579",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0TG7231",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882676348",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ16K6130",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2GB0YK7525",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F0ZY9945",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1M80V87393",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ11K0002",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F0UE9362",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882676340",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F13U0867",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1Z80KE4839",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1JX1691987",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F0YV5827",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F1499200",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2GB0YN8082",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882676336",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F0UE9365",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F0UE9360",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F1315400",
	"http://www.newegg.com/Product/Product.aspx?Item=0R4-0003-00013",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F0YV5826",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2GB0YN8054",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2GB0YM8831",
	"http://www.newegg.com/Product/Product.aspx?Item=0R4-000B-00003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882676334",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ10E3998",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F0UE9356",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ10E3997",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20S0K92792",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XC15U8879",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16886885001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F13N4939",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882005129",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13589",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TM2333",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13557",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M13632",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117C5469",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882105729",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2DY0T36324",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882105734",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882103621"];