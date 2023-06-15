export type ModalContextType = {
  modalContent: React.ReactElement | null;
  showModal: (el: React.ReactElement, onClickFullScreen?: VoidFunction) => any;
  closeModal: VoidFunction;
};
