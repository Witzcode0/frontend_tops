import MainChange from "./Change";
import MainClick from "./Click";
import MainCopyCutPaste from "./Clipboard";
import MainFocusBlur from "./Focusblur";
import MainKeys from "./Keys";
import MainMouse from "./Mouse";
import MainSubmit from "./Submit";
import MainDragDrop from "./DragDrop";
import MainTouch from "./Touch";
import MainScroll from "./Scroll";

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

            <h1>Event: OnCopy, OnCut, OnPaste</h1>
            <MainCopyCutPaste />

            <h1>Event: OnDrag, OnDrop</h1>
            <MainDragDrop />

            <h1>Event: OnTouchStart, OnTouchEnd</h1>
            <MainTouch />

            <h1>Event: OnScroll</h1>
            <MainScroll />

        </div>
    )
}

export default AllEvents;