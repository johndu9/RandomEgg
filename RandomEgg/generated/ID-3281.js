var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16881892002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16886113008",
	"http://www.newegg.com/Product/Product.aspx?Item=0D3-00UT-00002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16814998083",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815293029",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19Z0E72017",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16886973001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882117409",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16886946001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16881892001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16886946002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16881892003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16881892004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16886999004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16886999005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882117421",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882117422",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815645003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882117423",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1J20MR2679",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882117429",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882117430",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882115421",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882115422",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803205002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803205001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1Z80UU3462",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131976",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131977",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX17X2079",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16822136997",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815100169",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131979",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16833122507",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815260047",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16886690001",
	"http://www.newegg.com/Product/Product.aspx?Item=0VB-0012-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16886113001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815182006",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815140004",
	"http://www.newegg.com/Product/Product.aspx?Item=0D3-00UT-00003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132028",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815598001",
	"http://www.newegg.com/Product/Product.aspx?Item=01Z-00KR-00002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815345006",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813995015",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815182005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131980",
	"http://www.newegg.com/Product/Product.aspx?Item=01Z-00KR-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815179001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131981",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1J20PX8644",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1Z80SE4949",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1J21492216",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815179006",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1Z80XN2789",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131992",
	"http://www.newegg.com/Product/Product.aspx?Item=0YE-000E-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1Z80XN2788",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1Z80ZK4699",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16886113004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132028R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815179006R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16855958001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16886113003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131974",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16868815001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16886113002",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AT1859400"];