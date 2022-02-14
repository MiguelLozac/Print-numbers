const numbers = () => {
    for (let i = 1; i <= 100; i++) {    
       if (i % 2 !== 0 && i % 5 !== 0) console.log(i);
       if (i % 2 === 0 && i % 5 !== 0) console.log(i, 'buzz');
       if (i % 2 !== 0 && i % 5 === 0) console.log(i, 'fuzz');
       if (i % 2 === 0 && i % 5 === 0) console.log(i, 'buzz', 'fuzz');
    }
}
console.log(numbers());