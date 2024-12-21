const skill = {
    "data": [
    {
        "title": "Language",
        "iconlink":"./skillicons/program-icon.png",
        "items":  [
            {"data":"C"},
            {"data":"Javascript"},
            {"data":"Typescript"}
        ]
    },
    {
        "title": "Frontend",
        "iconlink":"./skillicons/program-icon.png",
        "items":  [
            {"data":"HTML"},
            {"data":"CSS"},
            {"data":"Bootstrap"},
            {"data":"Material UI"},
            {"data":"Styled Components"},
            {"data":"emotions"},
            {"data":"React js"},
            {"data":"Next js"}
        ]
    },
    {
        "title": "Backend",
        "iconlink":"./skillicons/program-icon.png",
        "items":  [
            {"data":"Node js"},
            {"data":"Express js"},
            {"data":"Wordpress"},
            {"data":"Strapi"},
            {"data":"GraphQL"}
        ]
    },
    {
        "title": "Database",
        "iconlink":"./skillicons/program-icon.png",
        "items":  [
            {"data":"SQL"},
            {"data":"Mongo DB"},
            {"data":"PostgreSQL"}
        ]
    },
    {
        "title": "Version control",
        "iconlink":"./skillicons/program-icon.png",
        "items":[
            {"data":"Github"}
        ]
    }
    ]
}

const project = {
    "data" : [
        {
            "proj_name" : "Portfolio",
            "description": "My personal website. It represents my skill, abilities, working experience and has collection of my projects.",
            "img_link" : "/project/portfolio-img.jpg",
            "tech_stack":"Next js, Strapi",
            "redirect_link" : "/"
        },
        {
            "proj_name" : "Todo Application",
            "description": "ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do.",
            "img_link" : "/project/todo.png",
            "tech_stack":"MERN Stack",
            "redirect_link" : "https://np-todo.vercel.app"
        }
    ]
}

const journey = {
    "data" : [
        {
            "role" : "SDE - I",
            "logo_link": "https://www.getmyparking.com/src/getmyparking.svg",
            "duration": "Mar 2023 - Present",
        },
        {
            "role" : "Associate Software Engineer",
            "logo_link": "/journey/byjus.png",
            "duration": "Nov 2021 - Feb 2023",
        },
        {
            "role" : "RPA Engineer Trainee",
            "logo_link": "/journey/e5.svg",
            "duration": "Sept 2020 - Oct 2021",
        },
        {
            "role" : "B.Tech (IT)",
            "logo_link": "/journey/kct.svg",
            "duration": "2016-2020",
        }
    ]
}

export default {skill, project, journey};
