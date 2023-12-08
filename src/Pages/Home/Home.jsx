import { Header } from '../../components/Header/Header';
import { WeatherBlock } from '../../components/WeatherBlock/WeatherBlock';
import { Aside } from '../../components/Aside/Aside';
import './Home.css';

export const Home = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="main-container">
                <WeatherBlock />
                <Aside />
            </div>
        </div>
    )
};
