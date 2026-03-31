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


/* ─────────────────────────────────────────────
   DEEP.js — глибокі пояснення для карточок
   Кожен запис: { sectionId_cardIdx: { explain, examples: [{title, code}] } }
   ───────────────────────────────────────────── */

const DEEP = {

  /* ── typeof ── */
  "types_0": {
    explain: `
      <p><b>typeof</b> — це оператор який запитує у JavaScript: "що це за тип?"</p>
      <p>Він повертає рядок з назвою типу. Використовується коли ти не знаєш що прийде в змінній — наприклад з форми або від користувача.</p>
      <p>⚠️ Дві важливі особливості які треба памʼятати:</p>
      <ul>
        <li><code>typeof null</code> → <b>"object"</b> — це баг в JS який існує з 1995 року і його не виправляють щоб не зламати старий код</li>
        <li><code>typeof []</code> → <b>"object"</b> — масиви це теж обʼєкти в JS</li>
      </ul>
    `,
    examples: [
      {
        title: "Базове використання",
        code: `console.log(typeof 42);          // "number"
console.log(typeof "hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" ← баг JS!
console.log(typeof [1, 2, 3]);    // "object" ← масив теж object
console.log(typeof function(){}); // "function"`
      },
      {
        title: "Реальний приклад — перевірка перед обчисленням",
        code: `function double(value) {
  if (typeof value !== 'number') {
    console.log('Помилка: потрібне число, отримано ' + typeof value);
    return null;
  }
  return value * 2;
}

console.log(double(5));       // 10
console.log(double('hello')); // Помилка: потрібне число, отримано string
console.log(double(null));    // Помилка: потрібне число, отримано object`
      },
      {
        title: "Реальний приклад — валідація даних форми",
        code: `function validateAge(age) {
  if (typeof age === 'string') {
    age = parseInt(age); // конвертуємо рядок в число
  }
  
  if (typeof age !== 'number' || isNaN(age)) {
    return 'Введіть число!';
  }
  
  if (age < 0 || age > 120) {
    return 'Вік має бути від 0 до 120';
  }
  
  return 'OK: вік ' + age;
}

console.log(validateAge('25'));  // OK: вік 25
console.log(validateAge('abc')); // Введіть число!
console.log(validateAge(200));   // Вік має бути від 0 до 120`
      },
      {
        title: "Як правильно перевірити масив",
        code: `const arr = [1, 2, 3];

// ✗ typeof не підходить для масиву:
console.log(typeof arr); // "object" — не дуже корисно

// ✓ Правильно — Array.isArray():
console.log(Array.isArray(arr));    // true
console.log(Array.isArray('hello')); // false
console.log(Array.isArray({}));      // false

// ✓ Або instanceof:
console.log(arr instanceof Array);  // true`
      }
    ]
  },

  /* ── Boolean ── */
  "types_1": {
    explain: `
      <p><b>Boolean</b> — це перетворення будь-якого значення в <code>true</code> або <code>false</code>.</p>
      <p>В JavaScript є лише 6 "хибних" (falsy) значень. Все інше — правда (truthy).</p>
      <p>💡 Підказка: уяви що "порожнє" або "нульове" — хибне. Все що "є" — правда.</p>
    `,
    examples: [
      {
        title: "Всі falsy значення",
        code: `// Тільки ці 6 значень дають false:
Boolean(false)     // false — сам false
Boolean(0)         // false — нуль
Boolean('')        // false — порожній рядок
Boolean(null)      // false — відсутність значення
Boolean(undefined) // false — не визначено
Boolean(NaN)       // false — не число

// Все інше — true:
Boolean(1)         // true
Boolean(-1)        // true  ← навіть від'ємне!
Boolean('0')       // true  ← рядок '0' це НЕ число 0
Boolean([])        // true  ← порожній масив!
Boolean({})        // true  ← порожній об'єкт!`
      },
      {
        title: "!! — подвійне заперечення (коротший спосіб)",
        code: `// !! це те саме що Boolean()
!!0        // false
!!''       // false
!!null     // false
!!1        // true
!!'hello'  // true
!![]       // true

// Навіщо використовують !!:
const user = { name: 'John' };
const isLoggedIn = !!user.name; // true — є імʼя = залогінений
console.log(isLoggedIn); // true`
      },
      {
        title: "Реальний приклад — перевірка введення",
        code: `function checkForm(name, age) {
  if (!name) {  // якщо name порожній рядок, null або undefined
    console.log('Введіть імʼя!');
    return false;
  }
  
  if (!age) {   // якщо age = 0, null або undefined
    console.log('Введіть вік!');
    return false;
  }
  
  console.log('Форма заповнена: ' + name + ', ' + age);
  return true;
}

checkForm('', 25);    // Введіть імʼя!
checkForm('John', 0); // Введіть вік!
checkForm('John', 25);// Форма заповнена: John, 25`
      }
    ]
  },

  /* ── Конвертація в число ── */
  "types_2": {
    explain: `
      <p>Дані від користувача (з форм, URL, localStorage) завжди приходять як <b>рядки</b>. Тому конвертація в число — одна з найчастіших операцій.</p>
      <p>Є два підходи:</p>
      <ul>
        <li><b>Суворе</b> (+, Number) — або повне число або NaN</li>
        <li><b>Часткове</b> (parseInt, parseFloat) — бере числа з початку рядка</li>
      </ul>
    `,
    examples: [
      {
        title: "Оператор + (найкоротший спосіб)",
        code: `console.log(+'42');      // 42
console.log(+'3.14');    // 3.14
console.log(+'');        // 0  ← порожній рядок = 0!
console.log(+' ');       // 0  ← пробіл теж = 0!
console.log(+'hello');   // NaN
console.log(+true);      // 1
console.log(+false);     // 0
console.log(+null);      // 0
console.log(+undefined); // NaN`
      },
      {
        title: "parseInt — для цілих чисел з рядка",
        code: `// Зупиняється на першому не-числовому символі:
parseInt('42px')      // 42  ← зручно для CSS!
parseInt('3.14')      // 3   ← відкидає дробову
parseInt('100%')      // 100
parseInt('abc')       // NaN ← рядок не починається з числа

// Другий аргумент — система числення:
parseInt('ff', 16)    // 255 ← шістнадцяткове
parseInt('11', 2)     // 3   ← двійкове`
      },
      {
        title: "Реальний приклад — дані з форми",
        code: `// Користувач вводить дані — вони завжди рядки
const inputAge = '25';      // з поля input
const inputPrice = '99.99'; // з поля input

// Конвертуємо перед обчисленням:
const age = +inputAge;
const price = parseFloat(inputPrice);

console.log(age + 1);      // 26 (не '251'!)
console.log(price * 2);    // 199.98

// Перевірка чи конвертація вдалася:
const bad = +'hello';
if (isNaN(bad)) {
  console.log('Введіть число!');
}`
      }
    ]
  },

  /* ── push/pop/shift/unshift ── */
  "arrays_0": {
    explain: `
      <p>Чотири основні методи для додавання і видалення елементів масиву.</p>
      <p>Запамʼятай просто: <b>push/pop</b> — кінець, <b>unshift/shift</b> — початок.</p>
      <p>⚠️ Всі ці методи <b>змінюють оригінальний масив</b>!</p>
    `,
    examples: [
      {
        title: "push і pop — кінець масиву",
        code: `const fruits = ['apple', 'banana'];

// push — додає в кінець, повертає нову довжину:
const newLen = fruits.push('cherry', 'date');
console.log(fruits);  // ['apple', 'banana', 'cherry', 'date']
console.log(newLen);  // 4

// pop — видаляє з кінця, повертає видалений елемент:
const removed = fruits.pop();
console.log(removed); // 'date'
console.log(fruits);  // ['apple', 'banana', 'cherry']`
      },
      {
        title: "unshift і shift — початок масиву",
        code: `const queue = ['second', 'third'];

// unshift — додає на початок:
queue.unshift('first');
console.log(queue); // ['first', 'second', 'third']

// shift — видаляє з початку:
const first = queue.shift();
console.log(first); // 'first'
console.log(queue); // ['second', 'third']`
      },
      {
        title: "Реальний приклад — черга завдань",
        code: `const tasks = [];

// Додаємо завдання в чергу:
tasks.push('Зробити каву');
tasks.push('Написати код');
tasks.push('Зробити ревʼю');

console.log(tasks);
// ['Зробити каву', 'Написати код', 'Зробити ревʼю']

// Виконуємо першим прийшов — першим вийшов (FIFO):
const currentTask = tasks.shift();
console.log('Виконую:', currentTask); // Виконую: Зробити каву
console.log('Залишилось:', tasks.length); // Залишилось: 2`
      }
    ]
  },

  /* ── Деструктуризація ── */
  "objects_4": {
    explain: `
      <p><b>Деструктуризація</b> — це короткий спосіб витягнути значення з обʼєкта або масиву в окремі змінні.</p>
      <p>Замість того щоб писати <code>user.name</code>, <code>user.age</code> — пишемо один рядок і отримуємо обидві змінні.</p>
      <p>Дуже часто використовується в React, у функціях і при роботі з API.</p>
    `,
    examples: [
      {
        title: "Базова деструктуризація",
        code: `const user = { name: 'John', age: 25, city: 'Kyiv' };

// Без деструктуризації:
const name1 = user.name;
const age1 = user.age;

// З деструктуризацією — те саме але коротше:
const { name, age } = user;

console.log(name); // 'John'
console.log(age);  // 25`
      },
      {
        title: "Перейменування і значення за замовчуванням",
        code: `const user = { name: 'John' };

// Перейменування (name → userName):
const { name: userName } = user;
console.log(userName); // 'John'

// Значення за замовчуванням (якщо властивості немає):
const { age = 18, city = 'Unknown' } = user;
console.log(age);  // 18 (немає в обʼєкті → беремо default)
console.log(city); // 'Unknown'`
      },
      {
        title: "Деструктуризація в параметрах функції",
        code: `// Без деструктуризації:
function greet1(user) {
  console.log('Привіт, ' + user.name + '! Тобі ' + user.age);
}

// З деструктуризацією — чистіше:
function greet2({ name, age }) {
  console.log('Привіт, ' + name + '! Тобі ' + age);
}

const user = { name: 'Alice', age: 30 };
greet1(user); // Привіт, Alice! Тобі 30
greet2(user); // Привіт, Alice! Тобі 30`
      },
      {
        title: "Реальний приклад — відповідь від API",
        code: `// Уяви що отримав дані від сервера:
const response = {
  status: 200,
  data: {
    user: { id: 1, name: 'Bob', email: 'bob@mail.com' }
  }
};

// Витягуємо тільки те що потрібно:
const { status, data: { user: { name, email } } } = response;

console.log(status); // 200
console.log(name);   // 'Bob'
console.log(email);  // 'bob@mail.com'`
      }
    ]
  },

  /* ── this ── */
  "advanced_0": {
    explain: `
      <p><b>this</b> — одна з найскладніших тем в JS. Простіше кажучи: this вказує на обʼєкт який "викликав" функцію.</p>
      <p>Головне правило: <b>значення this залежить від того ЯК функцію викликали</b>, а не де вона написана.</p>
      <p>Є 4 правила:</p>
      <ol>
        <li>Метод обʼєкта → this = цей обʼєкт</li>
        <li>Звичайна функція → this = window (або undefined в strict)</li>
        <li>new → this = новий обʼєкт</li>
        <li>Стрілкова функція → this береться з оточення</li>
      </ol>
    `,
    examples: [
      {
        title: "Правило 1 — метод обʼєкта",
        code: `const user = {
  name: 'John',
  greet() {
    console.log('Привіт, я ' + this.name);
    // this = user, бо user.greet() викликає user
  }
};

user.greet(); // Привіт, я John`
      },
      {
        title: "Проблема — втрата this",
        code: `const user = {
  name: 'John',
  greet() {
    console.log(this.name);
  }
};

user.greet(); // 'John' ✓

// Але якщо витягнути функцію:
const fn = user.greet;
fn(); // undefined ✗ — this більше не user!

// Рішення 1 — bind:
const boundFn = user.greet.bind(user);
boundFn(); // 'John' ✓

// Рішення 2 — стрілкова функція:
const user2 = {
  name: 'John',
  greet: () => {
    // стрілка бере this з оточення (не з user2!)
    console.log(this); // window або undefined
  }
};`
      },
      {
        title: "Стрілкова функція в методі — правильне використання",
        code: `const timer = {
  seconds: 0,
  
  start() {
    // Тут this = timer ✓
    setInterval(() => {
      // Стрілка бере this з start() → this = timer ✓
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  }
};

timer.start();
// 1, 2, 3... (кожну секунду)`
      }
    ]
  },

  /* ── async/await ── */
  "advanced_4": {
    explain: `
      <p><b>async/await</b> — це спосіб писати асинхронний код так ніби він синхронний. Читається як звичайна послідовність дій.</p>
      <p><code>async</code> перед функцією означає що вона повертає Promise.</p>
      <p><code>await</code> зупиняє виконання функції і чекає поки Promise виконається.</p>
      <p>⚠️ Головна помилка — робити запити послідовно коли можна паралельно!</p>
    `,
    examples: [
      {
        title: "Базовий async/await",
        code: `// Симулюємо запит до сервера:
function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, name: 'John', age: 25 });
    }, 1000);
  });
}

async function main() {
  console.log('Завантажуємо...');
  const user = await fetchUser(1); // чекаємо 1 сек
  console.log('Отримали:', user.name);
}

main();`
      },
      {
        title: "try/catch — обовʼязково!",
        code: `function fetchData(fail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) reject(new Error('Сервер недоступний'));
      else resolve({ data: 'OK' });
    }, 500);
  });
}

async function loadData() {
  try {
    const result = await fetchData(false);
    console.log('Успіх:', result.data);
    
    const result2 = await fetchData(true); // ← впаде
    console.log('Це не виконається');
    
  } catch (err) {
    console.log('Помилка:', err.message);
  }
}

loadData();`
      },
      {
        title: "Promise.all — паралельні запити (правильно!)",
        code: `function delay(ms, value) {
  return new Promise(resolve => 
    setTimeout(() => resolve(value), ms)
  );
}

// ✗ Повільно — 3 секунди:
async function slow() {
  const a = await delay(1000, 'user');    // 1 сек
  const b = await delay(1000, 'posts');   // ще 1 сек
  const c = await delay(1000, 'friends'); // ще 1 сек
  console.log(a, b, c);
}

// ✓ Швидко — 1 секунда:
async function fast() {
  const [a, b, c] = await Promise.all([
    delay(1000, 'user'),
    delay(1000, 'posts'),
    delay(1000, 'friends'),
  ]);
  console.log(a, b, c);
}

fast(); // user posts friends (через 1 сек)`
      }
    ]
  }
};


