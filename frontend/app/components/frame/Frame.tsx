import React from 'react';
import './Framer.css';
import Icon from '../ui/Icon/Icon';

interface IFrame {
  key?: React.Key | null;
  body: string;
  footer: string;
  star: number;
}

const Frame: React.FC<IFrame> = ({ body, footer, star }) => (
  <div className="framer">
    <div className="framer-content">
      <div className="frame-body">{body}</div>
      <div className="frame-footer">
        <div className="frame-footerContent">
          <div className="d-flex">{footer}</div>
          <div
            className="d-flex"
            style={{
              width: "130px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around"
            }}
          >
            {Array.from({ length: 5 }, (_, index) => (
              <div
                key={index}
                style={
                  {
                    width: "24px",
                    marginRight: "1px",
                    marginLeft: "1px",
                    "--ci-primary-color": index < star ? "white" : undefined
                  } as React.CSSProperties & { "--ci-primary-color"?: string }
                }
              >
                <Icon id="cil-star" width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Frame;