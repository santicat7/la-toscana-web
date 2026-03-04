import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero.jpg'
import footerImage from '../assets/images/footer1.jpg'
import laToscanaImage from '../assets/images/latoscana1.jpg'
const Home = () => {
  return (
    <div className="page-home animate-fade">
      {/* Editorial Hero */}
      <section 
        className="hero" 
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: "scroll"
        }}
      >
        <div className="hero-content">
          <p className="hero-subtitle">BODAS · 15 AÑOS · EVENTOS</p>
          <h1 className="hero-title">
            Celebrá sin preocuparte por nada.<br />Nosotros nos ocupamos de todo.
          </h1>
          <div style={{ marginTop: '4rem' }}>
            <Link to="/contacto" className="btn btn-primary">
              Consultar disponibilidad
            </Link>
          </div>
        </div>
        
      </section>

      {/* Agenda */}

<section
  style={{
    textAlign: "center",
    padding: "4rem 2rem",
    borderBottom: "1px solid rgba(0,0,0,0.05)"
  }}
>

<p style={{
  fontSize: "0.75rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
  marginBottom: "1rem"
}}>
Agenda Abierta
</p>

<h3 style={{
  fontSize: "2rem",
  marginBottom: "1rem"
}}>
Reservas 2027 / 2028
</h3>

<p style={{
  color: "var(--color-text-light)",
  fontWeight: "300"
}}>
Las fechas para 2027 y 2028 ya están disponibles. 
Más del 50% de las celebraciones de 2027 ya se encuentran reservadas.
</p>

<div style={{ marginTop: "2rem" }}>

<Link to="/contacto" className="btn btn-outline">
Consultar fechas disponibles
</Link>

</div>

</section>

      {/* Philosophy Section */}
      <section className="section" style={{ padding: '10rem 2rem', textAlign: 'center' }}>
        <p style={{ 
          fontFamily: 'var(--font-body)', 
          textTransform: 'uppercase', 
          letterSpacing: '0.2em', 
          fontSize: '0.8rem', 
          color: 'var(--color-accent)', 
          marginBottom: '2rem' 
        }}>
          Nuestra Esencia
        </p>
        <h2 style={{ 
          fontSize: '3rem', 
          maxWidth: '800px', 
          margin: '0 auto', 
          lineHeight: '1.4', 
          color: 'var(--color-primary)',
          fontWeight: '400'
        }}>
          Diseñamos celebraciones completas, donde todo fluye sin que tengas que preocuparte por nada.
        </h2>
      </section>
      {/* Testimonios */}
<section 
  className="section" 
  style={{ 
    padding: '6rem 2rem',
    backgroundColor: 'var(--color-surface)'
  }}
>
  <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
    
    <p style={{ 
      fontFamily: 'var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      fontSize: '0.8rem',
      color: 'var(--color-accent)',
      marginBottom: '2rem'
    }}>
      Experiencias Reales
    </p>

    <h2 style={{ 
      fontSize: '2.5rem',
      fontWeight: '400',
      marginBottom: '1rem'
    }}>
      Lo que dicen quienes ya celebraron aquí
    </h2>
    
    <p style={{
  color: 'var(--color-text-light)',
  fontWeight: '300',
  marginBottom: '4rem'
}}>
Más de 10 años organizando celebraciones en Paysandú.
</p>

    <div className="grid-3">

      {/* Testimonio 1 */}
      <div style={{
        background: '#fff',
        padding: '3rem',
        border: '1px solid rgba(0,0,0,0.05)'
      }}>
        <p style={{
          fontSize: '1rem',
          fontWeight: '300',
          color: 'var(--color-text-light)',
          marginBottom: '2rem',
          lineHeight: '1.8'
        }}>
          “¿Hola Tania como estás? Acá recuperandonos de la hermosa noche que pasamos, muchas gracias por todo. Rena brillo y eso nos lleno a nosotros de felicidad y amor!!”
        </p>

        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.1rem'
        }}>
          Renata - 28/02/2026
        </p>

        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          marginTop: '0.5rem'
        }}>
          Quince años
        </p>
      </div>


      {/* Testimonio 2 */}
      <div style={{
        background: '#fff',
        padding: '3rem',
        border: '1px solid rgba(0,0,0,0.05)'
      }}>
        <p style={{
          fontSize: '1rem',
          fontWeight: '300',
          color: 'var(--color-text-light)',
          marginBottom: '2rem',
          lineHeight: '1.8'
        }}>
          “Buenas noches! Felices de la noche tremenda que pasamos! Todos los invitados y nosotros chochos con la comida, tragos y bebida! Todos quedaron copados y agradecidos!”
        </p>

        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.1rem'
        }}>
          Lucía & Pedro - 07/02/2026
        </p>

        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          marginTop: '0.5rem'
        }}>
          Boda  ceremonia
        </p>
      </div>


      {/* Testimonio 3 */}
      <div style={{
        background: '#fff',
        padding: '3rem',
        border: '1px solid rgba(0,0,0,0.05)'
      }}>
        <p style={{
          fontSize: '1rem',
          fontWeight: '300',
          color: 'var(--color-text-light)',
          marginBottom: '2rem',
          lineHeight: '1.8'
        }}>
          “Tania hola! Aprovecho para agradecer a todo el personal. Muy lindo todo. La comida muy rica. El resultado final fue muy bueno. Salió todo muy lindo. Gracias por todo!”
        </p>

        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.1rem'
        }}>
          Clara - 14/02/2026
        </p>

        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          marginTop: '0.5rem'
        }}>
          Quince años
        </p>
      </div>

    </div>

  </div>
