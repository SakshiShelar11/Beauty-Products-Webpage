import React from 'react';

const History = () => {
  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      total: 128.00,
      status: 'Delivered',
      items: [
        { 
          name: 'Hydrating Face Serum', 
          quantity: 1, 
          price: 45.00,
          image: '/images/img2.jpg'
        },
        { 
          name: 'Vitamin C Moisturizer', 
          quantity: 2, 
          price: 38.00,
          image: '/images/img3.jpg' 
        }
      ]
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      total: 25.00,
      status: 'Delivered',
      items: [
        { 
          name: 'Organic Lip Balm Set', 
          quantity: 1, 
          price: 25.00,
          image: '/images/img4.jpg'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Order History</h1>
        
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Order {order.id}</h3>
                    <p className="text-gray-600">Placed on {order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-pink-600">₹{order.total.toFixed(2)}</p>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === 'Delivered' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div>
                          <span className="font-medium text-gray-900">{item.name}</span>
                          <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-semibold text-gray-900">
                        ₹{(item.quantity * item.price).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 px-6 py-4">
                <button className="text-pink-600 hover:text-pink-700 font-medium">
                  View Order Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {orders.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p className="text-xl text-gray-600 mb-4">No order history found</p>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition duration-300">
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;