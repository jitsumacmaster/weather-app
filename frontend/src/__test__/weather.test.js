import React from 'react';
import { shallow } from "enzyme/build";
import Weather from "../components/weather/weather";

const mock_getGeoLocation = async () => {};
const mock_getWeather = async () => {};

const mock_geolocation = {
    coords: {
        latitude: 37.913701499999995,
        longitude: -122.2992244,
    }
};

const mock_weather = {
    weather: [{description: "clear sky"}],
    main: {temp: 289.61},
    name: "El Cerrito",
}


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
    const title = "WEATHER by JITSU";
    
    expect(wrapper.contains(title)).toEqual(true);
});

it("renders error message when location not provided by client browser", () => {
    const wrapper = shallow(
        <Weather 
            getGeoLocation={mock_getGeoLocation}
            geolocation={{}}
            getWeather={mock_getWeather}
        />);
    const errorMessage = "If this message persits please check and make sure that sharing location is permitted by your browser.";
    
    expect(wrapper.contains(errorMessage)).toEqual(true);
});



it("renders error message when Weather API call fails", () => {
    const wrapper = shallow(
        <Weather 
            getGeoLocation={mock_getGeoLocation}
            geolocation={mock_getGeoLocation}
            getWeather={mock_getWeather}
            weatherAPIerror={true}
        />);
    const errorMessage = "We're sorry. We could not retrieve the weather for your location.";
    
    expect(wrapper.contains(errorMessage)).toEqual(true);
});

it("renders weather description and location when weather API succeeds", () => {
    const wrapper = shallow(
        <Weather 
            getGeoLocation={mock_getGeoLocation}
            geolocation={mock_getGeoLocation}
            getWeather={mock_getWeather}
            weather={mock_weather}
        />);
    const description = "clear sky";
    const location = "El Cerrito";
    
    expect(wrapper.contains(description)).toEqual(true);
    expect(wrapper.contains(location)).toEqual(true);
});