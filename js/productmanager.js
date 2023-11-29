// tao 1 mang chuoi de luu danh sach sp
let products =[
    new Product("Iphone 15", 25, 12, "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTukSSJS12DcmVUiDTwGTz9YU4y4tpPIJqWpWGI_ksVI0B4cgZDSwu-1Bqc8-MJCDCmxYBPARgrjTvbyRy61AP4Tfv4Y4sacNUKr140-89XMSye-EwZAEbXizdC&usqp=CAc"),
    new Product("Macbook pro 2023", 35, 15, "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTS3DlEXSZeDPXAABDhjx0HI-K8YWltY5KSE9zaXfOf5eeMUkFntcOLGh5n3TdjWQKm1lfCnOUHBkEDMmOpki1qbQMZ5ts1_LINjYJYI_zjG50a7won_868ObCNO_PAuLQYpVyWDA&usqp=CAc"),
    new Product("Macbook pro 2021", 45, 10, "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRhKECJxPlcXn60jOEtbxT4AVeGw3npmjuowvtVIy1E0o-wySdqIv6ZSOv7_vs35n0udDzN92Ub88QbU8OdpE9EQdqbW0z9EeD65HzgmEIW9kmBf307VKmoKpXpvTZwXLsQH0EkqA&usqp=CAc")
];


function showAllProduct() {
    let content=""
    for (let i = 0; i < products.length; i++) {
    // them 1 bo the tr td
        content+=`    <tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].number}</td>
        <td>${products[i].getTotalPrice()}</td>
        <td><img src="${products[i].img}" width="100"></td>
        <td><button >Sua</button></td>
        <td><button onclick="deleteByIndex(${i})">Xoa</button></td>
    </tr>`;
    }
    document.getElementById("productList").innerHTML= content;
    let t = getTotalNumber();
    document.getElementById("totalNumber").innerText = t;
}
showAllProduct();
function createNewProduct() {
//     B1: Lay du lieu trong the input
    let newP = document.getElementById("newProduct").value;
//     B2: Them du lieu do vao mang
    products.push(newP);
//     B3: Hien thi lai bang
    showAllProduct();
//     Xoa du lieu trong the input
    document.getElementById("newProduct").value="";
    document.getElementById("newProduct").focus();
}

function deleteByIndex(index) {
//     Xoa phan tu tai index
    products.splice(index, 1)
//     Show lai bang
    showAllProduct();
}

function getTotalNumber() {
    let sum=0;
    for (let i = 0; i < products.length; i++) {
        sum+=products[i].number
    }
    return sum;
}
