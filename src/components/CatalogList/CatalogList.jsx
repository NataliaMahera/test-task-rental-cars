import { useSelector } from 'react-redux';
import CatalogItem from '../CatalogItem/CatalogItem';
import Modal from '../Modal/Modal';
import { selectIsOpenModal } from '../../redux/modal/modalSelectors';
import { nanoid } from '@reduxjs/toolkit';

const CatalogList = ({ dataCatalog }) => {
  const isOpenModal = useSelector(selectIsOpenModal);

  return (
    <section className="container pt-[50px] pb-[100px]">
      <ul className="grid md:grid-cols-2 md:gap-x-[25px] md:gap-y-[40px] lg:grid-cols-4 lg:gap-x-[29px] lg:gap-y-[50px] mx-auto">
        {dataCatalog.map((data) => {
          const id = nanoid();
          return <CatalogItem key={id} data={data} />;
        })}
      </ul>
      {isOpenModal && <Modal />}
    </section>
  );
};

export default CatalogList;
