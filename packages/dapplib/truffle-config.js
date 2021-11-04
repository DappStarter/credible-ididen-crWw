require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remember clutch harvest case fortune genius'; 
let testAccounts = [
"0xfb9f17ff9e2330a029fffa2d3fddd60131cabcfc866a0636658d80fe26e69322",
"0x88f21d3c19aa8790fa5f7aa3b53ee18a3d26d452ce43d9e95bc7f9696a13a2b9",
"0xb88bc6f70b2ea43d8e6bd80d3e335c58680e5b6fab3ae87e11dd5b3975706b09",
"0xcfe19fd749d4e4cf418aed781dc01c7b67f1dd723d9b42fc6ef0b0c05cb2439d",
"0x742f0479972f793419a5e3cddd4d5511c1a519d01dcc133d80b669d630237921",
"0x4133f01d602e0372d6b6ce95a4db1ddd819ac683d9c2bfb132c43009249d6f00",
"0x01e96c7ee13e70a100165290d36b2f583744ca8b5cc66dac8353161fff56d24e",
"0x2d25924f6909c2d1d667f64d558be66aec9087c4149e658672f0b8fcea78799b",
"0x0585303cec28e6adb710035dc241e16b3a55d7c1beefa734224eb3678ca59c96",
"0xa99ad0f4202bf90f82694fbeeb80ac7e98a6c607abcd6c4e8a7268439eb80d9a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

