import {
  boolean,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["admin", "user"]);

export const users = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").unique(),
  username: text("username").notNull(),
  password: text("password").notNull(),
  role: roleEnum("role").default("user").notNull(),
});

export const jobPosts = pgTable("job_post", {
  id: uuid("id").defaultRandom().primaryKey(),
  companyName: text("company_name").notNull(),
  employmentType: text("employment_type").notNull(),
  description: text("description").notNull(),
  isSupported: boolean("is_supported").default(false),
  isHighlight: boolean("is_highlighted").default(false),
  isSticky: boolean("is_sticky").default(false),
  primaryTag: uuid("primary_tag").references(() => tags.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const tags = pgTable("tags", {
  id: uuid("id").defaultRandom().primaryKey(),
  tagName: text("tag_name"),
});

export const jobTags = pgTable(
  "job_tags",
  {
    jobPostId: uuid("job_post_id").references(() => jobPosts.id),
    tagId: uuid("tag_id").references(() => tags.id),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.jobPostId, table.tagId] }),
    };
  },
);
