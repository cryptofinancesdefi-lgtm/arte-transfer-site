export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo-footer">ARTE TRANSFER</div>
            <p style={{ marginTop: '1rem', color: '#999' }}>
              Personalizados de alta qualidade para presentes e brindes corporativos.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--cyan)' }}>Produtos</h4>
            <ul style={{ listStyle: 'none', color: '#999' }}>
              <li>Canecas</li>
              <li>Camisetas</li>
              <li>Bonés</li>
              <li>Sacolas</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--magenta)' }}>Contato</h4>
            <p style={{ color: '#999' }}>
              Atendimento via WhatsApp<br />
              Segunda a Sábado
            </p>
          </div>
        </div>
        <div style={{ marginTop: '3rem', borderTop: '1px solid #333', paddingTop: '2rem', textAlign: 'center', fontSize: '0.8rem', color: '#666' }}>
          &copy; {new Date().getFullYear()} Arte Transfer. Todos os direitos reservados.
        </div>
      </div>
      <div className="cmyk-accent" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <div className="c-bar"></div>
        <div className="m-bar"></div>
        <div className="y-bar"></div>
        <div className="k-bar"></div>
      </div>
    </footer>
  );
}
