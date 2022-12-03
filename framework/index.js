import * as snabbdom from 'snabbdom'

const patch = snabbdom.init([
    require("snabbdom/modules/eventlisteners").default
])

export const init = function (selector, component) {
    const app = document.querySelector(selector)
    patch(app, component.template)
}

let modifiedState = {}

export const createComponent = ({
        state = {},
        methods = {},
        template
    }) => (props) => {

    modifiedState = state;

    const mappedMethods = Object.keys(methods).reduce(
        (acc, key) => ({
            ...acc,
            [key]: (...args) => {
                modifiedState = methods[key](modifiedState, ...args);
                console.log(modifiedState);
                return modifiedState;
            }
        }),
        {}
    );

    return template({...props, ...state, methods: mappedMethods})
}