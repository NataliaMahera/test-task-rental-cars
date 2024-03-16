import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/favorites/favoritesSelectors';
import Modal from '../components/Modal/Modal';
import CatalogList from '../components/CatalogList/CatalogList';

const FavoritesPage = ({ isOpenModal }) => {
  const favoriteItems = useSelector(selectFavorites);

  return (
    <section className="pt-[50px]">
      <h1 className="container font-semibold text-primary-text-color text-[16px] leading-[1.12] pt-[7px] pb-[7px] md:text-[25px] md:leading-[1.22] md:pt-[11px] md:pb-[11px] lg:pt-[3px] lg:pb-[3px]">
        Favorite list
      </h1>
      {favoriteItems.length > 0 ? (
        <CatalogList dataCatalog={favoriteItems} />
      ) : (
        <p className="font-medium text-[25px] leading-[1.5] text-center">
          💁Add the advert to your favorite list.
        </p>
      )}

      {isOpenModal && <Modal />}
    </section>
  );
};

export default FavoritesPage;
