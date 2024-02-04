// utils/functions.ts

/**
 * Encrypts the given message using the Caesar cipher with the specified displacement.
 *
 * @param {string} mensaje - the message to be encrypted
 * @param {number} desplazamiento - the displacement value for the Caesar cipher
 * @return {string} the encrypted message
 */
export const cesarCipher = (mensaje: string, desplazamiento: number): string => {
    return mensaje
        .split('')
        .map((char) => {
            if (char.match(/[a-z]/i)) {
                const code = char.charCodeAt(0);
                const start = code <= 90 ? 65 : 97;
                return String.fromCharCode(((code - start + desplazamiento) % 26) + start);
            } else {
                return char;
            }
        })
        .join('');
};

/**
 * Encrypts the given message using the ROT13 algorithm.
 *
 * @param {string} mensaje - the message to be encrypted
 * @return {string} the encrypted message
 */
export const rot13 = (mensaje: string): string => {
    return mensaje
        .split('')
        .map((char) => {
            if (char.match(/[a-z]/i)) {
                const code = char.charCodeAt(0);
                const start = code <= 90 ? 65 : 97;
                return String.fromCharCode(((code - start + 13) % 26) + start);
            } else {
                return char;
            }
        })
        .join('');
};

export const vigenereCipher = (mensaje: string, clave: string) => {
    mensaje = mensaje.toUpperCase();
    clave = clave.toUpperCase();

    let resultado = '';
    let claveIndex = 0;

    for (let i = 0; i < mensaje.length; i++) {
        const char = mensaje.charAt(i);

        if (char.match(/[A-Z]/)) {
            const charCode = ((mensaje.charCodeAt(i) - 65 + clave.charCodeAt(claveIndex) - 65) % 26) + 65;
            resultado += String.fromCharCode(charCode);
            claveIndex = (claveIndex + 1) % clave.length;
        } else {
            resultado += char;
        }
    }

    return resultado;
}


export const xorCipher = (message: string, key: string): string => {
    return message
        .split('')
        .map((char, index) => {
            const charCode = char.charCodeAt(0) ^ key.charCodeAt(index % key.length);
            return String.fromCharCode(charCode);
        })
        .join('');
};

export const reverseCipher = (message: string): string => {
    return message.split('').reverse().join('');
};

export const base64Cipher = (message: string): string => {
    return btoa(message);
};

export const reverseCesarCipher = (message: string, displacement: number): string => {
    return cesarCipher(message, 26 - displacement);
};