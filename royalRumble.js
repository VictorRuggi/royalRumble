function addEvent (obj, type, fn)
{
	if(obj.addEventListener){
		obj.addEventListener(type, fn, false);
	}
	else if(obj.attachEvent){
		obj.attachEvent("on"+type, fn);
	}
}

function init(){
	//CURRENT MALE ROSTERS. UNIVERSAL, WWE & NXT CHAMPIONS ARE TRADITIONALLY NOT ELIGIBLE TO PARTICIPATE.
	mensRoster = [{name: "AJ Styles", state: "eligible", rumbleTime: 0},{name: "Akira Tozawa", state: "eligible", rumbleTime: 0},{name: "Andrade", state: "eligible", rumbleTime: 0},{name: "Angel Garza", state: "eligible", rumbleTime: 0},{name: "Big Show", state: "eligible", rumbleTime: 0},{name: "Bobby Lashley", state: "eligible", rumbleTime: 0},
				{name: "Braun Strowman", state: "eligible", rumbleTime: 0},{name: "Bray Wyatt", state: "eligible", rumbleTime: 0},{name: "Cedric Alexander", state: "eligible", rumbleTime: 0},{name: "Dabba-Kato", state: "eligible", rumbleTime: 0},{name: "Drew Gulak", state: "eligible", rumbleTime: 0},{name: "Elias", state: "eligible", rumbleTime: 0},
				{name: "Erik", state: "eligible", rumbleTime: 0},{name: "Gran Metalik", state: "eligible", rumbleTime: 0},{name: "Humberto Carrillo", state: "eligible", rumbleTime: 0},{name: "Ivar", state: "eligible", rumbleTime: 0},{name: "Jeff Hardy", state: "eligible", rumbleTime: 0},{name: "Jinder Mahal", state: "eligible", rumbleTime: 0},
				{name: "John Morrison", state: "eligible", rumbleTime: 0},{name: "Keith Lee", state: "eligible", rumbleTime: 0},{name: "Kofi Kingston", state: "eligible", rumbleTime: 0},{name: "Lince Dorado", state: "eligible", rumbleTime: 0},{name: "Mace", state: "eligible", rumbleTime: 0},{name: "The Miz", state: "eligible", rumbleTime: 0},
				{name: "Mustafa Ali", state: "eligible", rumbleTime: 0},{name: "MVP", state: "eligible", rumbleTime: 0},{name: "Omos", state: "eligible", rumbleTime: 0},{name: "Randy Orton", state: "eligible", rumbleTime: 0},{name: "Ricochet", state: "eligible", rumbleTime: 0},{name: "Riddick Moss", state: "eligible", rumbleTime: 0},
				{name: "Riddle", state: "eligible", rumbleTime: 0},{name: "R-Truth", state: "eligible", rumbleTime: 0},{name: "Sheamus", state: "eligible", rumbleTime: 0},{name: "Shelton Benjamin", state: "eligible", rumbleTime: 0},{name: "Slapjack", state: "eligible", rumbleTime: 0},{name: "T-Bar", state: "eligible", rumbleTime: 0},
				{name: "Titus O&#39;Neil", state: "eligible", rumbleTime: 0},{name: "Tucker", state: "eligible", rumbleTime: 0},{name: "Xavier Woods", state: "eligible", rumbleTime: 0},{name: "Aleister Black", state: "eligible", rumbleTime: 0},{name: "Angelo Dawkins", state: "eligible", rumbleTime: 0},{name: "Apollo Crews", state: "eligible", rumbleTime: 0},
				{name: "Big E", state: "eligible", rumbleTime: 0},{name: "Bo Dallas", state: "eligible", rumbleTime: 0},{name: "Cesaro", state: "eligible", rumbleTime: 0},{name: "Chad Gable", state: "eligible", rumbleTime: 0},{name: "Daniel Bryan", state: "eligible", rumbleTime: 0},{name: "Dolph Ziggler", state: "eligible", rumbleTime: 0},
				{name: "Dominik Mysterio", state: "eligible", rumbleTime: 0},{name: "Jaxson Ryker", state: "eligible", rumbleTime: 0},{name: "Jey Uso", state: "eligible", rumbleTime: 0},{name: "Jimmy Uso", state: "eligible", rumbleTime: 0},{name: "Kalisto", state: "eligible", rumbleTime: 0},{name: "Kane", state: "eligible", rumbleTime: 0},
				{name: "Kevin Owens", state: "eligible", rumbleTime: 0},{name: "King Corbin", state: "eligible", rumbleTime: 0},{name: "Lars Sullivan", state: "eligible", rumbleTime: 0},{name: "Mojo Rawley", state: "eligible", rumbleTime: 0},{name: "Montez Ford", state: "eligible", rumbleTime: 0},{name: "Murphy", state: "eligible", rumbleTime: 0},
				{name: "Otis", state: "eligible", rumbleTime: 0},{name: "Rey Mysterio", state: "eligible", rumbleTime: 0},{name: "Robert Roode", state: "eligible", rumbleTime: 0},{name: "Sami Zayn", state: "eligible", rumbleTime: 0},{name: "Seth Rollins", state: "eligible", rumbleTime: 0},{name: "Shinsuke Nakamura", state: "eligible", rumbleTime: 0},
				{name: "Steve Cutler", state: "eligible", rumbleTime: 0},{name: "Wesley Blake", state: "eligible", rumbleTime: 0},{name: "Adam Cole", state: "eligible", rumbleTime: 0},{name: "Arturo Ruas", state: "eligible", rumbleTime: 0},{name: "Ashante \"Thee\" Adonis", state: "eligible", rumbleTime: 0},{name: "Austin Theory", state: "eligible", rumbleTime: 0},
				{name: "Boa", state: "eligible", rumbleTime: 0},{name: "Bobby Fish", state: "eligible", rumbleTime: 0},{name: "Bronson Reed", state: "eligible", rumbleTime: 0},{name: "Cameron Grimes", state: "eligible", rumbleTime: 0},{name: "Chase Parker", state: "eligible", rumbleTime: 0},{name: "Damian Priest", state: "eligible", rumbleTime: 0},
				{name: "Danny Burch", state: "eligible", rumbleTime: 0},{name: "Dexter Lumis", state: "eligible", rumbleTime: 0},{name: "Drake Maverick", state: "eligible", rumbleTime: 0},{name: "Fandango", state: "eligible", rumbleTime: 0},{name: "Isaiah \"Swerve\" Scott", state: "eligible", rumbleTime: 0},{name: "Jake Atlas", state: "eligible", rumbleTime: 0},
				{name: "James Drake", state: "eligible", rumbleTime: 0},{name: "Joaquin Wilde", state: "eligible", rumbleTime: 0},{name: "Johnny Gargano", state: "eligible", rumbleTime: 0},{name: "Karrion Kross", state: "eligible", rumbleTime: 0},{name: "Killian Dain", state: "eligible", rumbleTime: 0},{name: "Kona Reeves", state: "eligible", rumbleTime: 0},
				{name: "Kushida", state: "eligible", rumbleTime: 0},{name: "Kyle O&#39;Reilly", state: "eligible", rumbleTime: 0},{name: "Leon Ruff", state: "eligible", rumbleTime: 0},{name: "Mansoor", state: "eligible", rumbleTime: 0},{name: "Matt Martel", state: "eligible", rumbleTime: 0},{name: "Oney Lorcan", state: "eligible", rumbleTime: 0},
				{name: "Pat McAfee", state: "eligible", rumbleTime: 0},{name: "Pete Dunne", state: "eligible", rumbleTime: 0},{name: "Raul Mendoza", state: "eligible", rumbleTime: 0},{name: "Ridge Holland", state: "eligible", rumbleTime: 0},{name: "Rinku", state: "eligible", rumbleTime: 0},{name: "Roderick Strong", state: "eligible", rumbleTime: 0},
				{name: "Santos Escobar", state: "eligible", rumbleTime: 0},{name: "Saurav", state: "eligible", rumbleTime: 0},{name: "Timothy Thatcher", state: "eligible", rumbleTime: 0},{name: "Tino Sabbatelli", state: "eligible", rumbleTime: 0},{name: "Tommaso Ciampa", state: "eligible", rumbleTime: 0},{name: "Tony Modra", state: "eligible", rumbleTime: 0},
				{name: "Tyler Breeze", state: "eligible", rumbleTime: 0},{name: "Velveteen Dream", state: "eligible", rumbleTime: 0},{name: "Zack Gibson", state: "eligible", rumbleTime: 0}];
	
	//CURRENT FEMALE ROSTERS. RAW, SMACKDOWN AND NXT WOMEN'S CHAMPIONS ARE TRADITIONALLY NOT ELIGIBLE TO PARTICIPATE.
	womensRoster = [{name: "Alexa Bliss", state: "eligible", rumbleTime: 0},{name: "Becky Lynch", state: "eligible", rumbleTime: 0},{name: "Charlotte Flair", state: "eligible", rumbleTime: 0},{name: "Dana Brooke", state: "eligible", rumbleTime: 0},{name: "Lacey Evans", state: "eligible", rumbleTime: 0},{name: "Lana", state: "eligible", rumbleTime: 0},
				{name: "Mandy Rose", state: "eligible", rumbleTime: 0},{name: "Mickie James", state: "eligible", rumbleTime: 0},{name: "Naomi", state: "eligible", rumbleTime: 0},{name: "Nia Jax", state: "eligible", rumbleTime: 0},{name: "Nikki Cross", state: "eligible", rumbleTime: 0},{name: "Peyton Royce", state: "eligible", rumbleTime: 0},
				{name: "Reckoning", state: "eligible", rumbleTime: 0},{name: "Shayna Baszler", state: "eligible", rumbleTime: 0},{name: "Bayley", state: "eligible", rumbleTime: 0},{name: "Bianca Belair", state: "eligible", rumbleTime: 0},{name: "Billie Kay", state: "eligible", rumbleTime: 0},{name: "Carmella", state: "eligible", rumbleTime: 0},
				{name: "Chelsea Green", state: "eligible", rumbleTime: 0},{name: "Liv Morgan", state: "eligible", rumbleTime: 0},{name: "Natalya", state: "eligible", rumbleTime: 0},{name: "Ruby Riott", state: "eligible", rumbleTime: 0},{name: "Tamina", state: "eligible", rumbleTime: 0},{name: "Aliyah", state: "eligible", rumbleTime: 0},
				{name: "Candice LeRae", state: "eligible", rumbleTime: 0},{name: "Dakota Kai", state: "eligible", rumbleTime: 0},{name: "Ember Moon", state: "eligible", rumbleTime: 0},{name: "Indi Hartwell", state: "eligible", rumbleTime: 0},{name: "Jessamyn Duke", state: "eligible", rumbleTime: 0},{name: "Jessi Kamea", state: "eligible", rumbleTime: 0},
				{name: "Kacy Catanzaro", state: "eligible", rumbleTime: 0},{name: "Kayden Carter", state: "eligible", rumbleTime: 0},{name: "Marina Shafir", state: "eligible", rumbleTime: 0},{name: "Mercedes Martinez", state: "eligible", rumbleTime: 0},{name: "Raquel Gonz&aacute;lez", state: "eligible", rumbleTime: 0},{name: "Rhea Ripley", state: "eligible", rumbleTime: 0},
				{name: "Santana Garrett", state: "eligible", rumbleTime: 0},{name: "Shotzi Blackheart", state: "eligible", rumbleTime: 0},{name: "Tegan Nox", state: "eligible", rumbleTime: 0},{name: "Toni Storm", state: "eligible", rumbleTime: 0},{name: "Vanessa Borne", state: "eligible", rumbleTime: 0},{name: "Xia Li", state: "eligible", rumbleTime: 0}];

	mensChampions = [{name: "Drew McIntyre", championship: "WWE Championship"}, {name: "Roman Reigns", championship: "WWE Universal Championship"}, {name: "Finn B&aacute;lor", championship: "NXT Championship"}];
	womensChampions = [{name: "Asuka", championship: "RAW Women&#39;s Championship"}, {name: "Sasha Banks", championship: "SmackDown Women&#39;s Championship"}, {name: "Io Shirai", championship: "NXT Women&#39;s Championship"}];
	
	//DETERMINE WHO WILL BE IN THE MATCH
	mensRosterMatch = new Array(30);
	womensRosterMatch = new Array(30);
	
	for (var m=0;m < mensRosterMatch.length;m++){
		var selectorIndexMen = Math.floor(Math.random() * mensRoster.length);
		mensRosterMatch[m] = mensRoster[selectorIndexMen];
		mensRosterMatch[m].state = "waiting";
		mensRoster.splice(selectorIndexMen, 1);
	}
	for (var w=0;w < womensRosterMatch.length;w++){
		var selectorIndexWomen = Math.floor(Math.random() * womensRoster.length);
		womensRosterMatch[w] = womensRoster[selectorIndexWomen];
		womensRosterMatch[w].state = "waiting";
		womensRoster.splice(selectorIndexWomen, 1);
	}
	
	addEvent(document.getElementById("startMen"), "click", menRumble);
	addEvent(document.getElementById("startWomen"), "click", womenRumble);
	
	minutes=1;
	seconds=30;
	wrestlersIn=0;
	wrestlersEliminated=0;
	
	matchHours=0;
	matchMinutes=0;
	matchSeconds=0;
}

