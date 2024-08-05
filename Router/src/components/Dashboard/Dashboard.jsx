import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Painel de Controle</h1>
      <nav>
        <ul>
          <li>
            <Link to="overview">Visão Geral</Link>
          </li>
          <li>
            <Link to="settings">Configurações</Link>
          </li>
          <li>
            <Link to="reports">Relatórios</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
