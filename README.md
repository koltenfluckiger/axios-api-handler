# Axios API Handler

<h1>Features</h1>
<ul>
<li>Allows to use CRUD methods</li>
<li>Supports Async/Await</li>
<li>Easy to use</li>
</ul>
<br>
<h1>How to use with React</h1>
<br>
<pre><code>
npm i --save axios-api-handler
</pre></code>

```javascript
import React, {Component} from 'react';
import AxiosHandler from "axios-api-handler";

import LoadingScreen from "./loading-screen";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      books: [],
      loading: true
    }
  };

  async componentDidMount(){
    try {
      const results = await ApiHandler.get('/books', {headers: {"Content-Type": "application/json"}, params: {query: {filter: {_id: _id}
          }
        }
      }
    );

    this.setState({books: results.data, loading: false});
    }
    catch(err){
      console.log(err);
    }
  }

  render() {
    const {loading, books} = this.state;

    if(loading){
      return <LoadingScreen/>
    }

    return (<div>
      {books.map(book => <Book title={book.title} id={book._id}/>)}
      </div>
    )
  }
}

export default App;
```

```javascript
AxiosHandler.get(url, {headers, params});
AxiosHandler.post(url, {payload, headers, params});
AxiosHandler.patch(url,  {payload, headers, params});
AxiosHandler.delete(url, {headers, params});

AxiosHandler.get(String, Object({headers={}, params={}}));
AxiosHandler.post(String, Object({payload={}, headers={}, params={}}));
AxiosHandler.patch(String, Object({payload={}, headers={}, params={}}));
AxiosHandler.delete(String, Object({headers={}, params={}}));

AxiosHandler.get("/books", {headers: {"Content-Type": "application/json"}, params: {sort:
  {_id: "asc"}
  }
});

AxiosHandler.post("/books", {payload: payload, headers: {"Content-Type": "application/json"}}
);
```
