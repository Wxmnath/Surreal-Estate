import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "title",
    type: "type",
    bathrooms: 2,
    bedrooms: 3,
    price: 123456,
    city: "Manchester",
    email: "test.email@email.com",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders correct values to the props", () => {
    const { getByTestId } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(getByTestId("property-title")).toHaveClass("property-card__title");
    expect(getByTestId("property-type")).toHaveClass("property-card__type");
    expect(getByTestId("property-bathrooms")).toHaveClass(
      "property-card__bathrooms"
    );
    expect(getByTestId("property-bedrooms")).toHaveClass(
      "property-card__bedrooms"
    );
    expect(getByTestId("property-price")).toHaveClass("property-card__price");
    expect(getByTestId("property-city")).toHaveClass("property-card__city");
    expect(getByTestId("property-email")).toHaveClass("property-card__email");
  });
});