/* ─────────────────────────────────────────────
   COMPARE.js — порівняння методів
   ───────────────────────────────────────────── */

const COMPARE = {

  "types_0": {
    vs: "instanceof",
    items: [
      {
        label: "typeof",
        code: `typeof 42        // "number"
typeof "hello"   // "string"
typeof null      // "object" ← баг!
typeof []        // "object" ← не корисно`,
        pros: "Простий, працює для примітивів",
        cons: "null і масиви дають 'object' — не інформативно"
      },
      {
        label: "instanceof",
        code: `[] instanceof Array    // true
{} instanceof Object   // true
42 instanceof Number   // false ← не для примітивів!`,
        pros: "Точно визначає масиви і обʼєкти",
        cons: "Не працює для примітивів (числа, рядки, булеві)"
      },
      {
        label: "Array.isArray()",
        code: `Array.isArray([])      // true
Array.isArray({})      // false
Array.isArray("hello") // false`,
        pros: "Єдиний надійний спосіб перевірити масив",
        cons: "Тільки для масивів, нічого іншого"
      }
    ],
    winner: "Використовуй typeof для примітивів, Array.isArray() для масивів, instanceof для класів"
  },

  "types_1": {
    vs: "if (value)",
    items: [
      {
        label: "Boolean(value)",
        code: `Boolean(0)      // false
Boolean('')     // false
Boolean(null)   // false
Boolean([])     // true`,
        pros: "Явно і зрозуміло — видно що ти перевіряєш тип",
        cons: "Довше писати"
      },
      {
        label: "!!value",
        code: `!!0      // false
!!''     // false
!!null   // false
!![]     // true`,
        pros: "Коротко, популярно в продакшн коді",
        cons: "Новачкам незрозуміло що це означає"
      },
      {
        label: "if (value)",
        code: `if (0) {}     // не виконається
if ('') {}    // не виконається
if ([]) {}    // виконається! ← несподівано`,
        pros: "Найкоротший запис",
        cons: "Неявно — не видно що ти хочеш саме булеве значення"
      }
    ],
    winner: "В умовах використовуй if (value), для збереження булевого значення — !!"
  },

  "types_2": {
    vs: "parseInt vs + vs Number",
    items: [
      {
        label: "+ (унарний плюс)",
        code: `+'42'      // 42
+'3.14'    // 3.14
+''        // 0  ← несподівано!
+' '       // 0  ← несподівано!
+'42px'    // NaN`,
        pros: "Найкоротший запис, строге перетворення",
        cons: "Порожній рядок дає 0 а не NaN — може заплутати"
      },
      {
        label: "Number()",
        code: `Number('42')    // 42
Number('3.14')  // 3.14
Number('')      // 0  ← так само як +
Number('42px')  // NaN`,
        pros: "Явно і читабельно",
        cons: "Те саме що + але довше"
      },
      {
        label: "parseInt()",
        code: `parseInt('42px')   // 42  ← зупиняється на px
parseInt('3.14')   // 3   ← відкидає дробову
parseInt('')       // NaN ← правильніше!`,
        pros: "Частково парсить рядки типу '42px', NaN для порожнього",
        cons: "Відкидає дробову частину"
      },
      {
        label: "parseFloat()",
        code: `parseFloat('3.14abc') // 3.14
parseFloat('42px')    // 42
parseFloat('')        // NaN`,
        pros: "Зберігає дробову частину, частково парсить",
        cons: "Тільки десяткові числа"
      }
    ],
    winner: "Для форм: parseInt/parseFloat. Для суворого перетворення: Number(). + уникай — '' → 0 непередбачувано"
  },

  "arrays_0": {
    vs: "splice vs slice",
    items: [
      {
        label: "push / pop / shift / unshift",
        code: `const a = [1, 2, 3];
a.push(4);    // [1,2,3,4] — додає в кінець
a.pop();      // [1,2,3]   — видаляє з кінця
a.unshift(0); // [0,1,2,3] — додає на початок
a.shift();    // [1,2,3]   — видаляє з початку`,
        pros: "Простий і зрозумілий синтаксис",
        cons: "Тільки початок або кінець — не середина"
      },
      {
        label: "splice (видалення/вставка в середину)",
        code: `const a = [1, 2, 3, 4, 5];

// Видалити 1 елемент з індексу 2:
a.splice(2, 1);      // a = [1,2,4,5]

// Вставити в середину:
a.splice(2, 0, 99);  // a = [1,2,99,4,5]`,
        pros: "Може видаляти і вставляти в будь-якому місці",
        cons: "Змінює оригінальний масив, складніший синтаксис"
      },
      {
        label: "slice (копіювання частини)",
        code: `const a = [1, 2, 3, 4, 5];

// Не змінює оригінал!
const part = a.slice(1, 3); // [2, 3]
console.log(a); // [1,2,3,4,5] — не змінився`,
        pros: "НЕ змінює оригінал, повертає новий масив",
        cons: "Тільки читання, не може видаляти або вставляти"
      }
    ],
    winner: "push/pop для кінця, splice для середини, slice коли не хочеш змінювати оригінал"
  },

  "objects_4": {
    vs: "деструктуризація vs прямий доступ",
    items: [
      {
        label: "Прямий доступ (user.name)",
        code: `function print(user) {
  console.log(user.name + ' ' + user.age);
  console.log(user.name.toUpperCase());
  return user.name;
}`,
        pros: "Явно видно звідки береться значення",
        cons: "Доводиться повторювати user. багато разів"
      },
      {
        label: "Деструктуризація",
        code: `function print({ name, age }) {
  console.log(name + ' ' + age);
  console.log(name.toUpperCase());
  return name;
}`,
        pros: "Коротко, не треба повторювати user.",
        cons: "Не видно що name прийшов з user — менш явно"
      },
      {
        label: "Деструктуризація з alias",
        code: `const { name: userName, age: userAge = 18 } = user;

// Зручно коли є конфлікт імен:
const name = 'John'; // вже є змінна name
const { name: personName } = user; // перейменовуємо`,
        pros: "Вирішує конфлікти імен, можна задати default",
        cons: "Синтаксис може заплутати новачків"
      }
    ],
    winner: "Деструктуризація — стандарт в сучасному JS і React. Прямий доступ — коли властивостей 1-2"
  },

  "advanced_0": {
    vs: "call vs apply vs bind",
    items: [
      {
        label: "call",
        code: `function greet(msg, end) {
  console.log(msg + ', ' + this.name + end);
}
const user = { name: 'John' };

greet.call(user, 'Hello', '!');
// Hello, John!`,
        pros: "Викликає одразу, аргументи через кому",
        cons: "Не зручно коли аргументів багато"
      },
      {
        label: "apply",
        code: `greet.apply(user, ['Hello', '!']);
// Hello, John!

// Корисно коли аргументи вже в масиві:
const args = ['Hi', '...'];
greet.apply(user, args);`,
        pros: "Аргументи масивом — зручно для динамічних даних",
        cons: "Сьогодні замінений spread оператором"
      },
      {
        label: "bind",
        code: `const boundGreet = greet.bind(user);

// Викликаємо пізніше:
boundGreet('Hey', '?'); // Hey, John?

// Або в обробнику подій:
button.addEventListener('click', greet.bind(user, 'Click', '!'));`,
        pros: "Повертає нову функцію — ідеально для колбеків",
        cons: "Не викликає одразу — іноді це забувають"
      }
    ],
    winner: "call/apply — рідко використовуються. bind — часто в обробниках подій. Стрілкові функції часто замінюють bind"
  },

  "advanced_4": {
    vs: "async/await vs Promise.then()",
    items: [
      {
        label: "Promise .then().catch()",
        code: `fetch('/api/user')
  .then(res => res.json())
  .then(user => {
    console.log(user.name);
    return fetch('/api/posts/' + user.id);
  })
  .then(res => res.json())
  .then(posts => console.log(posts))
  .catch(err => console.error(err));`,
        pros: "Явний ланцюжок, добре для паралельних запитів",
        cons: "Вкладені then важко читати, складно дебажити"
      },
      {
        label: "async / await",
        code: `async function loadData() {
  try {
    const res = await fetch('/api/user');
    const user = await res.json();
    console.log(user.name);

    const res2 = await fetch('/api/posts/' + user.id);
    const posts = await res2.json();
    console.log(posts);
  } catch(err) {
    console.error(err);
  }
}`,
        pros: "Читається як синхронний код, легко дебажити",
        cons: "Легко зробити послідовні запити замість паралельних"
      }
    ],
    winner: "async/await — стандарт сьогодні. .then() — коли потрібен Promise.all або ланцюжок без залежностей"
  }
};


