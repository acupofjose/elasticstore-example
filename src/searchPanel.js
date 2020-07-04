import React from "react"

import firebase from "firebase/app"
import "firebase/firestore"

import SearchResults from "./searchResults"

const SearchPanel = function (props) {
  const [results, setResults] = React.useState({})
  const [error, setError] = React.useState(null)
  const [request, setRequest] = React.useState({})
  const [isLoading, setIsLoading] = React.useState(false)
  const [query, setQuery] = React.useState("jos*")

  const search = React.useCallback(async () => {
    if (!query) return

    const request = {
      request: {
        index: "elasticstore",
        q: query,
      },
      response: null,
    }

    setIsLoading(true)
    setRequest(request)
    setResults({})

    const requestDoc = await firebase.firestore().collection("search").add(request)
    const listener = requestDoc.onSnapshot((snap) => {
      const { response } = snap.data()
      if (response && response.hits) {
        setResults(response.hits)
        setError(null)
        setIsLoading(false)
        listener()
      } else if (response && response.error) {
        setError(response.error)
        setResults(null)
        setIsLoading(false)
        listener()
      }
    })
    return false
  }, [query])

  React.useEffect(() => {
    search()
  }, [search])

  return (
    <>
      <div className="SearchBar panel-block">
        <div className="field is-fullwidth has-addons">
          <div className="control is-expanded has-icons-left">
            <input
              className={`input ${isLoading ? "is-loading" : ""}`}
              type="text"
              placeholder="Search Query..."
              defaultValue={"jos*"}
              onKeyUp={(e) => {
                setQuery(e.target.value)
                search()
              }}
            />
            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true" />
            </span>
          </div>
          <div className="control">
            <button type="submit" className="button is-link">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="panel-block">
        <SearchResults request={request} results={results} error={error} />
      </div>
    </>
  )
}

export default SearchPanel
