import React, { Fragment, useState } from "react";
import collage_01 from "../asset/image/college_01.jpg";
import collage from "../asset/asset.json";
import InfiniteScroll from "react-infinite-scroll-component";

var i = 1;
const Collage = (props) => {
  var [coll, setColl] = useState({
    page: collage.colleges.slice(0, 10),
  });
  const loadItems = () => {
    let timer = () => {
      console.log("new i", i);
      const next = collage.colleges.slice(0, i * 10);
      setColl({
        ...coll,
        page: next,
      });
      i = i + 1;
    };
    setTimeout(timer, 1500);
  };

  return (
    <div>
      <p>North India school</p>
      <InfiniteScroll
        dataLength={coll}
        next={collage.colleges.length !== coll.page.length ? loadItems : ""}
        hasMore={true}
        loader={
          collage.colleges.length !== coll.page.length ? (
            <h4>Loading...</h4>
          ) : (
            ""
          )
        }
      >
        {coll.page.length &&
          coll.page.map((collage, index) => (
            <Fragment key={index}>
              <hr />
              <div style={{ display: "flex" }}>
                <img
                  alt={collage.college_name}
                  src={collage_01}
                  style={{
                    borderRadius: "50%",
                    height: 72,
                    marginRight: 20,
                    width: 72,
                  }}
                />
                <div>
                  <h2 style={{ marginTop: 0 }}>@{collage.college_name}</h2>
                  <p>Collage Name: {collage.college_name}</p>
                  <p>Near: {collage.famous_nearest_places}</p>
                </div>
              </div>
            </Fragment>
          ))}
      </InfiniteScroll>
      <hr />
    </div>
  );
};

export default Collage;
