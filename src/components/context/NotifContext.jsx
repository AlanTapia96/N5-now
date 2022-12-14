import { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NotifContext = createContext();

export default function NotifContextProvider({ children }) {
  const notify = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 400,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <NotifContext.Provider value={notify}>
      <ToastContainer />
      {children}
    </NotifContext.Provider>
  );
}
