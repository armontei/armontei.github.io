const projects = [
    {
        "title": "Wes Bos 30 Day JS Challenge",
        "projectUrl": "",
        "videoUrl": "",
        "liveUrl": "",
        "codeUrl": "",
        "type": [
            "HTML",
            "CSS",
            "JavaScript",
        ]
    },
    {
        "title": "Meme in a Giffy",
        "projectUrl": "",
        "videoUrl": "",
        "liveUrl": "",
        "codeUrl": "",
        "type": [
            "HTML",
            "CSS",
            "SCSS",
            "JavaScript",
            "React",
            "Rest API",
            "Mob Programming"
        ]
    },
    {
        "title": "I Dream of Cleannie",
        "projectUrl": "",
        "videoUrl": "",
        "liveUrl": "",
        "codeUrl": "",
        "type": [
            "HTML",
            "CSS",
            "SCSS",
            "JavaScript",
            "React"
        ]
    },
    {
        "title": "Worldly Recipes",
        "projectUrl": "",
        "videoUrl": "",
        "liveUrl": "",
        "codeUrl": "",
        "type": [
            "HTML",
            "CSS",
            "SCSS",
            "JavaScript",
            "jQuery",
            "Pair Programming"
        ]
    },
    {
        "title": "A Moment of Calm",
        "projectUrl": "",
        "videoUrl": "./assets/AMomentofCalm-Project3.mp4",
        "liveUrl": "",
        "codeUrl": "",
        "type": [
            "HTML",
            "CSS",
            "SCSS",
            "JavaScript",
            "jQuery"
        ]
    },
    {
        "title": "The Restaurant Mall",
        "projectUrl": "",
        "videoUrl": "",
        "liveUrl": "",
        "codeUrl": "",
        "type": [
            "HTML",
            "CSS",
            "SCSS",
        ]
    },
    {
        "title": "Animal Refuge",
        "projectUrl": "",
        "videoUrl": "",
        "liveUrl": "",
        "codeUrl": "",
        "type": [
            "HTML",
            "CSS"
        ]
    },
];

let filteredProjects = projects;

function filterProjects(e) {

    document.querySelector('ul').innerHTML = ""; // clear out previous results

    let selectedType = e.target.value;

    filteredProjects = projects.filter(item => item.type.indexOf(selectedType) > -1);
    console.log(filteredProjects);

    document.querySelector('span').innerHTML = `${selectedType}`;

    displayProjects();
}

function displayProjects() {

    filteredProjects.map((project) => {
        let projectType = project.type.join(', ');
        document.querySelector('ul').insertAdjacentHTML("beforeend",
            `<li>
            <h3>${project.title}</h3>
            <p>${projectType}</p>
            <video width="320" height="240" loop muted>
                <source src=${project.videoUrl} type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <a href=${project.liveUrl} class="btn">View Website</a>
            <a href=${project.codeUrl} class="btn">View Code</a>
            </li>`
        );
    });

    let videos = document.querySelectorAll('video');
    videos.forEach(video => video.addEventListener('mouseover', () => video.play()));
    videos.forEach(video => video.addEventListener('mouseout', () => video.pause()));
}

displayProjects();

document.querySelector('#type').addEventListener('change', filterProjects);






