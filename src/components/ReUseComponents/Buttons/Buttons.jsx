import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/icons/sprite.svg';

export const LoadMoreButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="transition-colors hover:text-accent-hover-color block mb-[70px] underline mx-auto text-[16px] leading-[1.5] font-medium text-accent-color"
      onClick={onClick}
    >
      Load more
    </button>
  );
};

export const LinkHeaderNav = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return (
          'font-normal md:font-semibold text-[14px} md:text-[16px] leading-[1.5] py-[7px] px-[6px] md:py-[15px] md:px-[25px] rounded-[14px]' +
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
      className="hover:shadow-lg shadow-primary-text-button-color/50 font-semibold text-[14px] leading-[1.43] mt-[28px] w-full py-[12px] rounded-[12px] bg-accent-color text-btn-text-color hover:bg-accent-hover-color transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const CloseModalButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="absolute top-[16px] right-[16px]"
      onClick={onClick}
    >
      <svg className="stroke-[1.8px] stroke-primary-text-color w-[24px] h-[24px]">
        <use href={sprite + '#icon-close'}></use>
      </svg>
    </button>
  );
};

export const ToggleFavoritesButton = ({ onClick, id }) => {
  return (
    <button
      type="button"
      className="ease-in-out duration-100 hover:scale-[1.035] hover:contrast-[0.9] absolute top-[14px] right-[14px] cursor-pointer "
      onClick={onClick}
      id={id}
    >
      <svg className="ease-in-out duration-100 hover:scale-[1.035] hover:contrast-[0.9] fill-none stroke-[1.5px] stroke-stroke-color w-[18px] h-[18px]">
        <use href={sprite + '#icon-heart'}></use>
      </svg>
    </button>
  );
};

export const ToggleFavoritesDeleteButton = ({ onClick, id }) => {
  return (
    <button
      type="button"
      className="ease-in-out duration-100 hover:scale-[1.035] hover:contrast-[0.9] absolute cursor-pointer top-[14px] right-[14px] "
      onClick={onClick}
      id={id}
    >
      <svg className="ease-in-out duration-100 hover:scale-[1.035] hover:contrast-[0.9] stroke-[1.5px] stroke-accent-color fill-accent-color w-[18px] h-[18px]">
        <use href={sprite + '#icon-active-heart'}></use>
      </svg>
    </button>
  );
};

export const FilterButton = ({ type, onClick, children }) => {
  return (
    <button
      className="hover:shadow-lg shadow-primary-text-button-color/50 font-semibold text-[14px] leading-[1.43] mt-[24px] py-[14px] px-[44px] rounded-[12px] bg-accent-color text-btn-text-color hover:bg-accent-hover-color focus:outline-none transition-colors"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
