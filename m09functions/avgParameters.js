(
   function () {

       function avgParameters() {
           var sum = 0;

           for (var i = 0; i < arguments.length; i++) {
               sum += arguments[i];
           }

           return sum / arguments.length;
       }

       console.log(avgParameters(1,7,2));
   }

)();