/* ── DEEP: Змінні ── */
const DEEP_VARS = {

  "vars_0": {
    explain: `
      <p><b>let</b> — змінна яку можна перезаписати. <b>const</b> — змінна яку не можна перезаписати (але вміст обʼєкта/масиву змінювати можна!).</p>
      <p>💡 Правило: завжди пиши <code>const</code>. Якщо потрібно перезаписати — зміни на <code>let</code>. <code>var</code> — не використовуй взагалі.</p>
    `,
    examples: [
      {
        title: "let vs const — основна різниця",
        code: `let score = 0;
score = 10;     // ✓ можна

const MAX = 100;
MAX = 200;      // ✗ TypeError!

// const з обʼєктом — властивості змінювати можна:
const user = { name: 'John' };
user.name = 'Mike';  // ✓ можна
user.age = 25;       // ✓ можна
user = {};           // ✗ TypeError — саму змінну не можна`
      },
      {
        title: "Чому var небезпечний",
        code: `// var має function scope (а не block scope):
if (true) {
  var x = 10;  // var "витікає" з блоку
  let y = 20;  // let залишається в блоці
}

console.log(x); // 10 — доступна! (несподівано)
console.log(y); // ReferenceError — недоступна (правильно)

// var також hoisting з undefined:
console.log(a); // undefined (не помилка!)
var a = 5;`
      },
      {
        title: "Реальний приклад — лічильник",
        code: `// let — для значень що змінюються:
let count = 0;
let total = 0;

// const — для значень що не змінюються:
const MAX_COUNT = 10;
const STEP = 2;

for (let i = 0; i < MAX_COUNT; i += STEP) {
  count++;
  total += i;
}

console.log('Кроків:', count);  // 5
console.log('Сума:', total);    // 20`
      }
    ]
  },

  "vars_1": {
    explain: `
      <p>Назва змінної — це як підпис на коробці. Якщо підпис незрозумілий — через місяць сам не згадаєш що там лежить.</p>
      <p>Стандарт в JavaScript — <b>camelCase</b>: перше слово маленьке, кожне наступне з великої.</p>
    `,
    examples: [
      {
        title: "Правильні назви для різних типів",
        code: `// Булеві — is/has/can/should:
const isLoggedIn = true;
const hasPermission = false;
const canEdit = true;

// Масиви — множина:
const users = [];
const productNames = [];
const selectedIds = [];

// Функції — дієслово + що:
function getUser() {}
function calculateTotal() {}
function formatDate() {}

// Константи — UPPER_CASE (опціонально):
const MAX_RETRIES = 3;
const API_URL = 'https://api.example.com';`
      },
      {
        title: "Погані назви і як їх виправити",
        code: `// ✗ Погано → ✓ Добре:
let d = new Date();           // → let currentDate
let arr = [1, 2, 3];          // → let scores
let flag = true;              // → let isVisible
let temp = user.name;         // → let userName
function calc(a, b) {}        // → function calculateSum(a, b)
function doStuff(data) {}     // → function processOrder(order)`
      }
    ]
  }
};

Object.assign(DEEP, DEEP_VARS);

/* ── DEEP: Оператори ── */
const DEEP_OPS = {

  "operators_0": {
    explain: `
      <p>В JS є <b>строге</b> порівняння (<code>===</code>) і <b>нестроге</b> (<code>==</code>).</p>
      <p>Нестроге == спочатку конвертує типи, і результат часто несподіваний. Завжди використовуй <code>===</code>.</p>
    `,
    examples: [
      {
        title: "Чому == небезпечний",
        code: `// == конвертує типи перед порівнянням:
0 == false     // true  ← несподівано!
0 == ''        // true  ← несподівано!
null == undefined // true ← несподівано!
'1' == 1       // true  ← несподівано!

// === порівнює і значення і тип:
0 === false    // false ✓
0 === ''       // false ✓
null === undefined // false ✓
'1' === 1      // false ✓`
      },
      {
        title: "Всі оператори порівняння",
        code: `const a = 5;

a === 5   // true  — строга рівність
a !== 3   // true  — строга нерівність
a > 3     // true  — більше
a < 10    // true  — менше
a >= 5    // true  — більше або рівне
a <= 5    // true  — менше або рівне

// Порівняння рядків (по кодах символів):
'apple' < 'banana'  // true (a < b)
'Z' < 'a'           // true (Z=90, a=97)`
      }
    ]
  },

  "operators_1": {
    explain: `
      <p><code>&&</code> і <code>||</code> — не просто логічні оператори. Вони повертають одне з операндних значень, а не просто true/false.</p>
      <p>Це дуже важливо для розуміння і часто використовується в реальному коді.</p>
    `,
    examples: [
      {
        title: "Як насправді працює &&",
        code: `// && повертає перше хибне або останнє значення:
console.log(1 && 2);       // 2    (обидва true — повертає останнє)
console.log(0 && 2);       // 0    (0 хибне — зупиняється)
console.log('' && 'hello');// ''   (порожній рядок хибний)
console.log(null && 42);   // null (null хибний)

// Реальне використання — виклик функції за умовою:
const user = { name: 'John', greet: null };
user.greet && user.greet(); // безпечно — не впаде`
      },
      {
        title: "Як насправді працює ||",
        code: `// || повертає перше істинне або останнє значення:
console.log(1 || 2);        // 1    (1 — перше істинне)
console.log(0 || 2);        // 2    (0 хибне, беремо 2)
console.log('' || 'default');// 'default'
console.log(null || undefined); // undefined (обидва хибні)

// Значення за замовчуванням:
const port = process.env.PORT || 3000;
const name = inputName || 'Гість';`
      },
      {
        title: "Оператор ?? (nullish coalescing) — сучасна альтернатива",
        code: `// || спрацьовує для ВСІХ falsy (0, '', false...)
// ?? спрацьовує ТІЛЬКИ для null і undefined

const score = 0;
console.log(score || 10);  // 10 — неправильно! 0 теж замінюється
console.log(score ?? 10);  // 0  — правильно! 0 залишається

const name = '';
console.log(name || 'default'); // 'default' — замінює порожній рядок
console.log(name ?? 'default'); // ''        — залишає порожній рядок`
      }
    ]
  },

  "operators_2": {
    explain: `
      <p><code>||</code> для значення за замовчуванням — класичний патерн. Але з появою <code>??</code> і <code>||=</code> є кращі варіанти.</p>
    `,
    examples: [
      {
        title: "Різні способи задати значення за замовчуванням",
        code: `// 1. Класичний || (проблема з 0 і '')
const a = userInput || 'default';

// 2. ?? — тільки для null/undefined (краще!)
const b = userInput ?? 'default';

// 3. ||= — присвоює якщо поточне значення хибне
let config = null;
config ||= 'default'; // config = 'default'

// 4. ??= — присвоює тільки якщо null/undefined
let count = 0;
count ??= 10; // count залишається 0 (не null/undefined)
console.log(count); // 0`
      }
    ]
  },

  "operators_3": {
    explain: `
      <p>Пріоритет операторів визначає порядок обчислення. <code>&&</code> завжди виконується раніше <code>||</code> — як множення перед додаванням в математиці.</p>
      <p>💡 Порада: якщо сумніваєшся — постав дужки. Код стане зрозумілішим.</p>
    `,
    examples: [
      {
        title: "Пріоритет && над ||",
        code: `// Без дужок — && виконується першим:
true || false && false  // true (не false!)
// = true || (false && false)
// = true || false
// = true

// Інший приклад:
1 || 2 && 0  // 1
// = 1 || (2 && 0)
// = 1 || 0
// = 1

// З дужками — явно і зрозуміло:
(true || false) && false  // false`
      }
    ]
  }
};

Object.assign(DEEP, DEEP_OPS);

