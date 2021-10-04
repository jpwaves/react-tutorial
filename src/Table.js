import React, { Component } from 'react';

// simple components: funcs that return JSX
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    });
    return <tbody>{rows}</tbody>;
}

// class components: classes with a render method and the render method returns JSX
// note: it is generally best practice to have components that require having states
// be class components and all other components be simple components.
const Table = (props) => {
    const { characterData, removeCharacter } = props;

    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    );
}

export default Table;