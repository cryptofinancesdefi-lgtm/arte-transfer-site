import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section - Inspirado no AI Studio */}
      <section className="hero container">
        <div className="reg-mark" style={{ top: '20px', left: '20px' }}></div>
        <div className="reg-mark" style={{ top: '20px', right: '20px' }}></div>
        
        <div className="hero-bg-text">CMYK</div>
        
        <div style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
          <span style={{ fontWeight: 900, color: 'var(--cyan)', fontSize: '1rem', letterSpacing: '0.1em' }}>// ESTÚDIO DE PERSONALIZAÇÃO</span>
          <h1 style={{ marginTop: '1rem', fontSize: 'clamp(4rem, 10vw, 8rem)', lineHeight: '0.85' }}>
            Sua arte,<br />
            <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--black)' }}>nossa impressão.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', margin: '3rem 0', maxWidth: '600px', fontWeight: 500 }}>
            Cores vibrantes e qualidade premium para dar vida às suas ideias. Do desejo à sua porta no caminho mais curto possível.
          </p>
          <a href="#comprar" className="btn-primary" style={{ backgroundColor: 'var(--magenta)' }}>
            Monte a Sua Agora
          </a>
        </div>
      </section>

      {/* Social Proof Section - Modelado do AI Studio */}
      <section style={{ padding: '3rem 0', borderTop: '2px solid var(--black)', borderBottom: '2px solid var(--black)', backgroundColor: 'var(--paper)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', color: 'var(--yellow)', fontSize: '1.5rem' }}>
              ★★★★★
            </div>
            <span style={{ fontWeight: 900, textTransform: 'uppercase' }}>+10.000 clientes satisfeitos</span>
          </div>
          <div style={{ width: '2px', height: '40px', backgroundColor: 'var(--black)', opacity: 0.2 }} className="hidden-mobile"></div>
          <div style={{ display: 'flex', gap: '3rem', opacity: 0.5, fontWeight: 900, fontSize: '1.5rem' }}>
            <span>VOGUE</span>
            <span style={{ letterSpacing: '0.2em' }}>FORBES</span>
            <span style={{ fontStyle: 'italic' }}>GQ</span>
          </div>
        </div>
      </section>

      {/* Flow / 3 Passos - Inspirado no AI Studio */}
      <section id="comprar" className="container" style={{ padding: '8rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2>Sem complicação.</h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.7 }}>O processo mais rápido do mercado.</p>
        </div>
        
        <div className="grid">
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--cyan)', lineHeight: 1 }}>01</div>
            <h3 style={{ margin: '1rem 0' }}>Envie sua Arte</h3>
            <p>Faça o upload do seu design ou conte com nossa equipe para ajustar os detalhes perfeitamente.</p>
          </div>
          
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--magenta)', lineHeight: 1 }}>02</div>
            <h3 style={{ margin: '1rem 0' }}>Aprovação</h3>
            <p>Calibramos as cores e preparamos seu arquivo para a impressão CMYK de alta definição.</p>
          </div>
          
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--yellow)', lineHeight: 1 }}>03</div>
            <h3 style={{ margin: '1rem 0' }}>Receba</h3>
            <p>Produção impecável, cores fiéis à sua tela e entrega expressa direto na sua porta.</p>
          </div>
        </div>
      </section>

      {/* Catálogo Original da Arte Transfer */}
      <section id="produtos" style={{ padding: '8rem 0', backgroundColor: 'var(--black)', color: 'var(--white)' }}>
        <div className="container">
          <h2 style={{ color: 'var(--white)', marginBottom: '4rem' }}>Catálogo Técnico</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ border: '1px solid #333', padding: '2rem' }}>
              <h3 style={{ color: 'var(--white)' }}>Canecas</h3>
              <p style={{ opacity: 0.7 }}>Porcelana e polímero. Resistência térmica absoluta.</p>
            </div>
            <div style={{ border: '1px solid #333', padding: '2rem' }}>
              <h3 style={{ color: 'var(--white)' }}>Vestuário</h3>
              <p style={{ opacity: 0.7 }}>Camisetas e bonés. Estamparia com toque zero.</p>
            </div>
            <div style={{ border: '1px solid #333', padding: '2rem' }}>
              <h3 style={{ color: 'var(--white)' }}>Brand Pack</h3>
              <p style={{ opacity: 0.7 }}>Sacolas e tags. A primeira impressão do seu cliente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contato" style={{ padding: '8rem 0', textAlign: 'center', borderTop: '4px solid var(--cyan)' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem' }}>Pronto para imprimir?</h2>
          <p style={{ marginBottom: '3rem', fontSize: '1.2rem' }}>Fale conosco no WhatsApp e inicie seu pedido.</p>
          <a href="https://wa.me/5511999999999" className="btn-primary" style={{ fontSize: '1.5rem', padding: '1.5rem 3rem' }}>
            Iniciar Orçamento
          </a>
        </div>
      </section>
    </div>
  );
}
