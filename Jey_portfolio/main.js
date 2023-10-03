// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

const car = {
    manufacturer: 'BMW',
    model: 'X5',
    yearRelease: 1999,
    avgSpeed: 200,
    fuelTank: 75,
    fuelСonsumption: 15,
    nameDriver: [],
    showInfo() {
        for (const key in car) {
            if(typeof car[key] !== 'function') {
                console.log(`Value of ${key} is ${car[key]}`);
            }
        }
    },
    addDriver(name) {
        this.nameDriver.push(name);
    },
    isNameDriver(name) {
        return this.nameDriver.includes(name);
    },
    getTime(distance) {
        let time = distance / this.avgSpeed;
        if(time >= 4) {
            time = time + Math.trunc(time/4);            
        } else {
            return time;
        }
        return time.toFixed(1);
    },
    getAmountFuel(distance) {
        let fuel = this.fuelTank / 100 * distance;
        return fuel;
    }
}

car.addDriver('Max');
car.addDriver('Artem');
console.log(car.isNameDriver('Alex'));
console.log(car.getTime(4000));
console.log(car.getAmountFuel(4000));
car.showInfo();


// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.


const time = {
    hours: 1,
    minutes: 2,
    seconds: 3,
    getChangesHours(n) {
        this.hours = this.hours + n;
        console.log(`Now ${this.hours}:${this.minutes}:${this.seconds}`);
    },
    getChangesMinutes(n) {
        this.minutes = this.minutes + n;
        if (this.minutes > 60) {
            this.hours = this.hours + Math.trunc(this.minutes/60);
            this.minutes = this.minutes%60;
        }
    },
    getChangesSeconds(n) {
        this.seconds = this.seconds + n;
        if(this.seconds > 60) {
            this.minutes = this.minutes + Math.trunc(this.seconds/60);
            this.seconds = this.seconds%60;
        }
        if (this.minutes > 60) {
            // this.getChangesMinutes(n);
            this.hours = this.hours + Math.trunc(this.minutes/60);
            this.minutes = this.minutes%60;
        }
    },
    showTime() {
        if(this.hours < 9) {
            this.hours = `0${this.hours}`;
        }
        if(this.minutes < 9) {
            this.minutes = `0${this.minutes}`;
        }
        if(this.seconds < 9) {
            this.seconds = `0${this.seconds}`;
        }
        console.log(`Now ${this.hours}:${this.minutes}:${this.seconds}`);
    },
}
// time.showTime();
// time.getChangesHours(3);
// time.getChangesMinutes(260);
time.getChangesSeconds(15000);
time.showTime();


// Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// Складання 2-х об'єктів-дробів.
// Віднімання 2-х об'єктів-дробів.
// Множення 2-х об'єктів-дробів.
// Ділення 2-х об'єктів-дробів.
// Скорочення об'єкта-дробу.
const fraction = {
    divisible1: 1,
    divisor1: 2,

    resultFractional1() {
        result1 = `${this.divisible1}/${this.divisor1}`;
        console.log(result1);
        return result1;
    },
    divisible2: 5,
    divisor2: 7,
    resultFractional2() {
        result2 = `${this.divisible2}/${this.divisor2}`;
        console.log(result2);
        return result2;
    },
    sum() {
        divisibleSum = (this.divisible1)* (this.divisor2) + (this.divisible2*this.divisor1);
        divisorSum = this.divisor1 * this.divisor2;
        resultSum = `${divisibleSum}/${divisorSum}`;
        console.log(`Сума ${result1} та ${result2} дорівнює ${resultSum}`);
        return resultSum;
    },
    minus() {
        divisibleMinus = (this.divisible1)* (this.divisor2) - (this.divisible2*this.divisor1);
        divisorMinus = this.divisor1 * this.divisor2;
        resultMinus = `${divisibleMinus}/${divisorMinus}`;
        console.log(`Різниця ${result1} та ${result2} дорівнює ${resultMinus}`);
        return resultMinus;
    },
    multiplication() {
        divisibleMultiplication = this.divisible1* this.divisible2;
        divisorMultiplication = this.divisor1 * this.divisor2;
        resultMultiplication = `${divisibleMultiplication}/${divisorMultiplication}`;
        console.log(`Множення ${result1} та ${result2} дорівнює ${resultMultiplication}`);
        return resultMultiplication;
    },
    divide() {
        divisibleDivide = (this.divisible1)* (this.divisor2);
        divisorDivide = this.divisor1 * this.divisible2;
        resultDivide = `${divisibleDivide}/${divisorDivide}`;
        console.log(`Ділення ${result1} на ${result2} дорівнює ${resultDivide}`);
        return resultDivide;
    },
    reduce() {

    }

}
console.log(fraction.resultFractional1(), fraction.resultFractional2());
console.log(fraction.sum());
console.log(fraction.minus());
console.log(fraction.multiplication());
console.log(fraction.divide());

