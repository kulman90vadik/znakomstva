
export interface usersType {
  "id": number,
  "age": number,
  "gender": string,
  "city": string,
  "name": string,
  "status": boolean,
  "favorites": boolean,
  "avatar": string,
  "flag": string,
  "info": infoType,
  "gallery": string[]
}

type infoType = {
  "eyes": string,
  "height": string,
  "weight": string,
  "hair": string,
  "description": string
}

