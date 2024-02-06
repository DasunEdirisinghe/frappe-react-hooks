import { useState } from 'react'
import { useFrappeAuth, useFrappeCreateDoc, useFrappeGetDocList, useSWRConfig } from './lib'
import { Test } from './Test'

function App() {
	const [count, setCount] = useState(0)
	const { login } = useFrappeAuth()


	const onLogin = () => {
		login({
			username: "Administrator",
			password: 'dlad'
		})
	}

	const { data = [],} = useFrappeGetDocList<any>("Warehouse", {
		fields: ["name"],
	}, "item-master-list", {})

	const { data: d = []} = useFrappeGetDocList<any>("Item", {
		fields: ["name"],
	}, "items", {})


	return (
		<div className="App">
			<button onClick={onLogin}>Login</button>
			
			{data?.map((item) => <div key={item.name}>{item.name}</div>)}
			<hr />
			{d?.map((item) => <div key={item.name}>{item.name}</div>)}

			<Test />
		</div>
	)
}

export default App