// function greatestCommonDivisor() {
//   let number1 = prompt('Enter the first number');
//   let number2 = prompt('Enter the second number');
//   let a = number1;
//   let b = number2;
//   if (isNaN(number1) || isNaN(number2)) {
//     alert('Enter a numeric value');
//     greatestCommonDivisor();
//   }
//   while (a && b) {
//     a > b ? (a %= b) : (b %= a);
//   }
//   a += b;
//   alert(`The greatest common divisor of ${number1} and ${number2} is ${a}`);
// }

const arr = [1,2,3,4,5,6];
const arr1 = ['cat', 'banana', 'Apple', 'tomato', 'Cucumber', 'apple', 'orange', 'dog'];
const lowerCaseArr = arr1.map(el => el.toLowerCase());
lowerCaseArr.sort();
console.log(lowerCaseArr);

const num = [1,5,2,15,10000,16.6,-5,-1];
const sortFunction = function(a, b) {
    if(a > b) {
        return 1;
    } else if (a < b) {
        return-1;
    } else {
        return 0;
    }
}
const sortFunction1 = function(a, b) {
    return a - b;
}
// num.sort((a, b) => a - b); сортування за зростанням

// num.sort((a, b) => b - a); сортування за зменшенням
num.sort();
const reversWord = 'tomato'.split('').reverse().join('');
console.log(reversWord);
const toReverse = word => word.split('').reverse().join('');
const reversedArr = arr1.map.toReverse;
console.log(reversedArr);


const allProducts = [
    {
        name: 'banana',
        unicId: 12358,
        price: 8,
        quantity:200,
        discount: 0.03,
        isDiscount: true,
    },
    {
        name: 'cucumber',
        unicId: 1238,
        price: 18,
        quantity: 100,
        discount: 0.03,
        isDiscount: true,
    },
    {
        name: 'apple',
        unicId: 12300258,
        price: 10,
        quantity: 50,
        discount: 0.3,
        isDiscount: true,
    },
    {
        name: 'potato',
        unicId: 12336658,
        price: 84,
        quantity: 500,
        discount: 0,
        isDiscount: true,
    },
    {
        name: 'banana',
        unicId: 12358,
        price: 8,
        quantity:200,
        discount: 0.03,
        isDiscount: true,
    }
]


const result = arr.indexOf(2);
console.log(result);

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

