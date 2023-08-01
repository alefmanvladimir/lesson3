import { toNano } from 'ton-core';
import { Strings } from '../wrappers/Strings';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const strings = provider.open(await Strings.fromInit());

    await strings.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(strings.address);

    // run methods on `strings`
}
