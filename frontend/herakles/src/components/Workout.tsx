import { useState } from "react";

function Workout(){
    const [showTemplate, setShowTemplate] = useState("Default");

    return (
        <div>

        {showTemplate === "Default" && (
            <>
                <button onClick={() => setShowTemplate("Existing")}>Choose from existing Template</button>
                <button onClick={() => setShowTemplate("New")}>Create a new Template</button>
            </>
        )}

        {showTemplate === "Existing" && (
            <>
                <p>Load existing Templates here and let user choose the Template</p>
            </>
        )}

        {showTemplate === "New" && (
            <>
                <p>Create a new Template and let user choose the Exercises</p>
            </>
        )}

        </div>
    )
}

export default Workout;