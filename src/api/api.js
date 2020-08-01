import $ from "jquery"
const site = "https://gradinator.herokuapp.com";

//documentation
export async function getDocs(){
    return (await fetch(site + "/docs")).json();
}

//course
export async function getCourses(){
    return (await fetch(site + "/courses")).json();
}

export async function enrollCourse(courseId, token) {
    return (await fetch(site + "/gradebook/enroll?courseId="+courseId,{
        headers: { ...token,},
        method: "POST"
    })).json();
}

export async function createCourse(courseData) {
    return(await fetch(site+ "/courses/createCourse?" + $.param(courseData),{
        method: "POST"
    })).json()
}

//gradebook
export async function getGradebookCourses(token){
    return (await fetch(site + "/gradebook", {
       headers: { ...token },
    })).json();
}
export async function getGradebookCourseData(courseId, token){
    return (await fetch(site + "/gradebook/course?courseId="+courseId, {
        headers: { ...token },
    })).json();
}
export async function submitGradebook(assessmentId, changeData, token) {
    return (await fetch(site + "/gradebook/course/editGrade?assessmentId="+assessmentId+"&"+$.param(changeData), {
        headers: { ...token },
        method: "POST"
    })).json();

}

//majors
export async function getMajors(){
    return (await fetch(site + "/majors")).json();
}

//universities
export async function getUniversities(){
    return (await fetch(site + "/universities")).json();
}
