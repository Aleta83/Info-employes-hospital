var row = null;       //variable global

function Submit(){    
    let dataEntered = retrievData();
    let readData = readingDataFromLocalStore(dataEntered);
    if (dataEntered == false){             //validar 
        msg.innerHTML =  '<span class="insertado"> Por favor introduce la informacion completa</span>';
    }else {
        if(row == null){
            insert(readData);
            msg.innerHTML = '<span class="insertado"> Informacion Insertada! </span>' ;
            
        }else{
            update();
            msg.innerHTML = '<span class="insertado">Informacion actualizada 🙂 </span>' ;
        }
    }
  document.getElementById("form").reset();
}

//CREATE

function retrievData(){     // crear
    let name1= document.getElementById("name").value; 
    let job= document.getElementById("job").value;
    let exp= document.getElementById("area").value;

    var arr = [name1, job, exp];
    if (arr.includes("")){
        return false;
    }else{
        return arr;
    }
}
 
function readingDataFromLocalStore(dataEntered){        //datos en  local storage
    var n= localStorage.setItem("Nombre", dataEntered[0]);
    var j= localStorage.setItem("Puesto", dataEntered[1]);
    var e= localStorage.setItem("Area de trabajo",dataEntered[2]);

    
    var n1 = localStorage.getItem("Nombre", n);
    var j1 = localStorage.getItem("Puesto", j);
    var e1 = localStorage.getItem("Area de trabajo", e);
   

    
    var arr = [n1, j1, e1];
    return arr;
 
}

//insert
function insert(readData){
    var row= table.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = `<button class="editar" onclick = edit(this)>Editar</button>
                                <button class="delete" onclick = remove(this)>Borrar</button>`;


    /* esta es otra forma 
   cell1.innerHTML = readData[0];
   cell2.innerHTML = readData[1];
   cell3.innerHTML = readData[2]; */
   
}
//edit
function edit(td){
    row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("job").value = row.cells[1].innerHTML;
    document.getElementById("area").value = row.cells[2].innerHTML


}

//update
function update(){
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("job").value;
    row.cells[2].innerHTML = document.getElementById("area").value;
    row = null;
}

//delete
function remove(td){
    let ans = confirm("Estas seguro de querer borrar los datos?")
    if (ans == true){
       
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        msg.innerHTML = '<p>Informacion Eliminada</p>'
    }
    
}


it 
