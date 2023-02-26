var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
}


var bigimg = document.getElementsByClassName('left-column')
var bi = document.createElement('img')
bi.src= productData.preview

bigimg[0].appendChild(bi)

var nam = document.getElementById('name')
var brand = document.getElementById('brand')
var price = document.getElementById('price')
var description = document.getElementById('description')
var img0 = document.getElementById('img0')
var img1 = document.getElementById('img1')
var img2 = document.getElementById('img2')
var img3 = document.getElementById('img3')
var img5 = document.getElementById('img4')
var img5 = document.getElementById('img5')

nam.innerHTML = productData.name
brand.innerHTML = productData.brand
price.innerHTML = productData.price
description.innerHTML = productData.description
img0.src = productData.photos[0]
img1.src = productData.photos[1]
img2.src = productData.photos[2]
img3.src = productData.photos[3]
img4.src = productData.photos[4]


var x = document.getElementsByClassName('previewImg')
// console.log(x[0]);
var data = x[0].getElementsByTagName('img')
// console.log(data[0]);

// for (let index = 0; index < data.length; index++) {
//     console.log(data[index].src);
//     var z = data[index]
//     z.addEventListener('click',chan())
// }

// function chan(){
//     bi.src = data[index].src
//     z.classList.add('active')
// }

for (let i = 0; i < data.length; i++) {
    data[i].addEventListener('click',function(){
        // console.log(data[i].src)
        bi.src = data[i].src
        addact(i)
    })
}

function addact(i){
    document.querySelector('.active')?.classList.remove('active')
    data[i].classList.add('active')
}


// img1.addEventListener('click',function(){
//     bi.src = img1.src
//     document.querySelector('.active')?.classList.remove('active')
//     img1.classList.add('active')
// })