const display = document.getElementById("card-js-display")
const titleProduct = document.getElementById("product-title")

const productDatas = [

    {
        coffeeName: 'Aren Latte',
        price: '18.000',
        coffeeImage: '../assets/images/aren-latte.png'
    },
    {
        coffeeName: 'Cafe Latte',
        price: '24.000',
        coffeeImage: '../assets/images/cafe-latte.png'
    },
    {
        coffeeName: 'Caramel Latte',
        price: '30.000',
        coffeeImage: '../assets/images/caramel-latte.png'
    },
    {
        coffeeName: 'Americano',
        price: '18.000',
        coffeeImage: '../assets/images/americano.png'
    },
    {
        coffeeName: 'Capucino',
        price: '24.000',
        coffeeImage: '../assets/images/cappucino.png'
    },
    {
        coffeeName: 'Butterscotch',
        price: '24.000',
        coffeeImage: '../assets/images/americano.png'
    }
]

const productdetaildata = productDatas.map((datas) => {
    return datas

})

const ambilId = (id) => {
    const detailData = productdetaildata[id]
    titleProduct.style.display = 'none'

    display.innerHTML = `
    <div class="detail-wrapper" >
    <div class="responsive-wrapper">
        <img src="${detailData.coffeeImage}" alt="">
    <div class="detail-message" >
        <h6>${detailData.coffeeName}</h6>
        <h5>Smooth like butter like criminal undercover</h5>
        <p>Rp ${detailData.price},-</p>
    </div>
    </div>
        <div class="description-detail" >
            <h6>Description</h6>
            <span class="seperate" ></span>
            <p>Made with a perfect combination of freshly grinded
            arabica coffee beans, full cream milk, and exquisite
            butterscotch sauce. Perfect for those who crave a
            little bit of sweet things in their life.</p>
        </div>
        <button onClick="window.location.reload();" >
            <img src="../assets/icons/Arrow.svg" />
            <p>Back to our products</p>
        </button>
    </div>
    `
}


const product = productDatas.map((productData, index) => {
    // itu key sepertinya tidak berpengaruh :v
    // react js
    return `
    <button key=${index} onclick="ambilId(${index})">
    <div class="card-big"  >
    
    <div class="card-small">
    <div class="card-small-message">
    <h6>${productData.coffeeName}</h6>
    <h5>Rp ${productData.price},-</h5>
    
    </div>
    <div class="card-small-img" >
    <img src=${productData.coffeeImage} alt="">
    </div>
    </div>
    </div>
    </button>
    `
})


display.innerHTML = product




