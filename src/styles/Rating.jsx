import styled from 'styled-components';



export const Image = styled.img`
    border-radius: 50%;
    background-color: hsl(213, 19%, 18%);
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.9375rem;
`;

export const Title = styled.h2`
    color: hsl(0, 0%, 100%);
    font-weight: 700;
    margin-bottom: 0.9375rem;
`;

export const Text = styled.p`
    color: hsl(217, 12%, 63%);
    font-weight: 400;
    font-size: 0.8438rem;
    margin-bottom: 0.9375rem;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 0.3125rem;
    margin-bottom: 2.5rem;
`;

export const Button = styled.button`
    background-color: hsl(213, 19%, 18%);
    border-radius: 50%;
    width: 2.8125rem;
    height: 2.8125rem;
    border: 2px solid hsl(213, 19%, 18%);
    color: hsl(217, 12%, 63%);
    font-weight: 700;
   
    &:focus {
        background-color: hsl(217, 12%, 63%);
        color: hsl(0, 0%, 100%);
    }
   
    &:hover {
        background-color: hsl(25, 97%, 53%);
        color: hsl(0, 0%, 100%);
        border: solid hsl(25, 97%, 53%);
    }
`;

export const SubmitButton = styled.button`
    background-color: hsl(25, 97%, 53%);
    width: 100%;
    height: 40px;
    color: hsl(0, 0%, 100%);
    font-weight: 700;
    letter-spacing: 0.125rem;
    border-radius: 1.25rem;
    border: solid hsl(25, 97%, 53%);
    cursor: pointer;
    text-transform: uppercase;
    
    &:hover {
        background-color: hsl(0, 0%, 100%);
        color: hsl(25, 97%, 53%);
        border: solid hsl(0, 0%, 100%);
    }
`;
export const Wrapper = styled.div`
    background-color: hsl(213, 19%, 12%);
    max-width: 90vw;
    width: 25rem;
    border-radius: 1rem;
    padding: 20px 16px 16px 16px;

    @media all and (min-width: 400px) {
        .title {
            font-size: 1.875rem;
        }
        .text {
            font-size: 1rem;
            margin-bottom: 1.875rem;
        }
        .wrapper > ${SubmitButton} {
            margin-bottom: 1.25rem;
        }
    }
`;

