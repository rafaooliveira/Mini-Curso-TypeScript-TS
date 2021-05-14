"use strict";
function logDetail(uid, item) {
    console.log("a product with " + uid + " has a tilte as " + item);
}
function logInfo(uid, user) {
    console.log("a user with " + uid + " has a name as " + user);
}
var renderPlatform = function (platform) {
    return platform;
};
// renderPlatform('ios')  NÃO VAI FUNCIONAR PQ OS PARAMETROS PODEM SER SOMENTE 'Windows' | 'Linux' | 'Mac OS'
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
logDetail(123, "camiseta");
logDetail("123", "sapato"); // já da merda pq o uid é number kzao 
logInfo(123, "will");
logInfo("123", "will");
// mas finge que esse uid pode ser string ou number 
// então uid fica como uid: number | string 
// aí já da pra chamar a função naquele formato 
