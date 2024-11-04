var totalPayment = 0;
var discount = 0;

function updateCartTotal() {
    var danhSachItemGioHang = layDanhSachItemGioHang();
    var total = danhSachItemGioHang.reduce((sum, product) => sum + (product.soLuong * product.giaBan), 0);
    totalPayment = total + discount;
    if(totalPayment < 0) {totalPayment = 0}
    document.querySelector('.giamGiaCart').innerText = formattedValue(discount);
    document.querySelector('.tongTienCart').innerText = formattedValue(total);
    document.querySelector('.ThanhToanCart').innerText = formattedValue(totalPayment);
}

function formattedValue(value) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(value);
}

var keyLocalstorageItemGioHang = 'gioHang';

function layDanhSachItemGioHang() {
    var dsItemGioHang = [];
    var jsondsGiohang = localStorage.getItem(keyLocalstorageItemGioHang) || '[]';
    if (jsondsGiohang) {
        dsItemGioHang = JSON.parse(jsondsGiohang);
    }
    return dsItemGioHang;
}

function XoaGioHang() {
    localStorage.removeItem(keyLocalstorageItemGioHang);
    hienThiGioHang();
    updateCartTotal();
}

function thanhToanGioHang() {
    var danhSachItemGioHang = layDanhSachItemGioHang();
    if (danhSachItemGioHang.length === 0) {
        alert('Giỏ hàng trống!');
        return;
    }

    alert('Thanh toán thành công! Tổng số tiền: ' + formattedValue(totalPayment));
    discount = 0
    localStorage.removeItem(keyLocalstorageItemGioHang);
    hienThiGioHang();
    updateCartTotal();
}

function KhuyenMai() {
    const promoEndTime = localStorage.getItem('promoEndTime');
    if (!promoEndTime || new Date().getTime() > new Date(promoEndTime).getTime()) {
        alert("Chú ý: Thời gian khuyến mãi đã hết !!!");
        return;
    }

    var vouchers = {
        'ILoveH': 20000,
        'PET&TaH': 30000,
        'TaH': 40000
    };
    const voucherCode = document.querySelector('.codeKM').value;
    if (vouchers.hasOwnProperty(voucherCode)) {
        discount = -vouchers[voucherCode];
        alert('Áp dụng voucher thành công!');
    } else {
        discount = 0;
        alert('Mã khuyến mãi không hợp lệ!');
    }
    updateCartTotal();
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
            <input type="number" onchange="capNhapSoLuongSP(${item.id})" class="soLuong" value="${item.soLuong}">
            <p class="tongTien">${item.giaBan * item.soLuong} VNĐ</p>
            <div class="hanhDong">
                <i class="far fa-trash-alt" onclick="xoaSanPham(${item.id})"></i>
            </div>
        `;
        gioHangContainer.appendChild(itemElement);
    });
}

updateCartTotal();
