var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR0AS7581",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M508P0441",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0FJ5879",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG6688",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59532",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M506C9163",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22K0R37613",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0FJ5929",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1640B30267",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9780",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A58956",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M506C9164",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9193",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3150",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22K0R37610",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V3362",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3185",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7364",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22K0NZ2310",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG6711",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A58418",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1640B36026",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9788",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C517T3289",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59543",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3155",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M506C9165",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0H31380",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A58977",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59211",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3151",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V3363",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3186",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0HZ6748",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V3381",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19C5382",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1640K82782",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8175",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U9453",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V3367",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BH0257",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9790",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U9461",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7860",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C517T3295",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59550",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19C5148",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3156",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ZB8316",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8960",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9153",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A58785",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59216",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3152",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22K0NG6874",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0UU5752",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3190",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A57893",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V3364",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2810PG1875",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BH0117",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8589",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V3353",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3163",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1640K82784",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7707",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A57863",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0UU5878",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59452",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3143",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V3375",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U9455",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7797",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7388",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3174",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1640K82651",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59364",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A57811",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0ZC2612",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EY0ZU2253",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7332",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9759",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3RC17C8424",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0D53818",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7315",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U9463",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8420",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3166",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9869",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7879",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17X7425",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PX18P5807",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15G0D08845",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3157",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M506C9151",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59518",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0FJ5907",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1TD0R51283",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59219",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3153",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19C3617",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9276",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22K0R37308",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22K0R37583",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0UU5755",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3191",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V3365",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0H31395",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19C5408",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9359",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3188",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8564",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3170",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8400",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3164",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V3383",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8091",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A57686",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1640K82785",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8507",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V3394",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8053",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CW1750524",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59459",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3145",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59050",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BH0185",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U9456",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59190",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19C5447",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CW1750550",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8676",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CW17S6639",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3175",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1640K82665",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8222",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0ZC2618",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V3357",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7337",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9763",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3147",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3181",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V3369",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0FJ5914",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V3378",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE1934610",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U9458",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3RC17C8434",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0D53812",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9863",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M508P5751",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8423",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8541",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3167",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7105",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0H31341",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0GN1456",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CW1749585",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA27H1848756",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M506C9159",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A58965",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0FJ5923",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0H31332",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A58680",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17X7426",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0UU5662",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3RC17C8412",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59573",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59412",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59179",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0E94297",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3177",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V3386",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7092",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0UY08W3014",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1640K82712",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3158",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7903",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0ZA1263",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M508G3538",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0ZC6337",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59479",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BH0670",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59528",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M506C9162",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9778",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3149",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3183",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V3372",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A58984",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2RP0Y41923",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3154",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0FJ5893",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9285",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BH0018",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1640K82736",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8454",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3192",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG6060",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U9460",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51179599",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0E94717",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0PM1393",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M506C9149",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2810PG1976",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7493",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9961",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0E94579",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9364",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7666",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3189",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3162",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0E94651",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3141",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8638",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3172",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V3355",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ZB8276",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22K0P22638",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3RC17C8423",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0D53815",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3165",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0FJ5939",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V4221",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59167",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0T208V5881",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8093",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22K0P10553",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59510",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59200",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M508P5753",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A58168",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59425",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8545",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1640K82796",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9746",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8399",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8509",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7739",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7977",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7466",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59184",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CW1750146",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CW1751228",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A58947",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3146",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3180",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0K08606",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE1934609",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U9457",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M508P4203",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0UU6269",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1640KC6730",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59037",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8699",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8354",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7407",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0H31312",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3176",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1640K82703",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA08W04Y1890",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59369",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9881",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8237",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0ZC6324",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0H31348",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V3358",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9775",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3148",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3182",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A58755",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1640K82730",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U9459",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7831",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE18K8291",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M508K0773",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG5981",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9927",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3161",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV11G2449",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3138",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A58322",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3RC17C8422",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9865",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59126",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59504",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M508P5752",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BC5863",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A58353",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8543",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3168",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA051000EZJ8",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V517T3284",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7437",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1640KC6733",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3179",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A58651",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0E95082",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8780",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7101",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CW1749356",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9878",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7604",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8282",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0E94489",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A57697",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19C5140",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1640K82726",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8117",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17X7427",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9894",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0UU5719",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59019",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2EE17V3350",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3160",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3137",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3RC17C8415",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M506C9155",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D814J6508",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59581",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59419",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59251",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51649405",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0UY08W3011",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1640K82715",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8103",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3159",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0PM1262",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59497",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0ZA1264",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59140",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19C5186",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M508G3539",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59008",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M506C9153",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19C5465",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59492",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0H31353",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9186",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9263",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG7366",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3187",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9793",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A59569",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8205",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8778",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8374",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8884",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG9868",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3169",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8154",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KR05U3178",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BG8310"];