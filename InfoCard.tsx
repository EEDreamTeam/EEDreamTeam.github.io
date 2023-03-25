import { NextPage } from "next";
import { Card, Text, Button, Col, Row } from "@nextui-org/react";

interface Props {
    title: string,
    label: string,
    imageURL: string,
    userCount: string
}

const InforCard: NextPage <Props> = (props) => {
    const {title, label, imageURL, userCount} = props

    return (
        <Card>
            <Card.Header css = {{position: 'fixed', top: 5 }}>
                <Col>
                    <Text size = {12} weight = 'bold' transform = "uppercase" color = '#ffffffAA'>
                        {label}
                    </Text>
                    <Text h4 color = "white">
                        {title}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Footer isBlurred css = {{position: 'absolute', bgBlur: "#0f111466", bottom: 0}}>
                <Row>
                    <Col>
                        <Text color = "#d1d1d1" size = {18}>
                            {userCount}
                        </Text>
                    </Col>
                    <Col>
                        <Row justify = "flex-end">
                            <Button auto flat rounded color = "primary">
                                <Text css = {{color: "inherit"}}
                                    transform =  "uppercase" 
                                    weight =  "bold"
                                    size = {10}>
                                    Enroll In Course
                                </Text>
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
            <Card.Image src = {imageURL}></Card.Image>
        </Card>
    )
}

export default InforCard