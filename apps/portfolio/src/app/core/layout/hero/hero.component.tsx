import AppContainer from '../container/container.component';
import AppSection from '../section/section.component';

const AppHero = () => {
  return (
    <AppSection id="app-hero" height="h-screen" direction="flex-col">
      <AppContainer>
        <div className="w-full md:w-6/12">
          <h1 className="mb-2 md:mb-4 lg:mb-6 text-display-small md:text-display-medium lg:text-display-large text-light-on-surface">
            Hello, <br />
            I'm&nbsp;
            <span className="bg-gradient-to-tr from-light-primary to-light-secondary bg-clip-text text-transparent">
              Marius
            </span>
          </h1>
          <h6 className="mb-6 md:mb-8 lg:mb-12 text-title-medium md:text-title-large lg:text-headline-small text-light-on-surface">
            Junior Web Developer
          </h6>
          <p className="text-body-small md:text-body-medium lg:text-body-large text-light-on-surface-variant">
            I enjoy coding simple things, study, test, try and challenge myself
            in finding the best way possible to complete the challenges.
          </p>
        </div>
      </AppContainer>
    </AppSection>
  );
};

export default AppHero;
