const getBalance = (setBalance) => {
    fetch('http://192.168.1.36:3000/api/balance?user=1')
    .then(response => response.json())
    .then(data =>{
        // console.log('fetched data',data)
        const newBalance = data[0].currentBalance
        setBalance(newBalance)})
    .catch(error => console.error('error loading data',error))
}

const getRecentTransactions = (setDataList) => {
    fetch('http://192.168.1.36:3000/api/recents?user=1')
    .then(response => response.json())
    .then(data =>{
        // console.log('fetched data',data) 
        setDataList(data)})
    .catch(error => console.error('error loading data',error))
}

export default {getBalance, getRecentTransactions}