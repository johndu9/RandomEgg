var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249095",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249106",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832211246",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832211243",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832196569",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832211247",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832196619",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832196515",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832416502",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832196492",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832335041",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832335042",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832335044",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832335045",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832312066",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832312100",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832196370",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832312081",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832767003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832312095",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832335028",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832335009",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832312099",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832312023",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832211198",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832767008",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832335007",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832312098",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832196527",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832312054",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832312056",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832312068",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832855071",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832627071",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832627081",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832310147",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832767037",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832767017",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832767018",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832335010",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832312067",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249103",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832312041",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249112",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832335023",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832310193",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832196279",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BE4016",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249104",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BE4023",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832312121",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BE4088",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249097",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249108",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249113",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832307097",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832307122",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832310146",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832767016",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832312062",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832312113",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249094",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249110",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832310191",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BE3975",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BE4010",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BE4020",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249105",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832211245",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832392023",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BE4082",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832312090",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249107",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832394016",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832312122",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832182213",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832196620",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832307121",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BE4095",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249098",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832416564",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832211244",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832211190",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832196633",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832211151",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832196490",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832196632",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832196489",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249099",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832335043",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832307106",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249101",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BE4005",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BE4413",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832307092",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249047",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16832249109"];