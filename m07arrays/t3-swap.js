(function ()
{
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 10);

    printArray(numbers);

    swap(numbers, 1, 4);

    printArray(numbers);


    // should swap elements with given positions
    function swap(arr, pos1, pos2)
    {

        var tempElement =0;
        tempElement=arr[pos1];
        arr[pos1] = arr[pos2];
        arr[pos2] = tempElement;

    }


    // Utils

    function fillArrayWithRndNumbers(arr, count)
    {
        for (var i = 0 ; i<count; i++){
            arr[i]=getRndNumber();

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