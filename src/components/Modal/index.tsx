import { Backdrop, Fade, Modal as MuiModal } from "@mui/material";
import CloseButton from "@components/UI/buttons/Close";

import * as Styled from "./Modal.styled";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  return (
    <MuiModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
        <Styled.Container>
          {title && (
            <Styled.Head>
              {title} <CloseButton onClick={onClose} />
            </Styled.Head>
          )}
          {children}
        </Styled.Container>
      </Fade>
    </MuiModal>
  );
};

export default Modal;
