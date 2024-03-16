import CatalogItem from '../CatalogItem/CatalogItem';
import Modal from '../Modal/Modal';
import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';

const CatalogList = ({ dataCatalog }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (someModalData) => {
    setIsOpenModal(true);
    setModalData(someModalData);
  };
  const closeModal = () => {
    setIsOpenModal(false);
    setModalData(null);
  };

  return (
    <section className="container pt-[50px] pb-[100px]">
      <ul className="grid gap-y-[40px] md:grid-cols-2 md:gap-x-[25px] lg:grid-cols-4 lg:gap-x-[29px] lg:gap-y-[50px] mx-auto">
        {dataCatalog.map((data) => {
          const id = nanoid();
          return <CatalogItem key={id} data={data} openModal={openModal} />;
        })}
      </ul>
      {isOpenModal && (
        <Modal
          closeModal={closeModal}
          modalData={modalData}
          isOpenModal={isOpenModal}
        />
      )}
    </section>
  );
};

export default CatalogList;
