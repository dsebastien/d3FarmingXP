/* Author: Sebastien Dubois
*/
	//
	// Globals (ouhhh scary ^^)
	//
	
	// Paragon levels data
	var paragonLevels = {}
	paragonLevels["paragonLevels"] = [
		{ "level":   1, "xp":    7200000, "totalXP":     7200000},
		{ "level":   2, "xp":    8640000, "totalXP":    15840000},
		{ "level":   3, "xp":   10080000, "totalXP":    25920000},
		{ "level":   4, "xp":   11520000, "totalXP":    37440000},
		{ "level":   5, "xp":   12960000, "totalXP":    50400000},
		{ "level":   6, "xp":   14400000, "totalXP":    64800000},
		{ "level":   7, "xp":   15840000, "totalXP":    80640000},
		{ "level":   8, "xp":   17280000, "totalXP":    97920000},
		{ "level":   9, "xp":   18720000, "totalXP":   116640000},
		{ "level":  10, "xp":   20160000, "totalXP":   136800000},
		{ "level":  11, "xp":   21600000, "totalXP":   158400000},
		{ "level":  12, "xp":   23040000, "totalXP":   181440000},
		{ "level":  13, "xp":   24480000, "totalXP":   205920000},
		{ "level":  14, "xp":   25920000, "totalXP":   231840000},
		{ "level":  15, "xp":   27360000, "totalXP":   259200000},
		{ "level":  16, "xp":   28800000, "totalXP":   288000000},
		{ "level":  17, "xp":   30240000, "totalXP":   318240000},
		{ "level":  18, "xp":   31680000, "totalXP":   349920000},
		{ "level":  19, "xp":   33120000, "totalXP":   383040000},
		{ "level":  20, "xp":   34560000, "totalXP":   417600000},
		{ "level":  21, "xp":   36000000, "totalXP":   453600000},
		{ "level":  22, "xp":   37440000, "totalXP":   491040000},
		{ "level":  23, "xp":   38880000, "totalXP":   529920000},
		{ "level":  24, "xp":   40320000, "totalXP":   570240000},
		{ "level":  25, "xp":   41760000, "totalXP":   612000000},
		{ "level":  26, "xp":   43200000, "totalXP":   655200000},
		{ "level":  27, "xp":   44640000, "totalXP":   699840000},
		{ "level":  28, "xp":   46080000, "totalXP":   745920000},
		{ "level":  29, "xp":   47520000, "totalXP":   793440000},
		{ "level":  30, "xp":   48960000, "totalXP":   842400000},
		{ "level":  31, "xp":   50400000, "totalXP":   892800000},
		{ "level":  32, "xp":   51840000, "totalXP":   944640000},
		{ "level":  33, "xp":   53280000, "totalXP":   997920000},
		{ "level":  34, "xp":   54720000, "totalXP":  1052640000},
		{ "level":  35, "xp":   56160000, "totalXP":  1108800000},
		{ "level":  36, "xp":   57600000, "totalXP":  1166400000},
		{ "level":  37, "xp":   59040000, "totalXP":  1225440000},
		{ "level":  38, "xp":   60480000, "totalXP":  1285920000},
		{ "level":  39, "xp":   61920000, "totalXP":  1347840000},
		{ "level":  40, "xp":   63360000, "totalXP":  1411200000},
		{ "level":  41, "xp":   64800000, "totalXP":  1476000000},
		{ "level":  42, "xp":   66240000, "totalXP":  1542240000},
		{ "level":  43, "xp":   67680000, "totalXP":  1609920000},
		{ "level":  44, "xp":   69120000, "totalXP":  1679040000},
		{ "level":  45, "xp":   70560000, "totalXP":  1749600000},
		{ "level":  46, "xp":   72000000, "totalXP":  1821600000},
		{ "level":  47, "xp":   73440000, "totalXP":  1895040000},
		{ "level":  48, "xp":   74880000, "totalXP":  1969920000},
		{ "level":  49, "xp":   76320000, "totalXP":  2046240000},
		{ "level":  50, "xp":   77760000, "totalXP":  2124000000},
		{ "level":  51, "xp":   79200000, "totalXP":  2203200000},
		{ "level":  52, "xp":   80640000, "totalXP":  2283840000},
		{ "level":  53, "xp":   82080000, "totalXP":  2365920000},
		{ "level":  54, "xp":   83520000, "totalXP":  2449440000},
		{ "level":  55, "xp":   84960000, "totalXP":  2534400000},
		{ "level":  56, "xp":   86400000, "totalXP":  2620800000},
		{ "level":  57, "xp":   87840000, "totalXP":  2708640000},
		{ "level":  58, "xp":   89280000, "totalXP":  2797920000},
		{ "level":  59, "xp":   90720000, "totalXP":  2888640000},
		{ "level":  60, "xp":   92160000, "totalXP":  2980800000},
		{ "level":  61, "xp":   95040000, "totalXP":  3075840000},
		{ "level":  62, "xp":   97920000, "totalXP":  3173760000},
		{ "level":  63, "xp":  100800000, "totalXP":  3274560000},
		{ "level":  64, "xp":  103680000, "totalXP":  3378240000},
		{ "level":  65, "xp":  106560000, "totalXP":  3484800000},
		{ "level":  66, "xp":  109440000, "totalXP":  3594240000},
		{ "level":  67, "xp":  112320000, "totalXP":  3706560000},
		{ "level":  68, "xp":  115200000, "totalXP":  3821760000},
		{ "level":  69, "xp":  118080000, "totalXP":  3939840000},
		{ "level":  70, "xp":  120960000, "totalXP":  4060800000},
		{ "level":  71, "xp":  126000000, "totalXP":  4186800000},
		{ "level":  72, "xp":  131040000, "totalXP":  4317840000},
		{ "level":  73, "xp":  136080000, "totalXP":  4453920000},
		{ "level":  74, "xp":  141120000, "totalXP":  4595040000},
		{ "level":  75, "xp":  146160000, "totalXP":  4741200000},
		{ "level":  76, "xp":  151200000, "totalXP":  4892400000},
		{ "level":  77, "xp":  156240000, "totalXP":  5048640000},
		{ "level":  78, "xp":  161280000, "totalXP":  5209920000},
		{ "level":  79, "xp":  166320000, "totalXP":  5376240000},
		{ "level":  80, "xp":  171360000, "totalXP":  5547600000},
		{ "level":  81, "xp":  177840000, "totalXP":  5725440000},
		{ "level":  82, "xp":  184320000, "totalXP":  5909760000},
		{ "level":  83, "xp":  190800000, "totalXP":  6100560000},
		{ "level":  84, "xp":  197280000, "totalXP":  6297840000},
		{ "level":  85, "xp":  203760000, "totalXP":  6501600000},
		{ "level":  86, "xp":  210240000, "totalXP":  6711840000},
		{ "level":  87, "xp":  216720000, "totalXP":  6928560000},
		{ "level":  88, "xp":  223200000, "totalXP":  7151760000},
		{ "level":  89, "xp":  229680000, "totalXP":  7381440000},
		{ "level":  90, "xp":  236160000, "totalXP":  7617600000},
		{ "level":  91, "xp":  244800000, "totalXP":  7862400000},
		{ "level":  92, "xp":  253440000, "totalXP":  8115840000},
		{ "level":  93, "xp":  262080000, "totalXP":  8377920000},
		{ "level":  94, "xp":  270720000, "totalXP":  8648640000},
		{ "level":  95, "xp":  279360000, "totalXP":  8928000000},
		{ "level":  96, "xp":  288000000, "totalXP":  9216000000},
		{ "level":  97, "xp":  296640000, "totalXP":  9512640000},
		{ "level":  98, "xp":  305280000, "totalXP":  9817920000},
		{ "level":  99, "xp":  313920000, "totalXP": 10131840000},
		{ "level":  100, "xp": 322560000, "totalXP": 10454400000}
	]
	
	// i18n
	var dictionary_fr = {
		'title.addRun' : 'Ajout d\'un run',
		'title.runs' : 'Runs',
		'title.stats': 'Statistiques',
		'title.about' : 'A propos',
		
		'msg.plvlStart' : 'Paragon level d&eacute;but (0-99)',
		'msg.plvlEnd' : 'Paragon level fin (0-100)',
		'msg.xpStart' : 'XP d&eacute;but (valeur / 1000)',
		'msg.xpEnd' : 'XP fin (valeur / 1000)',
		'msg.duration' : 'Dur&eacute;e (minutes)',
		'msg.author' : 'Auteur',
		'msg.sources' : 'Code source',
		
		'btn.startPause' : 'Start/Pause',
		'btn.copyTime' : 'Copier',
		'btn.reset' : 'Reset',
		'btn.resetAll' : 'Effacer historique',
		'btn.save' : 'Enregistrer',
		
		'col.duration' : 'Dur&eacute;e',
		'col.lvlStart' : 'Lvl d&eacute;but',
		'col.lvlEnd' : 'Lvl fin',
		'col.xpStart' : 'XP d&eacute;but',
		'col.xpEnd' : 'XP fin',
		'col.xpTotalStart' : 'XP totale d&eacute;but',
		'col.xpTotalEnd' : 'XP totale fin',
		'col.xpGain' : 'XP gagn&eacute;e',
		'col.xpPerHour' : 'XP/heure',
		'col.stat' : 'Statistique',
		'col.value' : 'Valeur'
	}
	
	var dictionary_en = {
		'title.addRun' : 'Add a run',
		'title.runs' : 'Runs',
		'title.stats': 'Statistics',
		'title.about' : 'About',
		
		'msg.plvlStart' : 'Paragon level at start (0-99)',
		'msg.plvlEnd' : 'Paragon level at end (0-100)',
		'msg.xpStart' : 'XP at start (value / 1000)',
		'msg.xpEnd' : 'XP at end (value / 1000)',
		'msg.duration' : 'Duration (minutes)',
		'msg.author' : 'Author',
		'msg.sources' : 'Source code',
		
		'btn.startPause' : 'Start/Pause',
		'btn.copyTime': 'Copy',
		'btn.reset' : 'Reset',
		'btn.resetAll' : 'Clear everything',
		'btn.save' : 'Save',
		
		'col.duration' : 'Duration',
		'col.lvlStart' : 'Lvl start',
		'col.lvlEnd' : 'Lvl end',
		'col.xpStart' : 'XP start',
		'col.xpEnd' : 'XP end',
		'col.xpTotalStart' : 'XP total start',
		'col.xpTotalEnd' : 'XP total end',
		'col.xpGain' : 'XP gained',
		'col.xpPerHour' : 'XP/hour',
		'col.stat' : 'Stat',
		'col.value' : 'Value'
	}
	
	function translatePage(){
			$('#titleAddRun').html($.i18n._('title.addRun'))
			$('#titleRuns').html($.i18n._('title.runs'))
			$('#titleStats').html($.i18n._('title.stats'))
			$('#titleAbout').html($.i18n._('title.about'))
			
			$('#lblLvlStart').html($.i18n._('msg.plvlStart'))
			$('#lblLvlEnd').html($.i18n._('msg.plvlEnd'))
			$('#lblXpStart').html($.i18n._('msg.xpStart'))
			$('#lblXpEnd').html($.i18n._('msg.xpEnd'))
			$('#lblDuration').html($.i18n._('msg.duration'))
			
			// intput type button
			$('#btnStartPause').attr('value', $.i18n._('btn.startPause'))
			$('#btnCopyTime').attr('value', $.i18n._('btn.copyTime'))
			
			// different because real <button> are used
			$('#btnReset').html($.i18n._('btn.reset'))
			$('#btnResetAll').html($.i18n._('btn.resetAll'))
			$('#btnSave').html($.i18n._('btn.save'))
			
			// little hack because we have duplicate ids in the page (caused by the hidden table that we use as template. Alternative: find a real/nice templating mechanism
			// with that syntax, all elements with id=X are matched
			$('[id=thDuration]').html($.i18n._('col.duration'))
			$('[id=thLvlStart]').html($.i18n._('col.lvlStart'))
			$('[id=thLvlEnd]').html($.i18n._('col.lvlEnd'))
			$('[id=thXpStart]').html($.i18n._('col.xpStart'))
			$('[id=thXpEnd]').html($.i18n._('col.xpEnd'))
			$('[id=thXpTotalStart]').html($.i18n._('col.xpTotalStart'))
			$('[id=thXpTotalEnd]').html($.i18n._('col.xpTotalEnd'))
			$('[id=thXpGain]').html($.i18n._('col.xpGain'))
			$('[id=thXpPerHour]').html($.i18n._('col.xpPerHour'))
			$('[id=thStat]').html($.i18n._('col.stat'))
			$('[id=thValue]').html($.i18n._('col.value'))
			
			$('#lblAuthor').html($.i18n._('msg.author'))
			$('#lblSources').html($.i18n._('msg.sources'))
			
			
			
			
			
			
			
			
			
			
			
	}
	
	
	var currentLang = "en"
	
	//tictac
	var startStopTimer = 0
	var startStopCurrent = 0
	
	//localStorage keys
	var localStorageAttributeRuns = "runs"
	var localStorageAttributeLanguage = "lang"
	
	
	//
	// Functions
	//
	function supportsLocalStorage() {
		console.log("Checking for LocalStorage support")
		return Modernizr.localstorage
	}
	
	function loadLanguage(){
		console.log("Trying to load language from LocalStorage")
		var lang = localStorage.getItem(localStorageAttributeLanguage)
		if(lang === null){
			console.log("Language does not exist in LocalStorage, initializing & saving once")
			lang = currentLang // défaut...
			console.log("Language initialized, saving to LocalStorage")
			localStorage.setItem(localStorageAttributeLanguage, lang)
		}
		return lang
	}
	
	function switchLanguageTo(newLang){
		console.log("Switching the language to: "+newLang)
	
		var previousLang = currentLang
		currentLang = newLang
		
		if(newLang == "en"){
			$.i18n.setDictionary(dictionary_en);
		}else{ // for now we only support english & french
			$.i18n.setDictionary(dictionary_fr);
		}
		
		// todo improve -- translate only if necessary?
		translatePage()
	}

	function saveRuns(runsToSave){
		console.log("Saving runs to LocalStorage")
		// localStorage only supports strings: http://stackoverflow.com/questions/3357553/how-to-store-an-array-in-localstorage
		localStorage.setItem(localStorageAttributeRuns, JSON.stringify(runsToSave))
	}
	
	function loadRuns(){
		console.log("Trying to load the runs from LocalStorage")
		var runs = localStorage.getItem(localStorageAttributeRuns)
		if(runs === null){
			console.log("Runs do not exist in LocalStorage, initializing & saving once")
			runs = new Array()
			console.log("Runs initialized, saving to LocalStorage")
			saveRuns(runs)
		}else{
			runs = JSON.parse(runs)
			console.log("Runs retrieved from LocalStorage")
		}
		return runs
	}
	
	function findRequiredXpForLevel(level){
		var retVal = -1
		// http://api.jquery.com/category/traversing/tree-traversal/
		$(paragonLevels["paragonLevels"]).each(function(){
			if(this.level == level){
				retVal = this.xp
			}
		})
		if(retVal == -1){
			console.log("Error retrieving XP value")
		}
		return retVal
	}
	
	function findTotalRequiredXpForLevel(level){
		var retVal = -1
		// http://api.jquery.com/category/traversing/tree-traversal/
		$(paragonLevels["paragonLevels"]).each(function(){
			if(this.level == level){
				retVal = this.totalXP
			}
		})
		if(retVal == -1){
			console.log("Error retrieving total XP value")
		}
		return retVal
	}
	
	function formatNumberWithThousandsSeparator(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
	
	function updateRuns(runs){
		console.log("Updating the runs list")
		var content = $("table#tblRunsDefaultContent").clone()
		content.removeAttr("hidden")
		content.attr("id","previousRunsContent")
		
		var i=0;
		$(runs).each(function(){
			i+=1
			var duree = this[0]
			var pLvlDebut = this[1]
			var pLvlFin = this[2]
			var xpDebut = this[3]
			var xpFin = this[4]
			var totalXpDebut = this[5]
			var totalXpFin = this[6]
			var gainXp = this[7]
			var xpHeure = this[8]
			
			console.log("duree: "+duree)
			console.log("pLvlDebut: "+pLvlDebut)
			console.log("pLvlFin: "+pLvlFin)
			console.log("xpDebut: "+xpDebut)
			console.log("xpFin: "+xpFin)
			console.log("totalXpDebut: "+totalXpDebut)
			console.log("totalXpFin: "+totalXpFin)
			console.log("gainXp: "+gainXp)
			console.log("xpHeure: "+xpHeure)
			
			content.append("<tr><td>"+i+"</td><td>"+duree+"</td><td>"+pLvlDebut+"</td><td>"+pLvlFin+"</td><td>"+formatNumberWithThousandsSeparator(xpDebut)+"</td><td>"+formatNumberWithThousandsSeparator(xpFin)+"</td><td>"+formatNumberWithThousandsSeparator(totalXpDebut)+"</td><td>"+formatNumberWithThousandsSeparator(totalXpFin)+"</td><td>"+formatNumberWithThousandsSeparator(gainXp)+"</td><td>"+formatNumberWithThousandsSeparator(xpHeure)+"</td></tr>")					
		})

		$("div#runs").slideUp()
		$("div#runs").empty()
		$("div#runs").html(content)
		$("div#runs").slideDown()
	}
	
	function updateStats(runs){
		console.log("Updating the stats list")
		var content = $("table#tblStatsDefaultContent").clone()
		content.removeAttr("hidden")
		content.attr("id","tblStats")
		
		var sRuns = runs.length
		console.log("runs: "+sRuns)
		
		var spLvl = "?"
		var sMfFromLvl = "?"
		var sXpInCurrentLvl = "?"
		var sXpRequiredForCurrentLevel = "?"
		var sXpMissingForLvlUp = "?"
		var sXpPercentageCurrentLevel = "?"
		var sXpCurrentTotal = "?"
		var sXpMissingForLvl100 = "?"
		var sXpHourAverage = 0
		var sHoursToFarmBeforeLevel100 = "?"
		var sLvl100Completion = "?"
		var sTotalDurationOfRuns = 0
		var sTotalXpGainOfRuns = 0
		
		if(sRuns > 0){
			spLvl = runs[runs.length-1][2]
			console.log("plvl: "+spLvl)
			
			sMfFromLvl = 3 * spLvl
			console.log("mf plvl: "+sMfFromLvl)
			
			sXpInCurrentLvl = runs[runs.length-1][4]
			console.log("xp current level: "+sXpInCurrentLvl)
			
			sXpRequiredForCurrentLevel = findRequiredXpForLevel(spLvl)
			console.log("xp required for current level: "+sXpRequiredForCurrentLevel)
			
			sXpMissingForLvlUp = sXpRequiredForCurrentLevel - sXpInCurrentLvl
			console.log("xp missing for level up: "+sXpMissingForLvlUp)
			
			sXpPercentageCurrentLevel = ((sXpInCurrentLvl / sXpRequiredForCurrentLevel)*100).toFixed(2)
			console.log("% completion current level: "+sXpPercentageCurrentLevel)
			
			sXpCurrentTotal = runs[runs.length-1][6]
			console.log("total XP: "+sXpCurrentTotal)
			
			sXpMissingForLvl100 = findTotalRequiredXpForLevel(100) - sXpCurrentTotal
			console.log("XP missing before lvl 100: "+sXpMissingForLvl100)
			
			var xpHourAveragesSum = 0
			$(runs).each(function(){
				xpHourAveragesSum += this[8]
				sTotalDurationOfRuns += parseInt(this[0])
				sTotalXpGainOfRuns += parseInt(this[7])
			})
			
			console.log("total duration of runs: "+sTotalDurationOfRuns)
			
			sXpHourAverage = xpHourAveragesSum / sRuns
			console.log("average xp/hour: "+sXpHourAverage)
			
			sHoursToFarmBeforeLevel100 = (sXpMissingForLvl100 / sXpHourAverage).toFixed(2)
			console.log("hours to farm before level 100: "+sHoursToFarmBeforeLevel100)
			
			sLvl100Completion = ((sXpCurrentTotal / findTotalRequiredXpForLevel(100))*100).toFixed(2)
			console.log("% completion of lvl 100: "+sLvl100Completion)
		}
		
		content.append("<tr><td>Runs enregistres</td><td>"+formatNumberWithThousandsSeparator(sRuns)+"</td></tr>")
		content.append("<tr><td>Duree totale des runs</td><td>"+sTotalDurationOfRuns+" minutes</td></tr>")
		content.append("<tr><td>XP gagnee avec les runs</td><td>"+formatNumberWithThousandsSeparator(sTotalXpGainOfRuns)+"</td></tr>")
		content.append("<tr><td>Paragon Level</td><td>"+spLvl+" <progress max='100' value='"+spLvl+"'></progress></td></tr>")
		content.append("<tr><td>Magic Find Paragon Level</td><td>"+sMfFromLvl+"%</td></tr>")
		content.append("<tr><td>XP niveau actuel</td><td>"+formatNumberWithThousandsSeparator(sXpInCurrentLvl)+"</td></tr>")
		content.append("<tr><td>XP requise pour le niveau actuel</td><td>"+formatNumberWithThousandsSeparator(sXpRequiredForCurrentLevel)+"</td></tr>")
		content.append("<tr><td>XP manquante pour level up</td><td>"+formatNumberWithThousandsSeparator(sXpMissingForLvlUp)+"</td></tr>")
		content.append("<tr><td>% completion du niveau actuel</td><td>"+sXpPercentageCurrentLevel+"% <progress max='100' value='"+sXpPercentageCurrentLevel+"'></progress></td></tr>")
		content.append("<tr><td>XP totale acquise</td><td>"+formatNumberWithThousandsSeparator(sXpCurrentTotal)+"</td></tr>")
		content.append("<tr><td>XP manquante pour level 100</td><td>"+formatNumberWithThousandsSeparator(sXpMissingForLvl100)+"</td></tr>")
		content.append("<tr><td>XP moyenne / heure</td><td>"+formatNumberWithThousandsSeparator(sXpHourAverage)+"</td></tr>")
		content.append("<tr><td>Heures restant pour atteindre level 100</td><td>"+sHoursToFarmBeforeLevel100+" heures</td></tr>")
		content.append("<tr><td>% completion du niveau 100</td><td>"+sLvl100Completion+"% <progress max='100' value='"+sLvl100Completion+"'></progress></td></tr>")
		
		$("div#stats").slideUp()
		$("div#stats").empty()
		$("div#stats").html(content)
		$("div#stats").slideDown()
	}
	
	function resetFormAndFocus(){
		console.log("Resetting the form & resetting the focus")
		$("form#formAddRun")[0].reset()
		$('#pLvlDebut').focus()
	}
	
	function updateGUI(){
		console.log("Updating the GUI")
		
		var runs = loadRuns()
		
		updateRuns(runs)
		updateStats(runs)
			
		// s'il y a des runs enregistrés, on prend le dernier pLvl connu comme valeur par défaut pour le pLvl début et fin
		if(runs.length > 0){
			var lastRun = runs[runs.length-1]
			var lastpLvl = lastRun[2]
			$('#pLvlDebut').val(lastpLvl)
			$('#pLvlFin').val(lastpLvl)
			
			// xp debut pour le prochain run = xp fin du dernier run enregistré
			$('#xpDebut').val(lastRun[4]/1000)
			$('#xpFin').focus()
		}
		
		noty({
			text: 'Interface mise &agrave; jour!',
			type: 'information'
		});
	}
	
	function parseTime(s) {
		var c = s.split(':');
		return parseInt(c[0]) * 60 + parseInt(c[1]);
	}
	
	function findTimeDiff(a,b) {
		var aMinutes = parseTime(a)
		var bMinutes = parseTime(b)
		
		var diff = bMinutes - aMinutes
		if(diff < 0){ // on suppose que c'est le lendemain matin
			diff+= 1440
		}
		
		return diff
	}
	
	// Padding function
	function pad(number, length) {
		var str = '' + number;
		while (str.length < length) {str = '0' + str;}
		return str;
	}
	
	function copyAndReset() {
		var compteur = $('#stopWatch').text()
		console.log("duree: "+compteur)
		var split = compteur.split(":")
		
		var duree = parseInt(split[0])
		
		// on était pas si loin de la minute en plus :)
		if(split[1] >= 45){
			duree+=1
		}
		
		// on copie la duree
		$('#duree').val(duree)
		
		// on reset le compteur
		startStopCurrent = 0;
		startStopTimer.stop().once();
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
			console.log("LocalStorage is not supported!")
			noty({
				text: 'Navigateur de merde d&eacute;tect&eacute;!<br /><br />Cette application ne fonctionnera pas bien sans Mozilla Firefox ou Google Chrome (version r&eacute;cente)!',
				type: 'error'
			});
		}else{
			console.log("LocalStorage is supported")
		}
		
		// i18n: load language & translate if necessary
		var language = loadLanguage()
		switchLanguageTo(language)
		
		// on aime que ça bouge ;-)
		$("#newEntrySection").draggable()
		$("#statsSection").draggable()
		$("#runsSection").draggable()
		
		//tic tac
		startStopTimer = $.timer(function() {
			var min = parseInt(startStopCurrent/6000);
			var sec = parseInt(startStopCurrent/100)-(min*60);
			var micro = pad(startStopCurrent-(sec*100)-(min*6000),2);
			var output = "000"; if(min > 0) {output = pad(min,3);} // 3 positions pour les minutes pour supporter de longues parties
			$('#stopWatch').html(output+":"+pad(sec,2)+":"+micro);
			startStopCurrent+=7;
		}, 70, false)
		
		// on lance le chargement (nécessaire pour l'initialisation la première fois ou après un reset)
		loadRuns()
		
		// update the GUI
		updateGUI()
		
		noty({
			text: 'Initialisation de Diablo 3 XP Farming r&eacute;ussie!',
			type: 'success'
		});
		
		// bindings	
		$("#btnResetAll").click(function(event){
			console.log("Clearing LocalStorage")
			localStorage.clear()
			
			resetFormAndFocus()
			
			noty({
				text: 'Diablo 3 XP Farming r&eacute;initialis&eacute;!',
				type: 'success'
			});
			updateGUI()
		})
	
		$("form#formAddRun").submit(function(event){
			console.log("Retrieving the values from the form")
			
			var pLvlDebut = $('#pLvlDebut').val()
			console.log("pLvlDebut: "+pLvlDebut)
			
			var pLvlFin = $('#pLvlFin').val()
			console.log("pLvlFin: "+pLvlFin)
			
			var xpDebut = $('#xpDebut').val() * 1000
			console.log("xpDebut: "+xpDebut)
			
			var xpFin = $('#xpFin').val() * 1000
			console.log("xpFin: "+xpFin)
			/*
			var heureDebut = $('#heureDebut').val()
			console.log("heure debut: "+heureDebut)
			
			var heureFin = $('#heureFin').val()
			console.log("heure fin: "+heureFin)
			
			var duree = findTimeDiff(heureDebut,heureFin) //$('#duree').val()
			*/
			var duree = $('#duree').val()
			console.log("duree: "+duree)
			
			// calcul d'autres infos
			var xpTotaleLvlDebut = 0
			if(pLvlDebut > 0){
				xpTotaleLvlDebut = findTotalRequiredXpForLevel(pLvlDebut)
			}
			
			console.log("xp totale (du level) debut: "+xpTotaleLvlDebut)
			var xpTotaleLvlFin = findTotalRequiredXpForLevel(pLvlFin)
			console.log("xp totale (du level) fin: "+xpTotaleLvlFin)
			
			var totalXpDebut = xpTotaleLvlDebut + xpDebut
			console.log("XP totale debut: "+totalXpDebut)
			var totalXpFin = xpTotaleLvlFin + xpFin
			console.log("XP totale fin: "+totalXpFin)
			var gainXp = totalXpFin - totalXpDebut
			console.log("XP gain: "+gainXp)
			
			var xpHeure = Math.round((gainXp / duree) * 60)
			console.log("XP/heure: "+xpHeure)
			
			console.log("Adding run to the array")
			var runs = loadRuns()
			runs[runs.length] = [duree, pLvlDebut,pLvlFin,xpDebut,xpFin, totalXpDebut, totalXpFin, gainXp, xpHeure]
			console.log("Total runs now: "+runs.length)
			
			console.log("Saving run to LocalStorage")
			saveRuns(runs)
			noty({
				text: 'Sauvegarde des runs r&eacute;ussie!',
				type: 'success'
			});
			
			resetFormAndFocus()
			
			updateGUI()
			
			event.preventDefault();
		})
	})




