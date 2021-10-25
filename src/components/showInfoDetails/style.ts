import styled from "styled-components";

export const Line = styled.tr``;
export const Column = styled.td`
    padding: 10px 0px;
`;
export const Categories = styled.div<{color: string}>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    background-color: ${props => props.color}
`;
export const Value = styled.div<{color: string}>`
    color: ${props => props.color};
    font-weight: bold;
`;