import { getCollection } from "astro:content";

export async function getAllTags() {
    const posts = await getCollection("blog");

    // const tags = post.map((post)=>post.data.tags);
    return Array.from(new Set(
        posts.map(
            (post)=>post.data.tags).flat().sort())
        )
}