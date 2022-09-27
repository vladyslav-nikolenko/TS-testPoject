import React, {FC, useState, useRef} from 'react';




interface EventsExampleProps {
}

const EventsExample: FC<EventsExampleProps> = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value) 
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value)
    
  }

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
  }

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  }

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
    console.log('DRAG')
  } 

  return (
    <div>
      <input ref={inputRef} placeholder='Неуправляемый' type='text' />
      <input value={value} onChange={changeHandler} type='text' />
      <button onClick={clickHandler}></button>
      <div onDrag={dragHandler} draggable style={{width:200, height:200, background:'red'}}></div>
      <div 
      onDrop={dropHandler} 
      onDragLeave={leaveHandler}
      onDragOver={dragWithPreventHandler} 
      style={{width:200, height:200, background:  isDrag ? 'blue' : 'red', marginTop: 15}}></div>

    </div>
  );
}

export default EventsExample;