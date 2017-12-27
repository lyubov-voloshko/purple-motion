import React from 'react';
import Counter from './Counter.jsx';
import NaviagationBar from './navBar.jsx'

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <NaviagationBar />
                <main>
                    <p>But right now <b>only</b> this test component.</p>
                    <Counter />
                </main>
                <footer>
                    <span>(c) Lyubov Voloshko</span>
                </footer>
            </div>
        )
    }
}

export default App;