function taoĐoituongSP(hinhAnh, ten, giaGoc, phantramGiamGia,khuVuc){
    var sanPham = new Object();

    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phantramGiamGia = phantramGiamGia;
    sanPham.khuVuc= khuVuc;

    sanPham.tinhGiaBan = function(){
        var giaBan = this.giaGoc * (1 - this.phantramGiamGia);
        return giaBan;
    }
    return sanPham;
}