import styled from 'styled-components';

export const Wrapper1 = styled.div`
  background-color: hsl(213, 19%, 12%);
  max-width: 90vw;
  width: 25rem;
  border-radius: 1rem;
  padding: 1.25rem 1rem 1rem 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ThankyouImg = styled.img`
  margin-bottom: 1.625rem;
`;

export const Selected = styled.p`
  background-color: hsl(213, 19%, 18%);
  border-radius: 1rem;
  padding: 0.3125rem 0.625rem;
  color: hsl(25, 97%, 53%);
  margin-bottom: 1.625rem;
  max-width: 50vw;
  font-size: 0.875rem;
  font-weight: 400;

  @media all and (min-width: 400px) {
    padding: 0.625rem 1.25rem;
  }
`;

export const Wrapper1H2 = styled.h2`
  color: hsl(0, 0%, 100%);
  margin-bottom: 1.625rem;
  font-size: 1.3125rem;
  font-weight: 700;
`;

export const Paragraphe = styled.p`
  color: hsl(217, 12%, 63%);
  font-size: 0.9375rem;
  font-weight: 400;
  margin-bottom: 1.625rem;

  @media all and (min-width: 400px) {
    font-size: 1.0156rem;
  }
`;
 