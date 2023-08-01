import "@stdlib/deploy";

const GlobalConst1: Int = 2000 + ton("1.24") + pow(10, 9);

contract Constants with Deployable {

    const ContractConst1: Int = 2000 + ton("1.25") + pow(10, 9);

    init() {
        
    }

    get fun sum(): Int {
        return self.ContractConst1 + GlobalConst1;
    }
}