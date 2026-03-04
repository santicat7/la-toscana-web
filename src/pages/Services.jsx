const Services = () => {
    const servicios = [
        {
            id: '01',
            title: 'Salón & Ambientación',
            desc: 'Espacios diseñados para adaptarse a cada evento, con mobiliario, iluminación y detalles que construyen una atmósfera coherente y bien definida.',
            icon: '🏰'
        },
        {
            id: '02',
            title: 'Gastronomía & Barra',
            desc: 'Propuestas gastronómicas completas, desde la recepción hasta el final de fiesta, acompañadas por cocktails y servicio profesional.',
            icon: '🍽️'
        },
        {
            id: '03',
            title: 'Producción Técnica',
            desc: 'Iluminación, sonido y pista LED de última generación integrados por profesionales para acompañar cada momento con impacto y precisión.',
            icon: '🎛️'
        },
        {
            id: '04',
            title: 'Foto & Video',
            desc: 'Cobertura profesional del evento, con fotografía y filmación pensadas para registrar cada momento con calidad y criterio.',
            icon: '📸'
        },
        {
            id: '05',
            title: 'Experiencias y Shows',
            desc: 'Propuestas complementarias como shows en vivo, cabina de fotos, performances y efectos especiales que elevan la celebración.',
            icon: '🎭'
        },
        {
            id: '06',
            title: 'Coordinación Integral',
            desc: 'Planificación y seguimiento de cada etapa del evento, asegurando que todo funcione con orden y coherencia. Previa, durante y posterior al evento.',
            icon: '✨'
        },
    ];

    return (
        <div className="animate-fade">
            {/* Editorial Header */}
            <section className="section" style={{ paddingTop: '12rem', paddingBottom: '5rem', textAlign: 'center' }}>
                <p style={{
                    fontFamily: 'var(--font-body)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.25em',
                    fontSize: '0.8rem',
                    color: 'var(--color-accent)',
                    marginBottom: '2rem'
                }}>
                    Servicio Integral
                </p>
                <h1 className="section-title" style={{ fontSize: '4rem', marginBottom: '2rem' }}>Todo en un mismo lugar</h1>
                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-text-light)',
                    maxWidth: '800px',
                    margin: '0 auto',
                    fontWeight: '300',
                    lineHeight: '1.8'
                }}>
                    Ofrecemos soluciones completas para que cada evento funcione con orden, estética y coordinación, combinando estructura, experiencia y atención personalizada.
                </p>
            </section>

            {/* Premium Services Grid */}
            <section className="section" style={{ paddingBottom: '10rem' }}>
                <div className="grid-3" style={{ gap: '2px', backgroundColor: 'rgba(0,0,0,0.05)' }}> {/* Grid-gap sutil para líneas divisorias finas */}
                    {servicios.map((srv) => (
                        <div
                            key={srv.id}
                            className="service-card-premium"
                            style={{
                                backgroundColor: 'var(--color-bg)',
                                padding: '5rem 3rem',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                transition: 'color 0.4s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                minHeight: '400px'
                            }}
                        >
                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <p style={{
                                    fontSize: '0.75rem',
                                    letterSpacing: '0.1em',
                                    color: 'var(--color-accent)',
                                    marginBottom: '2rem',
                                    fontWeight: '500'
                                }}>
                                    {srv.id}.
                                </p>
                                <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{srv.icon}</div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '400', marginBottom: '1.5rem' }}>{srv.title}</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--color-text-light)', fontWeight: '300', lineHeight: '1.8' }}>
                                    {srv.desc}
                                </p>
                            </div>

                            {/* Background Fill Animation (Inline style simulate hover states via CSS class or mouse events if needed) */}
                            {/* Para propósitos de este código, el efecto se define en el index.css pero aquí garantizamos los contenedores */}
                            <div className="hover-fill"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Design Note Section */}
            <section style={{ backgroundColor: 'var(--color-surface)', padding: '10rem 2rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '400', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Nos ocupamos de cada detalle para que vos solo te dediques a disfrutar.
                </h2>
                <a href="/contacto" className="btn btn-primary" style={{ padding: '20px 60px' }}>Solicitar una consulta</a>
            </section>

            {/* Estilos específicos para las cards (puedes mover estos al index.css) */}
            <style>{`
        .service-card-premium::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--color-surface); /* Relleno champagne sutil */
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 1;
        }
        .service-card-premium:hover::before {
          transform: scaleY(1);
        }
        .service-card-premium:hover h3 {
          transform: translateY(-5px);
          transition: var(--transition);
        }
      `}</style>
        </div>
    );
};

export default Services;
