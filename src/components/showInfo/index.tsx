import { item } from '../../types/types';
import { ShowInfoDetails } from '../showInfoDetails';
import * as C from './style';

type Props = {
    list: item[];
}

export const ShowInfo = ({list}: Props) => {
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHead width={100}>Data</C.TableHead>
                    <C.TableHead width={130}>Categoria</C.TableHead>
                    <C.TableHead >Título</C.TableHead>
                    <C.TableHead width={150}>Valor</C.TableHead>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                    <ShowInfoDetails key={index} item={item}/>
                ))}
            </tbody>
        </C.Table>
    );
}