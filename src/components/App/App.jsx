import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, GalleryContainer, LargeImage } from './App.styled';

import { scrollElementHeight, scrollToTop } from '../../utils/scroll';
import apiService from '../../data/apiService';
import catchError from '../../utils/catcherror';
import { Searchbar } from '../Searchbar';
import { ImageGallery } from '../ImageGallery';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { Loader } from '../Loader';

export class App extends Component {
              
  state = {
    query: '',
    page: 1,
    showModal: false,
    images: [],
    isLoading: false,
    largeImageURL: '',
   };

  async componentDidMount() { };

  async componentDidUpdate(prevProps, prevState) {
    const nextQuery = this.state.query;
    const prevQuery = prevState.query;
    const nextPage = this.state.page;
    const prevPage = prevState.page;
    
   
    if (nextQuery !== prevQuery && nextQuery !== "") {
       
      this.toggleLoading();
      apiService.query = nextQuery;
        
      try {
        const images = await apiService.fetchPhoto();
        this.ifFaildMessage(images.hits.length);
        this.updateImages(images);
        scrollToTop();
  
      } catch (error) {
        catchError(error);
      };
      this.toggleLoading();
    } 
    
    if (nextPage !== prevPage && nextPage !== 1) {
      this.toggleLoading();
      apiService.pageNumber = nextPage;
      try { 
        const images = await apiService.fetchPhoto();
        this.updateImages(images);
        scrollElementHeight(2);
   
      } catch (error) {
        catchError(error);
      };
      this.toggleLoading();
    }

  };


  onSubmitForm = (values) => {
      this.setState(
    {
      query: values.query,
      page: 1,
      images: [],
    },
    
  );
};


  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
    
  updateImages = (images) => {
    this.setState(prevState => ({
      images: prevState.images.concat(images.hits),
    }));


  }
  
  ifFaildMessage = (length) => {
   
     if ( length === 0) {
        toast.error('Please try again you rrequest!', {
        position: toast.POSITION.TOP_RIGHT
    })
    }
  }

  
   toggleLoading =() => {
    this.setState(({isLoading}) => ({
      isLoading: !isLoading,
    }));
  };

  toggleModal = (largeImageURL) => {
  this.setState(({showModal}) => ({
    showModal: !showModal,
    largeImageURL: largeImageURL, 
  }));
};
     
  render() {
    const { images, showModal, isLoading, largeImageURL } = this.state;
 
    return (
      <Container>
        <Searchbar onSubmitForm={this.onSubmitForm} />
        <GalleryContainer id="galleryContainer">
          {images.length > 0 ? <ImageGallery images={images} toggleModal={this.toggleModal} /> : null }         
        </GalleryContainer>  
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <LargeImage src={largeImageURL}/>
          </Modal>
        )}
        { images.length > 0 ? <Button onClickBtn={this.onLoadMore} /> : null}
        {isLoading && <Loader />}
        <ToastContainer autoClose={2000} />
      </Container>
    );
  }
}

 