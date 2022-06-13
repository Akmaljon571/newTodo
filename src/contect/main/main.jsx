import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers'
import './main.scss'

function Main({ najot, setnajot }) {
    let del = (evt)=>{
        let news = najot.filter((key)=>{
            if (key.id !== (evt.target.id - 0 )) {
                return key
            }
        })
        setnajot(news)
        {window.localStorage.setItem('data', JSON.stringify(najot))}
    }
   
    let edit = (evt)=>{
        let prom = prompt('edd todo')
        if (prom <= 1) return
        najot.forEach(todo => {
            if (todo.id == (evt.target.id - 0)) {
                evt.target.parentNode.previousSibling.textContent = prom
                todo.text = prom
            }
        });
        {window.localStorage.setItem('data', JSON.stringify(najot))}
    }

    let isCheck = (evt) => {
        let checkId = evt.target.id - 0;
        let checkFind = najot.find((item)=>item.id === checkId)
        checkFind.isDone = !checkFind.isDone
        setnajot(najot)
        {window.localStorage.setItem('data', JSON.stringify(najot))}
    }



    return (
        <ul className="List">
            {najot.map((key) => (
                <li className="Item" id={key.id}>
                    <input type="checkbox" onClick={isCheck} id={key.id} className='check' />
                    <div className="text">{key.text}</div>
                    <div className="button">
                        <button id={key.id} onClick={edit} className="edit">Edit</button>
                        <button id={key.id} onClick={del} className="del">Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Main