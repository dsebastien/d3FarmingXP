/* Author: Sebastien Dubois
*/

//timer
var startStopTimer = 0;

//localStorage keys
var localStorageAttributeRuns = "runs";

//
// Functions
//
function supportsLocalStorage() {
	console.log("Checking for LocalStorage support");
	return Modernizr.localstorage;
}

function saveRuns(runsToSave){
	console.log("Saving runs to LocalStorage");
	// localStorage only supports strings: http://stackoverflow.com/questions/3357553/how-to-store-an-array-in-localstorage
	localStorage.setItem(localStorageAttributeRuns, JSON.stringify(runsToSave));
}

function loadRuns(){
	console.log("Trying to load the runs from LocalStorage");
	var runs = localStorage.getItem(localStorageAttributeRuns);
	if(runs === null){
		console.log("Runs do not exist in LocalStorage, initializing & saving once");
		runs = new Array();
		console.log("Runs initialized, saving to LocalStorage");
		saveRuns(runs);
	}else{
		runs = JSON.parse(runs);
		console.log("Runs retrieved from LocalStorage");
	}
	return runs;
}

function findRequiredXpForLevel(level){
	var retVal = -1;
	// http://api.jquery.com/category/traversing/tree-traversal/
	$(paragonLevels["paragonLevels"]).each(function(){
		if(this.level == level){
			retVal = this.xp;
		}
	})
	if(retVal == -1){
		console.log("Error retrieving XP value");
	}
	return retVal;
}

function findTotalRequiredXpForLevel(level){
	var retVal = -1;
	// http://api.jquery.com/category/traversing/tree-traversal/
	$(paragonLevels["paragonLevels"]).each(function(){
		if(this.level == level){
			retVal = this.totalXP;
		}
	})
	if(retVal == -1){
		console.log("Error retrieving total XP value");
	}
	return retVal;
}

function updateRuns(runs){
	console.log("Updating the runs list");
	var content = $("table#tblRunsDefaultContent").clone();
	content.removeAttr("hidden");
	content.attr("id","previousRunsContent");
	
	var i=0;
	$(runs).each(function(){
		i+=1;
		var duree = this[0];
		var pLvlDebut = this[1];
		var pLvlFin = this[2];
		var xpDebut = this[3];
		var xpFin = this[4];
		var totalXpDebut = this[5];
		var totalXpFin = this[6];
		var gainXp = this[7];
		var xpHeure = this[8];
		
		console.log("duree: "+duree);
		console.log("pLvlDebut: "+pLvlDebut);
		console.log("pLvlFin: "+pLvlFin);
		console.log("xpDebut: "+xpDebut);
		console.log("xpFin: "+xpFin);
		console.log("totalXpDebut: "+totalXpDebut);
		console.log("totalXpFin: "+totalXpFin);
		console.log("gainXp: "+gainXp);
		console.log("xpHeure: "+xpHeure);
		console.log("----------------------------------------");
		
		content.append("<tr><td>"+i+"</td><td>"+duree+"</td><td>"+pLvlDebut+"</td><td>"+pLvlFin+"</td><td>"+formatNumberWithThousandsSeparator(xpDebut)+"</td><td>"+formatNumberWithThousandsSeparator(xpFin)+"</td><td>"+formatNumberWithThousandsSeparator(totalXpDebut)+"</td><td>"+formatNumberWithThousandsSeparator(totalXpFin)+"</td><td>"+formatNumberWithThousandsSeparator(gainXp)+"</td><td>"+formatNumberWithThousandsSeparator(xpHeure)+"</td></tr>");					
	})

	$("div#runs").slideUp();
	$("div#runs").empty();
	$("div#runs").html(content);
	$("div#runs").slideDown();
}

