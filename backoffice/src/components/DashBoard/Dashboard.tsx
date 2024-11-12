import React from "react";
import FormCard from "../UI/FormCard";
import Traffic from "./Traffic";
import EmailCampaign from "./EmailCampaign";
import AnalyticsSection from "./AnalyticsSection";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  const chartlabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October']

  return (
    <div className="body flex-grow-1">
      <div className="container-lg px-4">
        <div className="row g-4 mb-4">
          <FormCard
            title="Users"
            value="1.45K"
            bgColor="bg-info"
            percentage={-12.4}
            chartId="card-chart1"
            chartHeight={70}
            chartOptions={
              <>
                <button className="dropdown-item">
                  Action
                </button>
                <button className="dropdown-item">
                  Another action
                </button>
                <button className="dropdown-item">
                  Something else here
                </button>
              </>
            }
            chartData={{
                labels: chartlabels,
                datasets: [
                  {
                    label: '',
                    data: [45, 245, 260, 278, 390, 402, 780, 654, 689, 545],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: false,
                    pointRadius: 5, 
                    pointHoverRadius: 7,
                  },
                ],
            }}
            chartConfig={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  display: false,
                },
                y: {
                  // display: false,
                  beginAtZero: true,
                },
              },
              plugins: {
                legend: {
                  display: false, 
                },
                tooltip: {
                  enabled: true,
                  callbacks: {
                    title: (context: any) => chartlabels[context[0].dataIndex], 
                    label: (context: any) => `Value: ${context.raw}`,
                  },
                },
              },
            }}
            chartType='line'
            chartClassname="mt-3 mx-3"
          />

          <FormCard
            title="Income"
            value="$0"
            bgColor="bg-primary"
            percentage={0}
            chartId="card-chart2"
            chartHeight={70}
            chartOptions={
              <>
                <button className="dropdown-item">
                  Action
                </button>
                <button className="dropdown-item">
                  Another action
                </button>
                <button className="dropdown-item">
                  Something else here
                </button>
              </>
            }
            chartData={{
              labels: chartlabels,
              datasets: [
                {
                  label: '',
                  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 2,
                  fill: false,
                  pointRadius: 5, 
                  pointHoverRadius: 7,
                },
              ],
          }}
          chartConfig={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                display: false, 
              },
              tooltip: {
                enabled: true,
                callbacks: {
                  title: (context: any) => chartlabels[context[0].dataIndex], 
                  label: (context: any) => `Value: ${context.raw}`,
                },
              },
            },
          }}
          chartType='line'
          chartClassname="mt-3 mx-3"
          />
 
        <FormCard
          title="Conversion Rate"
          value="2.49%"
          bgColor="bg-danger"
          percentage={84.7}
          chartId="card-chart3"
          chartHeight={70}
          chartOptions={
            <>
            <button className="dropdown-item">
            Action
            </button>
            <button className="dropdown-item">
            Another action
            </button>
            <button className="dropdown-item">
            Something else here
            </button>
            </>
            }
            chartData={{
              labels: chartlabels,
              datasets: [
                {
                  label: '', 
                  data: [45, 245, 260, 278, 390, 402, 780, 654, 689, 545],
                  borderColor: 'rgba(255, 255, 255, 1)', 
                  borderWidth: 1,
                  fill: true, 
                  backgroundColor: 'rgba(255, 223, 87, 0.3)', 
                  tension: 0.4, 
                  pointRadius: 0, 
                  pointHoverRadius: 7,
                },
              ],
          }}
          chartConfig={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                display: false, 
              },
              tooltip: {
                enabled: true,
                callbacks: {
                  title: (context: any) => chartlabels[context[0].dataIndex], 
                  label: (context: any) => `Value: ${context.raw}`,
                },
              },
            },
          }}
          chartType='line'
          chartClassname="mt-3 mx-3"
        />
            
          <FormCard
            title="Sessions"
            value="12k"
            bgColor="bg-warning"
            percentage={-23.6}
            chartId="card-chart4"
            chartHeight={70}
            chartOptions={
              <>
                <button className="dropdown-item">
                  Action
                </button>
                <button className="dropdown-item" >
                  Another action
                </button>
                <button className="dropdown-item">
                  Something else here
                </button>
              </>
            }            
            chartData={{ 
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
              datasets: [
                {
                  label: '', 
                  data: [45, 245, 260, 278, 390, 402, 780, 654, 689, 545],
                  backgroundColor: 'rgba(255, 255, 204, 0.5)', 
                  borderColor: 'rgba(255, 255, 204, 1)', 
                  fill: true, 
                  borderWidth: 1,
                },
              ],
            }}
            chartConfig={{ 
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: { display: false, beginAtZero: true },
                y: { display: false, beginAtZero: true },
              },
              plugins: {
                legend: {
                  display: false, 
                },
                tooltip: {
                  enabled: true,
                  callbacks: {
                    title: (context: any) => chartlabels[context[0].dataIndex], 
                    label: (context: any) => `Value: ${context.raw}`,
                  },
                },
              }
            }}
            chartType='bar'
            chartClassname="mx-3 mt-3"
          />

        </div>
        <div className="row g-4 mb-4 mt-4">
          <Traffic />
        </div>
        
        <div className="row g-4 mb-4 mt-4">
          <EmailCampaign />
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-header">Traffic &amp; Sales</div>
              <div className="card-body">
                <div className="row">
                  <DashboardCard />
                  <AnalyticsSection />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;