/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

var rules = [
  {
    rule: function(value) { return value.length < 16 },
    message: 'Password must be at least 16 characters'
  },
  {
    rule: function(value) { return value.length > 100 },
    message: 'Password must be less than 100 characters'
  },
  {
    rule: function(value) { return !value.match(/[\!\@\#\$\%\^\&\*]/g) },
    message: 'Password must contain a symbol'
  },
  {
    rule: function(value) { return !value.match(/[0-9]/g) },
    message: 'Password must contain a number'
  },
  {
    rule: function(value) { return !value.match(/[a-z]/g) },
    message: 'Password must contain a lowercase letter'
  },
  {
    rule: function(value) { return !value.match(/[A-Z]/g) },
    message: 'Password must contain an uppercase letter'
  },
  {
    rule: function(value) { return value.match(/[^A-z0-9\!\@\#\$\%\^\&\*]/g) },
    message: 'Illegal characters used'
  }
]

/*
You'll probably find this function useful...
 */
submit.onclick = function () {
  var firstValue = firstPasswordInput.value;
  var secondValue = secondPasswordInput.value;
  var errors = [];

  if (firstValue != secondValue) {
    errors.push('Passwords do not match')
    secondPasswordInput.setCustomValidity('Passwords do not match')
  }

  errors = rules
    .filter(function(r) {
      return r.rule(firstValue)
    })
    .map(function(r) {
      return r.message
    })

  firstPasswordInput.setCustomValidity(errors.join(', '))

}
