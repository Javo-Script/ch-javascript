let table = document.createElement("table");
table.innerHTML = `<tr>
  <td>ID</td>
  <td>Producto</td>
  <td>Precio</td>
</tr>`;

for (product of products){
  let row = document.createElement("tr");
  row.innerHTML = `<td>${product.id}</td>
  row.innerHTML = <td>${product.product}</td>
  row.innerHTML = <td>${product.price}</td>`
}