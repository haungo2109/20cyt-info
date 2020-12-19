import styles from '../styles/Home.module.css';
import Search from './search/search';

export default function Home({ Header }) {
    return (
        <div className={styles.container}>
            <Header />
            <Search />
        </div>
    );
}
