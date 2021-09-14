const crypto = require('crypto');
const OktaAuth = require('@okta/okta-auth-js');

const respondWithError = (error) => {
    return {
        statusCode: 500,
        body: JSON.stringify({
            errorSummary: error
        })
    }
}

module.exports.handler = async (event) => {
    if (!event.body) return respondWithError('Missing data in request');
  
    try {
        const auth = new OktaAuth({
            issuer: process.env.OKTA_AUTH_ISSUER
        });

        const payload = JSON.parse(event.body).data;
        const { address } = payload;

        // Stub password for now
        // We would need to figure out how we can use
        // the signature verifier as a login factor
        // SHA256 + Contract Private Key + Wallet Address
        const userPassword = crypto.createHmac('sha256', process.env.ACCOUNT_KEY)
            .update(address)
            .digest(hex);
    
        const transaction = await auth.signInWithCredentials({
            username: `${wallet}@atko.email`,
            password: userPassword
        });

        if (transaction.status === 'SUCCESS') {
            const { sessionToken } = transaction;
            const redirectUrl = `${process.env.OKTA_AUTH_ISSUER}/v1/authorize?client_id=${process.env.OKTA_CLIENT_ID}&response_type=id_token&scope=session&prompt=none&redi&sessionToken=${sessionToken}&redirect_uri=${redirectUri}`;

            return {
                statusCode: 301,
                Headers: {
                    Location: redirectUrl
                }
            };
        } else {
            throw new Error(`Authentication failed: ${transaction.status}`);
        }
    } catch (err) {
        respondWithError(err);
    }
  };
  