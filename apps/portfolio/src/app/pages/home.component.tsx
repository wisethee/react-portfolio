import { Fragment } from 'react';
import AppContainer from '../core/layout/container/container.component';
import AppHero from '../core/layout/hero/hero.component';
import AppNav from '../core/layout/nav/nav.component';
import AppSection from '../core/layout/section/section.component';

const AppHome = () => {
  return (
    <Fragment>
      <AppNav />
      <AppHero />

      <AppSection>
        <AppContainer>
          <div className="w-full flex justify-end">
            <div className="w-full md:w-7/12 ">
              <h6 className="relative mb-3 text-title-small md:text-title-medium text-light-on-surface ">
                <span className="before:block before:w-12 before:h-[2px] before:absolute before:bg-light-on-surface before:left-0 before:top-1/2"></span>
                <span className="ml-16">About Me</span>
              </h6>
              <h2 className="mb-2 md:mb-4 lg:mb-6 text-display-small md:text-display-medium lg:text-display-large text-light-on-surface">
                Think. Create. <br />
                <span className="bg-gradient-to-tr from-light-primary to-light-secondary bg-clip-text text-transparent">
                  Solve.
                </span>
              </h2>
              <p className="text-body-small md:text-body-medium lg:text-body-large text-light-on-surface-variant">
                From concept to production, I create simple and user-friendly
                solutions, paying attention to clean design and maintainable
                code. I like to learn new things every day and challenge myself
                with new projects, translating concepts into visual design by
                paying close attention to details, and convert it into highly
                interactive experiences.
              </p>
            </div>
          </div>
        </AppContainer>
      </AppSection>

      <AppSection id="app-hero" direction="flex-col">
        <AppContainer>
          <div className="w-full md:w-6/12">
            <h3 className="mb-2 md:mb-4 lg:mb-6 text-headline-medium md:text-headline-large lg:text-display-small text-light-on-surface">
              What I Can Do
            </h3>

            <div className="p-12 mb-6">
              <h6 className="mb-2 md:mb-4 lg:mb-6 text-title-medium md:text-title-large lg:text-headline-small text-light-on-surface">
                Web Development
              </h6>
              <p className="text-body-small md:text-body-medium lg:text-body-large text-light-on-surface-variant">
                Modern and mobile-ready website that will help you reach all of
                your marketing.
              </p>
            </div>

            <div className="p-12">
              <h6 className="mb-2 md:mb-4 lg:mb-6 text-title-medium md:text-title-large lg:text-headline-small text-light-on-surface">
                UI / UX Design
              </h6>
              <p className="text-body-small md:text-body-medium lg:text-body-large text-light-on-surface-variant">
                Modern and mobile-ready website that will help you reach all of
                your marketing.
              </p>
            </div>
          </div>
        </AppContainer>
      </AppSection>

      <AppSection>
        <AppContainer>
          <div className="w-full flex">
            <div className="w-full md:w-7/12 ">
              <h6 className="relative mb-3 text-title-small md:text-title-medium text-light-on-surface ">
                <span className="before:block before:w-12 before:h-[2px] before:absolute before:bg-light-on-surface before:left-0 before:top-1/2"></span>
                <span className="ml-16">My Resume</span>
              </h6>
              <h2 className="mb-2 md:mb-4 lg:mb-6 text-display-small md:text-display-medium lg:text-display-large text-light-on-surface">
                Belive in Being <br />
                <span className="bg-gradient-to-tr from-light-primary to-light-secondary bg-clip-text text-transparent">
                  Diffrent
                </span>
              </h2>
              <p className="text-body-small md:text-body-medium lg:text-body-large text-light-on-surface-variant">
                I have 2+ years of experience working on side-projects and with
                clients as a freelancer. I'm constantly looking for learning new
                things in this vast world of creativity.
              </p>
            </div>
          </div>
        </AppContainer>
      </AppSection>
    </Fragment>
  );
};

export default AppHome;
