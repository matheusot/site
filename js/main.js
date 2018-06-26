let en = {
    "header-tel-number": "+55 (019) 99687-6858",
    "professional-experiences": "Professional Experiences",
    "professional-dae-date": "oct/2016 - feb/2017",
    "professional-dae-function": "Intern at IT Support",
    "professional-dae-desc": "User assistance with hardware and software problems. Worked with servers and local network infrastructure, besides programming an own app for the use of the citizens residing in the city of Americana.",
    "professional-actio-date": "feb/2017 - apr/2017",
    "professional-actio-function": "Intern at IT Development and Support",
    "professional-actio-desc": "User support via Skype or telephone related to the systems develop by the company, changes in the PostgreSQL database, participation in developing a monitoration system and implementation of a recaptcha in the company's website.",
    "academic-formation": "Academic Formation",
    "academic-unicamp": "University of Campinas - UNICAMP",
    "academic-computer": "Computer Science / 2018 - now",
    "academic-cotil": "Technical School of Limeira - UNICAMP",
    "academic-technician": "Computer Technician / 2015 - 2017",
    "academic-highschool": "High School / 2015 - 2017",
    "skills": "Skills",
    "languages": "Languages",
    "languages-portuguese": "Portuguese: Native",
    "languages-english": "English: Advanced",
    "languages-spanish": "Spanish: Basic ",
    "patents": "Patents",
    "patents-webappdae": "Web app for registry of calls and ocurrences <a target='noopener'  class='is-main' href='https://gru.inpi.gov.br/pePI/servlet/ProgramaServletController?Action=detail&CodPedido=20787&SearchParameter='>BR 51 2017 000006 9</a>",
    "courses": "Courses and Certificates",
    "courses-codeiot": "CodeIoT (Samsung and LSI-TEC)",
    "courses-physical-programming": "Physical Programming",
    "courses-mobile-applications": "Mobile Applications",
    "courses-connected-smart-objects": "Connected Smart Objects",
    "courses-electronics-basic-concepts-components": "Electronics: Basic Concepts and Components",
    "courses-python-3-world-1-fundamentals": "Python 3 - World 01: Fundamentals",
    "courses-php": "PHP Course",
    "courses-mysql": "MySQL Course",
    "courses-html5": "HTML5 Course",
    "courses-java": "Java Course",
    "courses-algorithm": "Algorithm Course",
    "courses-technological-administrative": "Technological Administrative",
    "courses-accounting-secretarial-personal-department": "Accounting, Secretarial and Personal Department",
    "courses-basic-android": "Basic Android",
    "courses-basic-java": "Basic Java",
}

window.onload = () => {
    let lang = navigator.language || navigator.userLanguage;
    let months = []
    if (lang != 'pt-BR' && lang != 'pt') {
        months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'octuber', 'november', 'december'];
        for (let key in en)
            if (en.hasOwnProperty(key))
                document.getElementById(key).innerHTML = en[key];
    } else {
        months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'outubro', 'novembro', 'dezembro'];
    }
    let date = new Date();
    document.getElementById("last-edit").innerHTML = months[date.getMonth()] + '/' + date.getFullYear();
}

