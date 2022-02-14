import styled from 'styled-components';

export const ImageStyle = styled.div`

  & > div {
    display: inline !important;

    & > div {
      display: none !important;
    }

    & > img {
      display: inline !important;
      position: static !important;
      width: auto !important;
      height: auto !important;
    }
  }

`;
