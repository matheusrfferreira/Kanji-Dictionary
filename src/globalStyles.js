import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: white;
    text-decoration: none;
    padding: 0;
    box-sizing: border-box;
    background: #212529;
    overflow: hidden;
    font-family : 'ヒラギノ角ゴ ProN' , 'Hiragino Kaku Gothic ProN' , '游ゴシック' , '游ゴシック体' , YuGothic , 
                  'Yu Gothic' , 'メイリオ' , Meiryo , 'ＭＳ ゴシック' , 'MS Gothic' , HiraKakuProN-W3 , 'TakaoExゴシック' , 
                  TakaoExGothic , 'MotoyaLCedar' , 'Droid Sans Japanese' , sans-serif;
    
  }
  // Scrollbar CSS
  //::-webkit-scrollbar {
  //  background-color: #212529;
  //}
  //::-webkit-scrollbar-track {
  //  background: #212529;
  //}
  //::-webkit-scrollbar-thumb {
  //  background: #047a84;
  //  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  //}
`;