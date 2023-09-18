const links = [
    {
        label: "Início",
        url: "./#inicio"
    },
    // {
    //     label: "Sobre",
    //     url: "./#sobre"
    // },
    {
        label: "Projetos",
        url: "./#projects"
    },
    // {
    //     label: "Contato",
    //     url: "./#contato"
    // }
]

function NavLink({ url, label }) {
    return (
        <a href={url}>
            <li>{label}</li>
        </a>
    )
}

export default function Header() {

    const linkElements = links.map((link, index) => <NavLink key={index} {...link} />)

    return (
        <header>
            <nav>
                <ul>
                    {linkElements}
                </ul>
            </nav>
        </header>
    )
}