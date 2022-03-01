import Head from "next/head";
import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import SimpleLayout from "../layouts/SimpleLayout";

const About = () => {
  return (
    <div className="modifyContainer font-[Poppins]">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div>
        <h3 className="mt-4 mb-5 font-semibold text-2xl text-center">
          About Us
        </h3>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            aliquet augue. Nam ultricies, nulla a placerat pellentesque, lorem
            nisi euismod lorem, eget dictum lectus nisi at libero. Aliquam
            molestie turpis id nisi aliquam, non pharetra arcu mollis. Morbi
            iaculis ex risus. Fusce in massa nec lorem convallis ultrices nec
            vitae quam. Duis in volutpat sem. Mauris ex magna, fermentum vitae
            aliquet ac, accumsan et elit. Aliquam risus ex, blandit auctor
            feugiat rhoncus, ultricies nec turpis. Aliquam erat volutpat.
          </p>
          <br />
          <p>
            Etiam tempus vestibulum tortor ut gravida. Quisque ac molestie ex.
            Duis vel lacus sit amet ex vehicula sodales ut ut nisi. Aliquam id
            ultricies lectus, et iaculis justo. Praesent nec nisi in est
            porttitor lacinia a non ipsum. Ut rhoncus arcu lorem, ac iaculis sem
            maximus id. Aliquam id tellus tortor. Vestibulum ante tortor,
            aliquam a dignissim quis, semper semper eros. Mauris lobortis
            maximus blandit. Nunc ac interdum diam. Nunc ultrices ac magna quis
            vulputate.
          </p>
          <br />
          <p>
            Ut porttitor pellentesque leo, at fringilla lectus. Maecenas congue
            urna quis urna tincidunt, ac pharetra purus porta. Cras id ex
            sapien. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Phasellus tincidunt bibendum lorem,
            eu euismod nulla laoreet quis. Curabitur fringilla purus vel erat
            blandit lacinia. Sed id dictum odio, ut pretium tortor.
          </p>
          <br />
          <p>
            Vestibulum eu justo et leo scelerisque ullamcorper ut quis mi.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Duis fringilla elementum ligula eget
            imperdiet. Duis laoreet felis vel gravida scelerisque. Nulla sed
            tincidunt metus. Morbi in pellentesque purus. Vivamus turpis justo,
            ultrices finibus dignissim vel, auctor sit amet massa. In hac
            habitasse platea dictumst. Sed fringilla, turpis quis ultricies
            accumsan, lacus ipsum convallis ex, quis molestie arcu neque id est.
          </p>
          <br />
          <p>
            Pellentesque quis convallis libero. Maecenas et orci eu elit
            suscipit tristique non sed velit. Etiam commodo facilisis nibh quis
            tempor. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Aenean quis justo gravida, fringilla
            nunc sed, finibus quam. Curabitur blandit justo eget hendrerit
            dapibus. Mauris molestie quam eros, sed rhoncus mi finibus a. Aenean
            porta, sem eu tincidunt sagittis, metus ipsum cursus dolor, sit amet
            lacinia lacus massa sed nisi. In quis tellus lectus. Quisque ac diam
            malesuada, tincidunt dolor eget, commodo ligula. Maecenas ac nulla
            mi.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

About.Layout = SimpleLayout;

export default About;
