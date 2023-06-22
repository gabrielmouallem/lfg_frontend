import React, { useState } from 'react';
import { flushSync } from 'react-dom';

const maskCPF = (value: string) => {
    return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

export const useCPF = () => {
    const [cpf, setCPF] = useState('');
    const [cpfError, setCPFError] = useState<string | null>(null);

    const maskedCPF = maskCPF(cpf);
  
    const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      flushSync(() => {
        setCPF(value);
      })
      
      if (cpf.length === 11 || value.length === 14) {
        setCPFError(null);
      } else {
        setCPFError("CPF Inválido.")
      }
    };

    return {
        cpf,
        maskedCPF,
        cpfError,
        handleCPFChange,
    }
}