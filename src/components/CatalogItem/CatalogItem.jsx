import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/modal/modalReduser';
import { selectIsOpenModal } from '../../redux/modal/modalSelectors';
import HeartIconBtn from '../FavoriteIcon/FavoriteIconBtn';
import Modal from '../Modal/Modal';

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
    photoLink,
  } = data;

  return (
    <li className="cardWrap w-[268px] mx-auto">
      <div className="imgWrap rounded-[14px] h-[268px] w-full">
        <HeartIconBtn data={data} />
        <img
          src={img ? img : photoLink}
          alt="car"
          className="rounded-[14px] w-full h-full object-cover bg-after-desc-element"
        />
      </div>
      <div className="titleContainer flex justify-between mt-[14px]">
        <h3 className="text-[16px] leading-[1.5] font-medium text-primary-text-color">
          {make} <span className="text-accent-color">{model}</span>
          <span className="text-primary-text-color">,</span> {year}
        </h3>
        <div className="price">{rentalPrice}</div>
      </div>
      <ul className="descWrap  ">
        <li className="descItem">{address.split(',')[1]}</li>
        <li className="descItem">{address.split(',')[2]}</li>
        <li className="descItem">{rentalCompany}</li>
        <li className="descItem">{type}</li>
        <li className="descItem">{make}</li>
        <li className="descItem">{mileage}</li>
        <li className="descItem">{accessories[0]}</li>
      </ul>
      <button
        type="button"
        className="button"
        onClick={() => dispatch(openModal(data))}
      >
        Learn more
      </button>
      {isOpenModal && <Modal />}
    </li>
  );
};

export default CatalogItem;
