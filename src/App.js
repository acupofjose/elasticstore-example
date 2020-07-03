import React from "react"
import firebase, { initializeApp } from "firebase/app"
import SearchPanel from "./searchPanel"

import "./styles.scss"

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyCsogSTgM4EK0hMBMsRgwVbdRqCiy40FtU",
    authDomain: "acupofjose-elasticstore.firebaseapp.com",
    databaseURL: "https://acupofjose-elasticstore.firebaseio.com",
    projectId: "acupofjose-elasticstore",
    storageBucket: "acupofjose-elasticstore.appspot.com",
    messagingSenderId: "315440391634",
    appId: "1:315440391634:web:aa4ffd038497368544140b",
  }
  initializeApp(firebaseConfig)
}

export default function App() {
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <article className="message is-link">
                <p className="message-header">Elasticstore</p>
                <div className="message-body">
                  <p>
                    This is an example page of doing search using{" "}
                    <a href="https://github.com/acupofjose/elasticstore">Elasticstore</a>, as defined at the bottom of
                    the <a href="https://github.com/acupofjose/elasticstore#making-searches-client-side">README</a> as
                    the query handler.
                  </p>
                  <br />
                  <p>This page queries a collection of randomly generated user data.</p>
                  <br />

                  <p>
                    Queries can be formed by using elasticsearch's simple query string syntax documented{" "}
                    <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html">
                      here
                    </a>
                    .
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="panel is-link">
                <p className="panel-heading">Example Search</p>
                <SearchPanel />
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <a className="button is-outline is-link" href="https://github.com/acupofjose/elasticstore-example">
                Clone this Repo
              </a>
            </p>
            <p>
              <a href="https://github.com/acupofjose">@acupofjose</a>
            </p>
          </div>
        </footer>
      </section>
    </div>
  )
}
