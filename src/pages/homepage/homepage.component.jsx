import React from 'react';
import {HomePageContainer} from './homepage.styles';
import Directory from '../../components/directory/directory.component'
const HomePage = ({history}) => (
    <HomePageContainer>
            <Directory history={history}/>
    </HomePageContainer>
)

export default HomePage;
