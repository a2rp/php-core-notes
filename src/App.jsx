// App.jsx
import React from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";

import AboutPhp from "./components/aboutPhp";
import PhpFundamentals from "./topics/phpFundamentals";
import PhpDataTypes from "./topics/phpDataTypes";
import Operators from "./topics/operators";
import ControlStructures from "./topics/controlStructures";
import Arrays from "./topics/arrays";
import Strings from "./topics/strings";
import Functions from "./topics/functions";
import Superglobals from "./topics/superglobals";
import FormsHandling from "./topics/formsHandling";
import SessionsAndCookies from "./topics/sessionsAndCookies";
import FileHandling from "./topics/fileHandling";
import ErrorHandling from "./topics/errorHandling";
import PhpHtmlIntegration from "./topics/phpHtmlIntegration";
import OopPhp from "./topics/oopPhp";
import Databases from "./topics/databases";
import SecurityEssentials from "./topics/securityEssentials";
import WorkingWithJsonApis from "./topics/workingWithJsonApis";
import ModernPhpFeatures from "./topics/modernPhpFeatures";
import ComposerAutoloading from "./topics/composerAutoloading";
import ProjectStructureBasics from "./topics/projectStructureBasics";
import DeploymentBasics from "./topics/deploymentBasics";
import PerformanceBasics from "./topics/performanceBasics";
import TestingBasics from "./topics/testingBasics";

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
                <div className="contentWrapper">
                    <AboutPhp />

                    <PhpFundamentals />
                    <PhpDataTypes />
                    <Operators />
                    <ControlStructures />
                    <Arrays />
                    <Strings />
                    <Functions />
                    <Superglobals />
                    <FormsHandling />
                    <SessionsAndCookies />
                    <FileHandling />
                    <ErrorHandling />
                    <PhpHtmlIntegration />
                    <OopPhp />
                    <Databases />
                    <SecurityEssentials />
                    <WorkingWithJsonApis />
                    <ModernPhpFeatures />
                    <ComposerAutoloading />
                    <ProjectStructureBasics />
                    <DeploymentBasics />
                    <PerformanceBasics />
                    <TestingBasics />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
