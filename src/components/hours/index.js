import React, { Component } from "react";

class storeHoursTable extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      storeHours: [
        { id: "1", Day: "Sunday", Hours: "Closed" },
        { id: "2", Day: "Monday", Hours: "Closed" },
        { id: "3", Day: "Tuesday", Hours: "11:00am - 05:30pm" },
        { id: "4", Day: "Wednesday", Hours: "11:00am - 05:30pm" },
        { id: "5", Day: "Thursday", Hours: "11:00am - 05:30pm" },
        { id: "6", Day: "Friday", Hours: "11:00am - 05:30pm" },
        { id: "7", Day: "Saturday", Hours: "11:00am - 04:00pm" },
      ],
    };
  }

  render() {
    //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (
      <div>
        <h1>Store Hours</h1>
      </div>
    );
  }
}

export default storeHoursTable; //exporting a component make it reusable and this is the beauty of react
