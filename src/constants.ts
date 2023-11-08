
export const API_PREFIX_PERSON: string = 'https://patientstest.ncdc.moh.local/api/';
export const API_PREFIX_CASE: string = 'https://casestest.ncdc.moh.local/api/';
export const API_PREFIX_PRESENTATION: string =
  'https://examinationstest.ncdc.moh.local/api/';
export const API_PREFIX_TREATMENT: string =
  'https://treatmenttest.ncdc.moh.local/api/';
export const API_PREFIX_USERS: string = 'https://tubapigwtest.moh.gov.ge/';
export const API_PREFIX_CONTACTS: string = 'https://contactstest.ncdc.moh.local/api';



// export const APIID: string = 'https://stateissuesbeneficiaryapitest.ssa.moh.local';

// export const APIID: string = 'https://stateissuesbeneficiaryapitest.moh.gov.ge';
// export const APIID: string = 'https://localhost:44348';
// export const APIID: string = 'https://localhost:44348';
// export const STATEMENTSURL  string = "https://stateissuesagencyapitest.ssa.moh.local";
// export const LoginConst: String = 'https://stateissuesbeneficiarytest.moh.gov.ge'
// export const LoginConst: String = 'https://stateissuesbeneficiarytest.ssa.moh.local'
// export const LoginConst: String = 'http://localhost:3000'



//ეს ლინკებია
// export const LoginConst: String = 'http://dev-bnf-beneficiarystatement.moh.intra'
// export const APIID: string = 'http://dev-bnf-beneficiarystatement-api.moh.intra';
// export const APIIDTEST: string = 'https://declaration.ssa.moh.local/api/';


export const APIID: string | undefined = process.env.REACT_APP_API_URL;  

//for push
export const AskingReason= [
  {
      "id": 0,
      "descriptionGeo": "პირველადი რეგისტრაცია"
  },
  {
      "id": 1,
      "descriptionGeo": "რეგისტრაციის გაუქმება"
  },
  {
      "id": 2,
      "descriptionGeo": "განმეორებითი შეფასება"
  }
]
export const MedicalCheck = [{
  id: "1",
  name: "პირველადი",
},
{
  id: "2",
  name: "განმეორებადი",
},]

export const LoStatus = [{
  id: "1",
  name: "მკვეთრი",
},
{
  id: "2",
  name: "მნიშვნელოვანი",
},
{
  id: "3",
  name: "ზომიერი",
},]

export const LoStatusDate = [{
  id: "1",
  name: "ვადიანი",
},
{
  id: "2",
  name: "უვადოთ",
},]

export const LimitationPossibilityReason = [{
  id: "1",
  name: "საერთო",
},
{
  id: "2",
  name: "დაკავშირებულია ომთან",
},]

export const RelationType = [{
  id: "1",
  name: "შვილი",
},
{
  id: "2",
  name: "მშობელი",
},
{
  id: "3",
  name: "მეუღლე",
},]

export const ParentRelationType = [{
  id: "1",
  name: "დედა",
},
{
  id: "2",
  name: "მამა",
},
]

export const SpouseRelationType = [{
  id: "1",
  name: "ცოლი",
},
{
  id: "2",
  name: "ქმარი",
},]






