
import React from 'react';
import { LoaderContainer } from './Loader.styled'; 
import { createPortal } from 'react-dom';
import { ColorRing } from 'react-loader-spinner';


const loaderRoot = document.querySelector('#loader-root');

export const Loader = () => {
    return createPortal(
        <LoaderContainer>
            <ColorRing
                visible={true}
                height="200"
                width="200"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#3f51b5', '#d3d1d1', '#3f51b5' , '#d3d1d1' , '#3f51b5']}
            />
        </LoaderContainer>,
        loaderRoot,
    );
}

