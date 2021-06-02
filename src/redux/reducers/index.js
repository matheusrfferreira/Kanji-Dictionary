export const KanjiReducer = (state = 0, action) => {

    switch(action.type){
        case "SELECT_KANJI":
            return  action.kanji;

        default:
            return state;
    }
}