const projects = [
    {
        "title": "Wes Bos 30 Day JS Challenge",
        "videoUrl": "",
        "liveUrl": "https://armontei.github.io/WesBosVanillaJSChallenge/",
        "codeUrl": "https://github.com/armontei/WesBosVanillaJSChallenge",
        "description": "A series of projects by Wes Bos designed to help people learn more vanilla JavaScript.",
        "detailedInfo": "",
        "type": [
            "HTML",
            "CSS",
            "Vanilla JavaScript"
        ]
    },
    {
        "title": "Personal Portfolio",
        "videoUrl": "",
        "liveUrl": "https://amandamonteiro.ca/",
        "codeUrl": "https://github.com/armontei/personal-portfolio",
        "description": "A website I designed to showcase some of my work, skills, and provide contact details.",
        "detailedInfo": "",
        "type": [
            "HTML",
            "SCSS",
            "Vanilla JavaScript"
        ]
    },
    {
        "title": "Meme in a Giffy",
        "videoUrl": "",
        "liveUrl": "https://project6bootcamp.github.io/project6AmandaHansChristianBenZahra/",
        "codeUrl": "https://github.com/armontei/project6AmandaHansChristianBenZahra",
        "description": "Agency style group project where users can create memes using the Giphy API.",
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
        "description": "Users can add tasks to a room and",
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
        "videoUrl": "",
        "liveUrl": "https://armontei.github.io/amanda-monteiro-hans-christian-project-4/",
        "codeUrl": "https://github.com/armontei/amanda-monteiro-hans-christian-project-4",
        "description": "",
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
        "description": "",
        "detailedInfo": "",
        "type": [
            "HTML",
            "SCSS",
            "jQuery"
        ]
    },
    {
        "title": "The Restaurant Mall",
        "videoUrl": "",
        "liveUrl": "https://armontei.github.io/amanda-monteiro-project-2/",
        "codeUrl": "https://github.com/armontei/amanda-monteiro-project-2",
        "description": "",
        "detailedInfo": "",
        "type": [
            "HTML",
            "SCSS",
        ]
    },
    {
        "title": "Animal Refuge",
        "videoUrl": "",
        "liveUrl": "https://armontei.github.io/amanda-monteiro-project-1/",
        "codeUrl": "https://github.com/armontei/amanda-monteiro-project-1",
        "description": "",
        "detailedInfo": "This was my first bootcamp project. The challenge was not using flexbox and instead only using floats. Even though floats could be considered outdated, it was important to learn how to work with floats in case we ended up working at a company that still used them or had previous code written using floats.",
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
            `<li class="projectBox">
            <h3>${project.title}</h3>
            <p class="proType">${projectType}</p>
            <video loop muted>
                <source src=${project.videoUrl} type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <p class="proDescription">${project.description}</p>
            <a href=${project.liveUrl} class="btn" target="_blank">Website</a>
            <a href=${project.codeUrl} class="btn" target="_blank">Code</a>
            <p class="proDetailed">${project.detailedInfo}</p>
            </li>`
        );
    });

    let videos = document.querySelectorAll('video');
    videos.forEach(video => video.addEventListener('mouseover', () => video.play()));
    videos.forEach(video => video.addEventListener('mouseout', () => video.pause()));
}

displayProjects();

document.querySelector('#type').addEventListener('change', filterProjects);






