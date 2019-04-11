import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Button} from 'reactstrap'
import {ListGroupItem} from 'reactstrap'

import classes from './items.module.css'

const items = (props)=>{
    return(
        <ListGroupItem>
            {props.name}
            <hr/>
            <div>
                <Button classname={classes.button} color='warning' size='sm'><FontAwesomeIcon icon='pen'/></Button>
                <Button className={classes.button} color='danger' size='sm'><FontAwesomeIcon icon='times-circle'/></Button>
            </div>
        </ListGroupItem>
        
    )
}

export default items