export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
    console.log('prevState :', prevState)
        console.log('args:', args)
        var newState = reducer(prevState, action, args)
        console.log('newState:', newState)
        console.groupEnd()
        return newState
        
    }
 
}