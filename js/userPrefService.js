'use strict' ;
const KEY = 'usrPrefs'

var gHoroscops = [
    {
sign: 'Aries',
desc: "It could be difficult for you to think straight today, Aries. Your brain is probably working in short, erratic bursts that keep you guessing about which way to proceed. Avoid confusion during the day by periodically centering and separating yourself and your feelings from the drama around you. Don't pretend you understand something if you don't. If a situation doesn't make sense, go ahead and question it.",
img: 'https://www.horoscope.com/images-US/signs/aries.png'
},
    {
sign: 'Aries2',
desc: "It could be difficult for you to think straight today, Aries. Your brain is probably working in short, erratic bursts that keep you guessing about which way to proceed. Avoid confusion during the day by periodically centering and separating yourself and your feelings from the drama around you. Don't pretend you understand something if you don't. If a situation doesn't make sense, go ahead and question it.",
img: 'https://www.horoscope.com/images-US/signs/aries.png'
},
    {
sign: 'Aries3',
desc: "It could be difficult for you to think straight today, Aries. Your brain is probably working in short, erratic bursts that keep you guessing about which way to proceed. Avoid confusion during the day by periodically centering and separating yourself and your feelings from the drama around you. Don't pretend you understand something if you don't. If a situation doesn't make sense, go ahead and question it.",
img: 'https://www.horoscope.com/images-US/signs/aries.png'
}
];
function saveInfo(bgColor,txtColor,birtDate,age,email){
    var usrPref = {
        bgColor: bgColor,
        txtColor: txtColor,
        birtDate: birtDate,
        age: age,
        email: email
    }
    saveToStorage(KEY, usrPref);
    setUsrPref();
}
