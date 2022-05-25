import React from "react";
import { Card } from "@mui/material";
import "../../style/sectionFourAgents.css";

export default function SectionFourAgents() {
  const data = [
    {
      image:
        "https://res.cloudinary.com/dwbno71qd/image/upload/v1653353477/Realmod/Rectangle_47_2_jkje4o_ybzbqc.png",
      name: "alexis",
      lastName: "Duque Duarte",
      phone: "3228101281",
    },
    {
      image:
        "https://res.cloudinary.com/dwbno71qd/image/upload/v1653353477/Realmod/Rectangle_47_2_jkje4o_ybzbqc.png",
      name: "alexis",
      lastName: "Duque Duarte",
      phone: "3228101281",
    },
    {
      image:
        "https://res.cloudinary.com/dwbno71qd/image/upload/v1653353477/Realmod/Rectangle_47_2_jkje4o_ybzbqc.png",
      name: "alexis",
      lastName: "Duque Duarte",
      phone: "3228101281",
    },
  ];

  return (
    <section className="section-container">
      <div class="contenedor">
        <img src="https://res.cloudinary.com/dwbno71qd/image/upload/v1653353509/Realmod/Our_Agents_ixzutp_zm86na.png" />
        <div class="centrado">
            <span>EXperties is here</span>
            <p>Our Exclusive Agents</p>
            
        </div>
      </div>
      <div className="containerAgents">
        {data.map((item) => (
          <Card key={item} sx={{ width: 270, minHeight: 275 }}>
            <img src={item.image} className="image-card-agents" />
            <div className="description-card">
              <p>{item.name}</p>
              <span>{item.lastName}</span>
              <div className="container-contact">
                <img src="https://res.cloudinary.com/dwbno71qd/image/upload/v1653353536/Realmod/fi-rr-call-outgoing_uivqzu_rbvozh.png" />
                <p> Call: {item.phone}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
