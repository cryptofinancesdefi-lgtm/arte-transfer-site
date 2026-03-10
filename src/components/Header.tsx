import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="container">
        <Link href="/" className="logo">
          <strong style={{ fontSize: '1.5rem', color: 'var(--black)' }}>ARTE TRANSFER</strong>
        </Link>
        <ul>
          <li><Link href="/">Início</Link></li>
          <li><Link href="#produtos">Produtos</Link></li>
          <li><Link href="#sobre">Sobre</Link></li>
          <li><Link href="#contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}
