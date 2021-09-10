var a = prompt('Nhap diem mon Vat ly: ');
var b = prompt('Nhap diem mon Hoa: ');
var c = prompt('Nhap diem mon Sinh: ');

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);3
var tong = a + b + c;
var trungbinh = (a+b+c) / 3;
document.getElementById('tong').innerHTML = tong;
document.getElementById('trungbinh').innerHTML = trungbinh;