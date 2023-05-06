import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, SearchForm, SearchFormButton, ButtonLabel, Input} from './Searchbar.styled';



export const Searchbar = ({ value, onSubmitForm, onChangeInput}) => {
    return (
        <Header>
            <SearchForm onSubmit={onSubmitForm}>
                <SearchFormButton type="submit" >
                    <ButtonLabel>Search</ButtonLabel>
                </SearchFormButton>

                <Input
                    type="text"
                    name="query"
                    value={value}
                    onChange={onChangeInput}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </SearchForm>
            <ToastContainer autoClose={1000} theme={'colored'} />
        </Header>
    );
}

Searchbar.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
    onChangeInput: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired, 
    
};