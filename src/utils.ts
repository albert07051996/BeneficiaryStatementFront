export const filterOption = (input: string, option: any) => {
  return (option!.children as unknown as string)
    .toLowerCase()
    .includes(input.toLowerCase());
};

export function _calculateAge(birthday: any) {
  // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}


export function _enumToArray(e: any) {// params => Enum
  return Object.entries(e).filter(e => !isNaN(e[0] as any)).map(e => ({ name: e[1] as string, id: e[0] as string }));
}


