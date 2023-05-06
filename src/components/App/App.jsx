import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import { Container, GalleryContainer } from './App.styled';

import { Searchbar } from '../Searchbar';
import { ImageGallery } from '../ImageGallery'
import {Button} from '../Button'

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
  

  onSubmitForm = (event) => {
    event.preventDefault();

    const value = event.target.query.value.toLowerCase().trim();
    this.setState({
      query: value,
    },
      () => {

        if (this.state.query === '') {
          toast.error('Please enter your request.', {
            position: toast.POSITION.TOP_RIGHT
          });
        }
        this.resetForm();
        
      });    
  };

  resetForm = () => {
    this.setState({
      query: '',
      page: 1,
    }, () => {
      // console.log(this.state.query);
    });
  };
    
  render() {
     const { query, page } = this.state;

    return (
      <Container>
        <Searchbar onSubmitForm={this.onSubmitForm} />
        <GalleryContainer>
           <ImageGallery/>
        </GalleryContainer>       
        <Button/>
      </Container>
    );
  }
}

  