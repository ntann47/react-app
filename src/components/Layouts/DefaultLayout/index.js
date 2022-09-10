import { Children } from 'react';
import TopBar from '../../TopBar'
import Header from './Header'

function DefaultLayout({children}){
    return (
        <div className="defaultLayout">
          <div className="defaultLayout-container">
            <TopBar/>
            <Header/>
            <div className="defaultLayout-content">{children}</div>
          </div>
        </div>
    )

}
export default DefaultLayout;