import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.91);
  flex-wrap: wrap;
  

`

export const Span = styled.span`
  font-size: 1rem;
  font-weight: 800;
  
`

export const P = styled.p`
  font-size: 1.5rem;
  border: solid  #047a84 2px;
  margin: 5px 5px 5px 5px;
  font-weight: 500;
`

export const Button = styled.button`
  display: flex;
  text-shadow: 0 1px 1px #bbb,
  0 1px 0 #999,
  0 2px 0 #888,
  0 2px 0 #777,
  0 3px 0 #666,
  0 3px 0 #555,
  0 4px 0 #444,
  0 4px 0 #333,
  0 5px 7px #302314;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  background: #047a84;
  cursor: pointer;
  appearance: none;
  color: white;
  outline: none;
  font-size: 45px;
  font-weight: 900;
  margin: 15px 15px 15px 15px;
  @media only screen and (max-width: 1024px) {

  }
`

export const Kanji = styled.h1`
  color: white;
  display: flex;
  flex-direction: column;
  margin: 15px 15px 15px 15px;
  align-content: center;
  justify-content: center;
  font-weight: 900;
  font-size: 90px;
  text-align: center;
  padding: 0;
  margin: 0;
  
`

export const Ul = styled.ul`
  font-weight: 500;
  font-size: 1.5rem;
  border: solid  #047a84 2px;
  margin: 5px 5px 5px 5px;

`

export const Li = styled.li`

  font-size: 1rem;
  font-weight: 800;
  

`

