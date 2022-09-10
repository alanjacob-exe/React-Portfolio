import logo from '../../assets/images/logo-s.png';
import './index.scss'

const Home = () => {
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi,<br/> Im Alan
                <img src={logo} alt="developer"/>
                Fresher</h1>
                <h2>Student / React Developer</h2> 
                <Link to="/contact" className="flat-button">Contact Me</Link>
            </div>
        </div>
    );
}
export default Home;