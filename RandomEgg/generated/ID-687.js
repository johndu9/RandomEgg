var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0507",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0512",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0323",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0431",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZS0K16904",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1517200",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0525",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093737",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R14K0823",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0325",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0432",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G2175",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2SN0ZZ2729",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KW17D5331",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0316",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1517201",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0530",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC14X6882",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0557",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G1825",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093751",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0326",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0436",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093629",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3521924058",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1094709",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G3315",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G2185",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KW17D5334",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0318",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0420",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0539",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC14X6893",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0564",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0357",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G1985",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0300",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093754",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0578",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R14K4662",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0327",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0439",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093673",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1094710",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R14K4957",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G3321",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G2218",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093766",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0368",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1516870",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G2046",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G1224",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093613",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1195060",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G2199",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0303",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093842",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KW17D4681",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R14K4781",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0308",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KW17D5395",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0320",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0423",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0313",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0546",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC14X6895",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0296",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0568",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093760",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0363",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G2030",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0589",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0301",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093794",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC12F4197",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093756",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0581",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0330",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0445",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093676",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093863",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0349",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1094712",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G3325",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G2222",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093773",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0334",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0373",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0463",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093695",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G2072",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G1226",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093616",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093902",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0410",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0352",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G2201",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1195046",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0304",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1094715",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G3342",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093843",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R14J3701",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0394",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G3332",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KW17D4688",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G2706",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R14K4807",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0309",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093778",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0337",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0375",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KW17D5540",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0505",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0322",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0426",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1517073",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2SN0ZZ2594",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093703",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G2161",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2SN0ZZ2728",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KW17D5163",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0315",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0554",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G1683",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093627",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093910",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R14J3468",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G3310",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R14K4775",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0419",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0355",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0298",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0574",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G2215",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093763",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0365",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G2034",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0700",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093611",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1195052",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0302",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093840",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KW17D2228",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0307",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2SN0ZZ2600",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0312",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0295",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093758",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G3352",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0585",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093793",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093847",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0346",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0332",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R14J3706",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0461",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093689",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093901",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0406",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0351",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1094714",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G3339",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0391",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G3328",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G2645",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093776",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0336",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0374",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0501",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1517000",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093700",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G2084",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KW17D4785",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G1682",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093623",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093909",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G3303",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0414",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0354",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G2211",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1195050",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0306",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0311",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0293",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G3350",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093787",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093845",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0343",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0396",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G3337",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0387",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0KW17D4710",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G3299",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0310",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC1093779",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R14J1896",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0340",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC10G0381",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC14C3141",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2XC14C3140",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F1344501",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F0UG3130",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F11R1981"];