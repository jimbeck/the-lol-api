"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:max-classes-per-file */
class NoApiKeyError extends Error {
    constructor() { super('No API Key provided'); }
}
exports.NoApiKeyError = NoApiKeyError;
class InvalidRegionError extends Error {
    constructor() { super('Invalid Region'); }
}
exports.InvalidRegionError = InvalidRegionError;
class InvalidGameModeError extends Error {
    constructor() { super('Invalid Game Mode'); }
}
exports.InvalidGameModeError = InvalidGameModeError;
class InvalidGameTypeError extends Error {
    constructor() { super('Invalid Game Type'); }
}
exports.InvalidGameTypeError = InvalidGameTypeError;
class InvalidMapIdError extends Error {
    constructor() { super('Invalid Map Id'); }
}
exports.InvalidMapIdError = InvalidMapIdError;
class InvalidMatchingQueueIdError extends Error {
    constructor() { super('Invalid Matchmaking Queue Id'); }
}
exports.InvalidMatchingQueueIdError = InvalidMatchingQueueIdError;
class InvalidSeasonIdError extends Error {
    constructor() { super('Invalid Season Id'); }
}
exports.InvalidSeasonIdError = InvalidSeasonIdError;
