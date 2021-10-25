import { useState, useEffect } from 'react';
import * as C from './App.styles';
import {category, item} from './types/types';
import { items } from './data/items';
import { categories } from './data/categories';
import { filterByMonth, getCurrentMonth } from './helpers/dateFilter';
import { ShowInfo } from './components/showInfo';
import { ShowResume } from './components/showResume';
import { InputArea } from './components/inputArea';

const App = () =>{

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<item[]>([]);
  const [current, setCurrent] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(()=>{
    setFilteredList(filterByMonth(list, current));
  }, [list, current]);

  const handleChangeMonth = (newMonth: string) =>{
    setCurrent(newMonth)
  }

  const handleAddItem = (item: item) =>{
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  useEffect(()=>{
    let income = 0;
    let expense = 0;
    
    for (let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expense += filteredList[i].value;
      } else {
        income += filteredList[i].value;
      }
    }
  
    setIncome(income);
    setExpense(expense);

  },[filteredList]);

  return(
    <C.Container>
      <C.Header>
        <C.Title>Gerenciador Financeiro</C.Title>
      </C.Header>
      <C.Body>
        <ShowResume current={current} onMonthChange={handleChangeMonth} income={income} expense={expense}/>
        <InputArea onAdd={handleAddItem}/>
        <ShowInfo list={filteredList}/>
      </C.Body>
    </C.Container>
  )
}

export default App;