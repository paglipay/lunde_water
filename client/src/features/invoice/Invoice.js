import React from "react";
import { connect } from "react-redux";
import { load } from "./redux/thunks";
import Invoice from "../../components/invoice/Invoice";

function InvoiceRedux(props) {



    return <Invoice {...props} />;
}
// remembers the state
const mapStateToProps = (state) => {
    return {
        invoices: state.invoices,
    };
};
// dispatch is where there is an action example button, onclicks
const mapDispatchToProps = (dispatch) => {
    return {

        loadInvoices: (obj) => dispatch(load(obj)),
        //     fetchCollections: () => dispatch(fetchCollections()),
        //   onRemovePressed: id => dispatch(removeCollectionRequest(id)),
        //   onActivatePressed: id => dispatch(markCollectionAsActiveRequest(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceRedux);
