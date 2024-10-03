var disp = document.getElementById('display');
function displayInput(n)
{
    disp.value = disp.value+n;
}
function clearInput()
{
    disp.value='';
}
function displayResult()
{
    var userInput = document.getElementById('display').value;
    var result = eval(userInput);
    document.getElementById('display').value=result;
}