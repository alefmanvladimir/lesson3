import "@stdlib/deploy";

contract Integers with Deployable {

    i1: Int as int257 = 1000; // - 2^256 to 2^256   0.184 TON per year
    i2: Int as uint256; // 0 to 2^256
    i3: Int as int256 = 17; 
    i4: Int as uint128;     // 0 to 2^128
    i5: Int as int128;      // -2^127 to 2^127
    i6: Int as coins;       // 0 to 2^120
    i7: Int as uint64 = 0x1c4a;      // 0 to 2^65
    i8: Int as int64 = -203;
    i9: Int as uint32 = 0;
    i10: Int as int32 = 1000; // costs 0.023 ton per year
    i11: Int as uint16 = 0;     // 0 to 65,535
    i12: Int as int16 = 0;      // -32,768 to 32,767
    i13: Int as uint8 = 0;      // 0 to 255
    i14: Int as int8;       //-128 to 127

    init() {
        self.i2 = 0x83df;
        self.i4 = 154530043534;
        self.i5 = pow(10, 9); // 10^9 = 1,000,000,000
        self.i6 = ton("1.23"); // 9 decimals 1230000000
        self.i14 = self.i3 + 200;
    }

    receive() {
        let int1: Int as uint128 = 3001;
        let int2: Int as int32 = 57;
        let i: Int as int8 = -12;
        
        i = int1 * 3 + (int2 - i); // 9072

        i = int1 % 10; //1

        i = int1 / 1000; // 3001/3000 = 3

        i = int1 >> 3;  // 375

        i = int1 << 2; // 12004

        i = min(int2, 11); // 11

        i = max(int2, 66); // 66

        i = abs(-1 * int2); // 57

        int1 == 3001; //true
        int1 > 2000; //true
        int1 >= 3002; // false
        int1 != 70; // true
    }
}
