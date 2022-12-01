export default () => {
	return (
		<div className="flex gap-x-2.5">
			<button
				type="button"
				className="flex h-16 w-14 flex-1 items-center justify-center rounded-tl-xl rounded-bl-xl bg-gray-100 text-3xl text-white hover:bg-cyan-400">
				-
			</button>
			<div className="flex max-w-min flex-grow-0 flex-col items-center justify-center border-2 border-slate-300 bg-zinc-100">
				<input
					type="number"
					className="border-none bg-transparent p-0 text-center text-lg font-bold focus:ring-0"
					min={1}
					value={1}
					onChange={e => (e.target.value = 1)}
				/>
				<span className="text-center text-xs">
					{Boolean > 1 ? 'Shares' : 'Share'}
				</span>
			</div>
			<button
				type="button"
				className="flex h-16 w-14 flex-1 items-center justify-center rounded-tr-xl rounded-br-xl bg-gray-100 text-3xl text-white hover:bg-cyan-400">
				+
			</button>
		</div>
	)
}
