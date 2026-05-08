import { Test, TestingModule } from '@nestjs/testing';
import { MyBigNumberService } from './my-big-number.service';

describe('MyBigNumberService', () => {
  let service: MyBigNumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyBigNumberService],
    }).compile();

    service = module.get<MyBigNumberService>(MyBigNumberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('nên cộng đúng: "1234" + "897" = "2131"', () => {
    expect(service.sum("1234", "897")).toBe("2131");
  });

  // Test case 2: Cộng có nhớ ở hàng cuối cùng
  it('nên xử lý có nhớ ở hàng cuối: "99" + "1" = "100"', () => {
    expect(service.sum("99", "1")).toBe("100");
  });

  // Test case 3: Cộng hai số có độ dài khác biệt lớn
  it('nên cộng đúng số nhỏ với số rất lớn: "1" + "9999" = "10000"', () => {
    expect(service.sum("1", "9999")).toBe("10000");
  });
});
