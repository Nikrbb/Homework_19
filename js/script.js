// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.
{
    const a = [`a`, `b`, `c`, `d`];
    console.log(a.toString());

    console.log(`${a[0]} + ${a[1]}, ${a[2]} + ${a[3]}`)
}

// 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. 
//    Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной

{
    const arr = [2, 5, 3, 9];
    
    let result = (arr[0] * arr[1]) + (arr[2] * arr[3]);
    
    console.log(result);
}

// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

{
    const a = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];

    const d = a.flat().find(item => item === 4);

    console.log(d);
}

// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.

{
    const a = {
        js: [`jQuery`, `Angular`],
        php: `hello`, 
        css: `world`,
    };
    
    const b = Object.entries(a).flat(2).find(item => item === `jQuery`);

    console.log(b);

    // or

    const c = a.js[0];

    console.log(c);
}

// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.

{
    const a = [];

    let strItem = `x`;

    for (let i = 0; i < 6; i++) {
        a.push(strItem);
        strItem += `x`;
    }

    console.log(a);
}

// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.

{
    const a = []
   
    for (i = 1; i <= 4; i++) {
        let d = String(i).repeat(i);
        a.push(d)
    }

    console.log(a);
}

// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. 
//    Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.
//    Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].

{
    function arrayFill (item, amount) {
        let x = [];
        for (i = 0; i < amount; i++) x.push(item);
        return x;
    }
    console.log(arrayFill(`x`, 5));
}

// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

{
    const a = [2, 3, 3, 1, 5, 6];

    let num = 1;
    let result = a.reduce(function(sum, current) {
	if (sum > 10) {
		console.log(num);
		return;
	} else {
		num++;
		return sum + current;
	}
}); 

    // or

    function howMuchToTen (arr) {
        let sum = 0;
        let index = 0;
        for (let i = 0; i <= arr.length; i++) {
            if (sum <= 10) {
                sum += arr[i];
                index++
            } else {
                return index;
            }
        }
        return `nedostatochno`
    }

    console.log(howMuchToTen(a))
}

// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

{
    const a = [1, 2, 3, 4, 5, 6, 7];

    function reverseFunc (arr) {
        let x = [];
        for (i = arr.length - 1; i >= 0 ; i--) {
            x.push(arr[i]);
        }
        return x;
    }

    console.log(reverseFunc(a))
}

// 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

{
    const a = [[1, 2, 3], [4, 5], [6]];

    let result = a.toString().split(`,`).reduce((prev, item) => +prev + +item);

    console.log(result);

}

// 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. 
//     Массив, конечно же, может быть произвольным. 

{
    const a = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

    let result = a.flat(Infinity).reduce((prev, item) => prev + item);

    console.log(result);

}