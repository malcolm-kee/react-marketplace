import * as React from "react";
import { ListingItem } from "../components/listing-item";

const listings = [
  {
    _id: "60f1bf2ddcd48a001f4f9f06",
    title: "Fish",
    description: "Juice Drink Concept",
    price: 548,
    condition: "used_good",
    imageUrl:
      "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80",
    availability: "single-item",
    createdAt: "2021-07-16T17:17:33.390Z",
    updatedAt: "2021-07-16T17:17:33.390Z",
    __v: 0,
  },
  {
    _id: "60f1bf2ddcd48a001f4f9f01",
    title: "Keyboard",
    description: "NIKE FREE",
    price: 653,
    condition: "used_like-new",
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80",
    availability: "in-stock",
    numOfStock: 8,
    createdAt: "2021-07-16T17:17:33.384Z",
    updatedAt: "2021-07-16T17:17:33.384Z",
    __v: 0,
  },
  {
    _id: "60f1bf2ddcd48a001f4f9efa",
    title: "Computer",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 113,
    condition: "used_fair",
    imageUrl:
      "https://images.unsplash.com/photo-1607435097405-db48f377bff6?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80",
    availability: "single-item",
    createdAt: "2021-07-16T17:17:33.376Z",
    updatedAt: "2021-07-16T17:17:33.376Z",
    __v: 0,
  },
  {
    _id: "60f1bf2ddcd48a001f4f9ef5",
    title: "Soap",
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    price: 186,
    condition: "new",
    imageUrl:
      "https://images.unsplash.com/photo-1616740540792-3daec604777d?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80",
    availability: "single-item",
    createdAt: "2021-07-16T17:17:33.366Z",
    updatedAt: "2021-07-16T17:17:33.366Z",
    __v: 0,
  },
  {
    _id: "60f1bf2ddcd48a001f4f9eee",
    title: "Keyboard",
    description: "AXE Black Spray.",
    price: 392,
    condition: "used_fair",
    imageUrl:
      "https://images.unsplash.com/photo-1609942072337-c3370e820005?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80",
    availability: "in-stock",
    numOfStock: 21,
    createdAt: "2021-07-16T17:17:33.354Z",
    updatedAt: "2021-07-16T17:17:33.354Z",
    __v: 0,
  },
  {
    _id: "60f1bf2ddcd48a001f4f9ee9",
    title: "Sausages",
    description: "Vinta.co",
    price: 674,
    condition: "used_good",
    imageUrl:
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80",
    availability: "in-stock",
    numOfStock: 8,
    createdAt: "2021-07-16T17:17:33.344Z",
    updatedAt: "2021-07-16T17:17:33.344Z",
    __v: 0,
  },
  {
    _id: "60f1bf2ddcd48a001f4f9ee1",
    title: "Pizza",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    price: 459,
    condition: "used_like-new",
    imageUrl:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80",
    availability: "single-item",
    createdAt: "2021-07-16T17:17:33.336Z",
    updatedAt: "2021-07-16T17:17:33.336Z",
    __v: 0,
  },
  {
    _id: "60f1bf2ddcd48a001f4f9edc",
    title: "Chips",
    description: "In the Air",
    price: 876,
    condition: "used_good",
    imageUrl:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80",
    availability: "single-item",
    createdAt: "2021-07-16T17:17:33.325Z",
    updatedAt: "2021-07-16T17:17:33.325Z",
    __v: 0,
  },
  {
    _id: "60f1bf2ddcd48a001f4f9ed5",
    title: "Tuna",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    price: 551,
    condition: "new",
    imageUrl:
      "https://images.unsplash.com/photo-1611174743420-3d7df880ce32?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80",
    availability: "single-item",
    createdAt: "2021-07-16T17:17:33.317Z",
    updatedAt: "2021-07-16T17:17:33.317Z",
    __v: 0,
  },
  {
    _id: "60f1bf2ddcd48a001f4f9ece",
    title: "Cheese",
    description:
      "Still life lipstick\n\n👋 Small donation -> huge appreciation paypal.me/DanieleFranchi 🙏🙏🙏",
    price: 284,
    condition: "used_good",
    imageUrl:
      "https://images.unsplash.com/photo-1591360236480-4ed861025fa1?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80",
    availability: "single-item",
    createdAt: "2021-07-16T17:17:33.308Z",
    updatedAt: "2021-07-16T17:17:33.308Z",
    __v: 0,
  },
];

export const Marketplace = () => {
  return (
    <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
        {listings.map((item) => (
          <ListingItem
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            price={item.price}
            availableStock={item.numOfStock}
            onlyOne={item.availability === "single-item"}
            key={item._id}
          />
        ))}
      </div>
    </div>
  );
};
