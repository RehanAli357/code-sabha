import { useState } from "react";

const OpenModalHook = () => {
  const [open, setOpen] = useState<boolean>(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return { open, openModal, closeModal };
};

export default OpenModalHook;
