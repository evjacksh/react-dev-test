import React, { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'

const HistogramComponent = ({salesData,color}) => {

    let dataArr = salesData.sort((a,b) => a.date - b.date).map(e => e.count)
    if(dataArr.length < 31){
        while(dataArr.length < 31){
            dataArr.push(0)
        }
    }
    const [data] = useState(dataArr)
    const svgRef = useRef()

    const max = Math.max(...data)
    useEffect(() => {
 
        // setting up svg container
        const w = 100
        const h = 25
        const svg = d3.select(svgRef.current)
            .attr('width', w)
            .attr('height', h)
            .style('overflow', 'visible')
            .style('margin-top', '.5em')
            .style('fill', color)

        // setting the scaling
        const xScale = d3.scaleBand()
            .domain(data.map((val,i) => i))
            .range([0,w])
            .padding(.1)


        // setting the svg data
        svg.selectAll('.bar')
            .data(data)
            .join('rect')
            .attr('x', (val,i) => xScale(i))
            .attr('y', -25)
            .attr('width', xScale.bandwidth())
            .attr('height', val => {
                if(val === 0) return 1
                const onePercentOfMaxValue = (max / 100)
                const onePercentOfHeight = ((h - 2) / 100)
                const height = Math.round(onePercentOfHeight * (val / onePercentOfMaxValue))
                return height
            })
    },[data,color,max])

  return (
    <div className='divItem'>
        <svg ref={svgRef} className="svgItem"></svg>
    </div>
  )
}

export default HistogramComponent