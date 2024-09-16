document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('scatterChart').getContext('2d');
    
    const scatterChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Pontos de Dados',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Valor Horizontal'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Valor Vertical'
                    }
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

    document.getElementById('add-button').addEventListener('click', () => {
        const xValue = parseFloat(document.getElementById('x-value').value);
        const yValue = parseFloat(document.getElementById('y-value').value);

        if (!isNaN(xValue) && !isNaN(yValue)) {
            scatterChart.data.datasets[0].data.push({ x: xValue, y: yValue });
            scatterChart.update();
        }
    });
});
