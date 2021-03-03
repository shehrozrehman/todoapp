var list = document.getElementById('list')

function addtodo()
 {
    
var dataa = document.getElementById('todo_data')
var li = document.createElement('li')
var litext = document.createTextNode(dataa.value)
// if(dataa.value=" ")
//     {
//         alert("enter any text")
//     }

li.appendChild(litext)

var btn = document.createElement('button')
var btntext = document.createTextNode('DELETE')
 btn.setAttribute("class", "but")
 btn.setAttribute("onclick","delbtn(this)")
 btn.appendChild(btntext)
 var editbtn = document.createElement('button')
var editbtntext = document.createTextNode('Edit')
editbtn.setAttribute("class","editbtn")


editbtn.setAttribute("onclick" , "editbtn(this)")
editbtn.appendChild(editbtntext) 





li.appendChild(btn)
li.appendChild(editbtn)

list.appendChild(li)




dataa.value = "" ;


}


function editbtn(e) {


//    var po =  e.parentNode.firstChild.nodeValue ;

   var edittvalue  = prompt("enter any value")


   e.parentNode.firstChild.nodeValue  =  edittvalue ; 






}

function delbtn(e) {

    e.parentNode.remove()

}

function deleteall() {

    list.innerHTML  = "" ;
}