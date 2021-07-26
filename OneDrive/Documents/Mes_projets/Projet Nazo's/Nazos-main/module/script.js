import CryptoJS from 'crypto-js';

export class Script{
    secretKey = 'NazosAppKeySecret';

    encrypt(value){
        return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
    }

    decrypt(textToDecrypt){
        return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
    }
}