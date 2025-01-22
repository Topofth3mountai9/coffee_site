import React from 'react';
import Tab from '../ui/tab';
import { BiHeart } from 'react-icons/bi';

function Description() {
  return <p>Description goes here</p>;
}
function Product_information() {
  return <p>Product information goes here!</p>;
}
function Review() {
  return <p>Product reviews go here!</p>;
}

function Some_tabs() {
  return (
    <div>
      <Tab
        tabs={[
          {
            key: 0,
            title: 'Description',
            content: <Description />,
            // content: <BiHeart />,
          },
          {
            key: 1,
            title: 'Product Information',
            content: <Product_information />,
          },
          {
            key: 2,
            title: 'Review',
            content: <Review />,
          },
        ]}
      >
        <Tab.Tags />
        <Tab.Content />
      </Tab>
    </div>
  );
}

export default Some_tabs;
