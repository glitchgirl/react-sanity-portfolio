import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client"
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const builder = ImageUrlBuilder(sanityClient);

function urlFor(source){
    return builder.ImageUrlBuilder(source)
}

export default function SinglePost(){
    const [singlePost, setSinglePost] = useState(null)
    const {slug} = useParams();

    useEffect(()=>{
        sanityClient.fetch(`*[slug.current == "${slug}]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            }
        }`).then((data)=> setSinglePost(data[0]))
        .catch(console.error)
    }, [slug])

    if(!singlePost) return <div>loading</div>
    return (
        <main>
            <article>
                <header>
                    <div>
                        <div>
                            <h1>{singlePost.title}</h1>
                            <div>
                                <img src={urlFor(singlePost.mainImage.url).url()} alt={singlePost.mainImage._id}/>
                            </div>
                        </div>
                    </div>
                </header>
            </article>
        </main>
    )
}