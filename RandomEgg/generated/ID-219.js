var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827999007",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827999005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827989004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827999019",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827999038",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994017",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994010",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827999034",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827989006",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827992008",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827998028",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817150606",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817134525",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827989001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817134516",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827998030",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994046",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827998017",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817150607",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU12G3698",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616143",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C511J6025",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30FA3210",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827984004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616144",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30FF7167",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30FA4137",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827984005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994053",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11615976",
	"http://www.newegg.com/Product/Product.aspx?Item=1BD-0002-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU13R7001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30FC0876",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616012",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827986005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827997038",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616184",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817150604",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994054",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30GY4093",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330A82464",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616139",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30FH2926",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827992015",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30FC3880",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827986006",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616157",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616168",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V515Y6713",
	"http://www.newegg.com/Product/Product.aspx?Item=1MT-000F-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616185",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0T93877",
	"http://www.newegg.com/Product/Product.aspx?Item=12D-0006-000C4",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SF0GZ5328",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994057",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616204",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V512F6273",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827992006",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114M2896",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827992035",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994040",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827992017",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30DY9409",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817150611",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994008",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30FC5381",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616017",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E112S2874",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU12G3708",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51175656",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30FD2544",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616026",
	"http://www.newegg.com/Product/Product.aspx?Item=12D-0006-00081",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V515Y6747",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51339075",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827997020",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU12G3712",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616100",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330EY9559",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827997003",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V512U2143",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11615979",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827998021",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330EB9773",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU12F4390",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827992009",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E112S2865",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616197",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51175399",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994036",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330A88163",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827992036",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30FF3395",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11615974",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616136",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827997032",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827992018",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827999035",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827998031",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V515Y6814",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817132004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827992005",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30E30774",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994038",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817150612",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51175552",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30FD2509",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616024",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616117",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994007",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330EY9557",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU12G3714",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU12F4388",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51175371",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51175659",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30FF3381",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11615971",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827999022",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V515Y6806",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616171",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V515Y6795",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V515Y6774",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616059",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616192",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827997022",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616061",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU12F3555",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616071",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2X511D1215",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330A82146",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330C83944",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU12F4299",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30HD4513",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827997004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827997027",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V512U2238",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11615981",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827998024",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994020",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330EB9831",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817130975",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817134526",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827992010",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616198",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994032",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51175403",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330EC2267",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU12G3707",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80N51914",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616103",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330A81932",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330C69299",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU12G3736",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616066",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827993005",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616006",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817134561",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30FF3397",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827984002",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11615975",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616137",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827997033",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU1307838",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30GY4092",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330A82164",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827992020",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827992014",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30H22723",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V515Y6697",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU12F4293",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V512U2330",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817134524",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30E30776",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU12G3709",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827998029",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30DY9046",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817150610",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30FD2540",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994009",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30JM0460",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30HD4372",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827997009",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616099",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330EY9558",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU12G3715",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51175380",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51175676",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30FF3386",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11615972",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827997029",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30H22669",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V515Y6807",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0YM0M11636",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827992004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827998026",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51175413",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330EC7692",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616172",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V515Y6804",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V515Y6779",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616208",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616070",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616180",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330A82104",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330C71861",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616193",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827997023",
	"http://www.newegg.com/Product/Product.aspx?Item=0ZK-0011-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616108",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994029",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330EC2255",
	"http://www.newegg.com/Product/Product.aspx?Item=0Y7-0001-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330C69294",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817134547",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827984001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616182",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330A82147",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827992012",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330C83952",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817134523",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU12F4300",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30HD4526",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827997005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994025",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C512F6269",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616050",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827997028",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V512U2268",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827998025",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51175411",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330EC6541",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11615994",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU12F3605",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616105",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616207",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330A81950",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330C71851",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU13P3300",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330EB9874",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330C68873",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616127",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817134540",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616079",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994024",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994034",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330EC2284",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330A81933",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330C71847",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11615989",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1330C61991",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994005",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616078",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817134514",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616067",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616007",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827994012",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817134004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827998009",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616077",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU1308366",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11876481",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D30HD4512",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616125",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616034",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16827992011",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11876437"];