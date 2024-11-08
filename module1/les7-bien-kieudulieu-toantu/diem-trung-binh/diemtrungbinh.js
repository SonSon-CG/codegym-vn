inputLy = +prompt("Nhap diem mon Vat Ly");
inputHoa = +prompt("Nhap diem mon Hoa Hoc");
inputSinh = +prompt("Nhap diem mon Sinh Hoc");

tongdiem = inputLy + inputHoa + inputSinh;
trungbinh = (inputLy + inputHoa + inputSinh)/3;

document.write("Tong diem 3 mon" + tongdiem + "\n");

document.write("Diem trung binh 3 mon" + trungbinh);