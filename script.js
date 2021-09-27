var $txtCounter = document.getElementById('indicator');
var $btnStart   = document.getElementById('btnStart');
var $btnStop    = document.getElementById('btnStop');
var $btnReset   = document.getElementById('btnReset');
var stopTimer   = false;
var s = 00;
var m = 00;
var h = 00;

$btnStart.addEventListener('click', function()
{
    startCounter();
}, false);

$btnStop.addEventListener('click', function()
{
    stopCounter();
}, false);

$btnReset.addEventListener('click', function()
{
    resetCounter();
}, false);

function timer()
{
    if(stopTimer === true )
        return;
    if (s == 60)
    {
        m++;
        s = 0;
    }
	if (m == 60)
    {
        h++;
        s = 0;
        m = 0;
    }
    let hh = "";
    let mm = "";
    let ss = "";

	if (h < 10)
        hh = "0" + h;
    else
        hh = h;
	
    if (m < 10)
        mm = "0" + m;
    else
        mm = m;	
        if (s < 10)
        ss = "0" + s;
    else
        ss = s;
	s++;
    $txtCounter.innerHTML = `${hh}:${mm}:${ss}`
    setTimeout( timer, 1000 );
}

function startCounter()
{
    stopTimer = false;
    timer();
}

function resetCounter(value)
{
    stopTimer = true;
    $txtCounter.innerHTML = "00:00:00";
    s = 0;
    m = 0;
    h = 0;
}

function stopCounter()
{
    if (stopTimer)
        alert("Cronômetro já parado");
    stopTimer = true;
}