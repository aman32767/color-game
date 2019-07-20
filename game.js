var colors=generateRandomColor(6)
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay")
var messageDisplay=document.querySelector("#message")
var h1=document.querySelector("h1");
var newColors=document.querySelector("#newColor")
var easybtn=document.querySelector("#easybtn")
var hardbtn = document.querySelector("#hardbtn")
colorDisplay.textContent=pickedColor;
var noSquares=6;


easybtn.addEventListener('click',function(){
    easybtn.classList.add("selected")
    hardbtn.classList.remove("selected")
    noSquares=3;
    colors = generateRandomColor(noSquares)

    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
})

hardbtn.addEventListener('click', function () {
    easybtn.classList.remove("selected")
    hardbtn.classList.add("selected")
    noSquares=6;
    colors = generateRandomColor(noSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
    
        squares[i].style.display="block"
    }
})
newColors.addEventListener('click', function () {
    //h1.backgroundColor = "#232323"
   newColors.textContent="New Colors"
    easybtn.disabled = false;
    hardbtn.disabled = false;
     colors = generateRandomColor(noSquares);
     pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
    }
    h1.style.backgroundColor="steelblue"
    messageDisplay.textContent="";    
})
for(var i=0;i<squares.length;i++)
{
    //add initial colors
    squares[i].style.backgroundColor=colors[i]

    //add click listners
    squares[i].addEventListener('click',function(){
        // grab color and compare with picked color
        var clickedColor=this.style.backgroundColor;
        //alert(clickedColor +"   "+pickedColor)
        if (clickedColor===pickedColor)
        {
             messageDisplay.textContent="Correct!!";
             h1.style.backgroundColor=clickedColor;
             changeColor(clickedColor);
             newColors.textContent="Play Again?"
             easybtn.disabled=true;
             hardbtn.disabled=true;
        }else{
            this.style.backgroundColor="#232323"
            messageDisplay.textContent="Try Again..";
        }
    });
}

function changeColor(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}
function pickColor()
{
    var random =Math.floor(Math.random()*colors.length);
    return colors[random];

}
function generateRandomColor(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}
