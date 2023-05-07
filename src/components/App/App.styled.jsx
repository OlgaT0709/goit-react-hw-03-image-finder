import styled from '@emotion/styled';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
`;

export const GalleryContainer = styled.div`
  margin-top: ${props => props.theme.spacing(3)};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;

`;

export const LargeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
`;

