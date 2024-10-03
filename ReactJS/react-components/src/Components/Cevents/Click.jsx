
function handleClick() {
    alert('Button clicked!');
}

function MainClick() {
    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );
}

export default MainClick;
