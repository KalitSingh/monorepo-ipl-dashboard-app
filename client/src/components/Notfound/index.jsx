import "./index.css"

// resource import from assests 
import NotFoundImg from "../../assets/not-found-blog-img.png"

const Notfound = () => {
    return (
        <>
            <div className="notfound-img-container">
                <img src={NotFoundImg} alt="notfound" className="not-found-img" />
            </div>
            <p>This Page is Not Found !</p>
        </>
    )
}


export default Notfound