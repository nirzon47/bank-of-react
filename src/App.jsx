import Dropdown from './Dropdown'
import Header from './Header'
import Sliders from './Sliders'

import { useState } from 'react'

const App = () => {
	const [data, setData] = useState({
		homeValue: 3000,
		downPayment: 3000 * 0.2,
		loanAmount: 3000 * 0.8,
		loanTerm: 5,
		interestRate: 5,
	})

	return (
		<div>
			<Header />
			<Sliders data={data} setData={setData} />
			<Dropdown data={data} setData={setData} />
		</div>
	)
}

export default App
