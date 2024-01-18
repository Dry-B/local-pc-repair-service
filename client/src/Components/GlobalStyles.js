import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
    font-family: Inter;
 	  display: flex;
  	flex-direction: column;
    justify-content: center;
	  align-items: center;
  	position: relative;
  	margin: 0;
    line-height: 1;
    width: 100vw;
  }
  ol, ul {
      list-style: none;
  }
  &::-webkit-scrollbar {
  display: none;
  }
`;
