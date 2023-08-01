import { Blockchain, SandboxContract } from '@ton-community/sandbox';
import { toNano } from 'ton-core';
import { Getters } from '../wrappers/Getters';
import '@ton-community/test-utils';

describe('Getters', () => {
    let blockchain: Blockchain;
    let getters: SandboxContract<Getters>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        getters = blockchain.openContract(await Getters.fromInit());

        const deployer = await blockchain.treasury('deployer');

        const deployResult = await getters.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: getters.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and getters are ready to use
    });
});
