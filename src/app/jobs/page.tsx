import Navbar from "@/components/Navbar";
import SearchInput from "@/components/SearchInput";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { db } from "@/db";
import { jobPosts } from "@/db/schema/schema";
import { cn } from "@/lib/utils";
import { desc, like, or } from "drizzle-orm";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const data = await getJobs(searchParams.query);
  console.log(data);
  return (
    <div>
      <Navbar />
      <div>
        <section className="pt-32 pb-16">
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
        <div
          id="job-grid"
          className="container flex-col justify-center items-center space-y-4 min-h-screen"
        >
          {data.map((data) => (
            <div
              key={data.id}
              className={cn(
                "container border border-black rounded-xl flex justify-between py-6 hover:opacity-75 group",
                data.isHighlight && "bg-indigo-700 text-white",
              )}
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png" />
                  <AvatarFallback>X</AvatarFallback>
                </Avatar>
                <Separator orientation="vertical" />
                <div>
                  <p className="text-xl font-bold">{data.position}</p>
                  <p>{data.companyName}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="invisible group-hover:visible">
                  {data.createdAt
                    ? formatDistanceToNow(data.createdAt, { addSuffix: true })
                    : "No date provided"}
                </div>
                <Button
                  className={cn(
                    "invisible group-hover:visible",
                    data.isHighlight &&
                      "bg-white text-violet-700 hover:bg-white/90",
                  )}
                  size="lg"
                  asChild
                >
                  <Link href={data.careerPageLink}>Apply</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

async function getJobs(query: string | undefined | string[]) {
  if (!query) {
    return await db
      .select()
      .from(jobPosts)
      .orderBy(desc(jobPosts.isSticky), jobPosts.createdAt);
  }
  return await db
    .select()
    .from(jobPosts)
    .where(
      or(
        like(jobPosts.companyName, `%${query}%`),
        like(jobPosts.position, `%${query}%`),
        like(jobPosts.description, `%${query}%`),
      ),
    );
}
