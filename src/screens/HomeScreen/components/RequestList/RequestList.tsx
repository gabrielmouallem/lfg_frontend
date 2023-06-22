import React from "react";
import * as SC from "./RequestList.styles";
import { Loan } from "../../HomeScreen.types";

type PickedLoanData = Pick<Loan, "status" | "requested_infos">;

type RequestListProps = PickedLoanData | null;

const statusesHashMap: { [key: string]: string } = {
  processing: "Processando... Recarregue a página em alguns minutos para ver o status.",
  approved_by_ai: "Aguardando avaliação de um profissional, volte em breve.",
  approved_by_human: "Aprovada.",
  rejected_by_ai: "Reprovada.",
  rejected_by_human: "Reprovada.",
};

export const RequestList = (props: RequestListProps) => {
  const { status, requested_infos } = props as PickedLoanData;

  if (!props)
    return (
      <SC.Container>
        <div className="title">
          Solicite uma proposta para verificar seu status
        </div>
      </SC.Container>
    );

  return (
    <SC.Container>
      <div className="title">Status da Proposta:</div>
      <div>{statusesHashMap[status]}</div>
      <div>
        {requested_infos?.length
          ? "Informações adicionais requisitadas: " + requested_infos
          : "Nenhuma informação adicional foi requisitada."}
      </div>
    </SC.Container>
  );
};
