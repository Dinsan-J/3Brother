import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Mail,
  Phone,
  User,
  Search,
  CheckCircle,
  XCircle,
} from "lucide-react";

const initialBookings = [
  {
    id: 1,
    name: "Amara Perera",
    email: "amara@email.com",
    phone: "+94 77 123 4567",
    date: "2025-08-10",
    service: "Wedding Photography",
    status: "Pending",
    message: "Looking for a full-day wedding shoot.",
  },
  {
    id: 2,
    name: "Kasun Silva",
    email: "kasun@email.com",
    phone: "+94 71 987 6543",
    date: "2025-09-02",
    service: "Event Videography",
    status: "Confirmed",
    message: "Corporate event coverage needed.",
  },
];

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  Confirmed: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
};

const AdminDashboard = () => {
  const [bookings, setBookings] = useState(initialBookings);
  const [search, setSearch] = useState("");

  const filteredBookings = bookings.filter(
    (b) =>
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.email.toLowerCase().includes(search.toLowerCase()) ||
      b.service.toLowerCase().includes(search.toLowerCase())
  );

  const updateStatus = (id, status) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status } : b))
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">
          Admin Dashboard
        </h1>
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold mb-1">Bookings</h2>
              <p className="text-muted-foreground">
                Manage all client bookings here.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Input
                placeholder="Search bookings..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-64"
              />
              <Search className="text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-primary/10">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-primary uppercase">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-primary uppercase">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-primary uppercase">
                  Phone
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-primary uppercase">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-primary uppercase">
                  Service
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-primary uppercase">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-primary uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredBookings.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center py-8 text-muted-foreground"
                  >
                    No bookings found.
                  </td>
                </tr>
              )}
              {filteredBookings.map((b) => (
                <tr key={b.id} className="hover:bg-primary/5 transition">
                  <td className="px-4 py-3 flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    {b.name}
                  </td>
                  <td className="px-4 py-3">
                    <Mail className="h-4 w-4 inline mr-1 text-primary" />
                    {b.email}
                  </td>
                  <td className="px-4 py-3">
                    <Phone className="h-4 w-4 inline mr-1 text-primary" />
                    {b.phone}
                  </td>
                  <td className="px-4 py-3">
                    <Calendar className="h-4 w-4 inline mr-1 text-primary" />
                    {b.date}
                  </td>
                  <td className="px-4 py-3">{b.service}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        statusColors[b.status]
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-500 text-green-600 hover:bg-green-50"
                      onClick={() => updateStatus(b.id, "Confirmed")}
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Confirm
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-500 text-red-600 hover:bg-red-50"
                      onClick={() => updateStatus(b.id, "Cancelled")}
                    >
                      <XCircle className="h-4 w-4 mr-1" />
                      Cancel
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
