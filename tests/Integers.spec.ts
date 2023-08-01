import { Blockchain, SandboxContract } from '@ton-community/sandbox';
import { toNano } from 'ton-core';
import { Integers } from '../wrappers/Integers';
import '@ton-community/test-utils';

describe('Integers', () => {
    let blockchain: Blockchain;
    let integers: SandboxContract<Integers>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        integers = blockchain.openContract(await Integers.fromInit());

        const deployer = await blockchain.treasury('deployer');

        const deployResult = await integers.send(
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
            to: integers.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and integers are ready to use
    });
});
