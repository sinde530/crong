import React from "react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import "./rechart.css";

const data = [
	{ label: "January", sales: 21, leads: 41 },
	{ label: "February", sales: 35, leads: 79 },
	{ label: "March", sales: 75, leads: 57 },
	{ label: "April", sales: 51, leads: 47 },
	{ label: "May", sales: 41, leads: 63 },
	{ label: "June", sales: 47, leads: 71 },
];

function Recharts() {
	return (
		<div className="rc-container">
			<div className="rc-title">
				<h2> Charts With Recharts Library </h2>
			</div>

			<div className="chart-container">
				<h3 className="chart-title">Line Chart</h3>
				<div className="chart-content">
					<ResponsiveContainer width="100%" height={400}>
						<LineChart data={data}>
							<Tooltip />
							<XAxis dataKey="label" />
							<YAxis />
							<CartesianGrid stroke="#ccc" strokeDasharray="7 7" />
							<Legend />
							<Line type="monotone" dataKey="sales" stroke="#Fb88cc" />
							<Line type="monotone" dataKey="leads" stroke="#17A8f5" />
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
}

export default Recharts;
