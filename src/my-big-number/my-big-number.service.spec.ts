import { Test, TestingModule } from '@nestjs/testing';
import { MyBigNumber } from './my-big-number.service';

describe('MyBigNumberService', () => {
  let service: MyBigNumber;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyBigNumber],
    }).compile();

    service = module.get<MyBigNumber>(MyBigNumber);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('nên cộng đúng: "1234973258" + "897348959" = "2132322217"', () => {
    expect(service.sum("1234973258", "897348959")).toBe("2132322217");
  });

  it('nên xử lý có nhớ ở hàng cuối: "000000000" + "00000000000" = "0"', () => {
    expect(service.sum("000000000", "00000000000")).toBe("0");
  });

  it('nên cộng đúng số nhỏ với số rất lớn: "1" + "99999999999999999999999" = "100000000000000000000000"', () => {
    expect(service.sum("1", "99999999999999999999999")).toBe("100000000000000000000000");
  });
});