function menRumble(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	document.getElementById("label").innerHTML = "Men&#39;s Royal Rumble Match currently in progress.";
	
	//DISABLE BUTTONS
	document.getElementById("startMen").disabled = true;
	document.getElementById("startWomen").disabled = true;
	
	//WIND UP THE CLOCKS
	document.getElementById("minutes").innerHTML = "<b>"+minutes+"</b>";
	document.getElementById("seconds").innerHTML = "<b>"+seconds+"</b>";
	
	document.getElementById("match-hours").innerHTML = "<b>"+matchHours+"</b>";
	document.getElementById("match-minutes").innerHTML = "<b>0"+matchMinutes+"</b>";
	document.getElementById("match-seconds").innerHTML = "<b>0"+matchSeconds+"</b>";
	
	//RANDOM #1 & #2
	/*INTRODUCING THE ENTRANT WHO DREW #1: PICK A RANDOM WRESTLER IN THE MEN MATCH ARRAY AND SWITCH STATE TO ACTIVE*/
	//CODE
	var entrant1 = mensRosterMatch[Math.floor(Math.random() * mensRosterMatch.length)];
	for(var m=0;m<mensRosterMatch.length;m++){
		if(mensRosterMatch[m] == entrant1){
			mensRosterMatch[m].state = "active";
		}
	}
	wrestlersIn++;
	document.getElementById("matchplay").innerHTML += "<p>Entrant #1 is "+entrant1.name+"</p>";
	
	/*INTRODUCING THE ENTRANT WHO DREW #2: PICK A DIFFERENT WRESTLER IN THE MEN MATCH ARRAY AND SWITCH STATE TO ACTIVE*/
	//CODE
	var entrant2 = mensRosterMatch[Math.floor(Math.random() * mensRosterMatch.length)];
	
	while (entrant2.state.valueOf() == "active"){
		entrant2 = mensRosterMatch[Math.floor(Math.random() * mensRosterMatch.length)];
	}
	
	for(var m=0;m<mensRosterMatch.length;m++){
		if(mensRosterMatch[m] == entrant2){
			mensRosterMatch[m].state = "active";
		}
	}
	wrestlersIn++;
	document.getElementById("matchplay").innerHTML += "<p>Entrant #2 is "+entrant2.name+"</p>";
	
	for(var m=0;m<mensRosterMatch.length;m++){
		if(mensRosterMatch[m].state.valueOf() == "active")
		{
			document.getElementById("active-wrestlers").innerHTML += "<p>"+mensRosterMatch[m].name+"</p>";
		}
	}
	
	//THE ACTUAL MATCH, AS WELL AS ALL ENTRANTS AND ELIMINATIONS, WILL BE TRACKED IN menClock()
	rumbleMen = setInterval(menClock, 1000);
	menWrestlerClock = setInterval(menTimeSpentInRumble, 1000);
	royalRumbleMatchClock = setInterval(matchClock, 1000);
	activeMen = setInterval(activeMenWrestlers, 1000);
}

