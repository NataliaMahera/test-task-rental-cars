import { useEffect, useState } from 'react';
import { getAllAdvertsThunk } from '../redux/adverts/advertsOperations';
import { LoadMoreButton } from '../components/ReUseComponents/Buttons/Buttons';
import { useDispatch } from 'react-redux';
import CatalogList from '../components/CatalogList/CatalogList';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllAdvertsThunk(currentPage));
  }, [dispatch, currentPage]);

  const onLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <CatalogList />
      <LoadMoreButton onClick={onLoadMore}>Load more</LoadMoreButton>
    </>
  );
};

export default CatalogPage;
