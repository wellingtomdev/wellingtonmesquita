
const projects = [
    {
        name: "Pomodoro",
        description: "Pomodoro app, um timer para te auxiliar no foco contínuo no trabalho, estudo, leitura e qualquer outra tarefa que necessite de gerenciamento de tempo.",
        img: "./img/project1.png",
        link: "https://pomodoro.wellingtonmesquita.com"
    },
    {
        name: "Media Downloader",
        description: "Para downloads de vídeo, áudio e fotos das principais plataformas de mídia.",
        img: "./img/project2.png",
        link: "https://youtube.wellingtonmesquita.com"
    },
    {
        name: "Task Manager",
        description: "Organizador básico de tarefas.",
        img: "./img/project3.png",
        link: "https://tasks.wellingtonmesquita.com"
    },
    {
        name: "AutoWhats",
        description: "Envio de mensagens em massa pelo WhatsApp.",
        img: "./img/project4.png",
        link: "https://autowhatsoficial.com.br"
    }
]


function ProjectCard({
    name,
    description,
    img,
    link
}) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div class="project">
                <div class="projeto-img">
                    <img src={img} alt="" />
                </div>
                <div class="description">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </a>
    )
}

export default function Projects() {
    return (
        <section id="projects">
            <h2 class="title">Projetos</h2>
            {projects.map((project, index) => (<ProjectCard key={index} {...project} />))}
        </section>
    )
}
