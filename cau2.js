function doCau2() {
    function isEven(n) {
        return (n % 2 === 0) ? "số chẵn" : "số lẻ";
    }

    let n = Number(prompt("CÂU 2: Nhập số cần kiểm tra chẵn lẻ:"));
    let ketQua = isEven(n);

    document.write("<div class='exercise-box'>");
    document.write("<h3>Kết quả Câu 2</h3>");
    document.write("<p>Số bạn nhập: " + n + " là <b>" + ketQua + "</b></p>");
    document.write("</div>");
    console.log("đã update");
}