function womenRumble(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	document.getElementById("label").innerHTML = "Women&#39;s Royal Rumble Match currently in progress.";
	
	//DISABLE BUTTONS
	document.getElementById("startMen").disabled = true;
	document.getElementById("startWomen").disabled = true;
	
	//WIND UP THE CLOCKS
	document.getElementById("minutes").innerHTML = "<b>"+minutes+"</b>";
	document.getElementById("seconds").innerHTML = "<b>"+seconds+"</b>";
	
	document.getElementById("match-hours").innerHTML = "<b>"+matchHours+"</b>";
	document.getElementById("match-minutes").innerHTML = "<b>0"+matchMinutes+"</b>";
	document.getElementById("match-seconds").innerHTML = "<b>0"+matchSeconds+"</b>";
	
	//RANDOM #1 & #2
	/*INTRODUCING THE ENTRANT WHO DREW #1: PICK A RANDOM WRESTLER IN THE WOMEN MATCH ARRAY AND SWITCH STATE TO ACTIVE*/
	//CODE
	var entrant1 = womensRosterMatch[Math.floor(Math.random() * womensRosterMatch.length)];
	for(var m=0;m<womensRosterMatch.length;m++){
		if(womensRosterMatch[m] == entrant1){
			womensRosterMatch[m].state = "active";
		}
	}
	wrestlersIn++;
	document.getElementById("matchplay").innerHTML += "<p>Entrant #1 is "+entrant1.name+"</p>";
	
	/*INTRODUCING THE ENTRANT WHO DREW #2: PICK A DIFFERENT WRESTLER IN THE WOMEN MATCH ARRAY AND SWITCH STATE TO ACTIVE*/
	//CODE
	var entrant2 = womensRosterMatch[Math.floor(Math.random() * womensRosterMatch.length)];
	
	while (entrant2.state.valueOf() == "active"){
		entrant2 = womensRosterMatch[Math.floor(Math.random() * womensRosterMatch.length)];
	}
	
	for(var m=0;m<womensRosterMatch.length;m++){
		if(womensRosterMatch[m] == entrant2){
			womensRosterMatch[m].state = "active";
		}
	}
	wrestlersIn++;
	document.getElementById("matchplay").innerHTML += "<p>Entrant #2 is "+entrant2.name+"</p>";
	
	for(var m=0;m<womensRosterMatch.length;m++){
		if(womensRosterMatch[m].state.valueOf() == "active")
		{
			document.getElementById("active-wrestlers").innerHTML += "<p>"+womensRosterMatch[m].name+"</p>";
		}
	}
	
	//THE ACTUAL MATCH, AS WELL AS ALL ENTRANTS AND ELIMINATIONS, WILL BE TRACKED IN womenClock()
	rumbleWomen = setInterval(womenClock, 1000);
	womenWrestlerClock = setInterval(womenTimeSpentInRumble, 1000);
	royalRumbleMatchClock = setInterval(matchClock, 1000);
	activeWomen = setInterval(activeWomenWrestlers, 1000);
}

