// 1. Создай класс Person и класс-наследник Student. 
// Класс Person должен иметь свойства name и метод introduce, 
// который выводит строку вида "Привет, меня зовут (имя)". 
// Класс Student должен наследовать Person и добавлять свойство course и переопределенный метод introduce, 
// который выводит строку вида "Привет, меня зовут (имя), и я учусь на (курсе) курсе". 
// Используй console.log(Student.prototype) и исследуй, как JavaScript создает цепочку прототипов;

class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Привет, меня зовут ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    introduce() {
        console.log(`Привет, меня зовут ${this.name}, и я учусь на ${this.course} курсе`);
    }
};

const student = new Student('Alex', 3);
student.introduce();

console.log(Student.prototype);



// 2. Создай класс Employee, наследующий Person. Класс должен добавлять свойство position и метод work, 
// который выводит строку "Я работаю на позиции (должность)". 
// Переопредели метод introduce так, чтобы он также включал информацию о должности;

class Employee extends Person {
    constructor(name, position) {
        super(name);
        this.position = position;
    }

    work() {
        console.log(`Я работаю на позиции ${this.position}`);
    }

    introduce() {
        super.introduce();
        this.work();
    }
}

const worker = new Employee('Alice', 'barista');

worker.introduce();



// 3. Создай объектное наследование без использования классов. 
// Создай объект Vehicle с методом move. Создай объект Car, который наследует от Vehicle, добавив свой метод drive. 
// Используй Object.create для наследования.

function Vehicle(name) {
    this.name = name;
}

Vehicle.prototype.move = function() {
    return `${this.name} едет`;
}

function Car(name, place) {
    Vehicle.call(this, name);
    this.place = place;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.drive = function() {
    return `${this.name} едет по ${this.place}`
}

const car = new Car('Мазда', 'дороге');
console.log(car.drive());
console.log(car.move());

