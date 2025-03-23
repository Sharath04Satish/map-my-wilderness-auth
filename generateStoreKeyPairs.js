import { generateKeyPairSync } from "crypto";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const { privateKey, publicKey } = generateKeyPairSync(`${process.env.CRYPTO_METHOD}`, {
    modulusLength: parseInt(`${process.env.MODULUS_LENGTH}`),
    publicKeyEncoding: {
        type: `${process.env.PUBLIC_KEY_ENC_TYPE}`,
        format: `${process.env.PUBLIC_KEY_ENC_FORMAT}`
    },
    privateKeyEncoding: {
        type: `${process.env.PRIVATE_KEY_ENC_TYPE}`,
        format: `${process.env.PRIVATE_KEY_ENC_FORMAT}`
    }
});

fs.writeFileSync(`${process.env.PRIVATE_KEY_PATH}`, privateKey, { mode: 0o600 });
fs.writeFileSync(`${process.env.PUBLIC_KEY_PATH}`, publicKey);
