import React, {Component} from 'react';
import {Col, Container, Nav, NavLink, Row, Tab} from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <Container className={"mt-5"}>
                <h2>About</h2>
                <Tab.Container id={"ledt-tabs-example"} defaultActiveKey={"first"}>
                    <Row>
                        <Col sm={"3"}>
                            <Nav variant={"pills"} className={"flex-column me-2"}>
                                <Nav.Item>
                                    <NavLink eventKey={"first"}>Design</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink eventKey={"second"}>Team</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink eventKey={"third"}>Programming</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink eventKey={"fourth"}>Frameworks</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink eventKey={"fifth"}>Libraries</NavLink>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={"9"}>
                            <Tab.Content className={"mt-3"}>
                                <Tab.Pane eventKey={"first"}>
                                    <img className={"d-block w-100"} src={"https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt={"Design"}/>
                                    <p>
                                        Praesent et finibus lectus. Nulla sem elit, auctor ut erat nec, hendrerit vulputate ipsum. In tincidunt nec tellus non placerat. Donec laoreet sed risus eget porttitor. Nullam cursus, orci id mollis faucibus, felis enim condimentum sapien, sit amet tincidunt quam metus ut ligula. Nam vitae lorem at lacus varius iaculis. Phasellus eu tellus libero. Sed posuere porttitor magna ut aliquet. Donec finibus convallis semper. Mauris nec pretium diam. Nam auctor mi id dui commodo euismod. Maecenas vulputate sollicitudin massa nec fermentum. Vestibulum consequat laoreet lorem et mollis. Nullam id vehicula risus.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey={"second"}>
                                    <img className={"d-block w-100"}  src={"https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt={"Team"}/>
                                    <p>
                                        Aenean in justo arcu. Aenean at dui vel felis egestas egestas non sit amet ex. Ut tempus sagittis aliquet. Vestibulum pretium justo semper nunc commodo, vel pellentesque arcu dapibus. Phasellus hendrerit sem ut nisi viverra, rhoncus sodales magna sagittis. Proin varius mauris id est porta mollis ut id ligula. Donec auctor dolor vitae porttitor feugiat. Fusce in tempor metus. Praesent cursus nisi ac eros convallis, id aliquam mauris elementum. Quisque eu velit augue. Vivamus ut nunc nisl. In hac habitasse platea dictumst. Pellentesque ac ullamcorper ante, sed euismod nulla. Nulla viverra tristique leo, vel efficitur enim egestas quis. Integer imperdiet porttitor lorem quis mollis.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey={"third"}>
                                    <img className={"d-block w-100"}  src={"https://images.pexels.com/photos/5727885/pexels-photo-5727885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt={"Programming"}/>
                                    <p>
                                        Aliquam sed dapibus metus. Donec orci ex, auctor vel dignissim ac, aliquam ullamcorper ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sit amet mattis elit. Phasellus in efficitur sem, malesuada suscipit elit. Suspendisse potenti. Sed pharetra neque at purus interdum, non pharetra erat egestas. Maecenas semper augue eget egestas tempor. Cras quis sagittis odio. Vivamus rhoncus odio sem, vel molestie urna porttitor a. Mauris venenatis, lorem sit amet facilisis pharetra, purus eros interdum justo, in sodales leo neque nec purus. Pellentesque odio erat, rutrum ac egestas a, pretium id metus. Aliquam auctor arcu a urna congue accumsan. Praesent non malesuada sem, ut molestie neque.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey={"fourth"}>
                                    <img className={"d-block w-100"}  src={"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt={"Frameworks"}/>
                                    <p>
                                        Donec dictum elit nec bibendum pellentesque. Aliquam vitae nisi nunc. Morbi euismod urna lacinia urna tristique euismod aliquet in orci. Proin vel risus sapien. Vestibulum aliquam cursus lectus, sit amet consequat risus euismod eu. Nullam facilisis, eros nec hendrerit faucibus, est augue accumsan velit, non consectetur metus ipsum quis metus. Pellentesque rhoncus, magna at egestas eleifend, orci metus pellentesque erat, ac fringilla metus quam non diam. Vestibulum vel dictum lectus. Aliquam luctus semper volutpat.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey={"fifth"}>
                                    <img className={"d-block w-100"}  src={"https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt={"Libraries"}/>
                                    <p>
                                        In fermentum congue mauris pharetra dictum. Etiam laoreet facilisis velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur lacinia odio in leo vehicula luctus. Quisque cursus, neque eu volutpat tincidunt, lectus turpis pretium tortor, vitae eleifend tellus lectus eu orci. Integer eu erat sit amet nunc hendrerit fringilla. Praesent vulputate ligula et eros interdum, sed consectetur ante condimentum. Quisque aliquam purus odio. Proin pharetra placerat lectus eu finibus. Proin vitae iaculis diam. Praesent egestas justo ac mi rhoncus, sed interdum augue sodales. Etiam quis nibh arcu. Maecenas vel pretium nibh. Morbi nec pulvinar sem, viverra commodo augue. Vestibulum scelerisque convallis nisl ac ultricies. Nulla nec nulla at sapien fringilla eleifend.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;