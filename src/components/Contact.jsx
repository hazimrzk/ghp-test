import abtData from "../data/aboutData"

export default function Contact() {

    return (
        <>
            <div className="container-main container-contacts">
                <a href="https://www.linkedin.com/in/hazim-razak-261620237/">
                    <h3 className="hidden">Send a message!</h3>
                </a>
                <p className="hidden">Have any inquiries? Don't hesitate to <strong>reach out</strong>.</p>
                <span className="contacts-icons hidden">
                    {abtData.contact.map((item) => {
                        return (
                            <>
                                <a href={item.link}><i className={item.icon} aria-hidden="true"></i></a>
                            </>
                        )
                    })}
                </span>
            </div>
        </>
    )
}