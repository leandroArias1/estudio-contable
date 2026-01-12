import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Enviando mensaje...')

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        formData,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setStatus('Mensaje enviado correctamente. Te responderemos a la brevedad.')
        setFormData({ name: '', email: '', message: '' })
      })
      .catch(() => {
        setStatus('Ocurrió un error. Por favor intentá nuevamente.')
      })
  }

  return (
    <section id="contact">
      <div className="container">
        <h2>Contacto</h2>
        <p className="contact-note">
          Tus datos son confidenciales y solo se utilizarán para responder tu consulta.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Mensaje"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn">
            Enviar consulta
          </button>

          {status && <p>{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
