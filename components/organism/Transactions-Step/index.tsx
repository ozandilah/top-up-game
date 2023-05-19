import StepItem from "@/components/moleculs/StepItem";
import React from "react";

export default function TransactionStep() {
  return (
    <>
      <section id="feature" className="feature pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
            It’s Really That <br /> Easy to Win the Game
          </h2>
          <div className="row gap-lg-0 gap-4" data-aos="fade-up">
            <StepItem
              icon="/icon/stepOne.svg"
              title="1. Start"
              deskripsi="Pilih salah satu game yang ingin kamu top up"
            />
            <StepItem
              icon="/icon/stepTwo.svg"
              title="2. Fill Up"
              deskripsi="Top up sesuai dengan nominal yang sudah tersedia"
            />
            <StepItem
              icon="/icon/stepThree.svg"
              title="3. Be a Winner"
              deskripsi="Siap digunakan untuk improve permainan kamu"
            />
          </div>
        </div>
      </section>
    </>
  );
}
