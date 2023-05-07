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
    const nextQuery = this.state.query;
    const prevQuery = prevState.query;
    const nextPage = this.state.page;
    const prevPage = prevState.page;

    if (nextQuery !== prevQuery && nextQuery !== "") {
       
        this.toggleLoading();
        apiService.query = nextQuery;
        this.resetForm();
          
        try {
          const images = await apiService.fetchPhoto();
          if (images.hits.length === 0) {
            toast.error('Please try again!', {
            position: toast.POSITION.TOP_RIGHT
        })

          } else {
            this.updateImages(images);
            console.log('componentDidUpdate QueryChanged после updateImages');
            console.log(this.state);
          }
      } catch (error) {
        catchError(error);
      }
      this.toggleLoading();
    } 
    
    if (nextPage !== prevPage && nextPage !== 1) {
      this.toggleLoading();
      apiService.pageNumber = nextPage;
      try {
        const images = await apiService.fetchPhoto();
        if (images.hits.length === 0) {
          this.errorMessage();

        } else {
          this.updateImages(images);
          console.log('componentDidUpdate PageChanged после updateImages');
          console.log(this.state);
        }
      } catch (error) {
        catchError(error);
      }
      this.toggleLoading();
    }

  }


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
    this.incrementPage()

    // плавне прокручування сторінки після запиту і відтворення кожної наступної групи зображень
    const refsGalleryContainer =  document.querySelector('#galleryContainer');
    const { height: cardHeight } = refsGalleryContainer.firstElementChild.getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 1,
        behavior: "smooth",
    });

         
    
  };

  updateImages = (images) => {
    this.setState(prevState => ({
      images: prevState.images.concat(images.hits),
    }));
  }

  incrementPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
     }

  resetForm = () => {
    this.setState({
      query: '',
      page: 1,
      images: [],

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
        { images.length > 0 ? <Button onClickBtn={this.onLoadMore} /> : null}
        {isLoading && <Loader />}
        <ToastContainer autoClose={2000} />
      </Container>
    );
  }
}

 