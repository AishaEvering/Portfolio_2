import styles from "./imagebutton.module.scss";
import React from "react";
import styled from "styled-components";

type ImageButtonProps = {
  imageurl: string;
  onClick: () => void;
};

const StyledButton = styled.button<{ imageurl: string }>`
  background: ${({ imageurl }) => `url(${imageurl}) no-repeat center center`};
  background-size: 90%;
  border: none;
  width: 75px;
  height: 100px;
  cursor: pointer;
`;

export const ImageButton: React.FC<ImageButtonProps> = ({
  imageurl,
  onClick,
}) => {
  return (
    <div className={styles.imageButtonContainer}>
      <StyledButton
        imageurl={imageurl}
        onClick={onClick}
        className={styles.imageButton}
      />
    </div>
  );
};
