import * as C from './style';

type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ShowResumeItems = ({title, value, color}: Props) =>{
    return(
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Value color={color}>{value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</C.Value>
        </C.Container>
    );
}