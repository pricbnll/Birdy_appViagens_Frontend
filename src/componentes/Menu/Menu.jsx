import '../Menu/Menu.css'
import { Link, useNavigate } from 'react-router-dom'

function Menu() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('usuarioNome')
        localStorage.removeItem('usuarioId')

        navigate('/')
    }

    return (
        <>
            <nav className='nav-bg'>
                <div>
                    <img className='logo-img' src="../src/imgs/birdy-icon.png" alt="Logo Birdy" />
                </div>
                <div>
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
                </div>

                <div>
                    <p className='decor-none' onClick={handleLogout}><button type="button" className="btn btn-outline-light">Sair</button></p>
                </div>
            </nav>
        </>
    )
}

export default Menu
