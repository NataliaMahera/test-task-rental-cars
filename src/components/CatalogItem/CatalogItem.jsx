import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/modal/modalReduser';
import { selectIsOpenModal } from '../../redux/modal/modalSelectors';
import { LearnMoreButton } from '../ReUseComponents/Buttons/Buttons';
import FavoriteIcon from '../FavoriteIcon/FavoriteIconBtn';
import Modal from '../Modal/Modal';
import defaultImg from '../../assets/img/blue-car-speed-motion-stretch-style.jpg';

const CatalogItem = ({ data }) => {
  const isOpenModal = useSelector(selectIsOpenModal);
  const dispatch = useDispatch();

  const {
    year,
    make,
    model,
    type,
    img,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = data;

  return (
    <li className="relative w-[268px] mx-auto">
      <FavoriteIcon />
      <img
        src={img ? img : defaultImg}
        alt="car"
        className=" hover:scale-[1.1] transition h-[268px] rounded-[14px] w-full object-cover bg-after-desc-element"
      />
      <div className="titleContainer flex justify-between mt-[14px]">
        <h3 className="text-[16px] leading-[1.5] font-medium text-primary-text-color">
          {make} <span className="text-accent-color">{model}</span>
          <span className="text-primary-text-color">,</span> {year}
        </h3>
        <div className="price">{rentalPrice}</div>
      </div>
      <ul className="descWrap mt-[9px]">
        <li className="descItem">{address.split(',')[1]}</li>
        <li className="descItem">{address.split(',')[2]}</li>
        <li className="descItem">{rentalCompany}</li>
        <li className="descItem">{type}</li>
        <li className="descItem">{make}</li>
        <li className="descItem">{mileage}</li>
        <li>{accessories[0]}</li>
      </ul>
      <LearnMoreButton onClick={() => dispatch(openModal(data))}>
        Learn more
      </LearnMoreButton>
      {isOpenModal && <Modal />}
    </li>
  );
};

export default CatalogItem;
