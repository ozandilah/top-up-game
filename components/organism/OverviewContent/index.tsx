import React from "react";
import Category from "./Category";
import TableRow from "./TableRow";

export default function OverViewContent() {
  return (
    <>
      {" "}
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Top Up Categories
            </p>
            <div className="main-content">
              <div className="row">
                <Category price={18000500} icon="icon-desktop">
                  Game <br /> Desktop
                </Category>
                <Category price={5000000} icon="icon-mobile">
                  Game <br /> Mobile
                </Category>
                <Category price={100000000} icon="icon-desktop">
                  Others <br /> Categories
                </Category>
              </div>
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Latest Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="text-start" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow
                    title="Mobile Legends"
                    category="Desktop"
                    item={200}
                    price={290000}
                    status="PENDING"
                    image="overview-1"
                  />
                  <TableRow
                    title="Call of Duty:Modern"
                    category="Desktop"
                    item={550}
                    price={740000}
                    status="SUCCESS"
                    image="overview-2"
                  />
                  <TableRow
                    title="Clash of Clans"
                    category="Mobile"
                    item={100}
                    price={120000}
                    status="FAILED"
                    image="overview-3"
                  />
                  <TableRow
                    title="The Royal Game"
                    category="Mobile"
                    item={225}
                    price={200000}
                    status="PENDING"
                    image="overview-4"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
