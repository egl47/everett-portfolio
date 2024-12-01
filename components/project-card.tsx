'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface ProjectCardProps {
  name: string
  imageUrl: string
  projectUrl: string
}

export function ProjectCard({ name, imageUrl, projectUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={projectUrl} passHref target="_blank">
      <div 
        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={imageUrl}
          alt={name}
          priority
          fill
          sizes="300px"
          className={`object-cover transition-all duration-300 ${isHovered ? 'scale-110 blur-sm' : ''}`}
        />
        <div 
          className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-white text-xl text-center px-4">{name}</h3>
        </div>
      </div>
    </Link>
  )
}

