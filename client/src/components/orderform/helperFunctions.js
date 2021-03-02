export const restructureForQuestion = (data) => {
    console.log('restructureForTable: ', data)
    let state = {}
    Object.keys(data).forEach((q) => {
        switch (q) {
            case "What would you like to order?": {
                state = {
                    ...state,
                    order_id: data[q].answer,
                };
                break;
            }
            case "Please select a date and time.": {
                state = {
                    ...state,
                    desired_time: data[q].answer,
                };
                break;
            }
            case "Please sepecify any details.": {
                state = {
                    ...state,
                    details: data[q].answer,
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