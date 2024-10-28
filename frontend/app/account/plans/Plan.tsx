"use client"
import React, {useState} from 'react'
import "./plan.css";
import ButtonWrapper from '../../components/ui/buttons/ButtonWrapper';
import PricingPlan from './PricingPlan'; 

const Plan = () => {
    const [ismonthly , setIsmonthly] = useState<boolean>(true)

    const Pricing = [
        {
          plan: "Free Plan",
          badge: "Get Started",
          active: true,
          monthly: "0.00",
          yearly: "0.00",
          properties: ["Create 1 interior designs monthly", "Write your own description", "Download generated photo"]
        },
        {
          plan: "Basic Plan",
          badge: "Most Popular",
          active: false,
          monthly: "4.99",
          yearly: "59.88",
          properties: [
            "Create 100 interior designs monthly",
            "Write your own description",
            "Download generated photo",
            "Make fly-through images from designs",
            "Early access to new features"
          ]
        },
        {
          plan: "Premium Plan",
          active: false,
          badge: "VIP",
          monthly: "9.99",
          yearly: "119.88",
          properties: [
            "Create 500+ interior designs monthly",
            "Write your own description",
            "Download generated photo",
            "Make fly-through images from designs",
            "Early access to new features",
            "Priority: faster response times",
            "Unlimited designs storage"
          ]
        }
      ];

  return (<>
    <div className='pricing'>
        <div className='pricing-header'>
            <h2 className='title'> {"Plans"}</h2>
        </div>
        <div className='pricing-container'>
            <div className='toggle-switch'>
                <ButtonWrapper 
                    width={"14rem"}
                    height={"100%"}
                    margin={"0 1rem"}
                    text={"Monthly"}
                    disabled={false}
                    onClick={(e) => { e.preventDefault()
                        setIsmonthly(true)
                     }}
                /> 
                <ButtonWrapper 
                    width={"14rem"}
                    height={"100%"}
                    margin={"0 1rem"}
                    text={"Yearly"}
                    disabled={false}
                    onClick={(e) => { e.preventDefault()
                        setIsmonthly(false)
                    }}
                />
            </div>
            <div className='pricing-wrapper'>
                {Pricing.map((plan, index) => (
                    <PricingPlan
                        key={index}
                        plan={plan.plan}
                        active={plan.active}
                        monthly={plan.monthly}
                        yearly={plan.yearly}
                        badge={plan.badge}
                        ismonthly={ismonthly}
                        properties={plan.properties}
                    />
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Plan