import { createContext, useContext, useState, useReducer } from "react";
import { fetchAPI } from "../utilities/fetchAPIutil";

const DataContext = createContext();

const initialState = {
    formData: {
        date: new Date().toISOString().split("T")[0],
        time: "",
        numberOfGuests: "",
        occasion: ""
    },
    availableTimes: [ "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00" ]
};

console.log("initial state", initialState);


export function initializeTimes() {
        const today = new Date();
        const times = fetchAPI(today);
        console.log("Initialized times:", initialState)
        return { availableTimes: times, formData: initialState.formData };
}

export function updateTimes(state, action) {
    if (action.type === "UPDATE_TIMES") {
        const times = fetchAPI(new Date(action.date));
        console.log("Updated times:", times);
        return { ...state, availableTimes: times };
    } else {
        return state;
        }
}


export const DataContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(updateTimes, initialState, initializeTimes);

    const [formData, setFormData ] = useState(state.formData);

    return (
        <DataContext.Provider value={{ ...state, dispatch, formData, setFormData }}>
            {children}
        </DataContext.Provider>
    );

}

export const useDataContext = () => useContext(DataContext);
