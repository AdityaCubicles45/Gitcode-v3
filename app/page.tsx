"use client";

import { Video } from './components/Video';
import { Container } from './components/Container';
import { Benefits } from './components/Benefits';
import { Cta } from './components/Cta';
import { Faq } from './components/Faq';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SectionTitle } from './components/SectionTitle';
import { Testimonials } from './components/Testimonials';

import { benefitOne, benefitTwo } from "./components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Gitcode Benefits"
        title=" Why should you use Gitcode?"
      >Developers, get rewarded for your contributions and showcase your skills. 
      Companies, find top talent and crowdsource solutions efficiently. 
      Our AI-powered platform ensures fair competition and eliminates AI-generated code, 
      providing a trusted environment for everyone.     </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <Cta />        {/*# Need to do make ti to move to wallet connect  */}

    </Container>
  );
}