import styled from 'styled-components'
import backgroundImage from '../../images/tommy-nguyen.jpg';

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  mix-blend-mode: normal;
  backdrop-filter: blur(10px);
  border: none;
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 6px 0 0 6px;
  height: 3.2rem;
  width: 345px;
  /* resolver tamanho */
  padding: 0 .5rem;
  color: #fff;
  font-size: 1.1rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }

  &::placeholder {
    color: #fff;
  }

`

export const Button = styled.button`
  height: 3.2rem;
  background: rgba(254, 95, 95, 0.56);
  mix-blend-mode: normal;
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */
  border: none;
  color: #fff;
  border-radius: 0 6px 6px 0;
  font-size: 1.1rem;
  padding: 0 1rem;
  cursor: pointer;  
`


export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image : url(${backgroundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  `
  
export const Container = styled.div`
    flex-direction: row;
`

export const ErrorMsg = styled.span`
  display: block;
  font-size: 1rem;
  color: #ff2b20;
  font-weight: 600;
  margin-top: 1rem;
`