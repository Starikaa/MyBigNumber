import { Injectable } from '@nestjs/common';

@Injectable()
export class MyBigNumberService {
    /**
     * Hàm cộng 2 số lớn theo đúng yêu cầu đề bài
     */
    sum(stn1: string, stn2: string): string {
        let res = "";
        let carry = 0; // Biến nhớ
        let i = stn1.length - 1;
        let j = stn2.length - 1;

        console.log(`--- Thực hiện phép tính: ${stn1} + ${stn2} ---`);

        // Lặp cho đến khi hết cả 2 chuỗi và không còn số nhớ
        while (i >= 0 || j >= 0 || carry > 0) {
            // Lấy từng chữ số từ cuối lên, nếu hết chuỗi thì coi là 0
            const d1 = i >= 0 ? Number(stn1[i]) : 0;
            const d2 = j >= 0 ? Number(stn2[j]) : 0;

            // Tính tổng hàng đơn vị và nhớ
            const tempSum = d1 + d2 + carry;
            const currentDigit = tempSum % 10; // Chữ số ghi lại

            // Ghi Log lịch sử như yêu cầu (Mục 1.2 trong file PDF)
            console.log(`Bước cộng: ${d1} + ${d2} + (nhớ ${carry}) = ${tempSum}. Ghi ${currentDigit}, nhớ ${Math.floor(tempSum / 10)}`);

            carry = Math.floor(tempSum / 10); // Cập nhật số nhớ cho bước sau
            res = currentDigit.toString() + res; // Ghép vào kết quả

            i--;
            j--;
        }

        console.log(`=> Kết quả cuối cùng: ${res}`);
        return res;
    }
}