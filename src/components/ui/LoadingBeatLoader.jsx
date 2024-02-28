import { BeatLoader } from "react-spinners";


const LoadingBeatLoader = ({isTableLoaded}) => {

    return (
        isTableLoaded && (
            <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
              <BeatLoader color={"#EC2752"} loading={isTableLoaded} size={15} />
            </div>
          )
    );
}

export default LoadingBeatLoader;
