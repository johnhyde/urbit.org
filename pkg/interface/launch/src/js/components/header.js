import React, { Component } from 'react';
import { Sigil } from './sigil';
import _ from 'lodash';

export default class Header extends Component {
  render() {

    let data = _.get(this.props.data, "invites", false);
    let inviteNum = 0;

    if (data && "/contacts" in data) {
      inviteNum = Object.keys(data["/contacts"]).length;
    }

    let numNotificationsElem =
      inviteNum > 0 ? (
        <a href="/~groups">
          <p
            className="absolute ph1 br2 ba b--gray2 green2 white-d f9 lh-solid"
            title={"Invitations to new groups"}
            style={{
              bottom: "-2",
              fontWeight: 600,
              fontSize: "8pt",
              padding: "0.15rem 0.4rem",
              right: 64
            }}>
            {inviteNum > 99 ? "99+" : inviteNum}
          </p>
        </a>
      ) : (
        <a href="/~groups">
          <p
            className="absolute ph1 br2 ba b--gray2 gray2 white-d f9 lh-solid"
            title={"No new invitations to new groups"}
            style={{
              bottom: "-2",
              fontWeight: 600,
              fontSize: "8pt",
              padding: "0.15rem 0.4rem",
              right: 64
            }}>
            0
            </p>
          </a>
        );

    return (
      <header
        className="bg-white bg-gray0-d w-100 justify-between relative tc pt3"
        style={{ height: 40 }}>
        <span
          className="f9 white-d inter dib"
          style={{
            verticalAlign: "text-top",
            paddingTop: 3
          }}>
          Home
        </span>
        <div className="absolute right-1 lh-copy" style={{ top: 12 }}>
          {numNotificationsElem}
          <Sigil
            ship={"~" + window.ship}
            size={16} color={"#000000"}
            classes="mix-blend-diff v-mid" />
          <span className="mono white-d f9 ml2">
            {"~" + window.ship}
          </span>
        </div>
      </header>
    );
  }

}
