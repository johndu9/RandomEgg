var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116905",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116906",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117286",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116908",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116909",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116907",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116910",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117269",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116904",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819113306",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819113026",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117266",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819113316",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117284",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819113020",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117234",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117270",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819113303",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819113323",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117268",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117287",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819113321",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117271",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117285",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819103927",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117288",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117282",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117267",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117273",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117283",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819113320",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819113318",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117272",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819113322",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117262",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117278",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117264",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117279",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117277",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117263",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117280",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117231",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117254",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117274",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117265",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117275",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117276",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117293",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117281",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819181248",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116932",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116935",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116927",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D4282",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116933",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116928",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D3685",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11681953",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819175457",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819175461",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116936",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116929",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11681973",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819176097",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116608",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819174042",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819181217",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116931",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116934",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116926",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C517D1318",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D3578",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819175460",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16859204171",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819175464",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819113057",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D4370",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116937",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819181193",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116930",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819174891",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116925",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D3981",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819181091",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819174788",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819116628",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819174551",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819174539",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819174305",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819174230",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819113304",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819115084",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819117289",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16819115088"];