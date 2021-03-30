import React from 'react';
import './Home.css';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import {Grid} from '@material-ui/core';
import Accordion from '../../components/Accordion/Accordion';

function Home(){
    

    return(
        <Grid container spacing={3}>
                <Button Name = "Home"/>
                <Button Name = "About"/>
                <Button Name = "MyCart"/>
                <Card/>
                <Grid item xs={3}>
                    <Accordion/>
                </Grid>
            <Grid ><Logo/></Grid>
        </Grid>
    )
}

export default Home;