import React, {Component} from 'react';
import './Timer.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            timer: 100,
            visible: true
        };
    }

    componentDidMount() {
        this.clockID = setInterval(() => this.tick(), 1000);
        this.timerID = setInterval(
            () => this.setState((prevState) => ({ timer: prevState.timer - 1 })),
            1000
        );
    }

    componentDidUpdate() {
        if(this.state.visible === true){
            if(this.state.timer === 0){
                this.setState({
                    visible: false
                })
            }
        }
        else{
            if(this.state.timer < 0){
                this.setState({
                    visible: true,
                    timer: 100
                })
            }
        }
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <div>
                {this.state.visible === true && (
                    <div  className="App-Timer">
                        <h1>Sekarang Jam : {this.state.date.toLocaleTimeString()}.</h1>
                        <h1>Hitung Mundur : {this.state.timer}</h1>
                    </div>
                )}
            </div>
        );
    }
}

export default Clock;