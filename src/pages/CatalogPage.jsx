import { useEffect, useState } from 'react';
import { getAllAdvertsThunk } from '../redux/adverts/advertsOperations';
import { LoadMoreButton } from '../components/ReUseComponents/Buttons/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import CatalogList from '../components/CatalogList/CatalogList';
import { selectAdverts } from '../redux/adverts/advertsSelectors';

const CatalogPage = () => {
  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllAdvertsThunk(currentPage));
  }, [dispatch, currentPage]);

  const onLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  console.log(adverts);

  return (
    <>
      <CatalogList />
      {adverts.length >= 12 && (
        <LoadMoreButton onClick={onLoadMore}>Load more</LoadMoreButton>
      )}
    </>
  );
};

export default CatalogPage;
