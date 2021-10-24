import React from "react";
import SHOP_DATA from "./Shop.data";
import CollectionPreview from "../../components/collection-preview/collection-pre.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Collections: SHOP_DATA,
    };
  }
  render() {
    const { Collections } = this.state;
    return (
      <div className="shop-page">
        {Collections.map(({ id, ...otherCollectionprops }) => (
          <CollectionPreview key={id} {...otherCollectionprops} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