/* ── DEEP: Умови ── */
const DEEP_CONDITIONS = {

  "conditions_0": {
    explain: `
      <p><code>if/else</code> — основа будь-якої програми. Важливий патерн: <b>early return</b> — виходимо з функції одразу коли умова не виконується, без зайвих else.</p>
    `,
    examples: [
      {
        title: "Early return — чистіший код",
        code: `// ✗ Погано — глибока вкладеність:
function processOrder(order) {
  if (order) {
    if (order.items.length > 0) {
      if (order.isPaid) {
        return 'Обробляємо замовлення';
      } else {
        return 'Не оплачено';
      }
    } else {
      return 'Кошик порожній';
    }
  } else {
    return 'Замовлення не знайдено';
  }
}

// ✓ Добре — early return:
function processOrder(order) {
  if (!order) return 'Замовлення не знайдено';
  if (order.items.length === 0) return 'Кошик порожній';
  if (!order.isPaid) return 'Не оплачено';
  return 'Обробляємо замовлення';
}`
      },
      {
        title: "Тернарний оператор — коротка умова",
        code: `const age = 20;

// if/else:
let status;
if (age >= 18) {
  status = 'дорослий';
} else {
  status = 'неповнолітній';
}

// Тернарний оператор (умова ? якщо_true : якщо_false):
const status2 = age >= 18 ? 'дорослий' : 'неповнолітній';

// Вкладений тернарний (обережно — погано читається):
const grade = score >= 90 ? 'A' : score >= 75 ? 'B' : 'C';`
      },
      {
        title: "Реальний приклад — перевірка форми",
        code: `function validateUser({ name, age, email }) {
  if (!name) return { ok: false, error: 'Введіть імʼя' };
  if (name.length < 2) return { ok: false, error: 'Імʼя занадто коротке' };
  if (!age || age < 0 || age > 120) return { ok: false, error: 'Невірний вік' };
  if (!email || !email.includes('@')) return { ok: false, error: 'Невірний email' };
  
  return { ok: true };
}

console.log(validateUser({ name: 'Jo', age: 25, email: 'test@mail.com' }));
// { ok: false, error: 'Імʼя занадто коротке' }

console.log(validateUser({ name: 'John', age: 25, email: 'test@mail.com' }));
// { ok: true }`
      }
    ]
  },

  "conditions_1": {
    explain: `
      <p><code>switch</code> — альтернатива довгому if/else if. Але в JS він має особливість: без <code>break</code> виконання "провалюється" в наступний case.</p>
      <p>В сучасному коді switch рідко використовується — його замінюють обʼєктами або Map.</p>
    `,
    examples: [
      {
        title: "switch з break",
        code: `const day = 'Monday';

switch (day) {
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    console.log('Робочий день');
    break;  // без break — провалиться в наступний case!
  case 'Saturday':
  case 'Sunday':
    console.log('Вихідний');
    break;
  default:
    console.log('Невідомий день');
}`
      },
      {
        title: "Сучасна альтернатива switch — обʼєкт-словник",
        code: `// Замість switch можна використати обʼєкт:
const messages = {
  success: 'Успішно збережено!',
  error: 'Сталася помилка',
  loading: 'Завантаження...',
  empty: 'Даних немає',
};

const status = 'success';
const message = messages[status] || 'Невідомий статус';
console.log(message); // 'Успішно збережено!'`
      }
    ]
  }
};

Object.assign(DEEP, DEEP_CONDITIONS);

/* ── DEEP: Цикли ── */
const DEEP_LOOPS = {

  "loops_0": {
    explain: `
      <p><b>for</b> — найуніверсальніший цикл. Використовується коли потрібен індекс, зворотній порядок, або нестандартний крок.</p>
      <p>Три частини в дужках: <code>початок; умова; крок</code></p>
    `,
    examples: [
      {
        title: "Різні варіанти for",
        code: `// Звичайний — від 0 до n:
for (let i = 0; i < 5; i++) {
  console.log(i); // 0,1,2,3,4
}

// Зворотній порядок:
for (let i = 4; i >= 0; i--) {
  console.log(i); // 4,3,2,1,0
}

// Крок 2:
for (let i = 0; i <= 10; i += 2) {
  console.log(i); // 0,2,4,6,8,10
}

// По масиву з індексом:
const fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
  console.log(i + ': ' + fruits[i]);
  // 0: apple, 1: banana, 2: cherry
}`
      },
      {
        title: "Реальний приклад — пошук елемента",
        code: `function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // знайшли — одразу виходимо
    }
  }
  return -1; // не знайшли
}

const nums = [10, 20, 30, 40, 50];
console.log(findIndex(nums, 30));  // 2
console.log(findIndex(nums, 99));  // -1`
      }
    ]
  },

  "loops_1": {
    explain: `
      <p><b>for...of</b> — простіший спосіб перебрати масив або рядок. Не потрібен лічильник і умова.</p>
      <p>Використовуй for...of коли індекс не потрібен — код виходить чистіший.</p>
    `,
    examples: [
      {
        title: "for...of для різних структур",
        code: `// Масив:
const nums = [1, 2, 3, 4, 5];
let sum = 0;
for (const n of nums) {
  sum += n;
}
console.log(sum); // 15

// Рядок — по символах:
for (const char of 'hello') {
  console.log(char); // h,e,l,l,o
}

// З деструктуризацією (entries):
const fruits = ['apple', 'banana', 'cherry'];
for (const [index, fruit] of fruits.entries()) {
  console.log(index + ': ' + fruit);
  // 0: apple, 1: banana, 2: cherry
}`
      },
      {
        title: "Реальний приклад — фільтрація",
        code: `const orders = [
  { id: 1, status: 'paid', total: 100 },
  { id: 2, status: 'pending', total: 200 },
  { id: 3, status: 'paid', total: 150 },
];

let paidTotal = 0;
const paidOrders = [];

for (const order of orders) {
  if (order.status === 'paid') {
    paidTotal += order.total;
    paidOrders.push(order.id);
  }
}

console.log('Оплачено:', paidTotal);    // 250
console.log('ID:', paidOrders);          // [1, 3]`
      }
    ]
  },

  "loops_2": {
    explain: `
      <p><b>for...in</b> — перебирає ключі обʼєкта. Важливо: він також перебирає успадковані властивості, тому часто використовують з перевіркою <code>hasOwn</code>.</p>
      <p>⚠️ Не використовуй for...in для масивів — використовуй for...of або forEach.</p>
    `,
    examples: [
      {
        title: "for...in для обʼєктів",
        code: `const user = { name: 'John', age: 25, city: 'Kyiv' };

// Перебір ключів:
for (const key in user) {
  console.log(key + ': ' + user[key]);
  // name: John
  // age: 25
  // city: Kyiv
}

// Безпечно з hasOwn (ігнорує успадковані):
for (const key in user) {
  if (Object.hasOwn(user, key)) {
    console.log(key);
  }
}`
      },
      {
        title: "Реальний приклад — підрахунок",
        code: `const scores = { Alice: 95, Bob: 80, Charlie: 90, Diana: 85 };

let total = 0;
let count = 0;

for (const name in scores) {
  total += scores[name];
  count++;
}

const average = total / count;
console.log('Середній бал:', average); // 87.5

// Знайти найкращого:
let best = '';
let bestScore = 0;
for (const name in scores) {
  if (scores[name] > bestScore) {
    bestScore = scores[name];
    best = name;
  }
}
console.log('Найкращий:', best, bestScore); // Alice 95`
      }
    ]
  },

  "loops_3": {
    explain: `
      <p>Скорочені оператори присвоєння роблять код коротшим. Найчастіше зустрічаються <code>++</code> і <code>+=</code>.</p>
      <p>⚠️ Різниця між <code>i++</code> і <code>++i</code>: перший повертає старе значення, другий — нове.</p>
    `,
    examples: [
      {
        title: "i++ vs ++i — важлива різниця",
        code: `let a = 5;
let b = 5;

// i++ — спочатку повертає, потім збільшує:
console.log(a++); // 5  (повернув старе)
console.log(a);   // 6  (тепер збільшилось)

// ++i — спочатку збільшує, потім повертає:
console.log(++b); // 6  (повернув вже нове)
console.log(b);   // 6`
      },
      {
        title: "Всі скорочені оператори",
        code: `let n = 10;

n += 5;  // n = 15  (n = n + 5)
n -= 3;  // n = 12  (n = n - 3)
n *= 2;  // n = 24  (n = n * 2)
n /= 4;  // n = 6   (n = n / 4)
n %= 4;  // n = 2   (n = n % 4)
n **= 3; // n = 8   (n = n ** 3) — степінь
n++;     // n = 9
n--;     // n = 8
console.log(n); // 8`
      }
    ]
  }
};

Object.assign(DEEP, DEEP_LOOPS);

/* ── DEEP: Функції ── */
const DEEP_FUNCTIONS = {

  "functions_0": {
    explain: `
      <p>Головна різниця: <b>Function Declaration</b> піднімається (hoisting) — можна викликати до оголошення. <b>Function Expression</b> — ні.</p>
      <p>На практиці обидва використовуються, але в сучасному коді частіше зустрічаються стрілкові функції.</p>
    `,
    examples: [
      {
        title: "Hoisting — чому це важливо",
        code: `// Declaration — hoisting працює:
console.log(add(2, 3)); // 5 ← ПРАЦЮЄ до оголошення!

function add(a, b) {
  return a + b;
}

// Expression — hoisting НЕ працює:
console.log(multiply(2, 3)); // ReferenceError!

const multiply = function(a, b) {
  return a * b;
};`
      },
      {
        title: "Коли використовувати Expression",
        code: `// 1. Функція залежить від умови:
const greet = isEnglish
  ? function() { return 'Hello!'; }
  : function() { return 'Привіт!'; };

// 2. Передача функції як аргумент:
const numbers = [3, 1, 4, 1, 5];
numbers.sort(function(a, b) { return a - b; });
console.log(numbers); // [1, 1, 3, 4, 5]

// 3. IIFE — функція що одразу викликається:
(function() {
  const secret = 'hidden';
  console.log('Виконалось одразу!');
})();`
      }
    ]
  },

  "functions_1": {
    explain: `
      <p>Стрілкові функції — не просто коротший запис. У них є важлива відмінність: <b>вони не мають власного this</b>.</p>
      <p>Тому для методів обʼєкта використовуй звичайні функції, а для колбеків — стрілкові.</p>
    `,
    examples: [
      {
        title: "Всі форми запису",
        code: `// Повний запис:
const sum = (a, b) => { return a + b; };

// Implicit return (без фігурних дужок):
const sum2 = (a, b) => a + b;

// Один параметр — без дужок:
const double = n => n * 2;

// Без параметрів:
const greet = () => 'Hello!';

// Повертає обʼєкт — обгорни в дужки:
const getUser = () => ({ name: 'John', age: 25 });

console.log(sum(2, 3));      // 5
console.log(double(4));      // 8
console.log(getUser());      // { name: 'John', age: 25 }`
      },
      {
        title: "this в стрілкових vs звичайних функціях",
        code: `const timer = {
  count: 0,

  // ✗ Звичайна функція в setInterval — this втрачається:
  startWrong() {
    setInterval(function() {
      this.count++; // this = window, не timer!
      console.log(this.count); // NaN
    }, 1000);
  },

  // ✓ Стрілкова — this береться з startRight:
  startRight() {
    setInterval(() => {
      this.count++; // this = timer ✓
      console.log(this.count); // 1, 2, 3...
    }, 1000);
  }
};`
      },
      {
        title: "Реальний приклад — масиви",
        code: `const numbers = [1, 2, 3, 4, 5];

// Стрілкові функції ідеальні для map/filter/reduce:
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2,4,6,8,10]

const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2,4]

const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15`
      }
    ]
  },

  "functions_2": {
    explain: `
      <p>Параметри за замовчуванням дозволяють зробити аргументи необовʼязковими. Це чистіша альтернатива перевірці через <code>||</code> всередині функції.</p>
    `,
    examples: [
      {
        title: "Різні способи задати значення за замовчуванням",
        code: `// ✗ Старий спосіб через ||:
function greet(name) {
  name = name || 'Гість'; // проблема якщо name = 0 або false
  return 'Привіт, ' + name;
}

// ✓ Сучасний — параметр за замовчуванням:
function greet2(name = 'Гість') {
  return 'Привіт, ' + name;
}

console.log(greet2());        // Привіт, Гість
console.log(greet2('John'));  // Привіт, John
console.log(greet2(undefined)); // Привіт, Гість (undefined → default)
console.log(greet2(null));    // Привіт, null (null НЕ замінюється!)`
      },
      {
        title: "Вираз як значення за замовчуванням",
        code: `function createId(prefix = 'user', timestamp = Date.now()) {
  return prefix + '_' + timestamp;
}

console.log(createId());           // user_1234567890
console.log(createId('order'));    // order_1234567890
console.log(createId('item', 1)); // item_1

// Посилання на інший параметр:
function multiply(a, b = a) {
  return a * b;
}

console.log(multiply(5));    // 25 (5 * 5)
console.log(multiply(5, 3)); // 15 (5 * 3)`
      }
    ]
  },

  "functions_3": {
    explain: `
      <p>JSDoc — це стандарт документування JS коду. Він не обовʼязковий, але дає підказки в редакторі і допомагає команді розуміти код.</p>
      <p>VS Code розуміє JSDoc і показує підказки типів без TypeScript.</p>
    `,
    examples: [
      {
        title: "Базовий JSDoc",
        code: `/**
 * Обчислює суму двох чисел
 * @param {number} a - перше число
 * @param {number} b - друге число
 * @returns {number} сума a і b
 */
function add(a, b) {
  return a + b;
}

/**
 * Форматує імʼя користувача
 * @param {string} firstName
 * @param {string} [lastName=''] - необовʼязковий параметр
 * @returns {string}
 */
function formatName(firstName, lastName = '') {
  return (firstName + ' ' + lastName).trim();
}`
      },
      {
        title: "JSDoc для обʼєктів і масивів",
        code: `/**
 * @param {{ name: string, age: number }} user
 * @returns {string}
 */
function greetUser(user) {
  return 'Привіт, ' + user.name + '! Тобі ' + user.age;
}

/**
 * @param {number[]} numbers - масив чисел
 * @returns {number} середнє значення
 */
function average(numbers) {
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  return sum / numbers.length;
}

console.log(average([10, 20, 30])); // 20`
      }
    ]
  }
};

