(function ()
{
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 10);

    bubbleSort(numbers);

    printArray(numbers);

    function bubbleSort(arr)
    {
        // TODO your code here
    }

    // Utils

    // should swap elements with given positions
    function swap(arr, pos1, pos2)
    {
        // TODO your code here
    }

    function getCountOfElements(arr, el)
    {
        // TODO your code here
    }


    function findElement(arr, el)
    {
        // TODO your code here
    }

    function fillArrayWithRndNumbers(arr, count)
    {
        // TODO your code here

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