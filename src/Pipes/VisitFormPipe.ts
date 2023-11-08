import { VisitForm } from '../enum/VisitForm';

export function GetVisitForm(visitForm: VisitForm) {
  if (visitForm === 1) {
    return 'პირისპირ';
  }
  if (visitForm === 2) {
    return 'სატელეფონო ან ინტერნეტით';
  }

  return 'სხვა';
}
