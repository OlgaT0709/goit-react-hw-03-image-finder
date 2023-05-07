import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Header, SearchForm, SearchFormButton, ButtonLabel, Input} from './Searchbar.styled';

const initialValues = {
    query: '',
    page: 1,
};

export const Searchbar = ({ onSubmitForm }) => {
  const imagesInquire = (values, { resetForm }) => {
    onSubmitForm(values);
    resetForm();
  };

  return (
    <Header>
      <Formik initialValues={initialValues} onSubmit={imagesInquire}>
        {({ values, handleChange, handleSubmit }) => (
          <SearchForm autoComplete="off" onSubmit={handleSubmit}>
            <SearchFormButton type="submit">
              <ButtonLabel>Search</ButtonLabel>
            </SearchFormButton>

            <Input
              type="text"
              name="query"
              value={values.query}
              onChange={handleChange}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        )}
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,

};