// !!!!!!!!!!! api-ის დაიმპორტება რომ დაგვჭირდება არ მივმართოთ პირდაპირ getRegions() !!!!!!!!!!!!
// ვაიმპორტებთ ამ ფაილიდან :
// import * as callApi from '../../service';
// გამოყენებისას callApi.areas.getRegions()
// ამისთვის ყველა სერვისის ფაილს გავუკეთებთ იმპორტს ამ ფაილში სასურველი სახელით
export * as areas from './areas';
export * as users from './user';
export * as steatment from './steatment';
export * as editSteatment from './editSteatment'


