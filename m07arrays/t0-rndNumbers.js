(
    function ()
{
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 1000);

    printArray(numbers);

    function fillArrayWithRndNumbers(arr, count)
    {
        for (var i = 0 ; i<count; i++){
            arr[i]=getRndNumber();
            //console.log(arr.toString());
        }}

    // Utils

    function printArray(arr)
    {
        console.log(JSON.stringify(arr));
    }

    function getRndNumber()
    {
        return Math.floor(Math.random() * 100);
    }

}
)();