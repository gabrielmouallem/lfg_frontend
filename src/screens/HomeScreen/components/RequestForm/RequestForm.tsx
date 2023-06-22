import React from "react";
import { Button, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import * as SC from "./RequestForm.styles";
import { useCPF } from "../../../../hooks/useCPF";
import { useName } from "../../../../hooks/useName";

interface RequestFormProps {
  sendLoanForm: (args: { name: string; cpf: string }) => void;
  isLoading: boolean;
}

export const RequestForm = ({ sendLoanForm, isLoading }: RequestFormProps) => {
  const { cpf, maskedCPF, cpfError, handleCPFChange } = useCPF();
  const { name, nameError, handleNameChange } = useName();

  function handleClick() {
    sendLoanForm({ name, cpf });
  }

  return (
    <SC.Container>
      <FormControl isInvalid={!!nameError}>
        <Input
          type="text"
          placeholder="Insira seu Nome"
          value={name}
          maxLength={50}
          onChange={handleNameChange}
        />
        {!!nameError && <FormErrorMessage>{nameError}</FormErrorMessage>}
      </FormControl>
      <FormControl isInvalid={!!cpfError}>
        <Input
          type="text"
          placeholder="Insira seu CPF"
          value={maskedCPF}
          maxLength={14}
          onInput={handleCPFChange}
        />
        {!!cpfError && <FormErrorMessage>{cpfError}</FormErrorMessage>}
      </FormControl>
      <Button
        variant="solid"
        colorScheme="teal"
        onClick={handleClick}
        isLoading={isLoading}
        isDisabled={!!(!name?.length || !cpf.length || nameError || cpfError)}
      >
        Enviar
      </Button>
    </SC.Container>
  );
};
