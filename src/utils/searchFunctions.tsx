export const filterOption = (input: string, option: any) => {
    return (option!.children as unknown as string)
      .toLowerCase()
      .includes(input.toLowerCase());
  };
  
  
  
  export const filterOptionForCountries = (input: string, option: any) => {
    return (option!.value as unknown as string)
      .toLowerCase()
      .includes(input.toLowerCase());
  };
  