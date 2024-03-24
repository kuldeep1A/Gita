import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About Website | Gita";

    return () => {
      document.title = "About Website | Gita";
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="con-wrap">
          <div className="c-si-wrap">
            <div id="content">
              <section id="post-content" role="main">
                <div>
                  <div className="pa-title">
                    About Website: <h1>Based On Content Management System</h1>
                  </div>
                </div>
                <div className="fi-items">
                  <div>
                    <h1 className="size-6 color-dark-blue fw-normal">
                      About Our Project: Religious Texts Repository
                    </h1>
                    <p className="size-7">
                      Welcome to our comprehensive repository of diverse
                      religious texts, aiming to provide a space for spiritual
                      seekers, scholars, and enthusiasts to explore and study a
                      wide range of sacred scriptures. Our platform offers an
                      organized collection of some of the most revered texts
                      from different traditions. Here's what you can expect:
                    </p>

                    <h2 className="size-6 color-dark-blue fw-normal">
                      Srimad Bhagavad Gita and More:
                    </h2>
                    <p className="size-7">
                      Discover the timeless wisdom of texts like the Srimad
                      Bhagavad Gita, Ramcharitmanas, Brahma Sutra, and more.
                      Immerse yourself in the profound teachings, philosophies,
                      and stories that have shaped cultures and inspired
                      generations.
                    </p>

                    <h2 className="size-6 color-dark-blue fw-normal">
                      Exploring Other Gitas:
                    </h2>
                    <p className="size-7">
                      Beyond the Bhagavad Gita, delve into other Gitas that
                      offer unique insights into various aspects of life and
                      spirituality. Uncover hidden gems from different sources
                      and expand your understanding.
                    </p>

                    <h2 className="size-6 color-dark-blue fw-normal">
                      Ramcharitmanas and Valmiki Ramayanam:
                    </h2>
                    <p className="size-7">
                      Experience the devotion and poetic brilliance of texts
                      like Ramcharitmanas and Valmiki Ramayanam. These
                      narratives have captured the hearts of millions and
                      continue to resonate across cultures.
                    </p>

                    <h2 className="size-6 color-dark-blue fw-normal">
                      Brahma Sutra and Yoga Sutra:
                    </h2>
                    <p className="size-7">
                      Dive into the intricate philosophical explorations of the
                      Brahma Sutra and the profound wisdom of the Yoga Sutra.
                      Explore the depths of ancient teachings that provide
                      guidance for living a balanced and purposeful life.
                    </p>

                    <h2 className="size-6 color-dark-blue fw-normal">
                      A Space for Learning and Reflection:
                    </h2>
                    <p className="size-7">
                      Beyond just providing access to texts, we aim to create a
                      space where you can engage in thoughtful discussions,
                      share insights, and learn from others who are also
                      exploring these sacred texts.
                    </p>

                    <p className="size-7">
                      Join us on a journey of discovery and enlightenment as we
                      bring together a tapestry of sacred texts from around the
                      world. Whether you're a seeker of truth, a researcher, or
                      simply curious about the depth of human spirituality, our
                      platform invites you to explore, learn, and grow.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
