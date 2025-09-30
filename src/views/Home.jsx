import { useNavigate } from 'react-router-dom';

import LogoImg from '../assets/img/Logo1.png'
import AtmoGraf from '../assets/img/AtmoGraf.png'

export function Home() {
    const navigate = useNavigate();

    function goToAction() {
        navigate('/action');
    }

    return (
        <section className='home flex column justify-center align-center '>
            <article className='main-logo flex column align-center justify-center gap10' >
                {/* <div className='flex align-center justify-center gap10'> */}
                    <img src={LogoImg} alt="" />
                    <h1>Atmo</h1>
                {/* </div> */}
                <h2>the clear sky for your cloud</h2>
            </article>

            <article className='scend-logo'>
                <img src={AtmoGraf} alt="" />
                <div className='flex column gap20 justify-center'>
                    <h2>Take control of your cloud infrastructure</h2>
                    <p>Atmo collects data across multi - cloud platforms, provides improved visualizations.AI enhancements, and actionable recommendations.</p>
                    <button onClick={goToAction}>Get Started</button>
                </div>
            </article>
        </section>
    )
}

