export function signupCustomer(customer) {
    return async function (dispatch) {
        dispatch({
            type: "customer/loading"
        })
        const response = await fetch('customers', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
        const data = await response.json()

        if (response.ok) {
            dispatch({
                type: "customer/signup",
                payload: data
            })
            localStorage.setItem("token", data.jwt)
        } else {
            dispatch({
                type: "customer/error",
                payload: data
            })
        }
    }
}


const initialState = {
    customer: {},
    errors: [],
    status: "idle"
}

export default function customerReducer(state = initialState, action) {
    switch (action.type) {
        case "customer/signup":
            return {
                ...state,
                customer: action.payload.customer
            }
            case "customer/loading":
                return {
                    ...state,
                    status: "loading"
                }
                case "customer/error":
                    return {
                        ...state,
                        errors: action.payload.errors
                    }
                    default:
                        return state;
    }

}