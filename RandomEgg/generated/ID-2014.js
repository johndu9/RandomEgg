var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803500797",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06U12T1921",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10F7321",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA14N6077",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06U12T1924",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10H6278",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK11F5849",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA1269269",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10J3403",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10J6593",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10U6242",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10N1881",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK17S9907",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10N3983",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11U5671",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11V4921",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11V4813",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11W6589",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10F8521",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16803651101",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11U5893",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA1292563",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA15S4630",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11U5726",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11U5750",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10J3424",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA12F3967",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10J3648",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA14N6033",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10H9121",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK17S9882",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10F9006",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10J9100",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10H9129",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK17S9809",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10F5070",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10F9065",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10J3495",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA1292571",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10J3507",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10H8518",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11V4873",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11U5723",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK11F5755",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11U5908",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10J2864",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11U5798",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK11F6053",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA12G2469",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11U5900",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10F7838",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA1279174",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11U5718",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11U5839",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10U6103",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11U5841",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA12G1221",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK19N3829",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA1292400",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11U5948",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10H8853",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10J3772",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10J6624",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10H9998",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11U5795",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10F7362",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10J0016",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10F6778",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA1269352",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK1964879",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10J8874",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11U5784",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11Z6907",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1JH0HS2550",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK17P9340",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10F5500",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11U5932",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10N5898",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10J0032",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XM4389",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XM4697",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XM2705",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XM5304",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XM1907",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XM6442",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XM2998",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11V4901",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11W9302",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA12G1003",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA14N6039",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10H8698"];