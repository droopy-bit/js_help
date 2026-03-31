/**
 * data.js — всі теми і картки шпаргалки.
 *
 * Щоб додати нову тему — скопіюй блок { id, label, cards: [...] }
 * і встав в кінець масиву DATA перед закриваючою ];
 *
 * Щоб додати картку — скопіюй блок { title, desc, code }
 * і встав в масив cards потрібної теми.
 */

const DATA = [
  /* ─────────────────────────── ТИПИ ДАНИХ ─────────────────────────── */
  {
    id: "types",
    label: "Типи даних",
    cards: [
      {
        title: "typeof — визначення типу",
        desc: "Повертає рядок з назвою типу. Увага: null і масиви → \"object\"!",
        code: `typeof 42           // "number"
typeof "hello"      // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object"  ← особливість JS!
typeof [1,2,3]      // "object"  ← масив теж object
typeof function(){} // "function"`,
      },
      {
        title: "Boolean — перетворення",
        desc: "Falsy → false. Всe інше → true.",
        code: `// Falsy (хибні):
Boolean(0)         // false
Boolean('')        // false
Boolean(null)      // false
Boolean(undefined) // false
Boolean(NaN)       // false

// Truthy (істинні):
Boolean(1)         // true
Boolean('hello')   // true
Boolean([])        // true  ← порожній масив!
Boolean({})        // true  ← порожній об'єкт!

// Коротко:
!!0      // false
!!'hi'   // true`,
      },
      {
        title: "Конвертація в число",
        desc: "Оператор + або Number() — суворе. parseInt/parseFloat — часткове.",
        code: `// Суворе:
+'3.14'            // 3.14
+true              // 1
+false             // 0
+null              // 0
+undefined         // NaN
+'hello'           // NaN

// Часткове:
parseInt('256$')      // 256
parseInt('1A', 16)    // 26 (шістнадцяткове)
parseFloat('3.14abc') // 3.14`,
      },
      {
        title: "Конвертація в рядок",
        desc: "Кілька рівнозначних способів.",
        code: `const n = -123;

String(n)    // '-123'
n.toString() // '-123'
\`\${n}\`      // '-123'
'' + n       // '-123'`,
      },
    ],
  },

  /* ─────────────────────────── ЗМІННІ ─────────────────────────── */
  {
    id: "vars",
    label: "Змінні",
    cards: [
      {
        title: "let vs const",
        desc: "const забороняє перезапис змінної, але властивості об'єкта змінювати можна.",
        code: `let x = 1;
x = 2;              // ✓ можна

const y = 1;
y = 2;              // ✗ TypeError!

const user = { name: 'John' };
user.name = 'Mike'; // ✓ можна — об'єкт змінюється
user = {};          // ✗ TypeError — змінну не можна`,
      },
      {
        title: "Правила іменування",
        desc: "camelCase, англійська, назва пояснює зміст.",
        code: `// ✓ Добре:
let userName = '';
let isAdult = true;       // булеве: is/has/can
let hasEnoughMoney = true;
let prices = [];          // масив: множина
function calculateTotal() {}

// ✗ Погано:
let user_name = '';  // не camelCase
let data = {};       // абстрактна назва
let arr = [];        // непотрібний суфікс
let num1, num2;      // схожі назви → помилки`,
      },
    ],
  },

  /* ─────────────────────────── ОПЕРАТОРИ ─────────────────────────── */
  {
    id: "operators",
    label: "Оператори",
    cards: [
      {
        title: "Порівняння",
        desc: "Завжди використовуй === і !==, а не == і !=",
        code: `const a = 2;

a === 2  // true  (строга рівність)
a !== 2  // false (строга нерівність)
a > 2    // false
a < 2    // false
a >= 2   // true
a <= 2   // true`,
      },
      {
        title: "Логічні оператори: && || !",
        desc: "&& → перше хибне або останнє. || → перше істинне або останнє.",
        code: `// && — перше хибне або останнє:
1 && 2 && 3   // 3
1 && 0 && 3   // 0

// || — перше істинне або останнє:
0 || 1 || 2   // 1
'' || null    // null

// ! — заперечення:
!true    // false
!!0      // false (подвійне = Boolean())`,
      },
      {
        title: "|| для значення за замовчуванням",
        desc: "Якщо ліворуч falsy — береться правий операнд.",
        code: `const user = currentUser || 'Unknown';
const port = process.env.PORT || 3000;

// Ланцюжок:
console.log(0 || '' || null || 42); // 42`,
      },
      {
        title: "Пріоритет: && вищий ніж ||",
        desc: "&& як множення, || як додавання. Краще ставити дужки явно.",
        code: `1 && 2 || 3 && 4
// = (1&&2) || (3&&4) = 2 || 4 = 2

// Краще явно:
(1 && 2) || (3 && 4)`,
      },
    ],
  },

  /* ─────────────────────────── УМОВИ ─────────────────────────── */
  {
    id: "conditions",
    label: "Умови",
    cards: [
      {
        title: "if / else if / else",
        desc: "Після return у функції — else не потрібен.",
        code: `function getGreeting(age) {
  if (age >= 18) return 'Hello!';
  if (age > 7)   return 'Hi!';
  if (age > 3)   return 'Hi, kid!';
  return 'Hi, toddler!';
}`,
      },
      {
        title: "switch (true)",
        desc: "Перевіряє умови. Але краще if/else — зрозуміліше.",
        code: `function getWord(count) {
  switch (true) {
    case count <= 4:  return 'a few';
    case count < 10:  return 'several';
    default:          return 'a lot';
  }
}`,
      },
    ],
  },

  /* ─────────────────────────── ЦИКЛИ ─────────────────────────── */
  {
    id: "loops",
    label: "Цикли",
    cards: [
      {
        title: "for — з індексом",
        desc: "Для масивів і рядків, коли потрібен індекс.",
        code: `for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

// Зворотній порядок:
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}`,
      },
      {
        title: "for...of — значення",
        desc: "Для масивів і рядків. Простіше ніж for.",
        code: `for (const day of ['Mon', 'Tue', 'Wed']) {
  console.log(day);
}

// По символах рядка:
for (const char of 'hello') {
  console.log(char);
}`,
      },
      {
        title: "for...in — ключі об'єкта",
        desc: "ТІЛЬКИ для об'єктів {}.",
        code: `const user = { name: 'John', age: 25 };

for (const key in user) {
  console.log(key, user[key]);
  // name John
  // age 25
}`,
      },
      {
        title: "Скорочене присвоєння",
        desc: "++ і -- — найпоширеніші скорочення.",
        code: `age += 1;  // age = age + 1
age -= 5;  // age = age - 5
age *= 2;  // age = age * 2
age /= 2;  // age = age / 2

age++;     // age += 1  (інкремент)
age--;     // age -= 1  (декремент)`,
      },
    ],
  },

  /* ─────────────────────────── ФУНКЦІЇ ─────────────────────────── */
  {
    id: "functions",
    label: "Функції",
    cards: [
      {
        title: "Declaration vs Expression",
        desc: "Declaration — hoisting (можна викликати до оголошення). Expression — тільки після.",
        code: `// Declaration — hoisting:
greet(); // ✓ Працює!
function greet() { return 'Hi'; }

// Expression — без hoisting:
hello(); // ✗ ReferenceError!
const hello = function() { return 'Hi'; };`,
      },
      {
        title: "Стрілкові функції =>",
        desc: "Якщо одразу повертає — {} і return не потрібні.",
        code: `const sum = (a, b) => {
  return a + b;
};

// Скорочений (implicit return):
const sum = (a, b) => a + b;

// Один параметр:
const square = a => a * a;

// Без параметрів:
const hello = () => 'Hello!';`,
      },
      {
        title: "Параметри за замовчуванням",
        desc: "Якщо аргумент не передано — використовується значення за замовчуванням.",
        code: `function multiply(a, b = 3) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5);    // 15 (b = 3)

// Вираз як значення:
function add(a, b = a + 10) {
  return a + b;
}
add(3); // 39`,
      },
      {
        title: "JSDoc коментарі",
        desc: "Підказують редактору типи параметрів і return.",
        code: `/**
 * @param {number} a
 * @param {number} b
 * @returns {string}
 */
function getSumText(a, b) {
  return \`\${a} + \${b} = \${a + b}\`;
}

// Декілька типів:
/** @param {number|string} id */`,
      },
    ],
  },

  /* ─────────────────────────── РЯДКИ ─────────────────────────── */
  {
    id: "strings",
    label: "Рядки",
    cards: [
      {
        title: "Регістр",
        desc: "Повертають новий рядок, оригінал не змінюється.",
        code: `'Hello'.toUpperCase() // 'HELLO'
'Hello'.toLowerCase() // 'hello'

// Перевірка чи символ є літерою:
function isLetter(ch) {
  return ch.toLowerCase() !== ch.toUpperCase();
}`,
      },
      {
        title: "Пошук в рядку",
        desc: "includes/startsWith/endsWith → true/false. indexOf → індекс або -1.",
        code: `const s = 'Working with Strings';

s.includes('with')     // true
s.includes('With')     // false ← регістр!
s.startsWith('Work')   // true
s.endsWith('ings')     // true

s.indexOf('with')      // 8
s.indexOf('xyz')       // -1
s.lastIndexOf('i')     // 15`,
      },
      {
        title: "Регістронезалежний пошук",
        desc: "Приводимо обидва рядки до одного регістру.",
        code: `function search(text, part) {
  return text.toLowerCase().includes(
    part.toLowerCase()
  );
}

search('Misha', 'm');   // true
search('Misha', 'SHA'); // true`,
      },
      {
        title: "Заміна і розбивка",
        desc: "replaceAll замінює всі входження. split розбиває на масив.",
        code: `'a b c'.replaceAll(' ', '-') // 'a-b-c'

'one two three'.split(' ')
// ['one', 'two', 'three']

'abc'.split('')
// ['a', 'b', 'c']

['one', 'two'].join(' ') // 'one two'`,
      },
      {
        title: "Перебір символів",
        desc: "for...of — без індексу. for — з індексом.",
        code: `// Підрахунок пробілів:
let count = 0;
for (const char of 'hello world') {
  if (char === ' ') count++;
}

// Видалення пробілів:
let result = '';
for (const char of 'h e l l o') {
  if (char !== ' ') result += char;
}
// result = 'hello'

// Обернений рядок:
let rev = '';
for (const char of 'abc') {
  rev = char + rev;
}
// rev = 'cba'`,
      },
      {
        title: "Коди символів",
        desc: "Кожен символ має числовий код. Маленькі літери > великих.",
        code: `'A'.charCodeAt(0)       // 65
'a'.charCodeAt(0)       // 97
String.fromCharCode(65) // 'A'

// Порівняння з урахуванням алфавіту:
'Ö'.localeCompare('Z')  // -1 (правильно)`,
      },
    ],
  },

  /* ─────────────────────────── ЧИСЛА ─────────────────────────── */
  {
    id: "numbers",
    label: "Числа",
    cards: [
      {
        title: "Округлення (Math)",
        desc: "floor — вниз, ceil — вгору, trunc — відкидає дробову, round — стандартне.",
        code: `Math.floor(12.9)  // 12
Math.ceil(12.1)   // 13
Math.trunc(12.9)  // 12
Math.round(12.5)  // 13

// До 2 знаків:
Math.round(12.345 * 100) / 100 // 12.35

// toFixed — повертає РЯДОК!
(12.345).toFixed(2) // "12.35"`,
      },
      {
        title: "Випадкове число",
        desc: "Math.random() → від 0 (включно) до 1 (не включно).",
        code: `// Від 0 до 10 включно:
Math.floor(Math.random() * 11)

// Від min до max включно:
Math.floor(Math.random() * (max - min + 1)) + min

// Від 7 до 11:
Math.floor(Math.random() * 5) + 7`,
      },
      {
        title: "Системи числення",
        desc: "Префікси для запису чисел в різних системах.",
        code: `let dec = 123        // 10-кова
let hex = 0x7b       // 16-кова (0x...)
let bin = 0b1111011  // 2-кова  (0b...)
let oct = 0o173      // 8-кова  (0o...)

// Всі дорівнюють 123!`,
      },
      {
        title: "NaN",
        desc: "Not a Number — результат некоректних числових операцій.",
        code: `+'hello'  // NaN
0 / 0     // NaN

// NaN !== NaN — особливість!
NaN === NaN         // false

// Перевірка:
isNaN('hello')      // true
Number.isNaN(NaN)   // true (надійніше)`,
      },
    ],
  },

  /* ─────────────────────────── МАСИВИ ─────────────────────────── */
  {
    id: "arrays",
    label: "Масиви",
    cards: [
      {
        title: "Додавання і видалення",
        desc: "push/pop — кінець. unshift/shift — початок.",
        code: `const a = [1, 2, 3];

a.push(4, 5)  // [1,2,3,4,5] → повертає довжину
a.pop()       // [1,2,3,4]   → повертає 5

a.unshift(0)  // [0,1,2,3,4] → повертає довжину
a.shift()     // [1,2,3,4]   → повертає 0`,
      },
      {
        title: "Пошук в масиві",
        desc: "includes → true/false. indexOf → індекс або -1.",
        code: `const a = ['apple', 'banana', 'cherry'];

a.includes('banana') // true
a.includes('grape')  // false

a.indexOf('cherry')  // 2
a.indexOf('grape')   // -1`,
      },
      {
        title: "Отримання елементів",
        desc: "at() підтримує від'ємні індекси (з кінця).",
        code: `const a = ['Mon','Tue','Wed','Thu','Fri'];

a[0]      // 'Mon'
a.at(-1)  // 'Fri'  ← останній
a.at(-2)  // 'Thu'
a.at(10)  // undefined`,
      },
      {
        title: "split і join",
        desc: "split: рядок → масив. join: масив → рядок.",
        code: `'one two three'.split(' ')
// ['one', 'two', 'three']

'hello'.split('')
// ['h','e','l','l','o']

['JS','is','cool'].join(' ') // 'JS is cool'
['a','b','c'].join(', ')     // 'a, b, c'`,
      },
    ],
  },

  /* ─────────────────────────── ОБ'ЄКТИ ─────────────────────────── */
  {
    id: "objects",
    label: "Об'єкти",
    cards: [
      {
        title: "Створення і доступ",
        desc: "Крапка — для фіксованих ключів. Квадратні дужки — для змінних.",
        code: `const user = { name: 'John', age: 25 };

user.name    // 'John'
user['age']  // 25

const key = 'name';
user[key]    // 'John'
user.key     // undefined ← не те!`,
      },
      {
        title: "Редагування, додавання, видалення",
        desc: "",
        code: `user.age = 26;
user['city'] = 'Kyiv';
delete user.city;`,
      },
      {
        title: "Перевірка властивостей",
        desc: "in перевіряє і прототип. hasOwn — тільки власні.",
        code: `'age' in user                 // true
Object.hasOwn(user, 'age')    // true ← надійний
user.hasOwnProperty('age')    // true ← старіший`,
      },
      {
        title: "Перебір об'єкта",
        desc: "for...in, або Object.keys/values/entries.",
        code: `for (const key in user) {
  console.log(key, user[key]);
}

Object.keys(user)    // ['name', 'age']
Object.values(user)  // ['John', 25]
Object.entries(user) // [['name','John'],['age',25]]`,
      },
      {
        title: "Деструктуризація",
        desc: "Витягаємо властивості в окремі змінні.",
        code: `const { name, age } = user;

// Перейменування:
const { name: userName } = user;

// Значення за замовчуванням:
const { name = 'Unknown', age = 0 } = user;

// В параметрах функції:
function print({ name, age = 0 } = {}) {
  console.log(\`\${name} is \${age}\`);
}`,
      },
      {
        title: "Клонування",
        desc: "Поверхневе — spread. Глибоке — structuredClone.",
        code: `// Поверхневе:
const copy = { ...person };

// ⚠ Вкладені об'єкти/масиви НЕ клонуються:
const a = { marks: [1, 2] };
const b = { ...a };
b.marks.push(99);
console.log(a.marks); // [1, 2, 99] ← змінилось!

// Глибоке:
const c = structuredClone(a);
c.marks.push(99);
console.log(a.marks); // [1, 2] ← не змінилось`,
      },
      {
        title: "Посилання (references)",
        desc: "Об'єкти зберігають посилання! Дві змінні можуть вказувати на один об'єкт.",
        code: `const person = { name: 'John' };
const friend = person; // один об'єкт!

friend.name = 'Mike';
console.log(person.name); // 'Mike'

// const не захищає властивості:
const obj = { x: 1 };
obj.x = 2;  // ✓ можна
obj = {};   // ✗ TypeError`,
      },
    ],
  },

  /* ─────────────────────────── ADVANCED JS ─────────────────────────── */
  {
    id: "advanced",
    label: "Advanced JS",
    cards: [
      {
        title: "this — що це?",
        desc: "Вказує на об'єкт, який викликав функцію. Залежить від способу виклику.",
        code: `// 1. Метод об'єкта → this = об'єкт:
const user = {
  name: 'John',
  greet() { console.log(this.name); }
};
user.greet(); // 'John'

// 2. Звичайна функція → window (strict → undefined)
// 3. new → this = новий об'єкт
// 4. Стрілкова → this з оточення (немає власного!)`,
      },
      {
        title: "call, apply, bind",
        desc: "call і apply — викликають одразу. bind — повертає нову функцію. Call=Comma, Apply=Array.",
        code: `function cook(dish, style) {
  console.log(\`\${this.name}: \${dish} (\${style})\`);
}
const chef = { name: 'Gordon' };

// call — аргументи через кому:
cook.call(chef, 'pizza', 'angry');

// apply — аргументи масивом:
cook.apply(chef, ['pasta', 'loud']);

// bind — не викликає, повертає нову функцію:
const gordonCooks = cook.bind(chef);
gordonCooks('steak', 'quietly');`,
      },
      {
        title: "Прототипне успадкування",
        desc: "Кожен об'єкт має [[Prototype]]. JS шукає властивість вгору по ланцюжку до null.",
        code: `const animal = {
  eats: true,
  walk() { console.log('йде'); }
};

// Сучасний спосіб:
const rabbit = Object.create(animal);
rabbit.jumps = true;

rabbit.eats;    // true (з animal)
rabbit.walk();  // 'йде' (з animal)`,
      },
      {
        title: "Promise — стани і chaining",
        desc: "3 стани: pending → fulfilled або rejected. then/catch/finally повертають новий Promise.",
        code: `fetch('/api/user')
  .then(res => res.json())
  .then(user => {
    console.log(user.name);
    return user.id;
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    console.log('Done');
  });`,
      },
      {
        title: "async / await",
        desc: "Синтаксичний цукор над Promise. Основна помилка — послідовні await замість паралельних.",
        code: `// ✗ Повільно (послідовно):
const user  = await fetchUser();
const posts = await fetchPosts();

// ✓ Швидко (паралельно!):
const [user, posts] = await Promise.all([
  fetchUser(),
  fetchPosts()
]);

// Завжди try/catch:
try {
  const data = await fetchData();
} catch (err) {
  console.error(err);
}`,
      },
      {
        title: "Object.freeze і дескриптори",
        desc: "freeze — поверхнева незмінність. Дескриптор — повний контроль над властивістю.",
        code: `const obj = Object.freeze({ x: 1, nested: {} });
obj.x = 2;        // ігнорується
obj.nested.y = 3; // ✓ вкладені НЕ заморожені!

Object.defineProperty(obj, 'key', {
  value: 42,
  writable: false,
  enumerable: true,
  configurable: false
});`,
      },
    ],
  },
];
