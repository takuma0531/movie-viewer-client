import { Colors } from "@/enums/style";
import React, { useEffect, useState, MutableRefObject } from "react";
import styled from "styled-components";

interface Props {
  children: JSX.Element;
  toggleVisibility: MutableRefObject<any>;
}

export default function ModalWrapper({
  children,
  toggleVisibility,
}: Props): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    toggleVisibility.current = setIsVisible;
  }, []);

  return isVisible ? (
    <ModalWrapperContainer>
      <div className="modal-main">{children}</div>
    </ModalWrapperContainer>
  ) : (
    <div />
  );
}

const ModalWrapperContainer = styled.div`
  position: fixed;
  top: -17.2%;
  left: -30%;
  width: 100vw;
  height: 100vh;
  background: ${Colors.LIGHT_GRAY};
  z-index: 1;

  div.modal-main {
    position: fixed;
    width: 50%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
