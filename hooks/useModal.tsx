import { FC, useState, useEffect } from "react";

// Components
import { Modal, ModalInterface } from 'components/General/Modal/Modal';

/**
 * Used as a convenient way to control the Modal Component.
 * Simply deconstruct the 'ModalComponent' and the custom handlers
 * for 'handleModalOpen' and 'handleModalClose'.
 *
 * 'handleModalOpen' does not take any parameters. It simply sets the modal state to false.
 *
 * 'handleModalClosed' executes a callback function and closes the modal at the same time.
 *
 * @param open determines if the modal is open by default on page load
 * @returns
 * @example const { ModalComponent, handleModalOpen, handleModalClosed } = useModal();
 */
const useModal = (open = false) => {

  const [modalOpen, setModalOpen] = useState<boolean>(open);

  useEffect(() => setModalOpen(open), [open]);

  const handleModalClose = (func: any) => {
    func();
    setModalOpen(false)
  };

  const handleModalOpen = (func: any) => {
    func();
    setModalOpen(true);
  };

  const ModalComponent: FC<ModalInterface> = (props) =>
    <Modal
      {...props}
    />;

  return {
    modalOpen,
    handleModalOpen,
    handleModalClose,
    ModalComponent
  }
}

export { useModal };
