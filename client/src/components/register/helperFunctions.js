export const restructureForQuestion = (data) => {
    console.log('restructureForTable: ', data)
    let state = {}
    Object.keys(data).forEach((q) => {
        switch (q) {
            case "Create a Username": {
                state = {
                    ...state,
                    username: data[q].answer,
                };
                break;
            }
            case "Add your Email": {
                state = {
                    ...state,
                    email: data[q].answer,
                };
                break;
            }
            case "Create a Password": {
                state = {
                    ...state,
                    password: data[q].answer,
                };
                break;
            }
            case "Renter your Password": {
                state = {
                    ...state,
                    repeat_password: data[q].answer,
                };
                break;
            }
            default:
                return state;
        }
    })
    console.log("restructureForTable:", state)
    return state
}