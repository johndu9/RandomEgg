var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249160",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832767032",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249131",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249161",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249150",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249154",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832762022",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832767025",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249145",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249136",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832767035",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249158",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249173",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249134",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832767033",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249171",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249132",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249169",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249119",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249121",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249162",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832135358",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832767029",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249151",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249142",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249155",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832762023",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832767026",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249127",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249146",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249123",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249164",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249137",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832767036",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249159",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832767031",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249130",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249149",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249153",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832762021",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249144",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249135",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832767034",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249157",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249172",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249133",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249170",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249168",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249118",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249120",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832135357",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832762025",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832767028",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249141",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249126",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249122",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249163",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832135359",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832767030",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249129",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249148",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249152",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832762020",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249143",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249156",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249167",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249117",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832135356",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832762024",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832767027",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249140",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249125",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249128",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249147",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249166",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249139",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249124",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249165",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249138"];