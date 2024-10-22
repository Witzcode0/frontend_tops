import { Link, Outlet } from 'react-router-dom';
import styles from './Services.module.css'

function Services() {
  return (
    <div>
      <h2>Our Services</h2>
      <ul>
        <li className={styles.details}>
          <Link to="details/1">Service 1 Details</Link>
        </li>
        <li className={styles.details}>
          <Link to="details/2">Service 2 Details</Link>
        </li>
        <li className={styles.pricing}>
          <Link to="pricing">Service Pricing</Link>
        </li>
      </ul>
      <Outlet /> {/* Renders the nested route components here */}
    </div>
  );
}

export default Services;
