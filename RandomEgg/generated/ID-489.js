var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16886964005",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0D42731",
	"http://www.newegg.com/Product/Product.aspx?Item=117-000C-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882676152",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X0884",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y3753",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YV2320",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0H82211",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X3972",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22672",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1PU0FR1176",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0959",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22566",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0928",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0EA6193",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TJ1149",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RE3886",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22673",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0PF0546",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X1707",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15Y0CR4758",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0960",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22568",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22597",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0939",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1PC0JE6354",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z18664",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22675",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0PF0548",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TR5417",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RE2343",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YU6848",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX1132095",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22583",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M1137",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22629",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0967",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1PU0NG1921",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0F08538",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22571",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YS7771",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0SX4222",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA13Y0J59674",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0940",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0P50072",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2R10YB2792",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1PU0T22514",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22621",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80MK5456",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y2249",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22677",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1155493",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0PF0555",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22637",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D1096",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0U30829",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YS9467",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0EY6580",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22644",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22584",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN1090",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA34A1966226",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15Y1016",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z43688",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22593",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22633",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X0600",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN1003",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0993",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0975",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1PU0NG1929",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D3489",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22572",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M1200",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11526222",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2W014M7626",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22599",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0942",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1PU0T22524",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ZZ0ZA1522",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0D11530",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914K1220",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0YM0MP7821",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22623",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1992818",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX10R6209",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ11H7281",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22678",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15S5923",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M1205",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0PF0578",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0PF0536",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3CS17M7473",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T17T8555",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0T79802",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22916B4886",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0D54847",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22603",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0948",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0R80NZ2156",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA27C10M4114",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AT0C49860",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0EY6581",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22645",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22659",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TN9029",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0ZN7654",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN1095",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X1292",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z43689",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22595",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0D39340",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TR4227",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22627",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TE0646",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22634",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22688",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T17T4907",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0TV4154",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22574",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11526225",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0Y42394",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ1692126",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22600",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0944",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ZZ0ZA3460",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15Y0Y68816",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0PN4044",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22625",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2KM0WX9110",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22577",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX15J2818",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CP15M8128",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22556",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22679",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1HS0HC7945",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0PF0611",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1PU0FR1155",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0PF0538",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22916B4976",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22579",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA32114A9307",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22617",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22639",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2250TV7873",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0PF0533",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22655",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0PC0063",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2990YW4061",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TE4330",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA34A14K6326",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0T79803",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA32111N5691",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22651",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22558",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22604",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0950",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22561",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M1054",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22682",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22611",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22646",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22660",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK11D2880",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22587",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114P8481",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN1098",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1EF0GZ4253",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22665",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W6001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22671",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1PU0FR1173",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0953",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22565",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0927",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0PF0545",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1PU0FU1068",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1J70S50484",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA27X0UA5480",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SF0ZT7458",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22916B5006",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22916B5063",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22582",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22669",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22628",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1PU0NG1919",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0SX4221",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y3603",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22620",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T17T4756",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22635",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22916B4671",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0EY6576",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22643",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN1038",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN6203",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1PU0FU1054",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22592",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0998",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22575",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11526226",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0PF0535",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1PU0K69382",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22601",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0945",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ZZ0ZA3462",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22658",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22626",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914K1522",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1983116",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0XJ6485",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0P50202",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22616",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22580",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0PF0532",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22654",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0PC0062",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D4920",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1PU0FM3745",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22650",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22557",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M1274",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22560",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22681",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2DR0UN8652",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2FB0ZW3338",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA27C12N2586",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1EF0GZ4252",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22664",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0YM0MP7979",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0PF0631",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22670",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1PU0FR1172",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0952",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22564",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0PF0542",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ND17C8429",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0UF6252",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80RF2723",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22916B5061",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1157785",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T17T4886",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1PU0NG1917",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0F08533",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA32114A9502",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22618",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22916B4670",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22641",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25P12E8142",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN6192",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22591",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22684",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX1010998",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0PF0534",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0YF7252",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22656",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX10R6749",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22554",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22916B4898",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22613",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117P1688",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KE0PF0527",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22653",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22649",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22559",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22605",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z18650",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1EF0GZ4238",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22663",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0951",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22562",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D916K0048",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11526215",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0KZ7401",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882116157",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CP16N5042",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M1056",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN6189",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22590",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M1253",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T14S9311",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22553",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22612",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22647",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22661",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22668",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2GB0Y76586",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y3674",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN6175",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ14U7909",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22551",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22667",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN1111",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1EF0GZ4254",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22550",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22666",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M1210",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882116190",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ND0EF3859",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2GB0YX0405",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882226022",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU0UM0469",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F0ZB2625",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F0UF2411",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA13Y0P72095",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2GB11B8787",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F0YW9436",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F13R6114",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0D11495",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ND17C8392",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F0UF2413",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F0UF2414",
	"http://www.newegg.com/Product/Product.aspx?Item=117-000C-00009",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2GB0Y82277",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290US5465",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290US5466",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D1187",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M1135",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22916B5014",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11526221",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1EF11F8269",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22916B4672",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M1250",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z43671",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RE3126",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0PC0050",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1EF11F8271",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117C5402",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290US5462",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN1004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0995",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0983",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80P21063",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1EF11F8272",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22916B4888",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1HS0ZY1647",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290US5464",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG18M0836",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3CS17M7339",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290UN0989",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y3492",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG18M0824",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0S22276",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050MM3857",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11526229",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22916B4988",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0YF7280",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1EF11F8274",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK11D2670",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M22683",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RE2234",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11526208"];