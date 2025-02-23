const btnAdd = document.getElementById('btn-add')
    .addEventListener('click', function () {
        const inputName = document.getElementById('input-name').value;
        const inputImg = document.getElementById('input-img').value;
        const inputDesc = document.getElementById('input-desc').value;

        // Validate inputs
        if (!inputName || !inputImg || !inputDesc) {
            alert("Please fill in all fields!");
            return;
        }

        const productList = document.getElementById('product-list');

        // Create product card
        const productCard = document.createElement("div");
        productCard.className = "product-card bg-white rounded-lg shadow-md overflow-hidden";
        productCard.innerHTML = `
            <img src="${inputImg}" alt="${inputName}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h2 class="text-xl font-semibold text-[#4307B5]">${inputName}</h2>
                <p class="text-gray-600 mt-2">${inputDesc}</p>
            </div>
        `;
        productList.appendChild(productCard);

        // Clear input fields after adding
        document.getElementById('input-name').value = "";
        document.getElementById('input-img').value = "";
        document.getElementById('input-desc').value = "";
    });