function activeMenWrestlers(){
	document.getElementById("active-wrestlers").innerHTML = "";
	if(wrestlersEliminated == 29){
		clearInterval(activeMen);
	}
	else {
		for(var m=0;m<mensRosterMatch.length;m++)
		{
			if(mensRosterMatch[m].state.valueOf() == "active"){
				if(mensRosterMatch[m].rumbleTime % 60 < 10){
					document.getElementById("active-wrestlers").innerHTML += "<p>"+mensRosterMatch[m].name+" ("+Math.floor(mensRosterMatch[m].rumbleTime / 60)+":0"+mensRosterMatch[m].rumbleTime % 60+")</p>";
				}
				else {
					document.getElementById("active-wrestlers").innerHTML += "<p>"+mensRosterMatch[m].name+" ("+Math.floor(mensRosterMatch[m].rumbleTime / 60)+":"+mensRosterMatch[m].rumbleTime % 60+")</p>";
				}
			}
		}
	}
}

function activeWomenWrestlers(){
	document.getElementById("active-wrestlers").innerHTML = "";
	if(wrestlersEliminated == 29){
		clearInterval(activeWomen);
	}
	else {
		for(var m=0;m<womensRosterMatch.length;m++)
		{
			if(womensRosterMatch[m].state.valueOf() == "active"){
				if(womensRosterMatch[m].rumbleTime % 60 < 10){
					document.getElementById("active-wrestlers").innerHTML += "<p>"+womensRosterMatch[m].name+" ("+Math.floor(womensRosterMatch[m].rumbleTime / 60)+":0"+womensRosterMatch[m].rumbleTime % 60+")</p>";
				}
				else{
					document.getElementById("active-wrestlers").innerHTML += "<p>"+womensRosterMatch[m].name+" ("+Math.floor(womensRosterMatch[m].rumbleTime / 60)+":"+womensRosterMatch[m].rumbleTime % 60+")</p>";
				}
			}
		}
	}
}

