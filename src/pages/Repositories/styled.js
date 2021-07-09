import styled from 'styled-components'
import {Link} from 'react-router-dom';
import backgroundImage from '../../images/tommy-nguyen.jpg';


export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`

export const ListItem = styled.li`
  background: rgba(255, 255, 255, 0.25);
  mix-blend-mode: normal;
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 6px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 0 0 1rem;
  width: 588px;
  height: 2.5rem;
  max-width: 80vw;
  margin: 0.5rem auto;
  font-size: 1.3rem;
  

`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImage});
  background-size: cover;
  margin: 0;
  padding-top: 1.5rem;
  overflow-y: scroll;
`

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2.5rem auto 5rem auto;
  text-decoration: none;
  background: rgba(254, 95, 95, 0.56);
  mix-blend-mode: normal;
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */
  border: none;
  color: #fff;
  border-radius: 6px;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  cursor: pointer; 
`