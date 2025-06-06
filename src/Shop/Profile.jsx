import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://netramoptics.onrender.com/api/orders/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(res.data);
      } catch (err) {
        console.error("❌ Could not load orders:", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-gray-100 py-16 px-4 relative">
        {/* Background Orbs */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full opacity-30 z-0"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-green-500 rounded-full opacity-30 z-0"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full opacity-20 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-indigo-800 mb-10">
            👤 Your Profile & Orders
          </h1>

          {orders.length === 0 ? (
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <p className="text-gray-600 text-lg">😔 No orders found. Go shopping and treat yourself.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {orders.map((order, orderIndex) => (
                <div
                  key={order._id}
                  className="bg-white p-6 rounded-xl shadow-md border"
                >
                  <h2 className="text-xl font-semibold text-indigo-700 mb-4">
                    🧾 Order #{orderIndex + 1} — <span className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {order.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-4 border p-3 rounded-lg">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md border" />
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                          <p className="text-sm text-gray-500">Lens: {item.lensType}</p>
                          <p className="text-sm text-green-700 font-semibold">₹{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-sm text-gray-600">
                    <p><strong>Status:</strong> <span className="text-indigo-600">{order.status}</span></p>
                    <p><strong>Total Paid:</strong> ₹{order.totalAmount}</p>
                    <p><strong>Payment Method:</strong> {order.paymentMethod.toUpperCase()}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
