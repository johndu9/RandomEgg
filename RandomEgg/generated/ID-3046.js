var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812158004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812866007",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815158162",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815150242",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815136004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812191070",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815101012",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16814998016",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815290023",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812186134",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812200687",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812240020",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812156030",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812797002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812866004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812866002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812866005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812270294",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812228256",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812191348",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812270475",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815275002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815158339",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815129014",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812705267",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812156042",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815139005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815296005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812423005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815136006",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812400361",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815276015",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815158213",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815150241",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815276020",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812400388",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815158340",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812791273",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812444001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812232036",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815129015",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812400362",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815150187",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812228426",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815242019",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812276008",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812191337",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812240025",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815343002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815158298",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812255016",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812228834",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812705187",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815158263",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812125045",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812270484",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815343003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815290024",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812791274",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812191144",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815297001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815296019",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815290006",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812996110",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815129010",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815129013",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812224053",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812224051",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812352015",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815276031",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815158301",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815276019",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815196051",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812400387",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812186165",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815296018",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815990008",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812125021",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16882158104",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815290032",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815242018",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815242016",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815158226",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1KT0FK3179",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812623003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812228712",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815158299",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815343006",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812891010",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815150248",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812228716",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815150177",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815158183",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2R60V53046",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812705110",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812587756",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812156053",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812219011",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812225007",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16834966709",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812296296",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815158325",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815296020",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815290025",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812866003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812422997",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815990003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812186189",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812587755",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815343005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812202047",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812739499",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812186197",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812240020R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812191337R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812891010R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815158212",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815296004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16812156052",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815150207",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16815306038"];