const btnAdd = document.getElementById('btn-add')
    .addEventListener('click', function () {
        const inputName = document.getElementById('input-name').value;
        const inputImg = document.getElementById('input-img').value;
        const inputDesc = document.getElementById('input-desc').value;
        
        
        const productList = document.getElementById('product-list');
        
        const div = document.createElement("div");
        div.innerHTML = `
        <h2>${inputName}</h2>
        <img src=${inputImg} alt="">
        <p>${inputDesc}</p>
        `;
        productList.appendChild(div);
    })

