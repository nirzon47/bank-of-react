const Dropdown = () => {
	return (
		<div>
			<p className='text-xs'>Tenure</p>
			<select className='w-full max-w-xs select select-bordered' id='loanTerm'>
				<option>5 years</option>
				<option>10 years</option>
				<option>15 years</option>
				<option>20 years</option>
				<option>25 years</option>
			</select>
		</div>
	)
}

export default Dropdown
