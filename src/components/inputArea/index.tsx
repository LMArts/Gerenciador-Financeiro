import { useState } from 'react';
import * as C from './style';
import {item} from '../../types/types';
import { categories } from '../../data/categories';

type Props = {
    onAdd: (item: item) => void;
}

export const InputArea = ({onAdd}: Props) =>{

    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);
    let categoryKeys: string[] = Object.keys(categories);


    const handleEvent = () => {
        let errors: string[] = [];

        if(isNaN(new Date(dateField).getTime())) {
          errors.push('Data inválida!');
        }
        if(!categoryKeys.includes(categoryField)) {
          errors.push('Categoria inválida!');
        }
        if(titleField === '') {
          errors.push('Título vazio!');
        }
        if(valueField <= 0) {
          errors.push('Valor inválido!');
        }
    
        if(errors.length > 0) {
          alert(errors.join("\n"));
        } else {
          onAdd({
            date: new Date(dateField),
            category: categoryField,
            title: titleField,
            value: valueField
          });
          clearFields();
        }
    }

    const clearFields = () => {
        setDateField('');
        setCategoryField('');
        setTitleField('');
        setValueField(0);
      }

    return(
        <C.Container>
            <C.Form>
                <C.Label>
                    <C.Title>Data</C.Title>
                    <C.Input type='date' value={dateField} onChange={e => setDateField(e.target.value)}/>
                </C.Label>
                <C.Label>
                    <C.Title>Categoria</C.Title>
                    <C.Select value={categoryField} onChange={e=>setCategoryField(e.target.value)}>
                        <option></option>
                        {categoryKeys.map((key, index)=>(
                            <option key={index} value={key}>{categories[key].title}</option>
                        ))}            
                    </C.Select>
                </C.Label>
                <C.Label>
                    <C.Title>Título</C.Title>
                    <C.Input type='text' value={titleField} onChange={e=>setTitleField(e.target.value)}/>
                </C.Label>
                <C.Label>
                    <C.Title>Valor</C.Title>
                    <C.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))}/>
                </C.Label>
            </C.Form>
            <C.ButtonDiv>
                <C.Button onClick={handleEvent}>Adicionar</C.Button>
            </C.ButtonDiv>
        </C.Container>
    )
}