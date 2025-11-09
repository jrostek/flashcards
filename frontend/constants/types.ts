export type Flashcard = {
    id: number;
    question: string;
    answer: string;
    description: string;
};

export type User = {
    id: number;
    name: string;
};

export type Deck = {
    id: number;
    title: string;
    flashcardIds: number[];
};

export type UserSession = {
    userId: number;
    progress: {
        [flashcardId: number]: {
            correct: number;
            incorrect: number;
        };
    };
};