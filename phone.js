const phones = [
    {name:'iPhone', camera: 6, Storage:'32gb', price: 85000, color: 'silver'},
    {name:'vivo', camera: 5, Storage:'32gb', price: 25000, color: 'black'},
    {name:'realme', camera: 8, Storage:'32gb', price: 30000, color: 'gold'},
    {name:'oppo', camera: 10, Storage:'32gb', price: 45000, color: 'black'},
    {name:'nokia', camera: 3, Storage:'32gb', price: 15000, color: 'black'}
]

function highCamera(phones){
    let cam = phones[0]
    for(i = 0; i <phones.length; i++){
        const phone = phones[i];
        if (phone.camera > cam.camera) {
            cam = phone;
        }
    } 
    return cam;
}

const camera = highCamera(phones)
console.log(camera)