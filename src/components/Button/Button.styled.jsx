import styled from '@emotion/styled';

export const ListOfContact = styled.ul`
    max-height: 232px;
    overflow-y: auto;
    padding: ${props => props.theme.spacing(2)};
    background-color: ${props => props.theme.colors.lightGrey};
    border: ${props => `1px solid ${props.theme.colors.secondaryText}`};
    border-radius: 4px;  
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
     
`;