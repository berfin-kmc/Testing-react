import DOMPurify from 'dompurify';

export default function HomeServices({ content }) {
    const secondContentElements = content.map((content, i) => {
        const clean = DOMPurify.sanitize(content.content);
        return <div key={i} className="text-white service-box w-1/3" dangerouslySetInnerHTML={{
            __html: `<div className="shape" style=" position: absolute;
        right: 0;
        top: -15px;
        z-index: -1;"><img src="src/assets/rectangle.png" alt="" /></div> ${clean}`
        }} />
    })
    return <div className="container">
        <div class="section-title">
            <h2>Services We Can Help You With</h2>
            <div class="bar"></div>
            <p>
                We provide high quality and reliable EMS including turnkey solutions for your final product needs.
            </p>

        </div> <div className="  flex my-10 services-wrapper mx-auto gap-6">

            {secondContentElements}
        </div>
    </div>
}