import React from 'react'
import './style.scss'

function Analytics() {
  return (
    <section className="AnalyticsSection">
      <div className="results">
        <div className="total-backed-amount">
          <div className="number">$89,914</div>
          <div className="unit">of $100,000 backed</div>
        </div>
        <div className="total-backers">
          <div className="number">5,007</div>
          <div className="unit">total backers</div>
        </div>
        <div className="remaining-time">
          <div className="number">56</div>
          <div className="unit">days left</div>
        </div>
      </div>

      <div className="backed-percentage">
        <progress value={89.9} max={100}>
          89.9
        </progress>
      </div>
    </section>
  )
}

export default Analytics
