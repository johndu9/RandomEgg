var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0493717",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0493718",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0493719",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK08S5615",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0493721",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TR12J4331",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2DH0Y37860",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E0HX3933",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0493722",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0HM9326",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0Y90MP4415",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E0S09498",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0DV5038",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0RD7133",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0T23728",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK08H7756",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E06S7089",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0493723",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11U5343",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0Y90MP4427",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2369",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0RD7151",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E0S09499",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z34871",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E000J9F6",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11Z4894",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0RD7141",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA07506G7284",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TR12J4181",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0T23772",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA07506G7290",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1157681",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK08H7834",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0492441",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0493724",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19D8283",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0DW8248",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A77887",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E0S09500",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TR12J4275",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX1958405",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0DV5043",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0AG0798",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0RD7142",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA07506G7285",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0SA0448",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0E37761",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK08P6043",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A77637",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0AF1584",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0492442",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0RD7119",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0E37808",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0493725",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CW0WB3937",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0MV9270",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0D21277",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TR12J4304",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK08P6049",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0JN8577",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0AG0786",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0AG0800",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0HD1897",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1DG0UH2956",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK08H9259",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0493715",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0RD7124",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA07506G7286",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0492439",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0BG0442",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK08P6044",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19C6952",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0AF1586",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0HX8112",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0492460",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0RD7122",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0JN8455",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0H25465",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA15S4427",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TR12J4208",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0492443",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0RD7120",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0RA5770",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0SA0832",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1155665",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0E37296",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A77905",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA1671732",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0PH4254",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1157715",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0MV9271",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0E37709",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0MW0268",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1G30ZC8415",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E0YK8861",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0A77601",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0R77367",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06U0YV8153",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E0RU9342",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK08P6135",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA1676584",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0492436",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK1176815",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0SX9945",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0492429",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0YR7598",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CW11X8322",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E0SX9409",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02D0672855",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK1925823",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0493716",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19E8156",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E0Y66592",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX1927176",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1DG0UH2957",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0V408T7876",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0BC1860",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0AJ7489",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0T23711",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0V40NN1016",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX1927497",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0RD7130",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KX0M41389",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0YR9243",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA07506G7287",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0V417R4865",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0492440",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TR12J4220",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CW1750586",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CW17S5294",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA17P0TB0076",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06N07K2332",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E0YK8863",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0BG0443",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK08P6041",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS0PN4561",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0V40S41291",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06N07K1012",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK08P6048",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0C69050",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19C6961",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0AG0784",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0FB1881",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0HX8114",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA1670086",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0492461",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK08S5602",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0RD7123",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06U0YV8004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0492438",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0S88228",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ED7955",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19C7073",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0492445",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0RD7121",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E0CK2637",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0RA5772",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0RA5768",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AV1043022",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK08V6195",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0AB3019",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2321",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0JN8447",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E0RU9341",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK14K4788",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0492434",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19D8249",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0492428",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0492425",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0HF3766",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0NF9581",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E0AG4640",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0SA8816",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0V40K49442",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TR12J4284",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E1966879",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2DH0Y37853",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0FB1848",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E0YK8862",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CW0WY4630",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0E37902",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0492437",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0S88226",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19C7060",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E18J8963",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E1928063",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0ED6771",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK1925832",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0SA0539",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E0RU9340",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Z0492433",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK1925825",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0E37860",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0FB1870",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0D99941",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CW0X16230",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y19C6967",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1G30ZP2742",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E18J8962",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V1976037",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E0RU9339",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0Y86625",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK14K4786",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK1925824",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06U0YV8168",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0D99937",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06U0YV7805",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ZD5350",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0AJ7454",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0AG0807",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA06E18J8961",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0ED6769",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2519",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0D99934",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0AJ7453",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0AG0806",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XM4536",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0T23725",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2037",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1885906",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C8675",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2506",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK08S5603",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2365",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2463",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1885649",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0YK9899",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK08S5600",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2499",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2523",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2267",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0D21308",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK14K4792",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C8625",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2390",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1879582",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2212",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK08S5606",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2434",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2258",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2297",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2477",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2275",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2379",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2344",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2312",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C8654",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2446",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2268",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2223",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2448",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK14K4787",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2488",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0TK0ED6770",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2213",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2472",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2220",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18C2332",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1885940"];