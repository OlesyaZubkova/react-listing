import React from "react";
import PropTypes from "prop-types";
import ItemList from "./ItemList";

function Listing(props) {
  const { items } = props;
  return (
    <div className="item-list">
      {items.map((item) => {
        return <ItemList item={item} key={item.listing_id} />;
      })}
    </div>
  );
}

Listing.defaultProps = {
  items: [],
};

Listing.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Listing;
