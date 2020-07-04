import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"

const SearchResults = ({ results, request, error }) => {
  return (
    <div className="container is-fluid">
      <div className="columns">
        <div className="column">
          <div className="my-2">
            <p className="">Request (to firebase `/search` collection)</p>
            <SyntaxHighlighter language="json">{JSON.stringify(request, null, 2)}</SyntaxHighlighter>
          </div>
          <div className="my-2">
            <p className="">Response (from firebase `/search` collection fulfilled by elasticstore)</p>
            <SyntaxHighlighter language="json">{JSON.stringify(results || error, null, 2)}</SyntaxHighlighter>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          {!results || !results.hits || (!results.hits.length && <div className="subtitle">No Results</div>)}
          {results &&
            results.hits &&
            results.hits.map((hit) => (
              <div className="card my-3" key={hit._id}>
                <header className="card-header">
                  <div className="level">
                    <div className="level-left">
                      <div className="level-item">
                        <p className="card-header-title">{hit._source.name}</p>
                      </div>
                    </div>
                    <div className="level-right">
                      <div className="level-item">Score {hit._score}</div>
                    </div>
                  </div>
                </header>
                <div className="card-content">
                  <p>{hit._source.biography}</p>
                </div>
                <footer className="card-footer px-3 py-3">
                  <div className="container">
                    <div className="level">
                      <div className="level-left">
                        <div className="level-item">
                          <p>
                            [#id] <strong>{hit._id}</strong>
                          </p>
                        </div>
                      </div>
                      <div className="level-right">
                        <div className="level-item">
                          <p>
                            [#index] <strong>{hit._index}</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default SearchResults
