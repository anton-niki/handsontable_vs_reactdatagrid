import React from "react";


// src/App.js
class Stopwatch extends React.Component {
    //props: start, stop
    state = {
        status: false,
        runningTime: 0
    };
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    start = () => {
        if (this.state.status) {
            return;
        }
        this.setState(state => {
            const startTime = Date.now() - this.state.runningTime;
            this.timer = setInterval(() => {
                this.setState({ runningTime: Date.now() - startTime });
            }, 63);
            console.log(' start this.timer')
            console.log(this.timer)
            return { status: true };
        });
    }
    stop = () => {
        if (!this.state.status) {
            return;
        }
        this.setState(state => {
            clearInterval(this.timer);
            clearInterval(this.timer - 1);

            console.log(' stop this.timer')
            console.log(this.timer)
            return { status: false };
        });
    }
    reset = () => {
        clearInterval(this.timer);
        clearInterval(this.timer - 1);
        this.setState({ runningTime: 0, status: false });
    }

    handleClick = () => {
        this.setState(state => {
            if (state.status) {
                console.log(' handleClick this.timer')
                console.log(this.timer)
                clearInterval(this.timer);
                clearInterval(this.timer - 1);
                // clearInterval(1);
                // clearInterval(2);
            } else {
                const startTime = Date.now() - this.state.runningTime;
                this.timer = setInterval(() => {
                    this.setState({ runningTime: Date.now() - startTime });
                }, 63);
                console.log('started this.timer')
                console.log(this.timer)
            }
            return { status: !state.status };
        });
    };

    // src/App.js
    handleReset = () => {
        console.log(' handleReset this.timer')
        console.log(this.timer)

        // console.log('handleReset this.timer')
        // console.log(this.timer)
        // clearInterval(1); // new
        // clearInterval(2); // new
        clearInterval(this.timer); // new
        clearInterval(this.timer - 1);

        clearInterval(1);
        clearInterval(2);

        this.setState({ runningTime: 0, status: false });
    };

    render() {
        // console.log('render')
        const { status, runningTime } = this.state;
        return <pre style={{margin:0,display:'inline-block', backgroundColor:'blue', color:'white', fontWeight:'bold', padding:'5px'}}>{JSON.stringify(runningTime).toString().padEnd(5, ' ')} ms</pre>;
    }
}
export default Stopwatch;

// {/* <button onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
// <button onClick={this.handleReset}>Reset</button> */}