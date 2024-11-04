
function onclickTaoSP(){
    console.log('Gọi hàm onclickTaoSP()');
    // truy cập nodes để lấy dữ liệu
     var nodehinhAnh = document.getElementById('hinhAnh');
     var hinhAnh = nodehinhAnh.value;
    console.log(hinhAnh);
    nodehinhAnh.value='';

     var nodeten = document.getElementById('ten');
     var ten = nodeten.value;
     console.log(ten);
     nodeten.value='';

     var nodegiaGoc = document.getElementById('giaGoc');
     var giaGoc = parseInt(nodegiaGoc.value); 
     console.log(giaGoc);
     nodegiaGoc.value='';

     var nodephamtramGiamGia = document.getElementById('phamtramGiamGia');
     var phamtramGiamGia = parseFloat(nodephamtramGiamGia.value); 
     console.log(phamtramGiamGia);
     nodephamtramGiamGia.value='';

     var nodekhuVuc = document.getElementById('khuVuc');
     var khuVuc = nodekhuVuc.value;
     console.log(khuVuc);
     nodekhuVuc.value='';

}











