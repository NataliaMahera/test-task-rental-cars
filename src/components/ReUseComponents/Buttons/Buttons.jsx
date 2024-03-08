import { NavLink } from 'react-router-dom';

export const LoadMoreButton = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="block mb-[150px] underline mx-auto text-[16px] leading-[1.5] font-medium text-accent-color"
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
          'font-medium text-[16px] leading-[1.5] py-[12px] px-[16px] rounded-[14px]' +
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
