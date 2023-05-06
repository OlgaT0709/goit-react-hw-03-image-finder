import styled from '@emotion/styled';

export const ButtonLoad = styled.button`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${props => props.theme.spacing(3)};
    margin-bottom: ${props => props.theme.spacing(3)};     
    padding: 8px 16px;

    border-radius: 4px;
    background-color:${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    text-align: center;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    min-width: 180px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

    :hover  {
        color: ${props => props.theme.colors.black};
}
     
`;