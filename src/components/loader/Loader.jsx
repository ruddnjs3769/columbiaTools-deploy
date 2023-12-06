import { RotatingLines } from "react-loader-spinner";

const Loader = ({ basic }) => {
  if (basic) {
    return (
      <div className="w-full h-full min-h-[200px] flex justify-center items-center">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="30"
          visible={true}
        />
      </div>
    );
  }
  return (
    <div className="fixed w-screen h-screen z-50">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="30"
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loader;
