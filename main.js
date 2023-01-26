let table = document.querySelector('.table');
let modal = document.querySelector('.modal-content');
let save = document.querySelector('#save');


save.addEventListener('click', ()=>{
    
    let names=document.querySelector('#name').value;
    let lastname=document.querySelector('#lastname').value;
    let nit=document.querySelector('#nit').value;
    let address=document.querySelector('#address').value;
    let city=document.querySelector('#city').value;
    let phone=document.querySelector('#phone').value;
    let availableSpace=document.querySelector('#available-space').value;

    if(names!='' && lastname!='' && nit!='' && address!='' && city!='' && phone!=''){

        table.innerHTML+=`
        <tr> 
            <td>${names}</td>
            <td>${lastname}</td>
            <td>${nit}</td>
            <td>${address}</td>
            <td>${city}</td>
            <td>${phone}</td>
            <td>${availableSpace}</td>
            <td>Activo</td>
            <td><?xml version="1.0" ?><svg enable-background="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 50"><path d="M6,12v15c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V12H6z M12,25c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9  c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M17,25c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M22,25  c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z" id="XMLID_237_"/><path d="M27,6h-6V5c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v1H5C3.897,6,3,6.897,3,8v1c0,0.552,0.448,1,1,1h24  c0.552,0,1-0.448,1-1V8C29,6.897,28.103,6,27,6z M13,5c0-0.551,0.449-1,1-1h4c0.551,0,1,0.449,1,1v1h-6V5z" id="XMLID_243_"/></svg></td>
        `
       
    }else{
        alert('ERROR!!! Campos Vacios');
    }
});


