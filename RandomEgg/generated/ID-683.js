var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051322",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051333",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051338",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051340",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051838",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1030805",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051343",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051841",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051282",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1050877",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051005",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051399",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051344",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051850",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051814",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2SN0ZZ2598",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TM9539",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TM3836",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051288",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1053553",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TM3091",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1050883",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051007",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051402",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051871",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051310",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051828",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1Z80K12923",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051348",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051854",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051816",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051040",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051132",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051262",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1053515",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3UN1838585",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051297",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1053556",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051121",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1050953",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22A17B5920",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051009",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051422",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051884",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051204",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051316",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051830",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1030780",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051274",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051003",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051395",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051810",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1053541",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051867",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051309",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051823",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1053571",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051024",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051130",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051258",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1053369",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051118",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051189",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051265",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1050972",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051808",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1053528",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051303",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1053568",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX19N4211",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051018",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051124",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051255",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1052903",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1050961",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051806",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1407350",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051014",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051252",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1052030",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051443",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051249",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051893",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC14C3144",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051247",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051245",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051242",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051239",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051232",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1051208",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F1209331",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1Z80KF4067",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F1527550",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F0ZB2272",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1Z80K12922",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F0ZB2270",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F1527552",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F0ZB2283",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F0ZB2282",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TP7572",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA29P17B5621",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA29P17B5614"];