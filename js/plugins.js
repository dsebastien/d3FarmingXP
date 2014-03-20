window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

function formatNumberWithThousandsSeparator(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function findTimeDiff(a,b) {
	var aMinutes = parseTime(a);
	var bMinutes = parseTime(b);
	
	var diff = bMinutes - aMinutes;
	if(diff < 0){ // on suppose que c'est le lendemain matin
		diff+= 1440;
	}
	
	return diff;
}
		
function parseTime(s) {
	var c = s.split(':');
	return parseInt(c[0]) * 60 + parseInt(c[1]);
}

// Padding function
function pad(number, length) {
	var str = '' + number;
	while (str.length < length) {
		str = '0' + str;
	}
	return str;
}

// Timer
// inspired by http://stackoverflow.com/questions/20318822/how-to-create-a-stopwatch-using-javascript
var Stopwatch = function(renderFunction, options) {

  var offset,
	  clock,
	  interval;
  
  // default options
  options = options || {};
  options.delay = options.delay || 1;
 
  // initialize
  reset();
  
  function start() {
	if (!interval) {
	  offset   = Date.now();
	  interval = setInterval(update, options.delay);
	}
  }
  
  function stop() {
	if (interval) {
	  clearInterval(interval);
	  interval = null;
	}
  }
  
  function toggle() {
	if(interval){
		stop();
	}else{
		start();
	}
  }
  
  function reset() {
	clock = 0;
	render(0);
	stop();
  }
  
  function update() {
	clock += delta();
	render();
  }
  
  function render() {
	renderFunction(clock);
  }
  
  function delta() {
	var now = Date.now(),
		d   = now - offset;
	
	offset = now;
	return d;
  }
  
  function getClock(){
	return clock;
  }
  
  // public API
  this.start  = start;
  this.stop   = stop;
  this.reset  = reset;
  this.toggle = toggle;
  this.getClock = getClock;
};

function msToTime(duration) {
	var milliseconds = parseInt((duration%1000)/100)
		, seconds = parseInt((duration/1000)%60)
		, minutes = parseInt((duration/(1000*60))%60)
		, hours = parseInt((duration/(1000*60*60))%24);

	hours = (hours < 10) ? "0" + hours : hours;
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	seconds = (seconds < 10) ? "0" + seconds : seconds;

	return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

function roundUpToX(number,roundUpTo){
  return Math.ceil(number/roundUpTo)*roundUpTo;
}