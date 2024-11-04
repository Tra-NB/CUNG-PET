var keyLocalstorageItemGioHang = 'gioHang';
hienThiGioHang()


function xoaSanPham(idSP) {
    var danhSachItemGioHang = layDanhSachItemGioHang();
    danhSachItemGioHang = danhSachItemGioHang.filter(item => item.id != idSP);
    luuDSVaoLocalstorage(danhSachItemGioHang);
    hienThiGioHang();
}

function layDanhSachItemGioHang() {
    var dsItemGioHang = JSON.parse(localStorage.getItem(keyLocalstorageItemGioHang)) || [];
    return dsItemGioHang;
}

function luuDSVaoLocalstorage(danhSachItemGioHang) {
    var jsondsItemGioHang = JSON.stringify(danhSachItemGioHang);
    localStorage.setItem(keyLocalstorageItemGioHang, jsondsItemGioHang);
}

function hienThiGioHang() {
    var danhSachItemGioHang = layDanhSachItemGioHang();
    var gioHangContainer = document.querySelector('.gioHANG');
    gioHangContainer.innerHTML = '';
    danhSachItemGioHang.forEach(item => {
        var itemElement = document.createElement('div');
        itemElement.className = 'itemgioHANG';
        itemElement.innerHTML = `
            <div class="hinh-anh">
                <img src="${item.hinhAnh}">
            </div>
            <p class="ten">${item.ten}</p>
            <div class="gia">
                <span class="giaBan">${item.giaBan} VNĐ</span>
            </div>
            <input type="number" min=1 onchange="capNhapSoLuongSP(${item.id})" class="soLuong" value="${item.soLuong}">
            <p class="tongTien">${item.giaBan * item.soLuong} VNĐ</p>
            <div class="hanhDong">
                <i class="far fa-trash-alt" onclick="xoaSanPham('${item.id}')"></i>
            </div>
        `;
        gioHangContainer.appendChild(itemElement);
    });
}

function capNhapSoLuongSP(idSP) {
    // get giá trị input value 
    var  soLuong = document.querySelector('.soLuong');
    var danhSachItemGioHang = layDanhSachItemGioHang();


    // tìm san phẩm
    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        var itemGioHang = danhSachItemGioHang[i];

        // nếu tồn tại thì tăng số lượng
        if (itemGioHang.id == idSP) {
            // gán cho item.soLuong
            danhSachItemGioHang[i].soLuong = soLuong.value;
        }
    }

    luuDSVaoLocalstorage(danhSachItemGioHang)
    hienThiGioHang()
    updateCartTotal()
}
