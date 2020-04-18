import React from 'react';
import { Pie } from 'react-chartjs-2';



function Chart(props) {
    let expensesGroupedByCategory = Array.from(props.expensesGroupedByCategory);
    
    let categoryNames = expensesGroupedByCategory.map(data => data.category)

    let numberOfExpensesPerCategory = expensesGroupedByCategory.map(data => data.NumberOfExpensesPerCategory)

    const data = {
        labels: categoryNames,
        datasets: [{
            data: numberOfExpensesPerCategory,
            backgroundColor: [
                '#FF7F50',
                '#8A2BE2',
                '#7FFFD4',
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF7F50',
                '#8A2BE2',
                '#7FFFD4',
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };
    return (
        <div>
            <Pie height={400} width={400} data={data} />
        </div>
    );
}
export default Chart