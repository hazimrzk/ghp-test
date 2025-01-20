import projectData from "../data/projectData.js"

export default function Projects() {

    return (
        <>
            <div className="container-main">
                {projectData.map((proj) => {
                    return (
                        <><ProjCard desc={proj.desc} img={proj.img} /></>
                    )
                })}
            </div>
        </>
    )
}

function ProjCard({ desc, img }) {

    return (
        <div className={"container-projects project-" + desc.projectNum}>
            <div className="project-title">
                <ProjImage props={img} />
                <ProjDesc props={desc} />
            </div>
        </div>
    )
}

function ProjImage({ props }) {

    return (
        <>
            <div className="project-title-image">
                {props.map((img) => {
                    return (
                        <><img className={"hidden project-image image-" + img.class} src={"Dev-Portfolio/assets/images/" + img.src} alt=""></img></>
                    )
                })}
            </div>
        </>
    )
}

function ProjDesc({ props }) {

    const techLists = props.tech.map((lang) => {
        return (
            <>
                <span className='tech-icon'>
                    <img src={"Dev-Portfolio/assets/icons/" + lang + ".svg"} alt={lang}></img>
                    <span>{lang}</span>
                </span>
            </>
        )
    })

    const roleElements = props.role.map((item) => {
        if (item.includes("(END)")) { return (<><span>{item.slice(0, -5)}</span></>) }
        return (
            <>
                <span>{item}</span>
                <span>&nbsp; • &nbsp;</span>
            </>
        )
    })

    const linkElements = props.links.map((link) => {
        return (
            <>
                <a href={link.ref}><button className="primary-button">{link.text}</button></a>
            </>
        )
    })

    return (
        <>
            <div className="project-title-description">
                <h6 className="hidden">{props.type}</h6>
                <h2 className="hidden">{props.name}</h2>
                <div className="project-tech hidden">
                    {techLists}
                </div>
                <div className="project-role hidden">
                    {roleElements}
                </div>
                <p className="hidden">{props.summary}</p>
                <div className="project-actions hidden">
                    {linkElements}
                </div>
            </div>
        </>
    )

}