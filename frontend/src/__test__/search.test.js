import React from 'react';
import { shallow } from "enzyme/build";
import Search from "../components/search/search";

it("renders without crashing", () => {
    shallow(<Search />);
});
