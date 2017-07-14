import React from "react";
class Header extends React.Component {
  render() {
    let myLinks = this.props.links.map((item) => {
      return (<a key={item} href="#">{item}</a>);
    });

    return(
      <div className="header">
        <h1>{this.props.brand}</h1>
        {myLinks}
      </div>
    )
  }
}

export default Header;
