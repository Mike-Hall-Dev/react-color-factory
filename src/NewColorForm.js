import React, { useState, Redirect } from "react";
import { useHistory } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
    const initialFormState = { name: "", hex: "#ffffff" };
    const [form, updateForm] = useState(initialFormState);
    const history = useHistory();

    function handleFormChange(e) {
        updateForm(formData => ({ ...formData, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        addColor({ [form.name]: form.hex })
        updateForm(initialFormState);
        history.push("/colors")
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Color Name</label>
                    <input
                        name="name"
                        id="name"
                        placeholder="Enter a color name"
                        onChange={handleFormChange}
                        value={form.name}
                    />
                </div>
                <div>
                    <label htmlFor="hex">Color Value</label>
                    <input
                        type="color"
                        name="hex"
                        id="hex"
                        onChange={handleFormChange}
                        value={form.hex}
                    />
                </div>
                <input type="Submit" value="Add this color" readOnly />
            </form>
        </div>
    )
}

export default NewColorForm;