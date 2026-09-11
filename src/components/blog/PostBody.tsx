import type { ReactNode } from "react";

/**
 * Minimal renderer for the seeded content layer: `##` headings, `-` bullets and
 * paragraphs, with **bold** inline. When the CMS lands, replace this with the
 * rich-text/MDX renderer and keep the same `.prose-squareit` styling.
 */
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((chunk, index) =>
    chunk.startsWith("**") && chunk.endsWith("**") ? (
      <strong key={index} className="font-semibold text-ink">
        {chunk.slice(2, -2)}
      </strong>
    ) : (
      <span key={index}>{chunk}</span>
    ),
  );
}

export function PostBody({ body }: { body: string }) {
  const blocks = body.trim().split(/\n{2,}/);

  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="pt-4 font-display text-[1.45rem] font-extrabold tracking-tight md:text-[1.6rem]"
            >
              {block.replace(/^##\s+/, "")}
            </h2>
          );
        }

        if (block.startsWith("### ")) {
          return (
            <h3 key={index} className="pt-2 font-display text-[1.15rem] font-extrabold tracking-tight">
              {block.replace(/^###\s+/, "")}
            </h3>
          );
        }

        if (block.startsWith("- ")) {
          const items = block.split("\n").map((line) => line.replace(/^-\s+/, ""));
          return (
            <ul key={index} className="space-y-2.5 pl-5">
              {items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="list-disc text-[0.975rem] leading-relaxed text-ink-soft marker:text-brand-yellow-dark"
                >
                  {inline(item)}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={index} className="text-[0.975rem] leading-relaxed text-ink-soft">
            {inline(block)}
          </p>
        );
      })}
    </div>
  );
}