</section>

      {/* Spaces Collection */}
      <section id="contenido" className="section" style={{ padding: '10rem 2rem', textAlign: 'center' }}>
        <div className="grid-2">
          {/* La Toscana */}
          <Link to="/la-toscana" style={{ display: 'block', group: 'true' }} className="card">
            <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
              <img 
                  src={laToscanaImage}
                alt="La Toscana Interior" 
                style={{ 
                  height: '600px', 
                  width: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
                className="hover-scale"
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>01. Arquitectura & Celebración</p>
                <h3 style={{ fontSize: '2.2rem', fontWeight: '400' }}>La Toscana Eventos</h3>
              </div>
              <span style={{ 
                display: 'inline-block', 
                width: '40px', 
                height: '1px', 
                backgroundColor: 'var(--color-primary)', 
                marginTop: '1.5rem',
                transition: 'width 0.4s ease'
              }} className="line-indicator"></span>
            </div>
          </Link>

          {/* La Chacra */}
          <Link to="/la-chacra" style={{ display: 'block', marginTop: '10rem' }} className="card">
            <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
              <img 
                src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop" 
                alt="La Chacra Exterior" 
                style={{ 
                  height: '600px', 
                  width: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>02. El Clásico que Evoluciona</p>
                <h3 style={{ fontSize: '2.2rem', fontWeight: '400' }}>La Chacra Eventos</h3>
              </div>
              <span style={{ 
                display: 'inline-block', 
                width: '40px', 
                height: '1px', 
                backgroundColor: 'var(--color-primary)', 
                marginTop: '1.5rem'
              }}></span>
            </div>
          </Link>
        </div>
      </section>

      {/* Services Minimal List */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)', padding: '9rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '2rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '400' }}>Servicio Integral</h2>
            <p style={{ width: '50%', color: 'var(--color-text-light)', fontSize: '1rem', fontWeight: '300' }}>
              Diseñamos experiencias completas para que cada elemento de tu celebración fluya en perfecta armonía, de principio a fin.
            </p>
          </div>

          <div className="grid-3" style={{ marginTop: '2rem' }}>
            <div>
              <p style={{ color: 'var(--color-accent)', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>GASTRONOMÍA</p>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Experiencia gastronómica completa.</h4>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', fontWeight: '300' }}>Desde la recepción hasta el postre, cada etapa está pensada para acompañar la celebración.</p>
            </div>
            <div>
              <p style={{ color: 'var(--color-accent)', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>AMBIENTACIÓN</p>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Diseño Floral y Mobiliario.</h4>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', fontWeight: '300' }}>Estilismo meticuloso para transformar cada espacio.</p>
            </div>
            <div>
              <p style={{ color: 'var(--color-accent)', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>TECNOLOGÍA</p>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Producción técnica integral.</h4>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', fontWeight: '300' }}>Iluminación, sonido, pantallas y efectos que acompañan cada momento de la noche.</p>
            </div>
          </div>
          
          <div style={{ 
  marginTop: '2rem',
  display: 'flex',
  justifyContent: 'center'
}}>
  <Link to="/servicios" className="btn btn-outline">
    Explorar Servicios
  </Link>
</div>
        </div>
      </section>

      {/* Estadísticas */}
<section 
  className="section"
  style={{ 
    textAlign: "center",
    padding: "7rem 2rem",
    backgroundColor: "var(--color-surface)"
  }}
>

<p style={{
  fontSize: "0.75rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
  marginBottom: "2rem"
}}>
Nuestra Experiencia
</p>

<h2 style={{
  fontSize: "2.8rem",
  marginBottom: "4rem"
}}>
Más de una década creando celebraciones
</h2>

<div className="grid-4">

<div>
<p style={{fontSize:"2.8rem",fontFamily:"var(--font-heading)"}}>
+500
</p>
<p style={{letterSpacing:"0.1em",fontSize:"0.75rem",textTransform:"uppercase"}}>
Eventos realizados
</p>
</div>

<div>
<p style={{fontSize:"2.8rem",fontFamily:"var(--font-heading)"}}>
15
</p>
<p style={{letterSpacing:"0.1em",fontSize:"0.75rem",textTransform:"uppercase"}}>
Años de experiencia
</p>
</div>

<div>
<p style={{fontSize:"2.8rem",fontFamily:"var(--font-heading)"}}>
2
</p>
<p style={{letterSpacing:"0.1em",fontSize:"0.75rem",textTransform:"uppercase"}}>
Salones integrales
</p>
</div>

<div>
<p style={{fontSize:"2.8rem",fontFamily:"var(--font-heading)"}}>
100%
</p>
<p style={{letterSpacing:"0.1em",fontSize:"0.75rem",textTransform:"uppercase"}}>
Eventos personalizados
</p>
</div>

</div>

</section>

{/* Temporada Alta */}

<section
  className="section"
  style={{
    textAlign: "center",
    padding: "6rem 2rem"
  }}
>

<p style={{
  fontSize: "0.75rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
  marginBottom: "2rem"
}}>
Temporada Alta
</p>

<h2 style={{
  fontSize: "2.6rem",
  marginBottom: "2rem"
}}>
Las fechas más solicitadas del año
</h2>

<p style={{
  maxWidth: "600px",
  margin: "0 auto",
  color: "var(--color-text-light)",
  fontWeight: "300"
}}>
La mayor demanda de celebraciones se concentra entre agosto y diciembre, cuando comienzan las fiestas de primavera y fin de año.
Estas fechas suelen reservarse con muchos meses de anticipación, por lo que recomendamos consultar disponibilidad cuanto antes.
</p>


<div style={{
  marginTop: "3rem",
  display: "flex",
  justifyContent: "center",
  gap: "3rem",
  flexWrap: "wrap"
}}>

<span>Agosto</span>
<span>Septiembre</span>
<span>Octubre</span>
<span>Noviembre</span>
<span>Diciembre</span>

<div style={{
marginTop: '3rem',
display: 'flex',
gap: '3rem',
justifyContent: 'center',
flexWrap: 'wrap'
}}>

<div style={{
border: '1px solid rgba(0,0,0,0.08)',
padding: '1.5rem 2rem',
textAlign: 'center',
background: '#fff'
}}>
<h3 style={{
fontSize: '2rem',
fontFamily: 'var(--font-heading)',
marginBottom: '0.5rem'
}}>
2026
</h3>

<p style={{
fontSize: '0.85rem',
letterSpacing: '0.1em',
textTransform: 'uppercase',
color: 'var(--color-accent)'
}}>
75% reservado
</p>
</div>


<div style={{
border: '1px solid rgba(0,0,0,0.08)',
padding: '1.5rem 2rem',
textAlign: 'center',
background: '#fff'
}}>
<h3 style={{
fontSize: '2rem',
fontFamily: 'var(--font-heading)',
marginBottom: '0.5rem'
}}>
2027
</h3>

<p style={{
fontSize: '0.85rem',
letterSpacing: '0.1em',
textTransform: 'uppercase',
color: 'var(--color-accent)'
}}>
Agenda abierta · 50% reservado
</p>
</div>

</div>

</div>

</section>

      {/* Cómo Reservar */}
<section className="section" style={{ padding: '9rem 2rem' }}>
  <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
    
    <p style={{
      fontFamily: 'var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      fontSize: '0.8rem',
      color: 'var(--color-accent)',
      marginBottom: '2rem'
    }}>
      Cómo Reservar
    </p>

    <h2 style={{
      fontSize: '2.8rem',
      fontWeight: '400',
      marginBottom: '5rem'
    }}>
      Organizar tu evento es simple
    </h2>

    <div className="grid-4">

      {/* Paso 1 */}
      <div>
        <p style={{
          fontSize: '2rem',
          fontFamily: 'var(--font-heading)',
          marginBottom: '1rem'
        }}>
          01
        </p>

        <h4 style={{ marginBottom: '1rem' }}>
          Coordinás una visita
        </h4>

        <p style={{
          color: 'var(--color-text-light)',
          fontWeight: '300',
          fontSize: '0.95rem'
        }}>
          Conocés el salón, los espacios y todo lo que incluye el servicio integral.
        </p>
      </div>


      {/* Paso 2 */}
      <div>
        <p style={{
          fontSize: '2rem',
          fontFamily: 'var(--font-heading)',
          marginBottom: '1rem'
        }}>
          02
        </p>

        <h4 style={{ marginBottom: '1rem' }}>
          Elegís tu fecha
        </h4>

        <p style={{
          color: 'var(--color-text-light)',
          fontWeight: '300',
          fontSize: '0.95rem'
        }}>
          Reservamos el día y comenzamos a planificar tu celebración.
        </p>
      </div>


      {/* Paso 3 */}
      <div>
        <p style={{
          fontSize: '2rem',
          fontFamily: 'var(--font-heading)',
          marginBottom: '1rem'
        }}>
          03
        </p>

        <h4 style={{ marginBottom: '1rem' }}>
          Definimos los detalles
        </h4>

        <p style={{
          color: 'var(--color-text-light)',
          fontWeight: '300',
          fontSize: '0.95rem'
        }}>
          Menú, ambientación, iluminación y cada momento del evento.
        </p>
      </div>


      {/* Paso 4 */}
      <div>
        <p style={{
          fontSize: '2rem',
          fontFamily: 'var(--font-heading)',
          marginBottom: '1rem'
        }}>
          04
        </p>

        <h4 style={{ marginBottom: '1rem' }}>
          Disfrutás la celebración
        </h4>

        <p style={{
          color: 'var(--color-text-light)',
          fontWeight: '300',
          fontSize: '0.95rem'
        }}>
          Nos ocupamos de todo para que vos solo disfrutes la fiesta.
        </p>
      </div>

    </div>

    <div style={{ 
  marginTop: '4rem',
  display: 'flex',
  justifyContent: 'center',
  gap: '4rem',
  flexWrap: 'wrap'
}}>

  <div style={{ textAlign: 'center' }}>
    <p style={{
      fontSize: '1.8rem',
      fontFamily: 'var(--font-heading)'
    }}>
      100 – 350
    </p>

    <p style={{
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--color-accent)'
    }}>
      Capacidad de invitados
    </p>
  </div>

  <div style={{ textAlign: 'center' }}>
    <p style={{
      fontSize: '1.8rem',
      fontFamily: 'var(--font-heading)'
    }}>
      Financiación
    </p>

    <p style={{
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--color-accent)'
    }}>
      Planes de pago disponibles
    </p>
  </div>

</div>

<div style={{ marginTop: '3rem' }}>
  <Link to="/contacto" className="btn btn-primary">
    Consultar disponibilidad
  </Link>
</div>

  </div>
</section>

   {/* Visual Break */}
<section 
  style={{ 
    height: '70vh',
    backgroundImage: `url(${footerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
></section>

    </div>
  );
};

export default Home;


