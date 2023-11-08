export type User = {
  id: string;
  loginName: string;
  password: string;
  personalID: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  telephone: string;
  address: string;
  isSuperAdmin: boolean;
  twoDimensionalAuth: boolean;
  passwordExpirationDate: string;
  LabUser: boolean;
};

export type Attributes = {
  unitGroupID: string;
};

export type Permissions = {
  testPermission: string;
};

export type UserResponse = {
  user: User;
  attributes: Attributes | null;
  // permissions: Object;
};

export type smsResponse = {

}


export type PensionUser = {
  beneficiaryId: any;
  activeAddress: string;
  address: string;
  birthDate: string;
  citizenshipId: string;
  city: string;
  comment: string;
  country: string;
  deathDate: string;
  deathMarkDate: string;
  deathRegistrationDate: string;
  deathStatus: string;
  documentNumber: string;
  email: string;
  fatherName: string;
  fatherNameEn: string;
  firstName: string;
  firstNameEn: string;
  genderId: string;
  hasDualCitizenship: string;
  id: string;
  isCivilServant: any;
  isGeorgianCitizen: any;
  isLivingAbroad: any;
  isVoid: any;
  isWithoutCitizenship: any;
  lastName: string;
  lastNameEn: string;
  payoutsList: string;
  phoneNumber: string;
  privateCardNumber: string;
  privateNumber: string;
  raion: string;
  region: string;
  relationshipTypeId: string;
  township: string;
  village: string;
  docTypeId: number;
  hasStatements: any;
}



export type RegionResponse = {
  id: string;
  name: string
};
