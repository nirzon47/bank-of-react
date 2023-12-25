import { useState } from 'react'

const ChartItem = ({ min, max, step, label, type, id }) => {
	const [value, setValue] = useState(min)
	const handleChange = (e) => {
		setValue(e.target.value)
	}

	const showValue = () => {
		console.log(value)
	}

	return type === 'money' ? (
		<div className='w-96'>
			<h2 className='mb-2 font-medium text-zinc-700'>{label}</h2>
			<p className='mb-2 text-xl font-bold'>$ {value}</p>
			<div className='tooltip w-96' data-tip={value}>
				<input
					type='range'
					min={min}
					max={max}
					step={step}
					className='mb-1 range'
					onChange={handleChange}
					onMouseOver={showValue}
					id={id}
				/>
			</div>
			<div className='flex justify-between'>
				<span className='text-xs text-zinc-600'>$ {min}</span>
				<span className='text-xs text-zinc-600'>$ {max}</span>
			</div>
		</div>
	) : (
		<div className='w-96'>
			<h2 className='mb-2 font-medium text-zinc-700'>{label}</h2>
			<p className='mb-2 text-xl font-bold'>{value} %</p>
			<input
				type='range'
				min={min}
				max={max}
				step={step}
				value={value}
				className='mb-1 range'
				onChange={handleChange}
				onMouseOver={showValue}
			/>
			<div className='flex justify-between'>
				<span className='text-xs text-zinc-600'>{min} %</span>
				<span className='text-xs text-zinc-600'>{max} %</span>
			</div>
		</div>
	)
}

export default ChartItem
