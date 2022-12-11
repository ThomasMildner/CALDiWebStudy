const content = document.querySelector('#contentText');
const langButtons = document.querySelectorAll('.button');
const innerLetter = document.querySelector('#innerLetter');

const albanianText = document.querySelector('#albanian');
const arabicText = document.querySelector('#arabic');
const bulgarianText = document.querySelector('#bulgarian');
const czechText = document.querySelector('#czech');
const englishText = document.querySelector('#english');
const frenchText = document.querySelector('#french');
const germanText = document.querySelector('#german');
const italianText = document.querySelector('#italian');
const kurdishText = document.querySelector('#kurdish');
const persianText = document.querySelector('#persian');
const polishText = document.querySelector('#polish');
const romanianText = document.querySelector('#romanian');
const russianText = document.querySelector('#russian');
const serbianText = document.querySelector('#serbian');
const spanishText = document.querySelector('#spanish');
const turkishText = document.querySelector('#turkish');
const ukrainianText = document.querySelector('#ukrainian');

const closeButton = document.querySelector('.innerCloseButton');

const Language =  {
    ALBANIAN: 'Albanian',
    ARABIC: 'Arabic',
    BULGARIAN: 'Bulgarian',
    CZECH: 'Czech',
    ENGLISH: 'English',
    FRENCH: 'French',
    GERMAN: 'German',
    ITALIAN: 'Italian',
    KURDISH: 'Kurdish',
    PERSIAN: 'Persian',
    POLISH: 'Polish',
    ROMANIAN: 'Romanian',
    RUSSIAN: 'Russian',
    SERBIAN: 'Serbian',
    SPANISH: 'Spanish',
    TURKISH: 'Turkish',
    UKRAINIAN: 'Ukrainian',
}

const selectAndDisplayLanguage = (language) => {
    switch (language) {
        case Language.ALBANIAN:
            console.log('Selected language: Albanian')
            innerLetter.innerHTML = letterAlbanian
            break
        case Language.ARABIC:
            innerLetter.innerHTML= letterArabic
            console.log('Selected language: Arabic')
            break
        case Language.BULGARIAN:
            innerLetter.innerHTML = letterBulgarian
            console.log('Selected language: Bulgarian')
            break
        case Language.CZECH:
            console.log('Selected language: Czech')
            innerLetter.innerHTML = letterCzech
            break
        case Language.ENGLISH:
            console.log('Selected language: English')
            innerLetter.innerHTML = letterEnglish
            break
        case Language.FRENCH:
            innerLetter.innerHTML= letterFrench
            console.log('Selected language: French')
            break
        case Language.GERMAN:
            innerLetter.innerHTML = letterGerman
            console.log('Selected language: German')
            break;
        case Language.ITALIAN:
            innerLetter.innerHTML= letterItalian
            console.log('Selected language: Italian')
            break
        case Language.KURDISH:
            innerLetter.innerHTML = letterKurdishSorani
            console.log('Selected language: Persian')
            break;
        case Language.PERSIAN:
            innerLetter.innerHTML = letterPersian
            console.log('Selected language: Persian')
            break
        case Language.POLISH:
            innerLetter.innerHTML=letterPolish
            console.log('Selected language: Polish')
            break
        case Language.ROMANIAN:
            innerLetter.innerHTML= letterRomanian
            console.log('Selected language: Romanian')
            break
        case Language.RUSSIAN:
            innerLetter.innerHTML=letterRussian
            console.log('Selected language: Russian')
            break
        case Language.SERBIAN:
            innerLetter.innerHTML = letterSerbian
            console.log('Selected language: Serbian')
            break;
        case Language.SPANISH:
            innerLetter.innerHTML=letterSpanish
            console.log('Selected language: Spanish');
            break
        case Language.TURKISH:
            innerLetter.innerHTML=letterTurkish
            console.log('Selected language: TURKISH');
            break
        case Language.UKRAINIAN:
            innerLetter.innerHTML=letterUkrainian
            console.log('Selected language: Ukrainian');
            break
    }
}

const toggleTextVisibility = () => {
    if (content.style.visibility === 'visible'){
        content.style.visibility = 'hidden';
    }
    else {
        content.style.visibility = 'visible'
        console.log('toggled visible');
    }
}

Array.from(langButtons).forEach(function(button) {
    button.addEventListener('click', toggleTextVisibility);
});

closeButton.addEventListener('click', toggleTextVisibility);
albanianText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.ALBANIAN));
arabicText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.ARABIC));
bulgarianText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.BULGARIAN));
czechText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.CZECH));
englishText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.ENGLISH));
frenchText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.FRENCH));
germanText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.GERMAN));
italianText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.ITALIAN));
kurdishText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.KURDISH));
persianText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.PERSIAN));
polishText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.POLISH));
romanianText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.ROMANIAN));
russianText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.RUSSIAN));
serbianText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.SERBIAN));
spanishText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.SPANISH));
turkishText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.TURKISH));
ukrainianText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.UKRAINIAN));



