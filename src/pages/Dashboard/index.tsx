import React, {useState, FormEvent} from 'react';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/Logo.svg'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner:{
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{
    event.preventDefault()

    const response = await api.get<Repository>(`repos/${newRepo}`)

    const repository = response.data;

    setRepositories([...repositories, repository])
  }

  return (
    <>
    <img src={logoImg} alt="Github Explorer " />
        <Title>Explore repositórios no Github</Title>

        <Form onSubmit={handleAddRepository}>
          <input 
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositorio" />
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
    </Repositories>
    </>
    );
}

export default Dashboard