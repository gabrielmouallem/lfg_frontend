export interface Loan {
  name: string;
  cpf: string;
  status:
    | "processing"
    | "approved_by_ai"
    | "approved_by_human"
    | "rejected_by_ai"
    | "rejected_by_human";
  requested_infos: string;
}
