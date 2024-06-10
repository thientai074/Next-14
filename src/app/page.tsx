'use client'
import AppTable from "@/components/app.table";
import { useEffect } from "react"
import useSWR from "swr";

export default function Home() {
const fetcher = (url: any) => fetch(url).then(res => res.json())
 const { data, error } = useSWR("http://localhost:8000/blogs", fetcher, {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false
});

if(!data) return <div>Loading...</div>

 console.log('data', data)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AppTable blogs={data} />
    </main>
  );
}
