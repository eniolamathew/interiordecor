import React from 'react';
import ButtonWrapper from '../../components/ui/buttons/ButtonWrapper';
import { useAuth } from "@/shared/context/AuthContext";
import { FeaturesCheck, Pricing } from "./PlanStyles";

interface PricingPlanProps {
  plan: string;
  active: boolean;
  ismonthly: boolean;
  monthly: string;
  yearly: string;
  badge: string;
  properties: string[];
}

const PricingPlan: React.FC<PricingPlanProps> = ({ plan, active, ismonthly, badge, monthly, yearly, properties }) => {
  const { isLightMode } = useAuth();
  let url = process.env.NEXT_PUBLIC_CLOUDFLARE_URL_PROD ?? process.env.NEXT_PUBLIC_CLOUDFLARE_URL_DEV;

  return (
    <Pricing className={`pricing-plan ${active ? 'shaded_border' : ''} monthly`} style={{ display: 'block' }} $isLightMode={isLightMode}>
        <div className="pricing-badge-container">
                <div className="pricing-badge">
                    <span> { active ? "Active" : badge }</span>
                </div>
            </div>
      <h2>{plan}</h2>
      <p className="description"></p>
      <p className="price">
        <span className="number">£{ismonthly ? monthly : yearly}</span>
        <span><strong>{ismonthly ? "per month" : "per year"}</strong></span>
      </p>
        <ButtonWrapper
            width={"100%"}
            height={"50px"}
            margin={"0 0rem"}
            text={"Subscribe →"}
            disabled={false}
            onClick={(e) => { e.preventDefault() }}
        /> 
      <p className="action-switch-to-monthly-billing action-switch-to-annual-billing">
        Pay {ismonthly ? "yearly": "monthly"} (${ismonthly ? yearly: monthly} ↗)
      </p>
      <ul className="features">
        {properties.map((property, index) => (
          <li key={index}>
            <FeaturesCheck publicUrl={url!}  className="check"></FeaturesCheck>
            <span>{property}</span>
          </li>
        ))}
      </ul>
    </Pricing>
  );
};

export default PricingPlan;
