(function () {
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 10000);

    printArray(numbers);

    console.log(getCountOfElements(numbers, 23));

    // return count of elements el within array
    function getCountOfElements(arr, el) {
        var counter = 0;
        for (var i = 0; i < arr.length; i++) {

          if (arr[i]===el){
              counter++;
          }

        }

        return counter;
    }


    function fillArrayWithRndNumbers(arr, count) {
        for (var i = 0; i < count; i++) {
            arr[i] = getRndNumber();
        }

    }

    // Utils

    function printArray(arr) {
        console.log(JSON.stringify(arr));
    }

    function getRndNumber() {
        return Math.floor(Math.random() * 100);
    }

})();