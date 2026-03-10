import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Arte Transfer: Personalizados de Alta Qualidade para Você e Sua Empresa</h1>
          <p>Transformamos suas ideias em produtos exclusivos. Canecas, camisetas, bonés e embalagens com estampa de alta definição.</p>
          <a href="https://wa.me/5511999999999" className="btn-primary" target="_blank" rel="noopener noreferrer">
            Solicitar Orçamento Grátis
          </a>
        </div>
      </section>

      {/* Categories Section */}
      <section id="produtos" className="categories container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nossos Produtos</h2>
        <div className="grid">
          <div className="card">
            <h3>Canecas Personalizadas</h3>
            <p>Porcelana premium e polímero. Estampas que não desbotam, resistentes a micro-ondas.</p>
            <ul style={{ margin: '1rem 0', paddingLeft: '1.2rem' }}>
              <li>Canecas de Porcelana</li>
              <li>Canecas Mágicas</li>
              <li>Canecas de Alumínio</li>
            </ul>
          </div>
          <div className="card">
            <h3>Camisetas e Bonés</h3>
            <p>Sua marca com estilo. Ideais para uniformes, eventos e uso casual com conforto.</p>
            <ul style={{ margin: '1rem 0', paddingLeft: '1.2rem' }}>
              <li>Camisetas (Transfer/Sublimação)</li>
              <li>Bonés com Logo</li>
              <li>Uniformes Corporativos</li>
            </ul>
          </div>
          <div className="card">
            <h3>Sacolas e Tags</h3>
            <p>Valorize seu produto com embalagens personalizadas que elevam o nível do seu unboxing.</p>
            <ul style={{ margin: '1rem 0', paddingLeft: '1.2rem' }}>
              <li>Sacolas de Papel e Plástico</li>
              <li>Tags para Roupas</li>
              <li>Embalagens Exclusivas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" style={{ padding: '4rem 0', backgroundColor: '#fafafa' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Por que escolher a Arte Transfer?</h2>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Unimos tecnologia de ponta em estamparia com um atendimento consultivo. 
              Nosso foco é garantir que cada peça entregue supere as expectativas de qualidade 
              e fidelidade de cores, seja para uma unidade ou para mil.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container" style={{ padding: '4rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Dúvidas Frequentes (FAQ)</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
            <h4 style={{ color: 'var(--cyan)' }}>Qual o pedido mínimo na Arte Transfer?</h4>
            <p>Atendemos desde pedidos unitários para presentes até grandes tiragens para eventos e empresas.</p>
          </div>
          <div style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
            <h4 style={{ color: 'var(--magenta)' }}>Vocês fazem a arte ou preciso enviar pronta?</h4>
            <p>Aceitamos sua arte pronta ou nossa equipe de design pode auxiliar na criação do layout ideal.</p>
          </div>
          <div style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
            <h4 style={{ color: 'var(--cyan)' }}>Qual o prazo de entrega?</h4>
            <p>O prazo varia conforme a quantidade, mas garantimos agilidade na produção e envio seguro.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>Pronto para começar seu projeto?</h2>
        <p style={{ marginBottom: '2rem' }}>Fale conosco agora mesmo e receba um orçamento personalizado.</p>
        <a href="https://wa.me/5511999999999" className="btn-primary">
          Conversar no WhatsApp
        </a>
      </section>
    </div>
  );
}
