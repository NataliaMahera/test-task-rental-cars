import { nanoid } from '@reduxjs/toolkit';
import { CAR_BRAND, PRICE_HOUR } from '../../constants/index';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/adverts/advertsSelectors';
import { FilterButton } from '../ReUseComponents/Buttons/Buttons';
import { FilterForm } from './FilterStyled';
import { Notify } from 'notiflix';
import { ReactComponent as ArrowSvgDown } from '../../assets/icons/chevron-down.svg';
import { ReactComponent as ArrowSvgUp } from '../../assets/icons/chevron-up.svg';

const Filters = ({ setFilteredAdv }) => {
  const adverts = useSelector(selectAdverts);
  const [focusBrand, setFokusBrand] = useState(null);
  const [focusPrice, setFokusPrice] = useState(null);
  const [selectedValue, setSelectedValue] = useState({
    brand: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedValue({
      ...selectedValue,
      [name]: value,
    });
    setFokusBrand(false);
    setFokusPrice(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let filteredAdv = adverts;
    const { brand, price } = selectedValue;

    if (brand) {
      filteredAdv = filteredAdv.filter(
        (adv) => adv.make.toLowerCase() === brand.toLowerCase()
      );
      Notify.success(`${brand} successfully finded`, {
        timeout: 1500,
      });
    }

    if (price) {
      filteredAdv = filteredAdv.filter(
        (adv) => Number(adv.rentalPrice.split('$')[1]) <= price
      );
      Notify.success(`Car brand with ${price}$ successfully finded`, {
        timeout: 1500,
      });
    }

    setFilteredAdv(filteredAdv);
  };

  const clearFilters = () => {
    setSelectedValue({
      brand: '',
      price: '',
    });
    setFilteredAdv(adverts);
    Notify.warning('You clear your filters', {
      timeout: 1500,
    });
  };

  return (
    <section className="container flex pt-[50px] justify-center ">
      <FilterForm
        className="flex gap-x-[18px] items-end"
        onSubmit={handleSubmit}
      >
        <div className="relative flex flex-col justify-center">
          <label
            className="text-[14px] leading-[1.29] font-medium text-label-color mb-[8px]"
            htmlFor="brand"
          >
            Car brand
          </label>
          <select
            className="appearance-none cursor-pointer text-[18px] leading-[1.11] text-primary-text-color font-medium outline-none h-[48px] w-[224px] rounded-[14px] px-[18px] bg-background-input-color"
            name="brand"
            value={selectedValue.brand}
            id="brand"
            onChange={handleChange}
            onFocus={() => {
              setFokusBrand(true);
            }}
            onBlur={() => {
              setFokusBrand(false);
            }}
          >
            <option className="rounded-[14px]" value="default">
              Enter the text
            </option>
            {CAR_BRAND.map((brand) => {
              const id = nanoid();
              return (
                <option className="rounded-md" key={id} value={brand}>
                  {brand}
                </option>
              );
            })}
          </select>
          {focusBrand ? (
            <ArrowSvgDown className="arrow" />
          ) : (
            <ArrowSvgUp className="arrow" />
          )}
        </div>

        <div className="relative flex flex-col justify-center">
          <label
            className="text-[14px] leading-[1.29] font-medium text-label-color mb-[8px]"
            htmlFor="brand"
          >
            Price/ 1 hour
          </label>
          <select
            className="appearance-none cursor-pointer text-[18px] leading-[1.11] text-primary-text-color font-medium outline-none h-[48px] w-[125px] rounded-[14px] px-[18px] bg-background-input-color"
            value={selectedValue.price}
            name="price"
            id="brand"
            onChange={handleChange}
            onFocus={() => {
              setFokusPrice(true);
            }}
            onBlur={() => {
              setFokusPrice(false);
            }}
          >
            <option
              className="text-[16px] leading-[1.25] text-after-desc-element rounded-[14px]"
              value="default"
            >
              To $
            </option>
            {PRICE_HOUR.map((price) => {
              const id = nanoid();
              return (
                <option
                  className="rounded-md text-[16px] leading-[1.25] text-after-desc-element"
                  key={id}
                  value={price}
                >
                  {price}
                </option>
              );
            })}
          </select>
          {focusPrice ? (
            <ArrowSvgDown className="arrow" />
          ) : (
            <ArrowSvgUp className="arrow" />
          )}
        </div>
        <FilterButton type="submit">Search</FilterButton>
        <FilterButton type="button" onClick={clearFilters}>
          Clear
        </FilterButton>
      </FilterForm>
    </section>
  );
};

export default Filters;
