import React from 'react';
import { marked } from 'marked';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: placeholder
    }
    this.handleChange = this.handleChange.bind(this);
    this.getMarked = this.getMarked.bind(this);
  }
  handleChange(event) {
    this.setState({
      markdown: event.target.value
    })
  }
  getMarked() {
    let rawMarkup = marked.parse(this.state.markdown);
    return {__html: rawMarkup}
  }

  render() {
    return <div>
      <header class="header">
        <div>
          <img src="https://pluspng.com/img-png/github-logo-png-white-github-11-icon-free-white-social-icons-256x256.png" alt="Github logo"/>
          <h2>Github Markdown Previewer</h2>
        </div>
      </header>
      <main class="main">
        <textarea class="editor" type="text" id="editor" onChange={this.handleChange} value={this.state.markdown} />
        <div class="previewer">
          <div class="preview" id="preview" dangerouslySetInnerHTML={this.getMarked()}/>
        </div>
      </main>
    </div>
  }
}

const placeholder = `
  # Markdown previewer app
  ## Made with react

  freeCodeCamp's website: [Click here!](https://freecodecamp.org)
  Say hello to freeCodeCamp \`<p>Hello!</p>\`,
  you can also use an arrow function to do that in React:
  \`\`\`
  const Hello = () => {
    return (
      <p>Hello!</p>
    )
  }
  \`\`\`

  Technologies I used in the project:
  - HTML
  - CSS
  - React (with JSX)

  My favorite quote:
  > What a fool can do, another can too.

  ![Cat photo](http://1.bp.blogspot.com/-F9B7MrG9Vl8/T9uevPioqPI/AAAAAAAAACg/FQxPGkupdMk/s1600/cute+cat+pictures+(8).jpg)
  **Cute cat photo to finish the project!**
  `

export default App;
