import PropTypes from 'prop-types';
import {ImageGalleryItem , Image } from './ImageGalleryItem.styled';



export const ImageCalleryItem = ({link, name}) => {
    return (
        <ImageGalleryItem>
            <Image src={link} alt={name} />
        </ImageGalleryItem>
    );
}

ImageCalleryItem.propTypes = {
    link: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
};