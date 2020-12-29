const projects = [
    {
        "title": "Wes Bos 30 Day JS Challenge",
        "projectUrl": "",
        "imageUrl": "",
        "type": [
            "HTML",
            "CSS",
            "JavaScript",
        ]
    },
    {
        "title": "Meme in a Giffy",
        "projectUrl": "",
        "imageUrl": "",
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
        "imageUrl": "",
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
        "imageUrl": "",
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
        "imageUrl": "",
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
        "imageUrl": "",
        "type": [
            "HTML",
            "CSS",
            "SCSS",
        ]
    },
];

let filteredProjects = projects;

function filterProjects(event) {

    document.querySelector('ul').innerHTML = ""; // clear out previous results

    let selectedType = event.target.value;

    filteredProjects = projects.filter(item => item.type.indexOf(selectedType) > -1);
    console.log(filteredProjects);

    displayProjects();
}

function displayProjects() {

    filteredProjects.map((project) => {
        let projectType = project.type.join(', ');
        document.querySelector('ul').insertAdjacentHTML("beforeend",
            `<li>
            <h3>${project.title}</h3>
            <img src=${project.imgUrl} alt=""/>
            <p>${projectType}</p>
            </li>`
        );
    });
}

displayProjects();

document.querySelector('#type').addEventListener('change', filterProjects);









