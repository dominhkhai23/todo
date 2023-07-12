import storage from './util/storage.js';

var init = {
   todos: storage.get(),
   filter:'all',
   filters: {
      all: () => true,
      active: todo => !todo.completed,
      completed: todo => todo.completed
   },
   editing: null


}

var actions = {
    ADD({todos}, title) {
      if(title) {
         todos.push({title, completed: false})
         storage.set(todos)
      } 
    },
    toggle({todos}, index) {
       var todo = todos[index]
       todo.completed = !todo.completed
       storage.set(todos)
    },
    toggleAll({todos}, completed) {
       todos.forEach(todo => todo.completed = completed)
       storage.set(todos)
    },
    delete({todos}, index) {
      todos.splice(index, 1)
      storage.set(todos)
    },
    converted(state, filter) {
         state.filter = filter
    }, 
    clearCompleted(state) {
      state.todos = state.todos.filter(state.filters.active)
      storage.set(state.todos)
    },
    startEdit(state, index) {
      state.editing = index
    },

    save(state, title) {
      if(title) {
         state.todos[state.editing].title = title
         state.editing = null
      } else {
         this.delete(state, state.editing)
      }
      storage.set(state.todos)
    },
    Esc(state) {
      state.editing = null
    }
   
}

export default function reduce(state = init, action, args) {
   actions[action] && actions[action](state, ...args)
   return state
}   



