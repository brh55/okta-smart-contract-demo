'use strict';
const { ethers } = require('ethers');

const IdentityProvider = {"_format":"hh-sol-artifact-1","contractName":"IdentityProvider","sourceName":"contracts/IdentityProvider.sol","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getProfile","outputs":[{"internalType":"string","name":"_email","type":"string"},{"internalType":"string","name":"_firstName","type":"string"},{"internalType":"string","name":"_lastName","type":"string"},{"internalType":"string","name":"_phoneNumber","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"getUser","outputs":[{"internalType":"string","name":"_email","type":"string"},{"internalType":"string","name":"_firstName","type":"string"},{"internalType":"string","name":"_lastName","type":"string"},{"internalType":"string","name":"_phoneNumber","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_email","type":"string"},{"internalType":"string","name":"_firstName","type":"string"},{"internalType":"string","name":"_lastName","type":"string"},{"internalType":"string","name":"_phoneNumber","type":"string"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"userCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610bf7806100616000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806307973ccf146100515780630e24c52c1461006f5780636f77926b1461008b578063d6afc9b1146100be575b600080fd5b6100596100df565b604051610066919061091f565b60405180910390f35b61008960048036038101906100849190610770565b6100e5565b005b6100a560048036038101906100a09190610747565b61022c565b6040516100b5949392919061089e565b60405180910390f35b6100c66102da565b6040516100d6949392919061089e565b60405180910390f35b60015481565b6100ed6102f7565b6040518060a001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001838152602001828152506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906101cb929190610627565b5060408201518160020190805190602001906101e8929190610627565b506060820151816003019080519060200190610205929190610627565b506080820151816004019080519060200190610222929190610627565b5090505050505050565b606080606080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b9906108ff565b60405180910390fd5b6102cb85610312565b93509350935093509193509193565b6060806060806102e933610312565b935093509350935090919293565b600180600082825461030991906109ac565b92505081905550565b60608060608060008060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546103c990610a80565b80601f01602080910402602001604051908101604052809291908181526020018280546103f590610a80565b80156104425780601f1061041757610100808354040283529160200191610442565b820191906000526020600020905b81548152906001019060200180831161042557829003601f168201915b5050505050815260200160028201805461045b90610a80565b80601f016020809104026020016040519081016040528092919081815260200182805461048790610a80565b80156104d45780601f106104a9576101008083540402835291602001916104d4565b820191906000526020600020905b8154815290600101906020018083116104b757829003601f168201915b505050505081526020016003820180546104ed90610a80565b80601f016020809104026020016040519081016040528092919081815260200182805461051990610a80565b80156105665780601f1061053b57610100808354040283529160200191610566565b820191906000526020600020905b81548152906001019060200180831161054957829003601f168201915b5050505050815260200160048201805461057f90610a80565b80601f01602080910402602001604051908101604052809291908181526020018280546105ab90610a80565b80156105f85780601f106105cd576101008083540402835291602001916105f8565b820191906000526020600020905b8154815290600101906020018083116105db57829003601f168201915b505050505081525050905080602001518160400151826060015183608001519450945094509450509193509193565b82805461063390610a80565b90600052602060002090601f016020900481019282610655576000855561069c565b82601f1061066e57805160ff191683800117855561069c565b8280016001018555821561069c579182015b8281111561069b578251825591602001919060010190610680565b5b5090506106a991906106ad565b5090565b5b808211156106c65760008160009055506001016106ae565b5090565b60006106dd6106d88461095f565b61093a565b9050828152602081018484840111156106f557600080fd5b610700848285610a3e565b509392505050565b60008135905061071781610baa565b92915050565b600082601f83011261072e57600080fd5b813561073e8482602086016106ca565b91505092915050565b60006020828403121561075957600080fd5b600061076784828501610708565b91505092915050565b6000806000806080858703121561078657600080fd5b600085013567ffffffffffffffff8111156107a057600080fd5b6107ac8782880161071d565b945050602085013567ffffffffffffffff8111156107c957600080fd5b6107d58782880161071d565b935050604085013567ffffffffffffffff8111156107f257600080fd5b6107fe8782880161071d565b925050606085013567ffffffffffffffff81111561081b57600080fd5b6108278782880161071d565b91505092959194509250565b600061083e82610990565b610848818561099b565b9350610858818560208601610a4d565b61086181610b70565b840191505092915050565b600061087960208361099b565b915061088482610b81565b602082019050919050565b61089881610a34565b82525050565b600060808201905081810360008301526108b88187610833565b905081810360208301526108cc8186610833565b905081810360408301526108e08185610833565b905081810360608301526108f48184610833565b905095945050505050565b600060208201905081810360008301526109188161086c565b9050919050565b6000602082019050610934600083018461088f565b92915050565b6000610944610955565b90506109508282610ab2565b919050565b6000604051905090565b600067ffffffffffffffff82111561097a57610979610b41565b5b61098382610b70565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60006109b782610a34565b91506109c283610a34565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156109f7576109f6610ae3565b5b828201905092915050565b6000610a0d82610a14565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610a6b578082015181840152602081019050610a50565b83811115610a7a576000848401525b50505050565b60006002820490506001821680610a9857607f821691505b60208210811415610aac57610aab610b12565b5b50919050565b610abb82610b70565b810181811067ffffffffffffffff82111715610ada57610ad9610b41565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f6e6c792074686520496450206d617920676574206f74686572207573657273600082015250565b610bb381610a02565b8114610bbe57600080fd5b5056fea264697066735822122065e0547d02bb3915b2efc860a7104b5355249fc4bb684f8fd74bdece5cac023e64736f6c63430008040033","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806307973ccf146100515780630e24c52c1461006f5780636f77926b1461008b578063d6afc9b1146100be575b600080fd5b6100596100df565b604051610066919061091f565b60405180910390f35b61008960048036038101906100849190610770565b6100e5565b005b6100a560048036038101906100a09190610747565b61022c565b6040516100b5949392919061089e565b60405180910390f35b6100c66102da565b6040516100d6949392919061089e565b60405180910390f35b60015481565b6100ed6102f7565b6040518060a001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001838152602001828152506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906101cb929190610627565b5060408201518160020190805190602001906101e8929190610627565b506060820151816003019080519060200190610205929190610627565b506080820151816004019080519060200190610222929190610627565b5090505050505050565b606080606080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b9906108ff565b60405180910390fd5b6102cb85610312565b93509350935093509193509193565b6060806060806102e933610312565b935093509350935090919293565b600180600082825461030991906109ac565b92505081905550565b60608060608060008060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546103c990610a80565b80601f01602080910402602001604051908101604052809291908181526020018280546103f590610a80565b80156104425780601f1061041757610100808354040283529160200191610442565b820191906000526020600020905b81548152906001019060200180831161042557829003601f168201915b5050505050815260200160028201805461045b90610a80565b80601f016020809104026020016040519081016040528092919081815260200182805461048790610a80565b80156104d45780601f106104a9576101008083540402835291602001916104d4565b820191906000526020600020905b8154815290600101906020018083116104b757829003601f168201915b505050505081526020016003820180546104ed90610a80565b80601f016020809104026020016040519081016040528092919081815260200182805461051990610a80565b80156105665780601f1061053b57610100808354040283529160200191610566565b820191906000526020600020905b81548152906001019060200180831161054957829003601f168201915b5050505050815260200160048201805461057f90610a80565b80601f01602080910402602001604051908101604052809291908181526020018280546105ab90610a80565b80156105f85780601f106105cd576101008083540402835291602001916105f8565b820191906000526020600020905b8154815290600101906020018083116105db57829003601f168201915b505050505081525050905080602001518160400151826060015183608001519450945094509450509193509193565b82805461063390610a80565b90600052602060002090601f016020900481019282610655576000855561069c565b82601f1061066e57805160ff191683800117855561069c565b8280016001018555821561069c579182015b8281111561069b578251825591602001919060010190610680565b5b5090506106a991906106ad565b5090565b5b808211156106c65760008160009055506001016106ae565b5090565b60006106dd6106d88461095f565b61093a565b9050828152602081018484840111156106f557600080fd5b610700848285610a3e565b509392505050565b60008135905061071781610baa565b92915050565b600082601f83011261072e57600080fd5b813561073e8482602086016106ca565b91505092915050565b60006020828403121561075957600080fd5b600061076784828501610708565b91505092915050565b6000806000806080858703121561078657600080fd5b600085013567ffffffffffffffff8111156107a057600080fd5b6107ac8782880161071d565b945050602085013567ffffffffffffffff8111156107c957600080fd5b6107d58782880161071d565b935050604085013567ffffffffffffffff8111156107f257600080fd5b6107fe8782880161071d565b925050606085013567ffffffffffffffff81111561081b57600080fd5b6108278782880161071d565b91505092959194509250565b600061083e82610990565b610848818561099b565b9350610858818560208601610a4d565b61086181610b70565b840191505092915050565b600061087960208361099b565b915061088482610b81565b602082019050919050565b61089881610a34565b82525050565b600060808201905081810360008301526108b88187610833565b905081810360208301526108cc8186610833565b905081810360408301526108e08185610833565b905081810360608301526108f48184610833565b905095945050505050565b600060208201905081810360008301526109188161086c565b9050919050565b6000602082019050610934600083018461088f565b92915050565b6000610944610955565b90506109508282610ab2565b919050565b6000604051905090565b600067ffffffffffffffff82111561097a57610979610b41565b5b61098382610b70565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60006109b782610a34565b91506109c283610a34565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156109f7576109f6610ae3565b5b828201905092915050565b6000610a0d82610a14565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610a6b578082015181840152602081019050610a50565b83811115610a7a576000848401525b50505050565b60006002820490506001821680610a9857607f821691505b60208210811415610aac57610aab610b12565b5b50919050565b610abb82610b70565b810181811067ffffffffffffffff82111715610ada57610ad9610b41565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f6e6c792074686520496450206d617920676574206f74686572207573657273600082015250565b610bb381610a02565b8114610bbe57600080fd5b5056fea264697066735822122065e0547d02bb3915b2efc860a7104b5355249fc4bb684f8fd74bdece5cac023e64736f6c63430008040033","linkReferences":{},"deployedLinkReferences":{}}

module.exports.handler = async (event) => {
  if (!event.body) return;

  const hookPayload = JSON.parse(event.body).data;
  const walletAddress = hookPayload.identity.claims.ethAddress;

  const ropstenNetwork = ethers.providers.getNetwork("ropsten");

  const provider = new ethers.getDefaultProvider(ropstenNetwork);
  const wallet = new ethers.Wallet(process.env.ACCOUNT_KEY, provider);
  const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, IdentityProvider.abi, wallet);
  try {
    const response = await contract.getUser(walletAddress);
    // For now we just test if there is anything
    if (response[0] !== '') {
      const currentUser = {
        email: response._email,
        firstName: response._firstName,
        lastName: response._lastName,
        phoneNumber: response._phoneNumber
      };

      // Dynamically construct claim operations
      const claims = Object.keys(currentUser).map(key => {
        const claimValue = currentUser[key];
        if (currentUser[key]) {
          return {
            op: 'add',
            path: `/claims/${key}`,
            value: claimValue
          }
        }
      });

      // Patch Value
      return {
        statusCode: 200,
        body: JSON.stringify({
          commands: [
            {
              type: 'com.okta.identity.patch',
              value: claims
            }
          ]
        })
      }
    }
  } catch (err) {
    console.log("FAILED HOOK:", err);

    return {
      statusCode: 200,
      body: JSON.stringify({
        errorSummary: err
      })
    }
  }
};
