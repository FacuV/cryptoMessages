// App.tsx

import React, { useState } from "react";
import {
  cesarCipher,
  rot13,
  vigenereCipher,
  xorCipher,
  reverseCipher,
  base64Cipher,
  reverseCesarCipher,
} from "./utils/functions";

function App() {
  const [originalMessage, setOriginalMessage] = useState("");
  const [displacement, setDisplacement] = useState(3);
  const [cipherMethod, setCipherMethod] = useState("cesar");
  const [vigenereKey, setVigenereKey] = useState("");

  const handleDisplacementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setDisplacement(isNaN(value) ? 0 : value);
  };

  const handleOriginalMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOriginalMessage(event.target.value);
  };

  const handleCipherMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCipherMethod(event.target.value);
  };

  const handleVigenereKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVigenereKey(event.target.value.toUpperCase());
  };

  let cipheredMessage = "";
  switch (cipherMethod) {
    case "cesar":
      cipheredMessage = cesarCipher(originalMessage, displacement);
      break;
    case "rot13":
      cipheredMessage = rot13(originalMessage);
      break;
    case "vigenere":
      cipheredMessage = vigenereCipher(originalMessage, vigenereKey);
      break;
    case "xor":
      cipheredMessage = xorCipher(originalMessage, vigenereKey);
      break;
    case "reverse":
      cipheredMessage = reverseCipher(originalMessage);
      break;
    case "base64":
      cipheredMessage = base64Cipher(originalMessage);
      break;
    case "reverseCesar":
      cipheredMessage = reverseCesarCipher(originalMessage, displacement);
      break;
    default:
      break;
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto bg-white p-5 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-5">Cipher Encryptor</h1>
        <label className="block text-sm font-medium text-gray-600 mb-1">Mensaje original:</label>
        <input
          type="text"
          value={originalMessage}
          onChange={handleOriginalMessageChange}
          placeholder="Enter your message"
          className="border p-2 w-full mb-3 rounded-md"
        />

        {cipherMethod === "cesar" && (
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Desplacamiento:</label>
            <input
              type="number"
              value={displacement}
              onChange={handleDisplacementChange}
              placeholder="Enter a number"
              className="border p-2 w-full mb-3 rounded-md"
            />
          </div>
        )}

        {cipherMethod === "vigenere" && (
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Clave Vigenere:</label>
            <input
              type="text"
              value={vigenereKey}
              onChange={handleVigenereKeyChange}
              placeholder="Enter a key"
              className="border p-2 w-full mb-3 rounded-md"
            />
          </div>
        )}

        <label className="block text-sm font-medium text-gray-600 mb-1">Metodo Cifrado:</label>
        <select
          value={cipherMethod}
          onChange={handleCipherMethodChange}
          className="border p-2 w-full mb-5 rounded-md"
        >
          <option value="cesar">Caesar Cipher</option>
          <option value="rot13">ROT13</option>
          <option value="vigenere">Vigenere Cipher</option>
          <option value="xor">XOR Cipher</option>
          <option value="reverse">Reverse</option>
          <option value="base64">Base64 Encode</option>
          <option value="reverseCesar">Reverse Caesar Cipher</option>
        </select>

        <div className="text-2xl font-bold mb-3">Mensaje cifrado: {cipheredMessage}</div>
      </div>
    </div>
  );
}

export default App;
