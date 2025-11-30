import Button from "../subcomponents/Button"

const SpecialsCard = ({
    specialImage,
    specialTitle,
    specialPrice,
    specialDescription,
    id
 }) => {

    return (
        <div className="special_cards" key={id}>
            <img
                src={specialImage}
                className="special_image"
            />
            <div className="menu_header">
                <h3 className="menu_item_title">
                    {specialTitle}
                </h3>
                <p className="menu_item_price">
                    {specialPrice}
                </p>
            </div>
            <div
                className="description_container"
            >
                <p className="menu_description">
                    {specialDescription}
                </p>
            </div>
            <div className="special_cards_control_panel">
                <div>
                    <Button
                        className="special_button"
                        text="View"
                    />
                </div>

                <div>
                    <Button
                        className="special_button"
                        text="Order"
                    />
                </div>
            </div>
        </div>
    );
};

export default SpecialsCard;