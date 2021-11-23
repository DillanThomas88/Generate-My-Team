
const fs = require('fs')

let internSVG = '<svg  height="100px" width="100px"  fill="#4446ec" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g><path d="M50,17.4c5.7,0,10.6,3.2,13.1,8l1.8-1v11.4c0,2.7,2.2,4.8,4.8,4.8h0.4V38H70c-1.3,0-2.4-1.1-2.4-2.4V22.9l4.3-2.3L50,9.5   L28.1,21.1l8.7,4.5C39.3,20.7,44.2,17.4,50,17.4z"></path><path d="M50,19.9c-6.8,0-12.4,5.6-12.4,12.5c0,6.9,5.5,12.5,12.4,12.5c6.8,0,12.4-5.6,12.4-12.5C62.4,25.5,56.8,19.9,50,19.9z"></path><path d="M88.3,78.1L70.1,52.8c0,0-2.4-4.6-8-4.8v0H38v0c-5.7,0.2-8,4.8-8,4.8L11.7,78.1c-0.8,1.1-1.2,2.5-1.2,4   c0,3.9,3.2,7.1,7.1,7.1h9.9l0,1.8c0,1,0.8,1.8,1.8,1.8h41.7c1,0,1.8-0.8,1.8-1.8l0-1.8h9.9c3.9,0,7.1-3.2,7.1-7.1   C89.5,80.6,89.1,79.2,88.3,78.1z M72.6,89L72.6,89H27.4V61.8c0-1.2,1-2.1,2.1-2.1l20.5,0l20.5,0c1.2,0,2.1,1,2.1,2.1V89z"></path><path d="M50,70c-2.6,0-4.8,2.1-4.8,4.8c0,2.7,2.1,4.8,4.8,4.8c2.6,0,4.8-2.2,4.8-4.8C54.8,72.2,52.6,70,50,70z"></path></g></svg>'
let engineerSVG = '<svg  height="100px" width="100px"  fill="#4446ec" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g><path d="M29.947,37.903C29.949,48.959,38.943,60.695,50,60.695c11.058,0,20.052-11.736,20.052-22.792   c0-0.182-0.009-0.362-0.014-0.543H29.961C29.956,37.541,29.947,37.721,29.947,37.903z"></path><path d="M75.87,65.241v12.96c2.639,1.158,4.434,3.807,4.434,6.776V95c4.493-2.179,7.149-4.858,7.149-7.758   C87.453,78.109,82.866,70.051,75.87,65.241z"></path><path d="M66.997,77.583V61.297c-0.64-0.153-1.286-0.289-1.943-0.396c-3.89,2.963-8.742,4.728-13.998,4.728h-2.111   c-5.257,0-10.11-1.765-14-4.728c-0.657,0.106-1.303,0.242-1.943,0.396v16.286H66.997z"></path><path d="M24.129,78.201v-12.96c-6.996,4.81-11.583,12.867-11.583,22.001c0,2.899,2.656,5.58,7.149,7.758V84.978   C19.696,82.008,21.491,79.359,24.129,78.201z"></path><path d="M44.154,20.042c-0.093,0.016-0.187,0.024-0.279,0.024c-0.763,0-1.438-0.546-1.575-1.324l-1.73-9.81   c-6.793,3.443-11.453,10.489-11.453,18.628h-0.834c-1.692,0-3.063,1.371-3.063,3.063s1.372,3.064,3.063,3.064h43.432   c1.693,0,3.065-1.372,3.065-3.064s-1.372-3.063-3.065-3.063h-0.832c0-8.139-4.662-15.185-11.454-18.63l-1.731,9.812   c-0.137,0.778-0.813,1.324-1.576,1.324c-0.093,0-0.186-0.008-0.279-0.024c-0.871-0.155-1.452-0.985-1.296-1.856L56.52,6.977   C55.78,5.792,54.464,5,52.961,5h-5.924c-1.504,0-2.817,0.792-3.561,1.977l1.978,11.208C45.606,19.057,45.025,19.886,44.154,20.042z   "></path><circle cx="27.973" cy="84.655" r="3.671"></circle><circle cx="71.415" cy="84.655" r="3.671"></circle></g></svg>'
let managerSVG = '<svg  height="100px" width="100px"  fill="#4446ec" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M9.811,66.799c-2.18,2.18-3.989,11.696-3.989,11.696c0,7.866,16.045,14.373,37.045,15.597l-8.911-39.391  C23.79,57.646,14.059,62.556,9.811,66.799z M90.191,66.799c-4.246-4.243-13.977-9.152-24.146-12.098l-8.904,39.391  c20.995-1.224,37.038-7.73,37.038-15.597C94.187,78.495,92.379,68.979,90.191,66.799z M50,57.72  c12.314,0,22.296-15.71,22.296-28.629c0-12.926-9.981-23.407-22.296-23.407c-12.313,0-22.296,10.48-22.296,23.407  C27.704,42.01,37.687,57.72,50,57.72z M50.007,62.13c-2.051,0-4.032-0.358-5.927-0.97l4.133,6.683l-3.749,26.334  c1.821,0.087,3.66,0.139,5.543,0.139c1.879,0,3.714-0.058,5.531-0.139L51.79,67.843l4.146-6.691  C54.031,61.771,52.055,62.13,50.007,62.13z"></path></svg>'

