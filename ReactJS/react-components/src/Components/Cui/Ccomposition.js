import React from 'react';

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

function Title() {
    return <h3>React Card Title</h3>;
}

function Content() {
    return <p>This is some card content</p>;
}

function Cards() {
    return (
        <div>
            <Card>
                <Title />
                <Content />
            </Card>
            <Card>
                <h3>Another Card</h3>
                <p>With different content!</p>
            </Card>
        </div>
    );
}

export default Cards;
