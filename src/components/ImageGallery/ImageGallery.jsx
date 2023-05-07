import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem';


export const ImageGallery = ({images, toggleModal}) => {
   
    return (
        <Gallery>
                                  
            {images.map(({ id,  webformatURL, tags, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    tags={tags}
                    largeImageURL={largeImageURL}
                    onOpenModal={() => { toggleModal(largeImageURL) }}
                />
      ))}
        </Gallery>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.array,
    //     ({
    //     id: PropTypes.number,
    //     tags: PropTypes.string.isRequired,
    //     webformatURL: PropTypes.string.isRequired,
    //     largeImageURL: PropTypes.string.isRequired,
    // }),
    toggleModal: PropTypes.func,
};

