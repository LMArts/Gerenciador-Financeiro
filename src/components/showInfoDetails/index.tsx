import { categories } from '../../data/categories';
import { formatDate } from '../../helpers/dateFilter';
import { item } from '../../types/types';
import * as C from './style';

type Props = {
    item: item;
}

export const ShowInfoDetails = ({item}: Props) =>{
    return(
        <C.Line>
            <C.Column>{formatDate(item.date)}</C.Column>
            <C.Column>
                <C.Categories color={categories[item.category].color}>{categories[item.category].title}</C.Categories>
            </C.Column>
            <C.Column>{item.title}</C.Column>
            <C.Column>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>{item.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</C.Value>
            </C.Column>
        </C.Line>
    );  
}

