// tao 1 mang chuoi de luu danh sach sp
let products =[
    "Iphone 15",
    "Macbook pro 2021",
    "Macbook pro 2022",
    "Macbook pro 2023"
];

function showAllProduct() {
    let content=""
    for (let i = 0; i < products.length; i++) {
    // them 1 bo the tr td
        content+=`    <tr>
        <td>${products[i]}</td>
        <td><button >Sua</button></td>
        <td><button onclick="deleteByIndex(${i})">Xoa</button></td>
    </tr>`;
    }
    document.getElementById("productList").innerHTML= content;
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
