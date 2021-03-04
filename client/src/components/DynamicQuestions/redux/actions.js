export const CREATE_ANSWER = 'CREATE_ANSWER';
export const createAnswers = (data, key) => ({
    type: CREATE_ANSWER,
    payload: { data, key },
});

export const CREATE_REGISTER_POST = 'CREATE_REGISTER_POST';
export const createPost = answers => ({
    type: CREATE_REGISTER_POST,
    payload: answers,
});

