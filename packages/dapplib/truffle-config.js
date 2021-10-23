require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remain quality half knee surge sunny'; 
let testAccounts = [
"0xed91763d28ca7a8c0e8752052c86b73f370cd624ab6cbcc772c8c9a52c178d08",
"0x0c435c43089d9ca3857e2ed6dc1ccaf079b0004b72ea4a1f6a8afbb86be2d14c",
"0x000903792818aaae9f9babc03e5c35221d9100946b70996018dd9eb094bbebb9",
"0x8b20f1e1d0e4fabbf21f528fed7fd040fcb2f34eadf71c28ad011ad454c88c68",
"0x409156471935aaf4874ca5aac3052852d1c4a4ce0f3a0bee2cfca5ec81527d74",
"0xfc2887f7dae9626d60fa401e6859718791f0ac6fa2c6e3789944676922703802",
"0x347b6241e7b34232eedae5d0ba69fc3f5c4d8a1278c84fe674cd980bb8dcfd14",
"0x050c752cd960292276c583b79698a8cdf319065a7e8797a45dab6795aefabcb3",
"0xeb30bf715363e5f4f422c52e33b8abe7954c71c0a243f73c3c75f8ebf3446ed5",
"0xde7869a54a8893a8ce1f00235864e30c6c995c1ee09ced472ac760c68a207f07"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

