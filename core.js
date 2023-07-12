
export default function html([first, ...strings], ...values) {
    return values.reduce((acc, cur) => {
        return acc.concat(cur, strings.shift());
    }, [first])
    .filter(x => {
        return x &&  x !== true || x === 0
    })
    .join('');
}

export function createStore(reducer) {
    var state = reducer()
    var roots = new Map()

    function render() {
        for(var [root, component] of roots) {
            var output = component()
            root.innerHTML = output
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component);
            render()
        }, 
        connect(selector = state => state) {
            return (component) => (props,...args) => 
            component(Object.assign({}, props, selector(state), ...args))
        },

        dispatch(action, ...args) { 
            state = reducer(state, action, args)
            render()
        }
    }
}



