import ReactDOM from "react-dom";
import type { ReactNode } from "react";

interface ModalPortalProps {
  children: ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  const domNode = document.getElementById("modal-root");
  return domNode ? ReactDOM.createPortal(children, domNode) : null;
};

export default ModalPortal;
