import "@stdlib/deploy";

contract Addresses with Deployable {
    //264-bit
    //storing 1000 address 0.189 TON per year
    a1: Address = address("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N"); // bouncable
    a2: Address = address("UQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqEBI"); // non-bouncable
    a3: Address;

    a4: Address;
    a5: Address;
    a6: Address;

    init() {
        self.a3 = = newAddress(0, 0x83dfd552e63729b472fcbcc8c45ebcc6691702558b68ec7527e1ba403a0f31a8);

        self.a4 = myAddress();
        self.a5 = sender();
        self.a6 = newAddress(0, 0);
    }

    receive(){
        self.a1 == self.a2; // true
        self.a2 == self.a3; // true
    }
}
