import { Deck, Flashcard, User, UserSession } from "@/constants/types";

export const flashcards: Flashcard[] = [
    {
        id: 1,
        question: "doen",
        answer: "to do",
        description: "Verb, meaning to perform an action. Example: Wij moeten het huiswerk doen. (We have to do the homework.)",
    },
    {
        id: 2,
        question: "het boek",
        answer: "the book",
        description: "Noun, meaning a set of written or printed pages. Example: Ik lees een interessant boek. (I am reading an interesting book.)",
    },
    {
        id: 3,
        question: "spreken",
        answer: "to speak",
        description: "Verb, meaning to communicate verbally. Example: Kun je Engels spreken? (Can you speak English?)",
    },
];

export const users: User[] = [
    {
        id: 1,
        name: "Alice"
    },
    {
        id: 2,
        name: "Bob"
    }
];

export const decks: Deck[] = [
    {
        id: 1,
        title: "Basic Dutch Verbs",
        flashcardIds: [1, 3],
    },
    {
        id: 2,
        title: "Basic Dutch Nouns",
        flashcardIds: [2],
    }
];

const user1Session: UserSession = {
    userId: 1,
    progress: {
        1: { correct: 5, incorrect: 1 },
        2: { correct: 3, incorrect: 1 },
        3: { correct: 4, incorrect: 0 },
    },
};

const user2Session: UserSession = {
    userId: 2,
    progress: {
        1: { correct: 0, incorrect: 1 },
        2: { correct: 0, incorrect: 0 },
        3: { correct: 0, incorrect: 0 },
    },
};

export const userSessions: UserSession[] = [user1Session, user2Session];
        