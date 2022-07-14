function addItem()
{
    let textBox=document.getElementById('textBox');
    let table=document.getElementById('table');

    const editButton=document.createElement('button');
    editButton.innerHTML='Edit';
    

    const deleteButton=document.createElement('button');
    deleteButton.innerHTML='Delete';
    
    if(textBox.value!='')
    {
        let state=table.rows.length;
        let new_row=table.insertRow(-1);
         var cell1 = new_row.insertCell(0);
         var cell2 = new_row.insertCell(1);
         

        // // Add some text to the new cells:
         cell1.innerHTML = textBox.value;
         cell2.appendChild(editButton); 
         editButton.addEventListener("click",function(){
            editClicked(cell1.innerHTML,state);
         });  
         cell2.appendChild(deleteButton);    
         
         deleteButton.addEventListener("click",function(event){
            event.target.parentElement.parentElement.remove();
         }); 
        }
        
}
function editClicked(cell1,state)
        {
            textBox.value=cell1;
            
            document.getElementById('main-btn').innerHTML='update';
            document.getElementById('main-btn').onclick=update;
            function update()
            {
                table.rows[state].childNodes[0].innerHTML=textBox.value;
                 document.getElementById('main-btn').innerHTML='ADD';
                 textBox.value='';
                 document.getElementById('main-btn').onclick=addItem;
            }
        }



