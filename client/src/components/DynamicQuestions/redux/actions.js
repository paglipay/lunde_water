export const CREATE_ANSWER = 'CREATE_ANSWER';
export const createAnswers = (data, key) => ({
    type: CREATE_ANSWER,
    payload: { data, key },
});