Object.assign(DEEP, DEEP_FUNCTIONS);

/* ── DEEP: Рядки ── */
const DEEP_STRINGS = {

  "strings_0": {
    explain: `
      <p>Методи регістру — одні з найпростіших але дуже корисних. Важливо памʼятати: вони <b>не змінюють оригінал</b>, а повертають новий рядок.</p>
    `,
    examples: [
      {
        title: "toUpperCase і toLowerCase",
        code: `const name = 'John Smith';

console.log(name.toUpperCase()); // 'JOHN SMITH'
console.log(name.toLowerCase()); // 'john smith'
console.log(name);               // 'John Smith' — не змінився!

// Реальний приклад — нормалізація вводу:
function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

console.log(normalizeEmail('  JOHN@MAIL.COM  ')); // 'john@mail.com'`
      },
      {
        title: "Реальний приклад — порівняння без регістру",
        code: `function search(list, query) {
  const q = query.toLowerCase();
  return list.filter(item => 
    item.toLowerCase().includes(q)
  );
}

const fruits = ['Apple', 'Banana', 'Cherry', 'Apricot'];
console.log(search(fruits, 'ap')); // ['Apple', 'Apricot']
console.log(search(fruits, 'AP')); // ['Apple', 'Apricot']`
      }
    ]
  },

  "strings_1": {
    explain: `
      <p>Методи пошуку в рядку. Важливо знати різницю: <code>includes</code> → true/false, <code>indexOf</code> → індекс або -1.</p>
      <p>Всі вони чутливі до регістру!</p>
    `,
    examples: [
      {
        title: "includes, startsWith, endsWith",
        code: `const email = 'john@gmail.com';

// includes — чи є підрядок:
email.includes('@')        // true
email.includes('yahoo')    // false

// startsWith — чи починається з:
email.startsWith('john')   // true
email.startsWith('Jane')   // false

// endsWith — чи закінчується на:
email.endsWith('.com')     // true
email.endsWith('.ua')      // false

// Реальне використання:
function isGmail(email) {
  return email.toLowerCase().endsWith('@gmail.com');
}
console.log(isGmail('test@gmail.com')); // true`
      },
      {
        title: "indexOf і lastIndexOf",
        code: `const text = 'Hello World Hello';

// indexOf — перше входження:
text.indexOf('Hello')      // 0
text.indexOf('World')      // 6
text.indexOf('xyz')        // -1 (не знайдено)

// lastIndexOf — останнє входження:
text.lastIndexOf('Hello')  // 12

// Пошук починаючи з певного індексу:
text.indexOf('Hello', 1)   // 12 (пропускаємо перший)

// Перевірка наявності через indexOf:
if (text.indexOf('World') !== -1) {
  console.log('Знайдено!');
}`
      }
    ]
  },

  "strings_2": {
    explain: `
      <p>Регістронезалежний пошук — дуже поширена задача. Стандартне рішення: привести обидва рядки до одного регістру перед порівнянням.</p>
    `,
    examples: [
      {
        title: "Пошук без урахування регістру",
        code: `// Простий спосіб:
function containsIgnoreCase(text, search) {
  return text.toLowerCase().includes(search.toLowerCase());
}

console.log(containsIgnoreCase('Hello World', 'HELLO')); // true
console.log(containsIgnoreCase('Hello World', 'world')); // true

// Через RegExp з прапором i:
function containsRegex(text, search) {
  const regex = new RegExp(search, 'i');
  return regex.test(text);
}

console.log(containsRegex('Hello World', 'HELLO')); // true`
      }
    ]
  },

  "strings_3": {
    explain: `
      <p><code>split</code> і <code>join</code> — часто використовуються разом. split розбиває рядок на масив, join збирає масив в рядок.</p>
    `,
    examples: [
      {
        title: "split і join — практичні приклади",
        code: `// Розбити рядок на слова і обробити:
const sentence = 'hello world from javascript';
const words = sentence.split(' ');
const capitalized = words.map(w => w[0].toUpperCase() + w.slice(1));
const result = capitalized.join(' ');
console.log(result); // 'Hello World From Javascript'

// URL slug:
function toSlug(title) {
  return title.toLowerCase().split(' ').join('-');
}
console.log(toSlug('My Blog Post')); // 'my-blog-post'

// CSV рядок:
const data = ['John', '25', 'Kyiv'];
const csv = data.join(',');
console.log(csv); // 'John,25,Kyiv'
const back = csv.split(',');
console.log(back); // ['John', '25', 'Kyiv']`
      },
      {
        title: "replaceAll — заміна всіх входжень",
        code: `const template = 'Привіт, {{name}}! Ти маєш {{count}} повідомлень.';

function fillTemplate(template, data) {
  let result = template;
  for (const key in data) {
    result = result.replaceAll('{{' + key + '}}', data[key]);
  }
  return result;
}

console.log(fillTemplate(template, { name: 'John', count: 5 }));
// 'Привіт, John! Ти маєш 5 повідомлень.'`
      }
    ]
  },

  "strings_4": {
    explain: `
      <p>Перебір символів рядка — корисна техніка для обробки тексту. Рядки в JS — immutable (незмінні), тому ми завжди створюємо новий рядок.</p>
    `,
    examples: [
      {
        title: "Підрахунок і фільтрація символів",
        code: `// Підрахунок голосних:
function countVowels(str) {
  const vowels = 'aeiouаеєиіїоуюя';
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(countVowels('Hello World'));  // 3
console.log(countVowels('Привіт'));       // 3

// Видалення всіх цифр:
function removeDigits(str) {
  let result = '';
  for (const char of str) {
    if (isNaN(char) || char === ' ') result += char;
  }
  return result;
}

console.log(removeDigits('abc123def456')); // 'abcdef'`
      },
      {
        title: "Перевірка паліндрому",
        code: `function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-zа-яє-їі]/g, '');
  const reversed = clean.split('').reverse().join('');
  return clean === reversed;
}

console.log(isPalindrome('racecar'));  // true
console.log(isPalindrome('A man a plan a canal Panama')); // true
console.log(isPalindrome('hello'));    // false`
      }
    ]
  },

  "strings_5": {
    explain: `
      <p>Кожен символ має числовий код (Unicode). Це дозволяє порівнювати символи, перевіряти чи є символ літерою або цифрою, і сортувати рядки правильно.</p>
    `,
    examples: [
      {
        title: "charCodeAt і fromCharCode",
        code: `// Код символу:
'A'.charCodeAt(0)  // 65
'a'.charCodeAt(0)  // 97  (маленькі > великих!)
'0'.charCodeAt(0)  // 48

// Символ по коду:
String.fromCharCode(65)  // 'A'
String.fromCharCode(97)  // 'a'

// Перевірка типу символу:
function isDigit(char) {
  const code = char.charCodeAt(0);
  return code >= 48 && code <= 57; // '0'-'9'
}

function isUpperCase(char) {
  const code = char.charCodeAt(0);
  return code >= 65 && code <= 90; // 'A'-'Z'
}

console.log(isDigit('5'));  // true
console.log(isUpperCase('A')); // true`
      }
    ]
  }
};

Object.assign(DEEP, DEEP_STRINGS);

