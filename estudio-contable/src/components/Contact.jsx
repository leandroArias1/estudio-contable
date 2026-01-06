import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.send(
      'service_oyn6avp',
      'template_8xkg0kc',
      formData,
      'qLl2lePC_g6a6D1xq'
    ).then(() => {
      alert('Mensaje enviado correctamente')
      setFormData({ name: '', email: '', message: '' })
    }).catch(() => {
      alert('Error al enviar el mensaje')
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
        </form>
      </div>
    </section>
  )
}

export default Contact
