const crypto = require('crypto');

const client = new okta.Client({
    orgUrl: 'https://dev-1234.oktapreview.com/',
    token: process.env.OKTA_API_TOKEN
});

module.exports.handler = async (event) => {
    if (!event.body) return;
  
    try {
        const payload = JSON.parse(event.body).data;
        const { address } = payload;
    
        // Stub password for now
        // We would need to figure out how we can use
        // the signature verifier as a login factor
        // SHA256 + Contract Private Key + Wallet Address
        const stubPassword = crypto.createHmac('sha256', process.env.ACCOUNT_KEY)
            .update(address)
            .digest(hex);

        const newUser = {
            profile: {
                email: `${address}@atko.email`,
                ethAddress: address
            },
            credentials: {
                password: {
                    value: stubPassword
                }
            }
        }
        const user = await client.createUser(newUser);
        if (user) {
            return {
                statusCode: 200,
                body: `Successfully registered address: ${address}`
            }
        } else {
            throw new Error("Could not create user");
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                errorSummary: err
            })
        }
    }
  };
  