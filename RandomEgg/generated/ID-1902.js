var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YT1237",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15Y1041",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3CS14M9859",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803001442",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803001465",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0PV9085",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0PW8362",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914H1866",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803001444",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680538",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0PW0412",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803001428",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0PV8381",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803001452",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803001414",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X8593",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1800903",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0PW4224",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0PV9362",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38911P3448",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803001455",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803001374",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114P2933",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3B212Z3252",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TS0897",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0PW2780",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3CC18K4286",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA27C1684378",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680633",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680569",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0PV9471",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38911P3329",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680236",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38911P3482",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803001454",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114P2958",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0U24775",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680589",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803001970",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3EX1680690",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38911P3320",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803001969",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3SW1889893",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38911P3552",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TN3897",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803001463",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA27C0YA5387",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680518",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803001971",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114P2905",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3CC18K4307",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ14M7608",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2SP14N7345",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38911P3627",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680611",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38911P3319",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA27C0WZ6184",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803001418",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA27C0YA5328",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114P2950",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803003907",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0PW0237",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA31J17S3327",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114P2972",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA31J17S3386",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA14R0MS1225",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680418",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680606",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114P2921",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XM5363",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XM4181",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ14M7845",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11680447",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114P2942",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA27C0WZ6223"];