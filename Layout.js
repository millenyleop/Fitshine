import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css'; // Certifique-se de que o caminho está correto

const Layout = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #5C1374, #2b0837)' }}>
      <header>
        <img src="/imagens/logotipo.png" alt="Logotipo" id="logo" />
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li className="dropdown">
              <a href="#">Dicas</a>
              <ul className="dropdown-content">
                <li><a href="/receitas">Receitas</a></li>
                <li><a href="/suplementações">Suplementações</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Profissionais</a>
              <ul className="dropdown-content">
                <li><a href="/personais">Personal</a></li>
                <li><a href="/nutricionista">Nutricionista</a></li>
              </ul>
            </li>
            <li><a href="/sos">SOS</a></li>
            <li><a href="/descontos">Descontos</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet /> {/* Aqui é onde o conteúdo das páginas será renderizado */}
      </main>

      <footer style={{ 
        backgroundColor: '#9d36a6d4', 
        color: '#fff', 
        textAlign: 'center', 
        padding: '10px 0',
        marginTop: '20px' 
      }}>
        <p>© 2024 Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;
