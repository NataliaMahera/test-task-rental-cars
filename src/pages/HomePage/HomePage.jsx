import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <section>
      <div className={css.imgHero}>
        <h1 className="text-btn-text-color pt-[25px] md:pt-[55px]  text-center text-[30px] leading-[1.5] font-bold pb-[30px]">
          Discover the world on wheels with our car rental service.
        </h1>
        <Link
          className=" mx-auto w-[180px] py-[12px] rounded-[12px] bg-accent-color text-btn-text-color hover:bg-accent-hover-colorpt-[20px] text-center text-[20px] leading-[1.5] font-bold"
          to="/catalog"
        >
          Go to catalog
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
