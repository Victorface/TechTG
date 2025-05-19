export default function Navbar() {
  return (
    <nav style={{ padding: '1rem 2rem', background: '#111', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo.png" alt="Techtools Logo" style={{ height: '40px', marginRight: '1rem' }} />
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Techtools.global</span>
      </div>
      <div>
        <a href="#" style={{ color: '#fff', margin: '0 1rem' }}>Home</a>
        <a href="#" style={{ color: '#fff', margin: '0 1rem' }}>Tools</a>
        <a href="#" style={{ color: '#fff', margin: '0 1rem' }}>About</a>
      </div>
    </nav>
  );
}
