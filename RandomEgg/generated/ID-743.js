var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896200393",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0RW7541",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896227002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896130070",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TN4501",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896200432",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M78517",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896161006",
	"http://www.newegg.com/Product/Product.aspx?Item=0G1-000A-00003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896389158",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896130073",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896659104",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TN5436",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896200385",
	"http://www.newegg.com/Product/Product.aspx?Item=0GT-00AD-00004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0T95302",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896765011",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896200348",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896367022",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896389159",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0T49680",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M806Y5778",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M78524",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0T95610",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M78512",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA05F0P26103",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0DA1245",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0TR4150",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M78522",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M78526",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1YT17M7477",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0NM5743",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0CB7633",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1RM0FM3758",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0YP8158",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2FH1156393",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SY06U1072",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1RM0FU5184",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0YP8159",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28R0PK0613",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15V6595",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M806Y6177",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0RH4875",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BE8836",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0U52980",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0CA0176",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M78513",
	"http://www.newegg.com/Product/Product.aspx?Item=0DZ-006U-00011",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28R0PK0614",
	"http://www.newegg.com/Product/Product.aspx?Item=0UY-0014-00003",
	"http://www.newegg.com/Product/Product.aspx?Item=0ER-001D-00014",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M807F5781",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0T45330",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1SV0FZ5642",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0EZ5180",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CP16N3344",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M78514",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0C06427",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA05F0P26246",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0XJ6477",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z19N4638",
	"http://www.newegg.com/Product/Product.aspx?Item=0ER-001D-00020",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AT0KS6873",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0GC9992",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ1612509",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z14J1945",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1SV0FZ5975",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z33547",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z14J1948",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0CA1591",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1YT0JS9735",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0FY4261",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1RM0H08000",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0JN8805",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0DW9814",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C0PR8530",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y08W5063",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0T94221",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1SV0FZ5409",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1YT0JN7537",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0R90752",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28R0PX6203",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z33590",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0YX0598",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1R60M51078",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0CA4112",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0YX0606",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z35019",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15U9424",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1RM0HF5629",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA05F0P26098",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX19N3977",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0H20174",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1YT0K73001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0JN8678",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0CA1590",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z33548",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ14V2658",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M78523",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C16Z9525",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0YP0C36090",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SF0P97816",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0YX0595",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AT0MB6550",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1R60M51077",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28R1521588",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896200475",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0965014",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0J82632",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0H20147",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0CA1589",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1813779",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1RM0M68968",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0CA1588",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z35028",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M78518",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28R12P0640",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z1420464",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1W80PT1342",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ13D2578",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1W80PT1438",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0CA1025",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0CA1024",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28R1421314",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0CA3902",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0HW2392",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0HW2393",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C15T5299",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28R0Y42922",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0HU6175",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1813738",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C0PR8504",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1813699",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0HW2397",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1813760",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C15T5298",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1813530",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0H43310",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0JN8806",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C13J3914",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28R1887285",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1813671"];