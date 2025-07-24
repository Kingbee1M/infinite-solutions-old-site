// import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Modal({ visible, onClose, children }) {
  function handleOnClose(e) {
    if (e.target.id === "container") onClose();
  }

  if (!visible) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-20"
      id="container"
      onClick={handleOnClose}
    >
      <div className="flex flex-col">
        {/* <button className="flex place-self-end" onClick={onClose}>
          <IoIosCloseCircleOutline fontSize="2rem" color="white" />
        </button> */}
        <div className="bg-white max-w-4xl lg:p-5 mx-2 md:mx-auto max-h-[28rem] shadow-3xl rounded-xl overflow-y-scroll hide-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}
