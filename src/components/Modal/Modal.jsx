import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/modalReduser';
import css from './Modal.module.css';

const Modal = () => {
  //   const modalData = useSelector(selectModalData);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };
  return (
    <div
      onClick={handleOverlayClick}
      className="fixed bg-background-img-gr opacity-20  overflow-x-hidden overflow-y-auto left-0 top-0  w-full h-full pt-20 z-[100]"
    >
      <div className="absolute w-[541px] h-[752px] bg-accent-color top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[24px] items-center flex flex-col py-[50px] px-[25px] md:p-[50px] ">
        <button
          className="absolute items-center flex justify-center top-[18px] right-[18px] rounded-[58px]"
          onClick={() => dispatch(closeModal())}
        >
          Close
          {/* <svg className="stroke-primary-text-color w-[24px] h-[24px] md:w-[32px] md:h-[32px] hover:stroke-primary-text-color/50">
            <use href={sprite + '#icon-cross'}></use>
          </svg> */}
        </button>
        <p className="text-[14px] leading-[1.29] md:text-[18px] md:leading-[1.33] mb-[25px] md:mb-[37px] text-center">
          Ytllo
        </p>
      </div>
    </div>
  );
};

export default Modal;
