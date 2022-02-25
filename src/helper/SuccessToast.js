import { toast } from "react-toastify";

const SuccessToast = (msg) => {
  toast.success(msg || "Process successfully complete.", {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default SuccessToast;
