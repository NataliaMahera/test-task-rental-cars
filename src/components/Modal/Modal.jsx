import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/modalReduser';
import { RentalCarButton, SvgButton } from '../ReUseComponents/Buttons/Buttons';
import { selectModalData } from '../../redux/modal/modalSelectors';
import sprite from '../../assets/icons/sprite.svg';
import defaultImg from '../../assets/img/blue-car-speed-motion-stretch-style.jpg';

const Modal = () => {
  const modalData = useSelector(selectModalData);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };
  const {
    id,
    make,
    img,
    model,
    year,
    address,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = modalData;

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed bg-after-desc-element opacity-20 overflow-x-hidden overflow-y-auto left-0 top-0 w-full h-full z-[100]"
    >
      <div className="absolute w-[541px] bg-btn-text-color top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[24px] flex flex-col p-[40px]">
        <SvgButton onClick={() => dispatch(closeModal())}>
          <svg className="absolute top-[16px] right-[16px] stroke-[1.8px] stroke-primary-text-color w-[24px] h-[24px]">
            <use href={sprite + '#icon-close'}></use>
          </svg>
        </SvgButton>
        <img
          src={img ? img : defaultImg}
          alt="car"
          className=" h-[268px] rounded-[14px] w-full object-cover bg-after-desc-element"
        />
        <h3 className="mt-[14px] text-[18px] leading-[1.33] font-medium text-primary-text-color">
          {make} <span className="text-accent-color">{model}</span>
          <span className="text-primary-text-color">,</span> {year}
        </h3>
        <ul className="descWrap mt-[8px] w-[350px]">
          <li className="descItem">{address.split(',')[1]}</li>
          <li className="descItem">{address.split(',')[2]}</li>
          <li className="descItem">Id: {id}</li>
          <li className="descItem">Year: {year}</li>
          <li className="descItem">Type: {type}</li>
          <li className="descItem">Fuel Consumption: {fuelConsumption}</li>
          <li className="descItem">Engine Size: {engineSize}</li>
        </ul>
        <p className="font-normal mt-[14px] text-[14px] leading-[1.43]">
          {description}
        </p>
        <h4 className="font-medium mt-[24px] text-[14px] leading-[1.43]">
          Accessories and functionalities:
        </h4>
        <ul className="descWrap mt-[8px]">
          {accessories.map((item) => (
            <li className="descItem" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <ul className="descWrap">
          {functionalities.map((item) => (
            <li className="descItem" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <h4 className="font-medium mt-[24px] text-[14px] leading-[1.43]">
          Rental Conditions:
        </h4>
        <ul className="mt-[8px] flex flex-wrap gap-[8px] font-normal text-[12px] leading-[1.5] text-modal-text-color">
          <li className="block px-[7px] py-[10px] rounded-[35px] bg-background-btn-modal ">
            Minimum age:{' '}
            <span className="font-semibold text-accent-color">{25}</span>
          </li>
          <li className="px-[7px] py-[10px] rounded-[35px] bg-background-btn-modal">
            {rentalConditions.split('\n')[1]}
          </li>
          <li className="px-[7px] py-[10px] rounded-[35px] bg-background-btn-modal">
            {rentalConditions.split('\n')[2]}
          </li>
          <li className="px-[7px] py-[10px] rounded-[35px] bg-background-btn-modal">
            MileAge:{' '}
            <span className="font-semibold text-accent-color">
              {mileage.toLocaleString('en-US')}
            </span>
          </li>
          <li className="px-[7px] py-[10px] rounded-[35px] bg-background-btn-modal">
            Price:{' '}
            <span className="font-semibold text-accent-color">
              {rentalPrice.split('$')}$
            </span>
          </li>
        </ul>
        <RentalCarButton
          onClick={() => {
            window.location.href = 'tel:+380730000000';
          }}
        >
          Rental car
        </RentalCarButton>
      </div>
    </div>
  );
};

export default Modal;
