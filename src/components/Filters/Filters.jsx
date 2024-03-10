import { nanoid } from '@reduxjs/toolkit';
import { CAR_BRAND, PRICE_HOUR } from '../../constants/index';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/adverts/advertsSelectors';
import { FilterButton } from '../ReUseComponents/Buttons/Buttons';

const Filters = ({ setFilteredAdv }) => {
  const adverts = useSelector(selectAdverts);

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let filteredAdv = adverts;
    const { brand, price } = selectedValue;

    if (brand) {
      filteredAdv = filteredAdv.filter(
        (adv) => adv.make.toLowerCase() === brand.toLowerCase()
      );
    }

    if (price) {
      filteredAdv = filteredAdv.filter(
        (adv) => Number(adv.rentalPrice.split('$')[1]) <= price
      );
    }
    setFilteredAdv(filteredAdv);
  };

  //   const clearFilters = () => {
  //     setSelectedValue({
  //       brand: '',
  //       price: '',
  //     });
  //     setFilteredAdv(adverts);
  //   };

  return (
    <section className="container flex pt-[50px] justify-center ">
      <form className="flex gap-x-[18px] items-end" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center">
          <label
            className="text-[14px] leading-[1.29] font-medium text-label-color mb-[8px]"
            htmlFor="brand"
          >
            Car brand
          </label>
          <select
            className="cursor-pointer text-[18px] leading-[1.11] text-primary-text-color font-medium appearance-none outline-none h-[48px] w-[224px] rounded-[14px] px-[18px] bg-background-input-color"
            name="brand"
            value={selectedValue.brand}
            id="brand"
            onChange={handleChange}
          >
            <option
              className="text-[16px] leading-[1.25] text-after-desc-element font-medium"
              value="default"
            >
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
        </div>

        <div className="flex flex-col justify-center">
          <label
            className="text-[14px] leading-[1.29] font-medium text-label-color mb-[8px]"
            htmlFor="brand"
          >
            Price/ 1 hour
          </label>
          <select
            className="cursor-pointer text-[18px] leading-[1.11] text-primary-text-color font-medium outline-none h-[48px] w-[125px] rounded-[14px] px-[18px] bg-background-input-color"
            value={selectedValue.price}
            name="price"
            id="brand"
            onChange={handleChange}
          >
            <option className="rounded-[14px]" value="default">
              To $
            </option>
            {PRICE_HOUR.map((price) => {
              const id = nanoid();
              return (
                <option className="rounded-md" key={id} value={price}>
                  {price}
                </option>
              );
            })}
          </select>
        </div>
        <FilterButton type="submit">Search</FilterButton>
        {/* <FilterButton type="button" onClick={clearFilters}>
          Clear
        </FilterButton> */}
      </form>
    </section>
  );
};

export default Filters;
