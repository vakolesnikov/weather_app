import React from 'react';
import PropTypes from 'prop-types';

import SearchInterface from '../../containers/SearchInterface';
import FavoritesCities from '../../containers/FavoritesCities';
import DefaultCity from '../../containers/DefaultCity';

import './index.css';

export default class View extends React.Component {
    static propTypes = {
        actionInitApp: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        const { actionInitApp } = props;

        actionInitApp();

        this.state = {
            isVisibleSearchInput: false
        };
    }

    handleCloseSearchInterface = () => {
        this.setState({
            isVisibleSearchInput: false
        });
    };

    handleClickAddButton = () => {
        this.setState({
            isVisibleSearchInput: true
        });
    };

    render() {
        const { isVisibleSearchInput } = this.state;

        return (
            <div className="main-container">
                <div className="main-container__logo">Weather</div>
                <button
                    type="button"
                    className="main-container__add-city-button"
                    onClick={this.handleClickAddButton}
                >
                    Add city
                </button>

                <DefaultCity />

                <FavoritesCities />
                {isVisibleSearchInput && (
                    <SearchInterface handleCloseSearchInterface={this.handleCloseSearchInterface} />
                )}
            </div>
        );
    }
}
