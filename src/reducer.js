import {
    combineReducers
} from "redux";
import customerReducer from "./Components/customer/customerSlice"
import handymanReducer from "./Components/handyman/HandymanSlice"
import jobReducer from "./Components/job/jobslice";
import loginReducer from "./Components/login/LoginSlice";
import reviewReducer from "./Components/review/ReviewSlice"

export default combineReducers({
        customers: customerReducer,
        handyman: handymanReducer,
        reviews: reviewReducer,
        jobs: jobReducer,
        handymanLogin: loginReducer

    }

)