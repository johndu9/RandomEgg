var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132048",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157470",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132070",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130681",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131989",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128654",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132039",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128676",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128562",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132053",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157289",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128671",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130693",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128670",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157369",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128677",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128594",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131801",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132038",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157359",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130695",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128617",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130692",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157371",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131837",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157384",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128591",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130697",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128592",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131975",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131976",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128595",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131982",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131977",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813138357",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157377",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128547",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128668",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128579",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813186231",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2570",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130723",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116M0622",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128631",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157374",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128650",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135303",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131798",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D3820",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128596",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130726",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2582",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131983",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131804",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157330",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157325",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2572",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130729",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131979",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132014",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135355",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2587",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2581",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157380",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130691",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157451",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132052",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128603",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135358",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D4848",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D5083",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813121713",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130703",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128629",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D4808",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2566",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157372",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130684",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157370",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157378",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128548",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128607",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135365",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130673",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157327",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128599",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128669",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2592",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128580",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813186234",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D3509",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131819",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131822",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2573",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130730",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128541",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157383",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128590",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157303",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130724",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157390",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128554",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135362",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2588",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813138379",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128646",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128526",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813121776",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157365",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135336",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157375",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157392",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131833",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813186214",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813121714",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131991",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D3118",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813186216",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157328",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130711",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135353",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813138353",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813186228",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2567",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131978",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2574",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157373",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132047",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130727",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2584",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157379",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157449",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135324",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131966",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131967",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130665",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D2968",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128589",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157302",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128550",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131805",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813121775",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130733",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157337",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813153253",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130710",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813186225",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157397",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135323",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813121774",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131860",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813153243",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2593",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128582",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813138386",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128584",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131820",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131970",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813188122",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131823",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130654",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135346",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128674",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2589",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813138380",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157381",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157456",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128647",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813186238",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128616",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131856",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157453",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130736",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813138374",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813500087",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131840",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135367",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130689",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132028",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135359",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813188125",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131836",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128672",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131987",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131824",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813182541",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157385",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135338",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135369",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130656",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130706",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132032",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157329",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157322",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135354",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128630",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813182151",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2569",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128649",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131990",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135352",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135347",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131965",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128606",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2585",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128675",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157362",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157450",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813188133",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135357",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130694",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157301",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D3698",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813153222",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813138384",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131984",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128537",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131996",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157382",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130653",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157253",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131855",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128608",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130735",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157391",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131963",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157338",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128575",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128601",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128648",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128569",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135306",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813121773",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157293",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813186235",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813138387",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157294",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131985",
	"http://www.newegg.com/Product/Product.aspx?Item=296-000A-00002",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D3047",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132042",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157295",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128660",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131986",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813182665",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813121787",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813182710",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131857",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2575",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157368",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128532",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130731",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132041",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157454",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131980",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157315",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128544",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132044",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157296",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131998",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130737",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131994",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128662",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135343",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813177002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813188130",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157304",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131981",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131988",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131858",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128667",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130725",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135308",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130690",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135356",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130702",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128555",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157300",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2590",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813138381",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128657",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135360",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157249",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130740",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131826",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131832",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157279",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157448",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157356",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131995",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128588",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130732",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157389",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131878",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813121786",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128673",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157367",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157455",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128587",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128615",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135341",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157314",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131971",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D4117",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157318",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157376",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128546",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128626",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128604",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813188132",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157297",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131817",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130647",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130739",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128567",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157447",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813121604",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157393",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D2411",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157460",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D3806",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135344",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157282",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131964",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D4428",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130700",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157343",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157388",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135373",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131992",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135340",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813121504",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128593",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813153259",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128619",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813188131",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157387",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135372",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157311",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157386",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135371",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128618",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135370",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130659",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132064",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131956",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132067",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813188142",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132065",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813188128",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131951",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813188129",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132062",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131864",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131962",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131954",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813188126",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132061",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131976R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131982R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131798R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131989R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128596R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131983R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157330R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131979R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135355R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131822R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132039R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131991R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135353R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131978R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132047R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131966R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131967R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131968R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157302R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131860R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131970R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128512R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157381R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131856R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131800R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132032R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131990R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157371R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131984R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131996R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157293R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157294R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131985R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157295R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131980R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157296R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131998R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131994R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157304R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131821R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135356R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157369R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128588R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128587R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131971R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128604R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157297R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131817R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131887R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131964R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128618R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128595R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157377R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128547R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132014R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813121665R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157370R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131819R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157303R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128526R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157328R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131802R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813121775R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131820R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131823R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128617R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813500064R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131840R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132028R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131987R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131974R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131965R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813153222R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131855R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131963R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128569R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813121773R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131837R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132042R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813177002R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131848R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157283R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131981R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131988R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135308R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131826R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131832R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131995R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157314R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131835R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131801R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157312R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131992R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157311R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131802",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813132046",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131821",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131835",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131859",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130688",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130643",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130696",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131831",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813135304",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130686",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131968",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813128536",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130645",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131800",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131974",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130648",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157288",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16K2578",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813131993",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813188070",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813121739",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130660",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130699",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157310",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813130698",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157378R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157374R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16813157236R"];