// accountInfo
// cahrInfo
// PlayerInfo
type AccountInfo = {
  id: number;
  name: string;
  email?: string;
}

const account: AccountInfo = {
  id: 123,
  name: "Rafa"
}

type CharInfo = {
  nickname: string;
  level: number
}

const char: CharInfo = {
  nickname: "rafa",
  level: 30
}
//interscção entre os types AccounInfo e CharInfo, mas a varaivel ou propriedade precisa ter todos os atributos preenchidos obviamente
type PlayerInfo = AccountInfo & CharInfo 
const player: PlayerInfo = {
  id: 123,
  name: 'rafa',
  nickname: 'rafabolado',
  level: 40
}