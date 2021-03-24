import React from 'react';
import { shallow } from "enzyme/build";
import Weather from "../components/weather/weather";


const mock_geolocation = {
    coords: {
        latitude: 37.913701499999995,
        longitude: -122.2992244,
    }
};

const mock_getGeoLocation = async () => {};
const mock_getWeather = async () => {};

it("renders without crashing", () => {
    shallow(<Weather 
                getGeoLocation={mock_getGeoLocation}
                geolocation={mock_getGeoLocation}
                getWeather={mock_getWeather}
            />);
});

it("renders title correctly", () => {
    const wrapper = shallow(
        <Weather 
            getGeoLocation={mock_getGeoLocation}
            geolocation={mock_getGeoLocation}
            getWeather={mock_getWeather}
        />);
    const title = <div>WEATHER by JITSU</div>;
    
    expect(wrapper.contains(title)).toEqual(true);
});