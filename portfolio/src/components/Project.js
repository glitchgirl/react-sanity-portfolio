import React, {useState, useEffect} from "react";
import sanityClient from "../client"

export default function Project(){

    const [postProject, setProject] = useState(null)

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "project"]{
            title, 
            date, 
            projectType,
            link
        }`).then((data)=>setProject(data))
        .catch(console.error)
    }, [])

    return(
        <main className="bg-pink-100">
            {postProject && postProject.map((project, index)=>(
            <section className="container mx-auto">
                <h1 className="flex justify-center cursive">My Projects</h1>
                <h2 className="flex justify-center cursive">welcome to the projects</h2>
                <section className="grid grid-cols-2 gap-8">
                    <article className="relative">
                        <h3 href={project.link} alt={project.title} target="_blank">
                            <a>{project.title}</a>
                        </h3>
                        <div>
                            <span>Finished on: {new Date(project.date).toLocaleDateString}</span>
                            <span>Type: {project.projectType}</span>
                        </div>
                    </article>
                </section>
            </section>
            ))}
        </main>
    )
}