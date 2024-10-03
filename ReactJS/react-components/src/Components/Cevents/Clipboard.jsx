import React from 'react';

function MainCopyCutPaste() {
    const handleCopy = () => alert('Content Copied!');
    const handleCut = () => alert('Content Cut!');
    const handlePaste = () => alert('Content Pasted!');

    return (
        <div>
            <textarea 
                onCopy={handleCopy}
                onCut={handleCut}
                onPaste={handlePaste}
                placeholder="Try to copy, cut or paste something here!"
                rows="4"
                cols="50"
            />
        </div>
    );
}

export default MainCopyCutPaste;
