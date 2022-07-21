function Submit(){    
    let dataEntered = retrievData();
    let readData = readingDataFromLocalStore(dataEntered);
    insert(readData);
}   

//CREATE crear

function retrievData(){ // crear
    let name1= document.getElementById("name").value; 
    let job= document.getElementById("job").value;
    let exp= document.getElementById("experience").value;

    let arr = [name1, job, exp];
    
        return arr;
     


}
 //datos en  local storage
function readingDataFromLocalStore(dataEntered){ 
    let n= localStorage.setItem("Nombre",dataEntered[0]);
    let j= localStorage.setItem("Job",dataEntered[1]);
    let e= localStorage.setItem("Experiencia",dataEntered[2]);

    
    let n1 = localStorage.getItem("Nombre", n);
    let j1 = localStorage.getItem("Job", j);
    let e1 = localStorage.getItem("Experiencia", e);
   

    
    let arr = [n1, j1, e1];
    return arr;
 
}

//insert
function insert(readData){
    var row= table.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = `<button class="editar" onclick = edit(this)>Editar</button>
                                <button onclick = remove(this)>Borrar</button>`;


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
    document.getElementById("experience").value = row.cells[2].innerHTML


}

//update
function update(){
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("job").value;
    row.cells[2].innerHTML = document.getElementById("experience").value;
    row = null;
}

//delete