const shoppingList = [
    {
      productName: "banana",
      quantity: 100,
      added: true,
      price: 44,
      amount: 4400
    },
    {
      productName: "cucumber",
      quantity: 50,
      added: false,
      price: 39,
      amount: 1950
    },
    {
      productName: "tomato",
      quantity: 20,
      added: true,
      price: 50,
      amount: 1000
    },
    {
      productName: "pepper",
      quantity: 25,
      added: false,
      price: 30,
      amount: 750
    },
    {
      productName: "peach",
      quantity: 10,
      added: true,
      price: 85,
      amount: 850
    },
    {
      productName: "banana",
      quantity: 100,
      added: true,
      price: 44,
      amount: 4400
    },
    {
      productName: "candy",
      quantity: 5,
      added: false,
      price: 200,
      amount: 1000
    }
  ]
  console.log(shoppingList[3].added);
  // shoppingList[added]=false;
  // console.log(shoppingList);
  // console.log()
  // console.log(productName('candy'));
  
  function sortShoppingList(name) {
    return (a, b) => a[name] > b[name] ? 1 : -1;
  }
  
  function purchaseProduct(name) {
    const buyProduct = shoppingList.map((el) => (
        el.productName === name
          ? { ...el, added: true }
          : el
      ));
      console.log(buyProduct);
      return buyProduct;
  }
  
  
    console.log(purchaseProduct("candy"));
    console.log(purchaseProduct("pepper"));
    console.log(shoppingList);
    purchaseProduct("candy");
    console.log(shoppingList);
    // console.log(shoppingList(purchaseProduct(candy)));
    // shoppingList[buyProduct].added = true;
  
    // purchaseProduct('candy');
  
    function setQuantity(quantity, id) {
      const newProd = allProducts.findIndex((el) => el.uniqId === id);
      allProducts[newProd].quantity = quantity;
    }
    // shoppingList.map((el) => el.productName) {
    //   shoppingList.added = true;
    //   console.log(shoppingList);
    // }
    // console.log(shoppingList.sort(sortShoppingList('added')));
    // console.log(shoppingList(purchaseProduct('candy')));
    // console.log(buyProduct);
  
  
//     const allProducts = [
//     {
//         name: "banana",
//         uniqId: 74638,
//         price: 8,
//         quantity: 200,
//         discount: 0.03,
//         isDiscount: true,
//       },
//       {
//         name: "cucumber",
//         uniqId: 2334,
//         price: 4,
//         quantity: 100,
//         discount: 0,
//         isDiscount: false,
//       },
//       {
//         name: "pear",
//         uniqId: 234,
//         price: 18,
//         quantity: 0,
//         discount: 0.5,
//         isDiscount: true,
//       },
//       {
//         name: "apple",
//         uniqId: 3322,
//         price: 18,
//         quantity: 2,
//         discount: 0.1,
//         isDiscount: true,
//       },
//       {
//         name: "potato",
//         uniqId: 333,
//         price: 2,
//         quantity: 2000,
//         discount: 0,
//         isDiscount: false,
//       },
//       {
//         name: "coconut",
//         uniqId: 3498,
//         price: 80,
//         quantity: 10,
//         discount: 0.1,
//         isDiscount: true,
//       },
//     ];
//     const userCart = [];
  
//     function addToCard(id, quantity) {
//       const newProd = allProducts.find((el) => el.uniqId === id);
//       if (!newProd) {
//         console.log(`det finns inte`);
//         return false;
//       }
//       if (newProd.quantity < quantity) {
//         console.log(`Du kan inte köpa det`);
//         return false;
//       }
//       userCart.push(newProd);
//       setQuantity(newProd.quantity - quantity, id);
//       // console.log(newProd);
//     }
//     addToCard(333, 10);
  
//     function setQuantity(quantity, id) {
//       const newProd = allProducts.findIndex((el) => el.uniqId === id);
//       allProducts[newProd].quantity = quantity;
//     }
  
//     addToCard(3498, 2);
//     addToCard(234, 3);
  
//     function deleteProduct(id) {
//       const deletedProduct = userCart.findIndex(el => el.id === id);
//       userCart.splice(deletedProduct, 1);
//     }
//     // deleteProduct(234);
//     function showCardProduct() {
//       const result = userCart.map(el => {
//         return {
//           name: el.name,
//           price: el.price
//         };
//       });
//       console.log(result);
//     }
//     showCardProduct();

// posts = [
//     {
//         "id": 1,
//             "text": "One",
//             "likes": "1" 
//     },
//     {
//         "id": 2,
//             "text": "Two",
//             "likes": 50 
//     },
//     {
//         "id": 3,
//             "text": "Three",
//             "likes": 7 
//     }
//     ]
//     const newPosts = posts.map((post) => (
//         post.id === 1
//           ? { ...post, text: 'other text' }
//           : post
//       ));
//       console.log(posts);
//       console.log(newPosts);