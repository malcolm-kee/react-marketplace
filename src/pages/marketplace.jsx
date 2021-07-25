import * as React from "react";
import { ListingItem } from "../components/listing-item";
import { Button } from "../components/button";

const getListings = () =>
  fetch("https://ecomm-service.herokuapp.com/marketplace").then((res) =>
    res.json()
  );

export const Marketplace = () => {
  const [clicked, setClicked] = React.useState(false);
  const [listings, setListings] = React.useState(undefined);

  return (
    <div className="lg:flex bg-gray-50">
      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-3 py-12 space-y-6">
          <div className="mb-8">
            <div>
              <h1 className="text-6xl mb-4 font-extrabold">Marketplace</h1>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
            {listings &&
              listings.map((listing) => (
                <ListingItem
                  imageUrl={listing.imageUrl}
                  title={listing.title}
                  description={listing.description}
                  price={listing.price}
                  availableStock={listing.numOfStock}
                  onlyOne={listing.availability === "single-item"}
                  key={listing._id}
                />
              ))}
          </div>
          {!listings && (
            <div className="text-center">
              <Button
                onClick={() => {
                  setClicked(true);
                  getListings().then((result) => setListings(result));
                }}
              >
                {clicked ? "Loading..." : "Load Listing"}
              </Button>
            </div>
          )}
        </div>
      </div>
      <ListingForm />
    </div>
  );
};

const ListingForm = () => {
  return (
    <div className="flex-initial bg-white w-full lg:max-w-md border-b border-gray-100">
      <form className="flex flex-col h-full">
        <div className="py-6 px-4 bg-pink-700 sm:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-white">New Listing</h2>
          </div>
          <div className="mt-1">
            <p className="text-sm text-pink-300">
              Get started by filling in the information below to create your new
              listing.
            </p>
          </div>
        </div>
        <div className="px-4 sm:px-6 pb-12">
          <div className="space-y-6 pt-6 pb-5">
            <Field label="Title">
              <input
                type="text"
                className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
              />
            </Field>
            <Field label="Price">
              <input
                type="number"
                className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
              />
            </Field>
            <Field label="Description">
              <textarea
                className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
                rows={4}
              />
            </Field>
            <Field label="Condition">
              <select className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md">
                <option value="new">New</option>
                <option value="used_like-new">Used (like new)</option>
                <option value="used_good">Used (good)</option>
                <option value="used_fair">Used (fair)</option>
              </select>
            </Field>
            <Field label="Availability">
              <select className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md">
                <option value="in-stock">In Stock</option>
                <option value="single-item">Single Item</option>
              </select>
            </Field>
            <Field label="Number of Available Stock">
              <input
                type="number"
                className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
              />
            </Field>
          </div>
        </div>
        <div className="flex-shrink-0 px-4 py-4 flex justify-end border-t border-gray-200">
          <Button type="submit">ADD</Button>
        </div>
      </form>
    </div>
  );
};

const Field = ({ children, label }) => (
  <div>
    <label className="block text-sm font-medium text-gray-900">{label}</label>
    <div className="mt-1">{children}</div>
  </div>
);
