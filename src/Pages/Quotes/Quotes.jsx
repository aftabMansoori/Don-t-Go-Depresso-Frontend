import React, { useState, useEffect } from "react";
import axios from "axios";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Skeleton from "@mui/material/Skeleton";

import styles from "./Quotes.module.scss";

export default function Quotes() {
  const [loading, setLoading] = useState(false);
  const [qod, setQod] = useState({});
  const [quotes, setQuotes] = useState([]);
  const baseURL = "https://api.quotable.io";

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    getQod();
  }, []);

  const getQuotes = () => {
    setLoading(true);

    axios
      .get(`${baseURL}/quotes`)
      .then((res) => {
        if (res.status !== 200) return;
        setQuotes(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ada", err.message);
      });
  };

  const getQod = () => {
    setLoading(true);

    axios
      .get(`${baseURL}/random`)
      .then((res) => {
        if (res.status !== 200) return;
        setQod(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ada", err.message);
      });
  };

  return (
    <>
      <section className={styles.parent}>
        <div className="container">
          {/* <h3>Quote of the Day</h3> */}
          <div className={styles.qod}>
            <FormatQuoteIcon
              style={{ transform: "rotate(180deg)" }}
              fontSize="large"
            />
            <div className="w-50">
              <h1>
                {loading ? (
                  <>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                  </>
                ) : (
                  qod.content
                )}
              </h1>
              <p className="fst-italic">- {qod.author}</p>
            </div>
            <FormatQuoteIcon fontSize="large" />
          </div>
          <div className="row m-0 p-0">
            {quotes.map((quote, index) => (
              <div key={index} className={" col-md-4 col-sm-6 col-12 p-3"}>
                {loading ? (
                  <>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                  </>
                ) : (
                  <div className={styles.quoteCard + " "}>
                    <div className="text-center">
                      <FormatQuoteIcon fontSize="large" />
                    </div>
                    <p>{quote.content}</p>
                    <p className="fst-italic small">- {quote.author}</p>
                    <div className="small">
                      <span>tags: </span>
                      {quote.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="mx-1 bg-primary py-1 px-2 rounded text-white small"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// <Skeleton />
// <Skeleton animation="wave" />
// <Skeleton animation={false} />
