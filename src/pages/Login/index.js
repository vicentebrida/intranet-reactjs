import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
//import api from '../../services/api';

import { Container } from './styles';

import logo from '../../assets/logo.svg';

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    
    //const response = await api.post('/rota', { email, password });

    //const { _id } = response.data;
    const _id = '123456789';

    localStorage.setItem('user', _id);

    console.log(email);//history.push('/dashboard');
  }

  return (
    <Container>
      <img src={logo} alt="GerBPM" />

      <div className="content">
        <p>
          Digite seu <strong>e-mail</strong> e <strong>senha</strong> para acessar.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input 
            type="email" 
            id="email" 
            placeholder="E-mail" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Senha</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Senha" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <Button type="submit" variant="contained" color="primary">
            Entrar
          </Button>
        </form>
      </div>
    </Container>
  );
}