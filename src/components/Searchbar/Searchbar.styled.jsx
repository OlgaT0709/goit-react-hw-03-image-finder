import styled from '@emotion/styled';
import { Form, Field } from 'formik';

    // padding: ${props => props.theme.spacing(2)};
    // background-color: ${props => props.theme.colors.lightGrey};
    // border: ${props => `1px solid ${props.theme.colors.secondaryText}`};

export const Header = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: ${props => props.theme.spacing(6)};
    padding-left: ${props => props.theme.spacing(6)};
    padding-top: ${props => props.theme.spacing(3)};
    padding-bottom: ${props => props.theme.spacing(3)};
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.blue};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
     
`;


 export const SearchForm = styled(Form)` 
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button` 
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5nwYDSorJ-_22epB23fUV3KVdqPxtdxl7-E3DJxz_SLqMLvx4NwWpnoaNnzhNDVGeiA&usqp=CAU');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;


:hover {
  opacity: 1;
}
`;

export const ButtonLabel= styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input= styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(1)};

`;