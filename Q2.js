
function show()
{
    let username=document.getElementById('inputusename').value;
    let Password=document.getElementById('inputpassword').value;

    if(username=="" || Password=="")
    {
        document.getElementById('masg').innerHTML="Filleds are required";
    }    
    else
    {
        document.getElementById('masg').innerHTML="";
        let box=document.getElementById('Insert').children[0].cloneNode(true);

        
        console.log(document.getElementById('Insert').children[0]);

        let target=document.getElementById('Insert');

        box.children[0].innerHTML=username;
        box.children[1].innerHTML=Password;
        
        target.appendChild(box);

        document.getElementById('inputusename').value="";
        document.getElementById('inputpassword').value="";
    }
}