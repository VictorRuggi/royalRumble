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
	mensRoster = [{name: "AJ Styles", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/AJStyles.mp3"},{name: "Akira Tozawa", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/AkiraTozawa.mp3"},{name: "Andrade", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Andrade.mp3"},{name: "Angel Garza", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/AngelGarza.mp3"},{name: "Big Show", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/BigShow.mp3"},{name: "Bobby Lashley", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/BobbyLashley.mp3"},
				{name: "Braun Strowman", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/BraunStrowman.mp3"},{name: "Bray Wyatt", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/BrayWyatt.mp3"},{name: "Cedric Alexander", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/CedricAlexander.mp3"},{name: "Dabba-Kato", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/DabbaKato.mp3"},{name: "Drew Gulak", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/DrewGulak.mp3"},{name: "Elias", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Elias.mp3"},
				{name: "Erik", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Erik.mp3"},{name: "Gran Metalik", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/GranMetalik.mp3"},{name: "Humberto Carrillo", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/HumbertoCarrillo.mp3"},{name: "Ivar", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Ivar.mp3"},{name: "Jeff Hardy", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/JeffHardy.mp3"},{name: "Jinder Mahal", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/JinderMahal.mp3"},
				{name: "John Morrison", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/JohnMorrison.mp3"},{name: "Keith Lee", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/KeithLee.mp3"},{name: "Kofi Kingston", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/KofiKingston.mp3"},{name: "Lince Dorado", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/LinceDorado.mp3"},{name: "Mace", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Mace.mp3"},{name: "The Miz", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/TheMiz.mp3"},
				{name: "Mustafa Ali", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/MustafaAli.mp3"},{name: "MVP", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/MVP.mp3"},{name: "Omos", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Omos.mp3"},{name: "Randy Orton", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/RandyOrton.mp3"},{name: "Ricochet", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Ricochet.mp3"},{name: "Riddick Moss", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/RiddickMoss.mp3"},
				{name: "Riddle", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Riddle.mp3"},{name: "R-Truth", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/RTruth.mp3"},{name: "Sheamus", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Sheamus.mp3"},{name: "Shelton Benjamin", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/SheltonBenjamin.mp3"},{name: "Slapjack", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Slapjack.mp3"},{name: "T-Bar", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/TBar.mp3"},
				{name: "Titus O&#39;Neil", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/TitusONeil.mp3"},{name: "Tucker", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Tucker.mp3"},{name: "Xavier Woods", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/XavierWoods.mp3"},{name: "Aleister Black", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/AleisterBlack.mp3"},{name: "Angelo Dawkins", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/AngeloDawkins.mp3"},{name: "Apollo Crews", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/ApolloCrews.mp3"},
				{name: "Big E", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/BigE.mp3"},{name: "Bo Dallas", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/BoDallas.mp3"},{name: "Cesaro", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Cesaro.mp3"},{name: "Chad Gable", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/ChadGable.mp3"},{name: "Daniel Bryan", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/DanielBryan.mp3"},{name: "Dolph Ziggler", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/DolphZiggler.mp3"},
				{name: "Dominik Mysterio", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/DominikMysterio.mp3"},{name: "Jaxson Ryker", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/JaxsonRyker.mp3"},{name: "Jey Uso", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/JeyUso.mp3"},{name: "Jimmy Uso", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/JimmyUso.mp3"},{name: "Kalisto", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Kalisto.mp3"},{name: "Kane", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Kane.mp3"},
				{name: "Kevin Owens", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/KevinOwens.mp3"},{name: "King Corbin", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/KingCorbin.mp3"},{name: "Lars Sullivan", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/LarsSullivan.mp3"},{name: "Mojo Rawley", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/MojoRawley.mp3"},{name: "Montez Ford", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/MontezFord.mp3"},{name: "Murphy", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Murphy.mp3"},
				{name: "Otis", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Otis.mp3"},{name: "Rey Mysterio", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/ReyMysterio.mp3"},{name: "Robert Roode", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/RobertRoode.mp3"},{name: "Sami Zayn", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/SamiZayn.mp3"},{name: "Seth Rollins", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/SethRollins.mp3"},{name: "Shinsuke Nakamura", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/ShinsukeNakamura.mp3"},
				{name: "Steve Cutler", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/SteveCutler.mp3"},{name: "Wesley Blake", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/WesleyBlake.mp3"},{name: "Adam Cole", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/AdamCole.mp3"},{name: "Arturo Ruas", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/ArturoRuas.mp3"},{name: "Ashante \"Thee\" Adonis", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/AshanteTheeAdonis.mp3"},{name: "Austin Theory", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/AustinTheory.mp3"},
				{name: "Boa", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Boa.mp3"},{name: "Bobby Fish", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/BobbyFish.mp3"},{name: "Bronson Reed", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/BronsonReed.mp3"},{name: "Cameron Grimes", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/CameronGrimes.mp3"},{name: "Chase Parker", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/ChaseParker.mp3"},{name: "Damian Priest", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/DamianPriest.mp3"},
				{name: "Danny Burch", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/DannyBurch.mp3"},{name: "Dexter Lumis", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/DexterLumis.mp3"},{name: "Drake Maverick", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/DrakeMaverick.mp3"},{name: "Fandango", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Fandango.mp3"},{name: "Isaiah \"Swerve\" Scott", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/IsaiahSwerveScott.mp3"},{name: "Jake Atlas", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/JakeAtlas.mp3"},
				{name: "James Drake", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/JamesDrake.mp3"},{name: "Joaquin Wilde", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/JoaquinWilde.mp3"},{name: "Johnny Gargano", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/JohnnyGargano.mp3"},{name: "Karrion Kross", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/KarrionKross.mp3"},{name: "Killian Dain", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/KillianDain.mp3"},{name: "Kona Reeves", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/KonaReeves.mp3"},
				{name: "Kushida", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Kushida.mp3"},{name: "Kyle O&#39;Reilly", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/KyleOReilly.mp3"},{name: "Leon Ruff", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/LeonRuff.mp3"},{name: "Mansoor", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Mansoor.mp3"},{name: "Matt Martel", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/MattMartel.mp3"},{name: "Oney Lorcan", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/OneyLorcan.mp3"},
				{name: "Pat McAfee", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/PatMcAfee.mp3"},{name: "Pete Dunne", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/PeteDunne.mp3"},{name: "Raul Mendoza", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/RaulMendoza.mp3"},{name: "Ridge Holland", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/RidgeHolland.mp3"},{name: "Rinku", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Rinku.mp3"},{name: "Roderick Strong", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/RoderickStrong.mp3"},
				{name: "Santos Escobar", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/SantosEscobar.mp3"},{name: "Saurav", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/Saurav.mp3"},{name: "Timothy Thatcher", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/TimothyThatcher.mp3"},{name: "Tino Sabbatelli", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/TinoSabbatelli.mp3"},{name: "Tommaso Ciampa", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/TommasoCiampa.mp3"},{name: "Brendan Vink", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/BrendanVink.mp3"},
				{name: "Tyler Breeze", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/TylerBreeze.mp3"},{name: "Velveteen Dream", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/VelveteenDream.mp3"},{name: "Zack Gibson", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/men/ZackGibson.mp3"}];
	
	//CURRENT FEMALE ROSTERS. RAW, SMACKDOWN AND NXT WOMEN'S CHAMPIONS ARE TRADITIONALLY NOT ELIGIBLE TO PARTICIPATE.
	womensRoster = [{name: "Alexa Bliss", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/AlexaBliss.mp3"},{name: "Becky Lynch", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/BeckyLynch.mp3"},{name: "Charlotte Flair", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/CharlotteFlair.mp3"},{name: "Dana Brooke", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/DanaBrooke.mp3"},{name: "Lacey Evans", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/LaceyEvans.mp3"},{name: "Lana", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/Lana.mp3"},
				{name: "Mandy Rose", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/MandyRose.mp3"},{name: "Mickie James", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/MickieJames.mp3"},{name: "Naomi", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/Naomi.mp3"},{name: "Nia Jax", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/NiaJax.mp3"},{name: "Nikki Cross", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/NikkiCross.mp3"},{name: "Peyton Royce", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/PeytonRoyce.mp3"},
				{name: "Reckoning", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/Reckoning.mp3"},{name: "Shayna Baszler", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/ShaynaBaszler.mp3"},{name: "Bayley", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/Bayley.mp3"},{name: "Bianca Belair", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/BiancaBelair.mp3"},{name: "Billie Kay", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/BillieKay.mp3"},{name: "Carmella", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/Carmella.mp3"},
				{name: "Chelsea Green", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/ChelseaGreen.mp3"},{name: "Liv Morgan", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/LivMorgan.mp3"},{name: "Natalya", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/Natalya.mp3"},{name: "Ruby Riott", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/RubyRiott.mp3"},{name: "Tamina", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/Tamina.mp3"},{name: "Aliyah", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/Aliyah.mp3"},
				{name: "Candice LeRae", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/CandiceLeRae.mp3"},{name: "Dakota Kai", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/DakotaKai.mp3"},{name: "Ember Moon", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/EmberMoon.mp3"},{name: "Indi Hartwell", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/IndiHartwell.mp3"},{name: "Jessamyn Duke", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/JessamynDuke.mp3"},{name: "Jessi Kamea", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/JessiKamea.mp3"},
				{name: "Kacy Catanzaro", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/KacyCatanzaro.mp3"},{name: "Kayden Carter", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/KaydenCarter.mp3"},{name: "Marina Shafir", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/MarinaShafir.mp3"},{name: "Mercedes Martinez", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/MercedesMartinez.mp3"},{name: "Raquel Gonz&aacute;lez", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/RaquelGonzalez.mp3"},{name: "Rhea Ripley", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/RheaRipley.mp3"},
				{name: "Santana Garrett", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/SantanaGarrett.mp3"},{name: "Shotzi Blackheart", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/ShotziBlackheart.mp3"},{name: "Tegan Nox", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/TeganNox.mp3"},{name: "Toni Storm", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/ToniStorm.mp3"},{name: "Vanessa Borne", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/VanessaBorne.mp3"},{name: "Xia Li", state: "eligible", rumbleTime: 0, entranceMusic: "entrances/women/XiaLi.mp3"}];

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
	
	songTime = 0;
}

function menRumble(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	ringBell = new Audio("RingBell.mp3");
	ringBell.play();
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
	
	ringBell = new Audio("RingBell.mp3");
	ringBell.play();
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
			
			entrance = new Audio(nextEntrant.entranceMusic);
			entrance.play();
			song = setInterval(entrancePlaying, 1000);
			
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
				if(minutes == 0 && seconds == 0){
					buzzer = new Audio("RumbleBuzzer.mp3");
					buzzer.play();
				}
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
				
				ringBell = new Audio("RingBell.mp3");
				ringBell.play();
				entrance = new Audio(winner.entranceMusic);
				entrance.play();
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
			
			entrance = new Audio(nextEntrant.entranceMusic);
			entrance.play();
			song = setInterval(entrancePlaying, 1000);
			
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
				if(minutes == 0 && seconds == 0){
					buzzer = new Audio("RumbleBuzzer.mp3");
					buzzer.play();
				}
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
				
				ringBell = new Audio("RingBell.mp3");
				ringBell.play();
				entrance = new Audio(winner.entranceMusic);
				entrance.play();
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

function entrancePlaying(){
	if(songTime <= 15){
		songTime++;
	}
	else {
		entrance.pause();
		entrance.currentTime = 0;
		songTime = 0;
		clearInterval(song);
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

var ringBell; //THE RING BELL
var buzzer; //ROYAL RUMBLE BUZZER

var song; //THE SONG AS IT PLAYS (TO KEEP TRACK)
var songTime; //THE ENTRANCE TIME
var entrance; //THE ACTUAL SONG