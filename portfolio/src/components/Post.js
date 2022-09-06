import React, {useState, useEffect} from "react";
import sanityClient from "../client"
import Link from "react-router-dom"
export default function Post(){
    const [postData, setPost] = useState(null)

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "post"]{
            title, 
            slug, 
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`).then((data)=>setPost(data))
        .catch(console.error)
    }, [])
  
    return (
        <main className="bg-green-100 min-h-screen p-12">
            { postData && postData.map((post, index)=>(
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Blog Posts Page</h1>
                <h2 className="text-lg flex justify-center cursive">hewwo</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span key={index}>
                            <img src={post.mainImage.asset.url} alt={post.mainImage.alt}/>
                            <span className="flex justify-end items-end">
                                <h3>{post.title}</h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                </div>
            </section>
            ))}
        </main>
    )
}