import { Blockchain, SandboxContract } from '@ton-community/sandbox';
import { toNano } from 'ton-core';
import { Strings } from '../wrappers/Strings';
import '@ton-community/test-utils';

describe('Strings', () => {
    let blockchain: Blockchain;
    let strings: SandboxContract<Strings>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        strings = blockchain.openContract(await Strings.fromInit());

        const deployer = await blockchain.treasury('deployer');

        const deployResult = await strings.send(
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
            to: strings.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and strings are ready to use
    });
});
