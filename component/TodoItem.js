import html from "../core.js"
import { connect } from "../store.js"

function todoItem({ todo, index, editing }) {
  return html`
  <li class=" ${todo.completed && 'completed'}
  ${ editing === index && 'editing' }">
      <div class="view">
        <input class="toggle" type="checkbox"${todo.completed && 'checked'}
        onchange="dispatch('toggle', ${index})"
        >
        <label ondblclick="dispatch('startEdit', ${index})">${todo.title}</label>
        <button class="destroy" onclick="dispatch('delete',${index})"></button>
      </div>
      <input class="edit" value="${todo.title}"
   onkeyup="event.keyCode === 13 && dispatch('save', this.value.trim()) || event.keyCode === 27 && dispatch('Esc')"
   onblur="dispatch('save', this.value.trim())">
  </li>

  `
}

export default connect()(todoItem)