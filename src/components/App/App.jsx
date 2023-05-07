import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, GalleryContainer, LargeImage } from './App.styled';

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

  async componentDidMount() {
   
  }

  async componentDidUpdate(prevProps, prevState) {
    const nextPage = this.state.page;
    const prevPage = prevState.page;

    
    if (nextPage !== prevPage) {
      this.toggleLoading();

      try {
        const images = await apiService.fetchPhoto();
        if (images.hits.length === 0) {
          this.errorMessage();

        } else {
          this.updateImages(images);
  
          console.log(this.state);
        }
      } catch (error) {
        catchError(error);
      }
      this.toggleLoading();
    }

  }


  onSubmitForm = (event) => {
    event.preventDefault();
    const value = event.target.query.value.toLowerCase().trim();
    this.resetGallary();
    this.setState({
      query: value,
    },
      () => {

        if (this.state.query === '') {
          toast.error('Please enter your request.', {
            position: toast.POSITION.TOP_RIGHT
          });
          this.resetGallary();

        } else {
            console.log(this.state);
            apiService.query = this.state.query;
            this.inrementPage();
            this.resetForm();
         
        };
        
      });    
    
      
  };

  errorMessage = () => {
    toast.error('Incorrect request , please try again.', {
        position: toast.POSITION.TOP_RIGHT
    })
  };

  loadMore = () => {
    this.inrementPage()

    // плавне прокручування сторінки після запиту і відтворення кожної наступної групи зображень
    const refsGalleryContainer =  document.querySelector('#galleryContainer');
    const { height: cardHeight } = refsGalleryContainer.firstElementChild.getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth",
    });

         
    
  };

  updateImages = (images) => {
    this.setState(prevState => ({
      images: prevState.images.concat(images.hits),
    }));
  }

  inrementPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    apiService.pageNumber = this.state.page
  }

  resetForm = () => {
    this.setState({
      query: '',
    });
  };

   
 resetGallary = () => {
    this.setState({
      query: '',
      page: 1,
      showModal: false,
      images: [],
      isLoading: false,
      largeImageURL: '',
    });
  };
 
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
        { images.length > 0 ? <Button onClickBtn={this.loadMore} /> : null}
        {isLoading && <Loader />}
        <ToastContainer autoClose={2000} />
      </Container>
    );
  }
}

 