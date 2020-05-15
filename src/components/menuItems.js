import React from "react"
import { Card, CardBody, CardColumns, CardFooter, CardHeader, CardText } from 'reactstrap'

function MenuItems(props) {
    return (
        <div>
            
                <Card>
                    <CardHeader className="text-center" tag="h4">{props.item}</CardHeader>
                    <CardBody>              
                        <CardText className="text-center">{props.description}</CardText>
                    </CardBody>  
                    <CardFooter className="text-right text-muted">${props.price}</CardFooter> 
                </Card> 
            


            
        </div>
    )
}

export default MenuItems