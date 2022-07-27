let previousScroll = window.pageYOffset;
window.onscroll = function () {
    // Effect hide and show navbar
    let currentScroll = window.pageYOffset;
    if (previousScroll > currentScroll) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector("nav").style.top = "-50px";
    }
    previousScroll = currentScroll;
    // Effect shadow navbar
    if (currentScroll > 100) {
        document.querySelector("nav").style.boxShadow = "0px 0px 10px 0px var(--second)";
    } else {
        document.querySelector("nav").style.boxShadow = "none";
    }
};

const showSidebar = () => {
    document.querySelector(".sidebar").classList.add("show-sidebar");
    document.querySelector(".overlay").classList.add("show-overlay");
};

const hideSidebar = () => {
    document.querySelector(".sidebar").classList.remove("show-sidebar");
    document.querySelector(".overlay").classList.remove("show-overlay");
};

const skills = [
    {
        name: "HTML",
        img: "src/habilidades/html-5.svg",
    },
    {
        name: "CSS",
        img: "src/habilidades/css-3.svg",
    },
    {
        name: "Javascript",
        img: "src/habilidades/js.svg",
    },
    {
        name: "React",
        img: "src/habilidades/react.svg",
    },
    {
        name: "Node JS",
        img: "src/habilidades/node-js.svg",
    },
    {
        name: "Express JS",
        img: "src/habilidades/express-js.png",
    },
    {
        name: "Bootstrap",
        img: "src/habilidades/bootstrap.svg",
    },
    {
        name: "Git",
        img: "src/habilidades/git.svg",
    },
];

const projects = [
    {
        name: "Login Starter",
        description: "Login para una aplicación web",
        skills: ["React", "Node JS", "Express JS",  "Bootstrap"],
        img: "src/proyectos/loginmern.png",
        repo: "#",
        demo: "#",
    },
    {
        name: "Pedidos",
        description: "App para que tus clientes puedan hacer pedidos a tu local",
        skills: ["HTML", "CSS", "Javascript", "Node JS", "Express JS"],
        img: "src/proyectos/App Menus.png",
        repo: "#",
        demo: "#",
    },

];


const skills_label = document.querySelector(".skills");
const projects_label = document.querySelector(".projects");
const courses_label = document.querySelector(".courses");

function render() {
    // Skills
    skills.forEach((skill) => {
        skills_label.innerHTML += `
        <div class="skill" >
            <img src=${skill.img} width='100' arial-label="${skill.name}">
            ${skill.name}
        </div>
        `;
    });
    skills.forEach((skill) => {
        skills_label.innerHTML += `
        <div class="skill" >
            <img src=${skill.img} width='100' arial-label="${skill.name}">
            ${skill.name}
        </div>
        `;
    });
    // Projects
    projects.forEach((project) => {
        projects_label.innerHTML += `
        <div class="card">
            <div class="card-img">
                <img src="${project.img}" alt="" width="50"/>
                <filter/>
            </div>
            <div class="card-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="card-icons">
                    ${project.skills.map((skill) => {
                        const skill_ = skills.find((skill_) => skill_.name === skill);
                        return `<img src=${skill_.img} width='20' style="border-radius: 50%;" arial-label="${skill_.name}">`;
                    })}
                </div>
                <div class="card-links">
                    <a href="${project.repo}" aria-label="REPO"><i class="uil uil-github"></i></a>
                    <a href="${project.demo}" aria-label="DEMO"><i class="uil uil-play-circle"></i></a>
                </div>
            </div>
        </div>
        `;
    });
}

render();

gsap.set(".card", { opacity: 0, y: 100 });
ScrollTrigger.batch(".card", {
    onEnter: (t) => gsap.to(t, { stagger: 0.1, opacity: 1, y: 0 }),
    onLeaveBack: (t) => gsap.to(t, { opacity: 0, y: 100 }),
});