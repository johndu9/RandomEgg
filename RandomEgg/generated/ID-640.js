var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16876101408",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0EA6201",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0P58479",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16876998030",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16876113115",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0U30973",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0F79858",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0P60505",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P17C8051",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1CZ0D11502",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0P60160",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0FC7855",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0V80735",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0P58767",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1JX17C8066",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0P73107",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0CU6595",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TJ1499",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AT0MC1241",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0P82854",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0P61176",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0KJ2276",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0V91536",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TJ1291",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0V80744",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0S23421",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P17C8041",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16876114218",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G15U9527",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16876206025",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16876105033",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AT0UH4181",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16876123127",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ11K6650",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16876206034",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0BB1432",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16876113116",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TM4350",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0P77871",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0V91550",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0PG0224",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TS1177",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1JX17H8955",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0FC0844",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0PC5143",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0S23434",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0FS3893",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P17C8044",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0U31262",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0V91572",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0U22982",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0V91485",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0FC7837",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0CU6974",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1JX0PD5273",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0V91560",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA32111M9553",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0H19368",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0F76078",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ZC0K71149",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16876114206",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1ZC0K70328",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0FC3844",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0EF8266",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA19P0S24977",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E11888232"];