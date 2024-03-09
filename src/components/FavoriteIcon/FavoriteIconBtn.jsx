import { SvgButton } from '../ReUseComponents/Buttons/Buttons';
import sprite from '../../assets/icons/sprite.svg';

const FavoriteIcon = () => {
  return (
    <>
      <SvgButton>
        <svg className="absolute top-[38px] right-[14px] fill-none stroke-[1.5px] stroke-stroke w-[18px] h-[18px]">
          <use href={sprite + '#icon-heart'}></use>
        </svg>
      </SvgButton>
    </>
  );
};

export default FavoriteIcon;