let textContent = ``

const createHTML = (appdata, fileName) => {
    appdata.forEach(element => {
        let svg = ''
        let uniqueQ = ''
        let uniqueA = ''
        let id = Math.floor(Math.random() * Math.pow(10,21))

        if(element.role == 'Intern'){svg = internSVG; uniqueQ = 'Education'; uniqueA = element.school}
        else if(element.role == 'Engineer'){svg = engineerSVG; uniqueQ = 'GitHub'; uniqueA = element.github}
        else if(element.role == 'Manager'){svg = managerSVG; uniqueQ = 'Office #'; uniqueA = element.office}
        else{console.log('no svg for this role')}

        let employeeCardEL = (`

<!-- ---------------------------------------------------------------------------------------------------- -->
<!--${element.role.trim()} card header  -->
            <div class="card flex col">
                <div  class="flex col j-center a-start card-top">
                    <div class="title fs-xs">${element.role.trim()}</div>
                    <div class="svg" >${svg} </div>
                    <div class="name fs-xl">${element.name.trim()}</div>
                </div>

<!--${element.role.trim()} card footer  -->
                <div class="card-bottom fs-xs a-center j-between">
                    <div class="flex col a-center p2">
                        <div>ID# <span class="t-primary fs-l p1">${id}</span></div>
                        <div class="m1"><span class=" fs-l ">${element.email.trim()}</span></div>
                    </div>
                    <div class="unique">
                        <div class="t-primary fs-xl fw-700">${uniqueQ}</div>
                        <div class="fs-l fw-500"> ${uniqueA}</div>
                    </div>
                    <div id="asl" class="flex w-200 j-between p2 fs-xs ">
                        <div><span>AGE: </span>${element.age.trim()}</div>
                        <div><span>SEX: </span>${element.sex.trim().toUpperCase()}</div>
                        <div><span>LOC: </span>${element.location.trim().toUpperCase()}</div>
                    </div>            
                </div>
            </div>
        `)
        textContent += employeeCardEL
    });

    fs.writeFileSync(`./${fileName}`, `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./assets/css/reset.css">
        <link rel="stylesheet" href="./assets/css/my.css">
        <link rel="stylesheet" href="./assets/css/style.css">
    </head>
    <body >
        <div class="hidden">
            <svg height='100px' width='100px'  fill="#ffffff" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g><path d="M50,17.4c5.7,0,10.6,3.2,13.1,8l1.8-1v11.4c0,2.7,2.2,4.8,4.8,4.8h0.4V38H70c-1.3,0-2.4-1.1-2.4-2.4V22.9l4.3-2.3L50,9.5   L28.1,21.1l8.7,4.5C39.3,20.7,44.2,17.4,50,17.4z"></path><path d="M50,19.9c-6.8,0-12.4,5.6-12.4,12.5c0,6.9,5.5,12.5,12.4,12.5c6.8,0,12.4-5.6,12.4-12.5C62.4,25.5,56.8,19.9,50,19.9z"></path><path d="M88.3,78.1L70.1,52.8c0,0-2.4-4.6-8-4.8v0H38v0c-5.7,0.2-8,4.8-8,4.8L11.7,78.1c-0.8,1.1-1.2,2.5-1.2,4   c0,3.9,3.2,7.1,7.1,7.1h9.9l0,1.8c0,1,0.8,1.8,1.8,1.8h41.7c1,0,1.8-0.8,1.8-1.8l0-1.8h9.9c3.9,0,7.1-3.2,7.1-7.1   C89.5,80.6,89.1,79.2,88.3,78.1z M72.6,89L72.6,89H27.4V61.8c0-1.2,1-2.1,2.1-2.1l20.5,0l20.5,0c1.2,0,2.1,1,2.1,2.1V89z"></path><path d="M50,70c-2.6,0-4.8,2.1-4.8,4.8c0,2.7,2.1,4.8,4.8,4.8c2.6,0,4.8-2.2,4.8-4.8C54.8,72.2,52.6,70,50,70z"></path></g></svg>
        </div>
        <Header class=" flex j-center a-center fs-xxl h-150 t-light bg-primary">My Team</Header>
        <div class="container flex j-evenly">${textContent}</div>
    </body>
    </html>
    
    `)
}

module.exports = createHTML