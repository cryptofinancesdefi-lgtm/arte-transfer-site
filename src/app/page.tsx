import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero container">
        <div className="reg-mark" style={{ top: '20px', left: '20px' }}></div>
        <div className="reg-mark" style={{ top: '20px', right: '20px' }}></div>
        
        <div className="hero-bg-text">PROCESS</div>
        
        <div style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <span style={{ fontWeight: 900, color: 'var(--magenta)', fontSize: '0.9rem' }}>// ARTE TRANSFER STUDIO</span>
          <h1 style={{ marginTop: '1rem' }}>Sua marca em alta definição.</h1>
          <p style={{ fontSize: '1.2rem', margin: '2rem 0', maxWidth: '600px' }}>
            Transformamos superfícies em canais de comunicação. Canecas, camisetas e embalagens personalizadas com rigor técnico e acabamento premium.
          </p>
          <a href="https://wa.me/5511999999999" className="btn-primary">
            Solicitar Orçamento
          </a>
        </div>
      </section>

      {/* Categories Section */}
      <section id="produtos" className="container" style={{ padding: '8rem 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h2>Catálogo [2026]</h2>
          <p style={{ fontWeight: 700, opacity: 0.5 }}>CMYK / TRANSFER / SUBLIMATION</p>
        </div>
        
        <div className="grid">
          <div className="card">
            <span style={{ color: 'var(--cyan)', fontWeight: 900 }}>01.</span>
            <h3>Canecas</h3>
            <p>Porcelana e polímero. Resistência térmica e fidelidade de cor absoluta.</p>
          </div>
          
          <div className="card">
            <span style={{ color: 'var(--magenta)', fontWeight: 900 }}>02.</span>
            <h3>Vestuário</h3>
            <p>Camisetas e bonés. Estamparia com toque zero e alta durabilidade de lavagem.</p>
          </div>
          
          <div className="card">
            <span style={{ color: 'var(--yellow)', fontWeight: 900 }}>03.</span>
            <h3>Brand Pack</h3>
            <p>Sacolas e tags. A primeira impressão do seu cliente elevada ao máximo.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" style={{ padding: '8rem 0', backgroundColor: 'var(--black)', color: 'var(--white)', position: 'relative' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}>
          <div style={{ gridColumn: 'span 7' }}>
            <h2 style={{ color: 'var(--white)' }}>O Rigor do Processo.</h2>
            <p style={{ fontSize: '1.2rem', marginTop: '2rem', opacity: 0.8 }}>
              Na Arte Transfer, não apenas estampamos. Nós calibramos cada cor para que sua identidade visual seja respeitada. 
              Usamos insumos de alta qualidade que garantem que o personalizado de hoje seja o mesmo daqui a anos.
            </p>
          </div>
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '1px solid #333', paddingLeft: '4rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--cyan)', marginBottom: '10px' }}></div>
              <h4 style={{ color: 'var(--white)' }}>Tecnologia</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>Equipamentos de última geração para transfer e sublimação.</p>
            </div>
            <div>
              <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--magenta)', marginBottom: '10px' }}></div>
              <h4 style={{ color: 'var(--white)' }}>Fidelidade</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>Gestão de cores CMYK para resultados vibrantes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Technical Details */}
      <section className="container" style={{ padding: '8rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem' }}>
          <div>
            <h2 style={{ fontSize: '3rem' }}>Info Técnica.</h2>
            <div className="reg-mark" style={{ position: 'relative', marginTop: '2rem', opacity: 1 }}></div>
          </div>
          <div>
            <div style={{ marginBottom: '3rem' }}>
              <h4 style={{ borderBottom: '2px solid var(--black)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Prazos e Pedidos</h4>
              <p>Produzimos desde unidades exclusivas até grandes tiragens. O prazo é calculado para garantir a secagem e cura perfeita das tintas.</p>
            </div>
            <div style={{ marginBottom: '3rem' }}>
              <h4 style={{ borderBottom: '2px solid var(--black)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Arquivos e Arte</h4>
              <p>Aceitamos PDF, AI e CDR. Nossa equipe revisa sua arte antes da produção para evitar erros de impressão.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contato" style={{ padding: '8rem 0', textAlign: 'center', borderTop: '1px solid #eee' }}>
        <div className="container">
          <h2>Vamos imprimir?</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '4rem' }}>
            <a href="https://wa.me/5511999999999" className="btn-primary">WhatsApp</a>
            <a href="mailto:contato@artetransfer.com.br" className="btn-primary" style={{ backgroundColor: 'transparent', color: 'var(--black)', border: '2px solid var(--black)', boxShadow: 'none' }}>Email</a>
          </div>
        </div>
      </section>
    </div>
  );
}
