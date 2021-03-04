export const restructureQuestionsForPost = (data) => {
    let state = {}
    Object.keys(data).forEach((q) => {
        state = {
            ...state,
            [data[q].id ? data[q].id : q]: data[q].answer,
        };
    })
    return state
}