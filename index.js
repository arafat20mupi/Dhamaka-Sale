let titlecount = 1
let totalPrice = 0
// let discount = 0
const cards = document.querySelectorAll('.card');
for (var i = 0; i < cards.length; i++) {
    const card = cards[i];
    
    card.addEventListener('click' , function(){
        // title 
        const title = card.querySelector('h3').innerText;
        const titleContainer = document.getElementById('title-container')
        const p = document.createElement('p');
        p.innerText =titlecount + "." +  title
        titleContainer.appendChild(p);
        titlecount++
        // proce 
        const price = parseFloat(card.querySelector('span').innerText.split(' ')[1]);
        totalPrice += price
        document.getElementById('totalPrice').innerHTML = totalPrice.toFixed(2)
    })
}
const btn = document.getElementById('apply-btn')
btn.addEventListener('click',function(){
    const coupon = document.getElementById('input-field').value 
    const couponValue = coupon.split(" ").join("")
    if (totalPrice >= 200) {
        if (couponValue === 'SELL200'){
            const discountPrice = document.getElementById('discountPrice')
            const discountAmount = totalPrice *0.2
            discountPrice.innerText = discountAmount.toFixed(2)
            const total = document.getElementById('total')
            total.innerText = totalPrice - discountAmount.toFixed(2)
            document.getElementById('input-field').value = "";
        }
        else {
            alert('coupon code is invalid')
            document.getElementById('input-field').value = "";
        }
    }
    else{
        alert('at least $200 tk khoros koran vai') 
        document.getElementById('input-field').value = "";
    }
})