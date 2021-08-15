import React from 'react';
import './style.css';

function SidebarOptions({active, text, Icon}) {
    return (
        <div className={`SidebarOptions ${active && 'SidebarOptions--active'}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOptions
