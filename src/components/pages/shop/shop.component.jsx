import React from 'react';
import CollectionsOverview from '../../collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {Route} from 'react-router-dom';
const ShopPage = ({match}) => {
    console.log(`${match.path}/hats`);
        return(<div className='shop-page'>
               <Route exact path={`${match.path}`} component={CollectionsOverview}/>   
               <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />   
            </div>);
}


export default ShopPage;