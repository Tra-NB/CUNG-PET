

var keyLocalstorageItemGioHang = 'gioHang';


function themSanPhamVaoGioHang(idSP) {
    alert('Sản phẩm được thêm vào có ID là: ' + idSP);

    var danhSachItemGioHang = layDanhSachItemGioHang();

    // thêm item vào ds của giỏ hàng
    var coTonTaiTrongGioHang = false;

    var Product 

    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        var itemGioHang = danhSachItemGioHang[i];

        // nếu tồn tại thì tăng số lượng
        if (itemGioHang.id == idSP) {
            danhSachItemGioHang[i].soLuong++;
            coTonTaiTrongGioHang = true;
        }
    }

    for (var i = 0; i < tongSP.length; i++) { 
        if (tongSP[i].id == idSP) { 
           Product = tongSP[i];
           break;
        }
    }

    // nếu không tồn tại thì tạo ra đối tượng thêm vào ds
    if (!coTonTaiTrongGioHang) {
        var itemGioHang = TaoDoiTuongItemGioHang(Product.id, 1,Product.ten, Product.hinhAnh, Product.giaBan, Product.giaGoc);
        danhSachItemGioHang.push(itemGioHang);
    }
    luuDSVaoLocalstorage(danhSachItemGioHang);
}

function TaoDoiTuongItemGioHang(id, soLuong, ten, hinhAnh, giaBan, phantramGiamGia) {
    var itemGioHang = {};
    itemGioHang.id = id;
    itemGioHang.soLuong = soLuong;
    itemGioHang.ten = ten;
    itemGioHang.hinhAnh = hinhAnh;
    itemGioHang.giaBan = giaBan;
    itemGioHang.phantramGiamGia = phantramGiamGia;
    return itemGioHang;
}

function layDanhSachItemGioHang() {
    var dsItemGioHang = JSON.parse(localStorage.getItem(keyLocalstorageItemGioHang)) || [];
    return dsItemGioHang;
}

function luuDSVaoLocalstorage(danhSachItemGioHang) {
    var jsondsItemGioHang = JSON.stringify(danhSachItemGioHang);
    localStorage.setItem(keyLocalstorageItemGioHang, jsondsItemGioHang);
}

console.log(layDanhSachItemGioHang());