import DOMPurify from 'dompurify';


export default function DiscoverArea({ content }) {

    const thirdContentElement = content[1]
    const clean = DOMPurify.sanitize(thirdContentElement.content);
 



return <div className="discover-area">
    <div className="container mx-auto">
        <div className="discover-img">
            <img src="src\assets\discover-img1.png" alt="" />
            <img src="src\assets\discover-img2.jpg" alt="" />
        </div>
        <div className="discover-content text-center">
        <div className="text-white" dangerouslySetInnerHTML={{ __html: clean }} />
        </div>
    </div>
    <div class="analytics-shape1"><img src="src/assets/analytics-shape1.png" alt="image" /></div>
</div>
}