var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882533003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882600207",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882430010",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882533002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882600206",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882430009",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N81753215",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X1400",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882430017",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ13N7543",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882283001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ13N7544",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80RF2722",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ13N8166",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D916K0230",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X4121",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D916J9690",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T17T8396",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18P3053",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D91747025",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX10R6720",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T14S4224",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3CS17M7372",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18P3054",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0PB5487",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882125513",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1UZ0K49071",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0ZG1397",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18P3034",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18P3056",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU14U7918",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T0NJ1195",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ17D0278",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1EF0R72105",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18N1353",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T0KM3790",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18P3049",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1EF0R74805",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18P3060",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22A0R92153",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3CS14R6167",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TR2295",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18P3021",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D91747164",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA34A1946354",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TS0730",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914K0971",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18P3018",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2MX0ZN1116",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CP0WW8754",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914K1228",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18N1367",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ND17D0069",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F12S3987",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16886964006",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ND17C8402",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F14J0895",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ND17C8406",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ND17D0064",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ND17C8399",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882105678",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882105725",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ND0KZ7754",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ND17C8408",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F16U0651",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882641369",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ13K8021",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TM3924",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ13K8532",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0GT5906",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ZC0ZP3771",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0RU2672",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V10G0409",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TP9233",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18N3156",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ12M0549",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TN8006",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0H46726",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG1125045",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG1008233",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0RU5428",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TS0437",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18N1409",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D916K0284",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117N7565",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ18N1404",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ND17C8403"];