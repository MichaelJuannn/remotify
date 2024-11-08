import Navbar from "@/components/Navbar";
import SearchInput from "@/components/SearchInput";
import { db } from "@/db";
import { jobPosts } from "@/db/schema/schema";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const data = await db.select().from(jobPosts);
  console.log(data);
  return (
    <div>
      <Navbar />
      <div>
        <section className="py-32">
          <div className="container text-center relative">
            <div className="mx-auto flex max-w-screen-lg flex-col">
              <p className="text-6xl text-balance">
                Find a Remote Jobs, Work From Anywhere
              </p>
            </div>
            <div className="flex justify-center py-10">
              <SearchInput />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
