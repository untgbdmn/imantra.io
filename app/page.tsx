import NavbarFront from "@/layouts/navbar-front";

export default function Home() {
  return (
    <div className="px-3 py-2 min-h-screen h-full w-full">
        <NavbarFront />
        <div className="flex items-center justify-center h-full mt-48">
            <h1 className="text-4xl font-bold">iMantra.io</h1>
        </div>
    </div>
  );
}
