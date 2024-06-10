"use client"
import { Container, Heading, Text } from '@chakra-ui/react'

export default function Page() {
  return (
    <main>
      <Container maxW={600}>
        <Heading as={'h1'} fontWeight={'900'}>
          Getting started
        </Heading>
        <Text>
          To use x2.email you will need a Cloudflare® account and a web domain connected to it.
          <br />
          <br />
          <b>Why this complexity?</b>
          <br />
          This app is currently targeted at tech-savvy users with Cloudflare accounts, who own one or more domains.
          <br />
          <br />
          I built this app for myself because I need it.
          <br />
          <br />
          My goal is to build a sleek fancy UI to manage disposable emails and let Cloudflare do the heavy lifting.
        </Text>
      </Container>

    </main>
  )
}