function updateStats(runs){
	console.log("Updating the stats list");
	
	var sRuns = runs.length;
	console.log("runs: "+sRuns);
	
	var spLvl = "?";
	var nextLvl = "?";
	var next10 = "?";
	var next100 = "?";
	var next1000 = "?";
	var sXpInCurrentLvl = "?";
	var sXpRequiredForCurrentLevel = "?";
	var sXpMissingForLvlUp = "?";
	var sXpPercentageCurrentLevel = "?";
	var sXpCurrentTotal = "?";
	var sXpHourAverage = 0;
	var sTotalDurationOfRuns = 0;
	var sTotalXpGainOfRuns = 0;
	var sXpRequiredForNext10 = "?";
	var sXpRequiredForNext100 = "?";
	var sXpRequiredForNext1000 = "?";
	var sXpRequiredTotalForNext10 = "?";
	var sXpRequiredTotalForNext100 = "?";
	var sXpRequiredTotalForNext1000 = "?";
	var sTotalXpRequiredToReachNext10 = "?";
	var sTotalXpRequiredToReachNext100 = "?";
	var sTotalXpRequiredToReachNext1000 = "?";
	var sXpMissingToReachNext10 = "?";
	var sXpMissingToReachNext100 = "?";
	var sXpMissingToReachNext1000 = "?";
	var sXpPercentageNext10 = "?";
	var sXpPercentageNext100 = "?";
	var sXpPercentageNext1000 = "?";
	var xpHourAveragesSum = 0;
	var sXpHoursToFarmToReachNext10 = 0;
	var sXpHoursToFarmToReachNext100 = 0;
	var sXpHoursToFarmToReachNext1000 = 0;
	
	if(sRuns > 0){
		spLvl = runs[runs.length-1][2];
		nextLvl = "" + (parseInt(spLvl)+1);
		next10 = "" + roundUpToX(parseInt(spLvl),10);
		next100 = "" + roundUpToX(parseInt(spLvl),100);
		next1000 = "" + roundUpToX(parseInt(spLvl),1000);
		
		if(parseInt(next10) == spLvl){ // e.g., at lvl 10,20, ...
			next10 = "" + (parseInt(spLvl)+10);
		}
		
		if(parseInt(next100) == spLvl){ // e.g., at lvl 100,200, ...
			next100 = "" + (parseInt(spLvl)+100);
		}
		
		if(parseInt(next1000) == spLvl){ // e.g., at lvl 1000,2000, ...
			next1000 = "" + (parseInt(spLvl)+1000);
		}
		
		console.log("plvl: "+spLvl);
		console.log("plvl +1: "+nextLvl);
		console.log("plvl next 10:   "+next10);
		console.log("plvl next 100:  "+next100);
		console.log("plvl next 1000: "+next1000);
		
		sXpInCurrentLvl = runs[runs.length-1][4];
		console.log("xp current level: "+sXpInCurrentLvl);
		
		sXpRequiredForCurrentLevel = findRequiredXpForLevel(nextLvl);
		console.log("xp required for current level: "+sXpRequiredForCurrentLevel);
		
		sXpRequiredForNext10 = findRequiredXpForLevel(next10);
		sXpRequiredForNext100 = findRequiredXpForLevel(next100);
		sXpRequiredForNext1000 = findRequiredXpForLevel(next1000);
		console.log("xp required to for next 10:   "+sXpRequiredForNext10);
		console.log("xp required to for next 100:  "+sXpRequiredForNext100);
		console.log("xp required to for next 1000: "+sXpRequiredForNext1000);
		
		sXpRequiredTotalForNext10 = findTotalRequiredXpForLevel(next10);
		sXpRequiredTotalForNext100 = findTotalRequiredXpForLevel(next100);
		sXpRequiredTotalForNext1000 = findTotalRequiredXpForLevel(next1000);
		sTotalXpRequiredToReachNext10 = sXpRequiredTotalForNext10 - sXpRequiredForNext10;
		sTotalXpRequiredToReachNext100 = sXpRequiredTotalForNext100 - sXpRequiredForNext100;
		sTotalXpRequiredToReachNext1000 = sXpRequiredTotalForNext1000 - sXpRequiredForNext1000;
		console.log("xp total required to reach next 10:   "+sTotalXpRequiredToReachNext10);
		console.log("xp total required to reach next 100:  "+sTotalXpRequiredToReachNext100);		
		console.log("xp total required to reach next 1000: "+sTotalXpRequiredToReachNext1000);
		
		sXpMissingForLvlUp = sXpRequiredForCurrentLevel - sXpInCurrentLvl;
		console.log("xp missing for level up: "+sXpMissingForLvlUp);
		
		sXpPercentageCurrentLevel = ((sXpInCurrentLvl / sXpRequiredForCurrentLevel)*100).toFixed(2);
		console.log("% completion current level: "+sXpPercentageCurrentLevel);
		
		sXpCurrentTotal = runs[runs.length-1][6];
		console.log("total XP: "+sXpCurrentTotal);
		
		sXpMissingToReachNext10 = sTotalXpRequiredToReachNext10 - sXpCurrentTotal;
		sXpMissingToReachNext100 = sTotalXpRequiredToReachNext100 - sXpCurrentTotal;
		sXpMissingToReachNext1000 = sTotalXpRequiredToReachNext1000 - sXpCurrentTotal;
		console.log("xp missing to reach next 10:   "+sXpMissingToReachNext10)
		console.log("xp missing to reach next 100:  "+sXpMissingToReachNext100)
		console.log("xp missing to reach next 1000: "+sXpMissingToReachNext1000)
		
		sXpPercentageNext10 = ((sXpCurrentTotal / sTotalXpRequiredToReachNext10)*100).toFixed(2);
		sXpPercentageNext100 = ((sXpCurrentTotal / sTotalXpRequiredToReachNext100)*100).toFixed(2);
		sXpPercentageNext1000 = ((sXpCurrentTotal / sTotalXpRequiredToReachNext1000)*100).toFixed(2);
		console.log("% completion next 10:   "+sXpPercentageNext10);
		console.log("% completion next 100:  "+sXpPercentageNext100);
		console.log("% completion next 1000: "+sXpPercentageNext1000);
		
		$(runs).each(function(){
			xpHourAveragesSum += this[8];
			sTotalDurationOfRuns += parseInt(this[0]);
			sTotalXpGainOfRuns += parseInt(this[7]);
		})
		
		console.log("total duration of runs: "+sTotalDurationOfRuns);
		
		sXpHourAverage = (xpHourAveragesSum / sRuns).toFixed(0); // decimals aren't THAT important heh
		console.log("average xp/hour: "+sXpHourAverage);
		
		sXpHoursToFarmToReachNext10 = (sXpMissingToReachNext10 / sXpHourAverage).toFixed(1);
		sXpHoursToFarmToReachNext100 = (sXpMissingToReachNext100 / sXpHourAverage).toFixed(1);
		sXpHoursToFarmToReachNext1000 = (sXpMissingToReachNext1000 / sXpHourAverage).toFixed(1);
		console.log("hours to farm to reach next 10:   "+sXpHoursToFarmToReachNext10);
		console.log("hours to farm to reach next 100:  "+sXpHoursToFarmToReachNext100);
		console.log("hours to farm to reach next 1000: "+sXpHoursToFarmToReachNext1000);
	}
	
	$("#valueRecordedRuns").html(formatNumberWithThousandsSeparator(sRuns));
	$("#valueRecordedRunsDuration").html(sTotalDurationOfRuns);
	$("#valueXpGainedWithRuns").html(formatNumberWithThousandsSeparator(sTotalXpGainOfRuns));
	$("#valueParagonLevel").html(spLvl);
	$("#valueXpCurrentLevel").html(formatNumberWithThousandsSeparator(sXpInCurrentLvl));
	$("#valueXpRequiredForNextLevel").html(formatNumberWithThousandsSeparator(sXpRequiredForCurrentLevel));
	$("#valueXpMissingForLevelUp").html(formatNumberWithThousandsSeparator(sXpMissingForLvlUp));
	$("#valueCompletionPercentageCurrentLevel").html(sXpPercentageCurrentLevel+"% <progress max='100' value='"+sXpPercentageCurrentLevel+"'></progress>");
	$("#valueTotalXpAcquired").html(formatNumberWithThousandsSeparator(sXpCurrentTotal));
	$("#valueXpAveragePerHour").html(formatNumberWithThousandsSeparator(sXpHourAverage));
	
	$("#valueXpRequiredForNextLevel").html(formatNumberWithThousandsSeparator(sXpRequiredForCurrentLevel));
	
	$("#valueXpRequiredToReachNext10").html(formatNumberWithThousandsSeparator(sTotalXpRequiredToReachNext10));
	$("#valueXpRequiredToReachNext100").html(formatNumberWithThousandsSeparator(sTotalXpRequiredToReachNext100));
	$("#valueXpRequiredToReachNext1000").html(formatNumberWithThousandsSeparator(sTotalXpRequiredToReachNext1000));
	
	$("#valueXpMissingToReachNext10").html(formatNumberWithThousandsSeparator(sXpMissingToReachNext10));
	$("#valueXpMissingToReachNext100").html(formatNumberWithThousandsSeparator(sXpMissingToReachNext100));
	$("#valueXpMissingToReachNext1000").html(formatNumberWithThousandsSeparator(sXpMissingToReachNext1000));
	
	$("#valueCompletionPercentageNext10").html(sXpPercentageNext10+"% <progress max='100' value='"+sXpPercentageNext10+"'></progress>");
	$("#valueCompletionPercentageNext100").html(sXpPercentageNext100+"% <progress max='100' value='"+sXpPercentageNext100+"'></progress>");
	$("#valueCompletionPercentageNext1000").html(sXpPercentageNext1000+"% <progress max='100' value='"+sXpPercentageNext1000+"'></progress>");
	
	$("#valueHoursToFarmToReachNext10").html(formatNumberWithThousandsSeparator(sXpHoursToFarmToReachNext10));
	$("#valueHoursToFarmToReachNext100").html(formatNumberWithThousandsSeparator(sXpHoursToFarmToReachNext100));
	$("#valueHoursToFarmToReachNext1000").html(formatNumberWithThousandsSeparator(sXpHoursToFarmToReachNext1000));
	
	$("div#stats").slideUp();
	$("table#tblStats").removeAttr("hidden");
	$("div#stats").slideDown();
}

