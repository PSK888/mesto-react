import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
   
    return (
        <PopupWithForm
            name="addForm"
            title="Новое место"
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <input 
            id="addNameInput" 
            name="name" 
            className="popup__input popup__input_name" 
            type="text"
            placeholder="Название" 
            required 
            readOnly 
            />
            <span className="addNameInput-error popup__input-error"/>
            <input 
            id="addLinkInput" 
            name="link" 
            className="popup__input popup__input_link" 
            type="url"
            placeholder="Ссылка на картинку" 
            required 
            readOnly
            />
            <span className="addLinkInput-error popup__input-error"/>
        </PopupWithForm>
    )
}

export default AddPlacePopup;