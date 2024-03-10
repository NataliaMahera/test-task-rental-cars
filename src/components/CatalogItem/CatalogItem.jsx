import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/modal/modalReduser';
import {
  LearnMoreButton,
  ToggleFavoritesButton,
  ToggleFavoritesDeleteButton,
} from '../ReUseComponents/Buttons/Buttons';
import defaultImg from '../../assets/img/blue-car-speed-motion-stretch-style.jpg';
import {
  addToFavorites,
  deleteFromFavorites,
} from '../../redux/favorites/favoritesReducer';
import { selectFavorites } from '../../redux/favorites/favoritesSelectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const CatalogItem = ({ data }) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const handleDeleteFromFavorite = () => {
    dispatch(deleteFromFavorites(data));
    Notify.success(`${data.make} successfully REMOVED from favorite list`, {
      timeout: 1500,
    });
  };

  const handleAddToFavorite = () => {
    dispatch(addToFavorites(data));
    Notify.success(`${data.make} successfully ADDED to favorite list`, {
      timeout: 1500,
    });
  };

  const {
    id,
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
  } = data || {};

  return (
    <li className="w-[268px] mx-auto">
      <div className="relative">
        {favorites.some((item) => item.id === id) ? (
          <ToggleFavoritesDeleteButton onClick={handleDeleteFromFavorite} />
        ) : (
          <ToggleFavoritesButton onClick={handleAddToFavorite} />
        )}

        <img
          src={img ? img : defaultImg}
          alt={make}
          className="h-[268px] rounded-[14px] w-full object-cover bg-after-desc-element"
        />
      </div>
      <div className="flex justify-between mt-[14px]">
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
    </li>
  );
};

export default CatalogItem;
