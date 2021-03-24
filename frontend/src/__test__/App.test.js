import React from 'react';
import { shallow } from "enzyme/build";
import App from "../components/app";

it("renders without crashing", () => {
    shallow(<App/>);
});
