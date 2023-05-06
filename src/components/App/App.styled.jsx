import styled from '@emotion/styled';

export const Container = styled.div`
  width: 425px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;

`;

