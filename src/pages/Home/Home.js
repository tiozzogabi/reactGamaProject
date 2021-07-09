import React, { useState } from 'react';
import axios from 'axios'
import * as S from './styled'
import { useHistory } from 'react-router-dom'

function Home(props) {
  const [usuario, setUsuario] = useState('')
  const history = useHistory();
  const [error, setError] = useState('');
  
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];

      const userName = {usuario};
      localStorage.setItem('userName', JSON.stringify(userName));

      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setError(false);
      history.push('./repositories');    
  })
   .catch(err => {
     setError(true); 
   });
  }
  
  return (
    <>
    <S.HomeContainer>
      <S.Container>
        <S.Input type="text" className="usuarioInput" value={usuario} placeholder="Usuário" onChange={e => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Container>
        { error ? <S.ErrorMsg>Ocorreu um erro. Tente Novamente.</S.ErrorMsg> : ''}
    </S.HomeContainer>
    </>
  );
}

export default Home; 
