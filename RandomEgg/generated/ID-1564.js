var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=9780446556248",
	"http://www.newegg.com/Product/Product.aspx?Item=9780794822835",
	"http://www.newegg.com/Product/Product.aspx?Item=9780520267190",
	"http://www.newegg.com/Product/Product.aspx?Item=9781602861336",
	"http://www.newegg.com/Product/Product.aspx?Item=9780446563048",
	"http://www.newegg.com/Product/Product.aspx?Item=9780794823825",
	"http://www.newegg.com/Product/Product.aspx?Item=9780525423843",
	"http://www.newegg.com/Product/Product.aspx?Item=9780393338096",
	"http://www.newegg.com/Product/Product.aspx?Item=9780811703789",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1V00ZM4363",
	"http://www.newegg.com/Product/Product.aspx?Item=9781608196111",
	"http://www.newegg.com/Product/Product.aspx?Item=9780062004635",
	"http://www.newegg.com/Product/Product.aspx?Item=9780545143110",
	"http://www.newegg.com/Product/Product.aspx?Item=9780446564328",
	"http://www.newegg.com/Product/Product.aspx?Item=9780525951650",
	"http://www.newegg.com/Product/Product.aspx?Item=9780764329838",
	"http://www.newegg.com/Product/Product.aspx?Item=9780399155345",
	"http://www.newegg.com/Product/Product.aspx?Item=9781595620156",
	"http://www.newegg.com/Product/Product.aspx?Item=9780896585348",
	"http://www.newegg.com/Product/Product.aspx?Item=9780060731335",
	"http://www.newegg.com/Product/Product.aspx?Item=9780896898424",
	"http://www.newegg.com/Product/Product.aspx?Item=9780062039743",
	"http://www.newegg.com/Product/Product.aspx?Item=9784805311226",
	"http://www.newegg.com/Product/Product.aspx?Item=9781556248207",
	"http://www.newegg.com/Product/Product.aspx?Item=9780061728990",
	"http://www.newegg.com/Product/Product.aspx?Item=9780764336034",
	"http://www.newegg.com/Product/Product.aspx?Item=9780553593310",
	"http://www.newegg.com/Product/Product.aspx?Item=9781439187197",
	"http://www.newegg.com/Product/Product.aspx?Item=9780446579223",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1TD0R51528",
	"http://www.newegg.com/Product/Product.aspx?Item=9780806532257",
	"http://www.newegg.com/Product/Product.aspx?Item=9780525952022",
	"http://www.newegg.com/Product/Product.aspx?Item=9780764329791",
	"http://www.newegg.com/Product/Product.aspx?Item=9781401341459",
	"http://www.newegg.com/Product/Product.aspx?Item=9780764333606",
	"http://www.newegg.com/Product/Product.aspx?Item=9781439107959",
	"http://www.newegg.com/Product/Product.aspx?Item=9781400043545",
	"http://www.newegg.com/Product/Product.aspx?Item=9780764330650",
	"http://www.newegg.com/Product/Product.aspx?Item=9781416996743",
	"http://www.newegg.com/Product/Product.aspx?Item=9780954795474",
	"http://www.newegg.com/Product/Product.aspx?Item=9780940717923",
	"http://www.newegg.com/Product/Product.aspx?Item=9780307387943",
	"http://www.newegg.com/Product/Product.aspx?Item=9780307740984",
	"http://www.newegg.com/Product/Product.aspx?Item=9780399157141",
	"http://www.newegg.com/Product/Product.aspx?Item=9781601422217",
	"http://www.newegg.com/Product/Product.aspx?Item=9780345505347",
	"http://www.newegg.com/Product/Product.aspx?Item=9780896896956",
	"http://www.newegg.com/Product/Product.aspx?Item=9780061537967",
	"http://www.newegg.com/Product/Product.aspx?Item=9780764319082",
	"http://www.newegg.com/Product/Product.aspx?Item=9780899976501",
	"http://www.newegg.com/Product/Product.aspx?Item=9780307454553",
	"http://www.newegg.com/Product/Product.aspx?Item=9781851494712",
	"http://www.newegg.com/Product/Product.aspx?Item=9780312650247",
	"http://www.newegg.com/Product/Product.aspx?Item=9781586858117",
	"http://www.newegg.com/Product/Product.aspx?Item=9781857566505",
	"http://www.newegg.com/Product/Product.aspx?Item=9781416585312",
	"http://www.newegg.com/Product/Product.aspx?Item=9780143038252",
	"http://www.newegg.com/Product/Product.aspx?Item=9781558497092",
	"http://www.newegg.com/Product/Product.aspx?Item=9780061836923",
	"http://www.newegg.com/Product/Product.aspx?Item=9780765325945",
	"http://www.newegg.com/Product/Product.aspx?Item=9780553805376",
	"http://www.newegg.com/Product/Product.aspx?Item=9781439192566",
	"http://www.newegg.com/Product/Product.aspx?Item=9780316010665",
	"http://www.newegg.com/Product/Product.aspx?Item=9780794822644",
	"http://www.newegg.com/Product/Product.aspx?Item=9780451463654",
	"http://www.newegg.com/Product/Product.aspx?Item=9781602392380",
	"http://www.newegg.com/Product/Product.aspx?Item=9780375835278",
	"http://www.newegg.com/Product/Product.aspx?Item=9780810984912",
	"http://www.newegg.com/Product/Product.aspx?Item=9780061997815",
	"http://www.newegg.com/Product/Product.aspx?Item=9780545139700",
	"http://www.newegg.com/Product/Product.aspx?Item=9780764329821",
	"http://www.newegg.com/Product/Product.aspx?Item=9781595230676",
	"http://www.newegg.com/Product/Product.aspx?Item=9780896898059",
	"http://www.newegg.com/Product/Product.aspx?Item=9781402771583",
	"http://www.newegg.com/Product/Product.aspx?Item=9782759404605",
	"http://www.newegg.com/Product/Product.aspx?Item=9781451625516",
	"http://www.newegg.com/Product/Product.aspx?Item=9780061720857",
	"http://www.newegg.com/Product/Product.aspx?Item=9780764333712",
	"http://www.newegg.com/Product/Product.aspx?Item=9781439181782",
	"http://www.newegg.com/Product/Product.aspx?Item=9780785825630",
	"http://www.newegg.com/Product/Product.aspx?Item=9781400064168",
	"http://www.newegg.com/Product/Product.aspx?Item=9780764331411",
	"http://www.newegg.com/Product/Product.aspx?Item=9781416997924",
	"http://www.newegg.com/Product/Product.aspx?Item=9780976183464",
	"http://www.newegg.com/Product/Product.aspx?Item=9781416991762",
	"http://www.newegg.com/Product/Product.aspx?Item=9780954795467",
	"http://www.newegg.com/Product/Product.aspx?Item=9780935989885",
	"http://www.newegg.com/Product/Product.aspx?Item=9780307269997",
	"http://www.newegg.com/Product/Product.aspx?Item=9780307588517",
	"http://www.newegg.com/Product/Product.aspx?Item=9780316346627",
	"http://www.newegg.com/Product/Product.aspx?Item=9780764307102",
	"http://www.newegg.com/Product/Product.aspx?Item=9780307454546",
	"http://www.newegg.com/Product/Product.aspx?Item=9780312370848",
	"http://www.newegg.com/Product/Product.aspx?Item=9781586175009",
	"http://www.newegg.com/Product/Product.aspx?Item=9781851496099",
	"http://www.newegg.com/Product/Product.aspx?Item=9780312676810",
	"http://www.newegg.com/Product/Product.aspx?Item=9780441019731",
	"http://www.newegg.com/Product/Product.aspx?Item=9781602390638",
	"http://www.newegg.com/Product/Product.aspx?Item=9780375504877",
	"http://www.newegg.com/Product/Product.aspx?Item=9780061997167",
	"http://www.newegg.com/Product/Product.aspx?Item=9781595143976",
	"http://www.newegg.com/Product/Product.aspx?Item=9780896897083",
	"http://www.newegg.com/Product/Product.aspx?Item=9781933990194",
	"http://www.newegg.com/Product/Product.aspx?Item=9781440214042",
	"http://www.newegg.com/Product/Product.aspx?Item=9780061555152",
	"http://www.newegg.com/Product/Product.aspx?Item=9780785825500",
	"http://www.newegg.com/Product/Product.aspx?Item=9780764329111",
	"http://www.newegg.com/Product/Product.aspx?Item=9781416938743",
	"http://www.newegg.com/Product/Product.aspx?Item=9780931838415",
	"http://www.newegg.com/Product/Product.aspx?Item=9780143118244",
	"http://www.newegg.com/Product/Product.aspx?Item=9780307474711",
	"http://www.newegg.com/Product/Product.aspx?Item=9780316089517",
	"http://www.newegg.com/Product/Product.aspx?Item=9780759529434",
	"http://www.newegg.com/Product/Product.aspx?Item=9781577314806",
	"http://www.newegg.com/Product/Product.aspx?Item=9781851495023",
	"http://www.newegg.com/Product/Product.aspx?Item=9780312651206",
	"http://www.newegg.com/Product/Product.aspx?Item=9780060290160",
	"http://www.newegg.com/Product/Product.aspx?Item=9780061992704",
	"http://www.newegg.com/Product/Product.aspx?Item=9781886768826",
	"http://www.newegg.com/Product/Product.aspx?Item=9781440213267",
	"http://www.newegg.com/Product/Product.aspx?Item=9780765327727",
	"http://www.newegg.com/Product/Product.aspx?Item=9781416589648",
	"http://www.newegg.com/Product/Product.aspx?Item=9780143116387",
	"http://www.newegg.com/Product/Product.aspx?Item=9780316038393",
	"http://www.newegg.com/Product/Product.aspx?Item=9780743247542",
	"http://www.newegg.com/Product/Product.aspx?Item=9781574329735",
	"http://www.newegg.com/Product/Product.aspx?Item=9781440213250",
	"http://www.newegg.com/Product/Product.aspx?Item=9780765326577",
	"http://www.newegg.com/Product/Product.aspx?Item=9780316036252",
	"http://www.newegg.com/Product/Product.aspx?Item=9780618756636",
	"http://www.newegg.com/Product/Product.aspx?Item=9781440212956",
	"http://www.newegg.com/Product/Product.aspx?Item=9780316036207",
	"http://www.newegg.com/Product/Product.aspx?Item=9781440212925",
	"http://www.newegg.com/Product/Product.aspx?Item=9780316036177",
	"http://www.newegg.com/Product/Product.aspx?Item=9781440205538",
	"http://www.newegg.com/Product/Product.aspx?Item=9780316017923",
	"http://www.newegg.com/Product/Product.aspx?Item=9780802119285",
	"http://www.newegg.com/Product/Product.aspx?Item=9781847971142",
	"http://www.newegg.com/Product/Product.aspx?Item=9781414338040",
	"http://www.newegg.com/Product/Product.aspx?Item=9780794820602",
	"http://www.newegg.com/Product/Product.aspx?Item=9780446540339",
	"http://www.newegg.com/Product/Product.aspx?Item=9780764329760",
	"http://www.newegg.com/Product/Product.aspx?Item=9781595143068",
	"http://www.newegg.com/Product/Product.aspx?Item=9780061953361"];