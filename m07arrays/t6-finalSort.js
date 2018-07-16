(function ()
{
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 10);

    bubbleSort(numbers);

    printArray(numbers);

    // stop sorting if arr already sorted
    // if you will get sorted array - should be only one iteration
    function bubbleSort(arr)
    {
        var wasSwapped = 0;

        for (var j = 0; j <arr.length; j++){
            if(j!==0 && wasSwapped == 0){return;}
                wasSwapped--;
            for (var i = 0; i < (arr.length-j); i++) {

                if (arr[i] > arr[i + 1]) {
                    swap(arr, i, i + 1);
                    wasSwapped++;
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