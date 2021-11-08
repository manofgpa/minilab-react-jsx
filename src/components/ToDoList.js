import React from 'react'

export const ToDoList = () => {

  const tasks = [
    "Fazer compras",
    "Renovar CNH",
    "Pagar contas",
    "Estudar React",
    "Fazer Minilab",
  ]

  return (
    <ul style={{ 'list-style-type': 'none' }}>
      {tasks.map(task => (
        <li key={task}>
          <input type='checkbox' name={task} style={{ 'margin-right': '5px' }} />
          {task}
        </li>
      ))}
    </ul>
  )
}
