function Header() {

    const handleAnchorClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }


  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">Estudio Contable García</div>

        <nav>
          <a href="#services" onClick={handleAnchorClick}>Servicios</a>
          <a href="#contact" onClick={handleAnchorClick}>Contacto</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
