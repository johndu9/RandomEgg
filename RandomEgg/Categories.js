var categories = [
	"http://www.newegg.com/Backup-Media/SubCategory/ID-239",
	"http://www.newegg.com/Floppy-Drive-Diskette/SubCategory/ID-131",
	"http://www.newegg.com/Floppy-Drives/SubCategory/ID-13",
	"http://www.newegg.com/Backup-Drives/SubCategory/ID-46",
	"http://www.newegg.com/Mini-PCs/SubCategory/ID-703",
	"http://www.newegg.com/Mini-Booksize-Barebone-PCs/SubCategory/ID-309",
	"http://www.newegg.com/Barebone-Accessories/SubCategory/ID-428",
	"http://www.newegg.com/Barebone-PCs/SubCategory/ID-3",
	"http://www.newegg.com/IDE-Cables/SubCategory/ID-2818?Tid=17201",
	"http://www.newegg.com/Internal-Power-Cables/SubCategory/ID-2820?Tid=17202",
	"http://www.newegg.com/Blu-Ray-Drives/SubCategory/ID-598",
	"http://www.newegg.com/Blu-Ray-Burners/SubCategory/ID-600",
	"http://www.newegg.com/Duplicators/SubCategory/ID-528",
	"http://www.newegg.com/CD-DVD-Burners/SubCategory/ID-5",
	"http://www.newegg.com/CD-DVD-Blu-Ray-Media/SubCategory/ID-71",
	"http://www.newegg.com/CD-DVD-Drives/SubCategory/ID-55",
	"http://www.newegg.com/External-CD-DVD-Blu-Ray-Drives/SubCategory/ID-420",
	"http://www.newegg.com/CD-DVD-Accessories/SubCategory/ID-219",
	"http://www.newegg.com/Add-On-Cards/SubCategory/ID-73",
	"http://www.newegg.com/USB-Converters/SubCategory/ID-3026?Tid=25097",
	"http://www.newegg.com/USB-Display-Adapters/SubCategory/ID-3046?Tid=25098",
	"http://www.newegg.com/Audio-Video-Converters/SubCategory/ID-3048?Tid=25099",
	"http://www.newegg.com/Network-Ethernet-Cables/SubCategory/ID-2825?Tid=25094",
	"http://www.newegg.com/USB-Cables/SubCategory/ID-2840?Tid=25096",
	"http://www.newegg.com/Cable-Management/SubCategory/ID-95",
	"http://www.newegg.com/USB-Gadgets/SubCategory/ID-59",
	"http://www.newegg.com/PC-Tools-Testers/SubCategory/ID-133",
	"http://www.newegg.com/Card-Readers/SubCategory/ID-69",
	"http://www.newegg.com/KVM-Switches/SubCategory/ID-143",
	"http://www.newegg.com/SSD-HDD-Accessories/SubCategory/ID-43",
	"http://www.newegg.com/External-Enclosures/SubCategory/ID-92",
	"http://www.newegg.com/Controller-Panels/SubCategory/ID-11",
	"http://www.newegg.com/Case-Accessories/SubCategory/ID-255",
	"http://www.newegg.com/HDMI-Cables/SubCategory/ID-2809?Tid=25095",
	"http://www.newegg.com/Fans-Heatsinks-Case-CPU-Chipset/SubCategory/ID-62",
	"http://www.newegg.com/Advanced-Computer-Eyewear/SubCategory/ID-774",
	"http://www.newegg.com/CPU-Accessories/SubCategory/ID-151",
	"http://www.newegg.com/Power-Strips/SubCategory/ID-350",
	"http://www.newegg.com/Mouse-Pads-Accessories/SubCategory/ID-202",
	"http://www.newegg.com/HTPC-Media-Center-Cases/SubCategory/ID-690",
	"http://www.newegg.com/Case-Fans/SubCategory/ID-573",
	"http://www.newegg.com/Server-Chassis/SubCategory/ID-412",
	"http://www.newegg.com/Computer-Cases/SubCategory/ID-7",
	"http://www.newegg.com/Processors-Servers/SubCategory/ID-727",
	"http://www.newegg.com/Processors-Mobile/SubCategory/ID-759",
	"http://www.newegg.com/CPU-Fans-Heatsinks/SubCategory/ID-574",
	"http://www.newegg.com/Thermal-Compound-Grease/SubCategory/ID-85",
	"http://www.newegg.com/Processors-Desktops/SubCategory/ID-343",
	"http://www.newegg.com/Hard-Drive-Cooling/SubCategory/ID-577",
	"http://www.newegg.com/Water-Liquid-Cooling/SubCategory/ID-575",
	"http://www.newegg.com/VGA-Cooling/SubCategory/ID-576",
	"http://www.newegg.com/Memory-Chipset-Cooling/SubCategory/ID-572",
	"http://www.newegg.com/Laptop-Cooling/SubCategory/ID-319",
	"http://www.newegg.com/USB-Flash-Drives/SubCategory/ID-522",
	"http://www.newegg.com/Flash-Memory/SubCategory/ID-68",
	"http://www.newegg.com/Other-Adapters-Gender-Changers/SubCategory/ID-353",
	"http://www.newegg.com/Mac-Hard-Drives/SubCategory/ID-552",
	"http://www.newegg.com/Controllers-RAID-Cards/SubCategory/ID-410",
	"http://www.newegg.com/Presentation-Devices/SubCategory/ID-796",
	"http://www.newegg.com/Headsets-Accessories/SubCategory/ID-707",
	"http://www.newegg.com/KVM-Cables/SubCategory/ID-451",
	"http://www.newegg.com/Hubs/SubCategory/ID-26",
	"http://www.newegg.com/Keyboards/SubCategory/ID-63",
	"http://www.newegg.com/Web-Cams/SubCategory/ID-152",
	"http://www.newegg.com/Microphones/SubCategory/ID-122",
	"http://www.newegg.com/Sound-Card-Accessories/SubCategory/ID-337",
	"http://www.newegg.com/Mice/SubCategory/ID-65",
	"http://www.newegg.com/PC-Game-Controllers/SubCategory/ID-123",
	"http://www.newegg.com/Graphics-Tablets/SubCategory/ID-296",
	"http://www.newegg.com/Mouse-Keyboard-PS2-Cables/SubCategory/ID-2824?Tid=17183",
	"http://www.newegg.com/Standard-Batteries-Chargers/SubCategory/ID-134",
	"http://www.newegg.com/Server-Memory/SubCategory/ID-541",
	"http://www.newegg.com/Mac-Memory/SubCategory/ID-551",
	"http://www.newegg.com/System-Specific-Memory/SubCategory/ID-543",
	"http://www.newegg.com/Laptop-Memory/SubCategory/ID-381",
	"http://www.newegg.com/Desktop-Memory/SubCategory/ID-147",
	"http://www.newegg.com/Large-Format-Displays/SubCategory/ID-633",
	"http://www.newegg.com/Touchscreen-Monitors/SubCategory/ID-514",
	"http://www.newegg.com/Monitor-Accessories/SubCategory/ID-233",
	"http://www.newegg.com/LCD-LED-Monitors/SubCategory/ID-20",
	"http://www.newegg.com/Server-Motherboards/SubCategory/ID-302",
	"http://www.newegg.com/Motherboard-Accessories/SubCategory/ID-142",
	"http://www.newegg.com/Embedded-Solutions/SubCategory/ID-446",
	"http://www.newegg.com/AMD-Motherboards/SubCategory/ID-22",
	"http://www.newegg.com/Intel-Motherboards/SubCategory/ID-280",
	"http://www.newegg.com/Network-Ethernet-Cables/SubCategory/ID-2825?Tid=17113",
	"http://www.newegg.com/Firewalls-Security-Appliances/SubCategory/ID-529",
	"http://www.newegg.com/VoIP/SubCategory/ID-519",
	"http://www.newegg.com/Powerline-Networking/SubCategory/ID-294",
	"http://www.newegg.com/Laptop-Networking/SubCategory/ID-34",
	"http://www.newegg.com/Wired-Accessories/SubCategory/ID-293",
	"http://www.newegg.com/Network-Print-Servers/SubCategory/ID-387",
	"http://www.newegg.com/Modems/SubCategory/ID-18",
	"http://www.newegg.com/Network-Media-Players/SubCategory/ID-484",
	"http://www.newegg.com/Power-Distribution-Unit/SubCategory/ID-1042?Tid=10005",
	"http://www.newegg.com/UPS-Accessories/SubCategory/ID-626",
	"http://www.newegg.com/Surge-Suppressors/SubCategory/ID-535",
	"http://www.newegg.com/Power-Inverters/SubCategory/ID-536",
	"http://www.newegg.com/UPS/SubCategory/ID-72",
	"http://www.newegg.com/Server-Power-Supplies/SubCategory/ID-520",
	"http://www.newegg.com/Power-Supplies/SubCategory/ID-58",
	"http://www.newegg.com/3D-Scanners/SubCategory/ID-3310?Tid=23560",
	"http://www.newegg.com/Receipt-Printers/SubCategory/ID-3032?Tid=19253",
	"http://www.newegg.com/Card-Printers/SubCategory/ID-3033?Tid=19254",
	"http://www.newegg.com/USB-Cables/SubCategory/ID-2840?Tid=17186",
	"http://www.newegg.com/Barcode-Label-Printers/SubCategory/ID-3031?Tid=19252",
	"http://www.newegg.com/Printer-Parallel-Cables/SubCategory/ID-2822?Tid=17187",
	"http://www.newegg.com/Inkjet-Printers/SubCategory/ID-38",
	"http://www.newegg.com/CD-DVD-Printers/SubCategory/ID-299",
	"http://www.newegg.com/Supplies-Paper-Products/SubCategory/ID-182",
	"http://www.newegg.com/Barcode-Scanners/SubCategory/ID-583",
	"http://www.newegg.com/Specialized-Scanners/SubCategory/ID-761",
	"http://www.newegg.com/Laser-Printers/SubCategory/ID-630",
	"http://www.newegg.com/Dot-Matrix-Printers/SubCategory/ID-631",
	"http://www.newegg.com/Fax-Machines-Copiers/SubCategory/ID-351",
	"http://www.newegg.com/Printer-Scanner-Fax-Accessories/SubCategory/ID-284",
	"http://www.newegg.com/Home-Theater-Projectors/SubCategory/ID-513",
	"http://www.newegg.com/Projector-Accessories/SubCategory/ID-408",
	"http://www.newegg.com/Business-Projectors/SubCategory/ID-42",
	"http://www.newegg.com/Thin-Client-Systems/SubCategory/ID-3087?Tid=20021",
	"http://www.newegg.com/Fiber-Optic-Cables/SubCategory/ID-2815?Tid=21283",
	"http://www.newegg.com/Server-Racks-Cabinets/SubCategory/ID-803",
	"http://www.newegg.com/Power-Distribution-Unit/SubCategory/ID-1042?Tid=20267",
	"http://www.newegg.com/Server-Software/SubCategory/ID-582",
	"http://www.newegg.com/Server-Barebones/SubCategory/ID-8",
	"http://www.newegg.com/Server-Workstation-Systems/SubCategory/ID-386",
	"http://www.newegg.com/RAID-Enclosure-Subsystems/SubCategory/ID-509",
	"http://www.newegg.com/Server-Accessories/SubCategory/ID-510",
	"http://www.newegg.com/Switches/SubCategory/ID-30",
	"http://www.newegg.com/Speakers/SubCategory/ID-60",
	"http://www.newegg.com/Sound-Cards/SubCategory/ID-57",
	"http://www.newegg.com/Industrial-Embedded-SSD/SubCategory/ID-2796?Tid=15850",
	"http://www.newegg.com/Enterprise-SSDs/SubCategory/ID-2021?Tid=11695",
	"http://www.newegg.com/External-SSDs/SubCategory/ID-2022?Tid=11694",
	"http://www.newegg.com/Internal-SSDs/SubCategory/ID-636",
	"http://www.newegg.com/Workstation-Graphics-Cards/SubCategory/ID-449",
	"http://www.newegg.com/Video-Card-Accessories/SubCategory/ID-321",
	"http://www.newegg.com/Desktop-Graphics-Cards/SubCategory/ID-48",
	"http://www.newegg.com/Video-Devices-TV-Tuners/SubCategory/ID-47",
	"http://www.newegg.com/All-Laptops-Notebooks/SubCategory/ID-32",
	"http://www.newegg.com/All-Desktop-PCs/SubCategory/ID-10",
	"http://www.newegg.com/Netbooks/SubCategory/ID-772",
	"http://www.newegg.com/All-Tablets/SubCategory/ID-2557?Tid=23021",
	"http://www.newegg.com/Luggages-Bags/SubCategory/ID-483",
	"http://www.newegg.com/All-Laptop-Hard-Drives/SubCategory/ID-380",
	"http://www.newegg.com/Replicators-Docking-Stations/SubCategory/ID-537",
	"http://www.newegg.com/Laptop-Batteries-AC-Adapters/SubCategory/ID-538",
	"http://www.newegg.com/Laptop-Cases-Bags/SubCategory/ID-482",
	"http://www.newegg.com/Laptop-Add-on-Cards/SubCategory/ID-421",
	"http://www.newegg.com/All-Headphones-Accessories/SubCategory/ID-70",
	"http://www.newegg.com/GPS-Accessories/SubCategory/ID-358",
	"http://www.newegg.com/GPS-Navigation/SubCategory/ID-357",
	"http://www.newegg.com/Mac-iPod-Accessories/SubCategory/ID-550",
	"http://www.newegg.com/MP3-MP4-Accessories/SubCategory/ID-362",
	"http://www.newegg.com/MP3-MP4-Players/SubCategory/ID-23",
	"http://www.newegg.com/Sound-Bars/SubCategory/ID-3256?Tid=22265",
	"http://www.newegg.com/Audio-Components/SubCategory/ID-698?Tid=22154",
	"http://www.newegg.com/Installation-Home-Theater/SubCategory/ID-793",
	"http://www.newegg.com/Shelf-Systems/SubCategory/ID-644",
	"http://www.newegg.com/Stands-Mounts/SubCategory/ID-496",
	"http://www.newegg.com/Audio-Video-Accessories/SubCategory/ID-495",
	"http://www.newegg.com/Pro-Sound/SubCategory/ID-500",
	"http://www.newegg.com/Receivers/SubCategory/ID-488",
	"http://www.newegg.com/Home-Theater-in-a-Box/SubCategory/ID-501",
	"http://www.newegg.com/Home-Audio-Speakers/SubCategory/ID-494",
	"http://www.newegg.com/Blu-Ray-Players/SubCategory/ID-531",
	"http://www.newegg.com/DVD-Players/SubCategory/ID-489",
	"http://www.newegg.com/DVD-Recorders/SubCategory/ID-490",
	"http://www.newegg.com/Transportation/SubCategory/ID-801",
	"http://www.newegg.com/Solar/SubCategory/ID-799",
	"http://www.newegg.com/Eco-Gadgets/SubCategory/ID-800",
	"http://www.newegg.com/Installation-Speakers-Amplifiers/SubCategory/ID-3146?Tid=24705",
	"http://www.newegg.com/Car-Alarms-Security-Remote-Start/SubCategory/ID-2640",
	"http://www.newegg.com/Car-Electronics-Accessories/SubCategory/ID-2609",
	"http://www.newegg.com/Installation-Mobile-Electronics/SubCategory/ID-792",
	"http://www.newegg.com/Marine-Electronics/SubCategory/ID-769",
	"http://www.newegg.com/Radar-Detectors/SubCategory/ID-762",
	"http://www.newegg.com/In-Dash/SubCategory/ID-557",
	"http://www.newegg.com/Car-Video/SubCategory/ID-560",
	"http://www.newegg.com/Car-Accessories/SubCategory/ID-384",
	"http://www.newegg.com/Satellite-Radio/SubCategory/ID-486",
	"http://www.newegg.com/RearView-Systems/SubCategory/ID-768",
	"http://www.newegg.com/Car-HD-Radio/SubCategory/ID-770",
	"http://www.newegg.com/All-Bluetooth-Headsets-Accessories/SubCategory/ID-565",
	"http://www.newegg.com/Car-Subwoofers/SubCategory/ID-708",
	"http://www.newegg.com/Car-Amplifiers/SubCategory/ID-559",
	"http://www.newegg.com/Speakers/SubCategory/ID-558",
	"http://www.newegg.com/E-Book-Readers/SubCategory/ID-782",
	"http://www.newegg.com/App-Enabled-Products/SubCategory/ID-3281?Tid=22432",
	"http://www.newegg.com/Wearable-Electronics/SubCategory/ID-3280?Tid=22433",
	"http://www.newegg.com/Home-Gadgets/SubCategory/ID-336",
	"http://www.newegg.com/Shredders/SubCategory/ID-2555",
	"http://www.newegg.com/Calculators/SubCategory/ID-2553",
	"http://www.newegg.com/Binding-Laminating-Machines/SubCategory/ID-775",
	"http://www.newegg.com/Voice-Recorders/SubCategory/ID-374",
	"http://www.newegg.com/Flatbed-Scanners/SubCategory/ID-44",
	"http://www.newegg.com/Document-Scanners/SubCategory/ID-634",
	"http://www.newegg.com/Typewriters/SubCategory/ID-505",
	"http://www.newegg.com/E-Book-Accessories/SubCategory/ID-852",
	"http://www.newegg.com/Radios/SubCategory/ID-776",
	"http://www.newegg.com/MiniDisc-Players/SubCategory/ID-777",
	"http://www.newegg.com/Boomboxes/SubCategory/ID-779",
	"http://www.newegg.com/Cassette-Players/SubCategory/ID-780",
	"http://www.newegg.com/CD-Players/SubCategory/ID-781",
	"http://www.newegg.com/PDA-Accessories/SubCategory/ID-352",
	"http://www.newegg.com/PDAs-Dictionaries-Translators/SubCategory/ID-35",
	"http://www.newegg.com/Two-Way-Radios/SubCategory/ID-278",
	"http://www.newegg.com/Mobile-Electronics-Accessories/SubCategory/ID-704",
	"http://www.newegg.com/Portable-Audio/SubCategory/ID-499",
	"http://www.newegg.com/Portable-DVD-Players/SubCategory/ID-491",
	"http://www.newegg.com/All-Tablets/SubCategory/ID-2557?Tid=13687",
	"http://www.newegg.com/Tablet-PCs/SubCategory/ID-407",
	"http://www.newegg.com/Answering-Machines/SubCategory/ID-361",
	"http://www.newegg.com/Corded-Phones/SubCategory/ID-638",
	"http://www.newegg.com/Cordless-Phones/SubCategory/ID-639",
	"http://www.newegg.com/Expansion-Handsets/SubCategory/ID-640",
	"http://www.newegg.com/Phone-Conferencing-Devices/SubCategory/ID-637",
	"http://www.newegg.com/Telephones/SubCategory/ID-360",
	"http://www.newegg.com/Telephone-Accessories/SubCategory/ID-173",
	"http://www.newegg.com/Audio-Video-Cables/SubCategory/ID-697",
	"http://www.newegg.com/DVD-Blu-ray-Movies-TV/SubCategory/ID-848",
	"http://www.newegg.com/Satellite-TV-Accessories/SubCategory/ID-497",
	"http://www.newegg.com/Set-Top-Boxes/SubCategory/ID-498",
	"http://www.newegg.com/TV-Stands/SubCategory/ID-695",
	"http://www.newegg.com/Universal-Remotes/SubCategory/ID-283",
	"http://www.newegg.com/Point-Shoot-Cameras/SubCategory/ID-12",
	"http://www.newegg.com/DSLR-Cameras/SubCategory/ID-784",
	"http://www.newegg.com/Camera-Lenses/SubCategory/ID-388",
	"http://www.newegg.com/Camera-Flashes/SubCategory/ID-389",
	"http://www.newegg.com/Lighting-Studio/SubCategory/ID-847",
	"http://www.newegg.com/Camcorders/SubCategory/ID-205",
	"http://www.newegg.com/Binoculars-Optics/SubCategory/ID-378",
	"http://www.newegg.com/Digital-Photo-Frames/SubCategory/ID-548",
	"http://www.newegg.com/Academic-Software/SubCategory/ID-369",
	"http://www.newegg.com/Audio-Video-Editing/SubCategory/ID-1998?Tid=11435",
	"http://www.newegg.com/Books/SubCategory/ID-1564?Tid=10428",
	"http://www.newegg.com/Business-Finance/SubCategory/ID-523",
	"http://www.newegg.com/Business-Finance-Download/SubCategory/ID-432",
	"http://www.newegg.com/Digital-Imaging/SubCategory/ID-433",
	"http://www.newegg.com/Operating-Systems-Download/SubCategory/ID-437",
	"http://www.newegg.com/Downloadable-Games/SubCategory/ID-438",
	"http://www.newegg.com/Trial-Software/SubCategory/ID-3100?Tid=21285",
	"http://www.newegg.com/Utilities/SubCategory/ID-3081?Tid=21287",
	"http://www.newegg.com/Audio-Video-Editing/SubCategory/ID-436?Tid=21358",
	"http://www.newegg.com/Programming-Web-Development/SubCategory/ID-3083?Tid=21359",
	"http://www.newegg.com/Downloadable-Software-Educational-Reference/SubCategory/ID-3082?Tid=22014",
	"http://www.newegg.com/Security-Software-Download/SubCategory/ID-439",
	"http://www.newegg.com/Academic/SubCategory/ID-431",
	"http://www.newegg.com/Mac-Applications/SubCategory/ID-435",
	"http://www.newegg.com/Educational-Reference/SubCategory/ID-524",
	"http://www.newegg.com/Graphic-Design/SubCategory/ID-376",
	"http://www.newegg.com/Home-Improvement-Hobbies/SubCategory/ID-526",
	"http://www.newegg.com/Mac-Games/SubCategory/ID-580",
	"http://www.newegg.com/Mac-Software/SubCategory/ID-371",
	"http://www.newegg.com/Operating-Systems/SubCategory/ID-368",
	"http://www.newegg.com/PC-Games/SubCategory/ID-372",
	"http://www.newegg.com/Programming-Database-Web-Development/SubCategory/ID-527",
	"http://www.newegg.com/Security-Software/SubCategory/ID-377",
	"http://www.newegg.com/Software-Licenses/SubCategory/ID-379",
	"http://www.newegg.com/Utility-Software/SubCategory/ID-1044?Tid=10086",
	"http://www.newegg.com/Nintendo-3DS-Systems/SubCategory/ID-1810?Tid=10543",
	"http://www.newegg.com/Nintendo-3DS-Video-Games/SubCategory/ID-1811?Tid=10544",
	"http://www.newegg.com/Nintendo-3DS-Accessories/SubCategory/ID-1963?Tid=10804",
	"http://www.newegg.com/Nintendo-DS-Games/SubCategory/ID-485",
	"http://www.newegg.com/Nintendo-DS-Systems/SubCategory/ID-683",
	"http://www.newegg.com/Nintendo-DS-Accessories/SubCategory/ID-244",
	"http://www.newegg.com/Game-Boy-Games/SubCategory/ID-478",
	"http://www.newegg.com/Nintendo-Wii-Systems/SubCategory/ID-684",
	"http://www.newegg.com/Nintendo-Wii-Accessories/SubCategory/ID-546",
	"http://www.newegg.com/Nintendo-Wii-Games/SubCategory/ID-544",
	"http://www.newegg.com/PlayStation-Accessories/SubCategory/ID-242",
	"http://www.newegg.com/PS2-Systems/SubCategory/ID-685",
	"http://www.newegg.com/PS2-Games/SubCategory/ID-475",
	"http://www.newegg.com/PS3-Systems/SubCategory/ID-686",
	"http://www.newegg.com/PS3-Accessories/SubCategory/ID-547",
	"http://www.newegg.com/PS3-Games/SubCategory/ID-545",
	"http://www.newegg.com/PSP-Systems/SubCategory/ID-687",
	"http://www.newegg.com/PSP-Accessories/SubCategory/ID-502",
	"http://www.newegg.com/PSP-Games/SubCategory/ID-503",
	"http://www.newegg.com/Xbox-360-Systems/SubCategory/ID-688",
	"http://www.newegg.com/Xbox-360-Games/SubCategory/ID-516",
	"http://www.newegg.com/Xbox-360-Accessories/SubCategory/ID-517",
	"http://www.newegg.com/Xbox-Accessories/SubCategory/ID-243",
	"http://www.newegg.com/Gamecube-Accessories/SubCategory/ID-245",
	"http://www.newegg.com/Nintendo-3DS-Accessories/SubCategory/ID-1963?Tid=10793",
	"http://www.newegg.com/General-Game-Console-Accessories/SubCategory/ID-247",
	"http://www.newegg.com/Game-Guides/SubCategory/ID-643",
	"http://www.newegg.com/Toilet-Accessories/SubCategory/ID-2085?Tid=12608",
	"http://www.newegg.com/Shower-Heads/SubCategory/ID-2084?Tid=12607",
	"http://www.newegg.com/Toilets/SubCategory/ID-2014?Tid=12213",
	"http://www.newegg.com/Bath-Scales-Bath-Accessories/SubCategory/ID-740",
	"http://www.newegg.com/Fasteners/SubCategory/ID-2094?Tid=12611",
	"http://www.newegg.com/Sheeting-Tarps/SubCategory/ID-2096?Tid=12614",
	"http://www.newegg.com/Ladders/SubCategory/ID-2033?Tid=12423",
	"http://www.newegg.com/Chain-Saws-Accessories/SubCategory/ID-1814?Tid=13759",
	"http://www.newegg.com/Shop-Vacs-Accessories/SubCategory/ID-1867?Tid=12419",
	"http://www.newegg.com/Gloves-Workwear/SubCategory/ID-2105?Tid=12615",
	"http://www.newegg.com/Hooks-Picture-Hangers/SubCategory/ID-2106?Tid=12616",
	"http://www.newegg.com/Safety/SubCategory/ID-2110?Tid=12619",
	"http://www.newegg.com/Misc-Hardware/SubCategory/ID-2108?Tid=12543",
	"http://www.newegg.com/Door-Locks/SubCategory/ID-2103?Tid=12545",
	"http://www.newegg.com/Safes/SubCategory/ID-2109?Tid=12546",
	"http://www.newegg.com/Door-Cabinet-Hardware/SubCategory/ID-2102?Tid=12547",
	"http://www.newegg.com/Fence-Post-Caps/SubCategory/ID-2036?Tid=12532",
	"http://www.newegg.com/Electric-Fireplaces/SubCategory/ID-2806?Tid=16485",
	"http://www.newegg.com/Tankless-Water-Heaters/SubCategory/ID-2116?Tid=12625",
	"http://www.newegg.com/Dehumidifiers/SubCategory/ID-2795?Tid=15828",
	"http://www.newegg.com/Permanent-Electric-Heaters/SubCategory/ID-1945?Tid=12427",
	"http://www.newegg.com/Air-Conditioners/SubCategory/ID-718",
	"http://www.newegg.com/Portable-Heaters/SubCategory/ID-764",
	"http://www.newegg.com/Humidifiers/SubCategory/ID-569",
	"http://www.newegg.com/Air-Purifiers/SubCategory/ID-767",
	"http://www.newegg.com/Disposers/SubCategory/ID-2117?Tid=12626",
	"http://www.newegg.com/Kitchen-Sinks/SubCategory/ID-2120?Tid=12628",
	"http://www.newegg.com/Kitchen-Faucets/SubCategory/ID-1041?Tid=12449",
	"http://www.newegg.com/Dishwashers/SubCategory/ID-646",
	"http://www.newegg.com/Refrigerators/SubCategory/ID-647",
	"http://www.newegg.com/LED-Lighting/SubCategory/ID-2896?Tid=24854",
	"http://www.newegg.com/Flashlights-Lanterns/SubCategory/ID-359",
	"http://www.newegg.com/Snow-Equipment/SubCategory/ID-1972?Tid=12515",
	"http://www.newegg.com/Riding-Mower-Tractor-Attachments/SubCategory/ID-1971?Tid=12514",
	"http://www.newegg.com/Chain-Saws-Accessories/SubCategory/ID-1814?Tid=12501",
	"http://www.newegg.com/Outdoor-Heaters/SubCategory/ID-721",
	"http://www.newegg.com/Outdoor-Garden/SubCategory/ID-567",
	"http://www.newegg.com/Surveillance-Accessories/SubCategory/ID-277",
	"http://www.newegg.com/Alarm-Systems/SubCategory/ID-1902?Tid=12676",
	"http://www.newegg.com/Home-Automation/SubCategory/ID-851",
	"http://www.newegg.com/Video-Recorders/SubCategory/ID-849",
	"http://www.newegg.com/Home-Safety-Security/SubCategory/ID-850",
	"http://www.newegg.com/Video-Monitoring-Kits-All-in-One-Systems/SubCategory/ID-693",
	"http://www.newegg.com/CCTV-Analog-Cameras/SubCategory/ID-521",
	"http://www.newegg.com/Robotic-Vacuums/SubCategory/ID-747",
	"http://www.newegg.com/Broom-Stick-Vacuums/SubCategory/ID-748",
	"http://www.newegg.com/Vacuum-Accessories/SubCategory/ID-749",
	"http://www.newegg.com/Canister-Vacuums/SubCategory/ID-743",
	"http://www.newegg.com/Upright-Vacuums/SubCategory/ID-744",
	"http://www.newegg.com/Hand-Held-Vacuums/SubCategory/ID-745",
	"http://www.newegg.com/Carpet-Steam-Cleaners/SubCategory/ID-746",
	"http://www.newegg.com/Houseware/SubCategory/ID-568",
	"http://www.newegg.com/Other-Arts-Crafts/SubCategory/ID-3356?Tid=24702",
	"http://www.newegg.com/Wedding/SubCategory/ID-991?Tid=9803",
	"http://www.newegg.com/Floral-Arrangement/SubCategory/ID-998?Tid=9804",
	"http://www.newegg.com/Framing/SubCategory/ID-1005?Tid=9805",
	"http://www.newegg.com/General-Crafts/SubCategory/ID-1009?Tid=9806",
	"http://www.newegg.com/Wood-Crafts/SubCategory/ID-922?Tid=9797",
	"http://www.newegg.com/Dolls-Teddy-Bears/SubCategory/ID-868?Tid=9794",
	"http://www.newegg.com/Jewelry-Beading/SubCategory/ID-889?Tid=9795",
	"http://www.newegg.com/Fine-Art/SubCategory/ID-935?Tid=9798",
	"http://www.newegg.com/Craft-Painting/SubCategory/ID-948?Tid=9799",
	"http://www.newegg.com/Fabric-Crafts/SubCategory/ID-959?Tid=9800",
	"http://www.newegg.com/Candle-Soapmaking/SubCategory/ID-971?Tid=9801",
	"http://www.newegg.com/Paper-Crafts/SubCategory/ID-983?Tid=9802",
	"http://www.newegg.com/Yarn-Crafts/SubCategory/ID-858?Tid=9793",
	"http://www.newegg.com/Play-Centers-Walkers/SubCategory/ID-1770?Tid=21465",
	"http://www.newegg.com/Nursery-Furniture/SubCategory/ID-1761?Tid=21461",
	"http://www.newegg.com/Nursery-D-cor/SubCategory/ID-1762?Tid=21464",
	"http://www.newegg.com/Memory-Books-Keepsakes/SubCategory/ID-1765?Tid=21463",
	"http://www.newegg.com/Car-Seats/SubCategory/ID-1766?Tid=21459",
	"http://www.newegg.com/Strollers/SubCategory/ID-1767?Tid=21466",
	"http://www.newegg.com/Baby-Carriers/SubCategory/ID-1768?Tid=21456",
	"http://www.newegg.com/Bathing/SubCategory/ID-1748?Tid=21455",
	"http://www.newegg.com/Health-Safety/SubCategory/ID-1751?Tid=21462",
	"http://www.newegg.com/Diapers/SubCategory/ID-1752?Tid=21460",
	"http://www.newegg.com/Boosters-High-Chairs/SubCategory/ID-1758?Tid=21458",
	"http://www.newegg.com/Nursery-Bedding/SubCategory/ID-1760?Tid=21457",
	"http://www.newegg.com/Skin-Care/SubCategory/ID-2157?Tid=14341",
	"http://www.newegg.com/Bath-Spa/SubCategory/ID-2155?Tid=14344",
	"http://www.newegg.com/Hair-Care/SubCategory/ID-2156?Tid=16490",
	"http://www.newegg.com/Beauty-Gift-Sets/SubCategory/ID-944?Tid=22418",
	"http://www.newegg.com/Shavers-Trimmers-For-Men/SubCategory/ID-729",
	"http://www.newegg.com/Oral-Care/SubCategory/ID-730",
	"http://www.newegg.com/Handbags/SubCategory/ID-1490",
	"http://www.newegg.com/Massage-Relaxation/SubCategory/ID-2137?Tid=16613",
	"http://www.newegg.com/Oral-Care/SubCategory/ID-2138?Tid=16962",
	"http://www.newegg.com/Stop-Smoking-Aids/SubCategory/ID-2149?Tid=17093",
	"http://www.newegg.com/Skin-Condition-Treatments/SubCategory/ID-2147?Tid=14324",
	"http://www.newegg.com/Eye-Care/SubCategory/ID-2134?Tid=14313",
	"http://www.newegg.com/Feminine-Care/SubCategory/ID-2135?Tid=14314",
	"http://www.newegg.com/Foot-Care/SubCategory/ID-2136?Tid=14315",
	"http://www.newegg.com/Incontinence/SubCategory/ID-2139?Tid=14316",
	"http://www.newegg.com/Digestion-Nausea/SubCategory/ID-2140?Tid=14317",
	"http://www.newegg.com/Allergy-Sinus/SubCategory/ID-2142?Tid=14319",
	"http://www.newegg.com/Cough-Cold-Flu/SubCategory/ID-2143?Tid=14320",
	"http://www.newegg.com/Diabetes-Management/SubCategory/ID-2144?Tid=14321",
	"http://www.newegg.com/Home-Health-Care/SubCategory/ID-2145?Tid=14322",
	"http://www.newegg.com/Home-Tests/SubCategory/ID-2146?Tid=14323",
	"http://www.newegg.com/Ear-Care/SubCategory/ID-2133?Tid=14312",
	"http://www.newegg.com/Sleep-Snoring-Aids/SubCategory/ID-2148?Tid=14325",
	"http://www.newegg.com/Supports-Braces/SubCategory/ID-2150?Tid=14326",
	"http://www.newegg.com/Vitamins-Minerals-Supplements/SubCategory/ID-2151?Tid=14327",
	"http://www.newegg.com/Diet-Fitness/SubCategory/ID-2153?Tid=14329",
	"http://www.newegg.com/Alternative-Medicine/SubCategory/ID-2154?Tid=14330",
	"http://www.newegg.com/First-Aid/SubCategory/ID-2141?Tid=14318",
	"http://www.newegg.com/Tools-Hand-Power/SubCategory/ID-635",
	"http://www.newegg.com/Water-Filtration-and-Dispensers/SubCategory/ID-2074?Tid=22076",
	"http://www.newegg.com/Misc-Hand-Tools/SubCategory/ID-2130?Tid=22479",
	"http://www.newegg.com/Cutlery/SubCategory/ID-670",
	"http://www.newegg.com/Dinnerware-Sets/SubCategory/ID-3198?Tid=22453",
	"http://www.newegg.com/Cookware/SubCategory/ID-2170?Tid=22451",
	"http://www.newegg.com/Drinkware/SubCategory/ID-2174?Tid=22452",
	"http://www.newegg.com/Storage-Organization/SubCategory/ID-2177?Tid=22462",
	"http://www.newegg.com/Engagement-Rings-Bridal-Sets/SubCategory/ID-3166?Tid=21833",
	"http://www.newegg.com/Wedding-Anniversary-Rings/SubCategory/ID-3167?Tid=21834",
	"http://www.newegg.com/Jewelry-Accessories/SubCategory/ID-1781?Tid=16470",
	"http://www.newegg.com/Cufflinks/SubCategory/ID-1512?Tid=21790",
	"http://www.newegg.com/Bracelets/SubCategory/ID-876?Tid=10024",
	"http://www.newegg.com/Brooches-Pins-Clips/SubCategory/ID-914?Tid=10025",
	"http://www.newegg.com/Earrings-Ear-Cuffs/SubCategory/ID-946?Tid=10026",
	"http://www.newegg.com/Necklaces-Pendants/SubCategory/ID-978?Tid=10027",
	"http://www.newegg.com/Rings/SubCategory/ID-997?Tid=10028",
	"http://www.newegg.com/Body-Jewelry/SubCategory/ID-863?Tid=10023",
	"http://www.newegg.com/Bags/SubCategory/ID-1560?Tid=10477",
	"http://www.newegg.com/Business-Cases/SubCategory/ID-1561?Tid=10475",
	"http://www.newegg.com/Travel-Accessories/SubCategory/ID-1528?Tid=10476",
	"http://www.newegg.com/Luggage/SubCategory/ID-1559?Tid=10474",
	"http://www.newegg.com/Carriers-Packs/SubCategory/ID-864?Tid=24674",
	"http://www.newegg.com/Pet-Costumes/SubCategory/ID-1049?Tid=19333",
	"http://www.newegg.com/Pet-Apparel/SubCategory/ID-1033?Tid=10462",
	"http://www.newegg.com/Sports-Memorabilia-Collectibles/SubCategory/ID-1017?Tid=9964",
	"http://www.newegg.com/Sports-Gift-Sets/SubCategory/ID-1019?Tid=9965",
	"http://www.newegg.com/Sunglasses/SubCategory/ID-1491",
	"http://www.newegg.com/Science-Nature/SubCategory/ID-1530?Tid=13679",
	"http://www.newegg.com/Learning-Educational/SubCategory/ID-1571?Tid=10275",
	"http://www.newegg.com/Replacement-Parts/SubCategory/ID-1574?Tid=24697",
	"http://www.newegg.com/Pretend-Play-Dress-Up/SubCategory/ID-1575?Tid=10277",
	"http://www.newegg.com/Toy-Storage/SubCategory/ID-1576?Tid=10278",
	"http://www.newegg.com/Vehicles/SubCategory/ID-1577?Tid=10279",
	"http://www.newegg.com/Games/SubCategory/ID-1562?Tid=10206",
	"http://www.newegg.com/Hobby-Collectibles/SubCategory/ID-1529?Tid=10207",
	"http://www.newegg.com/Plushed-Stuffed/SubCategory/ID-1572?Tid=10262",
	"http://www.newegg.com/Action-Figures/SubCategory/ID-1565?Tid=19290",
	"http://www.newegg.com/Activity-Centers-Play-Areas/SubCategory/ID-1566?Tid=10270",
	"http://www.newegg.com/Outdoor-Toys/SubCategory/ID-1567?Tid=10271",
	"http://www.newegg.com/Collectibles/SubCategory/ID-1568?Tid=10272",
	"http://www.newegg.com/Dolls-Accessories/SubCategory/ID-1569?Tid=10273",
	"http://www.newegg.com/Electronics-for-Kids/SubCategory/ID-1570?Tid=10274",
	"http://www.newegg.com/Watch-Accessories/SubCategory/ID-1024?Tid=10097",
	"http://www.newegg.com/Watches/SubCategory/ID-1015?Tid=10096"];
