import { FC } from "react";
import ReactDOM from 'react-dom';

// Components
import { ModalComponent } from './ModalComponent';

export interface ModalInterface {
  children: any
  titleText: string
  handleModalClose: any
  animation: string
}

const Modal: FC<ModalInterface> = (props) => (
  ReactDOM.createPortal(
    <ModalComponent {...props} />,
    document.querySelector("#modal")!
  )
);

export { Modal }
