\# 🔢 MyBigNumber - Big Number Addition Tool



Dự án cài đặt thuật toán cộng hai số nguyên lớn (Big Number) dưới dạng chuỗi, mô phỏng chính xác phương pháp cộng từng chữ số có nhớ của học sinh tiểu học. Dự án được phát triển bằng \*\*NestJS\*\* và \*\*TypeScript\*\*.



\## ✨ Features



\- ➕ \*\*Cộng số lớn không giới hạn:\*\* Xử lý các chuỗi số có độ dài vượt quá giới hạn của kiểu dữ liệu `Number` thông thường.

\- 📝 \*\*Lịch sử chi tiết (Step-by-Step Logging):\*\* Ghi lại từng bước cộng (lấy số nào cộng số nào, nhớ bao nhiêu) trực tiếp ra terminal.

\- 🧪 \*\*Unit Testing:\*\* Đảm bảo tính chính xác với bộ test case bao quát nhiều trường hợp (số bằng nhau, số lệch độ dài, cộng có nhớ ở hàng cao nhất).

\- 🏗️ \*\*Kiến trúc tối giản:\*\* Được đóng gói trong Class riêng biệt theo yêu cầu tuyển dụng.



\---



\## 📋 Requirements



\- \*\*Node.js\*\* ≥ 24.11.1

\- \*\*npm\*\* ≥ 11.14.0



\---



\## 🚀 Quick Start



\### 1️⃣ Clone Repository

```bash

git clone https://github.com/Starikaa/MyBigNumber.git

cd MyBigNumber



2️⃣ Install Dependencies

npm install



3️⃣ Run the Application

npm run start

Sau khi chạy, mở trình duyệt truy cập: http://localhost:3000



4️⃣ Run Unit Tests

npm run test



📁 Project Structure

MyBigNumber/

├── src/

│   ├── my-big-number/

│   │   ├── my-big-number.service.ts       ⭐ Thuật toán chính \& Logging

│   │   └── my-big-number.service.spec.ts  ⭐ Unit Test cases

│   ├── app.controller.ts                  ⭐ Tiếp nhận yêu cầu HTTP

│   ├── app.module.ts                      ⭐ Kết nối Modules

│   └── main.ts                            ⭐ Cửa ngõ khởi tạo ứng dụng

├── package.json

└── README.md



📚 Technical Implementation

Thuật toán được cài đặt trong phương thức sum(stn1: string, stn2: string):



Duyệt ngược: Sử dụng hai con trỏ duyệt từ cuối chuỗi về đầu chuỗi.



Cộng từng hàng: Cộng chữ số tại vị trí tương ứng cùng với biến carry (nhớ).



Xử lý nhớ: Dùng Math.floor(sum / 10) để tính số nhớ cho hàng tiếp theo.



Logging: Mỗi bước lặp đều thực hiện console.log mô tả hành động đang thực hiện.

