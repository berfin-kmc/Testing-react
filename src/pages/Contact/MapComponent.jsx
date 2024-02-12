
export default function MapComponent({ map }) {

    return <div dangerouslySetInnerHTML={{ __html: map }}></div>
}