import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderCampsite(campsite) {
        
        return (
            <div className="col-md5 m1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    renderComments(comments) {
        if(comments) {
            return (
                <div className="col-md5 m1">
                    <h4>Comments</h4>
                    {comments.map( comment => {
                        return (
                            <div key={comment.id}>
                                <p>{comment.text}</p>
                                <p>{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                <div></div>
                            </div>
                        )
                    } )}
                </div>
            )
        }

    }

    render() { 
        const campsite = this.props.campsite;
        console.log('Render CampsiteInfo')
        if (campsite){
            return ( 

                <div className="row">
                    {console.log('campsite is truthy')}
                    {this.renderCampsite(this.props.campsite)}
                   {this.renderComments(this.props.campsite.comments)}
                </div>

                );  
        }

        return (

            <div></div>

        );
        
    }
}
 
export default CampsiteInfo;