import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

function EditAvatarPopup(props) {
    const ref = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: ref.current.value,
        });
    }

    return (
        <PopupWithForm
            name="avatarForm"
            title="Обновить аватар"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <input
                ref={ref}
                id="avatar"
                type="url"
                className="popup__input popup__input_avatar"
                name="avatar"
                placeholder="Ссылка на картинку"
                required
                autoComplete="off"
            />
            <span className="popup__input-error avatar-error" />
        </PopupWithForm>
    )
}

export default EditAvatarPopup;