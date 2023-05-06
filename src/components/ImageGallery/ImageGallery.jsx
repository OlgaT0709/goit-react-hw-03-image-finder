import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import {ImageCalleryItem} from '../ImageGalleryItem'

export const ImageGallery = ({ }) => {
    const link = "";
    const name = "";
    
    return (
        <Gallery>
            <ImageCalleryItem link={link} name={name} />
        </Gallery>
    );
}

ImageGallery.propTypes = {
        
};