import React from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
	return (
		<div className="app">
			<div className="app__header">
				<img
					className="app__headerImage"
					src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
					alt="instagram logo"
				/>
			</div>
			<Post />
			<Post />
			<Post />
		</div>
	);
}

export default App;
