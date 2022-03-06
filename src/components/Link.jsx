export default props => {

    return (
        <a href={props?.href}>{props?.name}
        <section className="link">
            <h1>{props?.title}</h1>
            {props?.subtitle && <h2>{props?.subtitle}</h2>}
        </section>
        </a>
       
    )

}