var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107161",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107453",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107075",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828006523",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828006584",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107076",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828103040",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107130",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828006521",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107180",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107167",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107118",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107103",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107141",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828103159",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107156",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107124",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828103041",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107068",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107106",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828103154",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38911J0332",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W3085",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W2190",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80M91227",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TK2277",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107071",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TK9465",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3891176571",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107105",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TJ3768",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W1948",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80M91263",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TK2282",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0U30326",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0U26731",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TK2487",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80M91226",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3891176572",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828006522",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107157",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0U26275",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828103043",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TK6785",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TK2553",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38914J6437",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107179",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0U26753",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X3104",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80X83982",
	"http://www.newegg.com/Product/Product.aspx?Item=1AV-000A-00003",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290TW9419",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TK6901",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W7853",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X8832",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828103042",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ1131264",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107181",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828309455",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N812H4316",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0U26017",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107093",
	"http://www.newegg.com/Product/Product.aspx?Item=1AV-0003-00011",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107149",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107168",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TK9444",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TJ9739",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38911H8020",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX1161882",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107160",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0U28326",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290TW9420",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W3130",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116G6223",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2X50ZX7602",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107070",
	"http://www.newegg.com/Product/Product.aspx?Item=1AV-000A-00005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107474",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828103939",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X8941",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E117D3553",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ1131267",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15X9047",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TK2182",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107129",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80M91188",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38911G8533",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TK7130",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80M91258",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80M91251",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107094",
	"http://www.newegg.com/Product/Product.aspx?Item=1AV-000A-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107154",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX17X2396",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TK2426",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107069",
	"http://www.newegg.com/Product/Product.aspx?Item=1AV-000A-00004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38917J8451",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107152",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828006586",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38918J7121",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107132",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1EF0F43621",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W0746",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TK4722",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290TW9445",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107142",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2290TW9421",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2X517C7042",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TK2475",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0UH2495",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX17P1321",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80M91191",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TJ3735",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0XK7643"];