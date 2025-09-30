import { useNavigate } from 'react-router-dom';

import LogoImg from '../assets/img/Logo1.png'

export function AppHeader() {

    const navigate = useNavigate();

    function goToAConsultation() {
        navigate('/consultation');
    }

    return (
        <section className='app-header'>
            <article className='main-logo flex column align-center justify-center gap10' >
                <div className='flex align-center justify-center gap10'>
                    <img src={LogoImg} alt="" />
                    <h1>Atmo</h1>
                </div>
            </article>
        </section>
    )
}

