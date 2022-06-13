import { useRef } from 'react';
import './header.scss';

function Header({ setnajot }) {
    let shef = useRef('')
    let form = (evt) => {
       evt.preventDefault()
       if (shef.current.value <= 1) return
       let newObj = {
           id: new Date().getTime(),
           text: shef.current.value ,
           isDone: false,
       }
       console.log(newObj);
       setnajot((prev) =>[newObj,...prev])
       shef.current.value = ''
    }

    return (
        <form className='form' onSubmit={form}> 
            <input ref={shef} type="text" className="Input" placeholder='add todo...' required />
            <button className="bos">Button</button>
        </form>
    )
}

export default Header