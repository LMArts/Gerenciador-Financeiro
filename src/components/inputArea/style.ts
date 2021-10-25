import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 85%;
    justify-content: space-between;
`;
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: 25%;
    padding: 5px;
`;
export const Title = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;
export const Input = styled.input`
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;
export const Select = styled.select`
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;
export const ButtonDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: end;
    padding: 5px; 
`;
export const Button = styled.button`
    width: 100%;
    height: 32px;
    padding: 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    background-color: lightblue;
    color: black;
    cursor: pointer;
    &:hover {
        background-color: blue;
        color: white;
    }
`;