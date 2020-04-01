'use strict';
const KEY = 'usrPrefs'

var gHoroscops = [
    {
        sign: 'Aries',
        desc: "It could be difficult for you to think straight today, Aries. Your brain is probably working in short, erratic bursts that keep you guessing about which way to proceed. Avoid confusion during the day by periodically centering and separating yourself and your feelings from the drama around you. Don't pretend you understand something if you don't. If a situation doesn't make sense, go ahead and question it.",
        img: 'https://www.horoscope.com/images-US/signs/aries.png'
    },
    {
        sign: 'Taurus',
        desc: `Freedom is a key aspect of life today, Taurus. You might find that your brain wants to break free and pursue more independent ways of thinking. Don't worry if such ways of thinking lead you into unknown territory. This is a sign that this is probably where you need to be. Your witty banter could take a sudden twist that surprises both you and the people you're talking to.
               Take this relationship questionnaire and.`,
        img: 'https://www.horoscope.com/images-US/signs/taurus.png'
    },
    {
        sign: 'Virgo',
        desc: `It's generally quite clear that you aren't afraid to tell people what you think, Virgo. Maybe it's time to be more expressive about how you feel. It could be that your mental process is a bit off today, jolted by an unexpected situation or person. Make sure you incorporate some of your instincts and emotions into your reaction to the situation. Don't rely on your brain alone to have all the answers.`,
        img: 'https://www.horoscope.com/images-US/signs/virgo.png'
    }
];
function saveInfo(bgColor, txtColor, birtDate, age, email) {
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
