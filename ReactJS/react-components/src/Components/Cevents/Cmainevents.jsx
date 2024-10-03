import MainChange from "./Change";
import MainClick from "./Click";
import MainFocusBlur from "./Focusblur";
import MainKeys from "./Keys";
import MainMouse from "./Mouse";
import MainSubmit from "./Submit";

function AllEvents(){
    return (
        <div>
            <h1>Event : Onclick</h1>
            <MainClick/>

            <h1>Event : Onchange</h1>
            <MainChange/>

            <h1>Event : Onsubmit</h1>
            <MainSubmit/>

            <h1>Event : Onmousemove</h1>
            <MainMouse/>

            <h1>Event : Onkeydown</h1>
            <MainKeys/>

            <h1>Event : Onkeypress</h1>
            <MainKeys/>

            <h1>Event : Onkeyup</h1>
            <MainKeys/>

            <h1>Event : Onfocus</h1>
            <MainFocusBlur/>

            <h1>Event : Onblur</h1>
            <MainFocusBlur/>

        </div>
    )
}

export default AllEvents;