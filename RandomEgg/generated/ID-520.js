var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338012",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338047",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817151133",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817104115",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377042",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817151129",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147084",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338054",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15S5933",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817151130",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147095",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338052",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338065",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377048",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338021",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338023",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338094",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338055",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338096",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338043",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147085",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D4003",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338097",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X4592",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338069",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147124",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147088",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147112",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525522",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525615",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338109",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338044",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147128",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147090",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525700",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817151134",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817104168",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377028",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525616",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15V9921",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147135",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147005",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X4804",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338101",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338084",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338057",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D4227",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525693",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525553",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338070",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525906",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2PN1030047",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338086",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525516",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147129",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338111",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X4712",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147093",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147116",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338060",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817292031",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377027",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525950",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W9217",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15M2241",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147136",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525936",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147030",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15S5164",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525657",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X4805",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817151135",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W4547",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377088",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X4802",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15S5885",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D3545",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377012",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338110",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377014",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377010",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X4669",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W9176",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817151131",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15V6087",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147131",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377069",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817103046",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D4167",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X4775",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147117",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147107",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525474",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X4757",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377062",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147038",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525409",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338072",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147080",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338093",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525627",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338066",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147123",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147111",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X4644",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338102",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817103044",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338085",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338062",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525699",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338059",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338104",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147133",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525420",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X4803",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11526038",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11526082",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377041",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G1741364",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338071",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377058",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15S5920",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338107",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817104159",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147105",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W9653",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X4693",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377050",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338053",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147078",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338088",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D3947",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147122",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147110",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338108",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377047",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147132",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525672",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338083",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525756",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377087",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X4798",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525468",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X4716",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147101",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147077",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525501",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147121",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147108",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525980",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338061",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817292033",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X4674",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525404",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X4797",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W8642",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525466",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338106",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338080",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817292059",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147073",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817104126",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817151128",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525417",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377052",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA3KX16D3933",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147072",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817292057",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11526015",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338079",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147071",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525412",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338077",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147059",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377004R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377048R",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338073",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817377007",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817147115",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338103",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525648",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11525469",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15W8788",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E114X4784",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16817338076"];