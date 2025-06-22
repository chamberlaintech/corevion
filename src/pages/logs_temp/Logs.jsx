import React from "react";
import "./Logs.css";
import { logs } from "../../constants/data";
import LogCard from "../../components/LogCard/LogCard";

const Logs = () => {
  return (
    <div className="logs section-padding flex-center">
      <div className="logs-heading">
        <h2 className="h2-text">System Logs</h2>
        <p className="subheading-text">
          Access Level: GUEST // Public Logs Only
        </p>
      </div>
      <div className="logs-content flex-center">
        {logs.map((log, index) => {
          return (
            <LogCard
              key={index}
              date={log.date}
              title={log.title}
              text={log.text}
              button={log.button}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Logs;
