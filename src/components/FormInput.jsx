export default ({
	type = 'text',
	name = null,
	label,
	placeholder,
	isReq = false,
	infoText = null,
}) => {
	if (null === name) {
		name = label.toLowerCase().replace(' ', '_')
	}

	return (
		<div className="flex flex-col gap-y-1">
			<label htmlFor={name} className="text-sm font-medium text-gray-800">
				{label} {isReq && <sup className="text-red-500">*</sup>}
			</label>
			<input
				id={name}
				type={type}
				name={name}
				className="border-2 border-slate-300 bg-zinc-100 px-2 text-sm ring-0 focus:ring-0"
				{...(isReq && { required: 'required' })}
				{...(placeholder && { placeholder })}
			/>
			{infoText && <p className="text-xs text-gray-500">{infoText}</p>}
		</div>
	)
}
