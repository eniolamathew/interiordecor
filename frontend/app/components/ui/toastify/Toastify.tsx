import React from "react";
import { ToastContainer } from "react-toastify";

const Toastify = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {children}
      </>
    );
  };

export default Toastify;
