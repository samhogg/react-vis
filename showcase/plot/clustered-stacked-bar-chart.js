// Copyright (c) 2016 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from 'index';

export default class Example extends React.Component {
  render() {
    return (
      <XYPlot
        xType="ordinal"
        stackBy="y"
        width={300}
        height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries
          cluster="alpha"
          data={[
            {x: 'A', y: 10},
            {x: 'B', y: 5},
            {x: 'C', y: 15},
            {x: 'D', y: 20}
          ]}/>
        <VerticalBarSeries
          cluster="beta"
          data={[
            {x: 'A', y: 3},
            {x: 'B', y: 5},
            {x: 'C', y: 2},
            {x: 'D', y: 1}
          ]}/>
        <VerticalBarSeries
          cluster="gamma"
          data={[
            {x: 'A', y: 3},
            {x: 'B', y: 8},
            {x: 'C', y: 11},
            {x: 'D', y: 19}
          ]}/>
        <VerticalBarSeries
          cluster="gamma"
          data={[
            {x: 'A', y: 22},
            {x: 'B', y: 2},
            {x: 'C', y: 22},
            {x: 'D', y: 0}
          ]}/>
        <VerticalBarSeries
          cluster="delta"
          data={[
            {x: 'A', y: 6},
            {x: 'B', y: 12},
            {x: 'C', y: 18},
            {x: 'D', y: 6}
          ]}/>
      </XYPlot>
    );
  }
}