/* ── DEEP: Числа ── */
const DEEP_NUMBERS = {

  "numbers_0": {
    explain: `
      <p>Чотири методи округлення — кожен для своєї задачі. Найчастіша помилка: використати <code>toFixed</code> там де потрібне число, а не рядок.</p>
    `,
    examples: [
      {
        title: "Коли який метод використовувати",
        code: `// floor — завжди вниз (для індексів, сторінок):
Math.floor(4.9)  // 4 — ніколи не дасть 5
Math.floor(-4.1) // -5 (не -4!)

// ceil — завжди вгору (для оплати, розмірів):
Math.ceil(4.1)   // 5
Math.ceil(-4.9)  // -4

// round — стандартне (для оцінок, відображення):
Math.round(4.5)  // 5
Math.round(4.4)  // 4

// trunc — просто відкидає дробову:
Math.trunc(4.9)  // 4
Math.trunc(-4.9) // -4 (не -5!)

// toFixed — для відображення (повертає РЯДОК!):
(19.999).toFixed(2) // '20.00' (рядок!)
+(19.999).toFixed(2) // 20 (число після конвертації)`
      },
      {
        title: "Реальний приклад — ціни і відсотки",
        code: `// Ціна з двома знаками після коми:
function formatPrice(price) {
  return '$' + price.toFixed(2);
}
console.log(formatPrice(19.9));    // '$19.90'
console.log(formatPrice(100));     // '$100.00'

// Відсоток від числа:
function getPercent(value, total) {
  return Math.round((value / total) * 100);
}
console.log(getPercent(33, 100)); // 33
console.log(getPercent(1, 3));    // 33

// Кількість сторінок:
function getPages(total, perPage) {
  return Math.ceil(total / perPage); // завжди вгору!
}
console.log(getPages(10, 3)); // 4 (не 3!)`
      }
    ]
  },

  "numbers_1": {
    explain: `
      <p><code>Math.random()</code> повертає від 0 до 1. Щоб отримати число в потрібному діапазоні — масштабуємо і зсуваємо.</p>
    `,
    examples: [
      {
        title: "Всі варіанти випадкових чисел",
        code: `// Від 0 до 1 (не включно):
Math.random() // 0.7234...

// Ціле від 0 до n включно:
Math.floor(Math.random() * (n + 1))

// Ціле від min до max включно:
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randInt(1, 6));   // кубик — 1,2,3,4,5 або 6
console.log(randInt(0, 100)); // відсоток

// Випадковий елемент масиву:
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(randomItem(['rock', 'paper', 'scissors']));`
      },
      {
        title: "Реальний приклад — перемішування масиву",
        code: `// Алгоритм Fisher-Yates shuffle:
function shuffle(arr) {
  const result = [...arr]; // копія щоб не змінювати оригінал
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]; // swap
  }
  return result;
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffle(cards));
// [3, 7, 1, 9, 5, 2, 10, 4, 8, 6] (кожен раз різне)`
      }
    ]
  },

  "numbers_2": {
    explain: `
      <p>Системи числення рідко потрібні в звичайному коді, але важливі для роботи з кольорами (hex), бітовими операціями і мережевими протоколами.</p>
    `,
    examples: [
      {
        title: "Конвертація між системами",
        code: `// Десяткове в рядок в іншій системі:
(255).toString(16)  // 'ff'  (hex)
(255).toString(2)   // '11111111' (bin)
(255).toString(8)   // '377' (oct)

// Рядок в десяткове:
parseInt('ff', 16)  // 255
parseInt('11111111', 2) // 255
parseInt('377', 8)  // 255

// Реальний приклад — hex кольори:
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

console.log(hexToRgb('#ff6600')); // { r: 255, g: 102, b: 0 }`
      }
    ]
  },

  "numbers_3": {
    explain: `
      <p><code>NaN</code> — особливе значення "не число". Воно не дорівнює навіть собі! Тому для перевірки є спеціальні функції.</p>
    `,
    examples: [
      {
        title: "NaN — особливості",
        code: `// NaN !== NaN — унікальна особливість:
console.log(NaN === NaN); // false ← дивно!
console.log(NaN == NaN);  // false

// Правильна перевірка:
console.log(isNaN(NaN));           // true
console.log(isNaN('hello'));       // true (конвертує рядок!)
console.log(Number.isNaN(NaN));    // true (строга перевірка)
console.log(Number.isNaN('hello')); // false (не конвертує)

// NaN "заражає" обчислення:
console.log(NaN + 1);   // NaN
console.log(NaN * 100); // NaN`
      },
      {
        title: "Реальний приклад — безпечні обчислення",
        code: `function safeDiv(a, b) {
  if (b === 0) return 0;
  const result = a / b;
  return isNaN(result) ? 0 : result;
}

function parseAndCalc(str) {
  const num = Number(str);
  if (Number.isNaN(num)) {
    return 'Помилка: "' + str + '" не є числом';
  }
  return 'Результат: ' + num * 2;
}

console.log(parseAndCalc('42'));     // Результат: 84
console.log(parseAndCalc('hello')); // Помилка: "hello" не є числом`
      }
    ]
  }
};

Object.assign(DEEP, DEEP_NUMBERS);

/* ── DEEP: Масиви (решта) ── */
const DEEP_ARRAYS_REST = {

  "arrays_1": {
    explain: `
      <p><code>includes</code> і <code>indexOf</code> — для пошуку в масиві. Але якщо потрібен складніший пошук — використовуй <code>find</code> або <code>findIndex</code>.</p>
    `,
    examples: [
      {
        title: "includes vs indexOf vs find",
        code: `const nums = [10, 20, 30, 40, 50];

// includes — чи є елемент:
nums.includes(30)  // true
nums.includes(99)  // false

// indexOf — де знаходиться:
nums.indexOf(30)   // 2
nums.indexOf(99)   // -1

// find — пошук обʼєкта за умовою:
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Bob' }

const idx = users.findIndex(u => u.name === 'Alice');
console.log(idx); // 0`
      }
    ]
  },

  "arrays_2": {
    explain: `
      <p><code>at()</code> — сучасний спосіб отримати елемент масиву, особливо зручний для останніх елементів через від'ємні індекси.</p>
    `,
    examples: [
      {
        title: "at() vs стандартний доступ",
        code: `const arr = ['a', 'b', 'c', 'd', 'e'];

// Стандартний доступ:
arr[0]              // 'a'
arr[arr.length - 1] // 'e' ← незручно

// at() — простіше:
arr.at(0)   // 'a'
arr.at(-1)  // 'e' ← останній
arr.at(-2)  // 'd' ← передостанній

// Реальний приклад — остання дія:
const history = ['open', 'edit', 'save', 'close'];
console.log('Остання дія:', history.at(-1)); // 'close'`
      }
    ]
  },

  "arrays_3": {
    explain: `
      <p><code>split</code> і <code>join</code> — міст між рядками і масивами. Дуже часто використовуються разом.</p>
    `,
    examples: [
      {
        title: "Практичні патерни split/join",
        code: `// Реверс слів в реченні:
function reverseWords(sentence) {
  return sentence.split(' ').reverse().join(' ');
}
console.log(reverseWords('Hello World')); // 'World Hello'

// Унікальні слова:
function uniqueWords(text) {
  const words = text.toLowerCase().split(' ');
  return [...new Set(words)].join(' ');
}
console.log(uniqueWords('the cat sat on the mat'));
// 'the cat sat on mat'`
      }
    ]
  }
};

Object.assign(DEEP, DEEP_ARRAYS_REST);

/* ── DEEP: Обʼєкти (решта) ── */
const DEEP_OBJECTS_REST = {

  "objects_0": {
    explain: `
      <p>Доступ до властивостей обʼєкта — через крапку або квадратні дужки. Ключова різниця: крапка — для фіксованих імен, дужки — для динамічних.</p>
    `,
    examples: [
      {
        title: "Крапка vs квадратні дужки",
        code: `const user = { name: 'John', age: 25, 'has-job': true };

// Крапка — тільки для валідних імен:
user.name     // 'John'
user.age      // 25
user.has-job  // SyntaxError! дефіс не можна

// Квадратні дужки — для будь-яких ключів:
user['name']    // 'John'
user['has-job'] // true ✓

// Динамічний ключ — тільки через дужки:
const key = 'name';
user[key]     // 'John' ✓
user.key      // undefined ← шукає ключ 'key'`
      },
      {
        title: "Реальний приклад — динамічний доступ",
        code: `const translations = {
  uk: { hello: 'Привіт', bye: 'До побачення' },
  en: { hello: 'Hello', bye: 'Goodbye' },
  de: { hello: 'Hallo', bye: 'Auf Wiedersehen' },
};

function translate(lang, key) {
  return translations[lang]?.[key] || key;
}

console.log(translate('uk', 'hello')); // 'Привіт'
console.log(translate('en', 'bye'));   // 'Goodbye'
console.log(translate('fr', 'hello')); // 'hello' (немає)`
      }
    ]
  },

  "objects_1": {
    explain: `
      <p>Додавання, редагування і видалення властивостей — базові операції. Важливо памʼятати що <code>delete</code> не звільняє памʼять одразу, для цього краще присвоїти <code>undefined</code> або <code>null</code>.</p>
    `,
    examples: [
      {
        title: "CRUD операції з обʼєктом",
        code: `const user = { name: 'John', age: 25 };

// Create (додати):
user.email = 'john@mail.com';
user['phone'] = '+380001234567';

// Read (прочитати):
console.log(user.name); // 'John'

// Update (оновити):
user.age = 26;
user.name = user.name.toUpperCase();

// Delete (видалити):
delete user.phone;

console.log(user);
// { name: 'JOHN', age: 26, email: 'john@mail.com' }`
      },
      {
        title: "Optional chaining ?. — безпечний доступ",
        code: `const user = {
  name: 'John',
  address: {
    city: 'Kyiv',
  }
};

// ✗ Небезпечно — може впасти:
// console.log(user.contacts.phone); // TypeError!

// ✓ Через перевірку:
console.log(user.contacts && user.contacts.phone); // undefined

// ✓ Через optional chaining (сучасно):
console.log(user.contacts?.phone);      // undefined (не впаде)
console.log(user.address?.city);        // 'Kyiv'
console.log(user.address?.zip ?? 'N/A'); // 'N/A'`
      }
    ]
  },

  "objects_2": {
    explain: `
      <p>Перевірка наявності властивості — важлива операція. Є три способи і кожен має свої особливості.</p>
    `,
    examples: [
      {
        title: "in vs hasOwn vs !== undefined",
        code: `const user = { name: 'John', age: undefined };

// 1. !== undefined — НЕнадійно:
user.name !== undefined    // true ✓
user.age !== undefined     // false ✗ (є, але undefined!)
user.missing !== undefined // false — не знаємо є чи ні

// 2. in — перевіряє і прототип:
'name' in user    // true
'age' in user     // true ✓ (є навіть якщо undefined)
'toString' in user // true ← з прототипу!

// 3. Object.hasOwn — тільки власні:
Object.hasOwn(user, 'name')     // true
Object.hasOwn(user, 'age')      // true
Object.hasOwn(user, 'toString') // false ← ігнорує прототип`
      }
    ]
  },

  "objects_3": {
    explain: `
      <p>Перебір обʼєкта — кілька способів. Сучасний підхід: <code>Object.entries()</code> з for...of або деструктуризацією.</p>
    `,
    examples: [
      {
        title: "Всі способи перебору обʼєкта",
        code: `const scores = { Alice: 95, Bob: 80, Charlie: 90 };

// 1. for...in (класичний):
for (const name in scores) {
  console.log(name + ': ' + scores[name]);
}

// 2. Object.keys (тільки ключі):
Object.keys(scores).forEach(name => {
  console.log(name);
});

// 3. Object.entries (і ключ і значення):
for (const [name, score] of Object.entries(scores)) {
  console.log(name + ': ' + score);
}

// 4. Трансформація обʼєкта через entries:
const doubled = Object.fromEntries(
  Object.entries(scores).map(([k, v]) => [k, v * 2])
);
console.log(doubled); // { Alice: 190, Bob: 160, Charlie: 180 }`
      }
    ]
  },

  "objects_5": {
    explain: `
      <p>Клонування — поширена задача. Головне памʼятати: поверхневе копіювання не клонує вкладені обʼєкти.</p>
    `,
    examples: [
      {
        title: "Поверхневе vs глибоке клонування",
        code: `const original = {
  name: 'John',
  scores: [90, 85, 92],
  address: { city: 'Kyiv' }
};

// Поверхневе (spread):
const shallow = { ...original };
shallow.name = 'Bob';          // ✓ не впливає на original
shallow.scores.push(100);      // ✗ впливає! масив спільний
shallow.address.city = 'Lviv'; // ✗ впливає! обʼєкт спільний

// Глибоке (structuredClone):
const deep = structuredClone(original);
deep.scores.push(100);         // ✓ не впливає
deep.address.city = 'Lviv';   // ✓ не впливає

console.log(original.address.city); // 'Kyiv' ← збережено`
      }
    ]
  },

  "objects_6": {
    explain: `
      <p>Посилання — одна з найважливіших концепцій JS. Примітиви копіюються за значенням, обʼєкти — за посиланням.</p>
    `,
    examples: [
      {
        title: "Примітиви vs обʼєкти — різниця",
        code: `// Примітиви — копіюються за значенням:
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 — не змінився

// Обʼєкти — копіюються за посиланням:
const obj1 = { x: 10 };
const obj2 = obj1; // обидва вказують на один обʼєкт!
obj2.x = 20;
console.log(obj1.x); // 20 — змінився!

// Перевірка чи це один обʼєкт:
console.log(obj1 === obj2); // true — одне і те саме`
      }
    ]
  }
};

