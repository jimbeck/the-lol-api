/* tslint:disable:max-classes-per-file */
export class NoApiKeyError extends Error {constructor() {super('No API Key provided'); }}
export class NoRegionWasProvided extends Error {constructor() {super('No Region was provided'); }}
export class InvalidRegionError extends Error {constructor() {super('Invalid Region'); }}

export class InvalidGameModeError extends Error {constructor() {super('Invalid Game Mode'); }}
export class InvalidGameTypeError extends Error {constructor() {super('Invalid Game Type'); }}
export class InvalidMapIdError extends Error {constructor() {super('Invalid Map Id'); }}
export class InvalidMatchingQueueIdError extends Error {constructor() {super('Invalid Matchmaking Queue Id'); }}
export class InvalidSeasonIdError extends Error {constructor() {super('Invalid Season Id'); }}
