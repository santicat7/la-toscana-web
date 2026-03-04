import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_u4imdra",
    "template_s3p5q9z",
    e.target,
    "xBRdqctcnIMqIxNKN"
  )
  .then(() => {
      alert("Consulta enviada correctamente");
      e.target.reset();
  })
  .catch((error) => {
      console.log(error);
      alert("Error al enviar el mensaje");
  });
};
    return (
        <div className="animate-fade">
            <section className="section" style={{ paddingTop: '12rem', paddingBottom: '10rem' }}>
                <div className="grid-2">
                    {/* Contact Content */}
                    <div style={{ paddingRight: '4rem' }}>
                        <p style={{
                            fontFamily: 'var(--font-body)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.25em',
                            fontSize: '0.8rem',
                            color: 'var(--color-accent)',
                            marginBottom: '2rem'
                        }}>
                            Contacto
                        </p>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '2.5rem', fontWeight: '400' }}>Empecemos a darle forma a tu evento.</h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', fontWeight: '300', lineHeight: '1.8', marginBottom: '4rem' }}>
                            Cada evento es distinto. Contanos tu idea y te guiamos en cada detalle para que todo esté claro desde el primer momento.
Coordinamos una visita y te mostramos cómo funciona nuestro servicio integral.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            <div>
                                <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--color-primary)' }}>Ubicación</h4>
                                <p style={{ color: 'var(--color-text-light)', fontWeight: '300' }}>Paysandú, Uruguay</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--color-primary)' }}>WhatsApp</h4>
                                <p style={{ color: 'var(--color-text-light)', fontWeight: '300' }}>+598 99 000 000</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--color-primary)' }}>Email</h4>
                                <p style={{ color: 'var(--color-text-light)', fontWeight: '300' }}>info@latoscanaeventosuy.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Elegant Minimal Form */}
                    <div style={{ backgroundColor: '#fff', padding: '4rem', boxShadow: '0 30px 60px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.02)' }}>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <label style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, display: 'block', marginBottom: '0.5rem' }}>Nombre Completo</label>
                                <input type="text" name="name" className="form-control-premium" placeholder="Escribe tu nombre" />
                            </div>

                            <div className="grid-2" style={{ gap: '2rem', marginBottom: '2rem' }}>
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, display: 'block', marginBottom: '0.5rem' }}>Teléfono / WhatsApp</label>
                                    <input type="tel" name="phone" className="form-control-premium" placeholder="+598..." />
                                </div>
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, display: 'block', marginBottom: '0.5rem' }}>Tipo de Evento</label>
                                    <select name="event" className="form-control-premium">
                                        <option value="">Selecciona...</option>
                                        <option value="boda">Boda</option>
                                        <option value="15anos">Mis 15 Años</option>
                                        <option value="social">Social / Intimo</option>
                                        <option value="empresarial">Corporativo</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid-2" style={{ gap: '2rem', marginBottom: '2rem' }}>
    <div className="form-group" style={{ marginBottom: 0 }}>
        <label style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, display: 'block', marginBottom: '0.5rem' }}>Fecha Estimada</label>
        <input type="date" name="date" className="form-control-premium" />
    </div>
    <div className="form-group" style={{ marginBottom: 0 }}>
        <label style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, display: 'block', marginBottom: '0.5rem' }}>Invitados aproximados</label>
        <select name="guests" className="form-control-premium">
            <option value="">Selecciona...</option>
            <option value="50-100">50 - 100</option>
            <option value="100-150">100 - 150</option>
            <option value="150-200">150 - 200</option>
            <option value="200-250">200 - 250</option>
            <option value="250-300">250 - 300</option>
            <option value="300-350">300 - 350</option>
        </select>
    </div>
</div>

<div className="form-group" style={{ marginBottom: '2rem' }}>
    <label style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, display: 'block', marginBottom: '0.5rem' }}>Salón de interés</label>
    <select name="venue" className="form-control-premium">
        <option value="">Selecciona...</option>
        <option value="toscana">La Toscana</option>
        <option value="chacra">La Chacra</option>
        <option value="ambos">Me interesan ambos</option>
    </select>
</div>

                            <div className="form-group">
                                <label style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, display: 'block', marginBottom: '0.5rem' }}>Mensaje Adicional</label>
                                <textarea name="message" className="form-control-premium" rows="4" placeholder="¿Tienes algún detalle especial en mente?"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem', padding: '20px' }}>
                                Enviar Solicitud
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <style>{`
        .form-control-premium {
          width: 100%;
          padding: 12px 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 300;
          transition: all 0.4s ease;
          color: var(--color-primary);
        }

        .form-control-premium:focus {
          outline: none;
          border-color: var(--color-accent);
          padding-left: 10px;
        }

        .form-control-premium::placeholder {
          color: rgba(0,0,0,0.2);
        }

        /* Select styling reset basic */
        select.form-control-premium {
          appearance: none;
          cursor: pointer;
        }
      `}</style>
        </div>
    );
};

export default Contact;
