import React from 'react';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/Logo.svg'
import { FiChevronRight } from 'react-icons/fi'

const Dashboard: React.FC = () => {
  return (
    <>
    <img src={logoImg} alt="Github Explorer " />
        <Title>Explore repositórios no Github</Title>

        <Form>
          <input placeholder="Digite o nome do repositorio" />
          <button type='submit'>Pesquisar</button>
        </Form>

    <Repositories>
    <a href="teste">
      <img src="https://avatars.githubusercontent.com/u/37362664?v=4" alt="" />
      <div>
        <strong>rocketseat/unform</strong>
        <p>Easy peeasy highly scalable ReactJs and React Native Forms!</p>
      </div>
      <FiChevronRight size={20}/>
    </a>
    <a href="teste">
      <img src="https://avatars.githubusercontent.com/u/37362664?v=4" alt="" />
      <div>
        <strong>rocketseat/unform</strong>
        <p>Easy peeasy highly scalable ReactJs and React Native Forms!</p>
      </div>
      <FiChevronRight size={20}/>
    </a>
    <a href="teste">
      <img src="https://avatars.githubusercontent.com/u/37362664?v=4" alt="" />
      <div>
        <strong>rocketseat/unform</strong>
        <p>Easy peeasy highly scalable ReactJs and React Native Forms!</p>
      </div>
      <FiChevronRight size={20}/>
    </a>
    </Repositories>
    </>
    );
}

export default Dashboard