var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0P60373",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16855125170",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16855125168",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0T42328",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0T42605",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA33C1197631",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V2848",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS1875429",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y1968",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0UC0815",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TS2183",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0T42587",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3AG14S7693",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10V0ND0924",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0UC0836",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0X64921",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3256",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ZC0ZP3925",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0V59170",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16855158086",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0UM6429",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0H81950",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0X64924",
	"http://www.newegg.com/Product/Product.aspx?Item=0ZP-0008-00002",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TR6073",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ1080523",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C50U71340",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA33C11J0957",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YS4090",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D916J9831",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T17T4823",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2HK11B7039",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2679",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0JZ6033",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T17T4757",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15Y0WV8865",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616889",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0UM6683",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TR6037",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3193",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ12M9265",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3G61839426",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3093",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D916J9727",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050NV8040",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E71924612",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA27M0ZE5466",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51339354",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51335839",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3G61653214",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V2861",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA29P16C5754",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F7577",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3262",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2NT17J0828",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA29F0R70429",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0P60494",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22A0SA7779",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA33C14C2158",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E71924607",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0U25234",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V517C4908",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22A0T94458",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y1542",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0T42624",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS0SN4896",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0X71621",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0D42832",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA37814S2138",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2PY17C7938",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910N0650",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ11G5808",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T17T4758",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3200",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0HC8474",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0T42306",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0UM5843",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0NW14G5713",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C50UU5501",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1JX17B5010",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910U6761",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E71924613",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA27M0ZE5462",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0KU5375",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0PZ3795",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y1785",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V2961",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2NT0UP4103",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA27Z16U2933",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3336",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51335846",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80MR4131",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA13Y0S21972",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA36Z19H2851",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA27M0ZE5461",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z87723",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16855158087",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22A0S90876",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3G617R3748",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22A0T94462",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y18B2208",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3263",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0NW0M06480",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0K69416",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y1599",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22A0YW0174",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V517P3818",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RF6346",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0UC0778",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0T42200",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0FT6245",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0ZB5124",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F8554",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15T1941349",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E71924610",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA04E0Y84685",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T14S4442",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16855158085",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ZC0ZP3918",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V517C4909",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22A0T94461",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3012",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0NW14G5672",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910U6429",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T90V64229",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C50U16315",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1J711W5661",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114P2898",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0U008H8634",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3G61657541",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0JZ6048",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0GJ3333",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0JZ6051",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22A0SF5100",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA33C1197673",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1FS0CB5006",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ11M9664",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0X95968",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910V8925",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y1833",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2723",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2NA0XW0073",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0M24688",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0UM5972",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2NT0UP4114",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V51427897",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3098",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0XY2132",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3G61660805",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1JX0PC8410",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910U7345",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22916Z5115",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0X95971",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16855102201",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910W2600",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V2962",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1K60KV9609",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA21U0N91105",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0T35584",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2NT0UP4104",
	"http://www.newegg.com/Product/Product.aspx?Item=0G7-000G-00017",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51335847",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX1958492",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3205",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1SK0U22963",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0HD0655",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ12G3488",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RF4959",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3G617N6583",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TH7985",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0RT0148",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RF5820",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0K69418",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114P2911",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F8545",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0EY9351",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T17T4794",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3320",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T14S4526",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D916J9748",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ10E6915",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0V49231",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910M2460",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1EF17M8050",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0UC0809",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3214",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3G61658328",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1K60TS2032",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3G617N7152",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V2869",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3507",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T17T4819",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0UM6420",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0FT6272",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T17T4844",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D916J9718",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D916J9689",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V517C4904",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA33C11J0921",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CP16N4308",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C511E3215",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16855158088",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3187",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ12M9263",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E71924611",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22A0SF3715",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ1615715",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA29F0R70390",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914K1095",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22A0SH9135",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3G617R5040",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114P2925",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C50TT5483",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA37Z1924060",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3002",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA15T1966487",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YT3420",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z87754",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V2885",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0UM5801",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0NW14G5700",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2NT0UP4122",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910U6584",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0KU5374",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V2932",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2RT1000383",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51431244",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ15M1975",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0UC0767",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3502",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22A1887470",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V2858",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1050M28212",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RF3977",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V2965",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA33C1197737",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3006",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0NW14G5284",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910U6172",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910W0289",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114P2899",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3G61659599",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA37814S2137",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0JZ6049",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA27M11E8870",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA10V0AZ6911",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16855166079",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3277",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0Z87687",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y1636",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0T35599",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0XY2130",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0UM5716",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910N0665",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0X95970",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3GK14K2033",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910V9592",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0VJ1696",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ12M6425",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V511E3212",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3203",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RF7135",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F7582",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3271",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3G61656776",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0D42778",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T14S4547",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ11M9615",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3210",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2NA0XW0084",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA04E0A64802",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0UM5984",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0U00B84784",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3G617R3810",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F8550",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0RS4371",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA29F0R70131",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3304",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0D74164",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ08T3860",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RF5575",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA37Z1924055",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0UM5789",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22916Z5116",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T90V81656",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA03C0U84456",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA37Z18K0133",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0X95973",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0KX5056",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910W2799",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910U5789",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0FN9475",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T90XM8873",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T17T4778",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0T35598",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3493",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0SM3959",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16855642002",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ14G1349",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C51335848",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0D42777",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0UD07Z9704",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA29C16D6112",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2NA0YV9503",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0RS4355",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3291",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0EY9353",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0KC7032",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ08T3859",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CS0TV4113",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V2865",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0KX5055",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910U5298",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0FN9474",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CP0WW5261",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1NV0ZG0172",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3268",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114P2912",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F8546",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C514J0413",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0EY9352",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0K99742",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1EF14M7867",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0FM1598",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3489",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V517C4798",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1TX0K36521",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20T17T4920",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1K60P18828",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0FM1597",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1VN1923062",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1K60P18827",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3G61658597",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1GK0FM1574",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1VN1923060",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C50TX8884",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1K60NZ4337",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V51431246",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C50TX8883",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C50TX8882",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910M2461",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910M2660",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910N0637",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910N0640",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F7590",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA22F1603262",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16855158090",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2719",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F7591",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2729",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F7578",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F7587",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2716",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2681",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910N0651",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA02V0XM8291",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ12M6426",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2730",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F7583",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F7579",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2733",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25116C2113",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2717",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T90XM9540",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F7586",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2715",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910N0658",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910N0687",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2724",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2732",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T910M2459",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2727",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16855117079",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F7581",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0UG8490",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2735",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2726",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F7584",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T90XM8584",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F7580",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2734",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0T42682",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D916J9805",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y1156043",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3261",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RF3757",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F8552",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F8556",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ13P1488",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX1402613",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0PG3425",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F8553",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0SB9214",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16855789020",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0Y42380",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0PG3303",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1K60TS1963",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2705",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TP2610",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TR3552",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114P3870",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F8587",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11876432",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0XR3652",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX10R6227",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114P2893",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1N80MR0953",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F8577",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1D914K1221",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX17X3174",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V3440",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F8551",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F8555",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0Y42375",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F8590",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F8540",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11616819",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0RF4227",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG18M0885",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F8589",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0YK6543",
	"http://www.newegg.com/Product/Product.aspx?Item=0G7-000U-00001",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG18M0889",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114P2891",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E116T2500",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F8548",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG0YF7318",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0PG18M0884",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX1402680",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114F8542",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R17V2902",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2680",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2720",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F7592",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2725",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F7589",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2737",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2728",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2682",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2722",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2736",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F7585",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2T911F2731"];