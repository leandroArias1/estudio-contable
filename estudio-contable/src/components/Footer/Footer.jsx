function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <p>Estudio Contable García</p>

      <small>
        Asesoramiento contable, impositivo y fiscal
      </small>

      <small>
        © {year} — Todos los derechos reservados
      </small>
    </footer>
  )
}

export default Footer