Object.assign(DEEP, DEEP_OBJECTS_REST);

/* ── DEEP: Advanced (решта) ── */
const DEEP_ADVANCED_REST = {

  "advanced_1": {
    explain: `
      <p><code>call</code>, <code>apply</code>, <code>bind</code> — три методи для явного задання <code>this</code>. В сучасному коді <code>bind</code> використовується найчастіше, <code>call</code> і <code>apply</code> — рідше.</p>
    `,
    examples: [
      {
        title: "Реальне використання bind",
        code: `class Button {
  constructor(label) {
    this.label = label;
    this.clicks = 0;
  }

  handleClick() {
    this.clicks++;
    console.log(this.label + ' clicked: ' + this.clicks);
  }
}

const btn = new Button('Submit');

// ✗ Без bind — this загубиться:
document.addEventListener('click', btn.handleClick);
// this = document, не btn!

// ✓ З bind — this зафіксовано:
document.addEventListener('click', btn.handleClick.bind(btn));`
      },
      {
        title: "call і apply — практичні приклади",
        code: `// call — позичаємо метод:
const numbers = [5, 2, 8, 1, 9, 3];

// Math.max не приймає масив — використовуємо apply:
const max = Math.max.apply(null, numbers); // 9

// Або сучасно через spread:
const max2 = Math.max(...numbers); // 9 (краще!)

// call для позичання методів:
function greet(greeting, punct) {
  return greeting + ', ' + this.name + punct;
}

const user = { name: 'Alice' };
console.log(greet.call(user, 'Hello', '!')); // Hello, Alice!`
      }
    ]
  },

  "advanced_2": {
    explain: `
      <p>Прототипне успадкування — серце JavaScript. Розуміння цього механізму допомагає зрозуміти чому у масивів є <code>.map()</code>, а у рядків — <code>.includes()</code>.</p>
    `,
    examples: [
      {
        title: "Prototype chain в дії",
        code: `// Кожен масив успадковує від Array.prototype:
const arr = [1, 2, 3];

// map, filter, forEach — всі з Array.prototype:
console.log(arr.__proto__ === Array.prototype); // true

// Можна додати свій метод до всіх масивів:
Array.prototype.sum = function() {
  return this.reduce((acc, n) => acc + n, 0);
};

console.log([1, 2, 3, 4, 5].sum()); // 15
// ⚠️ Не роби це в продакшн коді! Тільки для розуміння.`
      },
      {
        title: "Object.create — успадкування без класів",
        code: `const animal = {
  breathe() { return this.name + ' дихає'; },
  eat() { return this.name + ' їсть'; }
};

const dog = Object.create(animal);
dog.name = 'Рекс';
dog.bark = function() { return this.name + ' гавкає!'; };

console.log(dog.breathe()); // 'Рекс дихає' (з animal)
console.log(dog.eat());     // 'Рекс їсть'  (з animal)
console.log(dog.bark());    // 'Рекс гавкає!' (своє)

// Перевірка ланцюжка:
console.log(Object.getPrototypeOf(dog) === animal); // true`
      }
    ]
  },

  "advanced_3": {
    explain: `
      <p>Promise — обіцянка що операція завершиться в майбутньому. Три стани: pending (очікування), fulfilled (виконано), rejected (помилка).</p>
      <p>Після переходу в fulfilled або rejected — стан більше не змінюється.</p>
    `,
    examples: [
      {
        title: "Створення Promise",
        code: `// Створення:
const promise = new Promise((resolve, reject) => {
  const success = true; // симулюємо результат

  if (success) {
    resolve('Дані отримано!');  // fulfilled
  } else {
    reject(new Error('Щось пішло не так')); // rejected
  }
});

// Використання:
promise
  .then(data => console.log(data))    // 'Дані отримано!'
  .catch(err => console.error(err.message))
  .finally(() => console.log('Завершено'));`
      },
      {
        title: "Promise.all, Promise.race, Promise.allSettled",
        code: `function delay(ms, val) {
  return new Promise(r => setTimeout(() => r(val), ms));
}

// all — чекає всіх (якщо один впав — впали всі):
Promise.all([delay(100, 'A'), delay(200, 'B'), delay(50, 'C')])
  .then(([a, b, c]) => console.log(a, b, c)); // A B C

// race — хто перший той і переміг:
Promise.race([delay(100, 'slow'), delay(50, 'fast')])
  .then(winner => console.log(winner)); // 'fast'

// allSettled — чекає всіх, не падає при помилці:
Promise.allSettled([
  Promise.resolve('OK'),
  Promise.reject('Error'),
]).then(results => console.log(results));
// [{status:'fulfilled', value:'OK'}, {status:'rejected', reason:'Error'}]`
      }
    ]
  },

  "advanced_5": {
    explain: `
      <p><code>Object.freeze</code> і дескриптори — просунуті інструменти контролю над обʼєктами. Використовуються для констант, immutable state і захисту конфігурацій.</p>
    `,
    examples: [
      {
        title: "Object.freeze — незмінний обʼєкт",
        code: `const config = Object.freeze({
  API_URL: 'https://api.example.com',
  TIMEOUT: 5000,
  MAX_RETRIES: 3,
});

config.API_URL = 'https://evil.com'; // ігнорується (strict → Error)
config.NEW_KEY = 'value';            // ігнорується

console.log(config.API_URL); // 'https://api.example.com' — захищено!

// Глибоке заморожування:
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });
  return obj;
}`
      },
      {
        title: "Object.defineProperty — повний контроль",
        code: `const user = {};

Object.defineProperty(user, 'id', {
  value: 42,
  writable: false,     // не можна змінити
  enumerable: false,   // не видно в for...in
  configurable: false, // не можна видалити
});

user.id = 100; // ігнорується
console.log(user.id);         // 42
console.log(Object.keys(user)); // [] ← id не видно!

// Геттер і сеттер:
Object.defineProperty(user, 'age', {
  get() { return this._age; },
  set(val) {
    if (val < 0) throw new Error('Вік не може бути від'ємним');
    this._age = val;
  }
});

user.age = 25;
console.log(user.age); // 25`
      }
    ]
  },

  "advanced_6": {
    explain: `
      <p>Перевірка властивостей — важлива тема для розуміння прототипів. <code>in</code> шукає по всьому ланцюжку, <code>hasOwn</code> — тільки власні.</p>
    `,
    examples: [
      {
        title: "Різниця між методами перевірки",
        code: `function Animal(name) {
  this.name = name;
}
Animal.prototype.breathe = function() { return 'дихає'; };

const dog = new Animal('Рекс');

// in — шукає і в прототипі:
'name' in dog       // true (власна)
'breathe' in dog    // true (з прототипу!)

// hasOwn — тільки власні:
Object.hasOwn(dog, 'name')    // true
Object.hasOwn(dog, 'breathe') // false ← ігнорує прототип

// Отримати всі власні ключі:
Object.keys(dog)              // ['name'] (enum)
Object.getOwnPropertyNames(dog) // ['name'] (всі)
Reflect.ownKeys(dog)          // ['name'] (+ символи)`
      }
    ]
  }
};

Object.assign(DEEP, DEEP_ADVANCED_REST);


