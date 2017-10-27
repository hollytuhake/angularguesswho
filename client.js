var myApp = angular.module('myApp', []);
console.log('js sourced');
nameList = '';
myApp.controller('GuessWhoController',function(){
    var guess = this;
    guess.message = 'names clicked:'
    var people = [
        { name: 'Chris', github: 'christopher-black', show:false},
        { name: 'Kris', github: 'kdszafranski', show:false},
        { name: 'Ally', github: 'lysautumn', show:false}
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
      //person.show = !person.show;
      guess.message =  guess.message + ' ' + person.name; 
    }
})

this.arrayText = [{
    text1: 'Hello',
    text2: 'world',
}];

this.addText = function (text) {
    this.arrayText.push(text);
}
this.form = {
    text1: '',
    text2: ''
};