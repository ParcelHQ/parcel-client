// import React, { useState } from 'react';
// import Chart from 'react-apexcharts';
// import { Icon } from '@chakra-ui/core';

// const CircleChart = () => {
//     const [options, setOptions] = useState({
//         colors: ['#ff0000', '#00ff00', '#0000ff'],

//         stroke: {
//             lineCap: 'round',
//         },
//         plotOptions: {
//             radialBar: {
//                 size: 150,
//                 hollow: {
//                     size: '20%',
//                 },
//                 track: {
//                     strokeWidth: '100%',
//                     margin: 15,
//                 },
//                 dataLabels: {
//                     name: {
//                         fontSize: '18px',
//                     },
//                     value: {
//                         fontSize: '16px',
//                     },
//                     total: {
//                         show: true,
//                         label: 'Total',

//                         formatter: () => {
//                             return 42459;
//                         },
//                     },
//                 },
//             },
//         },
//         labels: ['Finished', 'Pending', 'Rejected'],
//     });
//     const [series, setSeries] = useState<number[]>([70, 52, 26]);

//     return (
//         <div>
//             <Chart options={options} series={series} type="radialBar" height={350} />
//             <div className="chart-info d-flex justify-content-between mb-1">
//                 <div className="series-info d-flex align-items-center">
//                     <Icon name="spinner" size="32px" color="red" />
//                     {/* <Circle strokeWidth={5} size="12" className="primary" /> */}
//                     <span className="text-bold-600 ml-50">Finished</span>
//                 </div>
//                 <div className="series-result">
//                     <span className="align-middle">23043</span>
//                 </div>
//             </div>
//             <div className="chart-info d-flex justify-content-between mb-1">
//                 <div className="series-info d-flex align-items-center">
//                     <Icon name="spinner" size="32px" color="green" />

//                     {/* <Circle strokeWidth={5} size="12" className="warning" /> */}
//                     <span className="text-bold-600 ml-50">Pending</span>
//                 </div>
//                 <div className="series-result">
//                     <span className="align-middle">14658</span>
//                 </div>
//             </div>
//             <div className="chart-info d-flex justify-content-between">
//                 <div className="series-info d-flex align-items-center">
//                     <Icon name="spinner" size="32px" color="blue" />
//                     {/* <Circle strokeWidth={5} size="12" className="danger" /> */}
//                     <span className="text-bold-600 ml-50">Rejected</span>
//                 </div>
//                 <div className="series-result">
//                     <span className="align-middle">4758</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CircleChart;
