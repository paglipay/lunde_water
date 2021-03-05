export const LOAD_INVOICES_IN_PROGRESS = 'LOAD_INVOICES_IN_PROGRESS';
export const loadsInProgress = () => ({
    type: LOAD_INVOICES_IN_PROGRESS,
});

export const LOAD_INVOICES_SUCCESS = 'LOAD_INVOICES_SUCCESS';
export const loadsSuccess = invoices => ({
    type: LOAD_INVOICES_SUCCESS,
    payload: { invoices },
});

export const LOAD_INVOICES_FAILURE = 'LOAD_INVOICES_FAILURE';
export const loadsFailure = () => ({
    type: LOAD_INVOICES_FAILURE,
});