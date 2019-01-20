import React, { Component } from 'react';
import { connect } from 'react-redux';


import { wikipediaSearch } from './../actions/index';

class WikipediaResults extends Component {

    componentDidMount() {
        this.props.onPerformSearch('hamm');
    }

    render() {
        if (this.props.response) {
            console.log(this.props.response.body.query.search);
        }
        // <div>WikipediaResults: {this.props.match.params.search}</div>
        return (
            <div>
                {(this.props.response?(
                    <div>
                        {this.props.response.body.query.search.map((item) => {
                            return (
                                <div>
                                   
                                        <div dangerouslySetInnerHTML={{__html: item.snippet}}></div>
                                 
                                    <br />
                                </div>
                            )
                        })}
                    </div>
                ):null)}
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        response: state.wikipedia
    }
}

let mapDispatchToProps = {
    onPerformSearch: wikipediaSearch
}

let WikipediaResultsContainer = 
    connect(mapStateToProps, mapDispatchToProps)(WikipediaResults)

export default WikipediaResultsContainer;