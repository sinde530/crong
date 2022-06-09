export default function Tick() {
	return (
		<div>
			<h2>{new Date().toLocaleTimeString()}</h2>
		</div>
	);
}

setInterval(Tick, 1000);
