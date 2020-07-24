var button = document.getElementById("theboxes");
console.log(button);
button.addEventListener('click', myFunction);


var oldValue=0;


function myFunction() {
    console.log("test")
    let n =document.getElementById('number').value;
    n= parseInt(oldValue) + parseInt(n);
    for(var i=1;i<=n;i++){
        var box=document.createElement('buttonw');
        box.innerHTML = i;
        document.body.appendChild(box);
      
        console.log(oldValue);

    }

}