/* ── Решта COMPARE ── */
const COMPARE_REST = {

  "vars_0": {
    vs: "let vs const vs var",
    items: [
      {
        label: "const",
        code: `const name = 'John';
const user = { age: 25 };
user.age = 26; // ✓ можна
name = 'Bob';  // ✗ TypeError`,
        pros: "Захищає від випадкового перезапису змінної",
        cons: "Потрібно ініціалізувати одразу"
      },
      {
        label: "let",
        code: `let score = 0;
score = 10;  // ✓ можна
let x;       // ✓ можна без значення
x = 5;`,
        pros: "Гнучкий, block-scoped (обмежений блоком {})",
        cons: "Легше випадково перезаписати"
      },
      {
        label: "var (не використовуй!)",
        code: `var x = 1;
if (true) {
  var x = 2; // перезаписує зовнішній!
}
console.log(x); // 2 — несподівано`,
        pros: "Сумісність зі старим кодом",
        cons: "Function scope замість block scope, hoisting з undefined"
      }
    ],
    winner: "Завжди const. Якщо треба перезаписати — let. var — ніколи."
  },

  "operators_0": {
    vs: "=== vs == vs Object.is()",
    items: [
      {
        label: "=== (строге)",
        code: `0 === false  // false ✓
'' === 0     // false ✓
null === undefined // false ✓`,
        pros: "Передбачувано, без конвертації типів",
        cons: "NaN === NaN дає false (але це правильно математично)"
      },
      {
        label: "== (нестроге)",
        code: `0 == false   // true ← небезпечно!
'' == 0      // true ← небезпечно!
null == undefined // true`,
        pros: "Коротше, null == undefined корисно",
        cons: "Неочевидна конвертація типів — джерело багів"
      },
      {
        label: "Object.is()",
        code: `Object.is(NaN, NaN)  // true ← відмінність!
Object.is(0, -0)     // false ← відмінність!
Object.is(1, 1)      // true`,
        pros: "Правильно обробляє NaN і -0",
        cons: "Рідко потрібен, довше писати"
      }
    ],
    winner: "Завжди === . Object.is() тільки якщо треба перевірити NaN або -0"
  },

  "conditions_0": {
    vs: "if/else vs тернарний vs switch",
    items: [
      {
        label: "if/else",
        code: `if (score >= 90) {
  grade = 'A';
} else if (score >= 75) {
  grade = 'B';
} else {
  grade = 'C';
}`,
        pros: "Найзрозуміліший, будь-яка складність умов",
        cons: "Багатослівний для простих випадків"
      },
      {
        label: "Тернарний оператор",
        code: `const status = age >= 18
  ? 'дорослий'
  : 'дитина';`,
        pros: "Короткий для простих умов, можна в JSX",
        cons: "Вкладений тернарний — нечитабельний"
      },
      {
        label: "Обʼєкт-словник",
        code: `const grades = {
  A: score >= 90,
  B: score >= 75,
  C: true,
};
const grade = Object.keys(grades).find(g => grades[g]);`,
        pros: "Легко розширювати, немає довгого if/else",
        cons: "Не підходить для складних умов"
      }
    ],
    winner: "if/else для складної логіки, тернарний для простого вибору з двох, обʼєкт для маппінгу значень"
  },

  "loops_0": {
    vs: "for vs for...of vs forEach vs map",
    items: [
      {
        label: "for",
        code: `for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) break; // можна break!
}`,
        pros: "Повний контроль, break/continue, зворотній порядок",
        cons: "Багатослівний, легко помилитись з індексом"
      },
      {
        label: "for...of",
        code: `for (const item of arr) {
  if (item === target) break; // break теж працює!
  console.log(item);
}`,
        pros: "Простий, читабельний, break працює",
        cons: "Немає індексу (але є .entries())"
      },
      {
        label: "forEach",
        code: `arr.forEach((item, index) => {
  console.log(index, item);
  // break НЕ працює!
});`,
        pros: "Є індекс, функціональний стиль",
        cons: "break/continue не працюють, не повертає значення"
      },
      {
        label: "map/filter/reduce",
        code: `const doubled = arr.map(x => x * 2);
const evens = arr.filter(x => x % 2 === 0);
const sum = arr.reduce((acc, x) => acc + x, 0);`,
        pros: "Повертають нові масиви, ланцюжок методів",
        cons: "Тільки для трансформацій, не для побічних ефектів"
      }
    ],
    winner: "for/for...of якщо потрібен break. map/filter/reduce для трансформацій. forEach для побічних ефектів"
  },

  "functions_1": {
    vs: "стрілкова vs звичайна функція",
    items: [
      {
        label: "Звичайна function",
        code: `function greet(name) {
  return 'Hello, ' + name;
}
// або
const greet = function(name) {
  return 'Hello, ' + name;
};`,
        pros: "Має власний this, arguments, підходить для методів",
        cons: "Довший запис"
      },
      {
        label: "Стрілкова =>",
        code: `const greet = name => 'Hello, ' + name;

// В методі обʼєкта — НЕБЕЗПЕЧНО:
const obj = {
  name: 'John',
  greet: () => this.name // undefined!
};`,
        pros: "Коротший запис, бере this з оточення (ідеально для колбеків)",
        cons: "Немає власного this — не підходить для методів обʼєкта"
      }
    ],
    winner: "Стрілкові для колбеків і простих функцій. Звичайні для методів обʼєктів і конструкторів"
  },

  "strings_1": {
    vs: "includes vs indexOf vs RegExp",
    items: [
      {
        label: "includes()",
        code: `'hello world'.includes('world') // true
'hello world'.includes('xyz')   // false`,
        pros: "Читабельний, повертає boolean",
        cons: "Не показує де знаходиться, чутливий до регістру"
      },
      {
        label: "indexOf()",
        code: `'hello world'.indexOf('world') // 6
'hello world'.indexOf('xyz')   // -1`,
        pros: "Показує позицію, можна починати пошук з індексу",
        cons: "Треба порівнювати з -1, менш читабельний"
      },
      {
        label: "RegExp",
        code: `/world/i.test('Hello World') // true (без регістру!)
'Hello World'.match(/\w+/g) // ['Hello', 'World']`,
        pros: "Регулярні вирази — пошук по патерну, прапор i для регістру",
        cons: "Складніший синтаксис"
      }
    ],
    winner: "includes() для простої перевірки. indexOf() якщо потрібна позиція. RegExp для складних патернів"
  },

  "strings_3": {
    vs: "split/join vs replaceAll vs RegExp",
    items: [
      {
        label: "replaceAll()",
        code: `'a b c d'.replaceAll(' ', '-')
// 'a-b-c-d'`,
        pros: "Простий і читабельний для заміни рядком",
        cons: "Тільки точна відповідність, чутливий до регістру"
      },
      {
        label: "split + join",
        code: `'a b c d'.split(' ').join('-')
// 'a-b-c-d'`,
        pros: "Гнучко, можна обробити кожну частину",
        cons: "Два кроки замість одного"
      },
      {
        label: "replace з RegExp /g",
        code: `'a b c d'.replace(/ /g, '-')
// 'a-b-c-d'

// Без регістру:
'Hello WORLD'.replace(/hello/gi, 'Hi')
// 'Hi WORLD'`,
        pros: "Підтримує патерни і прапори (i, g)",
        cons: "Складніший синтаксис"
      }
    ],
    winner: "replaceAll() для простої заміни. RegExp якщо потрібні патерни або прапор i"
  },

  "numbers_0": {
    vs: "Math.round vs toFixed vs Intl.NumberFormat",
    items: [
      {
        label: "Math.round / floor / ceil",
        code: `Math.round(4.567)      // 5  (число)
Math.round(4.567 * 100) / 100 // 4.57 (число)`,
        pros: "Повертає число, можна продовжити обчислення",
        cons: "Незручно для 2 знаків після коми"
      },
      {
        label: "toFixed(n)",
        code: `(4.567).toFixed(2)     // '4.57' (РЯДОК!)
+(4.567).toFixed(2)    // 4.57  (число після +)`,
        pros: "Зручно для відображення, задає кількість знаків",
        cons: "Повертає РЯДОК — памʼятай конвертувати!"
      },
      {
        label: "Intl.NumberFormat",
        code: `new Intl.NumberFormat('uk-UA', {
  style: 'currency',
  currency: 'UAH'
}).format(1234.5)
// '1 234,50 ₴'`,
        pros: "Локалізоване форматування, валюти, відсотки",
        cons: "Для відображення, не для обчислень"
      }
    ],
    winner: "Math.* для обчислень. toFixed() для простого відображення. Intl для локалізованих цін"
  },

  "objects_0": {
    vs: "крапка vs квадратні дужки vs optional chaining",
    items: [
      {
        label: "Крапка (dot notation)",
        code: `user.name    // 'John'
user.address // undefined (не впаде)`,
        pros: "Коротко, читабельно, автодоповнення в IDE",
        cons: "Тільки для валідних ідентифікаторів, без динамічних ключів"
      },
      {
        label: "Квадратні дужки",
        code: `user['name']        // 'John'
user['has-job']     // true (з дефісом!)
const k = 'name';
user[k]             // 'John' (динамічно)`,
        pros: "Динамічні ключі, будь-які рядки як ключ",
        cons: "Довше, немає автодоповнення"
      },
      {
        label: "Optional chaining ?.",
        code: `user?.address?.city  // undefined (не впаде)
user?.getName?.()    // undefined (не впаде)
arr?.[0]             // undefined (не впаде)`,
        pros: "Безпечний доступ до вкладених властивостей",
        cons: "Може приховати справжні помилки в коді"
      }
    ],
    winner: "Крапка — за замовчуванням. Дужки — для динамічних ключів. ?. — для необовʼязкових вкладених властивостей"
  },

  "objects_4": {
    vs: "деструктуризація vs прямий доступ vs Object.assign",
    items: [
      {
        label: "Деструктуризація",
        code: `const { name, age, city = 'Unknown' } = user;
console.log(name, age, city);`,
        pros: "Коротко, значення за замовчуванням, перейменування",
        cons: "Менш явно звідки прийшли значення"
      },
      {
        label: "Прямий доступ",
        code: `const name = user.name;
const age = user.age;`,
        pros: "Явно і зрозуміло",
        cons: "Багато коду при багатьох полях"
      },
      {
        label: "Spread + merge",
        code: `const updated = { ...user, age: 26, role: 'admin' };
// не змінює оригінал!`,
        pros: "Незмінний підхід, ідеально для Redux/state",
        cons: "Поверхнева копія"
      }
    ],
    winner: "Деструктуризація для читання. Spread для створення нових обʼєктів. Прямий доступ для 1-2 полів"
  },

  "advanced_2": {
    vs: "прототипи vs класи vs фабричні функції",
    items: [
      {
        label: "class (ES6)",
        code: `class Animal {
  constructor(name) { this.name = name; }
  speak() { return this.name + ' говорить'; }
}
class Dog extends Animal {
  bark() { return 'Гав!'; }
}`,
        pros: "Звичний синтаксис, extends для успадкування",
        cons: "Синтаксичний цукор над прототипами — може заплутати"
      },
      {
        label: "Object.create (прототипи)",
        code: `const animal = {
  speak() { return this.name + ' говорить'; }
};
const dog = Object.create(animal);
dog.name = 'Рекс';`,
        pros: "Пряме прототипне успадкування, гнучко",
        cons: "Незвичний синтаксис для тих хто знає ООП"
      },
      {
        label: "Фабрична функція",
        code: `function createDog(name) {
  return {
    name,
    speak() { return name + ' говорить'; },
    bark() { return 'Гав!'; }
  };
}
const rex = createDog('Рекс');`,
        pros: "Просто, без this, без new, приватні змінні через closure",
        cons: "Кожен обʼєкт має свої копії методів (більше памʼяті)"
      }
    ],
    winner: "class — стандарт сьогодні. Фабричні функції — для простих обʼєктів. Object.create — рідко"
  },

  "advanced_3": {
    vs: "Promise vs callback vs async/await",
    items: [
      {
        label: "Callback (старий спосіб)",
        code: `loadUser(id, function(err, user) {
  if (err) handleError(err);
  loadPosts(user.id, function(err, posts) {
    if (err) handleError(err);
    // callback hell!
  });
});`,
        pros: "Простий концепт",
        cons: "Callback hell при вкладеності, важко обробляти помилки"
      },
      {
        label: "Promise .then()",
        code: `loadUser(id)
  .then(user => loadPosts(user.id))
  .then(posts => display(posts))
  .catch(handleError);`,
        pros: "Ланцюжок, один .catch для всіх помилок",
        cons: "Важко дебажити, складно з умовами"
      },
      {
        label: "async/await",
        code: `async function load(id) {
  try {
    const user = await loadUser(id);
    const posts = await loadPosts(user.id);
    display(posts);
  } catch(err) { handleError(err); }
}`,
        pros: "Читається як синхронний код, легко дебажити",
        cons: "Легко зробити послідовні запити замість паралельних"
      }
    ],
    winner: "async/await — стандарт. Promise.all для паралельних запитів. Callbacks — тільки у старому коді"
  }
};

Object.assign(COMPARE, COMPARE_REST);
