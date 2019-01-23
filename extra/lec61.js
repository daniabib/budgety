/* var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job
    this.calculateAge = function() {
        console.log(2016 - this.yearOfBirth);
    }
};

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
};

var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1973, "designer");
var mark = new Person("Mark", 1948, "retired");
 */

 //Object.create
/*  var personProto = {
     calculateAge: function() {
        console.log(2019 - this.yearOfBirthday)
     }
 };

 var john = Object.create(personProto);
 john.name = "John";
 john.yearOfBirthday = 1990;
 john.job = "teacher";

 var jane = Object.create(personProto, {
     name: { value: "Jane" },
     yearOfBirthday: { value: 1969 },
     job: { value: "designer" }
 }); */

 //LECTURE: Passing function as arguments
/* 
    var years = [1990, 1965, 1937, 2005, 1998];

    function arrayCalc(arr, fn){
        var arrRes = [];
        for(var i = 0; i < arr.length; i++){
            arrRes.push(fn(arr[i]));
        }
        return arrRes;
    };

    //callback functions
    function calculateAge(el){
        return 2016 - el;
    };

    function isFullAge(el) {
        return el >= 18;
    }

    function maxHeartRate(el) {
        if (el >= 18 && el <= 81) {
            return Math.round(206.9 - (0.67 * el));
        } else {
            return -1;
        }
    }

    var ages = arrayCalc(years, calculateAge);
    var fullAges = arrayCalc(ages, isFullAge);
    var rates = arrayCalc(ages, maxHeartRate);

    console.log(ages);
    console.log(fullAges);
    console.log(rates);
     */

/* function interviewQuestion(job) {
    if (job === "designer") {
        return function(name) {
            console.log(name + ", can you please explain what UX design is?");
        }
    } else if (job === "teacher") {
        return function(name) {
            console.log("What subject do you teach, " + name + "?");
        }
    } else {
        return function(name) {
            console.log("Hello " + name + ", what do you do?");
        }
    }
}

var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");

teacherQuestion("John");
designerQuestion("John");

interviewQuestion("teacher")("Mark");

//My func
function caloriesMeet(num) {
    if (num < 1000) {
        return function(name) {
            console.log("You can eat more " + name);
        }
    } else if (num > 1000 && num < 2000) {
        return function(name) {
            console.log("Normal eating day, " + name);
        }
    } else {
        return function(name) {
            console.log("You eat a lot today, " + name);
        }
    }
}

var eatToday = caloriesMeet(1300)("Jessica");
var eatToday = caloriesMeet(5000)("Daniel"); */

// LECTURE: IIFE - Immediately Invoked Function Expression
/* function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})(); */

//////////////////////////////////
//LECTURE: Closures

/* function retirement(retirementAge) {
    var a = " years left until retirement"
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain' + name);
        } else if (job === 'teacher') {
            console.log('What do you teach ' + name);
        } else {
            console.log('Waht do you do ' + name);
        }
    }
}

interviewQuestion('teacher')('John'); */

/////////////////////////////////////
//LECTURE: Bind, call and aplay
/* 
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon'); */

///////////////////////////
//CODING CHALENGE 7

(function() {
    function Question(question, answers, correct) {
        //Question
        this.question = question;
        //Answers options
        this.answers = answers;
        //Correct answer
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ": " + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log("Correct answer!");
            sc = callback(true);
        } else {
            console.log("Wrong anster, try again.");
            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log("Your current score list: " + score);
        console.log("-----------------------");
    }

    var q1 = new Question("Quantos anos eu tenho?", ["30", "25", "12"], 0);
    var q2 = new Question("Comer eh...", ["Muito ruim!", "Muito bom!"],1);
    var q3 = new Question("Dois mais dois", ["2", "4", "Banana"],1);
    
    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        
        questions[n].displayQuestion();
        
        var answer = prompt("Please select the correct answer.");
        
        if(answer !== "exit") {
            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }
    };

    nextQuestion();

})();


