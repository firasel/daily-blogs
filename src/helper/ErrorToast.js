import { toast } from "react-toastify";

const ErrorToast = (msg) => {
  toast.error(msg || "Something went wrong. Please try again.", {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default ErrorToast;
