var numberArr = [];

function themSo() {
  //input
  var number = document.querySelector("#number").value * 1;
  numberArr.push(number);
  //output
  document.getElementById("numberArray").innerHTML = numberArr;
}
//BAI 1
function tinhTong() {
  //input
  var sum = 0;
  //progress
  for (var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] >= 0) {
      sum = sum + numberArr[i];
    }
  }

  //output
  document.getElementById("ketQua1").innerHTML = `Tổng số dương: ${sum}`;
}
//BAI 2
function demSoDuong() {
  //input
  var demSo = 0;
  //progress
  for (var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0) {
      demSo++;
    }
  }
  //output
  document.getElementById("ketQua2").innerHTML = demSo;
}
//BAI 3
function timSoNhoNhat() {
  //input
  var soNhoNhat = 0;
  for (var i = 0; i < numberArr.length; i++) {
    if (soNhoNhat > numberArr[i]) {
      soNhoNhat = numberArr[i];
    }
  }
  document.getElementById("ketQua3").innerHTML = soNhoNhat;
}
//BAI 4

function timSoDuongNhoNhat() {
  //input
  var numberArr_soDuong = [];
  for (var i = 0; i < numberArr.length; i++) {
    //progress
    if (numberArr[i] > 0) {
      numberArr_soDuong.push(numberArr[i]);
    }
  }
  if (numberArr_soDuong.length > 0) {
    var soDuongNhoNhat = numberArr_soDuong[0];
    for (var j = 1; j < numberArr_soDuong.length; j++) {
      if (numberArr_soDuong[j] < soDuongNhoNhat) {
        soDuongNhoNhat = numberArr_soDuong[j];
      }
    }
    //output
    document.getElementById(
      "ketQua4"
    ).innerHTML = `Số dương nhỏ nhất: ${soDuongNhoNhat}`;
  } else {
    document.getElementById(
      "ketQua4"
    ).innerHTML = `Không có số dương trong mảng`;
  }
}
//BAI 5

function timSoChanCuoiCung() {
  // input
  var numberArr_soChan = [];
  var soChanCuoiCung = "";
  //progress
  for (var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] % 2 == 0) {
      numberArr_soChan.push(numberArr[i]);
    }
  }
  if (numberArr_soChan.length > 0) {
    soChanCuoiCung = numberArr_soChan.pop();
  } else {
    soChanCuoiCung = `Trong mảng không có số chẵn.`;
  }
  //output
  document.getElementById("ketQua5").innerHTML = soChanCuoiCung;
}
//BAI 6
function doiCho() {
  //input
  var viTri1 = document.getElementById("nhapSoVT1").value * 1;
  var viTri2 = document.getElementById("nhapSoVT2").value * 1;
  //progress
  var bienTam = numberArr[viTri1];
  numberArr[viTri1] = numberArr[viTri2];
  numberArr[viTri2] = bienTam;
  //output
  document.getElementById("ketQua6").innerHTML = numberArr;
}
//BAI 7
function sapXepTangDan() {
  var doDaiMang = numberArr.length;

  for (var i = 0; i < doDaiMang; i++) {
    for (var j = i + 1; j < doDaiMang; j++) {
      if (numberArr[i] > numberArr[j]) {
        var temp = numberArr[i];
        numberArr[i] = numberArr[j];
        numberArr[j] = temp;
      }
    }
  }
  document.getElementById("ketQua7").innerHTML = numberArr;
}
//BAI 8
//tìm dãy số nguyên tố
function timSoNguyenTo(n) {
  if (n <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
//tìm số đầu tiên trong dãy số nt
function timSoNguyenToDauTien() {
  //input
  var daySoNT = [];
  var ketQua = "";
  console.log("🚀 - timSoNguyenToDauTien - daySoNT:", daySoNT);
  //progress
  for (var i = 0; i < numberArr.length; i++) {
    if (timSoNguyenTo(numberArr[i])) {
      daySoNT.push(numberArr[i]);
    }
  }
  //output
  if (daySoNT.length == 0) {
    ketQua = `Mảng này không có số nguyên tố`;
  } else {
    ketQua = daySoNT[0];
  }
  document.getElementById("ketQua8").innerHTML = ketQua;
}
//BAI 9
var numberArr_soNguyen = [];
function demSoNguyen() {
  //input
  var nhapSo = document.getElementById("nhapSo").value;
  var dem = 0;
  //kiểm tra nếu chuỗi nhập vào là rỗng hoặc không phải là số
  if (nhapSo === "" || isNaN(nhapSo)) {
    alert("Vui lòng nhập số.");
  } else {
    //progress
    if (Number.isInteger(parseFloat(nhapSo))) {
      //parseFloat chuyển chuổi thành số - vì dk rồng bỏ nên x73 lý dưới này
      numberArr_soNguyen.push(parseFloat(nhapSo));
    }
    for (var i = 0; i < numberArr_soNguyen.length; i++) {
      if (Number.isInteger(numberArr_soNguyen[i])) {
        dem++;
      }
    }
    //output
    document.getElementById("ketQua9").innerHTML = dem;
  }
}
//BAI 10
var numberArr_soAmDuong = [];
console.log("🚀 - numberArr_soAmDuong:", numberArr_soAmDuong);
function soSanhSoAmVaDuong() {
  //input
  var demSoAm = 0;
  var demSoDuong = 0;
  //progress : tìm ra số âm (có cả số - thập phân) và số dương ( không có số thập phân)
  for (var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0) {
      if (Number.isInteger(numberArr[i])) {
        numberArr_soAmDuong.push(numberArr[i]);
        demSoDuong++;
      }
    } else if (numberArr[i] < 0) {
      numberArr_soAmDuong.push(numberArr[i]);
      demSoAm++;
    }
  }
  //output
  if (demSoAm > demSoDuong) {
    document.getElementById("ketQua10").innerHTML = `Số âm > Số dương`;
  } else if (demSoAm < demSoDuong) {
    document.getElementById("ketQua10").innerHTML = `Số âm < Số dương`;
  } else {
    document.getElementById("ketQua10").innerHTML = `Số âm = Số dương`;
  }
}
