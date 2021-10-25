import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ShowResumeItems } from '../ShowResumeItems';
import * as C from './style';

type Props = {
    current: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const ShowResume = ({current, onMonthChange, income, expense}: Props) =>{

    const handlePrevMonth = () =>{
        let [year, month] = current.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1);
        currentDate.setMonth(currentDate.getMonth()-1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`);
    }

    const handleNextMonth = () =>{
        let [year, month] = current.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1);
        currentDate.setMonth(currentDate.getMonth()+1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`);
    }

    return(
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(current)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ShowResumeItems title="Receitas" value={income}/>
                <ShowResumeItems title="Despesas" value={expense}/>
                <ShowResumeItems title="Balanço" value={income-expense} color={(income-expense) < 0 ? 'red' : 'green'}/>
            </C.ResumeArea>
        </C.Container>
    );
}