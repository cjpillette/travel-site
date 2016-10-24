import $ from 'jquery';

class Modal {
	constructor(){
		this.openModalButton = $(".open-modal"); /* the blue contact button at top and bottom of site */
		this.modal = $(".modal"); /* the actual modal window */
		this.closeModalButton = $(".modal__close"); /* the X from the actual modal window */
		this.events();
	}

	events(){
		//clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this)); /*to have 'this' stick to what it is already set to*/
		//clicking the x close modal button
		this.closeModalButton.click(this.closeModal.bind(this));
		//pushes any key press
		$(document).keyup(this.keyPressHandler.bind(this)); /* jquery select all doc and when user releases key, lib method, */
	}

	keyPressHandler(e){
		if (e.keyCode == 27) { /*if the key pressed is the escape key; id is always 27 for ESC*/
			this.closeModal();
		}
	}

	openModal(){
		this.modal.addClass("modal--is-visible");
		return false; /* prevent the default behaviour from going back up at the top of the page when clicking on the href*/
	}

	closeModal(){
		this.modal.removeClass("modal--is-visible");
	}
}

export default Modal;