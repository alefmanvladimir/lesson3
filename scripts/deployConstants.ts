import { toNano } from 'ton-core';
import { Constants } from '../wrappers/Constants';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const constants = provider.open(await Constants.fromInit());

    await constants.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(constants.address);

    // run methods on `constants`
}
