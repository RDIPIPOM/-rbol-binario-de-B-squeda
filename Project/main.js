import SimpleList from "./BinarySearchTree.js";
import Product from "./Product.js";

var inventory = new SimpleList(new Array(20));
var tagArticle = document.querySelector('#articleReport');

//Button Add
document.querySelector('#btnAdd').addEventListener('click', () => {
    let code = Number(document.querySelector('#code').value);
    let name = document.querySelector('#name').value;
    let cost = Number(document.querySelector('#cost').value);
    let stock = Number(document.querySelector('#stock').value);
    let description = document.querySelector('#description').value;
    let position = Number(document.querySelector('#position').value);

    if (inventory.add(new Product(code, name, cost, stock, description), position))
        alert('Producto agregado correctamente');
    else
        alert('Posición o código no válido, por favor intente de nuevo');
});
//Button query
document.querySelector('#btnQuery').addEventListener('click', () => {

});
//Button create report
document.querySelector('#btnCreateReport').addEventListener('click', () => {

});