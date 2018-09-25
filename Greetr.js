(function(global, $){

  var Greetr = function(firstName, lastName, language){
    return new Greetr.init(firstName, lastName, language);
  }

  // the only languages supported
  var supportedLangs = ['en', 'es'];

  // formal and non formal greetings for each language is placed in their respective objects
  var greetings = {
    en: "Hello",
    es: "Hola"
  };

  var formalGreetings = {
    en: "Greetings",
    es: "Saludos"
  };

  // messages to be logged to the console whenever a greeting is used
  var logMessages = {
    en: 'Loggin in',
    es: 'Inicio sesion'
  };

  // methods are placed on the prototype instead of the object itself to save memory
  Greetr.prototype = {

    fullName: function(){
      return this.firstName + ' ' + this.lastName;
    },

    // ensure either of the correct language options are passed in
    validate: function(){
      if(supportedLangs.indexOf(this.language) === -1){
        throw "Invalid language. Ensure the language is either \"en\" or \"es\"";
      }
    },

    greeting: function(){
      return greetings[this.language] + " " + this.firstName + "!";
    },

    formalGreeting: function(){
      return formalGreetings[this.language] + ", " + this.fullName();
    },

    greet: function(formal){
      var msg;

      //  if undefined or null it will be coerced to 'false'
      if(formal){
        msg= this.formalGreeting();
      }
      else{
        msg = this.greeting();
      }

      if(console){
        console.log(msg);
      }

      // 'this' refers to the calling object at execution time allows the method to be
      // chainable by returning 'this'
      return this;
    },

    log: function(){
      // ensures a console is available
      if(console){
        console.log(logMessages[this.language] + " " + this.fullName());
      }
      // allows the log message to be chainable
      return this;
    },
    setLang: function(lang){
      // update language
      this.language = lang;

      // method to validate the passed in language
      this.validate();

      // allows the log message to be chainable
      return this;
    }
  };

  // object is initialized here with default values if nothing is passed in
  Greetr.init = function(firstName = 'First', lastName='Last', language='en'){

    var self = this;
    self.firstName = firstName;
    self.lastName = lastName;
    self.language = language;
}

  // Greetr.init's prototype is set to Greetr.prototype
  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

}(window, jQuery));
