import PropTypes from 'prop-types';
import {Overlay , ModalImg, Image } from './Modal.styled';



export const Modal = ({link, name}) => {
    return (
        <Overlay>
            <ModalImg>
                <Image src={link} alt={name} />
            </ModalImg>
        </Overlay>
    );
}

Modal.propTypes = {
    link: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
};