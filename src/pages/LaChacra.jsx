import { Link } from 'react-router-dom';

const LaChacra = () => {
    return (
        <div className="animate-fade">
            {/* Editorial Hero - More natural/warm */}
            <section
                className="hero"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop')",
                    backgroundAttachment: "fixed",
                    height: '80vh'
                }}
            >
                <div className="hero-content">
                    <p className="hero-subtitle">MAGIA EN LA NATURALEZA</p>
                    <h1 className="hero-title">La Chacra</h1>
                </div>
            </section>

            {/* Intro - Descriptive text focused on nature and park */}
            <section className="section" style={{ padding: '10rem 2rem', textAlign: 'center' }}>
                <p style={{
                    fontFamily: 'var(--font-body)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    fontSize: '0.8rem',
                    color: 'var(--color-accent)',
                    marginBottom: '2rem'
                }}>
                    Espacios que se conectan
                </p>
                <h2 style={{
                    fontSize: '2.8rem',
                    lineHeight: '1.4',
                    maxWidth: '900px',
                    margin: '0 auto',
                    fontWeight: '400',
                    color: 'var(--color-primary)'
                }}>
                    Un salón amplio, dividido en dos ambientes, integrado al parque para todo forme parte de una misma celebración.
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--color-text-light)',
                    maxWidth: '700px',
                    margin: '3rem auto 0',
                    fontWeight: '300'
                }}>
                    La Chacra está pensada para eventos distendidos, al aire libre, manteniendo comodidad y servicio integral. El parque suma amplitud y entorno verde, mientras que el salón garantiza confort, funcionalidad y espacios bien definidos para que la celebración fluya con naturalidad en cualquier momento.
                </p>
            </section>

            {/* Organic Premium Services Section */}
            <section className="section" style={{ padding: '0 2rem 10rem' }}>
                <h2 className="section-title" style={{ fontSize: '1rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '5rem' }}>
                    ESPACIOS & EXPERIENCIA
                </h2>

                <div className="grid-3" style={{ gap: '2rem' }}>
                    {/* Card 1: Entorno & Parque */}
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
                            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>NATURALEZA INTEGRADA</p>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '400', marginBottom: '2rem', lineHeight: '1.2' }}>Parque & Exterior</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                {['Parque diseñado para ceremonias al aire libre', 'Iluminación cálida entre árboles', 'Deck techado con vista al jardín', 'Espacios instagrameables naturales'].map((item, id) => (
                                    <li key={id} style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', fontWeight: '300', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Card 2: Recepción & Confort */}
                    <div style={{
                        backgroundColor: '#F7F4F0', /* Tono más tierra/cálido */
                        padding: '4rem 3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        border: '1px solid rgba(0,0,0,0.03)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.02)',
                        minHeight: '450px',
                        transform: 'translateY(-20px)'
                    }}>
                        <div>
                            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--color-accent)', marginBottom: '1.5rem' }}>CALIDEZ & BIENVENIDA</p>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '400', marginBottom: '2rem', lineHeight: '1.2' }}>Confort & Recepción</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                {['Salón climatizado dividido en dos ambientes', 'Cocktail de bienvenida', 'Sector de mesas independiente de la pista', 'Espacios conectados al parque'].map((item, id) => (
                                    <li key={id} style={{ fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: '300', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                        <span style={{ width: '4px', height: '1px', backgroundColor: 'var(--color-primary)' }}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Card 3: Intimidad & Detalle */}
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
                            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>SERVICIO & CERCANÍA</p>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '400', marginBottom: '2rem', lineHeight: '1.2' }}>Atención Personalizada</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                {['Ideal para eventos de hasta 250 personas', 'Atención personalizada detalle a detalle', 'Catering completo con equipo propio', 'Acompañamiento cercano en cada etapa'].map((item, id) => (
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
                <div className="grid-2" style={{ marginBottom: '8rem' }}>
                    <div style={{ paddingRight: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '400' }}>El Placer de la Comodidad</h3>
                        <p style={{ fontSize: '1.1rem', fontWeight: '300', color: 'var(--color-text-light)', marginBottom: '2rem', lineHeight: '1.8' }}>
                            En La Chacra, cada rincón invita al encuentro y la charla. Nuestra propuesta se aleja de lo impersonal para abrazar la cercanía, creando una atmósfera donde todos se sienten como en casa, pero con el lujo de no tener que preocuparse por nada.
                        </p>
                        <Link to="/galeria" className="btn btn-outline">Ver Galería Natural</Link>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
                            alt="Jardines de La Chacra"
                            style={{ width: '100%', height: '600px', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="section" style={{ textAlign: 'center', padding: '10rem 2rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <p style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '2rem' }}>LA MAGIA ESTA AQUÍ</p>
                <h2 style={{ fontSize: '3rem', fontWeight: '400', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>Celebrá en un entorno que respira vida y tranquilidad.</h2>
                <Link to="/contacto" className="btn btn-primary" style={{ padding: '20px 60px' }}>Agendar una Visita</Link>
            </section>
        </div>
    );
};

export default LaChacra;