function menTimeSpentInRumble(){
	if(wrestlersEliminated == 29){
		clearInterval(menWrestlerClock);
	}
	else {
		for(var m=0;m<mensRosterMatch.length;m++)
		{
			if(mensRosterMatch[m].state.valueOf() == "active"){
				mensRosterMatch[m].rumbleTime++;
			}
		}
	}
}

function womenTimeSpentInRumble(){
	if(wrestlersEliminated == 29){
		clearInterval(womenWrestlerClock);
	}
	else {
		for(var w=0;w<womensRosterMatch.length;w++)
		{
			if(womensRosterMatch[w].state.valueOf() == "active"){
				womensRosterMatch[w].rumbleTime++;
			}
		}
	}
}

function matchClock(){
	if (wrestlersEliminated < 29) {
		/*MATCH CLOCK TICKS UNTIL ALL WRESTLERS ARE ELIMINATED*/
		if(matchSeconds == 59){
			if(matchMinutes == 59){
				matchHours++;
				matchMinutes=0;
				matchSeconds=0;
				
				document.getElementById("match-hours").innerHTML = "<b>"+matchHours+"</b>";
				document.getElementById("match-minutes").innerHTML = "<b>0"+matchMinutes+"</b>";
				document.getElementById("match-seconds").innerHTML = "<b>0"+matchSeconds+"</b>";
			}
			else{
				matchMinutes++;
				matchSeconds=0;
				
				/*FORMATTING PURPOSES*/
				if(matchMinutes < 10){
					if(matchSeconds < 10){
						document.getElementById("match-hours").innerHTML = "<b>"+matchHours+"</b>";
						document.getElementById("match-minutes").innerHTML = "<b>0"+matchMinutes+"</b>";
						document.getElementById("match-seconds").innerHTML = "<b>0"+matchSeconds+"</b>";
					}
					else {
						document.getElementById("match-hours").innerHTML = "<b>"+matchHours+"</b>";
						document.getElementById("match-minutes").innerHTML = "<b>0"+matchMinutes+"</b>";
						document.getElementById("match-seconds").innerHTML = "<b>"+matchSeconds+"</b>";
					}
				}
				else {
					if(matchSeconds < 10) {
						document.getElementById("match-hours").innerHTML = "<b>"+matchHours+"</b>";
						document.getElementById("match-minutes").innerHTML = "<b>"+matchMinutes+"</b>";
						document.getElementById("match-seconds").innerHTML = "<b>0"+matchSeconds+"</b>";
					}
					else {
						document.getElementById("match-hours").innerHTML = "<b>"+matchHours+"</b>";
						document.getElementById("match-minutes").innerHTML = "<b>"+matchMinutes+"</b>";
						document.getElementById("match-seconds").innerHTML = "<b>"+matchSeconds+"</b>";
					}
				}
			}
		}
		else {
			matchSeconds++;
			
			/*FORMATTING PURPOSES*/
			if(matchMinutes < 10){
				if(matchSeconds < 10){
					document.getElementById("match-hours").innerHTML = "<b>"+matchHours+"</b>";
					document.getElementById("match-minutes").innerHTML = "<b>0"+matchMinutes+"</b>";
					document.getElementById("match-seconds").innerHTML = "<b>0"+matchSeconds+"</b>";
				}
				else {
					document.getElementById("match-hours").innerHTML = "<b>"+matchHours+"</b>";
					document.getElementById("match-minutes").innerHTML = "<b>0"+matchMinutes+"</b>";
					document.getElementById("match-seconds").innerHTML = "<b>"+matchSeconds+"</b>";
				}
			}
			else {
				if(matchSeconds < 10) {
					document.getElementById("match-hours").innerHTML = "<b>"+matchHours+"</b>";
					document.getElementById("match-minutes").innerHTML = "<b>"+matchMinutes+"</b>";
					document.getElementById("match-seconds").innerHTML = "<b>0"+matchSeconds+"</b>";
				}
				else {
					document.getElementById("match-hours").innerHTML = "<b>"+matchHours+"</b>";
					document.getElementById("match-minutes").innerHTML = "<b>"+matchMinutes+"</b>";
					document.getElementById("match-seconds").innerHTML = "<b>"+matchSeconds+"</b>";
				}
			}
		}
	}
	else {
		clearInterval(royalRumbleMatchClock);
	}
}

