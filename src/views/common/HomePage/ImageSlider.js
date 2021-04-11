import React from "react";
//
import './HomePage.css';

class ImageSlider extends React.Component {
    state = {
        img: "https://images.unsplash.com/photo-1560184897-1ca2636ec816?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"

        // img: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80"
    }

    render() {
        return (
            <div className="image-wrapper">
                <img
                className="image"
                    width="100%"
                       height="700vh"
                    src={this.state.img}
                    onMouseEnter={() => {
                        this.setState({
                            img: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80"

                            // img: "https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        })
                    }}

                    onMouseOut={() => {
                        this.setState({
                            img: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        })
                    }}
                />
                <div className="divstyle">
                    <h3 className="h3Style">Are you new to this site?</h3>
                    <p className="pStyle">Get the best possible support during search by registering with us!</p>
                    {/* <p className="p1Style">Find Your Dream Home Here!!</p>
                    <p className="p2Style">Post Your Property With Us......</p>
                    <p className="p3Style">Sell/Buy/Rent.....Anything U want U can do Here</p> */}
                </div>
                <div className="divstyle1">
                    <p className="p1Style">Find Your Dream Home Here!!</p>
                    <p className="p2Style">Post Your Property With Us......</p>
                    <p className="p3Style">Sell/Buy/Rent.....Anything U want U can do Here</p>
                </div>
            </div>
        )
    }
};

export default ImageSlider;