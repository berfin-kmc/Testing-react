import DOMPurify from 'dompurify';

export default function Features({content}) {
    
    const firstContentElements = content.map((content, i) => {
        const clean = DOMPurify.sanitize(content.content);
        return <div key={i} className="text-white feature-box w-1/3" dangerouslySetInnerHTML={{ __html: clean }} />
    })

    return  <div className=" container flex my-10 features-wrapper mx-auto gap-6"> {firstContentElements}
    </div>
}