import { toNano } from 'ton-core';
import { Addresses } from '../wrappers/Addresses';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const addresses = provider.open(await Addresses.fromInit());

    await addresses.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(addresses.address);

    // run methods on `addresses`
}
