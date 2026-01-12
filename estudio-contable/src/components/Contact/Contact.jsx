import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState({
    message: '',
    type: '' // 'success' | 'error'
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

    if (status.type === 'error') {
      setStatus({ message: '', type: '' })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)
    setStatus({ message: 'Enviando mensaje...', type: '' })

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        formData,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false)
        setStatus({
          message: 'Mensaje enviado correctamente. Te responderemos a la brevedad.',
          type: 'success'
        })
        setFormData({ name: '', email: '', message: '' })
      })
      .catch(() => {
        setLoading(false)
        setStatus({
          message: 'Ocurrió un error al enviar el mensaje. Intentá nuevamente.',
          type: 'error'
        })
      })
  }

  return (
    <section id="contact">
      <div className="container">
        <h2>Contacto</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            required
          />

          <textarea
            name="message"
            placeholder="Mensaje"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            disabled={loading}
            required
          />

          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar consulta'}
          </button>

          {status.message && (
            <p>
              {status.message}
            </p>
          )}

          <p>
            Tus datos son confidenciales y solo se utilizarán para responder tu consulta.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
