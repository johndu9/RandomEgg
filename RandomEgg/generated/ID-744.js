var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896660065",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896660053",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896659230",
	"http://www.newegg.com/Product/Product.aspx?Item=0G1-001Y-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896659126",
	"http://www.newegg.com/Product/Product.aspx?Item=0G1-0028-00004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896913001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SY0RN1481",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896659224",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896660030",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896772031",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896659082",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84984",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84986",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84988",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85011",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M806J6054",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896130030",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SF0HF6839",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85010",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M80842739",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896130038",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84959",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15V5894",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0T95943",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84960",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896200431",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84962",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84963",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84964",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80PF0351",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TN4030",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TP9874",
	"http://www.newegg.com/Product/Product.aspx?Item=0G1-002A-00002",
	"http://www.newegg.com/Product/Product.aspx?Item=0GT-00AD-00005",
	"http://www.newegg.com/Product/Product.aspx?Item=0UY-0011-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=0G1-000A-00010",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD14K3809",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0PW7485",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD14K3819",
	"http://www.newegg.com/Product/Product.aspx?Item=0G1-000A-00070",
	"http://www.newegg.com/Product/Product.aspx?Item=0UY-0011-00003",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84967",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15U5698",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK11D4629",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M806T5001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C17C8244",
	"http://www.newegg.com/Product/Product.aspx?Item=0G1-000B-00002",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD17N1150",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M806J6033",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84989",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TR1678",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85013",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TH8308",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TH7041",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD14K3811",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85059",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0580C23451",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA14R0M45630",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA12K9243",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84979",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD1941585",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1994611",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2M01261304",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0S76302",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0PB9534",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11X2071",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84990",
	"http://www.newegg.com/Product/Product.aspx?Item=0GT-0015-00023",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84969",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85014",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85041",
	"http://www.newegg.com/Product/Product.aspx?Item=0G1-002K-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11X3393",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TH6910",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10E1540",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84995",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15V0277",
	"http://www.newegg.com/Product/Product.aspx?Item=0GT-001V-00003",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0P73843",
	"http://www.newegg.com/Product/Product.aspx?Item=0GT-0015-00014",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896130076",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10C3904",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1RM0GR0809",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0ZB7960",
	"http://www.newegg.com/Product/Product.aspx?Item=0GT-007S-00002",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2GB12G9591",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ZB8052",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M806J6058",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ZB9436",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YU8167",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896130062",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85037",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85067",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1SV0FZ7139",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84991",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896200428",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85033",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ZB9462",
	"http://www.newegg.com/Product/Product.aspx?Item=0G1-000A-00013",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896274006",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11U4855",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84970",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85015",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0PT6149",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TP0513",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85074",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TH8539",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD1189106",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA38911G7805",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896274004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11X5427",
	"http://www.newegg.com/Product/Product.aspx?Item=0G1-000A-00046",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G1725106",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TK3280",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1K00RX7232",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85061",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0PB9519",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD17N1019",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896200179",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80MY4069",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS0NW6045",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ZB8250",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1W80HD7986",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ11Y2594",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1994346",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YT3601",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0TC5738",
	"http://www.newegg.com/Product/Product.aspx?Item=0GT-0015-00016",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SY0AB8047",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85021",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TM5802",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85084",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85045",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M80FF4815",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA39817V2896",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896561005",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85077",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0XJ6488",
	"http://www.newegg.com/Product/Product.aspx?Item=0GT-0015-00013",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2AP0R21062",
	"http://www.newegg.com/Product/Product.aspx?Item=0GT-0015-00005",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD1189152",
	"http://www.newegg.com/Product/Product.aspx?Item=0G1-0028-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84957",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84982",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD1189176",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1994310",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M806J6061",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85009",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX10R7154",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ10N0611",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y08W6750",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28R0SK1297",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85068",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11Z9065",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD14K3828",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C12G3853",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0SM0894",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD17N1167",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YS8371",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1994396",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84972",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TN5456",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85017",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85043",
	"http://www.newegg.com/Product/Product.aspx?Item=0GT-0015-00011",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85075",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA14R0M69707",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896274010",
	"http://www.newegg.com/Product/Product.aspx?Item=0GT-0015-00009",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD1189107",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1K00RX7224",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896274005",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G1730425",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3ER1523829",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD0NK3215",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1W81183376",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CP0U98476",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ZD5682",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0T23100",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85026",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896561007",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C16Z9519",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS1189891",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ZB9448",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD14K3816",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD1189184",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0RX7228",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84976",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ZB8279",
	"http://www.newegg.com/Product/Product.aspx?Item=0G1-0016-00023",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TK4766",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28R1521568",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896913020",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0TH5920",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896200349",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11W7312",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0SN3507",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10C3936",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85028",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA39817V2898",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896561012",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85002",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C17C6238",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85079",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896772032",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1994178",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS1189893",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2DU0ZG0062",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11W5981",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0XY7948",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2AP0R21066",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84946",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA14R0M68927",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA0YT3582",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1994571",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD1189083",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84958",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD17N1139",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C17C8233",
	"http://www.newegg.com/Product/Product.aspx?Item=0G8-0029-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0M806T5000",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85057",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0Y36649",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10C1823",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0RX7230",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0K08618",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84978",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA12G2190",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85065",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G1733947",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA12K6351",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84994",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD17N1085",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD17N1168",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1W814K2475",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84954",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85006",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ZB9398",
	"http://www.newegg.com/Product/Product.aspx?Item=0BM-006J-00003",
	"http://www.newegg.com/Product/Product.aspx?Item=0GT-001Y-00024",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA0YT3605",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ZB8300",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896134176",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10M2932",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1994437",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84973",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TP0554",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15V8108",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85019",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11X3430",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85083",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85044",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85076",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SY0YK2035",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ZB9528",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0YE1383",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0T23208",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10C3914",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0PW8029",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C16Z9510",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD14K3815",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ZB7954",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ZB9517",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85027",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896130031",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y08W3463",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0Y80440",
	"http://www.newegg.com/Product/Product.aspx?Item=0GT-009N-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0S76456",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD1189220",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SF0R29742",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85056",
	"http://www.newegg.com/Product/Product.aspx?Item=0G1-000A-00004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84977",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85064",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85030",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84953",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA14R0KE5484",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS0S30942",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK10K9837",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA12M4051",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11X3337",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85081",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0PX3652",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3S317C6952",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25N0XN3756",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896761211",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA12A5304",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0Y80437",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85053",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD1940957",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ZB8201",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0C29241",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896561014",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84952",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SF0FA7123",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W9025",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85080",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896761210",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11W1793",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ZB8089",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0SD17N1195",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84950",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C12R3599",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11W1757",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y08W4884",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85051",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2GB0YD0286",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84949",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0ZB9532",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1994511",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XN1925",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XN1901",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C14E1417",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XN1873",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C0V59464",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C14N7482",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C12N0509",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XN1874",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XM9902",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896768027",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C14E1420",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ14B9734",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28R11M7421",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XM9916",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XK9635",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C17D1948",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10Z0K14477",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XM9937",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11U7769",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28R1421058",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C14N7470",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28R1814407",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA16V0327",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CP0U95258",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XM9930",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28R11M7419",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1W80RA0373",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C17D1130",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA12G0402",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XM0783",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XM9984",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896761123R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16896660052R",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84985",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84968",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TJ0684",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C0PR8493",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84955",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M84981",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85008",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M77401",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA0YT3546",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11Z9071",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85035",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85000",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M85070",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11V7972",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA16C0PR8491",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA1294297",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA28R0PX6155",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA0ZG0703",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA11Z9099",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1XA12M0840"];