// default language
var currentLang = "en";

function loadLanguage(){
	console.log("Trying to load language from LocalStorage");
	var lang = localStorage.getItem(localStorageAttributeLanguage);
	if(lang === null){
		console.log("Language does not exist in LocalStorage, initializing & saving once");
		lang = currentLang; // defaut...
		console.log("Language initialized, saving to LocalStorage");
		localStorage.setItem(localStorageAttributeLanguage, lang);
	}
	return lang;
}

function switchLanguageTo(newLang){
	console.log("Switching the language to: "+newLang);

	var previousLang = currentLang;
	currentLang = newLang;
	
	if(newLang == "en"){
		$.i18n.setDictionary(dictionary_en);
	}else{ // for now we only support english & french
		$.i18n.setDictionary(dictionary_fr);
	}
	
	// todo improve -- translate only if necessary?
	translatePage();
}

function translatePage(){
	$('#titleAddRun').html($.i18n._('title.addRun'));
	$('#titleRuns').html($.i18n._('title.runs'));
	$('#titleStats').html($.i18n._('title.stats'));
	$('#titleAbout').html($.i18n._('title.about'));
	
	$('#lblLvlStart').html($.i18n._('msg.plvlStart'));
	$('#lblLvlEnd').html($.i18n._('msg.plvlEnd'));
	$('#lblXpStart').html($.i18n._('msg.xpStart'));
	$('#lblXpEnd').html($.i18n._('msg.xpEnd'));
	$('#lblDuration').html($.i18n._('msg.duration'));
	
	// intput type button
	$('#btnStartPause').attr('value', $.i18n._('btn.startPause'));
	$('#btnCopyTime').attr('value', $.i18n._('btn.copyTime'));
	
	// different because real <button> are used
	$('#btnReset').html($.i18n._('btn.reset'));
	$('#btnResetAll').html($.i18n._('btn.resetAll'));
	$('#btnSave').html($.i18n._('btn.save'));
	
	// little hack because we have duplicate ids in the page (caused by the hidden table that we use as template. Alternative: find a real/nice templating mechanism
	// with that syntax, all elements with id=X are matched
	$('[id=thDuration]').html($.i18n._('col.duration'));
	$('[id=thLvlStart]').html($.i18n._('col.lvlStart'));
	$('[id=thLvlEnd]').html($.i18n._('col.lvlEnd'));
	$('[id=thXpStart]').html($.i18n._('col.xpStart'));
	$('[id=thXpEnd]').html($.i18n._('col.xpEnd'));
	$('[id=thXpTotalStart]').html($.i18n._('col.xpTotalStart'));
	$('[id=thXpTotalEnd]').html($.i18n._('col.xpTotalEnd'));
	$('[id=thXpGain]').html($.i18n._('col.xpGain'));
	$('[id=thXpPerHour]').html($.i18n._('col.xpPerHour'));
	$('[id=thStat]').html($.i18n._('col.stat'));
	$('[id=thValue]').html($.i18n._('col.value'));
	
	$('#lblAuthor').html($.i18n._('msg.author'));
	$('#lblSources').html($.i18n._('msg.sources'));
	
	$('#rowRecordedRuns').html($.i18n._('msg.recordedRuns'));
	$('#rowRecordedRunsDuration').html($.i18n._('msg.recordedRunsDuration'));
	$('#rowXpGainedWithRuns').html($.i18n._('msg.xpGainedWithRuns'));
	$('#rowParagonLevel').html($.i18n._('msg.paragonLevel'));
	$('#rowXpCurrentLevel').html($.i18n._('msg.xpCurrentLevel'));
	$('#rowXpRequiredForNextLevel').html($.i18n._('msg.xpRequiredForNextLevel'));
	$('#rowXpMissingForLevelUp').html($.i18n._('msg.xpMissingForLevelUp'));
	$('#rowCompletionPercentageCurrentLevel').html($.i18n._('msg.completionPercentageCurrentLevel'));
	$('#rowTotalXpAcquired').html($.i18n._('msg.totalXpAcquired'));
	$('#rowXpAveragePerHour').html($.i18n._('msg.xpAveragePerHour'));
	
	$('#rowXpRequiredToReachNext10').html($.i18n._('msg.xpRequiredToReachNext10'));
	$('#rowXpRequiredToReachNext100').html($.i18n._('msg.xpRequiredToReachNext100'));
	$('#rowXpRequiredToReachNext1000').html($.i18n._('msg.xpRequiredToReachNext1000'));
	
	$('#rowXpMissingToReachNext10').html($.i18n._('msg.xpMissingToReachNext10'));
	$('#rowXpMissingToReachNext100').html($.i18n._('msg.xpMissingToReachNext100'));
	$('#rowXpMissingToReachNext1000').html($.i18n._('msg.xpMissingToReachNext1000'));
	
	$('#rowCompletionPercentageNext10').html($.i18n._('msg.completionPercentageNext10'));
	$('#rowCompletionPercentageNext100').html($.i18n._('msg.completionPercentageNext100'));
	$('#rowCompletionPercentageNext1000').html($.i18n._('msg.completionPercentageNext1000'));
	
	$('#rowHoursToFarmToReachNext10').html($.i18n._('msg.hoursToFarmToReachNext10'));
	$('#rowHoursToFarmToReachNext100').html($.i18n._('msg.hoursToFarmToReachNext100'));
	$('#rowHoursToFarmToReachNext1000').html($.i18n._('msg.hoursToFarmToReachNext1000'));
	
}