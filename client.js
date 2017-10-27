var myApp = angular.module('myApp', []);
console.log('js sourced');
nameList = '';
myApp.controller('GuessWhoController',function(){
    var guess = this;
    guess.message = 'names clicked:'
    var people = [
        { name: 'Chris', github: 'christopher-black'},
        { name: 'Kris', github: 'kdszafranski'},
        { name: 'Ally', github: 'lysautumn'}
    ];
    guess.people = people;

    guess.add = function(input1, input2){
        var object = {
            name: input1,
            github: input2,
            show: false
        };
        people.push(object);
    }

    guess.showName = function (person){
        console.log(person);
      guess.message =  guess.message + ' ' + person.name; 
    }
})
