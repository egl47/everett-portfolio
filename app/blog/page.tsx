import { BlogPostCard } from "@/components/blog-post-card"

const blogPosts = [
  {
    title: "My First Blog Post",
    description: "This is a placeholder for once I write my first article.",
    date: "11/30/2024",
    imageUrl: "/images/project_covers/cover-filebuddy.jpg",
    imageAlt: "Placeholder",
    slug: "placeholder-blog-post"
  }
]

export default function Home() {
  return (
    <main className="container mx-auto px-8 py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} {...post} />
        ))}
      </div>
    </main>
  )
}

