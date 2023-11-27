import chaldal    from '../images/chaldal.jpg'
import altersense from '../images/altersense.png'
import jbconnect from '../images/jbconnect.jpg'
import spring from '../images/spring.png'
import android from '../images/android.jpeg'
import reactnative from '../images/reactnative.jpg'
import iub        from '../images/iub.png'

import lambda   from '../images/lambda.png'
import dotnet   from '../images/dotnet.png'
import eggshell from '../images/eggshell.png'

import dataasetMgt from '../images/dataset_mgt.jpg'
import cicd        from '../images/cicd.png'
import yolopython from '../images/yolopython.png'


export const professionalExperiences = [
    {
        expId:        "chaldal1",
        institute:    "Chaldal",
        title:        "Software Engineering Intern",
        duration:     "(Spring 2023, 6 months)",
        intro:        "Collaborated with world class fullstack framework developers and experts of functional programming Paradigms. A masterclass in F#/ C# codebases that transpile into React components and .NET Actors.",
        thumbnailUrl: chaldal,
        subExperiences: [
            {
                thumbnailUrl: eggshell,
                title:    "Frontend Development"
            },
            {
                thumbnailUrl: lambda,
                title: "Functional Programming"
            },
            {
                thumbnailUrl: dotnet,
                title: "Backend Engineering"
            }
        ]
    },
    {
        expId:        "altersense",
        institute:    "AlterSense Ltd.",
        title:        "Machine Learning Engineer",
        duration:     "Summer 2022, (3 months)",
        intro:        "Trained and tested state-of-the-art computer vision libraries like yoloV7 and openCV. Integrated those models into web applications. Deployed those models into CI/CD pipelines.",
        thumbnailUrl: altersense,
        subExperiences: [
            {
                thumbnailUrl: dataasetMgt,
                title: "Dataset Management"
            },
            {
                thumbnailUrl: yolopython,
                title: "Computer Vision Engineering"
            },
            {
                thumbnailUrl: cicd,
                title: "CI/CD Pipelining"
            }
        ]
    },
    {
        expId:        "jbconnect",
        institute:    "JB Connect Ltd.",
        title:        "Full Stack Developer(Java, React)",
        duration:     "November 2023-...",
        intro:        "Used an enterprise-grade network of backend APIs (Java Spring Boot) over AWS to efficiently sync with fine-tuned mySQL instances. Maintained codebases for device-specific frontends (Java-Kotlin-Android) and also device-independent ones (React Native).",
        thumbnailUrl: jbconnect,
        subExperiences: [
            {
                thumbnailUrl: spring,
                title: "Java Spring Boot, MySQL"
            },
            {
                thumbnailUrl: android,
                title: "Android (Java/Kotlin)"
            },
            {
                thumbnailUrl: reactnative,
                title: "React Native Frontend"
            }
        ]
    }
]

export const academicExperiences = [
    {
        expId:        "iub1",
        institute:    "Independent University Bangladesh",
        title:        "BSc in Computer Science & Engineering",
        duration:     "Spring 2018 to Autumn 2022",
        intro:        "A comprehensive study of core CS principles, with industry-relevant projects in OOP, Database Management, Web Applications.",
        thumbnailUrl: iub

    },
    {
        expId:        "iub2",
        institute:    "IUB",
        title:        "Minor in Artificial Intelligence and Robotics",
        duration:     "2022",
        intro:        "Used Numpy, Scikit-Learn and raw Python to meticulously craft large-scale problems into matrix computations.",
        thumbnailUrl: iub,
        websiteUrl:   'agencylab.github.io/teaching.html'
    }
];