import {h} from "snabbdom";

const initialState = {
    template: ''
}

const createReducer = (args) => (acc, currentItem, index) => {

    const currentArg = args[index]

    if (currentArg && currentArg.type === 'event') {
        return {
            ...acc,
            on: {
                click: currentArg.click
            }
        }
    }

    return {
        ...acc,
        template: acc.template + currentItem + (currentArg || '')
    }

}

const creatElement = (tagName) => (strings, ...args) => {

    const { template, on } = strings.reduce(createReducer(args), initialState)

    return {
        type: 'element',
        template: h(
            tagName,
            { on },
            template
        )
    }
}

export const p = creatElement('p')
export const div = creatElement('div')