import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, SearchForm, SearchFormButton, ButtonLabel, Input} from './Searchbar.styled';



export const Searchbar = ({ onSubmitForm }) => {
    
    return (
        <Header>
            <SearchForm onSubmit={onSubmitForm}>
                <SearchFormButton type="submit" >
                    <ButtonLabel>Search</ButtonLabel>
                </SearchFormButton>

                <Input
                    type="text"
                    name="query"
                    defaultValue=""
                    // value={}
                    // onChange={() => { }}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </SearchForm>
            <ToastContainer autoClose={2000} />
        </Header>
    );
}

Searchbar.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,

};