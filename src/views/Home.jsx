import iconImg from '../assets/img/icon1.png'
import AtmoGraf from '../assets/img/AtmoGraf.png'

export function Home() {
    return (
        <section className='home flex column justify-center align-center '>
            <article className='main-logo flex align-center justify-center gap10' >
                <img src={iconImg} alt="" />
                <h1>Atmo</h1>
            </article>
            <article className='scend-logo'>
                <img src={AtmoGraf} alt="" />
                <div className='flex column gap20 justify-center'>
                    <h2>Take control of your cloud infrastructure</h2>
                    <p>Atmo collects data across multi - cloud platforms, provides improved visualizations.AI enhancements, and actionable recommendations.</p>
                    <button>Get Started</button>
                </div>
            </article>
        </section>
    )
}

