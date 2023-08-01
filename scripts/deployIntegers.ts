import { toNano } from 'ton-core';
import { Integers } from '../wrappers/Integers';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const integers = provider.open(await Integers.fromInit());

    await integers.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(integers.address);

    // run methods on `integers`
}
