import { toBeInTheDocument, toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import quotes from "./quotes";
import { useSelector } from "react-redux";

class NewQuote extends React.Component {
    constructor(props) {
        super(props);

        var random = Math.floor(Math.random() * quotes.length);
        
        this.state = {
            quote: quotes[random].quote,
            author: quotes[random].author
        };
        this.changeQuote = this.changeQuote.bind(this)
        
    }

    changeQuote() {
        var random = Math.floor(Math.random() * quotes.length);
        this.setState({
            quote: quotes[random].quote,
            author: quotes[random].author
        })
    }

    render() {
        return(
        <div id="quote-box">
            <div id="quote">
            <p id="text">{this.state.quote}</p>
            <p id="author"> {this.state.author}</p>
            </div>
            <div id="options">
                <button id="new-quote" class="btn btn-primary" onClick={this.changeQuote}>New Quote <i class="fa fa-quote-left"> </i></button>
                <button id="tweet-quote" class="btn btn-primary">Twittear <i class="fa fa-twitter" aria-hidden="true"></i></button>
            </div>
        </div>)
    }
};


export default NewQuote