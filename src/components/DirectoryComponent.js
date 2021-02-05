<<<<<<< HEAD
import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function RenderDirectoryItem({ campsite, onClick }) {
  return (
    <Card onClick={() => onClick(campsite.id)}>
      <CardImg width="100%" src={campsite.image} alt={campsite.name} />
      <CardImgOverlay>
        <CardTitle>{campsite.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

function Directory(props) {
  const directory = props.campsites.map((campsite) => {
    return (
      <div key={campsite.id} className="col-md-5 m-1">
        <RenderDirectoryItem campsite={campsite} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{directory}</div>
    </div>
  );
=======
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        console.log(this.props.campsites)
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(campsite.id)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
>>>>>>> parent of 6fa6a0e (React Component Types)
}

export default Directory;