function menClock(){
	var x;

	if(wrestlersIn != 30 && wrestlersEliminated != 29){
		if(minutes == 1 && seconds == 0){
			minutes--;
			seconds = 59;
			document.getElementById("minutes").innerHTML = "<b>"+minutes+"</b>";
			document.getElementById("seconds").innerHTML = "<b>"+seconds+"</b>";
		}
		else if(minutes == 0 && seconds == 0){
			/*WRESTLER JOINS*/
			var nextEntrant = mensRosterMatch[Math.floor(Math.random() * mensRosterMatch.length)];
			while (nextEntrant.state.valueOf() == "active"){
				nextEntrant = mensRosterMatch[Math.floor(Math.random() * mensRosterMatch.length)];
			}
	
			for(var m=0;m<mensRosterMatch.length;m++){
				if(mensRosterMatch[m] == nextEntrant){
					mensRosterMatch[m].state = "active";
				}
			}
			wrestlersIn++;
			document.getElementById("matchplay").innerHTML += "<p>Entrant #"+wrestlersIn+" is "+nextEntrant.name+"</p>";
			
			/*RESET THE CLOCK IF WE DIDN'T REACH 30, OTHERWISE, TURN IT OFF!*/
			if (wrestlersIn == 30){
				document.getElementById("timer").style.visibility = "hidden";
			}
			else {
				minutes=1;
				seconds=30;
				document.getElementById("minutes").innerHTML = "<b>"+minutes+"</b>";
				document.getElementById("seconds").innerHTML = "<b>"+seconds+"</b>";
			}
		}
		else {
			seconds--;
			document.getElementById("minutes").innerHTML = "<b>"+minutes+"</b>";
			
			/*FORMATTING PURPOSES*/
			if(seconds < 10){
				document.getElementById("seconds").innerHTML = "<b>0"+seconds+"</b>";
			}
			else{
				document.getElementById("seconds").innerHTML = "<b>"+seconds+"</b>";
			}
		}
		
		/*TEN SECONDS UNTIL THE NEXT ENTRANT!*/
		if (minutes==0 && seconds <=10)
		{
			document.getElementById("timer").style.backgroundColor = "black";
		}
		else 
		{
			document.getElementById("timer").style.backgroundColor = "darkred";
		}
	}
	
	if (wrestlersEliminated < 29) {
		if (wrestlersIn == 30) {
			/*ELIMINATIONS CAN HAPPEN AT ANY TIME, AND WRESTLERS CAN EVEN ELIMINATE THEMSELVES*/
			var randomNumber = Math.floor(Math.random() * 101); //A WRESTLER GETS ELIMINATED IF 100 IS THE RANDOM NUMBER
			if (randomNumber == 100){
				/*PICK A WRESTLER TO ELIMINATE*/
				var menWrestlerEliminated = mensRosterMatch[Math.floor(Math.random() * mensRosterMatch.length)];
			
				while (menWrestlerEliminated.state.valueOf() == "waiting" || menWrestlerEliminated.state.valueOf() == "eliminated"){
					menWrestlerEliminated = mensRosterMatch[Math.floor(Math.random() * mensRosterMatch.length)];
				}
				
				for(var m=0;m<mensRosterMatch.length;m++){
					if(mensRosterMatch[m] == menWrestlerEliminated){
						mensRosterMatch[m].state = "eliminated";
						x = m;
					}
				}
				
				wrestlersEliminated++;
				mensRosterMatch.splice(x, 1);
				
				if(menWrestlerEliminated.rumbleTime % 60 >= 10) {
					document.getElementById("matchplay").innerHTML += "<p style=\"color: red\">"+menWrestlerEliminated.name+" has been eliminated ("+(Math.floor(menWrestlerEliminated.rumbleTime / 60))+":"+(menWrestlerEliminated.rumbleTime % 60)+").</p>";
				}
				else {
					document.getElementById("matchplay").innerHTML += "<p style=\"color: red\">"+menWrestlerEliminated.name+" has been eliminated ("+(Math.floor(menWrestlerEliminated.rumbleTime / 60))+":0"+(menWrestlerEliminated.rumbleTime % 60)+").</p>";
				}
			}
		}
		else {
			/*ELIMINATIONS CAN HAPPEN AT ANY TIME, AND WRESTLERS CAN EVEN ELIMINATE THEMSELVES*/
			var randomNumber = Math.floor(Math.random() * 151); //A WRESTLER GETS ELIMINATED IF 150 IS THE RANDOM NUMBER
			if (randomNumber == 150){
				/*PICK A WRESTLER TO ELIMINATE*/
				var menWrestlerEliminated = mensRosterMatch[Math.floor(Math.random() * mensRosterMatch.length)];
			
				while (menWrestlerEliminated.state.valueOf() == "waiting" || menWrestlerEliminated.state.valueOf() == "eliminated"){
					menWrestlerEliminated = mensRosterMatch[Math.floor(Math.random() * mensRosterMatch.length)];
				}
				
				for(var m=0;m<mensRosterMatch.length;m++){
					if(mensRosterMatch[m] == menWrestlerEliminated){
						mensRosterMatch[m].state = "eliminated";
						x = m;
					}
				}
				
				wrestlersEliminated++;
				mensRosterMatch.splice(x, 1);
				
				if(menWrestlerEliminated.rumbleTime % 60 >= 10) {
					document.getElementById("matchplay").innerHTML += "<p style=\"color: red\">"+menWrestlerEliminated.name+" has been eliminated ("+(Math.floor(menWrestlerEliminated.rumbleTime / 60))+":"+(menWrestlerEliminated.rumbleTime % 60)+").</p>";
				}
				else {
					document.getElementById("matchplay").innerHTML += "<p style=\"color: red\">"+menWrestlerEliminated.name+" has been eliminated ("+(Math.floor(menWrestlerEliminated.rumbleTime / 60))+":0"+(menWrestlerEliminated.rumbleTime % 60)+").</p>";
				}
			}	
		}
	}
	else {
		clearInterval(rumbleMen);
		for(var v=0;v<mensRosterMatch.length;v++){
			if(mensRosterMatch[v].state.valueOf() == "active"){
				if(mensRosterMatch[v].rumbleTime % 60 >= 10){
					document.getElementById("matchplay").innerHTML += "<p style=\"color: #00cc00\">"+mensRosterMatch[v].name+" has won the Royal Rumble ("+(Math.floor(mensRosterMatch[v].rumbleTime / 60))+":"+(mensRosterMatch[v].rumbleTime % 60)+")!</p>";
				}
				else {
					document.getElementById("matchplay").innerHTML += "<p style=\"color: #00cc00\">"+mensRosterMatch[v].name+" has won the Royal Rumble ("+(Math.floor(mensRosterMatch[v].rumbleTime / 60))+":0"+(mensRosterMatch[v].rumbleTime % 60)+")!</p>";
				}
				document.getElementById("label").innerHTML = "Men&#39;s Royal Rumble Match has concluded.";
				mensRosterMatch[v].state = "winner";
				winner = mensRosterMatch[v];
				if(winner.rumbleTime % 60 < 10){
					document.getElementById("active-wrestlers").innerHTML += "<p>"+winner.name+" ("+Math.floor(winner.rumbleTime / 60)+":0"+winner.rumbleTime % 60+")</p>";
				}
				else {
					document.getElementById("active-wrestlers").innerHTML += "<p>"+winner.name+" ("+Math.floor(winner.rumbleTime / 60)+":"+winner.rumbleTime % 60+")</p>";
				}
			}
		}
			
		var maniaOpponent = mensChampions[Math.floor(Math.random() * mensChampions.length)];
		document.getElementById("matchplay").innerHTML += "<p>"+winner.name+" will challenge "+maniaOpponent.name+" for the "+maniaOpponent.championship+" at <i>WrestleMania</i>!</p>";
	}
}

