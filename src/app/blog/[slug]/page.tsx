// TEMPORARILY DISABLED — only the homepage is live for now.
// To restore: delete this stub (down to the "Original page" line) and uncomment the code below.
import { notFound } from "next/navigation";

export default function DisabledPage() {
  notFound();
}

// ─── Original page ───────────────────────────────────────────────
// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
//
// import { CtaBand } from "@/components/home/CtaBand";
// import { PostBody } from "@/components/blog/PostBody";
// import { Container, Section } from "@/components/ui/Section";
// import { JsonLd } from "@/components/seo/JsonLd";
// import { articleSchema, breadcrumbSchema, buildMetadata } from "@/lib/seo";
// import { getPost, getRelatedPosts, posts } from "@/content/blog";
//
// type Params = { slug: string };
//
// export function generateStaticParams(): Params[] {
//   return posts.map((post) => ({ slug: post.slug }));
// }
//
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<Params>;
// }): Promise<Metadata> {
//   const { slug } = await params;
//   const post = getPost(slug);
//
//   if (!post) {
//     return buildMetadata({
//       title: "Article not found",
//       description: "This article could not be found.",
//       path: `/blog/${slug}`,
//       noIndex: true,
//     });
//   }
//
//   return buildMetadata({
//     title: post.title,
//     description: post.excerpt,
//     path: `/blog/${post.slug}`,
//     image: post.image,
//     type: "article",
//     publishedTime: post.publishedAt,
//     modifiedTime: post.updatedAt ?? post.publishedAt,
//     authors: [post.author],
//   });
// }
//
// function formatDate(value: string) {
//   return new Date(value).toLocaleDateString("en-IN", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });
// }
//
// export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
//   const { slug } = await params;
//   const post = getPost(slug);
//
//   if (!post) notFound();
//
//   const related = getRelatedPosts(post.slug);
//
//   return (
//     <>
//       <JsonLd
//         schema={[
//           breadcrumbSchema([
//             { name: "Blog", path: "/blog" },
//             { name: post.title, path: `/blog/${post.slug}` },
//           ]),
//           articleSchema({
//             title: post.title,
//             description: post.excerpt,
//             path: `/blog/${post.slug}`,
//             image: post.image,
//             publishedAt: post.publishedAt,
//             updatedAt: post.updatedAt,
//             author: post.author,
//           }),
//         ]}
//       />
//
//       <article>
//         {/* Header */}
//         <header className="border-b border-line bg-paper pb-10 pt-8 md:pt-10">
//           <Container>
//             <nav aria-label="Breadcrumb">
//               <ol className="flex flex-wrap items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted">
//                 <li>
//                   <Link href="/" className="hover:text-ink">
//                     Home
//                   </Link>
//                 </li>
//                 <li aria-hidden="true">/</li>
//                 <li>
//                   <Link href="/blog" className="hover:text-ink">
//                     Blog
//                   </Link>
//                 </li>
//                 <li aria-hidden="true">/</li>
//                 <li>
//                   <Link href={`/blog/category/${post.category}`} className="hover:text-ink">
//                     {post.categoryName}
//                   </Link>
//                 </li>
//               </ol>
//             </nav>
//
//             <div className="mx-auto mt-8 max-w-3xl">
//               <h1 className="text-display-lg">{post.title}</h1>
//               <p className="mt-5 text-base leading-relaxed text-ink-soft">{post.excerpt}</p>
//
//               <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
//                 <span className="font-semibold text-ink">{post.author}</span>
//                 <span>{post.authorRole}</span>
//                 <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
//                 <span>{post.readingMinutes} min read</span>
//               </div>
//             </div>
//           </Container>
//         </header>
//
//         {/* Cover */}
//         <Container>
//           <div
//             className="relative mx-auto mt-10 aspect-[16/8] max-w-4xl overflow-hidden rounded-sm"
//             style={{ backgroundColor: post.tone }}
//           >
//             <Image
//               src={post.image}
//               alt={post.title}
//               fill
//               priority
//               sizes="(max-width: 1024px) 100vw, 60rem"
//               className="object-cover"
//             />
//           </div>
//         </Container>
//
//         {/* Body */}
//         <Section tone="paper" padding="md">
//           <Container>
//             <div className="mx-auto max-w-2xl">
//               <PostBody body={post.body} />
//
//               <div className="mt-12 rounded-sm border border-line bg-white p-6">
//                 <p className="font-display text-[1.1rem] font-extrabold tracking-tight">
//                   Want this done for your business?
//                 </p>
//                 <p className="mt-2 text-sm text-muted">
//                   Book a free consultation and we will map the fastest route to growth in your
//                   market.
//                 </p>
//                 <Link
//                   href="/contact"
//                   className="mt-4 inline-block border-b border-ink pb-1 text-sm font-semibold"
//                 >
//                   Talk to us →
//                 </Link>
//               </div>
//             </div>
//           </Container>
//         </Section>
//       </article>
//
//       {/* Related */}
//       <Section tone="paper-alt" padding="md">
//         <Container>
//           <p className="eyebrow">Related Reading</p>
//           <ul className="mt-6 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
//             {related.map((item) => (
//               <li key={item.slug}>
//                 <Link href={`/blog/${item.slug}`} className="group block">
//                   <div
//                     className="relative aspect-[16/10] overflow-hidden rounded-sm"
//                     style={{ backgroundColor: item.tone }}
//                   >
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       fill
//                       sizes="(max-width: 640px) 100vw, 32vw"
//                       className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
//                     />
//                   </div>
//                   <p className="mt-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-brand-green">
//                     {item.categoryName}
//                   </p>
//                   <h2 className="mt-1.5 font-display text-[0.975rem] font-extrabold leading-snug tracking-tight">
//                     {item.title}
//                   </h2>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </Container>
//       </Section>
//
//       <CtaBand />
//     </>
//   );
// }
