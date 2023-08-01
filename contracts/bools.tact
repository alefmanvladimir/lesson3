import "@stdlib/deploy";

// 1000 bool == 0.00075 TON per year

contract Bools with Deployable {

    b1: Bool = true;
    b2: Bool = false;
    b3: Bool;
    init() {
        self.b3 = !self.b2;
    }

    receive(){
        let b: Bool = true;

        b = self.b1 && self.b2 || !self.b3; // false

        self.b1 == true; // true
        self.b1 == self.b2; // false
        self.b1 != self.b2; // true
    }
}
