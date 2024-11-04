const saleContainer = document.querySelector('.uu_dai-item[data-type = "sale"]');
const bestsellerContainer = document.querySelector('.uu_dai-item[data-type = "best seller"]');



let = UuDai = [];
let = banchay=[];
let tongSP = [];


addProduct();
add(saleContainer, UuDai);
add(bestsellerContainer, banchay);

function Product(idSP,hinhAnh,ten, giaGoc,phantramGiamGia){
    this.id = idSP;
    this.hinhAnh = hinhAnh;
    this.ten = ten;
    this.giaGoc = giaGoc;
    this.giaBan = giaGoc/100*phantramGiamGia;
    this.phantramGiamGia = phantramGiamGia;

}
function addProduct(){
    var sp1 = new Product(
        1,
        "https://down-vn.img.susercontent.com/file/7935826ec055043838687ecdd5a08d2d",
        "Balo phi hành gia trong suốt vận chuyển chó mèo...",
        200000,
        70
    );
    var sp2 = new Product(
        2,
        "https://down-vn.img.susercontent.com/file/bca24639a410098076cc83d206ca323a",
        "Khay vệ sinh cho mèo, chậu thành cao chống v...",
        140000,
        30
    );
    var sp3 =  new Product(
        3,
        "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgyy99mpsmb7f8",
        "Bát đôi gắn bình cấp nước tự động cho chó mèo...",
        230000,
        80
    );
    var sp4 =  new Product(
        4,
        "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf6ipzeb6kpj0e",
        "Que trêu chọc mèo, đồ chơi, cần câu mèo dây siêu bền...",
        39000,
        50
    );
    var sp5 =  new Product(
        5,
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rcc7-lst9340khg6qd7",
        "Quần áo mùa hè cho chó con, vải cotton mát mẻ mùa hè...",
        180000,
        60
    );

    var sp6 = new Product(
        6,
        "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lh2uu20ci0v3dc",
        "DORRIKEY Máy lọc nước tự động cho thú cưng...",
        309000,
        48
    );

    var sp7 = new Product(
        7,
        "https://down-vn.img.susercontent.com/file/bae9623687ca995ff8a0372c1fa9d3d4",
        "Bát ăn cho thú cưng, cho thú cưng đơn đôi hai ba ngăn...",
        80000,
        100
    );

     var sp8= new Product(
        8,
        "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lvu56do9dkqtb1",
        "DORRIKEY Bát ăn cho thú cưng, robot mắt to,...",
        70000,
        90
    );

    var sp9 =  new Product(
        9,
        "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lvbhdgni9fc560",
        "DORRIKEY Cốc đựng thú cưng, dễ mang theo, tách...",
        89000,
        95
    );

    var sp10 = new Product(
        10,
        "https://down-vn.img.susercontent.com/file/sg-11134201-7qvd3-lj6hfu3bu96u0c",
        "Bát Đựng Thức Ăn Chậm Tăng Tốc Cho thú cưng siêu bền...",
        199000,
        80
    );
    var sp11 = new Product(
        10,
        "https://cunyeushop.vn/cdn/images/202111/goods_img/qua-ta-do-choi-cho-thu-cung-G5165-1635757641737.jpg",
        "Quả tạ đồ chơi cho thú cưng siêu rẻ,chất lượng...",
        100000,
        50
    );


    UuDai.push(sp1,sp3,sp4,sp5,sp6);
    banchay.push(sp7,sp8,sp9,sp10,sp11);
    tongSP.push(sp1,sp2,sp3,sp4,sp5,sp6,sp7,sp8,sp9,sp10);

}



