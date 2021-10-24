import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.design.css";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      section: [
        {
          title: "HATS",
          imageUrl:
            "https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg",
          id: 1,
          LinkUrl: "hats",
        },
        {
          title: "JACKETS",
          imageUrl:
            "https://i.insider.com/5fd790a0e00bce00188bb298?width=1136&format=jpeg",
          id: 2,
          LinkUrl: "jackets",
        },
        {
          title: "SNEAKERS",
          imageUrl:
            "https://images.pexels.com/photos/7880182/pexels-photo-7880182.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          id: 3,
          LinkUrl: "sneakers",
        },
        {
          title: "WOMENS",
          imageUrl: "https://wallpaperaccess.com/full/1634056.jpg",
          size: "large",
          id: 4,
          LinkUrl: "womens",
        },
        {
          title: "MENS",
          imageUrl:
            "https://post.healthline.com/wp-content/uploads/2020/09/best-multivitamins-for-men-1200x628-facebook-1200x628.jpg",
          size: "large",
          id: 5,
          LinkUrl: "mens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ title, imageUrl, id, size, LinkUrl }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            LinkUrl={LinkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