function resetFormAndFocus(){
	console.log("Resetting the form & resetting the focus");
	$("form#formAddRun")[0].reset();
	$('#pLvlDebut').focus();
}

function updateGUI(){
	console.log("Updating the GUI");
	
	var runs = loadRuns();
	
	updateRuns(runs);
	updateStats(runs);
		
	// if there are recorded runs
	if(runs.length > 0){
		// we take the last known paragon level as default value for the start & end levels
		var lastRun = runs[runs.length-1];
		var lastpLvl = lastRun[2];
		$('#pLvlDebut').val(lastpLvl);
		$('#pLvlFin').val(lastpLvl);
		
		// xp start for the next run = xp end of the last recorded run
		$('#xpDebut').val(lastRun[4]/1000);
		$('#xpFin').focus();
	}
	
	noty({
		text: 'Interface mise &agrave; jour!',
		type: 'information'
	});
}

function copyAndReset() {
	var timerClock = startStopTimer.getClock();
	console.log("Copied duration: "+timerClock);
	var runSeconds = Math.floor(timerClock/1000);
	console.log("Run duration in seconds: "+runSeconds);
	var runSecondsRemainder = Math.floor(runSeconds%60);
	console.log("Run seconds remainder: "+runSecondsRemainder);
	
	var runMinutes = Math.floor(runSeconds/60); // todo etre plus precis :)
	console.log("Run duration in minutes: "+runMinutes);
	
	// on était pas si loin de la minute en plus :)
	if(runSecondsRemainder > 30){ // todo etre plus precis :)
		console.log("Run duration gets one more minute because it was close ("+runSecondsRemainder+" seconds into it)");
		runMinutes+=1;
	}
	
	// on copie la duree
	$('#duree').val(runMinutes); // todo etre plus précis :)
	
	// on reset le compteur
	startStopTimer.stop();
	startStopTimer.reset();
	
}
	
