		var prod = 'fish';
		var randomProg = 0;
		var gBox = 'receiveBacon';
		var gLink = 'linker';
		var inProgress = false;
		var rand = Math.floor(Math.random() * 8);

		var cddJS = ["RandomEgg/generated/ID-600.js","RandomEgg/generated/ID-598.js",
					"RandomEgg/generated/ID-5.js","RandomEgg/generated/ID-55.js"];
		var caseJS = ["RandomEgg/generated/ID-7.js","RandomEgg/generated/ID-690.js",
					 "RandomEgg/generated/ID-412.js"];
		var moboJS = ["RandomEgg/generated/ID-22.js","RandomEgg/generated/ID-280.js"];
		var hddJS = ["RandomEgg/generated/ID-14.js","RandomEgg/generated/ID-380.js",
					"RandomEgg/generated/ID-636.js","RandomEgg/generated/ID-2021.js",
					"RandomEgg/generated/ID-522.js"];
		var gpuJS = ["RandomEgg/generated/ID-48.js", "RandomEgg/generated/ID-449.js"];
		var psuJS = ["RandomEgg/generated/ID-58.js","RandomEgg/generated/ID-520.js"];
		var ramJS = ["RandomEgg/generated/ID-147.js","RandomEgg/generated/ID-381.js",
					"RandomEgg/generated/ID-551.js","RandomEgg/generated/ID-541.js"];
		var cpuJS = ["RandomEgg/generated/ID-343.js", "RandomEgg/generated/ID-727.js",
					"RandomEgg/generated/ID-759.js"];

		var parts = ["case","cdd", "gpu", "mobo", "cpu", "hdd", "psu", "ram"];

		function linkUp(){
			document.getElementById(gBox).value = prod;
			document.getElementById(gLink).href = prod;
		}

		function randomize(box, link) {
			var dest = categories[Math.floor(Math.random() * categories.length)];
			loadJS('RandomEgg/generated/' + dest.substring(dest.indexOf('/ID-'), dest.length) + '.js');
			gLink=link;
			gBox = box;
			doTimeOut();
		}

		function setProdnLink() {
			prod = products[Math.floor(Math.random() * products.length)];
			linkUp();
			if(inProgress){
				randomRig();
			}
		}

		function doTimeOut() {
			setTimeout(function() {setProdnLink()} ,500);
			sleep(50);
		}

		function randomRigButton() {
			randomProg = 0;
			inProgress = true;
			rand = -1;//Math.floor(Math.random() * 8);
			randomRig();
		}

		function randomRig(){
			switch (randomProg) {
				case 0:
					if (rand == 0){ randomize('case','caselink');} 
					else {randomizeSp('case','caselink');}
					randomProg++;
					break;
				case 3:
					if (rand == 1){ 
						randomize('mobo','mobolink');
					} 
					else {
						randomizeSp('mobo','mobolink');
					}
					randomProg++;
					break;
				case 4:
					if (rand == 2){ 
						randomize('cpu','cpulink');
					}   
					else {
						randomizeSp('cpu','cpulink');
					}
					randomProg++;
					break;
				case 1:
					if (rand == 3){ 
						randomize('cdd','cddlink');
					}   
					else {
						randomizeSp('cdd','cddlink');
					}
					randomProg++;
					break;
				case 5:
					if (rand == 4){ 
						randomize('hdd','hddlink');
					}   
					else {
						randomizeSp('hdd','hddlink');
					}
					randomProg++;
					break;
				case 2:
					if (rand == 5){ 
						randomize('gpu','gpulink');
					}   
					else {
						randomizeSp('gpu','gpulink');
					}
					randomProg++;
					break;
				case 7:
					if (rand == 6){ 
						randomize('ram','ramlink');
					}   
					else {
						randomizeSp('ram','ramlink');
					}
					randomProg++;
					break;
				case 6:
					if (rand == 7){ 
						randomize('psu','psulink');
					}   
					else {
						randomizeSp('psu','psulink');
					}
					randomProg++;
					break;
				case 8:
					randomProg = 0;
					inProgress = false;
					break;
			}
			
		}

		function randomizeSp(box, link) {
			gBox = box;
			gLink = link;
			var dest;
			if(box == 'case'){
				dest = caseJS[Math.floor(Math.random() * caseJS.length)];
			}
			else if(box == 'mobo'){
				dest = moboJS[Math.floor(Math.random() * moboJS.length)];
			}
			else if(box == 'cpu'){
				dest = cpuJS[Math.floor(Math.random() * cpuJS.length)];
			}
			else if(box == 'cdd'){
				dest = cddJS[Math.floor(Math.random() * cddJS.length)];
			}
			else if(box == 'hdd'){
				dest = hddJS[Math.floor(Math.random() * hddJS.length)];
			}
			else if(box == 'gpu'){
				dest = gpuJS[Math.floor(Math.random() * gpuJS.length)];
			}
			else if(box == 'psu'){
				dest = psuJS[Math.floor(Math.random() * psuJS.length)];
			}
			else{
				dest = ramJS[Math.floor(Math.random() * ramJS.length)];
			}
			loadJS(dest);
			doTimeOut();
		}

		function loadJS(file) {
		    // Adding the script tag to the head as suggested before
		    var head = document.getElementsByTagName('head')[0];
		    var script = document.createElement('script');
		    script.type = 'text/javascript';
		    script.src = file;
		    // Fire the loading
		    head.appendChild(script);
		}

		function sleep(milliseconds) {
		  var start = new Date().getTime();
		  for (var i = 0; i < 1e7; i++) {
		    if ((new Date().getTime() - start) > milliseconds){
		      break;
		    }
		  }
		}

		function loadNeweggHTML(file) {
			var xhr = new XMLHttpRequest(); 
			xhr.open( "GET", file, true ); 
			xhr.send(); 
			if(xhr.status == 200)  
   				dump(xhr.responseText);
		}