import React, { useState } from 'react';


export const useName = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState<string | null>(null);
  
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      setName(value);
      
      if (name.length > 1) {
        setNameError(null);
      } else {
        setNameError("Nome Inválido.")
      }
    };

    return {
        name,
        nameError,
        handleNameChange,
    }
}