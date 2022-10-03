import api from "../utils/Api.js";
import { useEffect, useState } from "react";
import defaultAvatar from '../images/Avatar.jpg'
import Card from "./Card.js";

function Main(props) {

    // const currentUser = React.useContext(UserContext);
    const [userName, setUserName] = useState('111')
    const [userDescription, setUserDescription] = useState('11112222')
    const [userAvatar, setUserAvatar] = useState(defaultAvatar)
    const [cards, setCards] = useState([])

    useEffect(() => {
        Promise.all([api.getUser(), api.getInitialCards()])
            .then(([userData, dataCard]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(dataCard);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__guest">
                    <div className="profile__editpen" >
                        <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} onClick={props.onEditAvatar} />
                    </div>
                    <div className="profile__info">
                        <div className="profile__personal">
                            <h1 className="profile__name">{userName}</h1>
                            <button aria-label="Open editForm" className="profile__edit-button" type="button" onClick={props.onEditProfile} />
                        </div>
                        <p className="profile__job">{userDescription}</p>
                    </div>
                </div>
                <button aria-label="Open addForm" type="button" className="profile__add-button" onClick={props.onAddPlace} />
            </section>

            <section className="elements">
                {cards.map(card => (
                    <Card key={card._id} card={card} onCardClick={props.onCardClick} />
                ))};
            </section>
        </main>
    )

}

export default Main;



