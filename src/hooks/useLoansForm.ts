import React, { useState } from "react";
import api from "../services/ApiService";
import { Loan } from "../screens/HomeScreen/HomeScreen.types";

export const useLoanForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<Loan | null>(null)

  function sendLoanForm({ name, cpf }: {
    name: string;
    cpf: string;
  }) {
    setIsLoading(true);
    api
      .post("/loan/", {
        name,
        cpf,
      })
      .then(res => {
        setResponse(res.data);
        setError(null);
      })
      .catch(() => {
        setResponse(null);
        setError('Erro ao solicitar proposta.')
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return {
    isLoading,
    error,
    response,
    sendLoanForm,
  };
};
