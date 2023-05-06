import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import { Container, GalleryContainer } from './App.styled';
import { Searchbar } from '../Searchbar';

export class App extends Component {

  static defaultProps = {
    
  };

 
  static propTypes = {
    
};
              
 
  state = {
    query: '',
    page: 1,
  };

  componentDidMount() {
  
   }

  componentDidUpdate(prevProps, prevState) {
   
  }
  
 onChangeInput = (event) => {
    const value = event.currentTarget.value.toLowerCase().trim();
     this.setState({
      query: value,
       });

    }

  onSubmitForm = (event) => {
    event.preventDefault();

    if (this.state.query === '') {
      toast.error('Please enter your request.', {
    position: toast.POSITION.TOP_RIGHT
});
    }

    // this.props.onSubmit(this.state.query, this.state.page);
    console.log(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      query: '',
      page: 1,
    });
  };
    
  render() {
     const { query } = this.state;

    return (
      <Container>
        <Searchbar value={query} onChangeInput={ this.onChangeInput} onSubmitForm={this.onSubmitForm} />
        <GalleryContainer>
           
        </GalleryContainer>       
      </Container>
    );
  }
}

  