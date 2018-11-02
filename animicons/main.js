'use strict';

// Break chain animation
function breakChain() {
    let chain = document.getElementById('chain');
    chain.innerHTML = '&#xf0c1;';

    setTimeout(() => {
        chain.innerHTML = '&#xf127;';
    }, 1000);
};

// Call animation
breakChain();
// Animate every 2 seconds
setInterval(breakChain, 2000);

// Battery charge animation
function chargeBattery() {
    let battery = document.getElementById('battery');
    battery.innerHTML = '&#xf244;';

    setTimeout(() => {
        battery.innerHTML = '&#xf243;';
    }, 1000);

    setTimeout(() => {
        battery.innerHTML = '&#xf242;';
    }, 2000);

    setTimeout(() => {
        battery.innerHTML = '&#xf241;';
    }, 3000);

    setTimeout(() => {
        battery.innerHTML = '&#xf240;';
    }, 4000);
};

// Call animation
chargeBattery();
// Animate every five seconds
setInterval(chargeBattery, 5000);

// Hourglass tip animation
function hourglassTip() {
    let hourglass = document.getElementById('hourglass');
    hourglass.innerHTML = '&#xf251;';
    setTimeout(() => {
        hourglass.innerHTML = '&#xf252;';
    }, 1000);
    setTimeout(() => {
        hourglass.innerHTML = '&#xf253;';
    }, 2000);
};

// Call animation
hourglassTip();
// Animate every three seconds
setInterval(hourglassTip, 3000);