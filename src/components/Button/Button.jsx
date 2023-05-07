import PropTypes from 'prop-types';
import { ButtonLoad} from './Button.styled';



export const Button = ({onClickBtn}) => {
    return (
        <ButtonLoad
            type="button"
            onClick = {onClickBtn}>
            Load-more
        </ButtonLoad>
    );
}

Button.propTypes = {
      onClickBtn: PropTypes.func.isRequired,  
};