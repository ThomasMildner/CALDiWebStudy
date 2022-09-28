const content = document.querySelector('#contentText');
const langButtons = document.querySelectorAll('.button');
const innerLetter = document.querySelector('#innerLetter');

const englishText = document.querySelector('#english');
const arabicText = document.querySelector('#arabic');
const bulgarianText = document.querySelector('#bulgarian');
const dariText = document.querySelector('#dari');
const frenchText = document.querySelector('#french');
const italianText = document.querySelector('#italian');
const polishText = document.querySelector('#polish');
const romanianText = document.querySelector('#romanian');
const russianText = document.querySelector('#russian');
const spanishText = document.querySelector('#spanish');
const turkishText = document.querySelector('#turkish');
const ukrainianText = document.querySelector('#ukrainian');

const closeButton = document.querySelector('.innerCloseButton');

const Language =  {
    ENGLISH: 'English',
    ARABIC: 'Arabic',
    BULGARIAN: 'Bulgarian',
    DARI: 'Dari',
    FRENCH: 'French',
    ITALIAN: 'Italian',
    POLISH: 'Polish',
    ROMANIAN: 'Romanian',
    RUSSIAN: 'Russian',
    SPANISH: 'Spanish',
    TURKISH: 'Turkish',
    UKRAINIAN: 'Ukrainian',
}

