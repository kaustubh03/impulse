// React Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

// Action Creator Import
import { fetchQuotes } from "../../redux/actions/quotes";

// Component Import
import Quote from "../Quote";


// Stylesheet
import styles from "./index.module.css";




class Home2 extends Component {
    componentDidMount = () =>{
      const { fetchQuotes } = this.props;
      fetchQuotes();
      // For Automatic Calling
      setInterval(()=>{fetchQuotes()},30000);
    }
    getQuoteInitals = (data) =>{
      let quoteInitals = {
        image: data.file,
        bgstyles: {
          background: `linear-gradient(rgba(0,0,0,0.5), black), url(${data.file}) no-repeat`,
          
        },
        quote:data.quote
      };
      return quoteInitals;
      
    }
    render() {
      const { quotes } = this.props;
      if(quotes && quotes.loading){
        return <div> Loading</div>;
      }
      if (quotes && !quotes.loading && !quotes.data){
        return "loading";
      }
      if(quotes && !quotes.loading && quotes.data){
        let quoteInitals = this.getQuoteInitals(quotes.data);
        
        return (
          <div>
            <section
              className={`${styles.bannerBg}`}
              style={quoteInitals.bgstyles}
            >
              <Quote quote={quoteInitals} />
            </section>
            
          </div>
        );
      }

    }
}

const mapStateToProps = state => {
  return {
    quotes:state.quoteReducer.quotes
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchQuotes
    },
    dispatch
  );

//export default BuildView;
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home2)
);

