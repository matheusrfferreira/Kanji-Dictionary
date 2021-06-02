export const selectKanji = (kanji) => {
    return {
        type: "SELECT_KANJI",
        kanji,
    };
};