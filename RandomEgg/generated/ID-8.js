var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101314",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101677",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110061",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101364",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101378",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101698",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101259",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101323",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101363",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117331",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101387",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117332",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110103",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101388",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101235",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117333",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117391",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101389",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101383",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110063",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101275",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117197",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117358",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117316",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101696",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101718",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16856102041",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101236",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816321037",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110089",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117374",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101697",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101719",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110098",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101669",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101324",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101787",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101769",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101797",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101384",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101671",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101679",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110064",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101690",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110088",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117384",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117253",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101786",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101767",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101791",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110087",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117382",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110070",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101625",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117338",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101722",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101687",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117267",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101632",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110055",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117348",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101705",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101726",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101806",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117274",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101688",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101757",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117259",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117271",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110075",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101773",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101814",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101834",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101633",
	"http://www.newegg.com/Product/Product.aspx?Item=2KH-0001-00019",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101675",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16856102046",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110100",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101241",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101790",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117357",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101693",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101729",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101668",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16859110004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110085",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101282",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117255",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101796",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101832",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816135001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101789",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101689",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117383",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117239",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101766",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101794",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101600",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101685",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117264",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101318",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117347",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101701",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101725",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117273",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101747",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117270",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110096",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101338",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101327",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110092",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101229",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101386",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101321",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101268",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117352",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101807",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110097",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101670",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101678",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117238",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101784",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101815",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101489",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117262",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117272",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101365",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101326",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101266",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101667",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16856102031",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101377",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101788",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101793",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101798",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101684",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110094",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101385",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101261",
	"http://www.newegg.com/Product/Product.aspx?Item=2KH-0001-00029",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101260",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101235R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110067R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101791R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110070R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110055R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101245R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16859110004R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101282R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101338R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101377R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101260R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101378R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101685R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110097R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101259R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110067",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101242",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117317",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117256",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110074",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816110062",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101716",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101820",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816117275",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101332",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16816101676"];