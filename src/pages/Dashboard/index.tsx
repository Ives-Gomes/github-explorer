import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logogithubexplorer.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/53413719?s=460&u=1e98084c7754352365563418c0566299f52c7e39&v=4"
            alt="teste"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>sfho jh sdfhjfksd jfhdsfj lj bdlsjf bsjfbsdjfbsdjfb.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/53413719?s=460&u=1e98084c7754352365563418c0566299f52c7e39&v=4"
            alt="teste"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>sfho jh sdfhjfksd jfhdsfj lj bdlsjf bsjfbsdjfbsdjfb.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/53413719?s=460&u=1e98084c7754352365563418c0566299f52c7e39&v=4"
            alt="teste"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>sfho jh sdfhjfksd jfhdsfj lj bdlsjf bsjfbsdjfbsdjfb.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/53413719?s=460&u=1e98084c7754352365563418c0566299f52c7e39&v=4"
            alt="teste"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>sfho jh sdfhjfksd jfhdsfj lj bdlsjf bsjfbsdjfbsdjfb.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
