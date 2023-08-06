import React from "react";
import starImg from "../images/icon-star.svg";
import {
  Wrapper, Image, Title,
  Text, Buttons, Button, SubmitButton,
} from '../styles/Rating';

const Rating = ({ changeStateSubmited, changeItem }) => {
  return (
    <Wrapper data-testid="rating-component">
      <Image src={starImg} alt="star" />
      <Title>How did we do?</Title>
      <Text>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Text>
      <Buttons>
        <Button onClick={() => changeItem(1)}>1</Button>
        <Button onClick={() => changeItem(2)}>2</Button>
        <Button onClick={() => changeItem(3)}>3</Button>
        <Button onClick={() => changeItem(4)}>4</Button>
        <Button onClick={() => changeItem(5)}>5</Button>
      </Buttons>
      <SubmitButton type="submit" onClick={changeStateSubmited}>
        submit
      </SubmitButton>
    </Wrapper>
  );
};

export default Rating;
