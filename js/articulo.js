const tabDescription = document.getElementById('tab-description')
const tabSpecification = document.getElementById('tab-specification')
const tabComments = document.getElementById('tab-comments')

const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')


function mostraTab(params) {
    tabDescription.style.display = "none"
    tabSpecification.style.display = "none"
    tabComments.style.display = "none"
    button1.style.color = "var(--cafe-bg-color)"
    button1.style.background = "var(--piel-bg-color)"
    button2.style.color = "var(--cafe-bg-color)"
    button2.style.background = "var(--piel-bg-color)"
    button3.style.color = "var(--cafe-bg-color)"
    button3.style.background = "var(--piel-bg-color)"




    switch (params) {
        case 1:
            tabDescription.style.display = "inline"
            button1.style.background = "var(--cafe-bg-color)"
            button1.style.color = "var(--piel-bg-color)"
            break;
        case 2:
            tabSpecification.style.display = "inline"
            button2.style.background = "var(--cafe-bg-color)"
            button2.style.color = "var(--piel-bg-color)"
            break;
        case 3:
            tabComments.style.display = "flex"
            button3.style.background = "var(--cafe-bg-color)"
            button3.style.color = "var(--piel-bg-color)"
            break;
        default:
            console.log('Sorry, we are out of ${params}.');
    }
}


mostraTab(1)
