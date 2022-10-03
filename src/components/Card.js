function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="element">
            <div className="element__image" onClick={handleClick} style={{ backgroundImage: `url(${props.card.link})` }} />
            <button className="element__del" type="button" />
            <div className="element__footer">
                <h3 className="element__text">{props.card.name}</h3>
                <div className="element__column">
                    <button className="element__like" type="button" />
                    <p className="element__counter">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;