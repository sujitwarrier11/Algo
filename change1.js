// change problem. 

// inputs 

const coins = [1,5, 10];
const target = 7;

const getMinCoins = (val, coinArr) => {
    const history = {};
    const coinObj = coinArr.reduce((acc, item) => {
        acc[item] = true;
        return acc;
    }, {});
  for(let i=1;i <= val+1; i++) {
      if (coinObj[i]) {
          history[i] = 1;
          continue;
      }
      if(history[i]) {
          continue;
      }
      getChange(i, history, coinArr);

  }
    return history[val];
}

const getChange = (value, history, coinsArray) => {
    let min = Infinity;
    coinsArray.forEach(coin => { 
        const diff = value - coin;
        if (diff > 0) {
            if (!history[diff]) {
                getChange(diff, history, coinsArray);  
            }
            if (history[diff] > 0) {
                const newChange = history[diff] + 1;
            min = min > newChange ? newChange : min;
                history[value] = min;
            }
        }
    });
    if (!history[value]) {
        history[value] = -1;
    }
}

const minCoins = getMinCoins(target,coins);
console.log(minCoins);