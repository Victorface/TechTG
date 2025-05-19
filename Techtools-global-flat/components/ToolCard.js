export default function ToolCard({ name, description, link, image }) {
  return (
    <a href={link} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', textAlign: 'center', textDecoration: 'none', color: '#000', background: '#fff' }}>
      <img src={image} alt={name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <h3>{name}</h3>
      <p>{description}</p>
    </a>
  );
}
