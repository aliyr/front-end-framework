import {p} from "../framework/element";
import {onClick} from "../framework/event";
import {createComponent} from "../framework";

const state = { firstName: "Ali", lastName: "Yousefi" }

const methods = {
    changeName: (state, firstName) => ({ ...state, firstName })
};

const template = () => {
    return p`${onClick(() => methods.changeName('Gholi'))} Hello ${state.firstName} ${state.lastName} !`
}

export const User = createComponent({
    state,
    methods,
    template
})