import ChartItem from './ChartItem'

const Charts = () => {
	return (
		<div className='flex flex-col gap-6 p-8'>
			<ChartItem
				min={1000}
				max={10000}
				step={1000}
				label={'Home Value'}
				id='home-value'
				type='money'
			/>
			<ChartItem
				min={0}
				max={4600}
				step={100}
				label={'Down Payment'}
				id='down-payment'
				type='money'
			/>
			<ChartItem
				min={0}
				max={4600}
				step={100}
				label={'Loan Amount'}
				id='loan-amount'
				type='money'
			/>
			<ChartItem
				min={2}
				max={18}
				step={1}
				label={'Interest Rate'}
				id='interest-rate'
				type='percent'
			/>
		</div>
	)
}
export default Charts
