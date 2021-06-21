let url = 'http://www.raydelto.org/agenda.php'
fetch(url)
.then(response => response.json())
.then(data => mostrarData(data))
.catch(error => console.log(error))

const mostrarData = (data) => {
console.log(data)
let body = ''
for (let i = 0; i<data.length; i++){
    body += `<tr><td>${data[i].nombre}</td><td>${data[i].apellido}</td><td>${data[i].telefono}</td></tr>`                
}
document.getElementById('data').innerHTML = body
}    


const name = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const number = document.getElementById('telefono')


document.getElementById('btn_enviar').addEventListener('click', Funcionenviar)



async function Funcionenviar() {
    const apiUrl = 'http://www.raydelto.org/agenda.php'
    await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({
            apellido: apellido.value,
            telefono: Number(telefono.value),
            nombre: nombre.value
        })
        
    });
    alert('Actualizar para ver la información');
    clear()
}
function clear(){
    name.value=""
    apellido.value=""
    number.value=""
    } 
    function Actualizar (){location.reload(true);}
    //Función para actualizar cada 4 segundos(4000 milisegundos)
      setInterval("actualizar()",4000);