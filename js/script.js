const product = [
    {
        id: 0,
        image: 'images/img-1.jpg',
        title: 'Flower Pot',
        price: 120,
    },
    {
        id: 1,
        image: 'images/img-2.jpg',
        title: 'Flower Pot',
        price: 60,
    },
    {
        id: 2,
        image: 'images/img-3.jpg',
        title: 'Flower Pot',
        price: 230,
    },
    {
        id: 3,
        image: 'images/img-4.jpg',
        title: 'Flower Pot',
        price: 150,
    },
    {id: 4,
    image: 'images/img-5.jpg',
    title: 'Flower Pot',
    price: 130,
},
{id: 5,
    image: 'images/img-6.jpg',
    title: 'Flower Pot',
    price: 140,
},
{id: 6,
    image: 'images/img-7.jpg',
    title: 'Flower Pot',
    price: 135,
},
{id: 7,
    image: 'images/img-8.jpg',
    title: ' Flower Pot  ',
    price: 100,
},
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}