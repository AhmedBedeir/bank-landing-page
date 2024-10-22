import styles from "./style";
import { Navbar, Hero, Stats, CardDeal, Footer } from "./components";
import Business from "./components/Business";
import Billing from "./components/Billing";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Clients from "./components/Clients";
const App = () => (
  <div className={`bg-primary w-full overflow-hidden`}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);
export default App;
