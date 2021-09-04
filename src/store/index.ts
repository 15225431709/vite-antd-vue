import { createStore } from "vuex";
interface State {
    userSig: string
}
export default createStore({
    state: {
        userSig: "name"
    }
})