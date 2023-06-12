import React from 'react';
import Card from '../components/Card';
import {FaList, FaRegEdit, FaUsers, FaUserPlus, FaUserMinus } from 'react-icons/fa';


export default function Homepage(){


    return (
        <>
        <h2> Questa è la tua homepage </h2> 
        <p> Scegli cosa vuoi fare </p>
        <div className="justify-content-center">
        <Card icon={FaList} name="Visualizza le mie chat" link="/"/>
        <Card icon={FaUsers} name="Visualizza i miei amici" link="/"/>  
        <Card icon={FaRegEdit} name="Scrivi un messaggio" link="/"/>
        <Card icon={FaUserPlus} name="Aggiungi un amico" link="/"/>
        <Card icon={FaUserMinus} name="Elimina un amico" link="/"/>
        
        
        </div>
        
       
       
        
       
        
        
        </>
    )
}