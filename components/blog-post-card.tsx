'use client'

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BlogPostCardProps {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  slug: string
  date: string
}

export function BlogPostCard({ title, description, imageUrl, imageAlt, slug, date }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="mb-1 line-clamp-2">{title}</CardTitle>
        <p className="text-xs text-muted-foreground mb-2">{date}</p>
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild>
          <Link href={`/blog/${slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

