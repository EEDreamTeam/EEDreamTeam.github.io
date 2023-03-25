import Head from 'next/head'
import Image from 'next/image'
import { NextPage } from 'next'
import { Container, Navbar, Text, Button, Grid, Col, Row } from '@nextui-org/react'
import styles from '@/styles/Home.module.css'
import InfoCard from '@/Components/InfoCard'

const Home: NextPage = () => {
  return (
    <Container>
      {/*Navbar*/}
      <Navbar isCompact variant = {'static'}>
        <Navbar.Brand>
          <Text b color ="Orange" size = {25}>
            CareerFlair
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn = "sm">
          <Navbar.Link href = "#">News</Navbar.Link>
          <Navbar.Link href = "#">Support</Navbar.Link>
          <Navbar.Link href = "#">Contact Us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href = "#">
            Login 
            <Button auto flat href = "#" css = {{marginLeft: 10}}>
              Sign Up
            </Button>
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
      {/* Slogan and Sign Up */}
      <Grid.Container justify = 'center' css = {{height: '500px', background: "url(https://littlevisuals.co/images/red_dawn.jpg)"}}>
        <Grid xs = {12} sm ={6} alignItems = "center">
          <Col css = {{width: "100%"}}>
            <Text weight = {'bold'} size = {70} css = {{'textAlign': "center"}}>
              Bring CareerFlair
            </Text>
            <Text weight = {'bold'} size = {70} css = {{'textAlign': "center"}}>
              To Your Career Fair
            </Text>
            <Button size = 'md' shadow color = "gradient" css = {{width: "100%", marginTop: 10}}>
              Join For Free!
            </Button>
          </Col>
        </Grid>
      </Grid.Container>
      {/*Course Cards*/}
      <Grid.Container gap = {2}>
        <Grid xs = {12} sm = {4}>
          <InfoCard
            label = "Course"
            title = 'Learn Python with Dr. Matthew'
            imageURL = 'https://littlevisuals.co/images/red_dawn.jpg'
            userCount = '6,040'
          />
        </Grid>
        <Grid xs = {12} sm = {4}>
          <InfoCard
            label = "Course"
            title = 'Learn Java with Dr. Ying'
            imageURL = 'https://littlevisuals.co/images/sunset.jpg'
            userCount = '3,300'
          />
        </Grid>
        <Grid xs = {12} sm = {4}>
          <InfoCard
            label = "Course"
            title = 'Learn Pspice with Dr. Moody'
            imageURL = 'https://littlevisuals.co/images/tail.jpg'
            userCount = '1,130'
          />
        </Grid>
      </Grid.Container>
      {/*Mentors*/}
      <Grid.Container justify = 'center' css = {{height: '500px', background: "url(https://littlevisuals.co/images/moss.jpg)"}} gap = {2}>
        <Grid xs = {12} sm ={6} alignItems = "center">
          <Col css = {{width: "100%"}}>
            <Text weight = {'bold'} size = {70} css = {{textAlign: "center"}}>
              Spotlight Mentors
            </Text>
            <Row>
              <Grid xs = {12} sm = {4}>
                <InfoCard
                  label = "Brandon S."
                  title = 'Sr. Embedded System Engineer'
                  imageURL = 'https://littlevisuals.co/images/red_dawn.jpg'
                  userCount = '6,040'
                />
              </Grid>
              <Grid xs = {12} sm = {4}>
                <InfoCard
                  label = "Alexis P."
                  title = 'Sr. Analog Design Engineer'
                  imageURL = 'https://littlevisuals.co/images/sunset.jpg'
                  userCount = '3,300'
                />
              </Grid>
              <Grid xs = {12} sm = {4}>
                <InfoCard
                  label = "William M."
                  title = 'Substation Engineer'
                  imageURL = 'https://littlevisuals.co/images/tail.jpg'
                  userCount = '1,130'
                />
              </Grid>
            </Row>
          </Col>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default Home
