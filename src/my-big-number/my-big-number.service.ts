import { Injectable } from '@nestjs/common';

@Injectable()
export class MyBigNumber {
    sum(stn1: string, stn2: string): string {
        let res = "";
        let carry = 0;
        let i = stn1.length - 1;
        let j = stn2.length - 1;
        console.log(`--- Thực hiện phép tính: ${stn1} + ${stn2} ---`);
        while (i >= 0 || j >= 0 || carry > 0) {
            const d1 = i >= 0 ? Number(stn1[i]) : 0;
            const d2 = j >= 0 ? Number(stn2[j]) : 0;
            const tempSum = d1 + d2 + carry;
            const currentDigit = tempSum % 10;
            console.log(`Bước cộng: ${d1} + ${d2} + (nhớ ${carry}) = ${tempSum}. Ghi ${currentDigit}, nhớ ${Math.floor(tempSum / 10)}`);
            carry = Math.floor(tempSum / 10);
            res = currentDigit.toString() + res;
            i--;
            j--;
        }
        console.log(`=> Kết quả cuối cùng: ${res}`);
        return res;
    }
}