import { navLinks } from '../../constants';
import { LinkHeaderNav } from '../ReUseComponents/Buttons/Buttons';

const Header = () => {
  return (
    <header className="container flex py-[20px] justify-center items-center border-after-desc-element border-b-[1px]">
      <div></div>
      <nav className="">
        <ul className="flex gap-x-[40px]">
          {navLinks.map(({ id, href, title }) => (
            <li key={id}>
              <LinkHeaderNav to={href}>{title}</LinkHeaderNav>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
