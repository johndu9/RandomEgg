var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113691",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776083",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111082",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774437",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828123102",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111083",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774433",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111087",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111088",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828998198",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111091",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113461",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113348",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113598",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113599",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111023",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113797",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113776",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111084",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111112",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113347",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113600",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113775",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111111",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113872",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113202",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113774",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113163",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774640",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774438",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776012",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774439",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111085",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774649",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774440",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774764",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219468",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774462",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828308060",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774441",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774314",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774479",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776095",
	"http://www.newegg.com/Product/Product.aspx?Item=0N6-00JZ-00007",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828309227",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219479",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219307",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774463",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828308061",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774442",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774372",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292045",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774315",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292264",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828290138",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776097",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111116",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111089",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113732",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219311",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774464",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774457",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782024",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828308062",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774443",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774374",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219524",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292046",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774316",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828103926",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292265",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782009",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774493",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774358",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776098",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828107624",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111117",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776082",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828309243",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828290021",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774661",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219487",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828998245",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113733",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219315",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776470",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774465",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774458",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774310",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828309108",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782026",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113301",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774556",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292030",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828289403",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774523",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774444",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111183",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774447",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292016",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111187",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774376",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828289133",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219525",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292047",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828103613",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776460",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828309050",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776144",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774318",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776052",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776152",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113597",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292266",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774347",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828289052",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782010",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774497",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774360",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776099",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219028",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774452",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828127004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292022",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292006",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111092",
	"http://www.newegg.com/Product/Product.aspx?Item=0N6-00JZ-000C5",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774679",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776488",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774379",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113734",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774407",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292140",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219319",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219213",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774436",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828290042",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774466",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774459",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774311",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776090",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292289",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219529",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774370",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219522",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292042",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782028",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774402",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292031",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292083",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776468",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774306",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828289404",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774531",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774445",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111184",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776150",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219023",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774450",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292017",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774377",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828289139",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219526",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774399",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292049",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828103614",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776461",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774304",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828309052",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828119030",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776145",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219018",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828308009",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774397",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219009",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776155",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774393",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828287218",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292216",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828123101",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292270",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782015",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828287221",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292237",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774617",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774329",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ZC0KE2081",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776100",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774974",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292250",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219029",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774454",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828127005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774353",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292026",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292007",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113216",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292275",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782017",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113293",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828309268",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ZC0KE1132",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828103737",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774886",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292239",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828308021",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828289041",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776490",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774512",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776131",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774163",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774381",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774689",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113891",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774408",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828103742",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774364",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292036",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292149",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292242",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776102",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774430",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774988",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292253",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774413",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219032",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828290095",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774467",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774461",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774313",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776093",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828309218",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292292",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219535",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828309342",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774371",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219523",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292043",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782033",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774456",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782023",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828878010",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782008",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828287009",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774356",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828289044",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776081",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774405",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292032",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776469",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774435",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774307",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828309078",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292028",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828289402",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774446",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292012",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111185",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828309049",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776143",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776151",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828289050",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774841",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774961",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219027",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774451",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292018",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828119012",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111190",
	"http://www.newegg.com/Product/Product.aspx?Item=1J0-000M-00011",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776487",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774378",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828289029",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776088",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292281",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219527",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774369",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219521",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292041",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782019",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774401",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292078",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776465",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774305",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828309053",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113339",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776146",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219022",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828103858",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774398",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219016",
	"http://www.newegg.com/Product/Product.aspx?Item=1J1-000A-00021",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774395",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219008",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776154",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774389",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774385",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292181",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292198",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828289010",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292269",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828287220",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828103993",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292234",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292248",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774352",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828309293",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113208",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292274",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828308043",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782016",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828287222",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828103998",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292238",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774333",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828287091",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828289040",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774506",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776130",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828287022",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774223",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774363",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292241",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776101",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774984",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292251",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774412",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219031",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292260",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774455",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828127008",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828878009",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782007",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774354",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828289043",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774811",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774434",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292027",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292010",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828289049",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776486",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828289028",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828308056",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776087",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292277",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774368",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219520",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292039",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782018",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292259",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113338",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828752020",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113460",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828103359",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774383",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828287226",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292247",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828309278",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828308042",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828308020",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828287062",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776105",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774222",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774889",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292240",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774411",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113566",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113871",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828308004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828289042",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828111029",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776485",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113501",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774367",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292038",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774297",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774382",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292163",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828308039",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828308018",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776104",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113546",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828113892",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774410",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774754",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292258",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776484",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774365",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774918",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774293",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292151",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292243",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219346",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828103796",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828776103",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292257",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219095",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774431",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774292",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292256",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828289298",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774421",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292255",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219054",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292254",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219051",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219047",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774419",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219046",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219045",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774416",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219044",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219042",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219033",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219524R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292198R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828112148R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828287036R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828219066R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828774468",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828287217",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828309200",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782021",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292267",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292263",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292244",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828292037",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16828782002"];