"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const index_1 = require("./index");
const lolApi = new index_1.LolApi('RGAPI-e00d38c1-103f-4d60-84e7-2d6ec553b471', 'na');
// summonerId 24712722
// queue RANKED_SOLO_5x5
// chmapion 62
// leagueId 1a3cc7ff-9b40-3927-b646-8d777e97148a
// itemId 3903
// runeId 10002
// summonerSpellId 6
lolApi.spectactor.getFeaturedGames()
    .then((data) => {
    // info(data);
    // info(data);
})
    .catch((error) => {
    console_1.info('error');
});
