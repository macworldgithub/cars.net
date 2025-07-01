import React from 'react'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
const Dashboard = () => {
  return (
    <div>
        <Step1/>
            <main className=" text-white px-4 md:px-12">
        <Step2/>
        </main>
        <main className=" text-white px-4 md:px-12 pt-4 pb-4">
      <Step3 />
    </main>
        </div>
  )
}

export default Dashboard;