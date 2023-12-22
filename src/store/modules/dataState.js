import { createSlice } from "@reduxjs/toolkit";
import { dataJson } from "@/apis/datajson";
const counterStore = createSlice({
    name: "counter",
    initialState: {
        dataJson: {},
        pollFlag: true,
    },
    reducers: {
        setDatejson(state, action) {
            state.dataJson = action.payload
            if (action.payload.polls) {
                state.pollFlag = false;
            }
        },
        
    }
})
//解构出actioncreater
const dateJsonobj = (meetid) => {//可以当做actioncreater去触发
    return async (dispatch) => {
        let res = await dataJson(meetid);
        dispatch(setDatejson(res));
    }
}
const { setDatejson } = counterStore.actions;
//获取reducer
const reducer = counterStore.reducer;
export { setDatejson };
export { dateJsonobj };
export default reducer;