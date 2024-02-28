import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import styles from "../../pages/RegisterUser/RegisterUser.module.css";

const SuccessBox = ({sucBox, failBox, errMsg, setFailBox, setSucBox}) => {
  const green = "text-green-500";
  const red = "text-[#EC2752]";

    return ((sucBox || failBox) && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div
            className={`${styles.err_mod_box} ${
              sucBox ? green : red
            }`}
          >
            {sucBox ? (
              <IoIosCheckmarkCircle
                className={sucBox ? green : red}
                size={90}
              />
            ) : (
              <IoIosCloseCircle
                className={sucBox ? green : red}
                size={90}
              />
            )}
            <h6 className={sucBox ? green : red}>
              {sucBox ? "Success!" : "Error!"}
            </h6>
            <p className="text-slate-500">{errMsg}</p>
            <button
              onClick={() => {
                setSucBox(false);
                setFailBox(false);
              }}
              className={
                sucBox ? "bg-green-500 text-white" : "bg-[#0F172A] text-white"
              }
            >
              Okay
            </button>
          </div>
        </div>
      ));
};

export default SuccessBox;
