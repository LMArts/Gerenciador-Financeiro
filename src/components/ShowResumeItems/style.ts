import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    margin: 20px;
`;

export const Title = styled.h3`
    text-align: center;
    font-weight: bold;
    color: #888;
    margin-bottom: 5px;
`;

export const Value = styled.div<{color?: string}>`
    text-align: center;
    font-weight: bold;
    color: ${props => props.color ?? '#000'};
`;