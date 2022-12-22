import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #141519;
`
export const Card = styled.div`
    gap: 20px;
    width: 360px;
    padding: 20px;
    display: flex;
    border-radius: 20px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: #1f2630;
`
export const Final = styled.div`
    gap: 20px;
    width: 360px;
    display: flex;
    border-radius: 20px;
    padding: 40px 20px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #1f2630;
`
export const Star = styled.div`
    width: 50px;
    display: flex;
    padding: 17px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: #272e37;
`
export const Icon = styled.img`
    width: 100%;
`
export const HowDidWeDo = styled.span`
    width: 100%;
    color: white;
    font-size: 1.4em;
    margin-top: 10px;
`
export const Please = styled.span`
    width: 100%;
    color: white;
    font-size: 0.9em;
    margin-bottom: 10px;
    filter: opacity(70%);
`
export const Options = styled.div`
    gap: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`
export const Alert = styled.span`
    width: 100%;
    color: white;
    font-size: 1em;
    text-align: center;
`
export const Option = styled.input`
    /* padding: 20px; */
    width: 50px;
    height: 45px;
    color: white;
    display: flex;
    cursor: pointer;
    font-size: 0.8em;
    appearance: none;
    border-radius: 50%;
    align-items: center;
    transition: .3s linear;
    justify-content: center;
    background-color: #272e38;
    :hover {
        background-color: #ff7511;
    }
    :checked {
        background-color: #7c8798;
    }
    :nth-child(1)::before {
        content: '1';
    }
    :nth-child(2)::before {
        content: '2';
    }
    :nth-child(3)::before {
        content: '3';
    }
    :nth-child(4)::before {
        content: '4';
    }
    :nth-child(5)::before {
        content: '5';
    }
`
export const Submit = styled.button`
    width: 100%;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 0.9em;
    font-weight: 700;
    padding: 12px 0px;
    border-radius: 30px;
    transition: .3s linear;
    background-color: #ff7511;
    :hover {
        color: #ff7511;
        background-color: white;
    }
`
export const Illustration = styled.img`
    width: 100px;
`
export const Illustrations = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Selected = styled.span`
    color: #ff7511;
    cursor: default;
    font-size: 0.7em;
    padding: 8px 20px;
    text-align: center;
    border-radius: 30px;
    background-color: #262f38;
`
export const ThankYou = styled.span`
    color: white;
    font-size: 1.3em;
    font-weight: 700;
`
export const WeAppreciate = styled.span`
    width: 100%;
    color: white;
    font-size: 0.9em;
    text-align: center;
    margin-bottom: 10px;
    filter: opacity(70%);
`