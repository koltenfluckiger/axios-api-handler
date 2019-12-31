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
try {
  const results = await ApiHandler.get('/books', "json", {
          sort: {
            _id: "asc"
          }
        });

this.this.setState({books: results.data});
}
catch(err){
  console.log(err);
}
```
