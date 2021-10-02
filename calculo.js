
const cart = require('./cart.json')
// console.log(Cart);
// 1. calcular a quantidade de produtos no objeto cart.
// 2. somar o valor total do cart.
// 3. imprimir o nome de cada produto no cart/*

    

    let Quantidade = cart.items
        .map(item => item.quantity)
        .reduce((acumulador, atual) => acumulador + atual, 0)
        console.log('Quantidade de itens no carrinho:' , Quantidade ,'\n');

    let Pagar = cart.items
        .map(item => item.quantity * item.price)
        .reduce((acumulador, atual) => acumulador + atual, 0)
         console.log('Valor total no carrinho: ', Pagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),'\n');
 
    console.log("Descrição dos itens: ")
   
    for (let i = 0; i < cart.items.length; i++) {

        Produto = cart.items[i].title
        Quantidade = cart.items[i].quantity
        Preço = cart.items[i].price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        
        console.log('Produto:' , Produto ,'\n', 'Quantidade:', Quantidade,'\n', 'Preço:' , Preço)
    
        let totalForProduct = cart.items[i].quantity * cart.items[i].price
        console.log('Total: ', totalForProduct.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),'\n')
    
    }
    
          
       
    
