import './Sidebar.css';

function Sidebar() {
    return (
        <div className="dash-sidebar-top">
            <div className="dash-sidebar-images">
                <img
                    className="dash-sidebar-image"
                    src="./src/assets/foto-Campeche.png"
                    alt="Imagem 2"
                />
                <img
                    className="dash-sidebar-image"
                    src="./src/assets/foto-ponte.png"
                    alt="Imagem 3"
                />
                <img
                    className="dash-sidebar-image"
                    src="./src/assets/foto-Matadeiro.png"
                    alt="Imagem 4"
                />
                <img
                    className="dash-sidebar-image"
                    src="./src/assets/foto-Ribeirao.png"
                    alt="Imagem 1"
                />
            </div>
        </div>
    );
}

export default Sidebar;