$(document).ready(function(){
	$.noty.defaults = {
		layout: 'bottomRight',
		theme: 'default',
		type: 'information', // alert, success, error, warning, confirm, information
		text: '',
		dismissQueue: true, // If you want to use queue feature set this true
		template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
		animation: {
			open: {height: 'toggle'},
			close: {height: 'toggle'},
			easing: 'swing',
			speed: 1500 // opening & closing animation speed
		},
		timeout: true, // delay for closing event. Set false for sticky notifications
		force: false, // adds notification to the beginning of queue when set to true
		modal: false,
		closeWith: ['hover'], // ['click', 'button', 'hover']
		callback: {
			onShow: function() {},
			afterShow: function() {},
			onClose: function() {},
			afterClose: function() {}
		},
		buttons: false // an array of buttons
	};

	// how to translate this one?
	if(!supportsLocalStorage()){
		console.log("LocalStorage is not supported!");
		noty({
			text: 'Navigateur de merde d&eacute;tect&eacute;!<br /><br />Cette application ne fonctionnera pas bien sans Mozilla Firefox ou Google Chrome (version r&eacute;cente)!',
			type: 'error'
		});
	}else{
		console.log("LocalStorage is supported");
	}
	
	// i18n: load language & translate if necessary
	var language = loadLanguage();
	switchLanguageTo(language);
	
	// on aime que ça bouge ;-)
	$("#newEntrySection").draggable();
	$("#statsSection").draggable();
	$("#runsSection").draggable();
	$("#aboutSection").draggable();
	
	//tic tac
	startStopTimer = new Stopwatch(function(value) {
		$('#stopWatch').html(msToTime(value));
	});
	
	// on lance le chargement (nécessaire pour l'initialisation la première fois ou après un reset)
	loadRuns();
	
	// update the GUI
	updateGUI();
	
	noty({
		text: 'Initialisation de Diablo 3 XP Farming r&eacute;ussie!',
		type: 'success'
	});
	
	// bindings	
	$("#btnResetAll").click(function(event){
		console.log("Clearing LocalStorage");
		localStorage.clear();
		
		resetFormAndFocus();
		
		noty({
			text: 'Diablo 3 XP Farming r&eacute;initialis&eacute;!',
			type: 'success'
		});
		updateGUI();
	})

	$("form#formAddRun").submit(function(event){
		console.log("Retrieving the values from the form");
		
		var pLvlDebut = $('#pLvlDebut').val();
		console.log("pLvlDebut: "+pLvlDebut);
		
		var pLvlFin = $('#pLvlFin').val();
		console.log("pLvlFin: "+pLvlFin);
		
		var xpDebut = $('#xpDebut').val() * 1000;
		console.log("xpDebut: "+xpDebut);
		
		var xpFin = $('#xpFin').val() * 1000;
		console.log("xpFin: "+xpFin);
		
		var duree = $('#duree').val();
		console.log("duree: "+duree);
		
		// calcul d'autres infos
		var xpTotaleLvlDebut = 0;
		var xpNecessaireLvlDebut = 0;
		var xpTotaleLvlFin = 0;
		var xpNecessaireLvlFin = 0;
		if(pLvlDebut > 0){
			xpTotaleLvlDebut = findTotalRequiredXpForLevel(pLvlDebut);
			xpNecessaireLvlDebut = findRequiredXpForLevel(pLvlDebut);
			xpNecessaireLvlFin = findRequiredXpForLevel(pLvlFin);
			xpTotaleLvlFin = findTotalRequiredXpForLevel(pLvlFin);
		}
		console.log("xp necessaire lvl debut: "+xpNecessaireLvlDebut);
		console.log("xp necessaire lvl fin: "+xpNecessaireLvlFin);
		console.log("xp totale (du level) debut: "+xpTotaleLvlDebut);
		console.log("xp totale (du level) fin: "+xpTotaleLvlFin);
		
		var totalXpDebut = xpTotaleLvlDebut - xpNecessaireLvlDebut + xpDebut;
		var totalXpFin = xpTotaleLvlFin - xpNecessaireLvlFin + xpFin;
		var gainXp = totalXpFin - totalXpDebut;
		
		console.log("XP totale debut: "+totalXpDebut);
		console.log("XP totale fin: "+totalXpFin);
		console.log("XP gain: "+gainXp);
		
		var xpHeure = Math.round((gainXp / duree) * 60);
		console.log("XP/heure: "+xpHeure);
		
		console.log("Adding run to the array");
		var runs = loadRuns();
		runs[runs.length] = [duree, pLvlDebut,pLvlFin,xpDebut,xpFin, totalXpDebut, totalXpFin, gainXp, xpHeure];
		console.log("Total runs now: "+runs.length);
		
		console.log("Saving run to LocalStorage");
		saveRuns(runs);
		noty({
			text: 'Sauvegarde des runs r&eacute;ussie!',
			type: 'success'
		});
		
		resetFormAndFocus();
		
		updateGUI();
		
		event.preventDefault();
	})
})




