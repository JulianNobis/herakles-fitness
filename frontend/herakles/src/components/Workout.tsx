import { useState } from "react";
import Template from "./Template";

type ShowTemplate = "Default" | "Existing" | "New";

function Workout(){
    const [showTemplate, setShowTemplate] = useState<ShowTemplate>("Default");

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
                <Template prop="Existing"></Template>
            </>
        )}

        {showTemplate === "New" && (
            <>
                <Template prop="New"></Template>
            </>
        )}

        </div>
    )
}

export default Workout;