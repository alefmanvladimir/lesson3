import { toNano } from 'ton-core';
import { Bools } from '../wrappers/Bools';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const bools = provider.open(await Bools.fromInit());

    await bools.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(bools.address);

    // run methods on `bools`
}
