const userLogo  = document.querySelector('#user-logo')
const mainMenu  = document.querySelector('.main-menu')
const learnMore = document.querySelectorAll('.learn-more')
const closeBtn = document.querySelectorAll('.close-item')
const learnMoreLink = document.querySelector('.learn-more-link')
const container = document.querySelector("#container")

userLogo.addEventListener("click",function(){
    mainMenu.classList.toggle('active-main-menu')
    console.log('click')
})



projectData.forEach( ele=> {
    const mainDiv = document.createElement('div')

        mainDiv.classList.add('project')

        // Adding Image  Element and setting its attributes 
        const projectImage = document.createElement('img')
        projectImage.setAttribute('src',ele.image)
        projectImage.classList.add('project-img')

        const detailDiv = document.createElement('div')
        detailDiv.classList.add('project-detail')

            const titleElement = document.createElement('h3')
            titleElement.classList.add('project-title')
            titleElement.textContent = ele.title

            const technologyList = document.createElement('ul')
            technologyList.classList.add('technologies')

            ele.skills.forEach(skill => {
                const listItem = document.createElement('li')
                listItem.textContent = `${skill}`
                technologyList.append(listItem)
                
            })

            const descriptionElement = document.createElement('p')
            descriptionElement.classList.add('project-desc')
            descriptionElement.textContent = ele.description

            
            const linkSectionElement = document.createElement('div')
            linkSectionElement.setAttribute('id','link-section')

                const learnMoreElement = document.createElement('p')
                learnMoreElement.classList.add('learn-more')
                learnMoreElement.textContent = 'Learn More'

                const learnMoreLinkElement = document.createElement('ul')
                learnMoreLinkElement.classList.add('learn-more-link')

                    // live
                    const live = document.createElement('li')
                    live.classList.add('link-item')
                    let a = document.createElement('a')
                    a.setAttribute('href',ele.live)
                    a.setAttribute('target','_blank')
                    a.textContent = 'Live'
                    live.append(a)

                    //Repo
                    const repo = document.createElement('li')
                    repo.classList.add('link-item')
                    a = document.createElement('a')
                    a.setAttribute('href',ele.repo)
                    a.setAttribute('target','_blank')

                    a.textContent = 'Repo'
                    repo.append(a)

                    // Tryout
                    const tryOut = document.createElement('li')
                    tryOut.classList.add('link-item')
                    a = document.createElement('a')
                    a.setAttribute('href',ele.tryOut)
                    a.setAttribute('target','_blank')

                    a.textContent = 'Try Out'
                    tryOut.append(a)

                    const close = document.createElement('li')
                    close.classList.add('link-item')
                    close.classList.add('close-item')
                    close.textContent = 'X'

                    learnMoreLinkElement.append(live)
                    learnMoreLinkElement.append(repo)
                    learnMoreLinkElement.append(tryOut)
                    learnMoreLinkElement.append(close)

                linkSectionElement.append(learnMoreElement)
                linkSectionElement.append(learnMoreLinkElement)

                                
                // ##########   LEARN MORE Event  ##########

                learnMoreElement.addEventListener('click',function(){
                    learnMoreElement.style.display = 'none'
                    console.log(learnMoreLinkElement)
                    learnMoreLinkElement.classList.toggle('learn-more-link-active')
                })
                // ##########   close  Event  ##########

                close.addEventListener('click',function(){
                    
                    learnMoreElement.style.display = 'block'
                    console.log(learnMoreLinkElement)
                    learnMoreLinkElement.classList.toggle('learn-more-link-active')
                })

            detailDiv.append(titleElement)
            detailDiv.append(technologyList)
            detailDiv.append(descriptionElement)
            detailDiv.append(linkSectionElement)

        mainDiv.append(projectImage)
        mainDiv.append(detailDiv)

    // Added main Div to container 
    container.append(mainDiv)

})

