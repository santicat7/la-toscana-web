import { useState } from 'react';
import bodaCeremonia01 from '../assets/images/gallery/boda/boda-ceremonia-01.webp';
import bodaCeremonia02 from '../assets/images/gallery/boda/boda-ceremonia-02.webp';
import bodaFiesta01 from '../assets/images/gallery/boda/boda-fiesta-02.webp';
import bodaFiesta03 from '../assets/images/gallery/boda/boda-fiesta-03.webp';
import bodaPista01 from '../assets/images/gallery/boda/boda-pista-01.webp';
import bodaPrevia01 from '../assets/images/gallery/boda/boda-previa-01.webp';
import bodaPrevia03 from '../assets/images/gallery/boda/boda-previa-03.webp';
import bodaPrevia04 from '../assets/images/gallery/boda/boda-previa-04.webp';
import bodaPrevia08 from '../assets/images/gallery/boda/boda-previa-08.webp';
import quincePista01 from '../assets/images/gallery/quince/quince-pista-01.webp';
import quincePista04 from '../assets/images/gallery/quince/quince-pista-04.webp';
import quincePista06 from '../assets/images/gallery/quince/quince-pista-06.webp';
import quincePista08 from '../assets/images/gallery/quince/quince-pista-08.webp';
import quincePista10 from '../assets/images/gallery/quince/quince-pista-10.webp';
import quincePista13 from '../assets/images/gallery/quince/quince-pista-13.webp';
import quincePista16 from '../assets/images/gallery/quince/quince-pista-16.webp';
import quincePrevia01 from '../assets/images/gallery/quince/quince-previa-01.webp';
import quincePrevia02 from '../assets/images/gallery/quince/quince-previa-02.webp';
import quincePrevia03 from '../assets/images/gallery/quince/quince-previa-03.webp';
import ambientacionFiesta01 from '../assets/images/gallery/ambientacion/ambientacion-fiesta-01.webp';
import ambientacionFiesta02 from '../assets/images/gallery/ambientacion/ambientacion-fiesta-02.webp';
import ambientacionFiesta03 from '../assets/images/gallery/ambientacion/ambientacion-fiesta-03.webp';
import ambientacionFiesta07 from '../assets/images/gallery/ambientacion/ambientacion-fiesta-07.webp';
import ambientacionFrios01 from '../assets/images/gallery/ambientacion/ambientacion-frios-01.webp';
import ambientacionFrios02 from '../assets/images/gallery/ambientacion/ambientacion-frios-02.webp';
import ambientacionFrios05 from '../assets/images/gallery/ambientacion/ambientacion-frios-05.webp';
import ambientacionFrios07 from '../assets/images/gallery/ambientacion/ambientacion-frios-07.webp';
import ambientacionMesa01 from '../assets/images/gallery/ambientacion/ambientacion-mesa-01.webp';
import ambientacionMesa02 from '../assets/images/gallery/ambientacion/ambientacion-mesa-02.webp';
import ambientacionMesa04 from '../assets/images/gallery/ambientacion/ambientacion-mesa-04.webp';
import ambientacionTorta01 from '../assets/images/gallery/ambientacion/ambientacion-torta-01.webp';
import ambientacionTorta02 from '../assets/images/gallery/ambientacion/ambientacion-torta-02.webp';
import ambientacionTorta03 from '../assets/images/gallery/ambientacion/ambientacion-torta-03.webp';
import ambientacionTorta04 from '../assets/images/gallery/ambientacion/ambientacion-torta-04.webp';
import tecPista01 from '../assets/images/gallery/tec/tec-pista-01.jpg';


