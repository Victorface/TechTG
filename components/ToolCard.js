export default function ToolCard({ name, description, link, image }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{
      border: '1px solid #ddd',
      padding: '1rem',
      borderRadius: '10px',
      textAlign: 'center',
      textDecoration: 'none',
      color: '#000',
      background: '#fff',
      transition: 'transform 0.2s, box-shadow 0.2s',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}
    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
      <img src={image} alt={name} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '6px' }} />
      <h3 style={{ marginTop: '1rem' }}>{name}</h3>
      <p>{description}</p>
    </a>
  );
}
