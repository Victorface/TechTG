import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  const tools = [
    {
      name: 'TradieBot AI',
      description: 'AI assistant for quoting & invoicing',
      link: 'https://www.amazon.com/dp/B08N5WRWNW?tag=techtools-20',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      name: 'ToolTrack Pro',
      description: 'Track tools across worksites',
      link: 'https://www.amazon.com/dp/B09ZVGRD6J?tag=techtools-20',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      name: 'SiteScan AR',
      description: 'Augmented reality site scanning',
      link: 'https://www.amazon.com/dp/B07FZ8S74R?tag=techtools-20',
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Techtools.global</h1>
        <p className={styles.subtitle}>Top AI & Tech Tools for Tradies</p>
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
