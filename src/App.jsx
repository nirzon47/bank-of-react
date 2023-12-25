import Dropdown from './Dropdown'
import Header from './Header'
import Sliders from './Sliders'
import ChartResult from './Chart'

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
			<div className='flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-24 lg:flex-row'>
				<div className='flex flex-col justify-center'>
					<Sliders data={data} setData={setData} />
					<Dropdown data={data} setData={setData} />
				</div>
				<div className='md:p-8'>
					<ChartResult data={data} />
				</div>
			</div>
		</div>
	)
}

export default App
