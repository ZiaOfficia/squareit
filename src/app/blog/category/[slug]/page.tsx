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
// import { PageHeader } from "@/components/layout/PageHeader";
// import { CtaBand } from "@/components/home/CtaBand";
// import { Container, Section } from "@/components/ui/Section";
// import { JsonLd } from "@/components/seo/JsonLd";
// import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
// import { getPostsByCategory, postCategories } from "@/content/blog";
//
// type Params = { slug: string };
//
// export function generateStaticParams(): Params[] {
//   return postCategories.map((category) => ({ slug: category.slug }));
// }
//
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<Params>;
// }): Promise<Metadata> {
//   const { slug } = await params;
//   const category = postCategories.find((item) => item.slug === slug);
//
//   if (!category) {
//     return buildMetadata({
//       title: "Category not found",
//       description: "This category could not be found.",
//       path: `/blog/category/${slug}`,
//       noIndex: true,
//     });
//   }
//
//   return buildMetadata({
//     title: `${category.name} Articles`,
//     description: category.description,
//     path: `/blog/category/${category.slug}`,
//   });
// }
//
// export default async function BlogCategoryPage({ params }: { params: Promise<Params> }) {
//   const { slug } = await params;
//   const category = postCategories.find((item) => item.slug === slug);
//
//   if (!category) notFound();
//
//   const categoryPosts = getPostsByCategory(category.slug);
//
//   return (
//     <>
//       <JsonLd
//         schema={breadcrumbSchema([
//           { name: "Blog", path: "/blog" },
//           { name: category.name, path: `/blog/category/${category.slug}` },
//         ])}
//       />
//
//       <PageHeader
//         eyebrow="Blog Category"
//         title={category.name}
//         description={category.description}
//         crumbs={[
//           { name: "Blog", path: "/blog" },
//           { name: category.name, path: `/blog/category/${category.slug}` },
//         ]}
//       >
//         <ul className="mt-8 flex flex-wrap gap-2">
//           {postCategories.map((item) => (
//             <li key={item.slug}>
//               <Link
//                 href={`/blog/category/${item.slug}`}
//                 aria-current={item.slug === category.slug ? "page" : undefined}
//                 className={`inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
//                   item.slug === category.slug
//                     ? "border-ink bg-ink text-white"
//                     : "border-line bg-white text-ink-soft hover:border-ink hover:text-ink"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </PageHeader>
//
//       <Section tone="paper" padding="md">
//         <Container>
//           {categoryPosts.length === 0 ? (
//             <p className="text-sm text-muted">
//               No articles in this category yet.{" "}
//               <Link href="/blog" className="font-semibold text-brand-blue underline underline-offset-4">
//                 Browse all articles
//               </Link>
//               .
//             </p>
//           ) : (
//             <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
//               {categoryPosts.map((post) => (
//                 <li key={post.slug}>
//                   <Link href={`/blog/${post.slug}`} className="group block">
//                     <div
//                       className="relative aspect-[16/10] overflow-hidden rounded-sm"
//                       style={{ backgroundColor: post.tone }}
//                     >
//                       <Image
//                         src={post.image}
//                         alt={post.title}
//                         fill
//                         sizes="(max-width: 640px) 100vw, 32vw"
//                         className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
//                       />
//                     </div>
//                     <h2 className="mt-4 font-display text-[1.05rem] font-extrabold leading-snug tracking-tight">
//                       {post.title}
//                     </h2>
//                     <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </Container>
//       </Section>
//
//       <CtaBand />
//     </>
//   );
// }
