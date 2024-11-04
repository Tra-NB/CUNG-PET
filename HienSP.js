

function add(container, inventory){
    for (var i = 0; i < inventory.length; i++){
        var nodeSp = document.createElement("div");
        nodeSp.classList.add("boxSP");
        var str2 = `
            <img src="${inventory[i].hinhAnh}">
            <p>${inventory[i].ten}</p>
            <div class="giaNUTmua">
                <div class="gia">
                    <p>${inventory[i].giaBan}&nbsp;VND</p>
                </div>
                <div class="Nutmua" onclick="themSanPhamVaoGioHang(${inventory[i].id})">
                    <p>Thêm vào giỏ</p>
                </div>
            </div>
        `;
        nodeSp.innerHTML = str2;
        container.appendChild(nodeSp);
       
    }
    console.log(inventory);
}


