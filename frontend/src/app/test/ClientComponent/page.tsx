"use client";

import { useEffect, useState } from "react";

export default function ClientComponent({ token }: { token?: string }) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (!token) {
      throw new Error("Token is required");
    }

    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/verify_token`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      setResponse(data);
    };

    fetchData();
  }, [token]);

  if (!response) return <div>Loading...</div>;

  return (
    <div>
      <h1>Test</h1>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}
