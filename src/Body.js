import Course from "./course";

function Body(){

    const coursename = ["Course 1", "Course 2", "Course 3"];

    return (
        <div>
            <p>This is the body</p>
            {
                coursename.map(course => <Course name = {course}/>)

                // coursename.map(course =>{
                //     return (<Course name = {course}/>)
                // })
            }

            {/* < Course name = "Web Devepolpment" />
            < Course name = "Second React App" /> */}

        </div>
        
    );
}

export default Body;