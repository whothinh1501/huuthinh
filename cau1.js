function doCau1() {
    let a = Number(prompt("CÂU 1: Nhập số a:"));
    let b = Number(prompt("CÂU 1: Nhập số b:"));

    let tong = a + b;
    let hieu = a - b;
    let tich = a * b;
    let thuong = (b !== 0) ? (a / b).toFixed(2) : "Không thể chia cho 0";

    document.write("<div class='exercise-box'>");
    document.write("<h3>Kết quả Câu 1</h3>");
    document.write("<p>Số a: " + a + " | Số b: " + b + "</p>");
    document.write("<ul><li>Tổng: " + tong + "</li><li>Thương: " + thuong + "</li></ul>");
    document.write("</div>");
}