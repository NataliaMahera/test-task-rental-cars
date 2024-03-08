import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectAdverts } from '../../redux/adverts/advertsSelectors';
import { nanoid } from 'nanoid';
import CatalogItem from '../CatalogItem/CatalogItem';

const CatalogList = () => {
  const adverts = useSelector(selectAdverts);
  const [currentAdv, setCurrentAdv] = useState([]);

  useEffect(() => {
    if (adverts) {
      setCurrentAdv((prevState) => [...prevState, ...adverts]);
    }
  }, [adverts]);

  return (
    <section className="container pt-[50px] pb-[100px]">
      <ul className="grid md:grid-cols-2 md:gap-x-[25px] md:gap-y-[40px] lg:grid-cols-4 lg:gap-x-[29px] lg:gap-y-[50px] mx-auto">
        {currentAdv.map((data) => (
          <CatalogItem key={nanoid()} data={data} />
        ))}
      </ul>
    </section>
  );
};

export default CatalogList;