function womenClock(){
	var x;
	
	if(wrestlersIn != 30 && wrestlersEliminated != 29){
		if(minutes == 1 && seconds == 0){
			minutes--;
			seconds = 59;
			document.getElementById("minutes").innerHTML = "<b>"+minutes+"</b>";
			document.getElementById("seconds").innerHTML = "<b>"+seconds+"</b>";
		}
		else if(minutes == 0 && seconds == 0){
			/*WRESTLER JOINS*/
			var nextEntrant = womensRosterMatch[Math.floor(Math.random() * womensRosterMatch.length)];
			while (nextEntrant.state.valueOf() == "active"){
				nextEntrant = womensRosterMatch[Math.floor(Math.random() * womensRosterMatch.length)];
			}
	
			for(var m=0;m<womensRosterMatch.length;m++){
				if(womensRosterMatch[m] == nextEntrant){
					womensRosterMatch[m].state = "active";
				}
			}
			wrestlersIn++;
			document.getElementById("matchplay").innerHTML += "<p>Entrant #"+wrestlersIn+" is "+nextEntrant.name+"</p>";
			
			/*RESET THE CLOCK IF WE DIDN'T REACH 30, OTHERWISE, TURN IT OFF!*/
			if (wrestlersIn == 30){
				document.getElementById("timer").style.visibility = "hidden";
			}
			else {
				minutes=1;
				seconds=30;
				document.getElementById("minutes").innerHTML = "<b>"+minutes+"</b>";
				document.getElementById("seconds").innerHTML = "<b>"+seconds+"</b>";
			}
		}
		else {
			seconds--;
			document.getElementById("minutes").innerHTML = "<b>"+minutes+"</b>";
			
			/*FORMATTING PURPOSES*/
			if(seconds < 10){
				document.getElementById("seconds").innerHTML = "<b>0"+seconds+"</b>";
			}
			else{
				document.getElementById("seconds").innerHTML = "<b>"+seconds+"</b>";
			}
		}
		
		/*TEN SECONDS UNTIL THE NEXT ENTRANT!*/
		if (minutes==0 && seconds <=10)
		{
			document.getElementById("timer").style.backgroundColor = "black";
		}
		else 
		{
			document.getElementById("timer").style.backgroundColor = "darkred";
		}
	}
	
	if (wrestlersEliminated < 29) {
		if (wrestlersIn == 30) {
			/*ELIMINATIONS CAN HAPPEN AT ANY TIME, AND WRESTLERS CAN EVEN ELIMINATE THEMSELVES*/
			var randomNumber = Math.floor(Math.random() * 101); //A WRESTLER GETS ELIMINATED IF 100 IS THE RANDOM NUMBER.
			if (randomNumber == 100){
				/*PICK A WRESTLER TO ELIMINATE*/
				var womenWrestlerEliminated = womensRosterMatch[Math.floor(Math.random() * womensRosterMatch.length)];
				
				while (womenWrestlerEliminated.state.valueOf() == "waiting" || womenWrestlerEliminated.state.valueOf() == "eliminated"){
					womenWrestlerEliminated = womensRosterMatch[Math.floor(Math.random() * womensRosterMatch.length)];
				}
				
				for(var m=0;m<womensRosterMatch.length;m++){
					if(womensRosterMatch[m] == womenWrestlerEliminated){
						womensRosterMatch[m].state = "eliminated";
						x = m;
					}
				}
				
				wrestlersEliminated++;
				womensRosterMatch.splice(x, 1);
				
				if(womenWrestlerEliminated.rumbleTime % 60 >=10){
					document.getElementById("matchplay").innerHTML += "<p style=\"color: red\">"+womenWrestlerEliminated.name+" has been eliminated ("+(Math.floor(womenWrestlerEliminated.rumbleTime / 60))+":"+(womenWrestlerEliminated.rumbleTime % 60)+").</p>";
				}
				else {
					document.getElementById("matchplay").innerHTML += "<p style=\"color: red\">"+womenWrestlerEliminated.name+" has been eliminated ("+(Math.floor(womenWrestlerEliminated.rumbleTime / 60))+":0"+(womenWrestlerEliminated.rumbleTime % 60)+").</p>";
				}
			}
		}
		else {
			/*ELIMINATIONS CAN HAPPEN AT ANY TIME, AND WRESTLERS CAN EVEN ELIMINATE THEMSELVES*/
			var randomNumber = Math.floor(Math.random() * 151); //A WRESTLER GETS ELIMINATED IF 150 IS THE RANDOM NUMBER.
			if (randomNumber == 150){
				/*PICK A WRESTLER TO ELIMINATE*/
				var womenWrestlerEliminated = womensRosterMatch[Math.floor(Math.random() * womensRosterMatch.length)];
				
				while (womenWrestlerEliminated.state.valueOf() == "waiting" || womenWrestlerEliminated.state.valueOf() == "eliminated"){
					womenWrestlerEliminated = womensRosterMatch[Math.floor(Math.random() * womensRosterMatch.length)];
				}
				
				for(var m=0;m<womensRosterMatch.length;m++){
					if(womensRosterMatch[m] == womenWrestlerEliminated){
						womensRosterMatch[m].state = "eliminated";
						x = m;
					}
				}
				
				wrestlersEliminated++;
				womensRosterMatch.splice(x, 1);
				
				if(womenWrestlerEliminated.rumbleTime % 60 >=10){
					document.getElementById("matchplay").innerHTML += "<p style=\"color: red\">"+womenWrestlerEliminated.name+" has been eliminated ("+(Math.floor(womenWrestlerEliminated.rumbleTime / 60))+":"+(womenWrestlerEliminated.rumbleTime % 60)+").</p>";
				}
				else {
					document.getElementById("matchplay").innerHTML += "<p style=\"color: red\">"+womenWrestlerEliminated.name+" has been eliminated ("+(Math.floor(womenWrestlerEliminated.rumbleTime / 60))+":0"+(womenWrestlerEliminated.rumbleTime % 60)+").</p>";
				}
			}	
		}
	}
	else {
		clearInterval(rumbleWomen);
		for(var v=0;v<womensRosterMatch.length;v++){
			if(womensRosterMatch[v].state.valueOf() == "active"){
				if(womensRosterMatch[v].rumbleTime % 60 >= 10){
					document.getElementById("matchplay").innerHTML += "<p style=\"color: #00cc00\">"+womensRosterMatch[v].name+" has won the Royal Rumble ("+(Math.floor(womensRosterMatch[v].rumbleTime / 60))+":"+(womensRosterMatch[v].rumbleTime % 60)+")!</p>";
				}
				else {
					document.getElementById("matchplay").innerHTML += "<p style=\"color: #00cc00\">"+womensRosterMatch[v].name+" has won the Royal Rumble ("+(Math.floor(womensRosterMatch[v].rumbleTime / 60))+":0"+(womensRosterMatch[v].rumbleTime % 60)+")!</p>";
				}
				document.getElementById("label").innerHTML = "Women&#39;s Royal Rumble Match has concluded.";
				womensRosterMatch[v].state = "winner";
				winner = womensRosterMatch[v];
				if(winner.rumbleTime % 60 < 10){
					document.getElementById("active-wrestlers").innerHTML += "<p>"+winner.name+" ("+Math.floor(winner.rumbleTime / 60)+":0"+winner.rumbleTime % 60+")</p>";
				}
				else {
					document.getElementById("active-wrestlers").innerHTML += "<p>"+winner.name+" ("+Math.floor(winner.rumbleTime / 60)+":"+winner.rumbleTime % 60+")</p>";
				}
			}
		}
		
		var maniaOpponent = womensChampions[Math.floor(Math.random() * womensChampions.length)];
		document.getElementById("matchplay").innerHTML += "<p>"+winner.name+" will challenge "+maniaOpponent.name+" for the "+maniaOpponent.championship+" at <i>WrestleMania</i>!</p>";
	}
}

window.onload = init;
var mensRoster, womensRoster; //ROSTERS
var mensRosterMatch, womensRosterMatch; //WRESTLERS COMPETING IN THE RUMBLE
var minutes, seconds; //90 SECOND INTERVAL
var matchHours, matchMinutes, matchSeconds; //MATCH TIME
var wrestlersIn, wrestlersEliminated;

var menWrestlerEliminated, womenWrestlerEliminated;
var rumbleMen, rumbleWomen; //THE ACTUAL ROYAL RUMBLE MATCH
var menWrestlerClock, womenWrestlerClock; //TIME SPENT IN THE RUMBLE
var royalRumbleMatchClock; //THE MATCH TIME
var activeMen, activeWomen; //WRESTLERS STILL ACTIVE IN THE MATCH

var mensChampions, womensChampions;
var winner;