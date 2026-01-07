
// Bài 1. Khai báo biến và toán tử
function ex1() {
    let a = Number(prompt("Nhập số a:", 10));
    let b = Number(prompt("Nhập số b:", 3));
    let sum = a + b;
    let diff = a - b;
    let tich = a * b;
    let thuong = (b !== 0) ? (a / b).toFixed(2) : "Không thể chia cho 0";

    console.log(`Tổng: ${sum}, Hiệu: ${diff}, Tích: ${tich}, Thương: ${thuong}`);
    document.write(`<h3>Bài 1: Toán tử</h3><p>Kết quả: Tổng=${sum}, Hiệu=${diff}, Tích=${tich}, Thương=${thuong}</p>`);
}

// Bài 2. Kiểm tra số chẵn lẻ
const isEven = (n) => (n % 2 === 0 ? "Số chẵn" : "Số lẻ");

// Bài 3. So sánh 2 số
function ex3() {
    let x = Number(prompt("Nhập số x:"));
    let y = Number(prompt("Nhập số y:"));
    let msg = "";
    if (x > y) msg = "x lớn hơn y";
    else if (x < y) msg = "x nhỏ hơn y";
    else msg = "x bằng y";
    
    console.log(msg);
    document.write(`<h3>Bài 3: So sánh</h3><p>${msg}</p>`);
}

// Bài 4. In các số từ 1 đến n
function ex4(n) {
    console.log(`Các số từ 1 đến ${n}:`);
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

// Bài 5. Tính tổng số chẵn
function ex5(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) sum += i;
    }
    console.log(`Tổng các số chẵn (từ 1 đến ${n}): ${sum}`);
    return sum;
}

// Bài 6. Bảng cửu chương
function ex6(n) {
    console.log(`Bảng cửu chương ${n}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

// Bài 7. Đếm ký tự trong chuỗi
function ex7(str, ch) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch) count++;
    }
    console.log(`Ký tự '${ch}' xuất hiện ${count} lần trong chuỗi "${str}"`);
    return count;
}

// Bài 8. Đảo ngược chuỗi
const reverseString = (str) => str.split("").reverse().join("");

// Bài 9. Kiểm tra chuỗi đối xứng
const isPalindrome = (str) => str === reverseString(str);

// Bài 10. Tìm số lớn nhất trong mảng
const findMax = (arr) => Math.max(...arr);

// Bài 11. Tính trung bình mảng
const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

// Bài 12. Lọc số chẵn
const filterEven = (arr) => arr.filter(n => n % 2 === 0);

// Bài 13. Quản lý sinh viên
function ex13() {
    let students = [
        { name: "An", score: 8 }, 
        { name: "Bình", score: 6.5 },
        { name: "Chi", score: 9 } 
    ];

    let topStudent = students.reduce((max, s) => (s.score > max.score ? s : max), students[0]);

    let average = students.reduce((sum, s) => sum + s.score, 0) / students.length;

    let goodStudents = students.filter(s => s.score >= 8);

    console.log("Sinh viên điểm cao nhất:", topStudent.name);
    console.log("Điểm trung bình:", average.toFixed(2));
    console.log("Sinh viên điểm >= 8:", goodStudents);

    document.write("<h3>Bài 13: Quản lý sinh viên</h3>");
    document.write(`<p>Sinh viên điểm cao nhất: <b>${topStudent.name}</b></p>`);
    document.write(`<p>Điểm trung bình: <b>${average.toFixed(2)}</b></p>`);
    document.write("<p>Danh sách sinh viên có điểm >8:</p><ul>");
    goodStudents.forEach(s => document.write(`<li>${s.name} (${s.score} điểm)</li>`));
    document.write("</ul>");
}

// MENU CHỌN BÀI TẬP
let choice = prompt("Chọn bài tập muốn chạy (1-13):");

switch(choice) {
    case "1": ex1(); break;
    case "2": 
        let n2 = Number(prompt("Bài 2 - Nhập n:"));
        console.log(`Kết quả: ${isEven(n2)}`);
        break;
    case "3": ex3(); break;
    case "4": ex4(Number(prompt("Bài 4 - Nhập n:"))); break;
    case "5": ex5(Number(prompt("Bài 5 - Nhập n:"))); break;
    case "6": ex6(Number(prompt("Bài 6 - Nhập n:"))); break;
    case "7": 
        ex7(prompt("Bài 7 - Nhập chuỗi:"), prompt("Bài 7 - Nhập ký tự cần đếm:")); 
        break;
    case "8": 
        console.log("Chuỗi đảo ngược:", reverseString(prompt("Bài 8 - Nhập chuỗi:"))); 
        break;
    case "9": 
        console.log("Chuỗi đối xứng:", isPalindrome(prompt("Bài 9 - Nhập chuỗi:"))); 
        break;
    case "13":
        ex13();
    case "10":
    case "11":
    case "12":
        let inputArr = prompt("Bài 10-12 - Nhập dãy số (cách nhau bằng dấu phẩy):").split(",").map(Number);
        if (choice === "10") console.log("Số lớn nhất:", findMax(inputArr));
        if (choice === "11") console.log("Trung bình cộng mảng:", average(inputArr).toFixed(2));
        if (choice === "12") console.log("Các số chẵn:", filterEven(inputArr));
    
        break;
    default: alert("Lựa chọn không hợp lệ, mời nhập lại!");
}