import React, { useMemo, useState } from 'react';

const List = () => {
  const products = [
    {
      id: 1,
      pname: 'cloths',
      pcolor: 'pink',
      psize: 'M'
    },
    {
      id: 2,
      pname: 'SHoe',
      pcolor: 'Brown',
      psize: '9'
    },
    {
      id: 3,
      pname: 'shirt',
      pcolor: 'Black',
      psize: 'M'
    },
    {
      id: 4,
      pname: 'Paint',
      pcolor: 'blue',
      psize: '30'
    }
  ];

  const tableStyle = {
    border: '5px solid black',
    textAlign: 'center',
    borderColor: 'black',
    backgroundColor: '#2ff020',
    color: '#000000',

    margin: '10px',
    alignItem: 'justify'
  };

  // Search Query from Here
  const [query, setQuery] = useState('');

  // UseMemo Hook to Optimize
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return (
        product.pname.toLowerCase().includes(query.toLowerCase()) ||
        product.pcolor.toLowerCase().includes(query.toLowerCase()) ||
        product.psize.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [products, query]);

  return (
    <div>
      <h1>List</h1>

      <input
        type="text"
        placeholder="Search Here...."
        style={{ margin: '15px', height: '30px', width: '250px' }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <table>
        <tr>
          <td style={tableStyle}>Product Id</td>
          <td style={tableStyle}>Product Name</td>
          <td style={tableStyle}>Product Color</td>
          <td style={tableStyle}>Product Size</td>
        </tr>
        {filteredProducts.map((item, index) => (
          <tr key={index}>
            <td style={tableStyle}>{item.id}</td>
            <td style={tableStyle}>{item.pname}</td>
            <td style={tableStyle}>{item.pcolor}</td>
            <td style={tableStyle}>{item.psize}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default List;
