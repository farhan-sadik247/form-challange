import Footer from "@/components/Footer/Footer";
import Form from "@/components/form/Form";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Form />
      </main>
      <Footer />
    </div>
  );
}
