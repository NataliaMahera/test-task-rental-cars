import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="fixed top-[42%] left-[48%]">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="rgba(198, 200, 202, 0.9)"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName="blocks-wrapper"
        visible={true}
      />
    </div>
  );
};

export default Loader;
