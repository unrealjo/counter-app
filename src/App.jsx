import { useState } from 'react'
import Button from './components/Button'

function App() {
	const [count, setCount] = useState(0)
	const increment = ()=>{
		setCount(count+1)
	}
	const decrement = ()=>{
		setCount(count-1)
	}
	return (
		<div className=' flex flex-col m-20 min-h-screen  items-center '>
		<header>
			<h1 >Counter App</h1>
		</header>
		<div id='counter-elements'>
		<Button trigger={increment} content="+" color="green"/>
			<span className='font-medium text-xl'>{count}</span>
		<Button trigger={decrement} content="-" color="red"/>
		</div>
		</div>
  )
}

export default App
