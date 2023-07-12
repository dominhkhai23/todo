import html from "../core.js"
import { connect } from "../store.js"
import Header from "./Header.js"
import todoList from "./TodoList.js"
import Footer from "./Footer.js"

function App({ todos }) {
  return html`
    <section class="todoapp">
        ${Header()}
        ${todos.length > 0 && todoList()}
        ${todos.length > 0 && Footer()}
    </section>

  `
}

export default connect()(App)