"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchmakingQueues = {
    0: {
        map: 'Custom games',
        description: '',
        notes: '',
    },
    2: {
        map: 'Summoner\'s Rift',
        description: '5v5 Blind Pick games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 430',
    },
    4: {
        map: 'Summoner\'s Rift',
        description: '5v5 Ranked Solo games',
        notes: 'Deprecated in favor of queueId 420',
    },
    6: {
        map: 'Summoner\'s Rift',
        description: '5v5 Ranked Premade games',
        notes: 'Game mode deprecated',
    },
    7: {
        map: 'Summoner\'s Rift',
        description: 'Co-op vs AI games',
        notes: 'Deprecated in favor of queueId 32 and 33',
    },
    8: {
        map: 'Twisted Treeline',
        description: '3v3 Normal games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 460',
    },
    9: {
        map: 'Twisted Treeline',
        description: '3v3 Ranked Flex games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 470',
    },
    14: {
        map: 'Summoner\'s Rift',
        description: '5v5 Draft Pick games',
        notes: 'Deprecated in favor of queueId 400',
    },
    16: {
        map: 'Crystal Scar',
        description: '5v5 Dominion Blind Pick games',
        notes: 'Game mode deprecated',
    },
    17: {
        map: 'Crystal Scar',
        description: '5v5 Dominion Draft Pick games',
        notes: 'Game mode deprecated',
    },
    25: {
        map: 'Crystal Scar',
        description: 'Dominion Co-op vs AI games',
        notes: 'Game mode deprecated',
    },
    31: {
        map: 'Summoner\'s Rift',
        description: 'Co-op vs AI Intro Bot games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 830',
    },
    32: {
        map: 'Summoner\'s Rift',
        description: 'Co-op vs AI Beginner Bot games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 840',
    },
    33: {
        map: 'Summoner\'s Rift',
        description: 'Co-op vs AI Intermediate Bot games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 850',
    },
    41: {
        map: 'Twisted Treeline',
        description: '3v3 Ranked Team games',
        notes: 'Game mode deprecated',
    },
    42: {
        map: 'Summoner\'s Rift',
        description: '5v5 Ranked Team games',
        notes: 'Game mode deprecated',
    },
    52: {
        map: 'Twisted Treeline',
        description: 'Co-op vs AI games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 800',
    },
    61: {
        map: 'Summoner\'s Rift',
        description: '5v5 Team Builder games',
        notes: 'Game mode deprecated',
    },
    65: {
        map: 'Howling Abyss',
        description: '5v5 ARAM games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 450',
    },
    70: {
        map: 'Summoner\'s Rift',
        description: 'One for All games',
        notes: '',
    },
    72: {
        map: 'Howling Abyss',
        description: '1v1 Snowdown Showdown games',
        notes: '',
    },
    73: {
        map: 'Howling Abyss',
        description: '2v2 Snowdown Showdown games',
        notes: '',
    },
    75: {
        map: 'Summoner\'s Rift',
        description: '6v6 Hexakill games',
        notes: '',
    },
    76: {
        map: 'Summoner\'s Rift',
        description: 'Ultra Rapid Fire games',
        notes: '',
    },
    78: {
        map: 'Summoner\'s Rift',
        description: 'Mirrored One for All',
        notes: '',
    },
    83: {
        map: 'Summoner\'s Rift',
        description: 'Co-op vs AI Ultra Rapid Fire games',
        notes: '',
    },
    91: {
        map: 'Summoner\'s Rift',
        description: 'Doom Bots Rank 1 games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 950',
    },
    92: {
        map: 'Summoner\'s Rift',
        description: 'Doom Bots Rank 2 games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 950',
    },
    93: {
        map: 'Summoner\'s Rift',
        description: 'Doom Bots Rank 5 games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 950',
    },
    96: {
        map: 'Crystal Scar',
        description: 'Ascension games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 910',
    },
    98: {
        map: 'Twisted Treeline',
        description: '6v6 Hexakill games',
        notes: '',
    },
    100: {
        map: 'Butcher\'s Bridge',
        description: '5v5 ARAM games',
        notes: '',
    },
    300: {
        map: 'Howling Abyss',
        description: 'Legend of the Poro King games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 920',
    },
    310: {
        map: 'Summoner\'s Rift',
        description: 'Nemesis games',
        notes: '',
    },
    313: {
        map: 'Summoner\'s Rift',
        description: 'Black Market Brawlers games',
        notes: '',
    },
    315: {
        map: 'Summoner\'s Rift',
        description: 'Nexus Siege games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 940',
    },
    317: {
        map: 'Crystal Scar',
        description: 'Definitely Not Dominion games',
        notes: '',
    },
    318: {
        map: 'Summoner\'s Rift',
        description: 'ARURF games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 900',
    },
    325: {
        map: 'Summoner\'s Rift',
        description: 'All Random games',
        notes: '',
    },
    400: {
        map: 'Summoner\'s Rift',
        description: '5v5 Draft Pick games',
        notes: '',
    },
    410: {
        map: 'Summoner\'s Rift',
        description: '5v5 Ranked Dynamic games',
        notes: 'Game mode deprecated in patch 6.22',
    },
    420: {
        map: 'Summoner\'s Rift',
        description: '5v5 Ranked Solo games',
        notes: '',
    },
    430: {
        map: 'Summoner\'s Rift',
        description: '5v5 Blind Pick games',
        notes: '',
    },
    440: {
        map: 'Summoner\'s Rift',
        description: '5v5 Ranked Flex games',
        notes: '',
    },
    450: {
        map: 'Howling Abyss',
        description: '5v5 ARAM games',
        notes: '',
    },
    460: {
        map: 'Twisted Treeline',
        description: '3v3 Blind Pick games',
        notes: '',
    },
    470: {
        map: 'Twisted Treeline',
        description: '3v3 Ranked Flex games',
        notes: '',
    },
    600: {
        map: 'Summoner\'s Rift',
        description: 'Blood Hunt Assassin games',
        notes: '',
    },
    610: {
        map: 'Cosmic Ruins',
        description: 'Dark Star: Singularity games',
        notes: '',
    },
    800: {
        map: 'Twisted Treeline',
        description: 'Co-op vs. AI Intermediate Bot games',
        notes: '',
    },
    810: {
        map: 'Twisted Treeline',
        description: 'Co-op vs. AI Intro Bot games',
        notes: '',
    },
    820: {
        map: 'Twisted Treeline',
        description: 'Co-op vs. AI Beginner Bot games',
        notes: '',
    },
    830: {
        map: 'Summoner\'s Rift',
        description: 'Co-op vs. AI Intro Bot games',
        notes: '',
    },
    840: {
        map: 'Summoner\'s Rift',
        description: 'Co-op vs. AI Beginner Bot games',
        notes: '',
    },
    850: {
        map: 'Summoner\'s Rift',
        description: 'Co-op vs. AI Intermediate Bot games',
        notes: '',
    },
    900: {
        map: 'Summoner\'s Rift',
        description: 'ARURF games',
        notes: '',
    },
    910: {
        map: 'Crystal Scar',
        description: 'Ascension games',
        notes: '',
    },
    920: {
        map: 'Howling Abyss',
        description: 'Legend of the Poro King games',
        notes: '',
    },
    940: {
        map: 'Summoner\'s Rift',
        description: 'Nexus Siege games',
        notes: '',
    },
    950: {
        map: 'Summoner\'s Rift',
        description: 'Doom Bots Voting games',
        notes: '',
    },
    960: {
        map: 'Summoner\'s Rift',
        description: 'Doom Bots Standard games',
        notes: '',
    },
    980: {
        map: 'Valoran City Park',
        description: 'Star Guardian Invasion: Normal games',
        notes: '',
    },
    990: {
        map: 'Valoran City Park',
        description: 'Star Guardian Invasion: Onslaught games',
        notes: '',
    },
    1000: {
        map: 'Overcharge',
        description: 'PROJECT: Hunters games',
        notes: '',
    },
    1010: {
        map: 'Summoner\'s Rift',
        description: 'Snow ARURF games',
        notes: '',
    },
};
