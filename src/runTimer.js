
function runTimer() {
    const startTime = new Date();

    document.getElementById('stopwatchPre').innerText = JSON.stringify('⏳').toString().padEnd(5, ' ') + 'ms'
    const getFirstCellValue = () => document.getElementsByTagName('td')[0].innerText;
    const firstCellInitValue = getFirstCellValue();
    const el = document.getElementById('stopwatchPre');
    const interval = setInterval(() => {
        console.log('here');
        el.innerText = JSON.stringify(new Date() - startTime).toString().padEnd(5, ' ') + 'ms'
        if (firstCellInitValue !== getFirstCellValue()) {
            clearInterval(interval);
        }
    });
}


export default runTimer;