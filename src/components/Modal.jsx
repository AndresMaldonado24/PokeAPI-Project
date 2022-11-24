import React from "react";
import closeButton from '../assets/img/close.png'

export function Overlay({showModal}){
    return <div className="overlay" onClick={showModal}></div>
}

export function ModalMedium({children, showModal}){

	return(
		<div className="modalMedium">
			<div className="modalHeader">                
					<img id="closeModalButton" onClick={showModal} src={closeButton} alt="Boton rojo con una x blanca" />
			</div>
			<div className="modalBody">
				{children}
			</div>
			<div className="modalFooter"></div>
		</div>
	)
}