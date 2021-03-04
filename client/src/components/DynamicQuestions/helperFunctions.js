export const restructureQuestionsForPost = (data) => {
    console.log('restructureForTable: ', data)
    let state = {}
    Object.keys(data).forEach((q) => {
        state = {
            ...state,
            [data[q].id ? data[q].id : q]: data[q].answer,
        };
    })
    console.log("restructureForTable:", state)
    return state
}