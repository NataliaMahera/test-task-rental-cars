import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="container py-[50px] border-after-desc-element border-t-[1px]">
      <div className="text-center">
        {' '}
        &#169; Car Rental 2024 | Developed by{' '}
        <Link
          className="font-semibold"
          to="https://github.com/NataliaMahera"
          target="_blank"
        >
          Natalia Mahera
        </Link>
      </div>
    </section>
  );
};

export default Footer;
