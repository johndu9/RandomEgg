var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02D08B2042",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0U00AP4708",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02D0C52419",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0U00B87895",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KT0NJ7735",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D3779",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA03U0C31300",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D3549",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0PS3396",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D1802",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0D11192",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D3618",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0R90901",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P12G4932",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0R83374",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D3686",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D3605",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TP9887",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0ZD9086",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V12F5251",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU0BF1476",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YU9740",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D3606",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D3711",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D1401",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TR3037",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TR3231",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3DR14J2883",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KT0H07661",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D3973",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TH9109",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D3632",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2M013R7336",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0T45234",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CP16N5311",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YS9548",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ZC0K71073",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P12G4198",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02D18R5926",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19H3467",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02D0869595",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D1731",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YS8165",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02D08B2043",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA03C0UF3985",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0R71976",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA03C0UF4008",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V1849135",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11681837",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA03C0UE9317",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AT0F01115",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0XH4052",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0H29390",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ZC0ZP9358",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10G2810",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA08C0UU2993",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0YM10G2071",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0U00G11917",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA03C0UF3980",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P17P6543",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0R83106",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA03C0UF3996",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2KM0WY1607",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882636010",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0UT7091",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1BZ0S65878",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0P85470",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0V59450",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P12G4242",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P13D7540",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P16H3475",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882636017",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KT0NJ7755",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02D18R5925",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK11D3290",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU0B03814",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0FU0BF1468",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02D09F0294",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA03C11R1980",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D3544",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TG6082",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10E5721",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19H3526",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11681914",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA17P12E8533",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX1405075",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1PC0G55119",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P13D7754",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0S38837",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YS5384",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1K017C8391",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11681917",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA08C0PA7330",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA03C0UF3977",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA03C0US6711",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CP0WW9430",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YS7728",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10G3090",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050MM1771",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA08C0SN6052",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA08C0SN6019",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA03C0US6709",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114P3455",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA03C0US6707",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11681910",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11681850",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XM7358",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0T48041",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0P85849",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11681948",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D0995",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10E5847",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0XH0428",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P12M9322",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0R71967",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA08C0SN6101",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V12S3950",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA08C0SN6018",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0UJ0495",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA08C0UU2964",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0XH0426",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0YX4058",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D3588",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0PJ6395",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TR8354",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11681924",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11426844",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914D3641",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882015051",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P17C8324"];