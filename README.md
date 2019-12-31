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
      const results = await ApiHandler.get('/books', "json", {
              sort: {
                _id: "asc"
              }
            }
          );

    this.this.setState({books: results.data, loading: false});
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
