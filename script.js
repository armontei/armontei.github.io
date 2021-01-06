const projects = [
    {
        "title": "Wes Bos 30 Day JS Challenge",
        "videoUrl": "./assets/WesBosJSChallenge.mp4",
        "liveUrl": "https://armontei.github.io/WesBosVanillaJSChallenge/",
        "codeUrl": "https://github.com/armontei/WesBosVanillaJSChallenge",
        "description": "A collection of projects by Wes Bos designed to help people learn more vanilla JavaScript methods.",
        "detailedInfo": "",
        "type": [
            "HTML",
            "CSS",
            "Vanilla JavaScript"
        ]
    },
    {
        "title": "Personal Portfolio",
        "videoUrl": "./assets/PersonalPortfolio.mp4",
        "liveUrl": "https://amandamonteiro.ca/",
        "codeUrl": "https://github.com/armontei/personal-portfolio",
        "description": "Showcases some of my work, skills, and provides contact details. Lighthouse score of 100% for Accessibility, Best Practices, and SEO.",
        "detailedInfo": "",
        "type": [
            "HTML",
            "SCSS",
            "Vanilla JavaScript"
        ]
    },
    {
        "title": "Meme in a Giffy",
        "videoUrl": "./assets/MemeInAGiffy.mp4",
        "liveUrl": "https://project6bootcamp.github.io/project6AmandaHansChristianBenZahra/",
        "codeUrl": "https://github.com/armontei/project6AmandaHansChristianBenZahra",
        "description": "Agency style group project where users can create, search through, and upvote memes using the Giphy API.",
        "detailedInfo": "",
        "type": [
            "HTML",
            "SCSS",
            "React",
            "Rest API",
            "Firebase",
            "Mob Programming"
        ]
    },
    {
        "title": "I Dream of Cleannie",
        "videoUrl": "./assets/Cleannie-Project5.mp4",
        "liveUrl": "https://armontei.github.io/amanda-monteiro-project-5/",
        "codeUrl": "https://github.com/armontei/amanda-monteiro-project-5",
        "description": "Users can add tasks to a room and mark them off as complete or delete them. A random task can be suggested through a button.",
        "detailedInfo": "",
        "type": [
            "HTML",
            "SCSS",
            "React",
            "Firebase"
        ]
    },
    {
        "title": "Worldly Recipes",
        "videoUrl": "./assets/WorldlyRecipes-Project4.mp4",
        "liveUrl": "https://armontei.github.io/amanda-monteiro-hans-christian-project-4/",
        "codeUrl": "https://github.com/armontei/amanda-monteiro-hans-christian-project-4",
        "description": "Type and a food item or dish name to see a list of recipes generated with the Meal Lab API. Filter those recipes by their country of origin.",
        "detailedInfo": "",
        "type": [
            "HTML",
            "SCSS",
            "jQuery",
            "Rest API",
            "Pair Programming"
        ]
    },
    {
        "title": "A Moment of Calm",
        "videoUrl": "./assets/AMomentofCalm-Project3.mp4",
        "liveUrl": "https://armontei.github.io/amanda-monteiro-project-3/",
        "codeUrl": "https://github.com/armontei/amanda-monteiro-project-3",
        "description": "Click buttons to change the theme, audio, and meditation timer. Or have them chosen at random. Animation will play to help guide your breathing.",
        "detailedInfo": "",
        "type": [
            "HTML",
            "SCSS",
            "jQuery"
        ]
    },
    {
        "title": "The Restaurant Mall",
        "videoUrl": "./assets/RestaurantMall-Project2.mp4",
        "liveUrl": "https://armontei.github.io/amanda-monteiro-project-2/",
        "codeUrl": "https://github.com/armontei/amanda-monteiro-project-2",
        "description": "Multi-page PSD Conversion. First time using SCSS and mixins.",
        "detailedInfo": "",
        "type": [
            "HTML",
            "SCSS",
        ]
    },
    {
        "title": "Animal Refuge",
        "videoUrl": "./assets/AnimalRefuge-Project1.mp4",
        "liveUrl": "https://armontei.github.io/amanda-monteiro-project-1/",
        "codeUrl": "https://github.com/armontei/amanda-monteiro-project-1",
        "description": "PSD Coversion with the challenge being to only use floats, no flexbox or grids allowed.",
        "detailedInfo": "",
        "type": [
            "HTML",
            "CSS"
        ]
    }
];

let filteredProjects = projects;
let projectContainer = document.querySelector('.projectContainer');

function filterProjects(e) {

    projectContainer.innerHTML = ""; // clear out previous results

    let selectedType = e.target.value;

    filteredProjects = projects.filter(item => item.type.indexOf(selectedType) > -1);
    console.log(filteredProjects);

    document.querySelector('span').innerHTML = `${selectedType}`;

    displayProjects();
}

function displayProjects() {

    filteredProjects.map((project) => {
        let projectType = project.type.join(', ');
        projectContainer.insertAdjacentHTML("beforeend",
            `<li class="projectCard">
            <h3>${project.title}</h3>
            <p class="proType">${projectType}</p>
            <video loop muted>
                <source src=${project.videoUrl} type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <p class="proDescription">${project.description}</p>
            <a href=${project.liveUrl} class="btn" target="_blank" rel="noopener noreferrer">Website</a>
            <a href=${project.codeUrl} class="btn" target="_blank" rel="noopener noreferrer">Code</a>
            </li>`
        );
    });

    let videos = document.querySelectorAll('video');

    videos.forEach(video => video.addEventListener('mouseover', () => video.play()));
    videos.forEach(video => video.addEventListener('mouseout', () => video.pause()));

    videos.forEach(video => video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }));
}

displayProjects();



document.querySelector('#type').addEventListener('change', filterProjects);