const Gallery = () => {
    const [filter, setFilter] = useState('Todos');
    const [selectedImage, setSelectedImage] = useState(null);

    const categories = ['Todos', 'Bodas', '15 Años', 'Ambientaciones', 'Tecnología'];

    const images = [
        { cat: 'Bodas', title: 'Ceremonia L&P', url: bodaCeremonia01, size: 'large' },
        { cat: 'Bodas', title: 'Recién casados', url: bodaCeremonia02, size: 'medium' },
        { cat: 'Bodas', title: 'Celebración', url: bodaPista01, size: 'large' },
        { cat: 'Bodas', title: 'De fiesta', url: bodaFiesta01, size: 'medium' },
        { cat: 'Bodas', title: 'Preparativos', url: bodaPrevia01, size: 'medium' },
        { cat: 'Bodas', title: 'Preparativos', url: bodaPrevia03, size: 'small' },
        { cat: 'Bodas', title: 'Dandolo todo siempre', url: bodaFiesta03, size: 'medium' },
        { cat: 'Bodas', title: 'B&N siempre suma', url: bodaPrevia08, size: 'small' },
        { cat: 'Bodas', title: 'Detalles que suman', url: bodaPrevia04, size: 'small' },
        { cat: '15 Años', title: 'Selfi time', url: quincePista01, size: 'large' },
        { cat: '15 Años', title: 'Y ahora un grito de...', url: quincePista04, size: 'small' },
        { cat: '15 Años', title: 'Encendidos', url: quincePista06, size: 'small' },
        { cat: '15 Años', title: 'Oppa, Gangnam... STYLE', url: quincePista08, size: 'medium' },
        { cat: '15 Años', title: 'Siempre agitando', url: quincePista10, size: 'large' },
        { cat: '15 Años', title: 'Celebración en pista', url: quincePista13, size: 'medium' },
        { cat: '15 Años', title: 'Que no falte el cotillon', url: quincePista16, size: 'medium' },
        { cat: '15 Años', title: 'Vestidos que sii', url: quincePrevia01, size: 'medium' },
        { cat: '15 Años', title: 'Detalles que Brillan', url: quincePrevia02, size: 'medium' },
        { cat: '15 Años', title: 'Previa de los XV', url: quincePrevia03, size: 'medium' },
        { cat: 'Ambientaciones', title: 'Detalle recibidor', url: ambientacionFiesta01, size: 'medium' },
        { cat: 'Ambientaciones', title: 'Cartel lumionoso', url: ambientacionFiesta02, size: 'medium' },
        { cat: 'Ambientaciones', title: 'La Toscana Brillando', url: ambientacionFiesta03, size: 'medium' },
        { cat: 'Ambientaciones', title: 'Cuadro de firmas', url: ambientacionFiesta07, size: 'medium' },
        { cat: 'Ambientaciones', title: 'Nuestra mesa de fríos', url: ambientacionFrios01, size: 'medium' },
        { cat: 'Ambientaciones', title: 'Saladitos', url: ambientacionFrios02, size: 'medium' },
        { cat: 'Ambientaciones', title: 'Distintos estilos', url: ambientacionFrios05, size: 'medium' },
        { cat: 'Ambientaciones', title: 'Siempre luciendo el catering', url: ambientacionFrios07, size: 'medium' },
        { cat: 'Ambientaciones', title: 'Nuestra mesa', url: ambientacionMesa01, size: 'medium' },
        { cat: 'Ambientaciones', title: 'Saladitos individuales', url: ambientacionMesa02, size: 'medium' },
        { cat: 'Ambientaciones', title: 'El salón brillando', url: ambientacionMesa04, size: 'medium' },
        { cat: 'Ambientaciones', title: 'Estilos de tortas', url: ambientacionTorta01, size: 'small' },
        { cat: 'Ambientaciones', title: 'Mesa de torta', url: ambientacionTorta02, size: 'small' },
        { cat: 'Ambientaciones', title: 'Diferentes opciones', url: ambientacionTorta03, size: 'small' },
        { cat: 'Ambientaciones', title: 'Estilos y varidades', url: ambientacionTorta04, size: 'medium' },
        { cat: 'Tecnología', title: 'Pista LED Interactiva', url: tecPista01, size: 'large' },
    ];

    const filteredImages = filter === 'Todos' ? images : images.filter(img => img.cat === filter);

    return (
        <div className="animate-fade">
            {/* Editorial Gallery Header */}
            <section className="section" style={{ paddingTop: '12rem', paddingBottom: '3rem', textAlign: 'center' }}>
                <p style={{
                    fontFamily: 'var(--font-body)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.25em',
                    fontSize: '0.8rem',
                    color: 'var(--color-accent)',
                    marginBottom: '2rem'
                }}>
                    Inspiración Visual
                </p>
                <h1 className="section-title" style={{ fontSize: '4rem', marginBottom: '2rem' }}>Galería de Momentos</h1>

                {/* Subtle Filter */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.8rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                color: filter === cat ? 'var(--color-primary)' : 'var(--color-text-light)',
                                cursor: 'pointer',
                                padding: '0.5rem 0',
                                position: 'relative',
                                transition: 'var(--transition)'
                            }}
                        >
                            {cat}
                            {filter === cat && (
                                <span style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '1px',
                                    backgroundColor: 'var(--color-accent)'
                                }}></span>
                            )}
                        </button>
                    ))}
                </div>
            </section>
            

            {/* Masonry-Style Grid */}
            <section className="section" style={{ paddingBottom: '10rem' }}>
                <div className="masonry-grid">
                    {filteredImages.map((img, idx) => (
                        <div
                            key={idx}
                            className={`masonry-item ${img.size}`}
                            onClick={() => setSelectedImage(img)}
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                marginBottom: '1rem',
                                cursor: 'pointer'
                            }}
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                loading="lazy"
                                onLoad={(e) => e.currentTarget.classList.add('loaded')}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                                }}
                                className="gallery-img"
                            />

                            {/* Overlay on Hover */}
                            <div className="gallery-overlay">
                                <div style={{ position: 'relative', zIndex: 2 }}>
                                    <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', marginBottom: '0.5rem', opacity: 0.8 }}>{img.cat}</p>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: '400', color: '#fff' }}>{img.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA GALERÍA */}

