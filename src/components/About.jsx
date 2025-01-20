import abtData from "../data/aboutData"

export default function About() {

    return (
        <>
            <div className="container-main">
                <AboutBanner info={abtData.info} contact={abtData.contact} />
                <AboutContent para={abtData.paragraphs} langs={abtData.langs} tools={abtData.tools} />
            </div>
        </>
    )
}

function AboutBanner({ info, contact }) {

    const contactElements = contact.map((item) => {
        return (
            <><a href={item.link}><i className={item.icon} aria-hidden="true"></i></a></>
        )
    })

    return (
        <>
            <div className="about-banner">
                <h3 className="hidden">{info.fullname}<br></br></h3>
                <h5 className="hidden">{info.title}</h5>
                <p className="hidden"><br></br>{info.desc}<br></br><br></br><br></br></p>
                <span className="hidden">{contactElements}</span>
                <p><br></br><br></br></p>
                <a href={info.cvpath} className="hidden" target="_blank"><button className="primary-button"> <strong> GET RESUME </strong> </button></a>
            </div>
        </>
    )
}

function AboutContent({ para, langs, tools }) {

    return (
        <>
            <div className="about-content">
                <div className="about-details">
                    <h6 className="hidden">OVER THE YEARS</h6>
                    <h6><br></br></h6>
                    {para.map(() => {
                        return (<>
                            <p className="hidden">{para[0]}</p>
                        </>)
                    })}
                </div>
                <div className="about-languages">
                    <h6 className="hidden">TECH STACKS</h6>
                    <h6><br></br></h6>
                    <h6 className="hidden">LANGUAGES</h6>
                    <h6><br></br></h6>
                    <TechLists items={langs} />
                </div>
                <div className="about-frameworks">
                    <h6><br></br></h6>
                    <h6><br></br></h6>
                    <h6 className="hidden">FRAMEWORKS / LIBRARIES</h6>
                    <h6><br></br></h6>
                    <TechLists items={tools} />
                </div>
            </div>
        </>
    )
}

function TechLists({ items }) {

    const techElements = items.map((item) => {
        return (
            <>
                <span className='tech-icon'>
                    <img src={"Dev-Portfolio/public/assets/icons/" + item + ".svg"}></img>
                    <span>{item}</span>
                </span>
            </>
        )
    })

    return (
        <>
            {techElements}
        </>
    )
}