import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from "../SvgIcon";

import './style.scss';


class ContentHeader extends React.Component {
    getItemLengthText = (itemLength) => {
        let text;

        if (itemLength === 0) {
            text = 'No Item';
        } else if (itemLength === 1) {
            text = '1 Item';
        } else {
            text = `${itemLength} Items`;
        }

        return text;
    }

    render() {
        const {icon, title, itemLength} = this.props;
        const itemLengthText = this.getItemLengthText(itemLength);

        return (
            <div className="comp_content-header">
                <div className="left-side">
                    <div className="title-header">
                        <SvgIcon name={icon}/>
                        <div className="title">{title}</div>
                    </div>
                    <div className="sub-text">{itemLengthText}</div>
                </div>
                <div className="right-side"></div>
            </div>
        )
    }
}

ContentHeader.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    itemLength: PropTypes.number
}

export default ContentHeader;