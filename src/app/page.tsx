"use client";

import Image from "next/image";
import Link from "next/link";
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import { FaKaggle } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <h1 className="home__name">Mayur</h1>

        <div className="home__perfil">
          <div className="home__image">
            <Image
              src="/images/hero.jpg"
              alt="Mayur Patil"
              width={300}
              height={300}
              className="home__img"
              priority
            />
            <div className="home__shadow">
              <Image
                src="/images/curved-arrow.svg"
                alt="Arrow"
                width={50}
                height={50}
                className="home__arrow"
              />
              <Image
                src="/images/random-lines.svg"
                alt="Random lines"
                width={50}
                height={50}
                className="home__line"
              />
            </div>
            <div className="geometric-box"></div>

            <div className="home__social">
              <a
                href="https://www.linkedin.com/in/mayurpatil-in"
                target="_blank"
                rel="noopener noreferrer"
                className="home__social-link"
                aria-label="LinkedIn"
              >
                <RiLinkedinBoxFill />
              </a>
              <a
                href="https://www.kaggle.com/mayurpatilin"
                target="_blank"
                rel="noopener noreferrer"
                className="home__social-link"
                aria-label="Kaggle"
              >
                <FaKaggle />
              </a>
              <a
                href="https://github.com/mayurpatil-in"
                target="_blank"
                rel="noopener noreferrer"
                className="home__social-link"
                aria-label="GitHub"
              >
                <RiGithubFill />
              </a>
            </div>
          </div>
        </div>

        <div className="home__info">
          <p className="home__description">
            <strong>AI Engineer</strong>, I'm passionate about developing innovative AI solutions using Generative AI, Machine Learning, and Neural Networks. By combining expertise in software development and data science, I deliver practical, intuitive, and user-friendly AI applications designed to solve real-world challenges.
          </p>

          <a href="#about" className="home__scroll">
            <div className="home__scroll-box">
              <i className="ri-arrow-down-s-line"></i>
            </div>
            <span className="home__scroll-text">Scroll Down</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
