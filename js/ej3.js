// usar match random para obtener los numeros aleatorios.

let sumas = [];
let repeticion = 1;
for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  let dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  let resultado = dado1 + dado2;
  sumas.push(resultado);
}

document.write("Resultado de sumas de los dados: " + sumas);

document.write(` <table>
<thead>
    <tr>
        <th>Resultado</th>
        <th>Repeticion de Resultado</th>
    </tr>
    
</thead>

<tbody>`);

for (let i = 2; i <= 12; i++){
    document.write(`<tr>`);
let contador = 0
    for(let posicion = 0; posicion < sumas.length; posicion++){
        if(i === sumas[posicion]){
contador++
        }
    }
    document.write(`<td> ${i} </td>
    <td> ${contador} </td>`);
    document.write(`</tr>`);
    
} 
document.write(` 
    </tbody>
    </table>`);