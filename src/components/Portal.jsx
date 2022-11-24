import React, { useEffect } from "react";
import ReactDOM from "react-dom"

export default function Portal({ children }){

	const portalNode = document.createElement('div');
	portalNode.className = "portal"

	useEffect(() => {
		document.body.appendChild(portalNode);

		return () => {
			portalNode.remove();
		}
	},[portalNode])

	return ReactDOM.createPortal(children,portalNode)
}