import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  const tools = [
    { name: 'TradieBot AI', description: 'AI assistant for quoting & invoicing', link: '#', image: 'https://via.placeholder.com/150' },
    { name: 'ToolTrack Pro', description: 'Track tools across worksites', link: '#', image: 'https://via.placeholder.com/150' },
    { name: 'SiteScan AR', description: 'Augmented reality site scanning', link: '#', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Techtools.global</h1>
        <p className={styles.subtitle}>The Best AI & Tech Tools for Tradies</p>
        <div className={styles.grid}>
          {tools.map((tool, idx) => (
            <ToolCard key={idx} {...tool} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
