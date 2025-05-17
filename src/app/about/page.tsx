"use client";

import Image from "next/image";
import Link from "next/link";
import { RiSendPlaneLine, RiLinkedinBoxLine } from "react-icons/ri";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <h2 className="section__title-1">
          <span>About Me.</span>
        </h2>

        <div className="about__perfil">
          <div className="about__image">
            <Image
              src="/images/hero3.jpeg"
              alt="Mayur Patil"
              width={300}
              height={300}
              className="about__img"
              priority
            />
            <div className="about__shadow"></div>
            <div className="geometric-box"></div>
            <Image
              src="/images/random-lines.svg"
              alt="Decorative Lines"
              width={50}
              height={50}
              className="about__line"
            />
            <div className="about__box"></div>
          </div>
        </div>

        <div className="about__info">
          <blockquote className="about__description">
            <b>
              <i>
                <q>Whatever I can Conceive & Believe, I can Achieve.</q>
              </i>
            </b>
          </blockquote>

          <p>Hello!</p>
          <p>
            I’m <strong>Mayur Patil</strong>, an <strong>AI Engineer</strong> with
            over <strong><span id="experience"></span></strong> of experience spanning Software development, Website design, and Artificial Intelligence. My professional journey began in software and web development, where I honed technical expertise and creative problem-solving skills. Building on this foundation, I transitioned into the exciting field of AI, specializing in Generative AI, Machine Learning, Deep Learning, Computer Vision, and Natural Language Processing.
          </p>
          <p>
            My diverse background enables me to effectively manage complex, end-to-end AI projects—from meticulous data preparation and model training to deploying scalable AI solutions. I'm passionate about transforming challenging datasets into actionable insights that solve real-world problems.
          </p>
          <p>
            I'm constantly inspired by how AI is reshaping the world around us. This excitement fuels my drive to keep learning, experimenting, and staying ahead of the curve. Over the years, my adaptability and commitment to excellence have helped me overcome challenges, deliver real impact, and grow with every project I take on.
          </p>

          <ul className="about__list">
            <li className="about__item">
              <b>My Skills Are:</b> Python, Generative AI (GenAI), Machine Learning (ML), Deep Learning (DL), Natural Language Processing (NLP), Computer Vision (CV), MySQL, MLOps, MLflow, DVC, Git & GitHub, AWS, C#, WPF MVVM, MSSQL, SAP Crystal Report, HTML, CSS, JS.
            </li>
            <li className="about__item about__item--spaced">
              <b>My Qualification:</b> P.G. Diploma in Artificial Intelligence Engineer, B.E. Computer Engineer, Diploma in Computer Engineering.
            </li>
          </ul>

          <div className="about__button">
            <a href="#contact" className="button">
              <RiSendPlaneLine /> Contact Me
            </a>
            <Link
              href="https://www.linkedin.com/in/mayurpatil-in"
              target="_blank"
              rel="noopener noreferrer"
              className="button__ghost"
              aria-label="LinkedIn Profile"
            >
              <RiLinkedinBoxLine />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