export const territorialUnit = [
  // {
  //   id: "00000000-0000-0000-0000-000000000000",
  //   regionalServiceCenterId: "00000000-0000-0000-0000-000000000000",
  //   name: "გთხოვთ შეავსოთ",
  // },
  {
    id: "52c4e36e-9db5-42df-914d-01ecffb673a7",
    regionalServiceCenterId: "b7a54292-37cd-49ea-8a50-a3796a4f2401",
    name: "ხარაგაული",
  },
  {
    id: "3cb12d2c-7e86-4f6f-8409-0226bf6eca7f",
    regionalServiceCenterId: "0fb52d36-72f2-42d2-bad9-af4b34ebdcc1",
    name: "ნინოწმინდა",
  },
  {
    id: "fd0fab1e-0430-4d96-bb1b-0498e98c9b56",
    regionalServiceCenterId: "5eca01b1-bfd4-4303-9b53-67d11c824048",
    name: "ოზურგეთი",
  },
  {
    id: "c25eff05-ea61-40c1-8619-04f5c8929796",
    regionalServiceCenterId: "00000000-0000-0000-0000-000000000000",
    name: "რაჭა-ლეჩხუმი",
  },
  {
    id: "60450194-0840-45b2-af38-0fd546d7cded",
    regionalServiceCenterId: "d89aa440-73c8-4b78-8c35-4f9f48e40bdd",
    name: "სენაკი",
  },
  {
    id: "b925c033-1674-462e-b680-0ff06452fe32",
    regionalServiceCenterId: "cff86056-f4be-48c6-866d-a1903026ccff",
    name: "ლაგოდეხი",
  },
  {
    id: "203087b3-921f-4cd7-9780-1576286e3b86",
    regionalServiceCenterId: "b7a54292-37cd-49ea-8a50-a3796a4f2401",
    name: "ვანი",
  },
  {
    id: "9d50b1e9-ebd3-4a82-bfe0-1b952d5b9ae8",
    regionalServiceCenterId: "c25eff05-ea61-40c1-8619-04f5c8929796",
    name: "ცაგერი",
  },
  {
    id: "53d48104-2ee6-4aa5-8d84-1f1a8d203b13",
    regionalServiceCenterId: "cff86056-f4be-48c6-866d-a1903026ccff",
    name: "თელავი",
  },
  {
    id: "4e3e26e7-901e-423d-8053-23308ab15f4d",
    regionalServiceCenterId: "c6a5b6cb-d935-4e5c-987c-fcf361c265ef",
    name: "გლდანი-ნაძალადევი",
  },
  {
    id: "b12a481d-7421-411d-80ef-27c796801117",
    regionalServiceCenterId: "cff86056-f4be-48c6-866d-a1903026ccff",
    name: "სიღნაღი",
  },
  {
    id: "a7af6da1-a7ad-483f-9a7d-2968331286c1",
    regionalServiceCenterId: "d89aa440-73c8-4b78-8c35-4f9f48e40bdd",
    name: "ხობი",
  },
  {
    id: "525a3ed5-eaa6-49c4-9803-2ba0da85621e",
    regionalServiceCenterId: "b7a54292-37cd-49ea-8a50-a3796a4f2401",
    name: "ქუთაისი",
  },
  {
    id: "254e7514-fd51-4e42-887c-31641065e7c5",
    regionalServiceCenterId: "d89aa440-73c8-4b78-8c35-4f9f48e40bdd",
    name: "ჩხოროწყუ",
  },
  {
    id: "0828ab89-0d1f-4eea-9f14-32913bd7a44a",
    regionalServiceCenterId: "d89aa440-73c8-4b78-8c35-4f9f48e40bdd",
    name: "აბაშა",
  },
  {
    id: "0954e49e-67cb-49e5-9e6f-32a96cc0dc81",
    regionalServiceCenterId: "c6a5b6cb-d935-4e5c-987c-fcf361c265ef",
    name: "ისანი-სამგორი",
  },
  {
    id: "3e4941e3-c6bd-47b8-ad35-4167e4f34807",
    regionalServiceCenterId: "29fdddef-b17a-4c2e-b03c-6e7c3b236050",
    name: "ქობულეთი",
  },
  {
    id: "cf5a369d-b129-4c47-a407-41942bced80f",
    regionalServiceCenterId: "b7a54292-37cd-49ea-8a50-a3796a4f2401",
    name: "წყალტუბო",
  },
  {
    id: "e0a2c082-6032-48b2-8f88-4288600ef314",
    regionalServiceCenterId: "0fb52d36-72f2-42d2-bad9-af4b34ebdcc1",
    name: "ახალქალაქი",
  },
  {
    id: "ea27b92d-5dff-42fb-a987-4720cb52a69b",
    regionalServiceCenterId: "adf85985-baf1-45c2-9979-e3652f816b5a",
    name: "დმანისი",
  },
  {
    id: "d89aa440-73c8-4b78-8c35-4f9f48e40bdd",
    regionalServiceCenterId: "00000000-0000-0000-0000-000000000000",
    name: "სამეგრელო-ზემო სვანეთი",
  },
  {
    id: "cb27bb9b-ab84-43ac-8c6b-5119875fb50b",
    regionalServiceCenterId: "c6a5b6cb-d935-4e5c-987c-fcf361c265ef",
    name: "ძველი თბილისი",
  },
  {
    id: "1d4450ad-01aa-4f67-abe9-514269efeaf9",
    regionalServiceCenterId: "e9f3aee3-eefb-464e-bddc-f749b6cd8943",
    name: "გორი",
  },
  {
    id: "e12d8ef4-7aed-43d5-83f8-51fca5e1a4eb",
    regionalServiceCenterId: "00000000-0000-0000-0000-000000000000",
    name: "მცხეთა-მთიანეთი",
  },
  {
    id: "0b3a3ad0-33ee-40cf-8e67-52a15e4c7b59",
    regionalServiceCenterId: "e12d8ef4-7aed-43d5-83f8-51fca5e1a4eb",
    name: "ახალგორი",
  },
  {
    id: "ca72f8f2-d563-4289-b7e8-53baa638aa11",
    regionalServiceCenterId: "adf85985-baf1-45c2-9979-e3652f816b5a",
    name: "წალკა",
  },
  {
    id: "d75ef40a-5103-4bf9-b6de-54388b4f010d",
    regionalServiceCenterId: "5eca01b1-bfd4-4303-9b53-67d11c824048",
    name: "ჩოხატაური",
  },
  {
    id: "f235cc6f-d3df-42e6-b29b-5781dafc2eaf",
    regionalServiceCenterId: "b7a54292-37cd-49ea-8a50-a3796a4f2401",
    name: "ხონი",
  },
  {
    id: "d2c21ca2-e60d-4949-a48a-57e7158a9f27",
    regionalServiceCenterId: "b7a54292-37cd-49ea-8a50-a3796a4f2401",
    name: "ტყიბული",
  },
  {
    id: "1bcee63b-e2d1-45cd-a3b5-5a2573ec724e",
    regionalServiceCenterId: "0fb52d36-72f2-42d2-bad9-af4b34ebdcc1",
    name: "ბორჯომი",
  },
  {
    id: "e9254d55-350c-41d7-a256-63f477069b6e",
    regionalServiceCenterId: "29fdddef-b17a-4c2e-b03c-6e7c3b236050",
    name: "ხელვაჩაური",
  },
  {
    id: "5eca01b1-bfd4-4303-9b53-67d11c824048",
    regionalServiceCenterId: "00000000-0000-0000-0000-000000000000",
    name: "გურია",
  },
  {
    id: "83e0cdfa-8540-47e6-8e4b-6cbdfaf4195c",
    regionalServiceCenterId: "cff86056-f4be-48c6-866d-a1903026ccff",
    name: "ახმეტა",
  },
  {
    id: "29fdddef-b17a-4c2e-b03c-6e7c3b236050",
    regionalServiceCenterId: "00000000-0000-0000-0000-000000000000",
    name: "აჭარა",
  },
  {
    id: "eebbdfed-ba8f-484c-91f9-6f9609153758",
    regionalServiceCenterId: "e12d8ef4-7aed-43d5-83f8-51fca5e1a4eb",
    name: "თიანეთი",
  },
  {
    id: "71b276f4-0a57-4f18-8e8b-79aa9c6c5150",
    regionalServiceCenterId: "c25eff05-ea61-40c1-8619-04f5c8929796",
    name: "ამბროლაური",
  },
  {
    id: "cfdeaa1c-bb7c-489c-865b-7c1e50508968",
    regionalServiceCenterId: "cff86056-f4be-48c6-866d-a1903026ccff",
    name: "გურჯაანი",
  },
  {
    id: "fd5c6351-5695-44ec-b7af-7c6896492fa4",
    regionalServiceCenterId: "29fdddef-b17a-4c2e-b03c-6e7c3b236050",
    name: "ქედა",
  },
  {
    id: "97e62c79-fe14-4884-9de3-7e4d350d884b",
    regionalServiceCenterId: "0fb52d36-72f2-42d2-bad9-af4b34ebdcc1",
    name: "ახალციხე",
  },
  {
    id: "9bde04b3-652d-462d-aa89-91df8b8300c0",
    regionalServiceCenterId: "cff86056-f4be-48c6-866d-a1903026ccff",
    name: "საგარეჯო",
  },
  {
    id: "dfa94449-ea19-4dac-a1bb-91fc63144ae9",
    regionalServiceCenterId: "b7a54292-37cd-49ea-8a50-a3796a4f2401",
    name: "საჩხერე",
  },
  {
    id: "f961db3b-f14c-4967-91a9-93dc9d3c7f1c",
    regionalServiceCenterId: "29fdddef-b17a-4c2e-b03c-6e7c3b236050",
    name: "შუახევი",
  },
  {
    id: "e0e3f357-0c6b-4c6e-9174-9ab9d6009e15",
    regionalServiceCenterId: "adf85985-baf1-45c2-9979-e3652f816b5a",
    name: "თეთრიწყარო",
  },
  {
    id: "cff86056-f4be-48c6-866d-a1903026ccff",
    regionalServiceCenterId: "00000000-0000-0000-0000-000000000000",
    name: "კახეთი",
  },
  {
    id: "b7a54292-37cd-49ea-8a50-a3796a4f2401",
    regionalServiceCenterId: "00000000-0000-0000-0000-000000000000",
    name: "იმერეთი",
  },
  {
    id: "1daa0d07-74e3-4e5f-86b1-a5e0b68fd581",
    regionalServiceCenterId: "e9f3aee3-eefb-464e-bddc-f749b6cd8943",
    name: "კასპი",
  },
  {
    id: "ca8586a4-0dd9-49d9-bdae-aad9a1ba586e",
    regionalServiceCenterId: "b7a54292-37cd-49ea-8a50-a3796a4f2401",
    name: "ზესტაფონი",
  },
  {
    id: "0fb52d36-72f2-42d2-bad9-af4b34ebdcc1",
    regionalServiceCenterId: "00000000-0000-0000-0000-000000000000",
    name: "სამცხე-ჯავახეთი",
  },
  {
    id: "a0597101-c422-4f2e-8060-afddb8c03d50",
    regionalServiceCenterId: "d89aa440-73c8-4b78-8c35-4f9f48e40bdd",
    name: "ფოთი",
  },
  {
    id: "ab756b57-35d6-40ae-a1e8-b075cfbeebb9",
    regionalServiceCenterId: "adf85985-baf1-45c2-9979-e3652f816b5a",
    name: "რუსთავი",
  },
  {
    id: "78c739e1-eff1-4db2-bf41-b3569ad2db67",
    regionalServiceCenterId: "c25eff05-ea61-40c1-8619-04f5c8929796",
    name: "ლენტეხი",
  },
  {
    id: "dff7f997-d2e4-4884-b818-b3938b9ff16e",
    regionalServiceCenterId: "e12d8ef4-7aed-43d5-83f8-51fca5e1a4eb",
    name: "დუშეთი",
  },
  {
    id: "40b4c6d5-7ede-4171-8f53-b4ea22a1a38e",
    regionalServiceCenterId: "cff86056-f4be-48c6-866d-a1903026ccff",
    name: "ყვარელი",
  },
  {
    id: "2c984f68-8390-4f83-a814-b97bcc0320af",
    regionalServiceCenterId: "b7a54292-37cd-49ea-8a50-a3796a4f2401",
    name: "ჭიათურა",
  },
  {
    id: "add6e1fa-ad60-4cb7-bd25-bd1ac2b61441",
    regionalServiceCenterId: "29fdddef-b17a-4c2e-b03c-6e7c3b236050",
    name: "ხულო",
  },
  {
    id: "a5f70c94-f371-43db-866f-c22a94e25b36",
    regionalServiceCenterId: "b7a54292-37cd-49ea-8a50-a3796a4f2401",
    name: "სამტრედია",
  },
  {
    id: "d5bb52c6-cca3-40f6-81ea-c2dba07e185c",
    regionalServiceCenterId: "5eca01b1-bfd4-4303-9b53-67d11c824048",
    name: "ლანჩხუთი",
  },
  {
    id: "b648f3cd-5661-45da-8619-c2f85722f674",
    regionalServiceCenterId: "0fb52d36-72f2-42d2-bad9-af4b34ebdcc1",
    name: "ასპინძა",
  },
  {
    id: "5999ac45-64f0-4e8e-bc32-c4178de68764",
    regionalServiceCenterId: "adf85985-baf1-45c2-9979-e3652f816b5a",
    name: "გარდაბანი",
  },
  {
    id: "5b3c14b4-cabd-4da2-9810-c464572b22e4",
    regionalServiceCenterId: "c6a5b6cb-d935-4e5c-987c-fcf361c265ef",
    name: "ვაკე-საბურთალო",
  },
  {
    id: "73afb0af-ec08-4e4d-8169-c5828076d26a",
    regionalServiceCenterId: "d89aa440-73c8-4b78-8c35-4f9f48e40bdd",
    name: "წალენჯიხა",
  },
  {
    id: "d57c2933-4447-4339-9f7b-c78be89efd42",
    regionalServiceCenterId: "b7a54292-37cd-49ea-8a50-a3796a4f2401",
    name: "თერჯოლა",
  },
  {
    id: "3097b02a-71a4-4720-9163-c93ea3f2cb38",
    regionalServiceCenterId: "adf85985-baf1-45c2-9979-e3652f816b5a",
    name: "მარნეული",
  },
  {
    id: "06375760-5ffc-43b2-b403-cb4c1cb8c6c6",
    regionalServiceCenterId: "e9f3aee3-eefb-464e-bddc-f749b6cd8943",
    name: "ქარელი",
  },
  {
    id: "d0306214-baa9-4851-82ae-db4e97a91446",
    regionalServiceCenterId: "b7a54292-37cd-49ea-8a50-a3796a4f2401",
    name: "ბაღდათი",
  },
  {
    id: "2760014a-5fa3-4a51-8c80-dcdc786b749a",
    regionalServiceCenterId: "e12d8ef4-7aed-43d5-83f8-51fca5e1a4eb",
    name: "ყაზბეგი",
  },
  {
    id: "eaa76a15-50c7-497b-8af7-e1b450d7e2af",
    regionalServiceCenterId: "cff86056-f4be-48c6-866d-a1903026ccff",
    name: "დედოფლისწყარო",
  },
  {
    id: "8bcd4008-383d-4ba5-9c87-e20332d8f475",
    regionalServiceCenterId: "29fdddef-b17a-4c2e-b03c-6e7c3b236050",
    name: "ბათუმი",
  },
  {
    id: "adf85985-baf1-45c2-9979-e3652f816b5a",
    regionalServiceCenterId: "00000000-0000-0000-0000-000000000000",
    name: "ქვემო ქართლი",
  },

  {
    id: "c5c7fbcf-9370-4c3f-a410-e9dbed0b8276",
    regionalServiceCenterId: "c6a5b6cb-d935-4e5c-987c-fcf361c265ef",
    name: "დიდუბე-ჩუღურეთი",
  },
  {
    id: "3674e23f-21fe-4cf1-af7f-ed93af460d73",
    regionalServiceCenterId: "d89aa440-73c8-4b78-8c35-4f9f48e40bdd",
    name: "მარტვილი",
  },
  {
    id: "f7a70421-4cfd-4b8a-ba18-f0965c3a0a7e",
    regionalServiceCenterId: "e12d8ef4-7aed-43d5-83f8-51fca5e1a4eb",
    name: "მცხეთა",
  },
  {
    id: "5b9053b9-3a93-42d5-8e44-f1332b4d4fda",
    regionalServiceCenterId: "d89aa440-73c8-4b78-8c35-4f9f48e40bdd",
    name: "მესტია",
  },
  {
    id: "fe214884-a98a-406e-9338-f350c40b5f50",
    regionalServiceCenterId: "c25eff05-ea61-40c1-8619-04f5c8929796",
    name: "ონი",
  },
  {
    id: "ea255fce-d96e-4e3b-aeff-f4dc001f47c6",
    regionalServiceCenterId: "adf85985-baf1-45c2-9979-e3652f816b5a",
    name: "ბოლნისი",
  },
  {
    id: "e9f3aee3-eefb-464e-bddc-f749b6cd8943",
    regionalServiceCenterId: "00000000-0000-0000-0000-000000000000",
    name: "შიდა ქართლი",
  },
  {
    id: "9d11cb56-4741-46d0-aa37-fb893ec40c95",
    regionalServiceCenterId: "e9f3aee3-eefb-464e-bddc-f749b6cd8943",
    name: "ხაშური",
  },
  {
    id: "c6a5b6cb-d935-4e5c-987c-fcf361c265ef",
    regionalServiceCenterId: "00000000-0000-0000-0000-000000000000",
    name: "თბილისი",
  },
  {
    id: "ea5ffbcd-cf34-4c03-8f36-ff1b1284217d",
    regionalServiceCenterId: "0fb52d36-72f2-42d2-bad9-af4b34ebdcc1",
    name: "ადიგენი",
  },
];
