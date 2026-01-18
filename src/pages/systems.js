import { useState, useEffect } from "react"

function Systems() {
    const [systems, setSystems] = useState(() => {
        const saved = localStorage.getItem('systems')
        return saved ? JSON.parse(saved) : []
    })

    const [content, setContent] = useState('')

    const [onl, setOnl] = useState('')
    
    const [sost, setSost] = useState(false)

    const save = (key, array) => {
        localStorage.setItem(key, JSON.stringify(array))
    }

    useEffect(() => {
        save('systems', systems)
    }, [systems])

    const addSystem = () => {
        const newSystem = {name: content || `система ${systems.length+1}`, active: false}
        setSystems(prev => [...prev, newSystem])
        setContent('')
    }

    const newActive = (item) => {
        const swapActive = !item.active
        item.active = swapActive
        setSystems(prev => [...prev])
        console.log('состояние ' + item.name + ' ' + item.active)
    }

    useEffect(() => {
        const activeCount = systems.reduce((count, system) => count + (system.active ? 1 : 0), 0)
        
        if(activeCount == systems.length){
           setOnl( 'online')
           setSost(true)
        } else{
            setOnl('offline')
            setSost(false)
        }
    }, [systems])

    return[
        <div className="main">
            <h1>состояние системы: </h1> <h1 className="dor" style={{color: sost ? 'lightgreen' : 'rgb(238, 69, 69)'}}>{onl}</h1>

        </div>,

        <div className="syst">
        <ul className="sys">
        {systems.map((item, index)  => (
            <li key={index} 
            onClick={() => newActive(item)}
            className={item.active ? 'acti' : 'unacti'}>{item.name}</li>
        ))}
        

        <form >
            <input value={content} onChange={(e) => setContent(e.target.value)} placeholder="название новой системы"></input> <br></br>
            <button className="sub" type="button" onClick={addSystem}>отправить</button>
            <button className="cle" type="button" onClick={() => {setSystems([])}}>отчистить</button>
        </form>
        </ul>
        </div>

    ]
}

export {Systems}