import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {

    return (
        <PopupWithForm
            name="editForm"
            title="Редактировать профиль"
            isOpen={props.isOpen}
            onClose={props.onClose}
          >
            <input 
            id="editNameInput"
            name="name"
            className="popup__input popup__name"
            type="text"
            value="Жак-Ив Кусто"
            required
            readOnly
            />
            <span className="editNameInput-error popup__input-error"/>
            <input 
            id="editJobInput"
            name="about"
            className="popup__input popup__job"
            type="text"
            value="Исследователь океана"
            required
            readOnly
            />
            <span className="editJobInput-error popup__input-error"/>
        </PopupWithForm>
    )
}

export default EditProfilePopup;