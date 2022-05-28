
const messages = [
    "name field is required",
    "department field is required",
    "course field is required",
    "level field is required",
    "country field is required",
    "date field is required",
    "bio field is required",
   ]

   const errors = []


function  getValue() {

    let name = document.getElementById('name_of_student').value
    let dept = document.getElementById('department').value
    let course = document.getElementById('course').value
    let level = document.getElementById('level').value
    let country = document.getElementById('country').value
    let date = document.getElementById('date_of_birth').value
    let bio = document.getElementById('bio').value
    let btn = document.getElementById('btn').value

    if (name.length === 0) {
        errors.push(messages[0])
    }

    if (dept.length === 0) {
        errors.push(messages[1])
    }

    if (course.length === 0) { 
        errors.push(messages[2])
    }

    if (level.length === 0) {
        errors.push(messages[3])
    }

    if (country.length === 0) {
        errors.push(messages[4])
    }
    
    if (date.length === 0) {
        errors.push(messages[5])
    }

    if (bio.length == 0) {
        errors.push(messages[6])
    }

    if (errors.length > 0) {
        alert(errors.join("\n"))
        return
    }

    let result = `Your details are: \nName: ${name} \nDepartment: ${dept} \nCourse: ${course} \nLevel: ${level} \nCountry: ${country} \nDate of birth: ${date} \nBio: ${bio}i `

    alert(result)
    
}




