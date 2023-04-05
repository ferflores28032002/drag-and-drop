import Image from "../public/image2.jpeg";
import PlaceholderImage from "../public/image2.jpeg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const LazyLoading = () => {
    return (
        <div>
            <LazyLoadImage src={Image}
                width={400} height={400}
                placeholderSrc={PlaceholderImage}
                effect="blur"
            />
        </div>
    )
}

export default LazyLoading