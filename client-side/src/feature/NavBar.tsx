import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

interface Iprops {
  openCreateForm: () => void;
}
const NavBar: React.FC<Iprops> = props => {
  const { openCreateForm } = props;
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button positive content="Create Activity" onClick={openCreateForm}/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