<section
  style={{
    textAlign: "center",
    padding: "6rem 2rem",
    borderTop: "1px solid rgba(0,0,0,0.05)"
  }}
>

<h2 style={{
  fontSize: "2.6rem",
  marginBottom: "1rem"
}}>
¿Te imaginás tu celebración aquí?
</h2>

<p style={{
  color: "var(--color-text-light)",
  marginBottom: "2.5rem",
  fontWeight: "300"
}}>
Consultá disponibilidad y comenzá a planificar tu evento.
</p>

<a
  href="/contacto"
  className="btn btn-primary"
>
Consultar disponibilidad
</a>

</section>

            {selectedImage && (
  <div className="modal" onClick={() => setSelectedImage(null)}>
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={selectedImage.url}
        alt={selectedImage.title}
      />
    </div>
  </div>
)}



            <style>{`
        .masonry-grid {
          column-count: 3;
          column-gap: 1rem;
        }
        
        @media (max-width: 1024px) {
          .masonry-grid {
            column-count: 2;
          }
        }
        
        @media (max-width: 768px) {
          .masonry-grid {
            column-count: 1;
          }
        }

        .masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem;
}

.masonry-item.large img {
  height: 520px;
}

.masonry-item.medium img {
  height: 360px;
}

.masonry-item.small img {
  height: 220px;
}

.masonry-item.medium img {
  height: 360px;
}

.masonry-item.small img {
  height: 220px;
}
}

     

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
background: linear-gradient(
to top,
rgba(0,0,0,0.8),
rgba(0,0,0,0.35),
rgba(0,0,0,0)
);
          display: flex;
          align-items: flex-end;
          padding: 2rem;
          opacity: 0;
          color: #fff;
          transition: var(--transition);
        }

        .masonry-item:hover .gallery-overlay {
          opacity: 1;
        }
          .gallery-img {
  width: 100%;
  display: block;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.8s ease, transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.gallery-img.loaded {
  opacity: 1;
}

      .masonry-item:hover .gallery-img {
  transform: scale(1.08);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}
      `}</style>
        </div>
    );
};



export default Gallery;
