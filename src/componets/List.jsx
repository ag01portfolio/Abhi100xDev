import React from "react";
import PropTypes from "prop-types";
import { FixedSizeList as VirtualList } from "react-window";
import "./List.css";

const ITEM_HEIGHT = 90;

const Row = ({ index, style, data }) => {
  const item = data[index];
  return (
    <li style={style} className="flash-list-item">
      <img src={item.imageUrl} alt={item.image} className="flash-list-img" />
      <div className="flash-list-content">
        <h3 className="flash-list-title">{item.title}</h3>
        <p className="flash-list-text">{item.text}</p>
      </div>
    </li>
  );
};

const FlashList = ({ data, header, height = 400, width = "100%" }) => {
  return (
    <div className="flash-list">
      {header && <h2 className="flash-list-header">{header}</h2>}
      <VirtualList
        height={height}
        width={width}
        itemSize={ITEM_HEIGHT}
        itemCount={data.length}
        itemData={data}
        className="flash-list-items"
      >
        {Row}
      </VirtualList>
    </div>
  );
};

FlashList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  header: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default FlashList;
