var products = [
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TM5707",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA13Y0GP1164",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878796004",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878268004",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0YM0PS8306",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878796005",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878995115",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878796006",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878815189",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AJ0T28090",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AT0MB9920",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1PC0JE2811",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878995303",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0PW2234",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0YS4413",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E71411265",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TM2925",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R18P3493",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1HV0H54876",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878995114",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0R79301",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878176096",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Z0384",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878815079",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA13Y0F78514",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2AB0SH2829",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878815208",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CP0WW2092",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878815210",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CP16N4573",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Z0172",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878268001",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878110061",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y5508",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0PW1106",
	"http://www.newegg.com/Product/Product.aspx?Item=1YN-0005-00002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16868996037",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E71411266",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y5501",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878815002",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2AZ0SK9814",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CP0WW6256",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CP16N1686",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878815157",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CP0WW6424",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1HV0H54851",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2CP16N2145",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2BK0U42663",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0PW2440",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C510G0411",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y5440",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA34P0ZV0176",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878815207",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878815220",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0PW2299",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2P51002394",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878268002",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878110145",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y5351",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1HV0H54872",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1HV0H54875",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y5515",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20G0Y14994",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0TW0483",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878815078",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0PW2935",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA25V0TW0524",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878815188",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20G0Y15034",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2E71411267",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1Z80NE9783",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ1698565",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y5502",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878815169",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2AZ0SK9837",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1HV0H54906",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA20G0Y14895",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y5603",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y5421",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0PW1224",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1Z80K27118",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y9917",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878995117",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y5483",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2V510G0567",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y5498",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878815117",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA1Z80K27122",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878815187",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y5468",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2C510G0399",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y5438",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y5482",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA24G0P79379",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0U00YC2070",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2BK0U42666",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA30R18P3739",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878815199",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878815198",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0AT0SK6184",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y17Y5459",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0PW2210",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2ZZ16B8335",
	"http://www.newegg.com/Product/Product.aspx?Item=N82E16878104165",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TN8527",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA2940XN5720",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0PW2491",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA00Y0PW2346",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TN9781",
	"http://www.newegg.com/Product/Product.aspx?Item=9SIA0ZX0TK7592"];