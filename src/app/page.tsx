'use client'


import Head from "next/head";
import Navbar from "./(componentes)/navbar";
import SectionTitle from "./(componentes)/sectionTitle";
import { Suspense } from "react";
import Loading from './loading'

export default function Home() {

    return (
        <>
            <Head>
                <title>TBT ENGENHARIA</title>
                <meta
                    name="description"
                    content="Nextly is a free landing page template built with next.js & Tailwind CSS"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <Suspense fallback={<Loading/>}></Suspense>
            <SectionTitle
                pretitle="Controle de Qualidade"
                title="Para acesso solicitar cadastro ao responsável pelo CQ" />

            {/* <SectionTitle
                pretitle="Watch a video"
                title="Learn how to fullfil your needs">
                This section is to highlight a promo or demo video of your product.
                Analysts says a landing page with video has 3% more conversion rate. So,
                don&apos;t forget to add one. Just like this.
            </SectionTitle> */}
            {/* <Video />
            <SectionTitle
                pretitle="Testimonials"
                title="Here's what our customers said">
                Testimonails is a great way to increase the brand trust and awareness.
                Use this section to highlight your popular customers.
            </SectionTitle> */}
            {/* <Testimonials />
            <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
                Answer your customers possible questions here, it will increase the
                conversion rate as well as support or chat requests.
            </SectionTitle> */}
            {/* <Cta />
            <Footer />
            <PopupWidget /> */}

        </  >
    )
}
