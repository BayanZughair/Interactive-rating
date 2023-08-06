import React from 'react';
import starImg from '../images/illustration-thank-you.svg';
import {
  Wrapper1,
  ThankyouImg,
  Selected,
  Wrapper1H2,
  Paragraphe,
} from '../styles/ThankYou';

const ThankYou = ({ item }) => {
  return (
    <Wrapper1 data-testid="thank-you-component">
      <ThankyouImg  src={starImg}  />
      <Selected>You selected {item} out of 5</Selected>
      <Wrapper1H2>Thank you! </Wrapper1H2>
      <Paragraphe>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </Paragraphe>
    </Wrapper1>
  );
};

export default ThankYou;
