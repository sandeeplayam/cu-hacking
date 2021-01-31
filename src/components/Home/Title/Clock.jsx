import React from 'react';
import styles from './Title.module.css';

class Clock extends React.Component{
    
        constructor(props){
            super(props);
            this.state = {date: new Date()};
        }

        componentDidMount() {
            this.timerID = setInterval(
              () => this.tick(),
              1000
            );
          }
        
          componentWillUnmount() {
            clearInterval(this.timerID);
          }
        
          tick() {
            this.setState({
              date: new Date()
            });
          }
        
        render() {
            return (
              <div>
                <FormattedDate date={this.state.date} />
              </div>
            );
        }
    }

    function FormattedDate(props) {
        return <div id='dateAndTime'>{props.date.toLocaleTimeString()}</div>;
      }

  export default Clock;