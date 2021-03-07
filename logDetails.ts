// type alias usar um alias pra colocar no type das variaveis ou parametros
type Uid = number | string

function logDetails(uid: Uid, item: string) {
  console.log(`a product with ${uid} has a tilte as ${item}`)
}


function logInfo(uid: number | string, user: string) {
  console.log(`a user with ${uid} has a name as ${user}`)
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// TYPE ALIAS SERVE PARA OUTRAS COISAS TAMBÉM 
type Platform = 'Windows' | 'Linux' | 'Mac OS'

let renderPlatform = (platform: Platform) => {
  return platform
}
// renderPlatform('ios')  NÃO VAI FUNCIONAR PQ OS PARAMETROS PODEM SER SOMENTE 'Windows' | 'Linux' | 'Mac OS'
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
logDetails(123, "camiseta")
logDetails("123", "sapato") // já da merda pq o uid é number kzao 

logInfo (123, "will")
logInfo ("123", "will")


// mas finge que esse uid pode ser string ou number 
// então uid fica como uid: number | string 
// aí já da pra chamar a função naquele formato 
