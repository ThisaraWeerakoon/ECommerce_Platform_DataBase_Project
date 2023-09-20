import React from 'react'
import LogoImage from '../images/logo.jpg'
import ItemCard from '../components/itemCard';

const HomePageItemDashBoard = () => {

      // Sample data for ItemCards
  const itemCardsData = [
    {
      image: LogoImage,
      title: 'Item 1',
      description: 'Description for Item 1',
      button1Label: 'Button 1',
      button2Label: 'Button 2',
    },
    {
      image: LogoImage,
      title: 'Item 2',
      description: 'Description for Item 2',
      button1Label: 'Button 1',
      button2Label: 'Button 2',
    },
    {
      image: LogoImage,
      title: 'Item 3',
      description: 'Description for Item 3',
      button1Label: 'Button 1',
      button2Label: 'Button 2',
    },
    {
      image: LogoImage,
      title: 'Item 4',
      description: 'Description for Item 4',
      button1Label: 'Button 1',
      button2Label: 'Button 2',
    },
    {
      image: LogoImage,
      title: 'Item 5',
      description: 'Description for Item 5',
      button1Label: 'Button 1',
      button2Label: 'Button 2',
    },
    {
      image: LogoImage,
      title: 'Item 6',
      description: 'Description for Item 6',
      button1Label: 'Button 1',
      button2Label: 'Button 2',
    },
  ];
  return (
    <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
        gridGap: '16px', // Adjust the gap as needed
        padding: '16px', // Add padding to the grid
      }}>
        {itemCardsData.map((item, index) => (
          <ItemCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            button1Label={item.button1Label}
            button2Label={item.button2Label}
          />
        ))}
      </div>

  )
}

export default HomePageItemDashBoard