const selectAndDisplayLanguage = (language) => {
    switch (language) {
        case Language.ENGLISH:
            console.log('Selected language: English');
            innerLetter.innerHTML= `
                <h2>English</h2>
                <h1>Europaweite Studie der Weltgesundheitsorganisation (WHO): Wie entwickeln sich Kinder heute?</h1>
                <hr>
                <p>Liebe Eltern,<br>
                in Bremen werden gerade viele Kinder untersucht. Es handelt sich dabei um eine europaweite Studie. Die Ergebnisse erhält die Weltgesundheitsorganisation (WHO). Sie möchte erfahren, wie Kinder sich heute entwickeln. Am Ende sollen Programme erstellt werden, die die Gesundheit der Kinder verbessern. Die Studie ist für Kinder der zweiten und dritten Klasse.
                <br>
                Das wird gemessen: Gewicht, Körpergröße, Hüftumfang und Taillenumfang.
                <br>
                Ihre Kinder werden lediglich vermessen. So erfahren wir, wie sich Kinder im Durchschnitt entwickeln. Die Untersuchung dauert ungefähr 5 Minuten. Jungen und Mädchen werden getrennt untersucht. Die Kinder sollten leichte Sportkleidung tragen. So können die Fachkräfte besser messen. Die Expertinnen und Experten sind besonders geschult im Umgang mit Kindern.
                <br>
                Im Fragebogen sind Fragen dazu, wie Sie zuhause leben und wo Sie geboren sind. Die Daten speichern wir nicht zusammen mit dem Namen des Kindes. Niemand kann erfahren, wie groß oder schwer Ihr Kind ist. Alle Gesetze zum Datenschutz werden beachtet.
                <br>
                Die Umfrage wird durchgeführt vom „Leibniz-Institut für Präventionsforschung und Epidemiologie“. In Bremen wurde sie von der Senatorin für „Gesundheit, Frauen und Verbraucherschutz“ und der Senatorin für „Wissenschaft und Häfen“ in Auftrag gegeben.
                <br>
                Unterstützen Sie uns. Helfen Sie, die Gesundheit von Kindern zu verbessern. Das können Sie tun, indem Ihr Kind an unserer Studie teilnimmt. Die Teilnahme ist freiwillig. Wenn Sie nicht teilnehmen möchten, hat das keine Nachteile für Sie oder Ihr Kind.
                <br>
                Füllen Sie bitte diese beiden Dokumente aus:
                <br><br>
                •\tEinverständniserklärung
                <br>
                •\tFragebogen.
                <br><br>
                Ihre Schule benötigt die ausgefüllten Bögen innerhalb einer Woche zurück.
                <br>
                Wenn Sie Fragen haben, rufen Sie uns gern unter <b>0421 218 56830</b> an <br>oder schreiben Sie uns eine E-Mail an <a href="mailto:proxi-at-mail.co"><b>proxi-at-mail.co</b></a>
                <br><br>
                Mit freundlichen Grüßen
                <br>
                 
                <br>
                Prof. Dr. Wolfgang Ahrens
                <br>
                </p>
                `
            break;
        case Language.ARABIC:
            innerLetter.innerHTML= `
                <h2>عربي</h2>
                <h1>Europaweite Studie der Weltgesundheitsorganisation (WHO): Wie entwickeln sich Kinder heute?</h1>
                <hr>
                <p>Liebe Eltern,<br>
                in Bremen werden gerade viele Kinder untersucht. Es handelt sich dabei um eine europaweite Studie. Die Ergebnisse erhält die Weltgesundheitsorganisation (WHO). Sie möchte erfahren, wie Kinder sich heute entwickeln. Am Ende sollen Programme erstellt werden, die die Gesundheit der Kinder verbessern. Die Studie ist für Kinder der zweiten und dritten Klasse.
                <br>
                Das wird gemessen: Gewicht, Körpergröße, Hüftumfang und Taillenumfang.
                <br>
                Ihre Kinder werden lediglich vermessen. So erfahren wir, wie sich Kinder im Durchschnitt entwickeln. Die Untersuchung dauert ungefähr 5 Minuten. Jungen und Mädchen werden getrennt untersucht. Die Kinder sollten leichte Sportkleidung tragen. So können die Fachkräfte besser messen. Die Expertinnen und Experten sind besonders geschult im Umgang mit Kindern.
                <br>
                Im Fragebogen sind Fragen dazu, wie Sie zuhause leben und wo Sie geboren sind. Die Daten speichern wir nicht zusammen mit dem Namen des Kindes. Niemand kann erfahren, wie groß oder schwer Ihr Kind ist. Alle Gesetze zum Datenschutz werden beachtet.
                <br>
                Die Umfrage wird durchgeführt vom „Leibniz-Institut für Präventionsforschung und Epidemiologie“. In Bremen wurde sie von der Senatorin für „Gesundheit, Frauen und Verbraucherschutz“ und der Senatorin für „Wissenschaft und Häfen“ in Auftrag gegeben.
                <br>
                Unterstützen Sie uns. Helfen Sie, die Gesundheit von Kindern zu verbessern. Das können Sie tun, indem Ihr Kind an unserer Studie teilnimmt. Die Teilnahme ist freiwillig. Wenn Sie nicht teilnehmen möchten, hat das keine Nachteile für Sie oder Ihr Kind.
                <br>
                Füllen Sie bitte diese beiden Dokumente aus:
                <br><br>
                •\tEinverständniserklärung
                <br>
                •\tFragebogen.
                <br><br>
                Ihre Schule benötigt die ausgefüllten Bögen innerhalb einer Woche zurück.
                <br>
                Wenn Sie Fragen haben, rufen Sie uns gern unter <b>0421 218 56830</b> an <br>oder schreiben Sie uns eine E-Mail an <a href="mailto:proxi-at-mail.co"><b>proxi-at-mail.co</b></a>
                <br><br>
                Mit freundlichen Grüßen
                <br>
                 
                <br>
                Prof. Dr. Wolfgang Ahrens
                <br>
                </p>
                `
            console.log('Selected language: Arabic');
            break;
        case Language.BULGARIAN:
            innerLetter.innerHTML= `
                <h2>български</h2>
                <h1>Europaweite Studie der Weltgesundheitsorganisation (WHO): Wie entwickeln sich Kinder heute?</h1>
                <hr>
                <p>Liebe Eltern,<br>
                in Bremen werden gerade viele Kinder untersucht. Es handelt sich dabei um eine europaweite Studie. Die Ergebnisse erhält die Weltgesundheitsorganisation (WHO). Sie möchte erfahren, wie Kinder sich heute entwickeln. Am Ende sollen Programme erstellt werden, die die Gesundheit der Kinder verbessern. Die Studie ist für Kinder der zweiten und dritten Klasse.
                <br>
                Das wird gemessen: Gewicht, Körpergröße, Hüftumfang und Taillenumfang.
                <br>
                Ihre Kinder werden lediglich vermessen. So erfahren wir, wie sich Kinder im Durchschnitt entwickeln. Die Untersuchung dauert ungefähr 5 Minuten. Jungen und Mädchen werden getrennt untersucht. Die Kinder sollten leichte Sportkleidung tragen. So können die Fachkräfte besser messen. Die Expertinnen und Experten sind besonders geschult im Umgang mit Kindern.
                <br>
                Im Fragebogen sind Fragen dazu, wie Sie zuhause leben und wo Sie geboren sind. Die Daten speichern wir nicht zusammen mit dem Namen des Kindes. Niemand kann erfahren, wie groß oder schwer Ihr Kind ist. Alle Gesetze zum Datenschutz werden beachtet.
                <br>
                Die Umfrage wird durchgeführt vom „Leibniz-Institut für Präventionsforschung und Epidemiologie“. In Bremen wurde sie von der Senatorin für „Gesundheit, Frauen und Verbraucherschutz“ und der Senatorin für „Wissenschaft und Häfen“ in Auftrag gegeben.
                <br>
                Unterstützen Sie uns. Helfen Sie, die Gesundheit von Kindern zu verbessern. Das können Sie tun, indem Ihr Kind an unserer Studie teilnimmt. Die Teilnahme ist freiwillig. Wenn Sie nicht teilnehmen möchten, hat das keine Nachteile für Sie oder Ihr Kind.
                <br>
                Füllen Sie bitte diese beiden Dokumente aus:
                <br><br>
                •\tEinverständniserklärung
                <br>
                •\tFragebogen.
                <br><br>
                Ihre Schule benötigt die ausgefüllten Bögen innerhalb einer Woche zurück.
                <br>
                Wenn Sie Fragen haben, rufen Sie uns gern unter <b>0421 218 56830</b> an <br>oder schreiben Sie uns eine E-Mail an <a href="mailto:proxi-at-mail.co"><b>proxi-at-mail.co</b></a>
                <br><br>
                Mit freundlichen Grüßen
                <br>
                 
                <br>
                Prof. Dr. Wolfgang Ahrens
                <br>
                </p>
                `
            console.log('Selected language: Bulgarian');
            break;
        case Language.DARI:
            innerLetter.innerHTML= `
                <h2>فارسی دری</h2>
                <h1>Europaweite Studie der Weltgesundheitsorganisation (WHO): Wie entwickeln sich Kinder heute?</h1>
                <hr>
                <p>Liebe Eltern,<br>
                in Bremen werden gerade viele Kinder untersucht. Es handelt sich dabei um eine europaweite Studie. Die Ergebnisse erhält die Weltgesundheitsorganisation (WHO). Sie möchte erfahren, wie Kinder sich heute entwickeln. Am Ende sollen Programme erstellt werden, die die Gesundheit der Kinder verbessern. Die Studie ist für Kinder der zweiten und dritten Klasse.
                <br>
                Das wird gemessen: Gewicht, Körpergröße, Hüftumfang und Taillenumfang.
                <br>
                Ihre Kinder werden lediglich vermessen. So erfahren wir, wie sich Kinder im Durchschnitt entwickeln. Die Untersuchung dauert ungefähr 5 Minuten. Jungen und Mädchen werden getrennt untersucht. Die Kinder sollten leichte Sportkleidung tragen. So können die Fachkräfte besser messen. Die Expertinnen und Experten sind besonders geschult im Umgang mit Kindern.
                <br>
                Im Fragebogen sind Fragen dazu, wie Sie zuhause leben und wo Sie geboren sind. Die Daten speichern wir nicht zusammen mit dem Namen des Kindes. Niemand kann erfahren, wie groß oder schwer Ihr Kind ist. Alle Gesetze zum Datenschutz werden beachtet.
                <br>
                Die Umfrage wird durchgeführt vom „Leibniz-Institut für Präventionsforschung und Epidemiologie“. In Bremen wurde sie von der Senatorin für „Gesundheit, Frauen und Verbraucherschutz“ und der Senatorin für „Wissenschaft und Häfen“ in Auftrag gegeben.
                <br>
                Unterstützen Sie uns. Helfen Sie, die Gesundheit von Kindern zu verbessern. Das können Sie tun, indem Ihr Kind an unserer Studie teilnimmt. Die Teilnahme ist freiwillig. Wenn Sie nicht teilnehmen möchten, hat das keine Nachteile für Sie oder Ihr Kind.
                <br>
                Füllen Sie bitte diese beiden Dokumente aus:
                <br><br>
                •\tEinverständniserklärung
                <br>
                •\tFragebogen.
                <br><br>
                Ihre Schule benötigt die ausgefüllten Bögen innerhalb einer Woche zurück.
                <br>
                Wenn Sie Fragen haben, rufen Sie uns gern unter <b>0421 218 56830</b> an <br>oder schreiben Sie uns eine E-Mail an <a href="mailto:proxi-at-mail.co"><b>proxi-at-mail.co</b></a>
                <br><br>
                Mit freundlichen Grüßen
                <br>
                 
                <br>
                Prof. Dr. Wolfgang Ahrens
                <br>
                </p>
                `
            console.log('Selected language: Dari');
            break;
        case Language.FRENCH:
            innerLetter.innerHTML= `
                <h2>Français</h2>
                <h1>Europaweite Studie der Weltgesundheitsorganisation (WHO): Wie entwickeln sich Kinder heute?</h1>
                <hr>
                <p>Liebe Eltern,<br>
                in Bremen werden gerade viele Kinder untersucht. Es handelt sich dabei um eine europaweite Studie. Die Ergebnisse erhält die Weltgesundheitsorganisation (WHO). Sie möchte erfahren, wie Kinder sich heute entwickeln. Am Ende sollen Programme erstellt werden, die die Gesundheit der Kinder verbessern. Die Studie ist für Kinder der zweiten und dritten Klasse.
                <br>
                Das wird gemessen: Gewicht, Körpergröße, Hüftumfang und Taillenumfang.
                <br>
                Ihre Kinder werden lediglich vermessen. So erfahren wir, wie sich Kinder im Durchschnitt entwickeln. Die Untersuchung dauert ungefähr 5 Minuten. Jungen und Mädchen werden getrennt untersucht. Die Kinder sollten leichte Sportkleidung tragen. So können die Fachkräfte besser messen. Die Expertinnen und Experten sind besonders geschult im Umgang mit Kindern.
                <br>
                Im Fragebogen sind Fragen dazu, wie Sie zuhause leben und wo Sie geboren sind. Die Daten speichern wir nicht zusammen mit dem Namen des Kindes. Niemand kann erfahren, wie groß oder schwer Ihr Kind ist. Alle Gesetze zum Datenschutz werden beachtet.
                <br>
                Die Umfrage wird durchgeführt vom „Leibniz-Institut für Präventionsforschung und Epidemiologie“. In Bremen wurde sie von der Senatorin für „Gesundheit, Frauen und Verbraucherschutz“ und der Senatorin für „Wissenschaft und Häfen“ in Auftrag gegeben.
                <br>
                Unterstützen Sie uns. Helfen Sie, die Gesundheit von Kindern zu verbessern. Das können Sie tun, indem Ihr Kind an unserer Studie teilnimmt. Die Teilnahme ist freiwillig. Wenn Sie nicht teilnehmen möchten, hat das keine Nachteile für Sie oder Ihr Kind.
                <br>
                Füllen Sie bitte diese beiden Dokumente aus:
                <br><br>
                •\tEinverständniserklärung
                <br>
                •\tFragebogen.
                <br><br>
                Ihre Schule benötigt die ausgefüllten Bögen innerhalb einer Woche zurück.
                <br>
                Wenn Sie Fragen haben, rufen Sie uns gern unter <b>0421 218 56830</b> an <br>oder schreiben Sie uns eine E-Mail an <a href="mailto:proxi-at-mail.co"><b>proxi-at-mail.co</b></a>
                <br><br>
                Mit freundlichen Grüßen
                <br>
                 
                <br>
                Prof. Dr. Wolfgang Ahrens
                <br>
                </p>
                `
            console.log('Selected language: Dari');
            break;
        case Language.ITALIAN:
            innerLetter.innerHTML= `
                <h2>Italiano</h2>
                <h1>Europaweite Studie der Weltgesundheitsorganisation (WHO): Wie entwickeln sich Kinder heute?</h1>
                <hr>
                <p>Liebe Eltern,<br>
                in Bremen werden gerade viele Kinder untersucht. Es handelt sich dabei um eine europaweite Studie. Die Ergebnisse erhält die Weltgesundheitsorganisation (WHO). Sie möchte erfahren, wie Kinder sich heute entwickeln. Am Ende sollen Programme erstellt werden, die die Gesundheit der Kinder verbessern. Die Studie ist für Kinder der zweiten und dritten Klasse.
                <br>
                Das wird gemessen: Gewicht, Körpergröße, Hüftumfang und Taillenumfang.
                <br>
                Ihre Kinder werden lediglich vermessen. So erfahren wir, wie sich Kinder im Durchschnitt entwickeln. Die Untersuchung dauert ungefähr 5 Minuten. Jungen und Mädchen werden getrennt untersucht. Die Kinder sollten leichte Sportkleidung tragen. So können die Fachkräfte besser messen. Die Expertinnen und Experten sind besonders geschult im Umgang mit Kindern.
                <br>
                Im Fragebogen sind Fragen dazu, wie Sie zuhause leben und wo Sie geboren sind. Die Daten speichern wir nicht zusammen mit dem Namen des Kindes. Niemand kann erfahren, wie groß oder schwer Ihr Kind ist. Alle Gesetze zum Datenschutz werden beachtet.
                <br>
                Die Umfrage wird durchgeführt vom „Leibniz-Institut für Präventionsforschung und Epidemiologie“. In Bremen wurde sie von der Senatorin für „Gesundheit, Frauen und Verbraucherschutz“ und der Senatorin für „Wissenschaft und Häfen“ in Auftrag gegeben.
                <br>
                Unterstützen Sie uns. Helfen Sie, die Gesundheit von Kindern zu verbessern. Das können Sie tun, indem Ihr Kind an unserer Studie teilnimmt. Die Teilnahme ist freiwillig. Wenn Sie nicht teilnehmen möchten, hat das keine Nachteile für Sie oder Ihr Kind.
                <br>
                Füllen Sie bitte diese beiden Dokumente aus:
                <br><br>
                •\tEinverständniserklärung
                <br>
                •\tFragebogen.
                <br><br>
                Ihre Schule benötigt die ausgefüllten Bögen innerhalb einer Woche zurück.
                <br>
                Wenn Sie Fragen haben, rufen Sie uns gern unter <b>0421 218 56830</b> an <br>oder schreiben Sie uns eine E-Mail an <a href="mailto:proxi-at-mail.co"><b>proxi-at-mail.co</b></a>
                <br><br>
                Mit freundlichen Grüßen
                <br>
                 
                <br>
                Prof. Dr. Wolfgang Ahrens
                <br>
                </p>
                `
            console.log('Selected language: Italian');
            break;
        case Language.POLISH:
            innerLetter.innerHTML= `
                <h2>Polski</h2>
                <h1>Europaweite Studie der Weltgesundheitsorganisation (WHO): Wie entwickeln sich Kinder heute?</h1>
                <hr>
                <p>Liebe Eltern,<br>
                in Bremen werden gerade viele Kinder untersucht. Es handelt sich dabei um eine europaweite Studie. Die Ergebnisse erhält die Weltgesundheitsorganisation (WHO). Sie möchte erfahren, wie Kinder sich heute entwickeln. Am Ende sollen Programme erstellt werden, die die Gesundheit der Kinder verbessern. Die Studie ist für Kinder der zweiten und dritten Klasse.
                <br>
                Das wird gemessen: Gewicht, Körpergröße, Hüftumfang und Taillenumfang.
                <br>
                Ihre Kinder werden lediglich vermessen. So erfahren wir, wie sich Kinder im Durchschnitt entwickeln. Die Untersuchung dauert ungefähr 5 Minuten. Jungen und Mädchen werden getrennt untersucht. Die Kinder sollten leichte Sportkleidung tragen. So können die Fachkräfte besser messen. Die Expertinnen und Experten sind besonders geschult im Umgang mit Kindern.
                <br>
                Im Fragebogen sind Fragen dazu, wie Sie zuhause leben und wo Sie geboren sind. Die Daten speichern wir nicht zusammen mit dem Namen des Kindes. Niemand kann erfahren, wie groß oder schwer Ihr Kind ist. Alle Gesetze zum Datenschutz werden beachtet.
                <br>
                Die Umfrage wird durchgeführt vom „Leibniz-Institut für Präventionsforschung und Epidemiologie“. In Bremen wurde sie von der Senatorin für „Gesundheit, Frauen und Verbraucherschutz“ und der Senatorin für „Wissenschaft und Häfen“ in Auftrag gegeben.
                <br>
                Unterstützen Sie uns. Helfen Sie, die Gesundheit von Kindern zu verbessern. Das können Sie tun, indem Ihr Kind an unserer Studie teilnimmt. Die Teilnahme ist freiwillig. Wenn Sie nicht teilnehmen möchten, hat das keine Nachteile für Sie oder Ihr Kind.
                <br>
                Füllen Sie bitte diese beiden Dokumente aus:
                <br><br>
                •\tEinverständniserklärung
                <br>
                •\tFragebogen.
                <br><br>
                Ihre Schule benötigt die ausgefüllten Bögen innerhalb einer Woche zurück.
                <br>
                Wenn Sie Fragen haben, rufen Sie uns gern unter <b>0421 218 56830</b> an <br>oder schreiben Sie uns eine E-Mail an <a href="mailto:proxi-at-mail.co"><b>proxi-at-mail.co</b></a>
                <br><br>
                Mit freundlichen Grüßen
                <br>
                 
                <br>
                Prof. Dr. Wolfgang Ahrens
                <br>
                </p>
                `
            console.log('Selected language: Polish');
            break;
        case Language.ROMANIAN:
            innerLetter.innerHTML= `
                <h2>Română</h2>
                <h1>Europaweite Studie der Weltgesundheitsorganisation (WHO): Wie entwickeln sich Kinder heute?</h1>
                <hr>
                <p>Liebe Eltern,<br>
                in Bremen werden gerade viele Kinder untersucht. Es handelt sich dabei um eine europaweite Studie. Die Ergebnisse erhält die Weltgesundheitsorganisation (WHO). Sie möchte erfahren, wie Kinder sich heute entwickeln. Am Ende sollen Programme erstellt werden, die die Gesundheit der Kinder verbessern. Die Studie ist für Kinder der zweiten und dritten Klasse.
                <br>
                Das wird gemessen: Gewicht, Körpergröße, Hüftumfang und Taillenumfang.
                <br>
                Ihre Kinder werden lediglich vermessen. So erfahren wir, wie sich Kinder im Durchschnitt entwickeln. Die Untersuchung dauert ungefähr 5 Minuten. Jungen und Mädchen werden getrennt untersucht. Die Kinder sollten leichte Sportkleidung tragen. So können die Fachkräfte besser messen. Die Expertinnen und Experten sind besonders geschult im Umgang mit Kindern.
                <br>
                Im Fragebogen sind Fragen dazu, wie Sie zuhause leben und wo Sie geboren sind. Die Daten speichern wir nicht zusammen mit dem Namen des Kindes. Niemand kann erfahren, wie groß oder schwer Ihr Kind ist. Alle Gesetze zum Datenschutz werden beachtet.
                <br>
                Die Umfrage wird durchgeführt vom „Leibniz-Institut für Präventionsforschung und Epidemiologie“. In Bremen wurde sie von der Senatorin für „Gesundheit, Frauen und Verbraucherschutz“ und der Senatorin für „Wissenschaft und Häfen“ in Auftrag gegeben.
                <br>
                Unterstützen Sie uns. Helfen Sie, die Gesundheit von Kindern zu verbessern. Das können Sie tun, indem Ihr Kind an unserer Studie teilnimmt. Die Teilnahme ist freiwillig. Wenn Sie nicht teilnehmen möchten, hat das keine Nachteile für Sie oder Ihr Kind.
                <br>
                Füllen Sie bitte diese beiden Dokumente aus:
                <br><br>
                •\tEinverständniserklärung
                <br>
                •\tFragebogen.
                <br><br>
                Ihre Schule benötigt die ausgefüllten Bögen innerhalb einer Woche zurück.
                <br>
                Wenn Sie Fragen haben, rufen Sie uns gern unter <b>0421 218 56830</b> an <br>oder schreiben Sie uns eine E-Mail an <a href="mailto:proxi-at-mail.co"><b>proxi-at-mail.co</b></a>
                <br><br>
                Mit freundlichen Grüßen
                <br>
                 
                <br>
                Prof. Dr. Wolfgang Ahrens
                <br>
                </p>
                `
            console.log('Selected language: Romanian');
            break;
        case Language.RUSSIAN:
            innerLetter.innerHTML= `
                <h2>Русский</h2>
                <h1>Europaweite Studie der Weltgesundheitsorganisation (WHO): Wie entwickeln sich Kinder heute?</h1>
                <hr>
                <p>Liebe Eltern,<br>
                in Bremen werden gerade viele Kinder untersucht. Es handelt sich dabei um eine europaweite Studie. Die Ergebnisse erhält die Weltgesundheitsorganisation (WHO). Sie möchte erfahren, wie Kinder sich heute entwickeln. Am Ende sollen Programme erstellt werden, die die Gesundheit der Kinder verbessern. Die Studie ist für Kinder der zweiten und dritten Klasse.
                <br>
                Das wird gemessen: Gewicht, Körpergröße, Hüftumfang und Taillenumfang.
                <br>
                Ihre Kinder werden lediglich vermessen. So erfahren wir, wie sich Kinder im Durchschnitt entwickeln. Die Untersuchung dauert ungefähr 5 Minuten. Jungen und Mädchen werden getrennt untersucht. Die Kinder sollten leichte Sportkleidung tragen. So können die Fachkräfte besser messen. Die Expertinnen und Experten sind besonders geschult im Umgang mit Kindern.
                <br>
                Im Fragebogen sind Fragen dazu, wie Sie zuhause leben und wo Sie geboren sind. Die Daten speichern wir nicht zusammen mit dem Namen des Kindes. Niemand kann erfahren, wie groß oder schwer Ihr Kind ist. Alle Gesetze zum Datenschutz werden beachtet.
                <br>
                Die Umfrage wird durchgeführt vom „Leibniz-Institut für Präventionsforschung und Epidemiologie“. In Bremen wurde sie von der Senatorin für „Gesundheit, Frauen und Verbraucherschutz“ und der Senatorin für „Wissenschaft und Häfen“ in Auftrag gegeben.
                <br>
                Unterstützen Sie uns. Helfen Sie, die Gesundheit von Kindern zu verbessern. Das können Sie tun, indem Ihr Kind an unserer Studie teilnimmt. Die Teilnahme ist freiwillig. Wenn Sie nicht teilnehmen möchten, hat das keine Nachteile für Sie oder Ihr Kind.
                <br>
                Füllen Sie bitte diese beiden Dokumente aus:
                <br><br>
                •\tEinverständniserklärung
                <br>
                •\tFragebogen.
                <br><br>
                Ihre Schule benötigt die ausgefüllten Bögen innerhalb einer Woche zurück.
                <br>
                Wenn Sie Fragen haben, rufen Sie uns gern unter <b>0421 218 56830</b> an <br>oder schreiben Sie uns eine E-Mail an <a href="mailto:proxi-at-mail.co"><b>proxi-at-mail.co</b></a>
                <br><br>
                Mit freundlichen Grüßen
                <br>
                 
                <br>
                Prof. Dr. Wolfgang Ahrens
                <br>
                </p>
                `
            console.log('Selected language: Russian');
            break;
        case Language.SPANISH:
            innerLetter.innerHTML= `
                <h2>Español</h2>
                <h1>Europaweite Studie der Weltgesundheitsorganisation (WHO): Wie entwickeln sich Kinder heute?</h1>
                <hr>
                <p>Liebe Eltern,<br>
                in Bremen werden gerade viele Kinder untersucht. Es handelt sich dabei um eine europaweite Studie. Die Ergebnisse erhält die Weltgesundheitsorganisation (WHO). Sie möchte erfahren, wie Kinder sich heute entwickeln. Am Ende sollen Programme erstellt werden, die die Gesundheit der Kinder verbessern. Die Studie ist für Kinder der zweiten und dritten Klasse.
                <br>
                Das wird gemessen: Gewicht, Körpergröße, Hüftumfang und Taillenumfang.
                <br>
                Ihre Kinder werden lediglich vermessen. So erfahren wir, wie sich Kinder im Durchschnitt entwickeln. Die Untersuchung dauert ungefähr 5 Minuten. Jungen und Mädchen werden getrennt untersucht. Die Kinder sollten leichte Sportkleidung tragen. So können die Fachkräfte besser messen. Die Expertinnen und Experten sind besonders geschult im Umgang mit Kindern.
                <br>
                Im Fragebogen sind Fragen dazu, wie Sie zuhause leben und wo Sie geboren sind. Die Daten speichern wir nicht zusammen mit dem Namen des Kindes. Niemand kann erfahren, wie groß oder schwer Ihr Kind ist. Alle Gesetze zum Datenschutz werden beachtet.
                <br>
                Die Umfrage wird durchgeführt vom „Leibniz-Institut für Präventionsforschung und Epidemiologie“. In Bremen wurde sie von der Senatorin für „Gesundheit, Frauen und Verbraucherschutz“ und der Senatorin für „Wissenschaft und Häfen“ in Auftrag gegeben.
                <br>
                Unterstützen Sie uns. Helfen Sie, die Gesundheit von Kindern zu verbessern. Das können Sie tun, indem Ihr Kind an unserer Studie teilnimmt. Die Teilnahme ist freiwillig. Wenn Sie nicht teilnehmen möchten, hat das keine Nachteile für Sie oder Ihr Kind.
                <br>
                Füllen Sie bitte diese beiden Dokumente aus:
                <br><br>
                •\tEinverständniserklärung
                <br>
                •\tFragebogen.
                <br><br>
                Ihre Schule benötigt die ausgefüllten Bögen innerhalb einer Woche zurück.
                <br>
                Wenn Sie Fragen haben, rufen Sie uns gern unter <b>0421 218 56830</b> an <br>oder schreiben Sie uns eine E-Mail an <a href="mailto:proxi-at-mail.co"><b>proxi-at-mail.co</b></a>
                <br><br>
                Mit freundlichen Grüßen
                <br>
                 
                <br>
                Prof. Dr. Wolfgang Ahrens
                <br>
                </p>
                `
            console.log('Selected language: Spanish');
            break;
        case Language.TURKISH:
            innerLetter.innerHTML= `
                <h2>Türk</h2>
                <h1>Europaweite Studie der Weltgesundheitsorganisation (WHO): Wie entwickeln sich Kinder heute?</h1>
                <hr>
                <p>Liebe Eltern,<br>
                in Bremen werden gerade viele Kinder untersucht. Es handelt sich dabei um eine europaweite Studie. Die Ergebnisse erhält die Weltgesundheitsorganisation (WHO). Sie möchte erfahren, wie Kinder sich heute entwickeln. Am Ende sollen Programme erstellt werden, die die Gesundheit der Kinder verbessern. Die Studie ist für Kinder der zweiten und dritten Klasse.
                <br>
                Das wird gemessen: Gewicht, Körpergröße, Hüftumfang und Taillenumfang.
                <br>
                Ihre Kinder werden lediglich vermessen. So erfahren wir, wie sich Kinder im Durchschnitt entwickeln. Die Untersuchung dauert ungefähr 5 Minuten. Jungen und Mädchen werden getrennt untersucht. Die Kinder sollten leichte Sportkleidung tragen. So können die Fachkräfte besser messen. Die Expertinnen und Experten sind besonders geschult im Umgang mit Kindern.
                <br>
                Im Fragebogen sind Fragen dazu, wie Sie zuhause leben und wo Sie geboren sind. Die Daten speichern wir nicht zusammen mit dem Namen des Kindes. Niemand kann erfahren, wie groß oder schwer Ihr Kind ist. Alle Gesetze zum Datenschutz werden beachtet.
                <br>
                Die Umfrage wird durchgeführt vom „Leibniz-Institut für Präventionsforschung und Epidemiologie“. In Bremen wurde sie von der Senatorin für „Gesundheit, Frauen und Verbraucherschutz“ und der Senatorin für „Wissenschaft und Häfen“ in Auftrag gegeben.
                <br>
                Unterstützen Sie uns. Helfen Sie, die Gesundheit von Kindern zu verbessern. Das können Sie tun, indem Ihr Kind an unserer Studie teilnimmt. Die Teilnahme ist freiwillig. Wenn Sie nicht teilnehmen möchten, hat das keine Nachteile für Sie oder Ihr Kind.
                <br>
                Füllen Sie bitte diese beiden Dokumente aus:
                <br><br>
                •\tEinverständniserklärung
                <br>
                •\tFragebogen.
                <br><br>
                Ihre Schule benötigt die ausgefüllten Bögen innerhalb einer Woche zurück.
                <br>
                Wenn Sie Fragen haben, rufen Sie uns gern unter <b>0421 218 56830</b> an <br>oder schreiben Sie uns eine E-Mail an <a href="mailto:proxi-at-mail.co"><b>proxi-at-mail.co</b></a>
                <br><br>
                Mit freundlichen Grüßen
                <br>
                 
                <br>
                Prof. Dr. Wolfgang Ahrens
                <br>
                </p>
                `
            console.log('Selected language: TURKISH');
            break;
        case Language.UKRAINIAN:
            innerLetter.innerHTML= `
                <h2>українська</h2>
                <h1>Europaweite Studie der Weltgesundheitsorganisation (WHO): Wie entwickeln sich Kinder heute?</h1>
                <hr>
                <p>Liebe Eltern,<br>
                in Bremen werden gerade viele Kinder untersucht. Es handelt sich dabei um eine europaweite Studie. Die Ergebnisse erhält die Weltgesundheitsorganisation (WHO). Sie möchte erfahren, wie Kinder sich heute entwickeln. Am Ende sollen Programme erstellt werden, die die Gesundheit der Kinder verbessern. Die Studie ist für Kinder der zweiten und dritten Klasse.
                <br>
                Das wird gemessen: Gewicht, Körpergröße, Hüftumfang und Taillenumfang.
                <br>
                Ihre Kinder werden lediglich vermessen. So erfahren wir, wie sich Kinder im Durchschnitt entwickeln. Die Untersuchung dauert ungefähr 5 Minuten. Jungen und Mädchen werden getrennt untersucht. Die Kinder sollten leichte Sportkleidung tragen. So können die Fachkräfte besser messen. Die Expertinnen und Experten sind besonders geschult im Umgang mit Kindern.
                <br>
                Im Fragebogen sind Fragen dazu, wie Sie zuhause leben und wo Sie geboren sind. Die Daten speichern wir nicht zusammen mit dem Namen des Kindes. Niemand kann erfahren, wie groß oder schwer Ihr Kind ist. Alle Gesetze zum Datenschutz werden beachtet.
                <br>
                Die Umfrage wird durchgeführt vom „Leibniz-Institut für Präventionsforschung und Epidemiologie“. In Bremen wurde sie von der Senatorin für „Gesundheit, Frauen und Verbraucherschutz“ und der Senatorin für „Wissenschaft und Häfen“ in Auftrag gegeben.
                <br>
                Unterstützen Sie uns. Helfen Sie, die Gesundheit von Kindern zu verbessern. Das können Sie tun, indem Ihr Kind an unserer Studie teilnimmt. Die Teilnahme ist freiwillig. Wenn Sie nicht teilnehmen möchten, hat das keine Nachteile für Sie oder Ihr Kind.
                <br>
                Füllen Sie bitte diese beiden Dokumente aus:
                <br><br>
                •\tEinverständniserklärung
                <br>
                •\tFragebogen.
                <br><br>
                Ihre Schule benötigt die ausgefüllten Bögen innerhalb einer Woche zurück.
                <br>
                Wenn Sie Fragen haben, rufen Sie uns gern unter <b>0421 218 56830</b> an <br>oder schreiben Sie uns eine E-Mail an <a href="mailto:proxi-at-mail.co"><b>proxi-at-mail.co</b></a>
                <br><br>
                Mit freundlichen Grüßen
                <br>
                 
                <br>
                Prof. Dr. Wolfgang Ahrens
                <br>
                </p>
                `
            console.log('Selected language: Ukrainian');
            break;
    }
}

const toggleTextVisibility = () => {
    console.log('toggling..');
    if (content.style.visibility === 'visible'){
        console.log('toggled hidden');
        content.style.visibility = 'hidden';
    }
    else {
        console.log('toggled visible');
        content.style.visibility = 'visible'
    }
}

Array.from(langButtons).forEach(function(button) {
    button.addEventListener('click', toggleTextVisibility);
});

closeButton.addEventListener('click', toggleTextVisibility);
englishText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.ENGLISH));
arabicText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.ARABIC));
bulgarianText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.BULGARIAN));
dariText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.DARI));
frenchText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.FRENCH));
italianText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.ITALIAN));
polishText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.POLISH));
romanianText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.ROMANIAN));
russianText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.RUSSIAN));
spanishText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.SPANISH));
turkishText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.TURKISH));
ukrainianText.addEventListener('click', ()=> selectAndDisplayLanguage(Language.UKRAINIAN));



