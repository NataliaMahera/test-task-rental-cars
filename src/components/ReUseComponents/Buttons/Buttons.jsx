import { NavLink } from 'react-router-dom';

export const LoadMoreButton = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="transition-colors hover:text-accent-hover-color block mb-[150px] underline mx-auto text-[16px] leading-[1.5] font-medium text-accent-color"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const LinkHeaderNav = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return (
          'font-medium text-[16px] leading-[1.5] py-[15px] px-[25px] rounded-[14px]' +
          (!isActive
            ? ' text-primary-text-color'
            : ' text-accent-color transition shadow-lg shadow-primary-text-button-color/50')
        );
      }}
    >
      {children}
    </NavLink>
  );
};

export const LearnMoreButton = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="hover:shadow-lg shadow-primary-text-button-color/50 font-semibold text-[14px] leading-[1.43] mt-[28px] w-full py-[12px] rounded-[12px] bg-accent-color text-btn-text-color hover:bg-accent-hover-color focus:outline-none focus:ring transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const RentalCarButton = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="w-[168px] hover:shadow-lg shadow-primary-text-button-color/50 font-semibold text-[14px] leading-[1.43] mt-[24px] py-[12px] px-[50px] rounded-[12px] bg-accent-color text-btn-text-color hover:bg-accent-hover-color focus:outline-none focus:ring transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const SvgButton = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="hover:shadow-lg shadow-primary-text-button-color/50 bg-accent-color hover:bg-accent-hover-color focus:outline-none focus:ring transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
