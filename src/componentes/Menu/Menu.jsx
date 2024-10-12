import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Menu.css';

function Menu() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('usuarioNome');
        localStorage.removeItem('usuarioId');
        navigate('/');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className={`nav-bg ${isMenuOpen ? 'open' : ''}`}>
                <div className="menu-header">
                    <img className='logo-img' src="../src/assets/birdy-icon.png" alt="Logo Birdy" />
                </div>
                <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
                    <Link className='decor-none' to='/dashboard'>
                        <p>Pagina Inicial</p>
                    </Link>
                    <Link className='decor-none' to='/perfil-usuario'>
                        <p>Meu perfil</p>
                    </Link>
                    <Link className='decor-none' to='/locais'>
                        <p>Meus destinos</p>
                    </Link>
                    <Link className='decor-none' to='/cadastro-local'>
                        <p>Novo destino</p>
                    </Link>
                    <p className='decor-none' onClick={handleLogout}>
                        <button type="button" className="btn btn-outline-light">Sair</button>
                    </p>
                </div>
            </nav>
            <button className="hamburger-btn" onClick={toggleMenu}>
                &#9776; 
            </button>
        </>
    );
}

export default Menu;
