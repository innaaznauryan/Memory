import { useState, useEffect } from 'react'

const Memory = ({data}) => {
    const [images, setImages] = useState(data)
    const [active, setActive] = useState([])
    const [count, setCount] = useState(0)
    const [vanish, setVanish] = useState([])
  
    useEffect(() => {
      const arr = [...images]
      for (let i = arr.length - 1; i >= 0; i--) {
        const index = Math.round(Math.random() * i)
        arr.push(arr.splice(index, 1)[0])
      }
      setImages([...arr])
    }, [])
  
    useEffect(() => {
      let timer
      if (count >= 2) timer = setTimeout(() => {
        setActive([])
        setCount(0)
        const [index1, index2] = [active[0], active[1]]
        if(images[index1] == images[index2]) setVanish([...vanish, index1, index2])
      }, 1000);
      return () => {
        clearInterval(timer)
        timer = null
      }
    }, [count])
  
    useEffect(() => {
      if(vanish.length == 16) setTimeout(() => location.reload(), 2000); 
    }, [vanish])
  
    const handleClick = (idx) => {
      if(count >= 2 || active.includes(idx)) return
      setActive([...active, idx])
      setCount((p) => p + 1)
    }

  return (
    <div className="board">
    {new Array(16).fill(null).map((_, idx) => {
      return <div className={"cell-container" + (active.includes(idx) ? " active" : "") + (vanish.includes(idx) ? " vanish" : "")} key={idx} onClick={() => handleClick(idx)}>
            <div className="cell">{idx + 1}</div>
            <div className="cell-back" style={{backgroundImage: `url(/images/${images[idx]})`}}></div>
      </div>
    })}
    </div>
  )
}

export default Memory