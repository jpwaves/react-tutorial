import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <>
                <h1>My First React App</h1>
                <p>By Justin Pong (<a href="https://github.com/jpwaves" target="_blank">@jpwaves</a>)</p>
                <section>
                    <p>This app comes from a step-by-step tutorial I followed from <a href="https://www.taniarascia.com/getting-started-with-react/" target="_blank">Tania Rascia</a>. The app can perform almost all CRUD functions (can't update data) and demonstrates this functionality with a simple table that you can add data to about a person and their corresponding job. The table initalizes with no data, and data can be added by filling in the name and job text input boxes; if you want to change this and have initial data in the table, you would need to modify the state of the Table component to have starting data as part of its state.</p>
                </section>
            </>
        )
    }
}

export default About;