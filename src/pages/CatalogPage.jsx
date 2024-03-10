import { useEffect, useState } from 'react';
import { getAllAdvertsThunk } from '../redux/adverts/advertsOperations';
import { LoadMoreButton } from '../components/ReUseComponents/Buttons/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import CatalogList from '../components/CatalogList/CatalogList';
import { selectAdverts } from '../redux/adverts/advertsSelectors';

const CatalogPage = () => {
  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(2);
  const advLength = adverts.length > 0;

  useEffect(() => {
    if (advLength) return;
    dispatch(getAllAdvertsThunk());
  }, [advLength, dispatch]);

  const onLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    dispatch(getAllAdvertsThunk(currentPage));
  };

  return (
    <section>
      <CatalogList dataCatalog={adverts} />
      {adverts.length > 0 && adverts.length % 12 === 0 && (
        <LoadMoreButton onClick={onLoadMore} />
      )}
    </section>
  );
};

export default CatalogPage;
