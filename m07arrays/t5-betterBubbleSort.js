(function ()
{
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 29);

    bubbleSort(numbers);

    printArray(numbers);

    // do not check area that you already sorted
    function bubbleSort(arr)
    {

        for (var j = 0; j <arr.length; j++){
            for (var i = 0; i < (arr.length-j); i++) {

                if (arr[i] > arr[i + 1]) {
                    swap(arr, i, i + 1);
                }


            }

        }
    }

    // Utils

    // should swap elements with given positions
    function swap(arr, pos1, pos2)
    {

        var tempElement = 0;
        tempElement = arr[pos1];
        arr[pos1] = arr[pos2];
        arr[pos2] = tempElement;
    }

    // return count of elements el within array


    function fillArrayWithRndNumbers(arr, count)
    {
        for (var i = 0; i < count; i++) {
            arr[i] = getRndNumber();

        }

    }

    function printArray(arr)
    {
        console.log(JSON.stringify(arr));
    }

    function getRndNumber()
    {
        return Math.floor(Math.random() * 100);
    }

})();