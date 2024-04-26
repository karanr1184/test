import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function App() {
	const [name, setName] = useState("Guest");
	const [input, setInput] = useState("");

	return (
		<div className="App">
			<h1 style={{marginLeft: "10px"}}>Hello, {name}</h1>
			<div>
				<TextField
					id="outlined-basic"
					label="Please Enter Your Name"
					variant="outlined"
					style={{ width: "20%", fontSize: "15px", margin: "10px" }}
					onChange={(e) => setInput(e.target.value)}
					value={input}
				/>
			</div>
			<Button
				variant="contained"
				color="success"
				onClick={() => setName(input)}
        style={{margin: "10px"}}
			>
				Submit
			</Button>
		</div>
	);
}

export default App;
