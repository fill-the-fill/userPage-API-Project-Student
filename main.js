const apiManager = new APIManager()
const renderer = new Renderer()
const data = apiManager.data 
let lastUser = {}
renderer.renderDropDownMenu(JSON.parse(localStorage.users || "{}"))

$('#loadData').on('click', function() {
    lastUser = {...data}
    apiManager.loadData()
})

$('#displayData').on('click', function () { 
    if($.isEmptyObject(data)){return}
    renderer.renderPage(data)
})

$('#saveUserPage').on('click', function () {
    const users = JSON.parse(localStorage.users || '{}')
    if($.isEmptyObject(data) || Object.keys(users).includes(data.userId.toString())) {return}
    users[data.userId] = data
    localStorage.users = JSON.stringify(users)
    renderer.renderDropDownMenu({data})
})

$('#loadUserPage').on('click', function () {      
    const userId = $('#drop-down').children("option:selected").data().id 
    if(userId == undefined) {return}  
    lastUser = {...data}
    renderer.renderPage(JSON.parse(localStorage.users)[userId])
})

$('.user-container').on('click','#loadLastUser', function() {
    if($.isEmptyObject(lastUser)){return}
    renderer.renderPage(lastUser)
})