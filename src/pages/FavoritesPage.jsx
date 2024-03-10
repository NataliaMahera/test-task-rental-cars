import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/favorites/favoritesSelectors';
import { selectIsOpenModal } from '../redux/modal/modalSelectors';
import Modal from '../components/Modal/Modal';
import CatalogList from '../components/CatalogList/CatalogList';

const FavoritesPage = () => {
  const isOpenModal = useSelector(selectIsOpenModal);
  const favoriteItems = useSelector(selectFavorites);

  return (
    <section className="container pt-[100px]">
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
