import { toNano } from 'ton-core';
import { Getters } from '../wrappers/Getters';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const getters = provider.open(await Getters.fromInit());

    await getters.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(getters.address);

    // run methods on `getters`
}
