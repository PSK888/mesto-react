import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
   
    return (
        <PopupWithForm
            name="avatarForm"
            title="Обновить аватар"
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <input 
            id="avatar" 
            type="url" 
            className="popup__input popup__input_avatar" 
            name="avatar"
            placeholder="Ссылка на картинку" 
            required 
            readOnly
            />
            <span className="popup__input-error avatar-error"/>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;