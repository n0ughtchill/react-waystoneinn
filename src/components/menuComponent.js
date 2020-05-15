import React from 'react';
import { CardColumns, Row, Col } from 'reactstrap';
import menuData from '../shared/menuData';
import MenuItems from './menuItems';


function Menu() {
    const menuComponents = menuData.map(item => <MenuItems key={item.id} item={item.item} price={item.price} description={item.description} />)
    
    
    return (

        <div>
            <Row>
                <Col>
                    <h1 className="text-center">Cocktails</h1>
                    
                </Col>
            </Row>
            <br />
            <CardColumns>
                {menuComponents}            
            </CardColumns>
        </div>
        )
}

export default Menu