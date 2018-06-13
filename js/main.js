document.onload(() => {
    let date = new Date();
    let months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'outubro', 'novembro', 'dezembro'];
    document.getElementById("last-edit").innerHTML = months[date.getMonth()] + '/' + date.getFullYear();
})

