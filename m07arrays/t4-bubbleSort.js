(function () {
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 10);
    printArray(numbers);
    bubbleSort(numbers);

    printArray(numbers);

    function bubbleSort(arr) {

        //ON*N
        for (var j = 0; j <arr.length; j++){
        for (var i = 0; i < arr.length; i++) {

            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
            }


        }

    }}

    // Utils

    function swap(arr, pos1, pos2) {

        var tempElement = 0;
        tempElement = arr[pos1];
        arr[pos1] = arr[pos2];
        arr[pos2] = tempElement;
    }


    function fillArrayWithRndNumbers(arr, count) {
        for (var i = 0; i < count; i++) {
            arr[i] = getRndNumber();

        }

    }

    function printArray(arr) {
        console.log(JSON.stringify(arr));
    }

    function getRndNumber() {
        return Math.floor(Math.random() * 100);
    }

})();