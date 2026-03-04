import { Link } from 'react-router-dom';
import laToscanaHero from '../assets/images/latoscana2.jpg'
import latoscana3 from '../assets/images/latoscana3.jpg';

const LaToscana = () => {
    return (
        <div className="animate-fade">
            {/* Editorial Hero */}
            <section
               className="hero"
  style={{
    backgroundImage: `url(${laToscanaHero})`,
    backgroundAttachment: "fixed",
    height: '80vh'
  }}
            >
                <div className="hero-content">
                    <p className="hero-subtitle">ELEGANCIA CONTEMPORÁNEA</p>
                    <h1 className="hero-title">La Toscana</h1>
                </div>
            </section>

            {/* Intro - Descriptive text centered */}
            <section className="section" style={{ padding: '10rem 2rem', textAlign: 'center' }}>
                <p style={{
                    fontFamily: 'var(--font-body)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    fontSize: '0.8rem',
                    color: 'var(--color-accent)',
                    marginBottom: '2rem'
                }}>
                    El Escenario
                </p>
                <h2 style={{
                    fontSize: '2.8rem',
                    lineHeight: '1.4',
                    maxWidth: '900px',
                    margin: '0 auto',
                    fontWeight: '400',
                    color: 'var(--color-primary)'
                }}>
                    Un espacio amplio, moderno y bien pensado, donde cada detalle arquitectónico acompaña la celebración sin imponerse.
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--color-text-light)',
                    maxWidth: '700px',
                    margin: '3rem auto 0',
                    fontWeight: '300'
                }}>
                    Ubicado estratégicamente en Paysandú, La Toscana se reconoce por su techo a dos aguas y sus grandes ventanales, que aportan luz, amplitud y una estética limpia que se adapta a cada evento.
                </p>
            </section>

            {/* Premium Included Services Section */}
            <section className="section" style={{ padding: '0 2rem 10rem' }}>
                <h2 className="section-title" style={{ fontSize: '1rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '5rem' }}>
                    La Propuesta Integral
                </h2>

                <div className="grid-3" style={{ gap: '2rem' }}>
                    {/* Card 1: Infraestructura */}
                    <div style={{
                        backgroundColor: '#fff',
                        padding: '4rem 3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        border: '1px solid rgba(0,0,0,0.03)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.02)',
                        minHeight: '450px'
                    }}>
                        <div>
                            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>TEC & ESPACIO</p>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '400', marginBottom: '2rem', lineHeight: '1.2' }}>Infraestructura moderna y completa</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                {['Pista LED de alta resolución', 'Iluminación robótica y perimetral', 'Sistemas de pantallas móviles', 'Sonido profesional'].map((item, id) => (
                                    <li key={id} style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', fontWeight: '300', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Card 2: Gastronomía */}
                    <div style={{
                        backgroundColor: '#F9F7F3', /* Ligeramente más cálido */
                        padding: '4rem 3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        border: '1px solid rgba(0,0,0,0.03)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.02)',
                        minHeight: '450px',
                        transform: 'translateY(-20px)' /* Desplazamiento sutil para diseño editorial */
                    }}>
                        <div>
                            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--color-accent)', marginBottom: '1.5rem' }}>CATERING & BAR</p>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '400', marginBottom: '2rem', lineHeight: '1.2' }}>Gastronómica integral</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                {['Menú de recepción frío y caliente', 'Barra de coctelería premium ilimitada', 'Servicio de mozos', 'Menú principal personalizable'].map((item, id) => (
                                    <li key={id} style={{ fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: '300', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                        <span style={{ width: '4px', height: '1px', backgroundColor: 'var(--color-primary)' }}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Card 3: Estilismo */}
                    <div style={{
                        backgroundColor: '#fff',
                        padding: '4rem 3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        border: '1px solid rgba(0,0,0,0.03)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.02)',
                        minHeight: '450px'
                    }}>
                        <div>
                            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>ATMÓSFERA</p>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '400', marginBottom: '2rem', lineHeight: '1.2' }}>Ambientación y organización</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                {['Mobiliario exclusivo y mantelería', 'Decoración base adaptable', 'Seguridad y apoyo durante la noche', 'Coordinación del evento'].map((item, id) => (
                                    <li key={id} style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', fontWeight: '300', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Storytelling */}
            <section className="section">
                {/* Row 1 */}
                <div className="grid-2" style={{ marginBottom: '8rem' }}>
                    <div>
                        <img
                              src={latoscana3}
                            alt="Detalle de Salon"
                            style={{ width: '100%', height: '600px', objectFit: 'cover' }}
                        />
                    </div>
                    <div style={{ paddingLeft: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '400' }}>El Arte de los Detalles</h3>
                        <p style={{ fontSize: '1.1rem', fontWeight: '300', color: 'var(--color-text-light)', marginBottom: '2rem', lineHeight: '1.8' }}>
                            Desde la primera reunión hasta el último baile, acompañamos cada decisión para que todo tenga coherencia y sentido.
La Toscana es un espacio que se adapta a cada celebración sin perder su identidad.
                        </p>
                        <div style={{ display: 'flex', gap: '3rem', marginTop: '1rem' }}>
                            <div>
                                <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>500</p>
                                <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>MÁX. INVITADOS</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>∞</p>
                                <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>POSIBILIDADES</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="section" style={{ textAlign: 'center', padding: '10rem 2rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <p style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '2rem' }}>COMIENZA TU HISTORIA</p>
                <h2 style={{ fontSize: '3rem', fontWeight: '400', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>Tu evento merece la perfección de un entorno diseñado para brillar.</h2>
                <Link to="/contacto" className="btn btn-primary" style={{ padding: '20px 60px' }}>Reservar una Visita</Link>
            </section>
        </div>
    );
};

export default LaToscana;
