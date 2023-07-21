import './Image.css';

const Image = ({ url, alt }) => {
    return (
        <div className="Image" >
            <img src={url} alt={alt} />
        </div>
    )
};

export default Image;