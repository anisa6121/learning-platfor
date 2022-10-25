import React, { useState } from 'react';
import './Togglebutton.css';
const Togglebutton = () => {
    
    const [darkMode, setDarkMode] = useState(false);
    return (
		<div className={darkMode ? "dark-mode" : "light-mode"}>
	
			<label class="switch">
				<input
					type="checkbox"
					onChange={() => setDarkMode(!darkMode)}
				/>
				<span class="slider round"></span>
            </label>
            
			<label className="switch-label ml-2  font-bold">
				{darkMode ? "Dark" : "Light"}
			</label>

		
		</div>
    );
};

export default Togglebutton;