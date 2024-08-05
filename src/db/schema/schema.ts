import { pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["admin", "user"]);

export const users = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").unique(),
  username: text("username").notNull(),
  password: text("password").notNull(),
  role: roleEnum("role").default("user").notNull(),
});

export const articles = pgTable("article", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  abstract: text("abstract").notNull(),
  journal: text("journal").notNull(),
  publishDate: timestamp("publish_date").notNull(),
  publicationURL: text("publication_url"),
  DOI: text("DOI"),
});

export const forums = pgTable("forum", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("title").notNull(),
  tags: text("tags"),
  createdAt: timestamp("created_at").defaultNow(),
  createdBy: uuid("created_by").references(() => users.id),
});

export const comments = pgTable("comment", {
  id: uuid("id").defaultRandom().primaryKey(),
  text: text("text").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  commenterId: uuid("commenter_id").references(() => users.id),
  forumId: uuid("forum_id").references(() => forums.id, {
    onDelete: "cascade",
  }),
});

export const replies = pgTable("reply", {
  id: uuid("id").defaultRandom().primaryKey(),
  text: text("text").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  commenterId: uuid("commenter_id").references(() => users.id),
  commentId: uuid("comment_id").references(() => comments.id, {
    onDelete: "cascade",
  }),
});

export const researchs = pgTable("research", {
  id: uuid("id").defaultRandom().primaryKey(),
  proposal: text("proposal"),
  title: text("text").notNull(),
  abstract: text("abstract").notNull(),
  picId: uuid("pic_id").references(() => users.id),
  startDate: timestamp("start_date"),
  endDate: timestamp("end_date"),
});
