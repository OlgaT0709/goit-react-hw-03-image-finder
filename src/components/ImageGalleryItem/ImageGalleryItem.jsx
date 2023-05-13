import PropTypes from 'prop-types';
import {ImageContainer , Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({webformatURL, tags, largeImageURL, onOpenModal}) => {
    return (
        <ImageContainer >
            {webformatURL && (
                <Image src={webformatURL}
                    alt={tags}
                    data-source={largeImageURL}
                    onClick={ onOpenModal} />)}
        </ImageContainer>
    );
}

ImageGalleryItem.propTypes = {
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onOpenModal: PropTypes.func,
 
};