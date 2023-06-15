import React, { useCallback, useState } from 'react';
import Modal from 'src/client/components/elements/Modal/Modal';
import { ModalContextType } from './types';

export const ModalContext = React.createContext<ModalContextType>({
  modalContent: null,
  showModal: () => {},
  closeModal: () => {},
});

type P = {
  children: React.ReactNode;
};

export const ModalContextProvider = React.memo<P>(function ModalContextProvider(props) {
  const [modalContent, setModalContent] = useState<React.ReactElement | null>(null);
  const [onClickFullScreenBtn, setOnClickFullScreenBtn] = useState<VoidFunction | undefined>();
  const showModal: ModalContextType['showModal'] = useCallback((el, onClickFullScreen) => {
    setModalContent(el);
    setOnClickFullScreenBtn(() => onClickFullScreen);
  }, []);
  const closeModal: ModalContextType['closeModal'] = useCallback(() => {
    setModalContent(null);
    setOnClickFullScreenBtn(undefined);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        modalContent: modalContent,
        showModal: showModal,
        closeModal: closeModal,
      }}
    >
      {props.children}
      {modalContent ? (
        <Modal open={!!modalContent} onClose={closeModal} onClickFullScreenBtn={onClickFullScreenBtn}>
          {modalContent}
        </Modal>
      ) : null}
    </ModalContext.Provider>
  );
});
