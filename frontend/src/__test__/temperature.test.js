import React from 'react';
import { shallow } from "enzyme/build";
import Temperature from "../components/temperature/temperature";

const mock_temperature = 288.73;

it("renders without crashing", () => {
    shallow(<Temperature 
        temperature={mock_temperature}
            />);
});

it("converts and renders temperature from Kelvin to Celcius", () => {
    const wrapper = shallow(
        <Temperature 
            temperature={mock_temperature}
        />);
    const celcius = "15.58";
    
    expect(wrapper.contains(celcius)).toEqual(true);
});

it("converts and renders in Farenheit when Farenheit button is pressed", () => {
    const wrapper = shallow(
        <Temperature 
            temperature={mock_temperature}
        />);
    wrapper.find(".button--F").simulate('click');
    const farenheit = "60.04";
    
    expect(wrapper.contains(farenheit)).toEqual(true);
});

it("converts back to Celcius from Farenheit when F then C buttons are pressed", () => {
    const wrapper = shallow(
        <Temperature 
            temperature={mock_temperature}
        />);
    wrapper.find(".button--F").simulate('click');
    wrapper.find(".button--C").simulate('click');
    const celcius = "15.58";
    
    expect(wrapper.contains(celcius)).toEqual(true);
});