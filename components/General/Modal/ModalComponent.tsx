import { FC } from "react";

// Styles
import { ModalStyles } from './styles';

// Interfaces
import { ModalInterface } from './Modal';
import { Heading } from "../Heading";

const ModalComponent: FC<ModalInterface> = ({
  children,
  titleText,
  handleModalClose,
  animation = null
}): JSX.Element => (
  <ModalStyles
    animation={animation}
  >
    <div className='background'>
      <div className="container">
        {titleText?.length &&
          <div className="title">
            <Heading
              title={titleText}
              size='h2'
              align='left'
            />
          </div>
        }
        <div className="content">
          {children}
        </div>
        <div className="buttons">
          <button
            className="close"
            onClick={() => handleModalClose!()}
          >
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  </ModalStyles>
);

export { ModalComponent }
