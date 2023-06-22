import React from "react";
import RequestForm from "./components/RequestForm";
import RequestList from "./components/RequestList";
import * as SC from "./HomeScreen.styles";
import { useLoanForm } from "../../hooks/useLoansForm";
import { Loan } from "./HomeScreen.types";

export const HomeScreen = () => {
  const { sendLoanForm, isLoading, response, error } = useLoanForm();

  const showRequestList = !!(!isLoading && !error && response);

  return (
    <SC.Container>
      <div className="title">Loans For Good</div>
      <div className="description">Solicitar ou consultar sua proposta:</div>
      <RequestForm sendLoanForm={sendLoanForm} isLoading={isLoading} />
      {!!error && <div className="error">Erro ao solicitar proposta, corrija os dados ou tente novamente mais tarde.</div>}
      {showRequestList && <RequestList {...response as Loan} />}
      {isLoading && "Carregando..."}
    </SC.Container>
  );
};
