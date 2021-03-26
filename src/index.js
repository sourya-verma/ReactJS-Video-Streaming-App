import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Card, { CardDouble } from './Card'
import Series from './WebSeries'



ReactDOM.render(
  <>

    <div className="header"><h1>WebFlix</h1></div>
    <div className='row align-items-center'>
      {Series.map(function rederCard(card) {
        return (
          <>

            <div className="col-sm-4">
              <Card
                key={card.id}
                stype={card.seriesType}
                slink={card.seriesLink}
                sname={card.seriesName}
                imgsrc={card.imgSrc}
              />
            </div>

          </>
        )
      })}
    </div>


  </>
  ,
  document.getElementById('root')
)