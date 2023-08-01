import { Blockchain, SandboxContract } from '@ton-community/sandbox';
import { toNano } from 'ton-core';
import { Constants } from '../wrappers/Constants';
import '@ton-community/test-utils';

describe('Constants', () => {
    let blockchain: Blockchain;
    let constants: SandboxContract<Constants>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        constants = blockchain.openContract(await Constants.fromInit());

        const deployer = await blockchain.treasury('deployer');

        const deployResult = await constants.send(
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
            to: constants.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and constants are ready to use
    });
});
